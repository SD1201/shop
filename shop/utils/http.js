import {config} from "../config/config.js"
import {promisic} from "./util.js"

class Http {
  static async request({url, data, method='GET',callback}){
    const res = await promisic(wx.request)({
      url: `${config.apiBaseUrl}${url}`,
      data: `${data}`,
      method,
      header: {
        appkey: config.appkey
      }
    })
    return res
  }
}

export {
  Http
}