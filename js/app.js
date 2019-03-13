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
			todoName: []
		},
		methods: {
			// 删除
			del(id) {
				this.list = this.list.filter(item => item.id !== id);
			},
			// 添加
			add(e) {
				if (e.keyCode === 13) {
					console.log('添加任务', this.todoName);
					// todo: 添加任务

					// 1. 获取任务的名称
					const todoName = this.todoName;
					// 2.拼成一个对象添加到数组里
					this.list.push({
						id: 4,
						name: todoName,
						done: false
					});
					// 3.用完了之后, 清空''
					todoName = ''

				}
			},

		},
	})
})(window);
