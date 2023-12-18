import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Vuetify
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'

//Firebase
import {initializeApp} from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

const vuetify = createVuetify({
    components,
    directives,
  })

  const firebaseConfig = {
    apiKey: "AIzaSyAj79-hWinMASaCpOv6F3jDvwdPODgEd_4",
    authDomain: "footbustik.firebaseapp.com",
    databaseURL: "https://footbustik-default-rtdb.firebaseio.com",
    projectId: "footbustik",
    storageBucket: "footbustik.appspot.com",
    messagingSenderId: "174159774209",
    appId: "1:174159774209:web:7637cd724c36d5584df600",
    measurementId: "G-Z7PN2RDVPX"
  };
  
  // Initialize Firebase
  initializeApp(firebaseConfig);


createApp(App).use(vuetify).use(store).use(router).mount('#app')
