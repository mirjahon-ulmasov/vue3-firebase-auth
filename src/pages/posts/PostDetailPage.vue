<template>
  <h2>Post Detail Page</h2>
  <h3>{{ post.title }}</h3>
  <p>{{ post.description }}</p>
  <img :src="post.imgUrl" alt="Image" />
  <p>{{ post.author }}</p>
  <p>{{ post.createdDate }}</p>
</template>

<script>
import axios from 'axios';
import { ref } from '@vue/reactivity';
export default {
  props: ['id'],
  setup(props) {
    const post = ref(null);

    axios(`http://localhost:3000/posts/${props.id}`)
      .then(res => res.data)
      .then(data => (post.value = data));

    return { post };
  },
};
</script>

<style lang="scss" scoped></style>
