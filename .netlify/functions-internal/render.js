import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	assets: new Set(["assets/growth.svg","favicon.png","images/jl.jpg","images/jl.png","images/vim.jpg","images/vim.png","images/vtt.jpg","images/vtt.png"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".jpg":"image/jpeg"},
	_: {
		entry: {"file":"start-fc830f4f.js","js":["start-fc830f4f.js","chunks/index-3ce7c348.js"],"css":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
