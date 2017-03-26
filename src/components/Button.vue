<template>
	<a v-if="anchorTag"
	
	>

	</a>
	<button v-else
		@click="onClick"
		v-bind:class="[classType]"
	>
		{{btnText}}
	</button>
</template>

<script>
	export default {
		name: 'customButton',
		props: ['onClick', 'btnText', 'classType'],
		data: function () {
			return {
				anchorTag: false
			};
		}
	}
</script>

<style>
	a,
	button {
		outline: 0;
		border: 0;
		text-transform: uppercase;
	}
</style>

<style scoped lang="scss">
	a,
	button {
		padding: 10px 20px;
		background: #189ec8;
		color: #fff;
		font-size: 14px;
		font-weight: 700;
		&:hover {
			background: darken(#189ec8, 5%);
		}
		&.success {
			background: #3ba75a;
			&:hover {
				background: darken(#3ba75a, 5%);
			}
		}
		&.error {
			background: #c81818;
			&:hover {
				background: darken(#c81818, 5%);
			}
		}
	}

</style>