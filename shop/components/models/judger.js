import {SkuCode} from "./sku-code.js"
import {CellStatus} from "../../core/enum.js"
import { SkuPending } from "./sku-pending.js"
import {Joiner} from "../../utils/joiner.js"
export class Judger {

  fenceGroup
  pathDict = []
  skuPending


  constructor(fenceGroup) {
    this.fenceGroup = fenceGroup
    this._initPathDict()
    this._initSkuPending()
  }

  isSkuIntact() {
    return this.skuPending.isIntact()
  }

  getCurrentValues(){
    return this.skuPending.getCurrentSpecValues()
  }

  getMissingKeys(){
    const missingKeysIndex = this.skuPending.getMissSpecKeysIndex()
    return missingKeysIndex.map(i => {
      // console.log(this.fenceGroup.fences[i].title)
      return this.fenceGroup.fences[i].title
    })
  }

  _initSkuPending(){
    const specsLength = this.fenceGroup.fences.length
    this.skuPending = new SkuPending(specsLength)
    const defaultSku = this.fenceGroup.getDefaultSku()
    if(!defaultSku) {
      return
    }
    this.skuPending.init(defaultSku)
    this._initSelectedCell()
    this.judge(null,null,null,true)
  }

  _initSelectedCell() {
    this.skuPending.pending.forEach(cell => {
      this.fenceGroup.setCellStatusById(cell.id, CellStatus.SELECTED)
    })
  }
  
  _initPathDict() {
    this.fenceGroup.spu.sku_list.forEach(s => {
      const skuCode = new SkuCode(s.code)
      this.pathDict = this.pathDict.concat(skuCode.totalSegments)
    })
  }

  judge(cell, x, y, isInit=false) {
    if(!isInit) {
      this._changeCurrentCellStatus(cell,x,y)
    }
    this.fenceGroup.eachCell((cell,x,y)=>{
      const path = this._findPotentialPath(cell, x)
      if(!path){
        return
      }
      const isIn = this._isInDict(path)
      if(isIn){
        this.fenceGroup.setCellStatusByXY(x, y, CellStatus.WAITING)
      } else {
        this.fenceGroup.setCellStatusByXY(x, y, CellStatus.FORBIDDEN)
      }
    })
  }

  getDeterminateSku(){
    const code = this.skuPending.getSkuCode()
    const sku = this.fenceGroup.getSku(code)
    return sku
  }

  _isInDict(path) {
    return this.pathDict.includes(path)
  }

  _findPotentialPath(cell, x){

    const joiner = new Joiner('#')
    // 遍历每一行
    for(let i = 0; i < this.fenceGroup.fences.length; i++){
      // 获得每行的数据（单行）
      const selected = this.skuPending.findSelectedCellByX(i)
      // 判断当前元素的行是否是目标所在一行
      if (x === i) {
        // 判断该cell是否是该行已选cell，如果是，则返回空路径
        if(this.skuPending.isSelected(cell,x)){
          return
        }
        // 如果不是，则记录路径
        const cellCode = this._getCellCode(cell.spec)
        joiner.join(cellCode)
      } else {
        // 如果当前行不是目标所在一行，进行当前行数据的判断，如果存在数据，记录路径
        if(selected) {
          const selectedCellCode = this._getCellCode(selected.spec)
          joiner.join(selectedCellCode)
        }
      }
    }
    return joiner.getStr()
  }

  _getCellCode(spec) {
    return spec.key_id + '-' + spec.value_id
  }
  _changeCurrentCellStatus(cell, x, y) {
    if(cell.status === CellStatus.WAITING) {
      this.fenceGroup.setCellStatusByXY(x, y, CellStatus.SELECTED)
      this.skuPending.insertCell(cell, x)
    }
    if(cell.status === CellStatus.SELECTED) {
      this.fenceGroup.setCellStatusByXY(x, y, CellStatus.WAITING)
      this.skuPending.removeCell(cell, x)
    }
  }
}