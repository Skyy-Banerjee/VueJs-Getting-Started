<script setup>
import { ref } from 'vue';
import axios from 'axios';
const data = ref(null);
const url = `https://jsonplaceholder.typicode.com/posts`;

async function fetchData() {
	try {
		//Make GET req. using AXIOS
		const resp = await axios.get(url);

		//Handle successful response
		data.value = resp.data;
	} catch (err) {
		console.log(`Error fetching data: ${err}`);
	}
}
</script>

<template>
	<div>
		<h1>Using Axios!</h1>
		<button @click="fetchData">Fetch Data</button>
		<div>
			<h2>Data from API:</h2>
		</div>

		<pre>{{ data }}</pre>
	</div>
</template>
