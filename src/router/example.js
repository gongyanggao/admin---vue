import routes from '../component/';

export default {
	path: '/example',
	name: '页面示例',
	icon: 'fa fa-line-chart',
	redirect: '/example/admin',
	component: routes.Home,
	children: [{
		path: 'admin',
		name: 'bootstrap3布局',
		icon: 'fa fa-dashboard',
		component: routes.ContentWrap,
		redirect: '/example/admin/overview',
		children: [{
			path: 'overview',
			name: '展示页',
			component: routes.Modules.OverView
		}, {
			path: 'viewdetail/:id',
			name: '详情页',
			hidden: true,
			component: routes.Modules.ViewDetail
		}, {
			path: 'chartpage',
			name: '图表页',
			component: routes.Modules.ChartPage
		}]
	}]
}