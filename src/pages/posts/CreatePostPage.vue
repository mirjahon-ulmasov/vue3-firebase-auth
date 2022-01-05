<template>
  <h2>Create Post Page</h2>
  <form @submit.prevent="submitHandler">
    <div class="input">
      <p>Title:</p>
      <input type="text" v-model="post.title" required />
    </div>
    <div class="input">
      <p>Description:</p>
      <textarea v-model="post.description" cols="50" rows="4"></textarea>
    </div>
    <div class="input">
      <p>Author:</p>
      <input type="text" v-model="post.author" class="input" required />
    </div>
    <div class="input">
      <p>Image:</p>
      <input
        type="url"
        placeholder="https://image.com"
        v-model="post.imgUrl"
        class="input"
      />
    </div>
    <div class="input">
      <p>Created Date:</p>
      <input type="date" v-model="post.createdDate" />
    </div>
    <div class="term">
      <input type="checkbox" v-model="isAccepted" />
      <label>Accept terms and conditions</label>
    </div>
    <div class="btn">
      <button type="submit" :disabled="!isAccepted">Add Post</button>
    </div>
  </form>
</template>

<script>
import { reactive, ref } from '@vue/reactivity';
import axios from 'axios';

export default {
  setup() {
    const post = reactive({
      title: '',
      description: '',
      author: '',
      imgUrl: '',
      createdDate: null,
    });
    const isAccepted = ref(false);

    const submitHandler = () => {
      if (!post.title || !post.author || !post.createdDate) {
        return;
      }
      axios.post('http://localhost:3000/posts', post).catch(err => {
        console.log(err);
      });
    };
    return { post, isAccepted, submitHandler };
  },
};
</script>

<style lang="scss" scoped>
form {
  width: 30rem;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 1rem;

  .input {
    margin-bottom: 1rem;

    input,
    textarea {
      width: 100%;
      border: none;
      padding: 0.5rem;
      font-size: 16px;
      background-color: #f4f4f4;
      border-bottom: 1px solid #ccc;
    }

    p {
      text-align: left;
      margin: 0;
      font-weight: bold;
    }
  }

  .term {
    text-align: left;
    margin: 1.2rem 0;
    font-size: 15px;

    input {
      margin-right: 7px;
    }
  }

  .btn {
    text-align: center;

    button {
      padding: 0.4rem 0.7rem;
      border: none;
      background-color: rgb(84, 186, 245);
      color: #fff;
      border-radius: 4px;
      font-size: 16px;
      font-weight: bold;
      transition: 0.2s;
      cursor: pointer;

      &:hover {
        background: rgb(71, 156, 206);
      }

      &:disabled {
        background: #ccc;
        cursor: not-allowed;
      }
    }
  }
}
</style>
