const admin = require("firebase-admin");
const serviceAccount = require("./firebaseConfig.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "your-app.appspot.com" // for course file storage
});

const db = admin.firestore(); // Firestore DB
const bucket = admin.storage().bucket(); // File storage

module.exports = { db, bucket };
