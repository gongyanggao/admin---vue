import routes from '../component/';

export default {
	path: '/special',
	name: '专线资源',
	icon: 'fa fa-sitemap',
	redirect: '/special/statistics',
	component: routes.Home,
	children: [{
		path: 'statistics',
		name: '统计分析',
		icon: 'fa fa-bar-chart',
		component: routes.ContentWrap,
		redirect: '/special/statistics/tendency',
		children: [{
			path: 'tendency',
			name: '专线资源探测趋势统计',
			component: routes.Modules.ViewDetail
		}, {
			path: 'unregistered',
			name: '未备案网站统计分析',
			component: routes.Modules.Message
		}]
	}, {
		path: 'link',
		name: '链路覆盖',
		icon: 'fa fa-link',
		component: routes.ContentWrap,
		redirect: '/special/link/personal',
		children: [{
			path: 'cover',
			name: '链路覆盖',
			component: routes.Modules.Message
		}]
	}, {
		path: 'resource',
		name: '专线资源管理',
		icon: 'fa fa-photo',
		component: routes.ContentWrap,
		redirect: '/special/resource/user',
		children: [{
			path: 'user',
			name: '专线用户管理',
			component: routes.Modules.Message
		}, {
			path: 'IP',
			name: '专线IP管理',
			component: routes.Modules.MessageBox
		}, {
			path: 'website',
			name: '专线网站管理',
			component: routes.Modules.Notification
		}]
	}, {
		path: 'website-check',
		name: '专线网站核查',
		icon: 'fa fa-map-signs',
		component: routes.ContentWrap,
		redirect: '/special/website-check/unregistered',
		children: [{
			path: 'user',
			name: '专线未备案网站',
			component: routes.Modules.Message
		}, {
			path: 'blacklist',
			name: '专线黑名单网站',
			component: routes.Modules.MessageBox
		}]
	}, {
		path: 'probe',
		name: '专线网站探测',
		icon: 'fa fa-shield',
		component: routes.ContentWrap,
		redirect: '/special/probe/suspected-website',
		children: [{
			path: 'suspected-website',
			name: '疑似专线网站',
			component: routes.Modules.Message
		}, {
			path: 'suspected-ip',
			name: '疑似专线IP',
			component: routes.Modules.MessageBox
		}, {
			path: 'suspected-user',
			name: '疑似专线用户',
			component: routes.Modules.Notification
		}]
	}]
}