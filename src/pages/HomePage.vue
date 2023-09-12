<template>
  <!-- <button @click="getGifts()">Get Gifts</button> -->
  <div class="container my-2">
    <SearchBar />
  </div>

  <div>
    <GiftForm />
  </div>

  <div class="gifts">
    <GiftCard v-for="g in gifts" :key="g.id" :gift="g" />
    <!-- <div v-for="g in gifts" :key="g.id">{{ g.tag }}</div> -->
  </div>


  <!-- <div class="container-fluid">
    <section class="row justify-content-between text-center">
      <div class="col-md-4 card elevation-5">
        <img class="img-fluid" src="https://media.giphy.com/media/l3fQf1OEAq0iri9RC/giphy.gif" alt="">
        <p>when my code doesn't crash</p>
      </div>
    </section>
  </div> -->
</template>

<script>
import { computed, onMounted, onUnmounted, onUpdated } from "vue";
import Pop from "../utils/Pop.js";
import { logger } from "../utils/Logger.js";
import { giftsService } from "../services/GiftsService.js";
import { AppState } from '../AppState.js'

export default {
  setup() {
    onMounted(getGifts)
    onUpdated()
    onUnmounted()
    async function getGifts() {
      try {
        logger.log('getting gifts')
        await giftsService.getGifts()
      } catch (error) {
        Pop.error(error)
      }
    }
    return {
      getGifts,
      gifts: computed(() => AppState.gifts)
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
