export const manifest = {
	appDir: "_app",
	assets: new Set(["assets/growth.svg","favicon.png","images/jl.jpg","images/jl.png","images/vim.jpg","images/vim.png","images/vtt.jpg","images/vtt.png"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".jpg":"image/jpeg"},
	_: {
		entry: {"file":"start-fc830f4f.js","js":["start-fc830f4f.js","chunks/index-3ce7c348.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
