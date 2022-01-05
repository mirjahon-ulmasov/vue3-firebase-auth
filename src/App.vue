<template>
  <div id="nav">
    <router-link :to="{ name: 'HomePage' }">Home</router-link> |
    <router-link :to="{ name: 'AboutPage' }">About</router-link> |
    <router-link :to="{ name: 'RegisterPage' }">Register</router-link>
  </div>
  <router-view />
</template>

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

  a {
    color: #2c3e50;
    font-weight: bold;
    border-radius: 4px;
    text-decoration: none;
    padding: 0.4rem 0.7rem;
    margin: 0.5rem;
    transition: 0.2s;

    &.router-link-exact-active {
      background: crimson;
      color: #fff;
    }
  }
}
</style>
