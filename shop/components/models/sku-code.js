import { combination } from "../../utils/util.js"

export class SkuCode {

  code
  spuId
  totalSegments = []

  constructor(code) {
    this.code = code
    this._splitToSeqments()
  }

  _splitToSeqments() {

    const spuAndSpec = this.code.split('$')
    this.spuId = spuAndSpec[0]
    const specCodeArray = spuAndSpec[1].split('#')
    const length = specCodeArray.length

    for(let i = 1; i <= length; i++){
      const segments = combination(specCodeArray, i)
      const newSegments = segments.map(segs=>{
        return segs.join('#')
      })
      this.totalSegments = this.totalSegments.concat(newSegments)
    }


  }

}