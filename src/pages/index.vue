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
    >UI/UX Designer at GTBank & Creative Director at PxDsgn Co. Creating simple digital products over 7+ years. Let’s talk designs via email: pxdsgnco@gmail.com</app-text>
  </section>
</template>

<script>
import appAvatar from '@/components/app-avatar.vue';
import appText from '@/components/app-text.vue';

export default {
	name: 'pages-home',
	components: {
		appAvatar,
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

.wrapper {
	display: grid;
	justify-content: center;
}
</style>