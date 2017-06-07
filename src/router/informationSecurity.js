import routes from '../component/';

export default {
	path: '/information',
	name: '信息安全',
	icon: 'fa fa-lock',
	redirect: '/information/action-log-monitor',
	component: routes.Home,
	children: [{
		path: 'action-log-monitor',
		name: '行为日志监测',
		icon: 'fa fa-file-archive-o',
		component: routes.ContentWrap,
		redirect: '/information/action-log-monitor/my-special',
		children: [{
			path: 'my-special',
			name: '我的专线IP-DEMO',
			component: routes.Modules.ViewDetail
		}, {
			path: 'host',
			name: 'ip主机监测',
			component: routes.Modules.MessageBox
		}, {
			path: 'section',
			name: 'ip区间监测',
			component: routes.Modules.Notification
		}, {
			path: 'website',
			name: '网站监测',
			component: routes.Modules.MessageBox
		}, {
			path: 'history',
			name: '历史日志查询',
			component: routes.Modules.Notification
		}]
	}, {
		path: 'frozen-management',
		name: '冻结管理',
		icon: 'fa fa-ban',
		component: routes.ContentWrap,
		redirect: '/information/frozen-management/combination',
		children: [{
			path: 'combination',
			name: '组合冻结',
			component: routes.Modules.Message
		}, {
			path: 'website',
			name: '网站冻结',
			component: routes.Modules.MessageBox
		}, {
			path: 'ip',
			name: 'IP冻结',
			component: routes.Modules.Notification
		}]
	}, {
		path: 'query-management',
		name: '查询管理',
		icon: 'fa fa-search',
		component: routes.ContentWrap,
		redirect: '/information/query-management/enterprise-info',
		children: [{
			path: 'traffic',
			name: '活跃资源访问量',
			component: routes.Modules.Message
		}, {
			path: 'monitor',
			name: '违法违规网站监测记录',
			component: routes.Modules.MessageBox
		}, {
			path: 'check',
			name: '基础数据核验记录',
			component: routes.Modules.Notification
		}, {
			path: 'domain',
			name: '活跃域名',
			component: routes.Modules.Message
		}, {
			path: 'ip',
			name: '活跃IP',
			component: routes.Modules.MessageBox
		}, {
			path: 'infobase',
			name: '基础数据管理',
			component: routes.Modules.Notification
		}, {
			path: 'excute-query',
			name: '指令执行行为查询',
			component: routes.Modules.Message
		}]
	}, {
		path: 'baidu',
		name: '网站小百度',
		icon: 'fa fa-google-plus',
		component: routes.ContentWrap,
		redirect: '/information/baidu/query',
		children: [{
			path: 'query',
			name: '网站小百度',
			component: routes.Modules.Message
		}]
	}, {
		path: 'dns-control',
		name: 'DNS管控',
		icon: 'fa fa-cloud',
		component: routes.ContentWrap,
		redirect: '/information/dns-control/domain',
		children: [{
			path: 'domain',
			name: '违规域名处置',
			component: routes.Modules.MessageBox
		}, {
			path: 'subject',
			name: '违规主体处置',
			component: routes.Modules.Message
		}]
	}, {
		path: 'blacklist-management',
		name: '黑名单管理',
		icon: 'fa fa-list-ul',
		component: routes.ContentWrap,
		redirect: '/information/blacklist-management/blacklist',
		children: [{
			path: 'blacklist',
			name: '黑名单',
			component: routes.Modules.Message
		}]
	}, {
		path: 'special-action',
		name: '专项行动',
		icon: 'fa fa-hand-grab-o',
		component: routes.ContentWrap,
		redirect: '/information/special-action/keyword',
		children: [{
			path: 'keyword',
			name: '专项行动关键字',
			component: routes.Modules.Message
		}, {
			path: 'task',
			name: '专项行动任务管理',
			component: routes.Modules.MessageBox
		}, {
			path: 'result',
			name: '专项行动结果管理',
			component: routes.Modules.Notification
		}, {
			path: 'url',
			name: '专项行动正负面URL',
			component: routes.Modules.Message
		}, {
			path: 'category',
			name: '涉网部门关注类别',
			component: routes.Modules.MessageBox
		}, {
			path: 'instance',
			name: '涉网部门接口配置',
			component: routes.Modules.Notification
		}]
	}, {
		path: 'believable-management',
		name: '信任对象管理',
		icon: 'fa fa-user-plus',
		component: routes.ContentWrap,
		redirect: '/information/believable-management/website',
		children: [{
			path: 'website',
			name: '信任网站管理',
			component: routes.Modules.MessageBox
		}, {
			path: 'host',
			name: '信任主机管理',
			component: routes.Modules.Message
		}]
	}, {
		path: 'department-province-application',
		name: '部省应用',
		icon: 'fa fa-building',
		component: routes.ContentWrap,
		redirect: '/information/department-province-application/keyword',
		children: [{
			path: 'monitor',
			name: '监测指令',
			component: routes.Modules.Message
		}, {
			path: 'filter',
			name: '过滤指令',
			component: routes.Modules.MessageBox
		}, {
			path: 'log-query',
			name: '访问日志查询',
			component: routes.Modules.Notification
		}, {
			path: 'public-query',
			name: '公共查询',
			component: routes.Modules.Message
		}, {
			path: 'exception',
			name: '基础数据异常',
			component: routes.Modules.MessageBox
		}, {
			path: 'follow',
			name: '违法违规定位跟踪',
			component: routes.Modules.Notification
		}, {
			path: 'assistance',
			name: '省级协办',
			component: routes.Modules.Notification
		}, {
			path: 'analysis',
			name: '统计分析',
			component: routes.Modules.Message
		}, {
			path: 'baseinfo-query',
			name: '基础数据查询指令',
			component: routes.Modules.MessageBox
		}, {
			path: 'monitor-query',
			name: '基础数据监测查询',
			component: routes.Modules.Notification
		}, {
			path: 'access-info',
			name: '异地/多地接入信息',
			component: routes.Modules.Notification
		}, {
			path: 'access-path',
			name: '接入轨迹',
			component: routes.Modules.Message
		}, {
			path: 'permission',
			name: '业务许可信息',
			component: routes.Modules.MessageBox
		}, {
			path: 'activity',
			name: '活跃度查询',
			component: routes.Modules.Notification
		}]
	}]
}