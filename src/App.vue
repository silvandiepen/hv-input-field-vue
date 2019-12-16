<template>
	<div class="App">
		<section class="background--green">
			<h1>Vue + Web Components</h1>
		</section>

		<section class="background--white">
			<h3>Web component Input</h3>
			<input-field
				label="Input in Vue"
				:value="message"
				@bindValue="message = $event.detail"
			></input-field>
		</section>

		<section class="background--champagne">
			<h3>Default HTML Input</h3>
			<input v-model="message" />
		</section>
		<section class="background--blue">
			<p>
				Message: <strong>{{ message }}</strong>
			</p>
		</section>
	</div>
</template>

<script>
export default {
	name: "app",
	data: () => ({
		message: "Vue Example"
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
