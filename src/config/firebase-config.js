// adding your firebase config here

import firebase from 'firebase/app';
import 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyArcyWV0tbTM8kSSBbZOWt7mN4ZYNMVdCs",
    authDomain: "project-bonappetit-77dfe.firebaseapp.com",
    projectId: "project-bonappetit-77dfe",
    storageBucket: "project-bonappetit-77dfe.appspot.com",
    messagingSenderId: "575446581275",
    appId: "1:575446581275:web:8e49408187e376b936f8be",
    measurementId: "G-8SML511PFR"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
