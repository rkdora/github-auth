import firebase from 'firebase'
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "",
  authDomain: "github-auth-6d6da.firebaseapp.com",
  databaseURL: "https://github-auth-6d6da.firebaseio.com",
  projectId: "github-auth-6d6da",
  storageBucket: "github-auth-6d6da.appspot.com",
  messagingSenderId: "",
  appId: ""
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  render: h => h(App),
}).$mount('#app')
