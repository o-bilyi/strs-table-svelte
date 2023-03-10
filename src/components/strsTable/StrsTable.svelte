<script lang="ts">
	import DataTable, { SortValue } from '@smui/data-table';

	// imports components
	import TableHead from './components/Head.svelte';
	import TableBody from './components/Body.svelte';
	import Pagination from './components/Pagination.svelte';
	import Filters from './components/Filters/Filters.svelte';

	import type { Column, FiltersEvent, SearchEvent } from './types';
	import Search from './components/Search.svelte';

	type T = $$Generic<string>;

	// props
	export let tableItems: T[] | [] = [];
	export let columns: Column[] = [];
	export let showHead = true;

	let sort = 'id';
	let sortDirection: Lowercase<keyof typeof SortValue> = 'ascending';

	let rowsPerPage = 10;
	let currentPage = 0;

	$: start = currentPage * rowsPerPage;
	$: end = Math.min(start + rowsPerPage, tableItems.length);

	$: slice = tableItems.slice(start, end);

	function handleSort() {
		const sortedItems = slice.sort((a, b) => {
			const [aVal, bVal] = [a[sort], b[sort]][
				sortDirection === 'ascending' ? 'slice' : 'reverse'
			]();
			if (typeof aVal === 'string' && typeof bVal === 'string') {
				return aVal.localeCompare(bVal);
			}
			return Number(aVal) - Number(bVal);
		});
		slice = sortedItems;
	}

	const resetPagination = () => ((rowsPerPage = 10), (currentPage = 0));

	function handleSearch(event: SearchEvent) {
		const query = event.detail.query;

		const filteredItems = tableItems.filter((item) =>
			Object.values(item).join(',').toLowerCase().includes(query)
		);

		resetPagination();
		slice = filteredItems.slice(start, end);
	}

	function handleFilter(event: FiltersEvent) {
		const filters = event.detail.filters;

		if (!filters.length) {
			return slice = tableItems.slice(start, end);
		}

		const filteredItems = filters.map((filterItem) =>
			tableItems.find((tableItem) =>
				Object.values(tableItem).join(',').toLowerCase().includes(filterItem.toLowerCase())
			)
		);

		resetPagination();

		//@ts-ignore
		slice = filteredItems.slice(start, end);
	}
</script>

<div class="filter-wrap">
	<Search on:search={handleSearch} />

	<Filters on:filters={handleFilter} {columns} {tableItems} />
</div>

<DataTable
	sortable
	bind:sort
	bind:sortDirection
	on:SMUIDataTable:sorted={handleSort}
	table$aria-label="User list"
	style="width: 100%;"
>
	{#if showHead}
		<TableHead {columns} />
	{/if}

	<TableBody {slice} {columns} />
</DataTable>

<Pagination bind:end bind:start bind:currentPage bind:rowsPerPage countItems={tableItems.length} />

<style>
	.filter-wrap {
		display: flex;
		column-gap: 10px;
		align-items: center;
		margin-bottom: 20px;
	}
</style>
