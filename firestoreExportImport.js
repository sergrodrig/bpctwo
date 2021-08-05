const { initializeApp, backups, restore } = require("firestore-export-import");
const fs = require("fs");
const serviceAccount = require("./serviceAccount.json");

// RESTORE
if (process.argv[2] === "restore") {
  // ASSIGN AUTO ID
  // lee el archivo data.json, lo parsea con JSON.parse, y se lo pasa al metodo restoreJsonToFirestoreWithAutoId
  if (process.argv[3] === "autoid") {
    (async () => {
      console.log("RESTORE WITH AUTOID");
      const fileContents = fs.readFileSync(
        `${__dirname}/src/data.json`,
        "utf8"
      );
      await restoreJsonToFirestoreWithAutoId(JSON.parse(fileContents));
    })();
  }
  // KEEP JSON ID
  // lee el archivo data.json, lo parsea con JSON.parse, y se lo pasa al metodo restoreJsonToFirestoreWithKeepId
  else if (process.argv[3] === "keepid") {
    (async () => {
      console.log("RESTORE KEEPING ID");
      const fileContents = fs.readFileSync(
        `${__dirname}/src/data.json`,
        "utf8"
      );
      await restoreJsonToFirestoreWithKeepId(JSON.parse(fileContents));
    })();
  }
}
// BACKUP
// llama a la funcion backupAllToJson
else if (process.argv[2] === "backup") {
  (async () => {
    console.log("BACKUP");
    await backupAllToJson();
  })();
}

// restore a JSON to firestore with auto id
async function restoreJsonToFirestoreWithAutoId(collections) {
  try {
    await initializeApp(serviceAccount);
    console.log("App initialized");

    console.log("Restoring JSON");
    Object.keys(collections).forEach(async (collectionKey) => {
      console.log(`Restoring collection ${collectionKey}`);
      const collectionToRestore = {};
      collectionToRestore[collectionKey] = collections[collectionKey];
      await restore(collectionToRestore);
    });
  } catch (error) {
    console.log(error);
  }
}

// restore a JSON to firestore keeping id
// recibe el JSON del archivo data.json
// por cada propiedad del JSON (propiedad "soldados"), genera un nuevo objeto temporal que contiene la data de la propiedad original del archivo data.json
//
async function restoreJsonToFirestoreWithKeepId(collections) {
  try {
    await initializeApp(serviceAccount);
    console.log("App initialized");

    console.log("Restoring JSON");
    Object.keys(collections).forEach(async (collectionKey) => {
      // vamos a usar de ejemplo el key "soldados" por lo tanto: collectionKey = "soldados"

      console.log(`Restoring collection ${collectionKey}`);
      // Output: Restoring collection soldados

      // objeto temporal que se va a subir a firestore al final
      const collectionToRestore = {};

      // en 'collectionToRestore' le asignamos el array del collections original, a una nueva propiedad
      // collectionToRestore['soldados'] = [{id:1, name:elvis}, {id:2, name:cherno}, {id:3, name:chino}]
      collectionToRestore[collectionKey] = collections[collectionKey];

      // le pasamos el objeto temporal a la funcion 'transformDataForFirestore'
      const transformed = transformDataForFirestore(collectionToRestore);

      // hacemos el restore de la data transformada para firestore
      // await restore(collectionToRestore);
      await restore(transformed);
    });
  } catch (error) {
    console.log(error);
  }
}

// backup all collections from firestore to a JSON file
// guarda en el archivo firestoreExport.json un export de todas las collecciones y documentos de firestore del proyecto
async function backupAllToJson() {
  try {
    await initializeApp(serviceAccount);
    console.log("App initialized");

    console.log("Backing up all collections");
    await backups().then((collections) => {
      fs.writeFileSync("./firestoreExport.json", JSON.stringify(collections));
    });
  } catch (error) {
    console.log(error);
  }
}

// convert a json with an id key to a firebase compatible one
function transformDataForFirestore(data) {
  const collections = data;
  delete collections.stats;
  const collectionsById = {};
  Object.keys(collections).forEach((collectionKey) => {
    collectionsById[collectionKey] = {};
    const collection = collections[collectionKey];
    collection.forEach((record) => {
      collectionsById[collectionKey][record.id] = record;
      // delete collectionsById[collectionKey][record.id].id;
    });
  });
  return collectionsById;
}
