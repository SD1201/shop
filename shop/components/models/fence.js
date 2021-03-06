
import {Cell} from "./cell.js"

export class Fence {

  // valueTitle = []
  cells = []
  specs
  // 规格名
  title
  // 规格id
  id

  constructor(specs) {
    this.specs = specs
    this.title = specs[0].key
    this.id = specs[0].key_id
  }

  init() {

    this._initCells()
    
  }

  _initCells(){

    this.specs.forEach(s => {
      // this.pushValueTitle(s.value)
      const existed = this.cells.some(c=>{
        return c.id === s.value_id
      })
      if(existed){
        return
      }
      const cell = new Cell(s)
      this.cells.push(cell)
    })

  }

  setFenceSketch(skuList){
    this.cells.forEach(c=>{
      this._setCellSkuImg(c,skuList)
    })
  }

  _setCellSkuImg(cell,skuList){
    const specCode = cell.getCellCode()
    const matchedSku = skuList.find(s=> s.code.includes(specCode))
    if(matchedSku){
      cell.skuImg = matchedSku.img
    }
  }
  // pushValueTitle(title) {
  //   this.valueTitle.push(title)
  // }

}