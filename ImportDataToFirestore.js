// Predefined Document Id
// JSON example
// {
//     "collectionName": {
//         "firstKey": {
//             "field1": "asdsa",
//             "field2": 21312,
//             "field3": [
//                 "asfsa",
//                 "asfsa",
//                 "asfsa"
//             ],
//         },
//         "secondKey": {
//             "field1": "asdsa",
//             "field2": 21312,
//             "field3": [
//                 "asfsa",
//                 "asfsa",
//                 "asfsa"
//             ],
//         }
//     }
// }

// auto generate document id
// JSON example
// {
//     "collectionName": [
//         {
//             "field1": "asdsa",
//             "field2": 21312,
//             "field3": [
//                 "asfsa",
//                 "asfsa",
//                 "asfsa"
//             ],
//         },
//         {
//             "field1": "asdsa",
//             "field2": 21312,
//             "field3": [
//                 "asfsa",
//                 "asfsa",
//                 "asfsa"
//             ],
//         },
//     ]
// }

const { initializeApp, restore } = require("firestore-export-import");
const serviceAccount = require("./serviceAccountKey.json");
const fs = require("fs");

initializeApp(serviceAccount);

const status = await restore(JSON.parse(backupData), {
  dates: ["date"],
  geos: ["location"],
});
