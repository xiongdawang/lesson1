// var SystemJS = require('systemjs');

// import Thumb from '../src/praise.es6.js';

// describe("第一课 点赞测试", function() {
// 	it('增加一个点赞', function() {
// 		SystemJS.import('build/index.js').then(function (m) {
// 		  // console.log(m);
// 		  expect(thumb.t_add(1)).toBe(2);
// 		});

// 		// const thumb = new Thumb();
// 		// expect(thumb.t_add(1)).toBe(2);
// 	})
// });

var thumb = require('../build/index.js');

// console.log(new thumb.default());

describe("第一课 点赞测试", function() {
	it('增加一个点赞', function() {
		// SystemJS.import('build/index.js').then(function (m) {
		//   // console.log(m);
		//   expect(thumb.t_add(1)).toBe(2);
		// });

		const mythumb = new thumb.default();
		expect(mythumb.t_add(1)).toBe(2);
	})
});