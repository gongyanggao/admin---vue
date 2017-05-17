/**
 * 接口配置
 */

// const BaseUrl = 'http://www/api' // for production
// const BaseUrl = '' // for local poxy
const BaseUrl = '/mock' // for local mock test

export const GET_INFO = BaseUrl + '/ui/v1/getinfo'; // 获取校区
export const GET_TABLE = BaseUrl + '/ui/v1/gettablelist/'; // 获取表格
export const GET_CHEAT_TABLE = BaseUrl + '/ui/v1/getcheatlist'; // 获取诈骗表格
export const GET_SUMMARY = BaseUrl + '/ui/v1/getsummary'; // 获取诈骗表格
