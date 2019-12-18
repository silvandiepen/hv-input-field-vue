<template>
	<div class="App">
		<section class="background--green">
			<h1>Vue + Web Components</h1>
		</section>

		<section class="background--white">
			<h3>Web component Input</h3>
			<hv-input-text
				label="First name"
				:value="form.firstName"
				@bindValue="form.firstName = $event.detail"
			></hv-input-text>
			<hv-input-text
				label="Last name"
				:value="form.lastName"
				@bindValue="form.lastName = $event.detail"
			></hv-input-text>
		</section>

		<section class="background--champagne">
			<h3>Default HTML Input</h3>
			<input v-model="form.firstName" />
			<input v-model="form.lastName" />
		</section>
		<section class="background--blue">
			<strong
				><pre>{{ JSON.stringify(form) }}</pre></strong
			>
		</section>
	</div>
</template>

<script>
export default {
	name: "app",
	data: () => ({
		form: {
			firstName: "Vue",
			lastName: "Example"
		}
	}),
	mounted() {
		/* eslint-disable */
		console.log(this);
	}
};
</script>

<style>
body {
	margin: 0;
	font-family: "Nexa", sans-serif;

	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background-color: white;
}

section {
	padding: 2rem;
}
hv-input-text {
	display: block;
}
hv-input-text + hv-input-text {
	margin-top: 1rem;
}

.background--champagne {
	color: #2800a0;
	background-color: #f3e5d8;
}
.background--green {
	color: white;
	background-color: #00d66c;
}
.background--blue {
	color: white;
	background-color: #2800a0;
}
</style>
