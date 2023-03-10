<script lang="ts">
	import { Body, Row, Cell } from '@smui/data-table';
	import type { Column } from '../types';

	type T = $$Generic<string>;

	export let slice: T[] = [];
	export let columns: Column[] = [];
</script>

<Body>
	{#each slice as row}
		<Row>
			{#each columns as column}
        <Cell>{row[column.id]}</Cell>
			{/each}
		</Row>
	{/each}
</Body>
