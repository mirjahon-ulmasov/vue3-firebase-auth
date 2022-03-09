import { createStore } from 'vuex';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../firebase/config';

export const SET_USER = 'SET_USER';

export const store = createStore({
  state: {
    user: null,
    authIsReady: false,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setAuthIsReady(state, payload) {
      state.authIsReady = payload;
    },
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    [SET_USER](state, payload) {
      console.log('HELLO CONSTANTS');
    },
  },
  actions: {
    async signup(context, { email, password }) {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (res) {
        console.log('Sign up');
        context.commit('setUser', res.user);
      } else {
        throw new Error('Could not complete signup');
      }
    },
    async login(context, { email, password }) {
      const res = await signInWithEmailAndPassword(auth, email, password);
      if (res) {
        console.log('Log in');
        context.commit('setUser', res.user);
      } else {
        throw new Error('Could not complete login');
      }
    },
    async logout(context) {
      await signOut(auth);
      console.log('Log out');
      context.commit('setUser', null);
    },
  },
});

const unsub = onAuthStateChanged(auth, user => {
  store.commit('setAuthIsReady', true);
  store.commit('setUser', user);
  unsub();
});
