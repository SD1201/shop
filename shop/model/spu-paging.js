import { Http } from "../utils/http.js"

export class SpuPaging{

  static getLastestPaging(){
    return new Paging({
      url:`spu/latest`
    },3)
  }
}
