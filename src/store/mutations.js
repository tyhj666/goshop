/* eslint-disable eslint no-trailing-spaces */
/**
 * 用来操作state状态对象
 * 直接更新state的多个方法低下
 */
import {
  REVEIVE_ADDRESS,
  REVEIVE_CATEGORYS,
  REVEIVE_SHOPS
} from './mutation-types'
export default {
  [REVEIVE_ADDRESS] (state, {address}) {
    state.address = address
  },
  [REVEIVE_CATEGORYS] (state, {categorys}) {
    state.categorys = categorys
  },
  [REVEIVE_SHOPS] (state, {shops}) {
    state.shops = shops
  }
}
