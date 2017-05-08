/**
 * 用户信息VO
 */

export default class UserVO {
  constructor (data) {
    data = data || {}

    this.name = data.name || ''
    this.position = data.position || ''
    this.state = data.state || ''
    this.createdAt = data.createdAt || ''
  }
}
