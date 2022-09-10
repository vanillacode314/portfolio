<script lang="ts" context="module">
	export type ButtonVariant = "primary" | "secondary";
</script>

<script lang="ts">
	export let variant: ButtonVariant = "primary";
</script>

{#if $$restProps.href}
	<a {...$$restProps} class="btn {variant}" type="button"><slot /></a>
{:else}
	<button {...$$restProps} class="btn {variant}" type="button"><slot /></button>
{/if}

<style>
	.btn {
		font-family: var(--font-family);
		padding: var(--gap) calc(var(--gap) * 1.5);
		border-radius: var(--radius);
		outline: none;
		font-size: 18px;
		font-weight: bold;
		text-transform: uppercase;
		cursor: pointer;
		text-decoration: none;
	}
	.btn:is(:hover, :focus) {
		text-decoration: underline;
	}
	.btn.primary {
		border: 1px solid var(--color-1);
		background-color: var(--color-1);
		color: white;
	}
	.btn.secondary {
		border: 1px solid var(--color-1);
		color: var(--color-1);
		background-color: white;
	}
</style>
