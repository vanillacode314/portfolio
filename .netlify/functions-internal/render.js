import { init } from '../handler.js';

export const handler = init({
	appDir: "_app",
	assets: new Set(["assets/growth.svg","favicon.png"]),
	_: {
		mime: {".svg":"image/svg+xml",".png":"image/png"},
		entry: {"file":"start-086b2ab2.js","js":["start-086b2ab2.js","chunks/vendor-75142838.js"],"css":["assets/vendor-f06d62de.css"]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js')
		],
		routes: [
			
		]
	}
});
