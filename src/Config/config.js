import firebase from 'firebase';

const DB_CONFIG = {
    apiKey: "AIzaSyDYk-xef5yqLu9faCG4YyqKIqBx4wAKeAo",
    authDomain: "react-notes-36224.firebaseapp.com",
    databaseURL: "https://react-notes-36224.firebaseio.com",
    projectId: "react-notes-36224",
    storageBucket: "react-notes-36224.appspot.com",
    messagingSenderId: "1034338793825"
};

const fire = firebase.initializeApp(DB_CONFIG);

export default fire;