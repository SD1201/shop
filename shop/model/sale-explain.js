import { Http } from "../utils/http.js"

export class SaleExplain {

  static async getFixed() {
    // const explains = await Http.request({
    //   url: `sale_explain/fixed`
    // })
    const explains = [
      {
        "id": 1,
        "fixed": true,
        "text": "发货地：上海",
        "spu_id": null,
        "index": 1,
        "replace_id": null
      },
      {
        "id": 2,
        "fixed": true,
        "text": "物流：顺丰",
        "spu_id": null,
        "index": 2,
        "replace_id": null
      }
    ]
    return explains.map(e=>{
      return e.text
    })
  }
}