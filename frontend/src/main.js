import { createApp } from 'vue'
import { initializeApp } from "firebase/app";
import App from './App.vue'
import './index.css'

const firebaseConfig = {

  apiKey: "AIzaSyDbBw-IQfjpkEwb5FzdpcNk54sdEu-APB0",
  authDomain: "collaboration-software-4b2b5.firebaseapp.com",
  projectId: "collaboration-software-4b2b5",
  storageBucket: "collaboration-software-4b2b5.appspot.com",
  messagingSenderId: "19862250100",
  appId: "1:19862250100:web:2a992026c25d77315fe721",
  measurementId: "G-4P6MT74K7L"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);


createApp(App).mount('#app')
