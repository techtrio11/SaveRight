import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  CollectionReference,
  DocumentData,
} from "firebase/firestore";
import firebaseConfig from "../../FirebaseConfig";

const getData = (colRef) => {
  let dataCollection = [];

  getDocs(colRef)
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        dataCollection.push({ ...doc.data(), id: doc.id });
      });
    })
    .catch((err) => console.log(err));

  return dataCollection;
};

export default getData;
