<script lang="ts">
	import { Head, Row, Cell, Label } from '@smui/data-table';
	import IconButton from '@smui/icon-button';
	import type { Column } from '../types';

	export let columns: Column[] = [];
</script>

<Head>
	<Row>
		{#each columns as column}
			<Cell columnId={column.id} sortable={column.sortable} style="text-align:left;">
        {#if column.sortable}
          <IconButton class="material-icons">arrow_upward</IconButton>
        {/if}
				<Label>{column.label}</Label>
			</Cell>
		{/each}
	</Row>
</Head>
