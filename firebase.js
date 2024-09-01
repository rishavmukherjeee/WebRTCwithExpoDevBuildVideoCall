// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";
import { initializeFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
  apiKey: "AIzaSyCZpVIyul8_W8VUe1TcaDPMNe6lMUZZV_o",
  authDomain: "webrtc-9c6a5.firebaseapp.com",
  databaseURL: "https://webrtc-9c6a5-default-rtdb.firebaseio.com",
  projectId: "webrtc-9c6a5",
  storageBucket: "webrtc-9c6a5.appspot.com",
  messagingSenderId: "368855339394",
  appId: "1:368855339394:web:6e9eb0275fc107bb4c3f9b",
  measurementId: "G-5L4CQFBDFT"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

const database = getDatabase(app);
export { database };