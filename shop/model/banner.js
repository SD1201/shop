import { Http } from "../utils/http.js"

class Banner {

  static locationB = 'b-1'
  static locationG = 'b-2'
  static async getHomeLocationB() {
    return await Http.request({
      url: `banner/names/${Banner.locationB}`
    })
  }

  static async getHomeLocationG() {
    return await Http.request({
      url: `banner/names/${Banner.locationG}`
    })
  }
}

export {
  Banner
}