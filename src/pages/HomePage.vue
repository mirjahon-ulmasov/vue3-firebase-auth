<template>
  <div id="nav">
    <router-link :to="{ name: 'CreatePostPage' }">Create Post</router-link> |
    <router-link :to="{ name: 'PostsPage' }">Posts</router-link>
  </div>
  <router-view />
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
