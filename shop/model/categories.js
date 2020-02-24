
export class Categories {
  roots = []
  subs = []
  async getAll(){
    // const data = await Http.request({
    //   url:`category/all`
    // })
    const data = await {
      roots: [
        {
          "id": 1,
          "name": "测试数据",
          "is_root": true,
          "img": "http://i2.sleeve.7yue.pro/n11.png",
          "parent_id": null,
          "index": null
        },
        {
          "id": 2,
          "name": "包包",
          "is_root": true,
          "img": "http://i2.sleeve.7yue.pro/m24.png",
          "parent_id": null,
          "index": 1
        }, 
      ],
      "subs": [
        {
          "id": 6,
          "name": "平底鞋",
          "is_root": false,
          "img": "http://i2.sleeve.7yue.pro/m17.png",
          "parent_id": 1,
          "index": null
        },
        {
          "id": 7,
          "name": "凉鞋",
          "is_root": false,
          "img": "http://i2.sleeve.7yue.pro/m26.png",
          "parent_id": 2,
          "index": null
        },
      ]
    }

    this.roots = data.roots
    this.subs = data.subs
  }

  getRoots(){
    return this.roots
  }
  getRoot(rootId){
    return this.roots.find(r=>r.id == rootId)
  }
  getSubs(parentId){
    return this.subs.filter(r => r.parent_id == parentId)
  }
}