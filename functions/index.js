const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();

exports.calcularResultadosEncuentro = functions.https.onCall(
  (data, context) => {
    // console.log(data);
    // const docRef = db.collection("resultados").doc(data);
    // const doc = docRef.get();
    // console.log(doc);
    return { text: "hola" };
  }
);

exports.actualizarResultado = functions.firestore
  .document("resultados/{resultadoId}")
  .onUpdate((change, context) => {});

// exports.actualizarResultado = functions.firestore
//   .document("resultados/{resultadoId}")
//   .onUpdate((change, context) => {
//     const documentoAfter = change.after.data();
//     const partidas = documentoAfter.partidas;

//     const mapasLocal = partidas.filter((p) => p.local === 6).length;
//     const mapasVisita = partidas.filter((p) => p.visita === 6).length;
//     const rondasLocal = partidas.reduce((t, p) => t + Number(p.local), 0);
//     const rondasVisita = partidas.reduce((t, p) => t + Number(p.visita), 0);

//     const db = admin.firestore();
//     db.collection("resultados")
//       .doc(context.params.resultadoId)
//       .set(
//         { mapasLocal, mapasVisita, rondasLocal, rondasVisita },
//         { merge: true }
//       );
//   });

// exports.actualizarPosiciones = functions.firestore
//   .document("resultados/{resultadoId}")
//   .onUpdate((change, context) => {
//     const documentoAfter = change.after.data();
//     const partidas = documentoAfter.partidas;

//     const trinfosLocal = partidas.filter((p) => p.local == 6).length;
//     const trinfosVisita = partidas.filter((p) => p.visita == 6).length;
//     const derrotasLocal = partidas.filter((p) => p.local < 6).length;
//     const derrotasVisita = partidas.filter((p) => p.visita < 6).length;
//     let empatesLocal, empatesVisita;
//     empatesLocal = empatesVisita = partidas.filter(
//       (p) => (p.local != 0) == (p.visita != 0)
//     ).length;
//   });
