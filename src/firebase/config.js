import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAOczHvj6p2JeevxXCzK7IflFxOK87VGmM',
  authDomain: 'vuex-fb-authentication.firebaseapp.com',
  projectId: 'vuex-fb-authentication',
  storageBucket: 'vuex-fb-authentication.appspot.com',
  messagingSenderId: '952847564746',
  appId: '1:952847564746:web:c8c443810b5a3f00e41933',
};

initializeApp(firebaseConfig);

export const auth = getAuth();
