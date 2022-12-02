import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyButDhOpDaYwqAWXqUVeTTeGHr7_uBKAkg",
    authDomain: "news-app-5061d.firebaseapp.com",
    projectId: "news-app-5061d",
    storageBucket: "news-app-5061d.appspot.com",
    messagingSenderId: "514903571241",
    appId: "1:514903571241:web:50bc2778cd7512ab1d9538"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {auth};
export default db;