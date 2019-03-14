(function (window) {
	'use strict';
	// Your starting point. Enjoy the ride!
	const vm = new Vue({
		el: '#app',
		data: {
			list: [{
					id: 1,
					name: '吃大桌',
					done: true
				},
				{
					id: 2,
					name: '走亲戚',
					done: true
				},
				{
					id: 3,
					name: '相亲',
					done: false
				}
			],
			todoName: '',
			editId: -1,
			id: 3,
		},
		methods: {
			// 删除
			del(id) {
				this.list = this.list.filter(item => item.id !== id);
			},
			// 添加
			add(e) {
				if (this.todoName === '') {
					return
				}
				if (e.keyCode === 13) {
					// console.log('添加任务', this.todoName);
					// todo: 添加任务

					// 1. 获取任务的名称
					let todoName = this.todoName;
					// 2.拼成一个对象添加到数组里
					this.list.push({
						id: this.id++,
						name: todoName,
						done: false
					});
					// 3.用完了之后, 清空''
					this.todoName = ''
				}
			},
			// 显示showEdit
			showEdit(id) {
				this.editId = id;
			},
			// 修改隐藏
			update() {
				this.editId = -1;
			}
		},
	})
})(window);
