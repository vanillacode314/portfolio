import { cookieStorage, makePersisted } from '@solid-primitives/storage'
import cookie, { type CookieSerializeOptions } from 'cookie'
import { createSignal, onMount, type VoidComponent } from 'solid-js'
import { isServer } from 'solid-js/web'

export const CookieConsent: VoidComponent<{ cookie: string }> = (props) => {
	cookieStorage._read = () => {
		return isServer ? props.cookie : document.cookie
	}
	cookieStorage._write = (key: string, value: string, options: CookieSerializeOptions) => {
		document.cookie = cookie.serialize(key, value, options)
	}
	const [didConsent, setDidConsent] = makePersisted(createSignal<boolean>(false), {
		storage: cookieStorage,
		storageOptions: {
			path: '/',
			secure: true,
			sameSite: 'lax',
			expires: new Date(Date.now() + 10 * 365 * 24 * 60 * 60 * 1000)
		},
		name: 'did_consent'
	})
	const [didChoose, setDidChoose] = makePersisted(createSignal<boolean>(false), {
		storage: cookieStorage,
		storageOptions: {
			path: '/',
			secure: true,
			sameSite: 'lax',
			expires: new Date(Date.now() + 10 * 365 * 24 * 60 * 60 * 1000)
		},
		name: 'chose_consent'
	})

	async function onAccept() {
		setDidChoose(true)
		setDidConsent(true)
		loadPixel()
		loadAnalytics()
	}

	async function onReject() {
		setDidChoose(true)
		setDidConsent(false)
	}

	async function loadAnalytics() {
		window.dataLayer = window.dataLayer || []
		window.gtag = function () {
			window.dataLayer.push(arguments)
		}
		gtag('consent', 'default', {
			ad_storage: 'denied',
			ad_user_data: 'denied',
			ad_personalization: 'denied',
			analytics_storage: 'denied'
		})
		if (!didConsent()) {
			gtag('consent', 'update', {
				ad_storage: 'denied',
				ad_user_data: 'denied',
				ad_personalization: 'denied',
				analytics_storage: 'denied'
			})
			return
		}
		gtag('consent', 'update', {
			ad_storage: 'granted',
			ad_user_data: 'granted',
			ad_personalization: 'granted',
			analytics_storage: 'granted'
		})
		gtag('js', new Date())
		gtag('config', 'G-197W0VNG3Y', {
			cookie_domain: window.location.hostname,
			cookie_flags: 'SameSite=None;Secure'
		})
		const gaScript = document.createElement('script')
		gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-197W0VNG3Y'
		document.head.appendChild(gaScript)
	}

	async function loadAdsense() {
		;(window.adsbygoogle = window.adsbygoogle || []).requestNonPersonalizedAds = didConsent()
			? 1
			: 0
	}

	async function loadPixel() {
		if (!didConsent()) return
		;(function (f, b, e, v, n, t, s) {
			if (f.fbq) return
			n = f.fbq = function () {
				n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
			}
			if (!f._fbq) f._fbq = n
			n.push = n
			n.loaded = !0
			n.version = '2.0'
			n.queue = []
			t = b.createElement(e)
			t.async = !0
			t.src = v
			s = b.getElementsByTagName(e)[0]
			s.parentNode.insertBefore(t, s)
		})(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js')
		fbq('init', '988774449217223')
		fbq('track', 'PageView')
	}

	onMount(() => {
		// loadAdsense()
		loadAnalytics()
		loadPixel()
	})

	return (
		<article
			class="fixed bottom-0 right-0 z-30 bg-orange-600 p-8 m-5 rounded-xl text-white flex flex-col gap-8 shadow-xl max-w-xl transition-opacity"
			style={{
				'pointer-events': isServer ? 'none' : didChoose() ? 'none' : 'auto',
				opacity: isServer ? 0 : didChoose() ? 0 : 1
			}}
		>
			<p>
				We use cookies to enhance your browsing experience and analyze website traffic. By
				continuing to use our website, you consent to the use of cookies in accordance with our
				Privacy Policy.
			</p>
			<div class="flex gap-3 flex-wrap items-center self-end w-full">
				<a
					class="text-orange-100 underline decoration-dotted visited:text-orange-900 hover:text-orange-500 hover:visited:text-purple-500"
					href="/privacy-policy"
				>
					Privacy Policy
				</a>
				<span class="grow" />
				<div class="flex gap-3 flex-wrap items-center">
					<button
						onClick={onReject}
						class="border-2 border-transparent px-5 py-3 rounded font-bold uppercase tracking-wide text-sm hover:text-orange-100 transition-colors focus:text-orange-100 "
					>
						Reject
					</button>
					<button
						onClick={onAccept}
						class="border-2 border-transparent bg-white text-orange-600 px-5 py-3 rounded font-bold uppercase tracking-wide text-sm hover:bg-orange-100 transition-colors focus:bg-orange-100"
					>
						Accept
					</button>
				</div>
			</div>
		</article>
	)
}

export default CookieConsent
