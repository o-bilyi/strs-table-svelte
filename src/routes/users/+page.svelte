<script lang="ts">
	export let data;

	import DataTable from '../../components/strsTable/StrsTable.svelte';
	import { columns } from './columns';
</script>

<h1>About this site</h1>
<DataTable tableItems={data.data} {columns} />