<script lang="ts">
	export let data;

	import DataTable from '../../components/strsTable/StrsTable.svelte';
	import { columns } from './columns';
</script>

<h1>Hello and welcome to my site!</h1>
<h2>Home page!</h2>
<DataTable tableItems={data.data} {columns} />