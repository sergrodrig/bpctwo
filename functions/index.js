const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();

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
    const documentoAfter = change.after.data();
    const partidas = documentoAfter.partidas;
    const mapasLocal = partidas.filter((p) => p.local == 6).length;
    const mapasVisita = partidas.filter((p) => p.visita == 6).length;
    const rondasLocal = partidas.reduce((t, p) => t + Number(p.local), 0);
    const rondasVisita = partidas.reduce((t, p) => t + Number(p.visita), 0);
    const resultadoIngresado = true;
    await db.collection("resultados").doc(context.params.resultadoId).set(
      {
        mapasLocal,
        mapasVisita,
        rondasLocal,
        rondasVisita,
        resultadoIngresado,
      },
      { merge: true }
    );
  });
