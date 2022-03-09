<template>
  <h2>Posts Page</h2>
  <div v-if="error">{{ error }}</div>
  <PostList v-else :posts="posts" />
<vue-select :options="['1', '2', '3']" close-on-select></vue-select>
</template>

<script>
import axios from 'axios';
import { ref } from '@vue/reactivity';
import PostList from '../../components/PostList.vue';

export default {
  components: { PostList },
  setup() {
    const posts = ref([]);
    const error = ref(null);

    axios('http://localhost:3000/posts')
      .then(res => res.data)
      .then(data => (posts.value = data))
      .catch(() => {
        error.value = 'An error occured. Please try again later.';
      });

    return { posts, error };
  },
};
</script>

<style lang="scss" scoped></style>
