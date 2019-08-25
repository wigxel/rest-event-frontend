// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/database';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBOeKGvCzJDssxKmCWB94ADPCv_5G5ZwHQ',
    authDomain: 'rest-event.firebaseapp.com',
    databaseURL: 'https://rest-event.firebaseio.com',
    projectId: 'rest-event',
    storageBucket: '',
    messagingSenderId: '929665849308',
    appId: '1:929665849308:web:dfe8a489c459d010'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase