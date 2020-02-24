import {promisic} from "./util"
import { px2rpx} from "../miniprogram_npm/lin-ui/utils/util"

const getSystemSize = async function(){
  const res = await promisic(wx.getSystemInfo)()
  return {
    windowHeight: res.windowHeight,
    windowWidth: res.windowWidth,
    screenHeight: res.screenHeight,
    screenWidth: res.screenWidth,
  }
}

const getWindowsHeightRpx = async function(){
  console.log('0')
  const res = await getSystemSize()
  console.log('1')
  return px2rpx(res.windowHeight)
  console.log('2')
}

export{
  getSystemSize,
  getWindowsHeightRpx
}