<script lang="ts">
	import Select, { Option } from '@smui/select';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let items: string[] = [];
	export let label: string = '';

	let value = '';

	$: {
		dispatch('filter', {
			[label]: value
		});
	}
</script>

<Select variant="outlined" bind:value {label}>
	<Option value={''} />
	{#each items as item}
		<Option value={item}>{item}</Option>
	{/each}
</Select>
