import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGOv4xnQFZxWBkCLiHAumh-PBMAnmhIMM",
  authDomain: "stackathon-b3840.firebaseapp.com",
  databaseURL: "https://stackathon-b3840-default-rtdb.firebaseio.com",
  projectId: "stackathon-b3840",
  storageBucket: "stackathon-b3840.appspot.com",
  messagingSenderId: "603884456879",
  appId: "1:603884456879:web:c7d040a1a53ee790403d5a",
  measurementId: "G-3MVHLNV4JP",
};
// initialize firebase app
const app = initializeApp(firebaseConfig);

//  init services
export const db = getFirestore();

// collection reference - specific collection (e.g., table) to pull data from
export const breadTable = "breads";
export const breadRef = collection(db, breadTable);
