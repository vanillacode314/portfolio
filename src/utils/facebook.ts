'use strict'
import bizSdk from 'facebook-nodejs-business-sdk'
const EventRequest = bizSdk.EventRequest
const UserData = bizSdk.UserData
const ServerEvent = bizSdk.ServerEvent

const access_token = import.meta.env.META_CONVERSIONS_API_ACCESS_TOKEN
const pixel_id = import.meta.env.META_PIXEL_ID
bizSdk.FacebookAdsApi.init(access_token)

function trackContact({
	email,
	ip,
	userAgent,
	timestamp,
	fbclid,
	fbp
}: {
	email: string
	ip: string
	userAgent: string
	timestamp: number
	fbclid: string | null
	fbp: string | null
}) {
	const userData = new UserData()
		.setEmails([email])
		.setClientIpAddress(ip)
		.setClientUserAgent(userAgent)

	if (fbp) userData.setFbp(fbp)
	if (fbclid) userData.setFbc(`fb.1.${timestamp * 1000}.${fbclid}`)

	const serverEvent = new ServerEvent()
		.setEventName('Contact')
		.setEventTime(timestamp)
		.setUserData(userData)
		.setEventSourceUrl('https://raqueeb.com')
		.setActionSource('website')

	const eventsData = [serverEvent]
	const eventRequest = new EventRequest(access_token, pixel_id).setEvents(eventsData)

	eventRequest.execute().then(
		(response) => {
			console.log('Response: ', response)
		},
		(err) => {
			console.error('Error: ', err)
		}
	)
}

export { trackContact }
