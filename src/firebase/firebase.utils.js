import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCQpMueX4T_WrxbYt0H4seigJvtD784uno",
  authDomain: "crown-db-95303.firebaseapp.com",
  projectId: "crown-db-95303",
  storageBucket: "crown-db-95303.appspot.com",
  messagingSenderId: "660138587961",
  appId: "1:660138587961:web:31e4f5fe0bbb321eb31ae8",
  measurementId: "G-G61H7HHDYN"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (err) {
      console.log('error creating user');
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;