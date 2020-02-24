import {Http} from "../utils/http.js"

export class Category {

  static async getHomeLocationC() {
    return await Http.request({
      url: `category/grid/all`
    })
  }
}