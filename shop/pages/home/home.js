// pages/home/home.js
import {config} from "../../config/config.js"
import {Theme} from "../../model/theme.js" 
import {Banner} from "../../model/banner.js"
import { Category } from "../../model/category.js"
import { Activity } from "../../model/activity.js"
import { SpuPaging } from "../../model/spu-paging.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    themeA: {
      "id": 1,
      "title": "清凉一夏，折扣季",
      "description": "秋天是金色的。麦穗是金色的，秋阳是金色的。虽然冬快至，但宜人的温度总是让我们心情愉快#我们为您精选了一系列秋冬折扣商品，慢慢挑选吧~",
      "name": "t-1",
      "entrance_img": "http://i2.sleeve.7yue.pro/m2.png",
      "extend": null,
      "internal_top_img": "http://i2.sleeve.7yue.pro/m33.png",
      "title_img": "",
      "tpl_name": "janna",
      "online": true
    },
    themeE: {
      "id": 4,
      "title": "每周上新",
      "description": "风袖`每周上新`活动#每周都有一款折扣商品，每周都有适合你的唯一专属#有Ins复古风装饰；金属CD唱片夹；每周来逛逛，找到你所喜爱的东西",
      "name": "t-2",
      "entrance_img": null,
      "extend": null,
      "internal_top_img": "http://i2.sleeve.7yue.pro/m1.png",
      "title_img": "http://i2.sleeve.7yue.pro/m3.png",
      "tpl_name": null,
      "online": true
    },
    bannerB: {
      "id": 1,
      "name": "b-1",
      "description": "首页顶部主banner",
      "img": null,
      "title": null,
      "items": [{
        "id": 12,
        "img": "http://i2.sleeve.7yue.pro/m1.png",
        "keyword": "t-2",
        "type": 3,
        "name": null,
        "banner_id": 1
      }, {
        "id": 13,
        "img": "http://i1.sleeve.7yue.pro/assets/702f2ce9-5729-4aa4-aeb3-921513327747.png",
        "keyword": "23",
        "type": 1,
        "name": null,
        "banner_id": 1
      }, {
        "id": 14,
        "img": "http://i1.sleeve.7yue.pro/assets/b8e510a1-8340-43c2-a4b0-0e56a40256f9.png",
        "keyword": "24",
        "type": 1,
        "name": null,
        "banner_id": 1
      }]
    },
    bannerG: {
      "id": 2,
      "name": "b-2",
      "description": "热销商品banner",
      "img": "http://i2.sleeve.7yue.pro/m4.png",
      "title": null,
      "items": [
        {
          "id": 5,
          "img": "http://i2.sleeve.7yue.pro/m6.png",
          "keyword": "28",
          "type": 1,
          "name": "left",
          "banner_id": 2
        },
        {
          "id": 6,
          "img": "http://i2.sleeve.7yue.pro/m7.png",
          "keyword": "26",
          "type": 1,
          "name": "right-top",
          "banner_id": 2
        },
        {
          "id": 7,
          "img": "http://i2.sleeve.7yue.pro/m8.png",
          "keyword": "27",
          "type": 1,
          "name": "right-bottom",
          "banner_id": 2
        }
      ]
    },
    grid: [
      {
        "id": 1,
        "title": "服装",
        "img": "http://i1.sleeve.7yue.pro/grid/clothing.png",
        "name": null,
        "category_id": null,
        "root_category_id": 2
      },
      {
        "id": 2,
        "title": "包包",
        "img": "http://i1.sleeve.7yue.pro/grid/bag.png",
        "name": null,
        "category_id": null,
        "root_category_id": 3
      },
      {
        "id": 3,
        "title": "鞋",
        "img": "http://i1.sleeve.7yue.pro/grid/shoes.png",
        "name": null,
        "category_id": null,
        "root_category_id": 1
      },
      {
        "id": 4,
        "title": "饰品",
        "img": "http://i1.sleeve.7yue.pro/grid/jewelry.png",
        "name": null,
        "category_id": null,
        "root_category_id": 5
      },
      {
        "id": 5,
        "title": "居家",
        "img": "http://i1.sleeve.7yue.pro/grid/furniture.png",
        "name": null,
        "category_id": null,
        "root_category_id": 4
      },
      {
        "id": 6,
        "title": "工艺",
        "img": "http://i1.sleeve.7yue.pro/grid/book.png",
        "name": null,
        "category_id": null,
        "root_category_id": 24
      }
    ],
    activityD: {
      "id": 2,
      "title": "夏日好礼送不停",
      "entrance_img": "http://i2.sleeve.7yue.pro/m14.png",
      "online": true,
      "remark": "限服装、鞋、文具等商品",
      "start_time": null,
      "end_time": null
    },
    themeESpu: [
      {
        "id": 25,
        "title": "复古双色沙发",
        "subtitle": "双色可选，经典青黄两色",
        "category_id": 35,
        "root_category_id": 4,
        "price": "3999",
        "img": "http://i2.sleeve.7yue.pro/h3.png",
        "for_theme_img": "",
        "description": null,
        "discount_price": null,
        "tags": "复刻经典$双色可选",
        "is_test": true,
        "online": true,
        "sku_list": [
          {
            "id": 36,
            "price": 3999,
            "discount_price": null,
            "online": true,
            "img": "http://i2.sleeve.7yue.pro/h4.png",
            "title": "复古双色沙发（藏青色）",
            "spu_id": 25,
            "category_id": 35,
            "root_category_id": null,
            "specs": [
              {
                "key_id": 1,
                "key": "颜色",
                "value_id": 2,
                "value": "藏青色"
              },
              {
                "key_id": 7,
                "key": "双色沙发尺寸（非标）",
                "value_id": 32,
                "value": "1.5米 x 1米"
              }
            ],
            "code": "25$1-2#7-32",
            "stock": 87
          },
          {
            "id": 37,
            "price": 3999,
            "discount_price": null,
            "online": true,
            "img": "http://i2.sleeve.7yue.pro/h3.png",
            "title": "复古双色沙发 (米黄色）",
            "spu_id": 25,
            "category_id": 35,
            "root_category_id": null,
            "specs": [
              {
                "key_id": 1,
                "key": "颜色",
                "value_id": 35,
                "value": "米黄色"
              },
              {
                "key_id": 7,
                "key": "双色沙发尺寸（非标）",
                "value_id": 33,
                "value": "2米 x 1米"
              }
            ],
            "code": "25$1-35#7-33",
            "stock": 56
          }
        ],
        "spu_img_list": [
          {
            "id": 88,
            "img": "http://i2.sleeve.7yue.pro/h3.png",
            "spu_id": 25
          },
          {
            "id": 89,
            "img": "http://i2.sleeve.7yue.pro/h2.png",
            "spu_id": 25
          },
          {
            "id": 90,
            "img": "http://i2.sleeve.7yue.pro/h4.png",
            "spu_id": 25
          }
        ],
        "spu_detail_img_list": [
        ],
        "sketch_spec_id": 1,
        "default_sku_id": null
      },
      {
        "id": 26,
        "title": "SemiConer柔质沙发",
        "subtitle": "窝在沙发上，一杯红酒配电影",
        "category_id": 35,
        "root_category_id": 4,
        "price": "4799",
        "img": "http://i2.sleeve.7yue.pro/3.png",
        "for_theme_img": "",
        "description": null,
        "discount_price": "4200",
        "tags": "",
        "is_test": true,
        "online": true,
        "sku_list": [
          {
            "id": 38,
            "price": 4799,
            "discount_price": 4299,
            "online": true,
            "img": "http://i2.sleeve.7yue.pro/3.png",
            "title": "SemiConer柔质沙发（长款）",
            "spu_id": 26,
            "category_id": 35,
            "root_category_id": 4,
            "specs": [
              {
                "key_id": 1,
                "key": "颜色",
                "value_id": 27,
                "value": "金色"
              },
              {
                "key_id": 7,
                "key": "双色沙发尺寸（非标）",
                "value_id": 33,
                "value": "2米 x 1米"
              }
            ],
            "code": "26$1-27#7-33",
            "stock": 7
          },
          {
            "id": 39,
            "price": 4799,
            "discount_price": null,
            "online": true,
            "img": "http://i2.sleeve.7yue.pro/3.png",
            "title": "SemiConer柔质沙发 （L型）",
            "spu_id": 26,
            "category_id": 35,
            "root_category_id": 4,
            "specs": [
              {
                "key_id": 1,
                "key": "颜色",
                "value_id": 27,
                "value": "金色"
              },
              {
                "key_id": 7,
                "key": "双色沙发尺寸（非标）",
                "value_id": 34,
                "value": "L型 2米 + 0.8米"
              }
            ],
            "code": "26$1-27#7-34",
            "stock": 7
          },
          {
            "id": 40,
            "price": 4799,
            "discount_price": 4299,
            "online": true,
            "img": "http://i2.sleeve.7yue.pro/3.png",
            "title": "SemiConer柔质沙发（短款）",
            "spu_id": 26,
            "category_id": 35,
            "root_category_id": 4,
            "specs": [
              {
                "key_id": 1,
                "key": "颜色",
                "value_id": 27,
                "value": "金色"
              },
              {
                "key_id": 7,
                "key": "双色沙发尺寸（非标）",
                "value_id": 32,
                "value": "1.5米 x 1米"
              }
            ],
            "code": "26$1-27#7-32",
            "stock": 6
          }
        ],
        "spu_img_list": [
          {
            "id": 150,
            "img": "http://i2.sleeve.7yue.pro/3.png",
            "spu_id": 26
          }
        ],
        "spu_detail_img_list": [
        ],
        "sketch_spec_id": 1,
        "default_sku_id": null
      },
      {
        "id": 28,
        "title": "Ins复古金色落地灯",
        "subtitle": "Instagram复古台灯，就在此刻回到过去，找寻逝去的记忆",
        "category_id": 23,
        "root_category_id": 4,
        "price": "999",
        "img": "http://i2.sleeve.7yue.pro/a9.png",
        "for_theme_img": "",
        "description": null,
        "discount_price": null,
        "tags": "Ins$复古流行",
        "is_test": true,
        "online": true,
        "sku_list": [
          {
            "id": 43,
            "price": 999,
            "discount_price": null,
            "online": true,
            "img": "http://i2.sleeve.7yue.pro/a9.png",
            "title": "Ins复古金色落地灯（落地灯）",
            "spu_id": 28,
            "category_id": 23,
            "root_category_id": 4,
            "specs": [
              {
                "key_id": 1,
                "key": "颜色",
                "value_id": 27,
                "value": "金色"
              },
              {
                "key_id": 8,
                "key": "台灯高低",
                "value_id": 38,
                "value": "落地灯"
              }
            ],
            "code": "28$1-27#8-38",
            "stock": 19
          },
          {
            "id": 44,
            "price": 999,
            "discount_price": null,
            "online": true,
            "img": "http://i2.sleeve.7yue.pro/a9.png",
            "title": "Ins复古金色落地灯 （台灯）",
            "spu_id": 28,
            "category_id": 23,
            "root_category_id": 4,
            "specs": [
              {
                "key_id": 1,
                "key": "颜色",
                "value_id": 27,
                "value": "金色"
              },
              {
                "key_id": 8,
                "key": "台灯高低",
                "value_id": 39,
                "value": "台灯"
              }
            ],
            "code": "28$1-27#8-39",
            "stock": 19
          }
        ],
        "spu_img_list": [
          {
            "id": 141,
            "img": "http://i2.sleeve.7yue.pro/a9.png",
            "spu_id": 28
          }
        ],
        "spu_detail_img_list": [
        ],
        "sketch_spec_id": 8,
        "default_sku_id": null
      },
      {
        "id": 27,
        "title": "Mier双色靠椅",
        "subtitle": "安静的午后，一杯清茶，追忆似水年华。看清风浮动，看落日余晖",
        "category_id": 35,
        "root_category_id": 4,
        "price": "1299",
        "img": "http://i2.sleeve.7yue.pro/h1.png",
        "for_theme_img": "http://i1.sleeve.7yue.pro/assets/f6c9fce8-626f-44c0-a709-3f6ef9f3fbef.png",
        "description": null,
        "discount_price": null,
        "tags": "",
        "is_test": true,
        "online": true,
        "sku_list": [
          {
            "id": 41,
            "price": 1399,
            "discount_price": null,
            "online": true,
            "img": "http://i2.sleeve.7yue.pro/h1.png",
            "title": "Mier双色靠椅（海蓝色）",
            "spu_id": 27,
            "category_id": 35,
            "root_category_id": 4,
            "specs": [
              {
                "key_id": 1,
                "key": "颜色",
                "value_id": 36,
                "value": "海蓝色"
              }
            ],
            "code": "27$1-36",
            "stock": 67
          },
          {
            "id": 42,
            "price": 1399,
            "discount_price": null,
            "online": true,
            "img": "http://i2.sleeve.7yue.pro/h1.png",
            "title": "Mier双色靠椅 （象牙白）",
            "spu_id": 27,
            "category_id": 35,
            "root_category_id": 4,
            "specs": [
              {
                "key_id": 1,
                "key": "颜色",
                "value_id": 37,
                "value": "象牙白"
              }
            ],
            "code": "27$1-37",
            "stock": 13
          }
        ],
        "spu_img_list": [
          {
            "id": 190,
            "img": "http://i2.sleeve.7yue.pro/h1.png",
            "spu_id": 27
          }
        ],
        "spu_detail_img_list": [
        ],
        "sketch_spec_id": 1,
        "default_sku_id": null
      },
      {
        "id": 23,
        "title": "双色牛仔裤",
        "subtitle": "秋冬新款，做一个Cool Boy",
        "category_id": 15,
        "root_category_id": 2,
        "price": "1399",
        "img": "http://i2.sleeve.7yue.pro/n11.png",
        "for_theme_img": "http://i1.sleeve.7yue.pro/assets/702f2ce9-5729-4aa4-aeb3-921513327747.png",
        "description": null,
        "discount_price": null,
        "tags": "",
        "is_test": true,
        "online": true,
        "sku_list": [
          {
            "id": 30,
            "price": 1399,
            "discount_price": null,
            "online": true,
            "img": "http://i2.sleeve.7yue.pro/n12.png",
            "title": "双色百褶裙（棕色）",
            "spu_id": 23,
            "category_id": 15,
            "root_category_id": 2,
            "specs": [
              {
                "key_id": 1,
                "key": "颜色",
                "value_id": 24,
                "value": "棕色"
              },
              {
                "key_id": 4,
                "key": "尺码",
                "value_id": 14,
                "value": "小号 S"
              }
            ],
            "code": "23$1-24#4-14",
            "stock": 69
          },
          {
            "id": 31,
            "price": 1399,
            "discount_price": null,
            "online": true,
            "img": "http://i2.sleeve.7yue.pro/n14.png",
            "title": "双色百褶裙（鹅暖青）",
            "spu_id": 23,
            "category_id": 15,
            "root_category_id": 2,
            "specs": [
              {
                "key_id": 1,
                "key": "颜色",
                "value_id": 30,
                "value": "鹅暖青"
              },
              {
                "key_id": 4,
                "key": "尺码",
                "value_id": 15,
                "value": "中号 M"
              }
            ],
            "code": "23$1-30#4-15",
            "stock": 7
          },
          {
            "id": 32,
            "price": 1399,
            "discount_price": null,
            "online": true,
            "img": "http://i2.sleeve.7yue.pro/n13.png",
            "title": "双色百褶裙（鹅暖青 小号）",
            "spu_id": 23,
            "category_id": 15,
            "root_category_id": 2,
            "specs": [
              {
                "key_id": 1,
                "key": "颜色",
                "value_id": 30,
                "value": "鹅暖青"
              },
              {
                "key_id": 4,
                "key": "尺码",
                "value_id": 14,
                "value": "小号 S"
              }
            ],
            "code": "23$1-30#4-14",
            "stock": 8
          }
        ],
        "spu_img_list": [
          {
            "id": 186,
            "img": "http://i2.sleeve.7yue.pro/n13.png",
            "spu_id": 23
          },
          {
            "id": 187,
            "img": "http://i2.sleeve.7yue.pro/n12.png",
            "spu_id": 23
          },
          {
            "id": 189,
            "img": "http://i2.sleeve.7yue.pro/n11.png",
            "spu_id": 23
          }
        ],
        "spu_detail_img_list": [
        ],
        "sketch_spec_id": 1,
        "default_sku_id": null
      },
      {
        "id": 8,
        "title": "Ins复古碎花NoteBook",
        "subtitle": "林白默默的掏出小本本，将她说的话一次不漏的记了下来。",
        "category_id": 32,
        "root_category_id": 24,
        "price": "29.99",
        "img": "http://i2.sleeve.7yue.pro/m19.png",
        "for_theme_img": "http://i1.sleeve.7yue.pro/assets/b6442702-4810-46cb-bb0b-f4602d38e4ff.png",
        "description": null,
        "discount_price": "27.8",
        "tags": "林白推荐",
        "is_test": false,
        "online": true,
        "sku_list": [
          {
            "id": 47,
            "price": 29,
            "discount_price": 20,
            "online": true,
            "img": "http://i2.sleeve.7yue.pro/m19.png",
            "title": "ins复古印花NoteBook （一盒30）",
            "spu_id": 8,
            "category_id": 32,
            "root_category_id": 24,
            "specs": [
              {
                "key_id": 1,
                "key": "颜色",
                "value_id": 41,
                "value": "青草绿"
              },
              {
                "key_id": 6,
                "key": "数量",
                "value_id": 28,
                "value": "一盒30个"
              }
            ],
            "code": "8$1-41#6-28",
            "stock": 19
          },
          {
            "id": 48,
            "price": 29,
            "discount_price": 27,
            "online": true,
            "img": "http://i2.sleeve.7yue.pro/m19.png",
            "title": "ins复古印花NoteBook （一盒50个）",
            "spu_id": 8,
            "category_id": 32,
            "root_category_id": 24,
            "specs": [
              {
                "key_id": 1,
                "key": "颜色",
                "value_id": 41,
                "value": "青草绿"
              },
              {
                "key_id": 6,
                "key": "数量",
                "value_id": 29,
                "value": "一盒50个"
              }
            ],
            "code": "8$1-41#6-29",
            "stock": 89
          }
        ],
        "spu_img_list": [
          {
            "id": 177,
            "img": "http://i2.sleeve.7yue.pro/m19.png",
            "spu_id": 8
          },
          {
            "id": 179,
            "img": "http://i2.sleeve.7yue.pro/m20.png",
            "spu_id": 8
          }
        ],
        "spu_detail_img_list": [
        ],
        "sketch_spec_id": 1,
        "default_sku_id": null
      },
      {
        "id": 24,
        "title": "秋冬新款驼色大衣",
        "subtitle": "2020新款，暖暖过秋冬",
        "category_id": 16,
        "root_category_id": 2,
        "price": "2999",
        "img": "http://i2.sleeve.7yue.pro/n3.png",
        "for_theme_img": "http://i1.sleeve.7yue.pro/assets/b8e510a1-8340-43c2-a4b0-0e56a40256f9.png",
        "description": null,
        "discount_price": "2699",
        "tags": "经典单色",
        "is_test": true,
        "online": true,
        "sku_list": [
          {
            "id": 33,
            "price": 2799,
            "discount_price": 1799,
            "online": true,
            "img": "http://i2.sleeve.7yue.pro/n3.png",
            "title": "秋冬新款驼色大衣",
            "spu_id": 24,
            "category_id": 16,
            "root_category_id": 2,
            "specs": [
              {
                "key_id": 1,
                "key": "颜色",
                "value_id": 31,
                "value": "驼色"
              },
              {
                "key_id": 4,
                "key": "尺码",
                "value_id": 14,
                "value": "小号 S"
              }
            ],
            "code": "24$1-31#4-14",
            "stock": 70
          },
          {
            "id": 34,
            "price": 2699,
            "discount_price": 1799,
            "online": true,
            "img": "http://i2.sleeve.7yue.pro/3.png",
            "title": "秋冬新款驼色大衣（驼色 M号）",
            "spu_id": 24,
            "category_id": 16,
            "root_category_id": 2,
            "specs": [
              {
                "key_id": 1,
                "key": "颜色",
                "value_id": 31,
                "value": "驼色"
              },
              {
                "key_id": 4,
                "key": "尺码",
                "value_id": 15,
                "value": "中号 M"
              }
            ],
            "code": "24$1-31#4-15",
            "stock": 70
          },
          {
            "id": 35,
            "price": 2999,
            "discount_price": 1699,
            "online": true,
            "img": "http://i2.sleeve.7yue.pro/3.png",
            "title": "秋冬新款驼色大衣 （L号）",
            "spu_id": 24,
            "category_id": 16,
            "root_category_id": 2,
            "specs": [
              {
                "key_id": 1,
                "key": "颜色",
                "value_id": 31,
                "value": "驼色"
              },
              {
                "key_id": 4,
                "key": "尺码",
                "value_id": 16,
                "value": "大号  L"
              }
            ],
            "code": "24$1-31#4-16",
            "stock": 47
          }
        ],
        "spu_img_list": [
          {
            "id": 172,
            "img": "http://i2.sleeve.7yue.pro/n3.png",
            "spu_id": 24
          }
        ],
        "spu_detail_img_list": [
        ],
        "sketch_spec_id": 1,
        "default_sku_id": null
      },
      {
        "id": 6,
        "title": "Sleeve风袖说牛仔系列",
        "subtitle": "Sleeve风袖说当季经典款",
        "category_id": 14,
        "root_category_id": 2,
        "price": "1799",
        "img": "http://i2.sleeve.7yue.pro/n14.png",
        "for_theme_img": "",
        "description": null,
        "discount_price": "",
        "tags": "包邮$热门",
        "is_test": true,
        "online": true,
        "sku_list": [
          {
            "id": 27,
            "price": 1799,
            "discount_price": null,
            "online": true,
            "img": "http://i2.sleeve.7yue.pro/n14.png",
            "title": "风袖说 Sleeven牛仔 ",
            "spu_id": 6,
            "category_id": 14,
            "root_category_id": 2,
            "specs": [
              {
                "key_id": 1,
                "key": "颜色",
                "value_id": 12,
                "value": "黑色"
              },
              {
                "key_id": 4,
                "key": "尺码",
                "value_id": 14,
                "value": "小号 S"
              }
            ],
            "code": "6$1-12#4-14",
            "stock": 70
          },
          {
            "id": 28,
            "price": 1799,
            "discount_price": null,
            "online": true,
            "img": "http://i2.sleeve.7yue.pro/n15.png",
            "title": "风袖说 Sleeve牛仔 ",
            "spu_id": 6,
            "category_id": 14,
            "root_category_id": 2,
            "specs": [
              {
                "key_id": 1,
                "key": "颜色",
                "value_id": 12,
                "value": "黑色"
              },
              {
                "key_id": 4,
                "key": "尺码",
                "value_id": 15,
                "value": "中号 M"
              }
            ],
            "code": "6$1-12#4-15",
            "stock": 70
          },
          {
            "id": 29,
            "price": 1799,
            "discount_price": null,
            "online": true,
            "img": "http://i2.sleeve.7yue.pro/n16.png",
            "title": "风袖说 Sleeve牛仔 ",
            "spu_id": 6,
            "category_id": 14,
            "root_category_id": 2,
            "specs": [
              {
                "key_id": 1,
                "key": "颜色",
                "value_id": 12,
                "value": "黑色"
              },
              {
                "key_id": 4,
                "key": "尺码",
                "value_id": 16,
                "value": "中号 L"
              }
            ],
            "code": "6$1-12#4-16",
            "stock": 70
          }
        ],
        "spu_img_list": [
          {
            "id": 43,
            "img": "http://i2.sleeve.7yue.pro/n15.png",
            "spu_id": 6
          },
          {
            "id": 44,
            "img": "http://i2.sleeve.7yue.pro/n16.png",
            "spu_id": 6
          }
        ],
        "spu_detail_img_list": [
        ],
        "sketch_spec_id": 1,
        "default_sku_id": 5
      },
      {
        "id": 3,
        "title": "抹茶小橡皮",
        "subtitle": "小作文写错了，用它擦一擦",
        "category_id": 32,
        "root_category_id": 24,
        "price": "29.99",
        "img": "http://i2.sleeve.7yue.pro/m17.png",
        "for_theme_img": "https://gitee.com/lrelia7/sleeve-static/raw/master/theme/spu2.png",
        "description": null,
        "discount_price": "17.00",
        "tags": "一飞推荐",
        "is_test": false,
        "online": true,
        "sku_list": [
          {
            "id": 45,
            "price": 22,
            "discount_price": 17,
            "online": true,
            "img": "http://i2.sleeve.7yue.pro/m17.png",
            "title": "抹茶小橡皮 （一盒30个）",
            "spu_id": 3,
            "category_id": 32,
            "root_category_id": 24,
            "specs": [
              {
                "key_id": 1,
                "key": "颜色",
                "value_id": 40,
                "value": "抹茶绿"
              },
              {
                "key_id": 6,
                "key": "数量",
                "value_id": 28,
                "value": "一盒30个"
              }
            ],
            "code": "3$1-40#6-28",
            "stock": 120
          },
          {
            "id": 46,
            "price": 22,
            "discount_price": 20,
            "online": true,
            "img": "http://i2.sleeve.7yue.pro/m17.png",
            "title": "抹茶小橡皮（一盒50个）",
            "spu_id": 3,
            "category_id": 32,
            "root_category_id": 24,
            "specs": [
              {
                "key_id": 1,
                "key": "颜色",
                "value_id": 40,
                "value": "抹茶绿"
              },
              {
                "key_id": 6,
                "key": "数量",
                "value_id": 29,
                "value": "一盒50个"
              }
            ],
            "code": "3$1-40#6-29",
            "stock": 8
          }
        ],
        "spu_img_list": [
          {
            "id": 107,
            "img": "http://i2.sleeve.7yue.pro/m17.png",
            "spu_id": 3
          },
          {
            "id": 108,
            "img": "http://i2.sleeve.7yue.pro/m18.png",
            "spu_id": 3
          }
        ],
        "spu_detail_img_list": [
        ],
        "sketch_spec_id": 1,
        "default_sku_id": null
      }
    ],
    themeF: {
      "id": 5,
      "title": "风袖甄选",
      "description": "甄选",
      "name": "t-3",
      "entrance_img": "http://i2.sleeve.7yue.pro/m9.png",
      "extend": null,
      "internal_top_img": "http://i2.sleeve.7yue.pro/m11.png",
      "title_img": "",
      "tpl_name": "diana",
      "online": true
    },
    themeH: {
      "id": 6,
      "title": "时尚穿搭",
      "description": "帅点才有女朋友",
      "name": "t-4",
      "entrance_img": "http://i2.sleeve.7yue.pro/m10.png",
      "extend": null,
      "internal_top_img": "http://i2.sleeve.7yue.pro/m12.png",
      "title_img": "",
      "tpl_name": "irelia",
      "online": true
    },
    spuPaging: null,
    spuI: 3,
    loadingType: 'loading'
  },
  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    
    this.initAllData()
    this.initBottomSpuList()
  },

  async initBottomSpuList() {
    let slide0 = [{
      "id": 23,
      "title": "双色牛仔裤",
      "subtitle": "秋冬新款，做一个Cool Boy",
      "img": "http://i2.sleeve.7yue.pro/n11.png",
      "for_theme_img": "http://i1.sleeve.7yue.pro/assets/702f2ce9-5729-4aa4-aeb3-921513327747.png",
      "price": "1399",
      "discount_price": null,
      "description": null,
      "tags": "",
      "sketch_spec_id": "1",
      "max_purchase_quantity": null,
      "min_purchase_quantity": null
    }, {
      "id": 10,
      "title": "碳素墨水",
      "subtitle": "虽然我们早已不再使用钢笔书写，但钢笔在纸上划过的笔触永远是键盘无法替代的。一只钢笔+一瓶墨水在一个安静的午后，写写内心的故事。",
      "img": "http://i2.sleeve.7yue.pro/m24.png",
      "for_theme_img": "",
      "price": "80.00",
      "discount_price": "69.00",
      "description": null,
      "tags": "",
      "sketch_spec_id": null,
      "max_purchase_quantity": null,
      "min_purchase_quantity": null
    }, {
      "id": 3,
      "title": "抹茶小橡皮",
      "subtitle": "小作文写错了，用它擦一擦",
      "img": "http://i2.sleeve.7yue.pro/m17.png",
      "for_theme_img": "https://gitee.com/lrelia7/sleeve-static/raw/master/theme/spu2.png",
      "price": "29.99",
      "discount_price": "17.00",
      "description": null,
      "tags": "一飞推荐",
      "sketch_spec_id": "1",
      "max_purchase_quantity": null,
      "min_purchase_quantity": null
    }, {
      "id": 15,
      "title": "多彩别针、回形针",
      "subtitle": "每盒70个，可爱多彩",
      "img": "http://i2.sleeve.7yue.pro/m26.png",
      "for_theme_img": null,
      "price": "24",
      "discount_price": "19.9",
      "description": null,
      "tags": "三色可选",
      "sketch_spec_id": "1",
      "max_purchase_quantity": null,
      "min_purchase_quantity": null
    }, {
      "id": 14,
      "title": "Ins 复古小夹子（Mini)",
      "subtitle": "静静的，享受时光的流逝",
      "img": "http://i2.sleeve.7yue.pro/m23.png",
      "for_theme_img": null,
      "price": "19.9",
      "discount_price": null,
      "description": null,
      "tags": "三色可选",
      "sketch_spec_id": null,
      "max_purchase_quantity": null,
      "min_purchase_quantity": null
    }]
    wx.lin.renderWaterFlow(slide0)
    this.data.spuPaging = slide0
    const paging = SpuPaging.getLastestPaging()
    const data = paging.getMoreData()
    if(!data){
      return
    }
    wx.lin.renderWaterFlow(data.items)
  },

  async initAllData() {
    const theme = new Theme()
    await theme.getThemes()
    const themeA = await theme.getHomeLocationA()
    const themeE = await theme.getHomeLocationE()
    const themeF = await theme.getHomeLocationF()
    const themeH = await theme.getHomeLocationH()
    let themeESpu = []
    if (themeE.online) {
      const data = await Theme.getHomeLocationESpu()
      if (data) {
        themeESpu = data.spu_list.slice(0,8)
      }
    }
    
    const bannerB = await Banner.getHomeLocationB()
    const bannerG = await Banner.getHomeLocationG()
    const grid = await Category.getHomeLocationC()
    const activityD = await Activity.getHomeLocationD()
    // this.setData({
    //   themeA,
    //   themeE,
    //   themeF,
    //   themeH,
    //   themeESpu,
    //   bannerB,
    //   bannerG,
    //   grid,
    //   activityD
    // })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: async function () {

    if(this.data.spuI > 0) {
      let slide1 = [{
        "id": 8,
        "title": "Ins复古碎花NoteBook",
        "subtitle": "林白默默的掏出小本本，将她说的话一次不漏的记了下来。",
        "img": "http://i2.sleeve.7yue.pro/m19.png",
        "for_theme_img": "http://i1.sleeve.7yue.pro/assets/b6442702-4810-46cb-bb0b-f4602d38e4ff.png",
        "price": "29.99",
        "discount_price": "27.8",
        "description": null,
        "tags": "林白推荐",
        "sketch_spec_id": "1",
        "max_purchase_quantity": null,
        "min_purchase_quantity": null
      }, {
        "id": 28,
        "title": "Ins复古金色落地灯",
        "subtitle": "Instagram复古台灯，就在此刻回到过去，找寻逝去的记忆",
        "img": "http://i2.sleeve.7yue.pro/a9.png",
        "for_theme_img": "",
        "price": "999",
        "discount_price": null,
        "description": null,
        "tags": "Ins$复古流行",
        "sketch_spec_id": "8",
        "max_purchase_quantity": null,
        "min_purchase_quantity": null
      }, {
        "id": 26,
        "title": "SemiConer柔质沙发",
        "subtitle": "窝在沙发上，一杯红酒配电影",
        "img": "http://i2.sleeve.7yue.pro/3.png",
        "for_theme_img": "",
        "price": "4799",
        "discount_price": "4200",
        "description": null,
        "tags": "",
        "sketch_spec_id": "1",
        "max_purchase_quantity": null,
        "min_purchase_quantity": null
      }, {
        "id": 25,
        "title": "复古双色沙发",
        "subtitle": "双色可选，经典青黄两色",
        "img": "http://i2.sleeve.7yue.pro/h3.png",
        "for_theme_img": "",
        "price": "3999",
        "discount_price": null,
        "description": null,
        "tags": "复刻经典$双色可选",
        "sketch_spec_id": "1",
        "max_purchase_quantity": null,
        "min_purchase_quantity": null
      }, {
        "id": 24,
        "title": "秋冬新款驼色大衣",
        "subtitle": "2020新款，暖暖过秋冬",
        "img": "http://i2.sleeve.7yue.pro/n3.png",
        "for_theme_img": "http://i1.sleeve.7yue.pro/assets/b8e510a1-8340-43c2-a4b0-0e56a40256f9.png",
        "price": "2999",
        "discount_price": "2699",
        "description": null,
        "tags": "经典单色",
        "sketch_spec_id": "1",
        "max_purchase_quantity": null,
        "min_purchase_quantity": null
      }]
      wx.lin.renderWaterFlow(slide1)
    }
    this.data.spuI--
    if(this.data.spuI <= 0){
      this.setData({
        loadingType: 'end'
      })
    }
    // const data = await this.data.spuPaging.getMoreData()
    // if(!data) {
    //   return
    // }
    // wx.lin.renderWaterFlow(data.items)
    // if (!data.moreData) {
    //   this.setData({
    //     loadingType: 'end'
    //   })
    // }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})