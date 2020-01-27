import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import * as fb from 'firebase/app'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  created (){
    
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: 'AIzaSyD9NGlyZuO5mlzQnXupqiqZ3OoOQ_famq0',
    authDomain: 'react-evver.firebaseapp.com',
    databaseURL: '://react-evver.firebaseio.com',
    projectId: 'react-evver',
    storageBucket: 'react-evver.appspot.com',
    messagingSenderId: '683482245016',
    appId: '1:683482245016:web:c4955a62c9d90115af6ded',
    measurementId: 'G-HY4MESZ9SW'
  };
  // Initialize Firebase
  fb.initializeApp(firebaseConfig);
  fb.analytics();
  fb.auth().onAuthStateChanged(user =>{
    if (user){
      this.$store.dispatch('autoLoginUser',user)
    }
  }),
  this.$store.dispatch('fetchProducts')


  },
  render: h => h(App)
  
}).$mount('#app')
