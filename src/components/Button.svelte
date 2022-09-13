<script lang="ts" context="module">
	export type ButtonVariant = "primary" | "secondary";
	export type ButtonColor = number | string;
	export type ButtonSize = "small" | "base";
</script>

<script lang="ts">
	export let variant: ButtonVariant = "primary";
	export let color: ButtonColor = 1;
	export let size: ButtonSize = "base";
	export let dark: boolean = false;
</script>

{#if $$restProps.href}
	<!-- svelte-ignore a11y-missing-attribute -->
	<a
		{...$$restProps}
		class="btn {variant} {size}"
		style:--color={typeof color === "number" ? `var(--color-${color})` : color}
		style:--fg-color={dark !== (variant === "secondary")
			? "var(--color-1)"
			: "white"}
	>
		<slot />
	</a>
{:else}
	<button
		class="btn {variant} {size}"
		type="button"
		style:--color={typeof color === "number" ? `var(--color-${color})` : color}
		style:--fg-color={dark !== (variant === "secondary")
			? "var(--color-1)"
			: "white"}
		{...$$restProps}
	>
		<slot />
	</button>
{/if}

<style>
	.btn {
		font-family: var(--font-family);
		padding: var(--gap) var(--large-gap);
		border-radius: var(--radius);
		outline: none;
		font-size: var(--body-text);
		font-weight: 600;
		text-transform: uppercase;
		cursor: pointer;
		text-decoration: none;
		display: grid;
		font-family: var(--headline-family);
		place-content: center;
		text-align: center;
	}
	.btn.small {
		padding: var(--small-gap) var(--gap);
		font-size: calc(var(--body-text) * 0.8);
	}
	.btn.primary {
		border: 1px solid var(--color);
		background-color: var(--color);
		color: var(--fg-color);
	}
	.btn.secondary {
		border: 1px solid var(--color);
		color: var(--fg-color);
		background-color: transparent;
	}
	.btn:is(:hover, :focus) {
		text-decoration: underline;
		outline: 2px solid var(--color);
	}
</style>
