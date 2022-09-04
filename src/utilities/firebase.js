// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD0CSHFKygKMQRL1Y1AS-m_v4xlnXIlvec",
    authDomain: "vue-full-course-bf0aa.firebaseapp.com",
    projectId: "vue-full-course-bf0aa",
    storageBucket: "vue-full-course-bf0aa.appspot.com",
    messagingSenderId: "649978993504",
    appId: "1:649978993504:web:90223f874cc4cf8af49c05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default {
    name:"firebase"
}