'use strict';

if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

const config = {
	generate: {
		dir: './../dist',
	},
	head: {
		title: 'Eduardo P. Rivero Portfolio',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content:
					'I like doing web apps with NuxtJs and sometimes mobile apps with flutter',
			},
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }],
	},
	mode: 'spa',
	rootDir: './src',
};

module.exports = config;
