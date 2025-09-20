const { db } = require("../config/firebase");

const User = {
  async create(userData) {
    const ref = db.collection("users").doc();
    await ref.set(userData);
    return { id: ref.id, ...userData };
  },

  async findByEmail(email) {
    const snapshot = await db.collection("users").where("email", "==", email).get();
    if (snapshot.empty) return null;
    return { id: snapshot.docs[0].id, ...snapshot.docs[0].data() };
  },

  async findById(id) {
    const doc = await db.collection("users").doc(id).get();
    return doc.exists ? { id: doc.id, ...doc.data() } : null;
  }
};

module.exports = User;
