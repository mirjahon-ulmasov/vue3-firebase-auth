<template>
  <h2>Register Page</h2>
  <form @submit.prevent="submitHandler">
    <div class="input">
      <p>Email:</p>
      <input type="email" v-model="user.email" />
    </div>
    <div class="input">
      <p>Password:</p>
      <input type="password" v-model="user.password" />
    </div>
    <div class="btn">
      <button type="submit">Sign Up</button>
    </div>
    <div class="link">
      <router-link :to="{ name: 'LoginPage' }"
        >Already have an account?</router-link
      >
    </div>
    <p v-if="error">{{ error }}</p>
  </form>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const store = useStore();
    const user = ref({ email: '', password: '' });
    const error = ref();
    const router = useRouter();

    const submitHandler = async () => {
      try {
        await store.dispatch('signup', user.value);
        user.value = { email: '', password: '' };
        router.push({ name: 'HomePage' });
      } catch (err) {
        error.value = err.message;
      }
    };

    return {
      error,
      user,
      submitHandler,
    };
  },
};
</script>

<style lang="scss" scoped>
.link {
  margin-top: 1rem;

  a {
    color: #333;
    font-size: 15px;
    border-bottom: 1px solid transparent;
  }
  a:hover {
    border-bottom: 1px solid #aaa;
  }
}
</style>
