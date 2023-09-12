<template>
  <form action="">
    <p>Tag: {{ tag }}</p>
    <input v-model="tag" placeholder="tag">
    <p>url: {{ url }}</p>
    <input v-model="url" placeholder="url">
    <button class="btn btn-primary">submit</button>
  </form>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>


<style></style>