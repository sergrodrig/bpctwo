import { findById } from "@/helpers";

export default {
  authUser: (state, getters) => {
    return getters.user(state.authId);
  },
  equipo: (state) => {
    return (id) => {
      const equipo = findById(state.equipos, id);
      if (!equipo) return null;
      return {
        ...equipo,
        // get soldados() {
        //   return state.soldados.filter((s) => s.equipo === equipo.id);
        // },
        get encuentros() {
          const encuentros = state.encuentros.filter(
            (e) => e.local === equipo.id || e.visita === equipo.id
          );
          return encuentros;
        },
      };
    };
  },
  // user: (state) => {
  //   return (id) => {
  //     const user = findById(state.users, id);
  //     if (!user) return null;
  //     return {
  //       ...user,
  //       // authUser.posts
  //       get posts() {
  //         return state.posts.filter((post) => post.userId === user.id);
  //       },
  //       // authUser.postsCount
  //       get postsCount() {
  //         return user.postsCount || 0;
  //       },
  //       get threads() {
  //         return state.threads.filter((thread) => thread.userId === user.id);
  //       },
  //       get threadsCount() {
  //         return user.threads?.length || 0;
  //       },
  //     };
  //   };
  // },
};
