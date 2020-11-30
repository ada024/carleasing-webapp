import firebase from 'firebase/app';
import 'firebase/firebase-firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCEsPZsnQ6qao-lS5kIdfr8x89uAHKVPMg",
    authDomain: "carleasing-app.firebaseapp.com",
    databaseURL: "https://carleasing-app.firebaseio.com",
    projectId: "carleasing-app",
    storageBucket: "carleasing-app.appspot.com",
    messagingSenderId: "267380152764",
    appId: "1:267380152764:web:7aa33c29fa504b806973b9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase