import routes from '../component/';

export default {
	path: '/element',
	name: '基础元素',
	icon: 'fa fa-list',
	redirect: '/element/form',
	component: routes.Home,
	children: [{
		path: 'form',
		name: '表单元素',
		icon: 'fa fa-check-square',
		component: routes.ContentWrap,
		redirect: '/element/form/formpage',
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
	}, {
		path: 'notice',
		name: '消息组件',
		icon: 'fa fa-commenting',
		component: routes.ContentWrap,
		redirect: '/element/notice/message',
		children: [{
			path: 'message',
			name: '消息提示',
			component: routes.Modules.Message
		}, {
			path: 'messagebox',
			name: '弹框',
			component: routes.Modules.MessageBox
		}, {
			path: 'notification',
			name: '通知',
			component: routes.Modules.Notification
		}, {
			path: 'loading',
			name: '加载',
			component: routes.Modules.Loading
		}]
	}]
}