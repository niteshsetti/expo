const firebaseConfig = {
    apiKey: "AIzaSyCx99e55n6FeG8mzZLL9urLRaHCDhjJwBM",
    authDomain: "expo-9b1e0.firebaseapp.com",
    projectId: "expo-9b1e0",
    storageBucket: "expo-9b1e0.appspot.com",
    messagingSenderId: "1029813946781",
    appId: "1:1029813946781:web:cba3bc5003561e77d50774",
    measurementId: "G-YYBGPKHR7W",
    databaseURL: "https://expo-9b1e0-default-rtdb.firebaseio.com"
};
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();