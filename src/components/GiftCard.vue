<template>
  <div class="container-fluid">
    <section class="row justify-content-between text-center">
      <div class="col-md-4 card elevation-5">
        <img class="img-fluid" :src="gift.url" alt="No Image Available">
        <p>{{ gift.tag }}</p>
      </div>
    </section>
  </div>
</template>

<script>
import { Gift } from "../models/Gift.js";


export default {
  props: { gift: { type: Gift, required: true } },
  setup() {
    return {};
  },
};
</script>


<style></style>