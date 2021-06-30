<template>
	<view class="container">
		<uni-search-bar v-model="searchValue" placeholder="输入名称或url" :radius="100" cancelButton="none" bgColor="#fff" @confirm="onSearch"></uni-search-bar>
		<view class="plat-list">
			<view class="word" v-for="item, index in platList" :key="index" @click="onOpen(item)">{{ item.name }}</view>
		</view>
	</view>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	data() {
		return {
			searchValue: '',
			platList: [
				{ name: '腾讯', url: 'https://v.qq.com/' },
				{ name: '优酷', url: 'https://youku.com/' },
				{ name: '爱奇艺', url: 'https://www.iqiyi.com/' },
				{ name: '芒果', url: 'https://mgtv.com/' },
				{ name: '腾讯', url: 'https://v.qq.com/' },
				{ name: '腾讯', url: 'https://v.qq.com/' },
			],
		}
	},
	onLoad() {

	},
	methods: {
		onSearch({ value }: any) {
			console.log('search', value)
		},
		onOpen({ name, url }: any) {
			console.log('打开', name, url)
			uni.navigateTo({
				url: '/pages/plat/index?url=' + url,
			})
		},
	},
})
</script>

<style lang="scss" scoped>
.container {
	padding: 300rpx 0 60rpx;

	.plat-list {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		margin: 30rpx;

		.word {
			margin: 15rpx 50rpx;
			font-size: 28rpx;
			color: #999;
			// text-decoration: underline;
		}
	}
}
</style>
