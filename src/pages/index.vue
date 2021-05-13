<template>
  <section class="wrapper">
    <div class="app-avatar">
      <app-avatar
        src="https://res.cloudinary.com/drukp4ipu/image/upload/c_scale,w_111/v1551150285/portfolio/yo.jpg"
        alt="Eduardo P. Rivero Avatar"
        width="111"
        height="111"
      />
    </div>
    <app-text tag-name="h1" :styles="['title', 'center']">Eduardo P. Rivero</app-text>
    <app-text :styles="['small', 'center', 'app-text-wrapper']">
      Software Developer creating web apps for 11 years. Love Javascript, vue, react and react-native. Sometimes I like to
      <a
        href="https://blog.eperedo.com"
        target="_blank"
        rel="noopener"
      >write</a>. Check the source code of my work at
      <a
        href="https://github.com/eperedo"
        target="_blank"
        rel="noopener"
      >github</a>
    </app-text>
    <section class="feature-list">
      <app-feature-item number="42" text="Posts"/>
      <app-feature-item number="3" text="Apps"/>
      <app-feature-item number="4" text="Libraries"/>
    </section>
    <section class="gallery">
      <app-gallery-item
        image="https://res.cloudinary.com/drukp4ipu/image/upload/c_scale,w_300/v1551146397/portfolio/swtinder"
        text="Star Wars Tinder"
        url="https://swtinder.netlify.com"
      />
      <app-gallery-item
        image="https://res.cloudinary.com/drukp4ipu/image/upload/c_scale,w_300/v1551147063/portfolio/osom-rating"
        text="Osom Rating"
        url="https://osomrating.netlify.com"
      />
      <app-gallery-item
        image="https://res.cloudinary.com/drukp4ipu/image/upload/c_scale,w_300/v1551147115/portfolio/vue-static-map"
        text="Vue Static Map"
        url="https://github.com/eperedo/vue-static-map"
      />
      <app-gallery-item
        image="https://res.cloudinary.com/drukp4ipu/image/upload/c_scale,w_300/v1551147344/portfolio/vue-six-four"
        text="Vue 64"
        url="https://github.com/eperedo/vue-64"
      />
      <app-gallery-item
        image="https://res.cloudinary.com/drukp4ipu/image/upload/c_scale,w_300/v1551147417/portfolio/v-toggle"
        text="Vue Toggle"
        url="https://github.com/eperedo/vue-toggle"
      />
      <app-gallery-item
        image="https://res.cloudinary.com/drukp4ipu/image/upload/c_scale,w_300/v1551147627/portfolio/style-guide"
        text="My Style Guide"
        url="https://style-guide.eperedo.com/guides/js"
      />
      <app-gallery-item
        image="https://res.cloudinary.com/drukp4ipu/image/upload/v1553805956/portfolio/ama-sua"
        text="Ama Sua"
        url="http://amasua.netlify.com"
      />
    </section>
  </section>
</template>

<script>
import appAvatar from '@/components/app-avatar.vue';
import appFeatureItem from '@/components/app-feature-item.vue';
import appGalleryItem from '@/components/app-gallery-item.vue';
import appText from '@/components/app-text.vue';

export default {
	name: 'pages-home',
	components: {
		appAvatar,
		appFeatureItem,
		appGalleryItem,
		appText,
	},
};
</script>

<style scoped>
.app-avatar {
	margin-bottom: 22px;
	padding-top: 27px;
	text-align: center;
}

.app-text-wrapper {
	margin-top: 14.8px;
	padding: 0 43.6px;
}

.feature-list {
	display: flex;
	justify-content: space-evenly;
	padding: 30px 0;
}

.gallery {
	display: grid;
	grid-template-columns: repeat(1, 1fr);
}

.wrapper {
	background-color: var(--colorPrimary);
	color: var(--secondaryPrimary);
	display: grid;
	justify-content: center;
}

@media screen and (min-width: 768px) {
	.gallery {
		display: grid;
		grid-gap: 10px;
		grid-template-columns: repeat(2, 1fr);
	}
}

@media screen and (min-width: 1024px) {
	.gallery {
		display: grid;
		grid-gap: 10px;
		grid-template-columns: repeat(3, 1fr);
	}

	.wrapper {
		padding: 0 150px;
	}
}

@media screen and (min-width: 1440px) {
	.gallery {
		display: grid;
		grid-gap: 10px;
		grid-template-columns: repeat(3, 1fr);
	}

	.wrapper {
		padding: 0 300px;
	}
}
</style>
