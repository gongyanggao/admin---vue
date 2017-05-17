/**
 * table信息VO
 */

export default class tableVo {
  constructor (data) {
    data = data || {}
    
    this.id = data.id || ''
    this.name = data.name || ''
    this.city = data.city || ''
    this.createdAt = data.createdAt || ''
    this.tag = data.tag || ''
  }
}
