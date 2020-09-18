/* eslint-disable eslint no-trailing-spaces */
/**
 * 用来操作state状态对象
 * 直接更新state的多个方法低下
 */
import {
  REVEIVE_ADDRESS,
  REVEIVE_CATEGORYS,
  REVEIVE_SHOPS,
  REVEIVE_USER_INFO,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO
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
  },
  [REVEIVE_USER_INFO] (state, {userInfo}) {
    state.userInfo = userInfo
  },
  [RECEIVE_GOODS] (state, {goods}) {
    state.goods = goods
  },
  [RECEIVE_RATINGS] (state, {ratings}) {
    state.ratings = ratings
  },
  [RECEIVE_INFO] (state, {info}) {
    state.info = info
  }
}
