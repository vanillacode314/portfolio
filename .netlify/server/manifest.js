export const manifest = {
	appDir: "_app",
	assets: new Set(["assets/growth.svg","favicon.png"]),
	_: {
		mime: {".svg":"image/svg+xml",".png":"image/png"},
		entry: {"file":"start-086b2ab2.js","js":["start-086b2ab2.js","chunks/vendor-75142838.js"],"css":["assets/vendor-f06d62de.css"]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			}
		]
	}
};
