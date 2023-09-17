import type { Component } from 'solid-js'
import styles from './Spinner.module.css'

export const Spinner: Component = () => {
	return (
		<div class={styles['lds-ring']}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	)
}

export default Spinner
