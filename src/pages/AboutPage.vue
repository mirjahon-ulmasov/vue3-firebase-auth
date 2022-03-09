<template>
  <h1>About Page</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam corrupti
    doloremque nihil officiis adipisci porro tenetur ipsum. Blanditiis soluta
    velit repudiandae ipsa deserunt, libero quod assumenda et dolore quis
    dolorum deleniti aspernatur porro similique, excepturi voluptate? Illum,
    temporibus provident alias atque omnis sunt laudantium voluptas cum.
    Voluptas explicabo corporis quia?
  </p>
  <p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorem
    minima fugiat reiciendis possimus adipisci nesciunt, enim voluptatum
    eligendi, deserunt sit beatae optio soluta esse asperiores ipsum itaque.
    Facilis aliquam magni non, delectus voluptate porro impedit? Aliquid, labore
    a. Libero sint optio quis quam esse rem dolor saepe repellat aut!
  </p>
  <div class="container">
    <div class="row">
      <div class="header">
        <h1>Hello</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quam
          quis aliquam eligendi, officia in voluptatem amet perferendis. Sunt ea
          voluptatem dolore adipisci sequi, praesentium eum ipsa nesciunt
          molestiae aliquam!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
p {
  max-width: 40rem;
  margin: 4rem auto;
  text-align: left;
}

.container {
  background: red;
  padding: 1rem;
  .row {
    background: green;
    padding: 1rem;
    .header {
      background: yellow;
      padding: 1rem;
      h1 {
        color: blue;
        font-size: 40px;
      }
      p {
        color: green;
        font-size: 20px;
      }
    }
  }
}
</style>
