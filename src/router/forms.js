import routes from '../component/';

export default {
	path: '/demo',
	name: '基础元素',
	redirect: '/demo/form',
	component: routes.Home,
	children: [{
		path: 'form',
		name: '表单元素',
		component: routes.ContentWrap,
		redirect: '/demo/form/formpage',
		children: [{
			path: 'formpage',
			name: '表单布局',
			component: routes.Modules.FormPage
		}, {
			path: 'input',
			name: '输入框',
			component: routes.Modules.Input
		}]
	}]
}