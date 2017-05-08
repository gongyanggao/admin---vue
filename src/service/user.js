/**
 * 获取userinfo Service
 */

import * as API from './API'
import { get, post } from '../utils/http'
import { httpResultProxy } from '../utils/proxy'
import UserVo from './model/UserVo'

let headers = {
  'plat': 'principal-plat'
}

/**
 * 获取用户
 */
export function getUser () {
  let promise = get(API.GET_USER, null, { headers: headers })
  return httpResultProxy(promise, UserVo)
}
