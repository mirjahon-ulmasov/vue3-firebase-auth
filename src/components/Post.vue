<template>
  <router-link :to="{ name: 'PostDetailPage', params: { id: post.id } }">
    <div class="post">
      <img :src="post.imgUrl" alt="Post image" />
      <div class="content">
        <h3>{{ post.title }}</h3>
        <p>{{ description }}</p>
        <div class="author">
          <span>{{ post.author }}</span>
          <span>{{ post.createdDate }}</span>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import { computed } from '@vue/reactivity';
export default {
  props: ['post'],
  setup(props) {
    const description = computed(() => {
      return props.post.description.substr(0, 100) + '...';
    });
    return { description };
  },
};
</script>

<style lang="scss" scoped>
.post {
  max-width: 40rem;
  background-color: #eee;
  margin: 2rem auto;
  display: flex;
  border-radius: 10px;
  transition: 0.3s;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }

  img {
    margin: 0;
    width: 150px;
    height: 150px;
    background-color: #e1e1e1;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  .content {
    width: 30rem;
    padding: 1rem;
    text-align: center;

    h3 {
      font-size: 18px;
    }

    p {
      text-align: left;
      color: #333;
    }

    .author {
      display: flex;
      justify-content: space-between;
      font-style: italic;
      font-weight: bold;
      color: #555;
    }
  }
}
</style>
