export interface FAQ {
	summary: string
	description: string
}

export default [
	{
		summary: 'What guarantees do you provide?',
		description: `<p>You get a <strong>6-month warranty for bug fixes</strong>. If any issues come up in the first 6 months after signing, I'll fix them for free.</p>
<p>Also, I guarantee the automations will at least <strong>double your speed, saving you 50% or more of the time and costs it takes to do the work by hand</strong>.</p>`
	},
	// {
	// 	summary: 'Are there any minimum budget requirements?',
	// 	description: 'Yes, your budget must be at least 500USD.'
	// },
	// {
	// 	summary: 'How does the process work?',
	// 	description: `<ol>
	//                    <li>We discuss all the requirements of your project.</li>
	//                    <li>Figure out the base features necessary for the MVP.</li>
	//                    <li>We get back to you with a quote.</li>
	//                    <li>Once a contract is in effect, we deliver the first version under 3days.</li>
	//                    <li>If you want to continue building the app after the first version, we charge a weekly rate.</li>
	//                  </ol>`
	// },
	{
		summary: 'Do you provide ongoing support after the project is done?',
		// description: `<p>Yes, After the first version is built, you are free to choose either a maintenance only option or a full development option.</p> <p>The maintenance only option is at a rate of 100USD/month and the full development option is at a rate of 500USD, 1000USD or 1500USD per week depending on how much work you need done.</p>`
		description: `Yes`
	},
	// {
	// 	summary: 'What is included in the maintenance only option?',
	// 	description: `The maintenance only option is limited to minor changes and bug fixes. Any major changes or additions will require a separate contract or the full development option. Maintenance fixes are capped at 10hrs/month.`
	// },
	// {
	// 	summary: 'What is included in the full development option?',
	// 	description: `The full development option works on a retainer basis. You get a max 10hrs/week of development time with the 500USD/week, a max of 20hrs/week with 1000USD/week, and a max of 30hrs/week with 1500USD/week.`
	// },
	{
		summary: 'Do you offer custom pricing?',
		description: `Yes, all quotes are given specifically for your business and solving your problem.`
	}
] satisfies FAQ[]
