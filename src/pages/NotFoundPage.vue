<template>
  <a-result
    status="404"
    title="404"
    sub-title="Sorry, the page you visited does not exist."
  >
    <template #extra>
      <a-button @click="redirect" type="primary">Back Home</a-button>
    </template>
  </a-result>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();

    const redirect = () => {
      router.push({ name: 'HomePage' });
    };
    return {
      redirect,
    };
  },
};
</script>

<style lang="scss" scoped></style>
