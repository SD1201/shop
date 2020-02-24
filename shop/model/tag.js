import { Http } from "../utils/http.js"

export class Tag{
  static getSearchTags(){
    const t = [
      {
        "id": 1,
        "title": "hello",
        "highlight": 1,
        "description": null,
        "type": 1
      },
      {
        "id": 3,
        "title": "world",
        "highlight": 0,
        "description": null,
        "type": 1
      },
      {
        "id": 3,
        "title": "shida",
        "highlight": 1,
        "description": null,
        "type": 1
      }
    ]
    return t
    // return Http.request({
    //   url:`tag/type/1`
    // })
  }
}