<template>
  <div id="nav">
    <router-link :to="{ name: 'HomePage' }">Home</router-link> |
    <router-link :to="{ name: 'AboutPage' }">About</router-link> |
    <template v-if="authIsReady">
      <router-link :to="{ name: 'RegisterPage' }" v-if="!user"
        >Register</router-link
      >
      <template v-if="user">
        <span>Logged as {{ user.email }}</span>
        <button @click="logout">Log out</button>
      </template>
    </template>
  </div>
  <router-view />
</template>

<script>
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { SET_USER } from './store';
export default {
  setup(props, context) {
    const store = useStore();
    const router = useRouter();

    const logout = () => {
      store.dispatch('logout');
      router.push({ name: 'HomePage' });
      store.getters[SET_USER];
    };

    return {
      logout,
      user: computed(() => store.state.user),
      authIsReady: computed(() => store.state.authIsReady),
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 20px;

  a,
  button {
    color: #2c3e50;
    font-weight: bold;
    border-radius: 4px;
    text-decoration: none;
    padding: 0.4rem 0.7rem;
    margin: 0.5rem;
    transition: 0.2s;
    border: none;

    &.router-link-exact-active {
      background: crimson;
      color: #fff;
    }
  }

  button:hover {
    background: #ddd;
  }

  span {
    margin-left: 1rem;
  }
}
</style>
