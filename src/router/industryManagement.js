import routes from '../component/';

export default {
	path: '/industry',
	name: '行业管理',
	icon: 'fa fa-industry',
	redirect: '/industry/management',
	component: routes.Home,
	children: [{
		path: 'management',
		name: '行业管理',
		icon: 'fa fa-book',
		component: routes.ContentWrap,
		redirect: '/industry/management/display',
		children: [{
			path: 'display',
			name: '总览',
			component: routes.Modules.IndustryManagement
		}, {
			path: 'summary',
			hidden: true,
			name: '统计',
			component: routes.Modules.IndustryManagement
		}, {
			path: 'list',
			name: '列表',
			component: routes.Modules.TableList
		}]
	}, {
		path: 'resources',
		name: '基础资源监测',
		icon: 'fa fa-qrcode',
		component: routes.ContentWrap,
		redirect: '/industry/resources/data',
		children: [{
			path: 'data',
			name: '基础数据监测结果',
			component: routes.Modules.ViewDetail
		}]
	}, {
		path: 'document',
		name: '文档管理',
		icon: 'fa fa-file-pdf-o',
		component: routes.ContentWrap,
		redirect: '/industry/document/personal',
		children: [{
			path: 'personal',
			name: '个人文档管理',
			component: routes.Modules.Message
		}, {
			path: 'shared',
			name: '共享文档管理',
			component: routes.Modules.MessageBox
		}, {
			path: 'knowledge',
			name: '知识库管理',
			component: routes.Modules.Notification
		}]
	}, {
		path: 'internet',
		name: '互联网资源',
		icon: 'fa fa-chrome',
		component: routes.ContentWrap,
		redirect: '/industry/internet/enterprise-info',
		children: [{
			path: 'enterprise-info',
			name: 'IDC/ISP企业信息',
			component: routes.Modules.Message
		}, {
			path: 'computer-info',
			name: '机房信息',
			component: routes.Modules.MessageBox
		}, {
			path: 'website',
			name: '未备案网站',
			component: routes.Modules.Notification
		}, {
			path: 'xtdemo',
			name: 'XTdemo',
			component: routes.Modules.Message
		}, {
			path: 'bad-info',
			name: '不良信息监测策略',
			component: routes.Modules.MessageBox
		}, {
			path: 'security-demo',
			name: '信安demo',
			component: routes.Modules.Notification
		}, {
			path: 'security-charge',
			name: '信息安全责任人',
			component: routes.Modules.Message
		}, {
			path: 'statistics',
			name: 'IDC基础数据统计',
			component: routes.Modules.MessageBox
		}, {
			path: 'special-demo',
			name: '专线demo',
			component: routes.Modules.Notification
		}, {
			path: 'website-info',
			name: '网站信息',
			component: routes.Modules.Message
		}]
	}]
}