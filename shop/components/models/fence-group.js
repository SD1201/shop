import {Matrix} from "./matrix.js"
import { Fence } from "./fence.js"

export class FenceGroup {

  spu
  skuList = []
  fences = []

  constructor(spu) {
    this.spu = spu
    this.skuList = spu.sku_list
  }

  // initFences() {
  //   const matrix = this._createMatrix(this.skuList)
  //   const fences = []
  //   let currentJ = -1
  //   matrix.forEach((element,i,j) => {
  //     if(currentJ !== j) {
  //       currentJ = j
  //       fences[currentJ] = this._createFence(element)
  //     }
  //     fences[currentJ].pushValueTitle(element.value)
  //   })
  //   console.log(fences)
  // }

  setCellStatusById(cellId,status){
    this.eachCell((cell)=>{
      if(cell.id === cellId){
        cell.status = status
      }
    })
  }

  setCellStatusByXY(x,y,status){
    this.fences[x].cells[y].status = status
  }

  initFences1() {
    const matrix = this._createMatrix(this.skuList)
    const fences = []
    const AT = matrix.transpose()
    AT.forEach( r => {
      const fence = new Fence(r)
      fence.init()
      if (this._hasSketchFence() && this._isSketchFence(fence.id)) {
        fence.setFenceSketch(this.skuList)
      }
      fences.push(fence)
    })
    this.fences = fences
  }

  _hasSketchFence(){
    return this.spu.sketch_spec_id? true:false
  }

  _isSketchFence(fenceId){
    return this.spu.sketch_spec_id === fenceId? true:false
  }

  _createFence(element) {
    const fence = new Fence()
    // fence.pushValueTitle(elemnt.value)
    return fence
  }

  getDefaultSku() {
    const defaultSkuId = this.spu.default_sku_id
    if (!defaultSkuId){
      return
    }
    return this.skuList.find(s => s.id === defaultSkuId)
  }

  getSku(skuCode){
    console.log(skuCode)
    const fullSkuCode = this.spu.id +'$'+ skuCode
    console.log(fullSkuCode)
    const sku = this.spu.sku_list.find(s => s.code === fullSkuCode)
    return sku? sku:null
  }

  _createMatrix(skuList) {
    const m = []
    skuList.forEach(sku => {
      m.push(sku.specs)
    })
    return new Matrix(m)
  }

  eachCell(cb){
    
    for(let i = 0; i < this.fences.length; i++) {
      for(let j = 0; j< this.fences[i].cells.length; j++){
        const cell = this.fences[i].cells[j]
        cb(cell, i ,j)
      }
    }
  }
}