const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.actualizarResultado = functions.firestore
  .document("resultados/{resultadoId}")
  .onUpdate((change, context) => {
    const documentoAfter = change.after.data();
    const partidas = documentoAfter.partidas;

    const mapasLocal = partidas.filter((p) => p.local === 6).length;
    const mapasVisita = partidas.filter((p) => p.visita === 6).length;
    const rondasLocal = partidas.reduce((t, p) => t + p.local);
    const rondasVisita = partidas.reduce((t, p) => t + p.visita);

    console.log(rondasLocal.toString());
    console.log(rondasVisita);

    const db = admin.firestore();
    db.collection("resultados")
      .doc(context.params.resultadoId)
      .set(
        { mapasLocal, mapasVisita, rondasLocal, rondasVisita },
        { merge: true }
      );
  });
