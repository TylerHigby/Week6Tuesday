<template>
  <form @submit.prevent="searchGifts" class="row">
    <div class="col-12 input-group">
      <input v-model="searchTerm" type="text" class="form-control" placeholder="search gifts">
      <button class="btn btn-primary"><i class="mdi mdi-magnify"></i></button>
    </div>
  </form>
  <div v-if="activeSearch" class="mt-2">
    searching results for:

    <span class="border border-primary rounded-pill p-2">{{ activeSearch }} <button @click="clearSearch" class="btn"><i
          class="mdi mdi-close"></i></button></span>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { AppState } from "../AppState.js";
import Pop from "../utils/Pop.js";
import { logger } from "../utils/Logger.js";
import { giftsService } from "../services/GiftsService.js";



export default {
  setup() {
    const searchTerm = ref('')
    return {
      searchTerm,
      activeSearch: computed(() => AppState.searchTerm),
      async searchGifts(event) {
        try {
          logger.log('searching', searchTerm.value)
          await giftsService.searchGifts(searchTerm.value)
        } catch (error) {
          Pop.error(error)
        }
      }
    };
  },
  async clearSearch() {
    try {
      if (await Pop.confirm('Clear search results?')) {
        await giftsService.clearSearch()
        this.searchTerm.value = ''
      }
    } catch (error) {
      Pop.error(error)
    }
  }
};
</script>


<style></style>