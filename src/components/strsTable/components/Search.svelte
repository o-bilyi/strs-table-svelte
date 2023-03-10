<script>
	import Textfield from '@smui/textfield';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let query = '';

	function handleChangeQuery() {
		dispatch('search', {
			key: query
		});
	}
</script>

<Textfield
	label="Search"
	variant="outlined"
	bind:value={query}
	on:input={handleChangeQuery}
	placeholder="Type some gibberish here"
/>
