import {Paging} from "../utils/paging.js"

export class Search{
  static search(g){
    t = {
      "total": 1,
      "count": 10,
      "page": 0,
      "total_page": 1,
      "items": [
        {
          "id": 8,
          "title": "ins复古翠绿NoteBook",
          "subtitle": "林白默默的掏出小本本，将她说的话一次不漏的记了下来。",
          "img": "",
          "for_theme_img": "",
          "price": "29.99",
          "discount_price": "27.8",
          "description": null,
          "tags": "林白推荐",
          "sketch_spec_id": "1",
          "max_purchase_quantity": null,
          "min_purchase_quantity": null
        }
      ]
    }
    return t
    // return new Paging({
    //   url:`search?q=${g}`
    // })
  }
}