export interface Service {
	content: string
	title: string
	image: {
		name: string
		alt: string
	}
}

export default [
	{
		content: `You need your website to load as quickly as possible to get customers. A typical user only waits 3-5 seconds for a site to load. It won’t matter if you provide the best product or service to your customers if they never wait to see it.

The websites I create have a performance first approach leading you to get more customers and happy customers that would love to use your site as it will be as fast as possible.`,
		title: `Performance first mindset`,
		image: {
			name: 'rocket.svg',
			alt: 'Rocket'
		}
	},
	{
		content: `Okay the site loads fast, now it should be beautiful to look at, this builds trust with the user and grabs their attention so they want to use your website.

The websites I create go through a rigorous design process with constant feedback from you the website owner, so we can create the brand identity you want for your business and make it look beautiful.`,
		title: `Designed to be beautiful and effective`,
		image: {
			name: 'artist.svg',
			alt: 'Designer'
		}
	}
] satisfies Service[]
