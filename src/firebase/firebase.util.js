import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    
        apiKey: "AIzaSyC7Sn9GyNk8t7otjkgwaFqDLr4lr-qTIuU",
        authDomain: "helm-db.firebaseapp.com",
        databaseURL: "https://helm-db.firebaseio.com",
        projectId: "helm-db",
        storageBucket: "helm-db.appspot.com",
        messagingSenderId: "1056716045810",
        appId: "1:1056716045810:web:71263ec14d589d15ffbf6b",
        measurementId: "G-74VX4HGLGK"
   
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;