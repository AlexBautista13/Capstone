import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyBjOwZ-IW6I0WVzZrcg__qhZPjy11FvK4w",
    authDomain: "ab-joker-app.firebaseapp.com",
    databaseURL: "https://ab-joker-app.firebaseio.com",
    projectId: "ab-joker-app",
    storageBucket: "ab-joker-app.appspot.com",
    messagingSenderId: "724561551453",
    appId: "1:724561551453:web:ab680cd00fe39015"
};


firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true });

export default firebase;