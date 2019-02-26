<template>
  <section class="wrapper">
    <div class="app-avatar">
      <app-avatar
        src="https://avatars3.githubusercontent.com/u/461124?s=400&v=4"
        width="111"
        height="111"
      />
    </div>
    <app-text tag-name="h1" :styles="['title', 'center']">Eduardo P. Rivero</app-text>
    <app-text
      :styles="['small', 'center', 'app-text-wrapper']"
    >Software Developer creating web apps for 11 years. Love Javascript, vue, nuxt and learning flutter to introduce me at the mobile world. Let’s talk via email: jrperedo@gmail.com</app-text>
    <section class="feature-list">
      <app-feature-item number="15" text="Posts"/>
      <app-feature-item number="5" text="Apps"/>
      <app-feature-item number="3" text="Libraries"/>
    </section>
    <section class="gallery">
      <app-gallery-item image="https://placecage.com/gif/200/125" url="https://google.com"/>
      <app-gallery-item image="https://placecage.com/gif/300/125" url="https://google.com"/>
      <app-gallery-item image="https://placecage.com/gif/425/125" url="https://google.com"/>
      <app-gallery-item image="https://placecage.com/gif/525/125" url="https://google.com"/>
      <app-gallery-item image="https://placecage.com/gif/625/125" url="https://google.com"/>
      <app-gallery-item image="https://placecage.com/gif/725/125" url="https://google.com"/>
      <app-gallery-item image="https://placecage.com/gif/825/125" url="https://google.com"/>
      <app-gallery-item image="https://placecage.com/gif/925/125" url="https://google.com"/>
      <app-gallery-item image="https://placecage.com/gif/600/125" url="https://google.com"/>
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
	grid-template-columns: repeat(3, 1fr);
}

.wrapper {
	display: grid;
	justify-content: center;
}
</style>