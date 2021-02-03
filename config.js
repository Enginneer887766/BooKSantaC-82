import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAN0rMU0R547XP_Xq26nT1azTJSWUhFqkE",
  authDomain: "einstein-qutxqd.firebaseapp.com",
  databaseURL: "https://einstein-qutxqd.firebaseio.com",
  projectId: "einstein-qutxqd",
  storageBucket: "einstein-qutxqd.appspot.com",
  messagingSenderId: "62478261116",
  appId: "1:62478261116:web:fb8ee433b13cba29fba2f9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
