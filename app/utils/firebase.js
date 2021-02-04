import firebase from "firebase/app";

const firebaseConfig={
    apiKey: "AIzaSyCf3MUiEeAlhxO8qHI6mzSxwrnKxCmXRqQ",
    authDomain: "tenedores-72197.firebaseapp.com",
    projectId: "tenedores-72197",
    storageBucket: "tenedores-72197.appspot.com",
    messagingSenderId: "420079697379",
    appId: "1:420079697379:web:4e06dd5960d72373c4b4d6"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig); 