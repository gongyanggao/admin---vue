/**
 *  Service
 */

import * as API from './API'
import axios from 'axios';

let headers = {
	'plat': 'principal-plat'
}

/**
 * 获取用户
 */
export function getInfo() {
	return axios.get(API.GET_INFO)
}

/**
 * 获取info
 */
export function getCheatTable() {
	return axios.get(API.GET_CHEAT_TABLE)
}

/**
 * 获取table
 */
export function getTable(id) {
	return axios.get(API.GET_TABLE + id)
}

/**
 * 获取summary
 */
export function getSummary() {
	return axios.get(API.GET_SUMMARY)
}