<template>
  <section class="feature-item">
    <app-text :styles="['number', 'center']">{{ number }}</app-text>
    <app-text :styles="['letter', 'center']">{{ text }}</app-text>
  </section>
</template>

<script>
import appText from '@/components/app-text.vue';

export default {
	name: 'app-feature-item',
	components: {
		appText,
	},
	props: {
		number: {
			type: String,
		},
		text: {
			type: String,
		},
	},
};
</script>

<style scoped>
.feature-item {
	color: var(--colorSecondary);
}
</style>