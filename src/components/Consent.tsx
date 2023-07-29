import { CookieOptions, cookieStorage, makePersisted } from '@solid-primitives/storage'
import cookie from 'cookie'
import { createSignal, onMount, type VoidComponent } from 'solid-js'
import { isServer } from 'solid-js/web'

export const CookieConsent: VoidComponent<{ cookie: string }> = (props) => {
	cookieStorage._read = (key: string) => {
		return isServer ? props.cookie : document.cookie
	}
	cookieStorage._write = (key: string, value: string, options: CookieOptions) => {
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
		loadAdsense()
		loadAnalytics()
	}

	async function onReject() {
		setDidChoose(true)
		setDidConsent(false)
		loadAdsense()
	}

	async function loadAnalytics() {
		window.dataLayer = window.dataLayer || []
		window.gtag = function () {
			window.dataLayer.push(arguments)
		}
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

	onMount(() => {
		loadAdsense()
		if (!didConsent()) return
		loadAnalytics()
	})

	return (
		<article
			class="fixed bottom-0 right-0 z-30 bg-orange-600 p-5 m-5 rounded-xl text-white flex flex-col gap-5 shadow-xl max-w-xl transition-opacity"
			classList={{
				'opacity-0 pointer-events-none': didChoose(),
				'opacity-100': !didChoose()
			}}
		>
			<p>
				We use cookies to enhance your browsing experience and analyze website traffic. By
				continuing to use our website, you consent to the use of cookies in accordance with our
				Privacy Policy.
			</p>
			<div class="flex gap-3 flex-wrap items-center self-end">
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
						class="border-2 border-white px-5 py-3 rounded font-bold uppercase tracking-wide text-sm hover:bg-white hover:text-orange-600 transition-colors focus:bg-white focus:text-orange-600 "
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
