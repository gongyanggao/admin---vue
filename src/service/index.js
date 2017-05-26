/**
 *  Service
 */

import * as API from './API'
import axios from 'axios';

// 创建实例时设置配置的默认值
let instance = axios.create({
	baseURL: '/mock/ui/v1/'
});
// 覆写库的超时默认值
// 现在，在超时前，所有请求都会等待 2.5 秒
instance.defaults.timeout = 1500;

/**
 * 获取用户
 */
export function getInfo() {
	return instance.get(API.GET_INFO)
}

/**
 * 获取info
 */
export function getCheatTable() {
	return instance.get(API.GET_CHEAT_TABLE)
}

/**
 * 获取table
 */
export function getTable(id) {
	// 为已知需要花费很长时间的请求覆写超时设置
	return instance.get(API.GET_TABLE + id, {
		timeout: 3000
	})
}

/**
 * 获取summary
 */
export function getSummary() {
	return instance.get(API.GET_SUMMARY)
}

/**
 * 获取sparkline
 */
export function getSparkline() {
	return instance.get(API.GET_SPARKLINE)
}

/**
 * 获取chartline
 */
export function getChartLine() {
	return instance.get(API.GET_CHARTLINE)
}