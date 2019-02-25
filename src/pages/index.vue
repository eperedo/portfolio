<template>
  <section class="wrapper">
    <div class="app-avatar">
      <app-avatar
        src="https://avatars3.githubusercontent.com/u/461124?s=400&v=4"
        width="111"
        height="111"
      />
    </div>
  </section>
</template>

<script>
import appAvatar from '@/components/app-avatar.vue';

export default {
	name: 'pages-home',
	components: {
		appAvatar,
	},
};
</script>

<style scoped>
.app-avatar {
	padding-top: 27px;
}

.wrapper {
	display: grid;
	justify-content: center;
}
</style>