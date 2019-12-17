<template>
	<div class="App">
		<section class="background--green">
			<h1>Vue + Web Components</h1>
		</section>

		<section class="background--white">
			<h3>Web component Input</h3>
			<input-field
				label="First name"
				:value="form.firstName"
				@bindValue="form.firstName = $event.detail"
			></input-field>
			<input-field
				label="Last name"
				:value="form.lastName"
				@bindValue="form.lastName = $event.detail"
			></input-field>
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
	})
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
input-field + input-field {
	margin-top: 1rem;
}
input-field {
	display: block;
}
input-field + input-field {
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
