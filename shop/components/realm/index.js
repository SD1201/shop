// components/realm/index.js
import {FenceGroup} from "../models/fence-group.js"
import { Judger } from "../models/judger.js"
import {Spu} from "../../model/spu.js"
import {Cell} from "../models/cell.js"
import {Cart} from "../models/cart.js"
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    spu: Object,
    fences: null,
    orderWay:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    judge:Object,
    previewImg:String,
    currentSkuCount: Cart.SKU_MIN_COUNT
  },

  lifetimes:{

    attached(){

    }

    // ready

    // create

  },

  observers:{

    'spu': function(spu) {
      if (!spu) {
        return
      }
      if (Spu.isNoSpec(spu)){
        this.processNoSpec(spu)
      } else{
        this.processHasSpec(spu)
      }
      this.triggerSpecEvent()
    }

  },
  /**
   * 组件的方法列表
   */
  methods: {
    setStockStatus(stock, currentCount){
      this.setData({
        outStock: this.isOutOfStock(stock, currentCount)
      })

    },
    isOutOfStock(stock, currentCount){
      return stock < currentCount
    },
    processNoSpec(spu){
      this.setData({
        noSpec: true,
        // skuIntact:true
      })
      this.bindSkuData(spu.sku_list[0])
      this.setStockStatus(spu.sku_list[0].stock,this.data.currentSkuCount)
    },
    processHasSpec(spu){
      const fencesGroup = new FenceGroup(spu)
      fencesGroup.initFences1()
      const judger = new Judger(fencesGroup)
      this.data.judger = judger

      const defaultSku = fencesGroup.getDefaultSku()
      if (!defaultSku) {
        this.bindSpuData()
      } else {
        this.bindSkuData(defaultSku)
        this.bindTipData()
        this.setStockStatus(defaultSku.stock,this.data.currentSkuCount)
      }
      this.bindTipData()
      this.bindFenceGroupData(fencesGroup)
    },
    triggerSpecEvent(){
      const noSpec = Spu.isNoSpec(this.properties.spu)
      if(noSpec){
        this.triggerSpecEvent('specchange',{
          noSpec
        })
      } else {
        this.triggerEvent('specchange', {
          noSpec: Spu.isNoSpec(this.properties.spu),
          skuIntact: this.data.judger.isSkuIntact(),
          currentValues: this.data.judger.getCurrentValues(),
          missingKeys: this.data.judger.getMissingKeys()
        })
      }
    },
    bindSpuData(){
      const spu = this.properties.spu
      this.setData({
        previewImg:spu.img,
        title:spu.title,
        price:spu.price,
        discountPrice:spu.discount_price,
        
      })
    },
    bindSkuData(sku){
      this.setData({
        previewImg:sku.img,
        title:sku.title,
        price: sku.price,
        discountPrice: sku.discount_price,
        stock:sku.stock,
        
      })
    },
    bindTipData(){
      this.setData({
        skuIntact: this.data.judger.isSkuIntact(),
        currentValues:this.data.judger.getCurrentValues(),
        missingKeys: this.data.judger.getMissingKeys()
      })
    },
    bindFenceGroupData(fencesGroup){
      this.setData({
        fences: fencesGroup.fences,
      })
    },
    onSelectCount(event){
      const currentSkuCount = event.detail.count
      this.data.currentSkuCount = currentSkuCount
      if(this.data.judger.isSkuIntact()){
        const sku = this.data.judger.getDeterminateSku()
        this.setStockStatus(sku.stock, currentSkuCount)
      }
    },
    onCellTap(event) {
      const data = event.detail.cell
      const x = event.detail.x
      const y = event.detail.y
      const cell = new Cell(data.spec)
      cell.status = data.status
      const judger = this.data.judger
      judger.judge(cell, x, y)
      const skuIntact = judger.isSkuIntact()
      if(skuIntact){
        const currentSku = judger.getDeterminateSku()
        this.bindSkuData(currentSku)
        this.setStockStatus(currentSku.stock,this.data.currentSkuCount)
      }
      this.bindTipData()
      this.bindFenceGroupData(judger.fenceGroup)
      this.triggerSpecEvent()
    }
  }
})
