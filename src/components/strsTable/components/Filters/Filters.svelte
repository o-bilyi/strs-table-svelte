<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import Filter from './Filter.svelte';
	import type { Column, FilterEvent } from '../../types';

	type T = $$Generic<string>;

	const dispatch = createEventDispatcher();

	export let columns: Column[] = [];
	export let tableItems: T[] = [];

	let filters: string[] = [];
	let filtersModel: {
		[key: string]: string;
	} = {};

	const handleChangeFilter = (event: FilterEvent) => {
		const filter = event.detail;
		filtersModel = {
			...filtersModel,
			...filter
		};

		filters = (Object.values(filtersModel)).filter((item) => item);
		dispatch('filters', {
			filters: filters
		});
	};
</script>

{#each columns as column}
	{#if column.sortable}
		<Filter
			label={column.id}
			on:filter={handleChangeFilter}
			items={[...new Set(tableItems.map((item) => item[column.id]))]}
		/>
	{/if}
{/each}
