<template>
  <div class="gallery-item">
    <a :href="url" target="_blank" rel="noopener">
      <img class="gallery-image" :src="image" width="125" height="125">
    </a>
    <figcaption>{{ text }}</figcaption>
  </div>
</template>

<script>
export default {
	name: 'app-gallery-item',
	props: {
		image: {
			required: true,
			type: String,
		},
		text: {
			type: String,
		},
		url: {
			required: true,
			type: String,
		},
	},
};
</script>

<style scoped>
.gallery-item {
	max-height: 125px;
}

.gallery-image {
	width: 100%;
}
</style>