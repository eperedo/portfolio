<template>
  <figure class="gallery-item">
    <a :href="url" target="_blank" rel="noopener">
      <picture>
        <source :srcset="`${image}.webp`" type="image/webp">
        <source :srcset="`${image}.jpg`" type="image/jpeg">
        <img class="gallery-image" :src="`${image}.jpg`" width="300" height="250" :alt="text">
      </picture>
      <figcaption class="gallery-title">{{ text }}</figcaption>
    </a>
  </figure>
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
.gallery-image {
	width: 100%;
	object-fit: cover;
}

.gallery-item {
	cursor: pointer;
	position: relative;
}

.gallery-title {
	background-color: var(--colorSecondary);
	bottom: 0;
	color: var(--colorPrimary);
	padding: 10px 0;
	position: absolute;
	text-align: center;
	width: 100%;
}
</style>