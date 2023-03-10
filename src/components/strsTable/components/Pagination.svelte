<script lang="ts">
	import { Label, Pagination } from '@smui/data-table';
	import IconButton from '@smui/icon-button';
	import Select, { Option } from '@smui/select';

	export let rowsPerPage = 10;
	export let start = 10;
	export let end = 0;
	export let currentPage = 0;
	export let countItems = 0;

	$: lastPage = Math.max(Math.ceil(countItems / rowsPerPage) - 1, 0);

	$: if (currentPage > lastPage) {
		currentPage = lastPage;
	}
</script>

<Pagination slot="paginate" style="justify-content: center;">
	<svelte:fragment slot="rowsPerPage">
		<Label>Rows Per Page</Label>
		<Select variant="outlined" bind:value={rowsPerPage} noLabel>
			<Option value={10}>10</Option>
			<Option value={25}>25</Option>
			<Option value={100}>100</Option>
		</Select>
	</svelte:fragment>
	<svelte:fragment slot="total">
		{start + 1}-{end} of {countItems}
	</svelte:fragment>

	<IconButton
		class="material-icons"
		action="first-page"
		title="First page"
		on:click={() => (currentPage = 0)}
		disabled={currentPage === 0}>first_page</IconButton
	>
	<IconButton
		class="material-icons"
		action="prev-page"
		title="Prev page"
		on:click={() => currentPage--}
		disabled={currentPage === 0}>chevron_left</IconButton
	>
	<IconButton
		class="material-icons"
		action="next-page"
		title="Next page"
		on:click={() => currentPage++}
		disabled={currentPage === lastPage}>chevron_right</IconButton
	>
	<IconButton
		class="material-icons"
		action="last-page"
		title="Last page"
		on:click={() => (currentPage = lastPage)}
		disabled={currentPage === lastPage}>last_page</IconButton
	>
</Pagination>
