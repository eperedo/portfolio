<template>
  <component :is="tagName" :class="styles.concat([className, 'app-text'])">
    <slot></slot>
  </component>
</template>

<script>
export default {
	name: 'app-text',
	props: {
		className: {
			type: String,
		},
		styles: {
			default: () => [],
			type: Array,
		},
		tagName: {
			type: String,
			default: 'p',
		},
	},
};
</script>

<style scoped>
.app-text {
	color: var(--colorSecondary);
}

.center {
	text-align: center;
}

.letter {
	font-size: 14px;
	font-weight: 300;
	line-height: 1.5;
}

.number {
	font-size: 20px;
	font-weight: bold;
}

.small {
	font-size: 14px;
	opacity: 0.9;
	line-height: 1.43;
}

.title {
	font-size: 24px;
	font-weight: 500;
}
</style>