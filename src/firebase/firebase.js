import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCwiPByFFhilxz5qT54Bm8g3Ri7D5KPyhQ",
    authDomain: "madware-db.firebaseapp.com",
    databaseURL: "https://madware-db.firebaseio.com",
    projectId: "madware-db",
    storageBucket: "madware-db.appspot.com",
    messagingSenderId: "674871185804",
    appId: "1:674871185804:web:4e0194125bf6f505be86a9"
  };

  export const createUserProfileDocument = async (userAuth, data) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    console.log(snapShot);
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({
      prompt: 'select_account'
  });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;