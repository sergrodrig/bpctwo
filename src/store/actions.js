import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { docToResource } from "@/helpers";

export default {
  // ---------------------------------------
  // Authentication
  // ---------------------------------------
  initAuthentication({ commit, state }) {
    if (state.authObserverUnsubscribe) state.authObserverUnsubscribe();
    return new Promise((resolve) => {
      const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
        this.dispatch("unsubscribeAuthUserSnapshot");
        if (user) {
          await this.dispatch("fetchAuthUser");
          resolve(user);
        } else {
          resolve(null);
        }
      });
      commit("setAuthObserverUnsubscribe", unsubscribe);
    });
  },
  async registerUserWithEmailAndPassword(
    { dispatch },
    { email, nick, password, avatar = null }
  ) {
    // Crea un usuario en firebase con email provider
    // Luego almacena el usuario en firestore
    const result = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    dispatch("createUser", { id: result.user.uid, email, nick, avatar });
    dispatch("fetchAuthUser");
  },
  signInWithEmailAndPassword(context, { email, password }) {
    // Autentica un usuario en firebase con email provider
    return firebase.auth().signInWithEmailAndPassword(email, password);
  },
  async signInWithGoogle({ dispatch }) {
    // Autentica un usuario en firebase con google provider
    // Luego almacena el usuario en firestore si no existe
    const provider = new firebase.auth.GoogleAuthProvider();
    const response = await firebase.auth().signInWithPopup(provider);
    const user = response.user;
    const userRef = firebase.firestore().collection("users").doc(user.uid);
    const userDoc = await userRef.get();
    if (!userDoc.exists) {
      return dispatch("createUser", {
        id: user.uid,
        nick: user.displayName,
        email: user.email,
        avatar: user.photoURL,
      });
    }
  },
  async signOut({ commit }) {
    // Deslogea un usuario en firebase
    await firebase.auth().signOut();
    commit("setAuthId", null);
  },
  async createUser({ commit }, { id, nick, email, avatar }) {
    // Almacena un usuario en firestore
    const registerAt = firebase.firestore.FieldValue.serverTimestamp();
    const nickLower = nick.toLowerCase();
    email = email.toLowerCase();
    const user = { nick, email, nickLower, avatar, registerAt };
    const userRef = firebase.firestore().collection("users").doc(id);
    userRef.set(user);
    const newUser = await userRef.get();
    commit("setItem", { resource: "users", item: newUser });
    return docToResource(newUser);
  },
  fetchAuthUser: ({ commit }) => {
    const userId = firebase.auth().currentUser?.uid;
    if (!userId) return;
    return new Promise((resolve) => {
      const unsubscribe = firebase
        .firestore()
        .collection("users")
        .doc(userId)
        .onSnapshot((doc) => {
          const item = { ...doc.data(), id: doc.id };
          commit("setItem", { resource: "users", item });
          resolve(item);
          commit("setAuthUserUnsubscribe", unsubscribe);
        });
      commit("setAuthId", userId);
    });
  },
  async unsubscribeAuthUserSnapshot({ state, commit }) {
    if (state.authUserUnsubscribe) {
      state.authUserUnsubscribe();
      commit("setAuthUserUnsubscribe", null);
    }
  },

  // ---------------------------------------
  // Fetch Single Resource
  // ---------------------------------------
  fetchItem({ commit }, { id, resource }) {
    return new Promise((resolve) => {
      const docRef = firebase.firestore().collection(resource).doc(id);
      const doc = docRef.get();
      const item = { ...doc.data(), id: doc.id };
      commit("setItem", { resource, item });
      resolve(item);
      commit("appendUnsubscribe", { docRef });
    });
  },

  fetchAllItems({ commit }, collection) {
    return new Promise((resolve) => {
      firebase
        .firestore()
        .collection(collection)
        .get()
        .then((querySnapshot) => {
          const documents = querySnapshot.docs.map((doc) => {
            const item = { id: doc.id, ...doc.data() };
            commit("setItem", { resource: collection, item });
            return item;
          });
          resolve(documents);
        });
    });
  },
  // fetchItems: ({ dispatch }, { ids, resource }) =>
  //   Promise.all(ids.map((id) => dispatch("fetchItem", { id, resource }))),
};
