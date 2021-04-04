import firebase from 'firebase/app'
import "firebase/firestore";
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDt6eajZxE7U3QkEmHpybClj9a4NUixV7U",
    authDomain: "chat-app-8d1ea.firebaseapp.com",
    projectId: "chat-app-8d1ea",
    storageBucket: "chat-app-8d1ea.appspot.com",
    messagingSenderId: "365459476121",
    appId: "1:365459476121:web:09bae2b61d3e8ca85db208"
}

firebase.initializeApp(firebaseConfig)

export default firebase


