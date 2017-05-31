import routes from '../component/';

export default {
	path: '/demo',
	name: '基础元素',
	icon: 'fa fa-list',
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
		}, {
			path: 'select',
			name: '下拉框',
			component: routes.Modules.FormSelect
		}, {
			path: 'checkbox',
			name: '多选框',
			component: routes.Modules.CheckBox
		}, {
			path: 'datetimepicker',
			name: '日期时间',
			component: routes.Modules.DateTimePicker
		}]
	}]
}