<template>
  <view>
    <web-view class="webview" :src="url"></web-view>
    <view class="bottom">
      <view class="play-btn" @click="onPlay">播放</view>
    </view>
  </view>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      url: '',
    }
  },
  onLoad({ url }: AnyObject) {
    this.url = url
  },
  methods: {
    onPlay() {
      uni.navigateTo({
        url: '/pages/plat/play?url=' + 'https://v.qq.com/x/cover/mzc00200mykcc34.html',
      })
    },
  },
})
</script>

<style lang="scss" scoped>
.webview {
  height: 1000rpx;
}
.bottom {
  padding: 30rpx 30rpx 80rpx;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;

  .play-btn {
    text-align: center;
    z-index: 999;
  }
}
</style>
