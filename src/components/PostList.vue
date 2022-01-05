<template>
  <div v-for="post in posts" :key="post.id">
    <Post :post="post" />
  </div>
</template>

<script>
import Post from './Post.vue';

export default {
  components: { Post },
  props: ['posts'],
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
