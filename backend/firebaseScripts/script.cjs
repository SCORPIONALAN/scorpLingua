const clases = require('./clases.json');
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, doc, setDoc } = require('firebase/firestore');
const dotenv = require('dotenv');

dotenv.config();

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function subirClases() {
  try {
    for (let i = 0; i < clases.length; i++) {
      const clase = clases[i];
      const id = `clase-${i.toString().padStart(3, '0')}`; // clase-000, clase-001, clase-002
      const docRef = doc(db, 'clases', id);

      await setDoc(docRef, clase);
      console.log(`Clase guardada con ID personalizado: ${id}`);
    }
    console.log("Todas las clases fueron subidas correctamente con IDs personalizados.");
  } catch (error) {
    console.error("Error al subir las clases:", error);
  }
}

subirClases();
