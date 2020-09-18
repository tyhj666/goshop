/* eslint-disable eslint no-trailing-spaces */
// eslint-disable-next-line eslint no-trailing-spaces
/**
 * 包含n个接口请求函数的模块
 * 函数的返回值:pomise
 */
// export function reqAddress (latitude, logitude) {
// }
import ajax from './ajax'
// const BASE_URL = 'http://localhost:4000'
const BASE_URL = '/api' // 在请求前面加上/api是因为需要代理去拦截请求
// 1.根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)
// 2.获取食品分类列表   ajax里面的参数如果跟reqFoodTypes里面的参数名不一样的话，
// ajax里面的参数写法如下:lattitude:x, longitude:b
export const reqFoodCategorys = (lattitude, longitude) => ajax(BASE_URL + '/shops', {lattitude, longitude})
// 3.根据经纬度获取商铺列表
export const reqShops = () => ajax(BASE_URL + '/index_category')
// 4.根据经纬度和关键字搜索商铺列表
// 5.获取一次性验证码
// 6.用户名密码登录
export const reqPwdLogin = ({name, pwd, captcha}) => ajax(BASE_URL + '/login_pwd', {name, pwd, captcha}, 'POST')
// 7.发送短信验证码
export const reqSendCode = (phone) => ajax(BASE_URL + '/sendcode', {phone})
// 8.手机号验证码登录
export const reqSms = (phone, code) => ajax(BASE_URL + '/login_sms', {phone, code}, 'POST')
// 9.根据会话获取用户信息
export const reqUserInfo = (phone, code) => ajax(BASE_URL + '/userinfo')
// 10.用户登录

/***
 * 获取商家信息
 */
export const reqShopInfo = () => ajax('/shop_info')
/***
 * 获取商家评价数组
 */
export const reqShopRatings = () => ajax('/shop_ratings')
/***
 * 获取商家商品数组
 */
export const reqShopGoods = () => ajax('/shop_goods')
