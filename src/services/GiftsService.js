import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js"
import { logger } from "../utils/Logger.js"
import { giftApi, giphyApi } from "./AxiosService.js"

class GiftsService {
  async getGifts() {
    const res = await giftApi.get('api/gifts')
    logger.log('got gifts', res.data)
    AppState.gifts = res.data.map(g => new Gift(g))
  }

  async searchGifts(searchTerm) {
    const res = await giphyApi.get('')
  }

  async clearSearch() {
    AppState.searchTerm = ''
    await giftsService.getGifts()
  }
}

export const giftsService = new GiftsService()