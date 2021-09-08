const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();
// import firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/auth";
// import "firebase/functions";
// const db = firebase.firestore();
// const functions = firebase.functions();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.actualizarResultado = functions.firestore
  .document("resultados/{resultadoId}")
  .onUpdate(async (change, context) => {
    const documentoActualizado = change.after.data();
    const partidas = documentoActualizado.partidas;
    const equipoLocalId = documentoActualizado.equipoLocal;
    const equipoVisitaId = documentoActualizado.equipoVisita;
    const mapasLocal = partidas.filter((p) => p.local == 6).length;
    const mapasVisita = partidas.filter((p) => p.visita == 6).length;
    const roundsLocal = partidas.reduce((t, p) => t + Number(p.local), 0);
    const roundsVisita = partidas.reduce((t, p) => t + Number(p.visita), 0);

    // actualizacion del documento resultado
    console.log("actualizando documento resultado");
    const resultadoRef = db
      .collection("resultados")
      .doc(context.params.resultadoId);
    await resultadoRef.set(
      {
        mapasLocal,
        mapasVisita,
        roundsLocal,
        roundsVisita,
      },
      { merge: true }
    );

    // referencias del nuevo resultado y de los equipos
    const nuevoResultado = resultadoRef.get();
    const equipoLocalRef = db.collection("equipos").doc(equipoLocalId);
    const equipoVisitaRef = db.collection("equipos").doc(equipoVisitaId);
    const infoEquipoLocal = await equipoLocalRef.get();
    const infoEquipoVisita = await equipoVisitaRef.get();

    // determinar ganador
    const ganador = localEmpateVisita(mapasLocal, mapasVisita);
    const ratio

    // actualizacion del documento del equipo local
    if (ganador === "local") {
      console.log("entrando al if local");
      await equipoLocalRef.set({
        puntos: admin.firestore.FieldValue.increment(3),
        fechasGanadas: admin.firestore.FieldValue.increment(1),
        roundsGanados: admin.firestore.FieldValue.increment(roundsLocal),
        roundsPerdidos: admin.firestore.FieldValue.increment(roundsVisita),
      });
      await equipoVisitaRef.set({
        fechasPerdidas: admin.firestore.FieldValue.increment(1),
        roundsGanados: admin.firestore.FieldValue.increment(roundsVisita),
        roundsPerdidos: admin.firestore.FieldValue.increment(roundsLocal),
      });
    }

    if (ganador === "visita") {
      console.log("entrando al if visita");
      await equipoLocalRef.set({
        puntos: admin.firestore.FieldValue.increment(3),
        fechasPerdidas: admin.firestore.FieldValue.increment(1),
        roundsGanados: admin.firestore.FieldValue.increment(roundsLocal),
        roundsPerdidos: admin.firestore.FieldValue.increment(roundsVisita),
      });
      await equipoVisitaRef.set({
        puntos: admin.firestore.FieldValue.increment(3),
        fechasGanadas: admin.firestore.FieldValue.increment(1),
        roundsGanados: admin.firestore.FieldValue.increment(roundsVisita),
        roundsPerdidos: admin.firestore.FieldValue.increment(roundsLocal),
      });
    }

    if (ganador === "empate") {
      console.log("entrando al if empate");
      console.log(`actualizando al equipo ${equipoLocalId}`);
      await equipoLocalRef.update({
        puntos: admin.firestore.FieldValue.increment(1),
        fechasEmpatadas: admin.firestore.FieldValue.increment(1),
        roundsGanados: admin.firestore.FieldValue.increment(roundsLocal),
        roundsPerdidos: admin.firestore.FieldValue.increment(roundsVisita),
      });
      console.log(`actualizando al visita ${equipoVisitaId}`);
      await equipoVisitaRef.update({
        puntos: admin.firestore.FieldValue.increment(1),
        fechasEmpatadas: admin.firestore.FieldValue.increment(1),
        roundsGanados: admin.firestore.FieldValue.increment(roundsVisita),
        roundsPerdidos: admin.firestore.FieldValue.increment(roundsLocal),
      });
    }
  });

const localEmpateVisita = (ml, mv) => {
  if (ml > mv) return "local";
  else if (ml < mv) return "visita";
  else return "empate";
};

const ratio = (rg, rp) => {
  return rg / rp;
};
