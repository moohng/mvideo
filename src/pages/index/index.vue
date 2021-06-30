<template>
	<view class="container">
		<view class="logo">欢迎</view>
		<uni-search-bar v-model="searchValue" placeholder="输入视频链接" :radius="100" cancelButton="none" bgColor="#fff" @confirm="onSearch"></uni-search-bar>
		<view class="plat-list">
			<view class="word" v-for="item, index in platList" :key="index" @click="onOpen(item)">{{ item.name }}</view>
		</view>
	</view>
</template>

<script lang="ts">
import Vue from 'vue'
import { platList } from '@/commons/config'
import { openUrl } from '@/commons/utils'

export default Vue.extend({
	data() {
		return {
			searchValue: '',
			platList,
		}
	},
	onLoad() {

	},
	methods: {
		onSearch({ value }: any) {
			console.log('search', value)
			if (value) {
				uni.navigateTo({
					url: '/pages/plat/play?url=' + value,
				})
			}
		},
		onOpen({ name, url }: any) {
			console.log('打开', name, url)
			openUrl(url)
		},
	},
})
</script>

<style lang="scss" scoped>
.container {
	padding: 100rpx 0 60rpx;

	.logo {
		margin: 60rpx auto 100rpx;
		font-size: 54rpx;
		text-align: center;
	}

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
