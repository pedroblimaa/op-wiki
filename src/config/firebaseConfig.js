import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAgIwldnnmQ3vMDhBoW22O6Y0wEULInjnY",
    authDomain: "one-piece-api-d6f3e.firebaseapp.com",
    projectId: "one-piece-api-d6f3e",
    storageBucket: "one-piece-api-d6f3e.appspot.com",
    messagingSenderId: "519450543236",
    appId: "1:519450543236:web:77b5f505e78ea1973aaed1",
    measurementId: "G-1B999P9D53"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const addJsonArray = async (collectionName, jsonArray) => {
    try{
        jsonArray.forEach(item => {
            db.collection(collectionName).add(item)
        })
    } catch (error) {
        console.log(error);
    }
}

const deleteAll = async (collectionName) => {
    try {
        const collectionRef = db.collection(collectionName);
        console.log(collectionRef)
        const querySnapshot = await collectionRef.get();
        const batch = db.batch();

        querySnapshot.forEach((doc) => {
            batch.delete(doc.ref);
        });
        await batch.commit();

        console.log('Deleted all documents in collection: ', collectionName);
    } catch (error) {
        console.log(error)
    }
}

const get = async (collectionName) => {
    const collection = await db.collection(collectionName).get()
    const docs = []

    collection.docs.forEach(doc => {
        docs.push(doc.data())
    })

    return docs
}

const firebaseApi = { addJsonArray, deleteAll, get }

export default firebaseApi