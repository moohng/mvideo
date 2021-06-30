<template>
  <view>
    <web-view class="webview" :src="url" :style="webviewStyle"></web-view>
    <view class="bottom" id="bottom">
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
      webviewHeight: 584,
    }
  },
  computed: {
    webviewStyle(): string {
      return `height: ${this.webviewHeight}px`
    },
  },
  onLoad({ url }: AnyObject) {
    this.url = url
  },
  onShow() {
    this.$nextTick(() => {
      const q = uni.createSelectorQuery()
      q.select('#bottom').boundingClientRect(({ top }) => {
        console.log('234434', top)
        this.webviewHeight = top || 584
      }).exec()
    })
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
.bottom {
  padding: 30rpx 30rpx;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rosybrown;
  z-index: 999;

  .play-btn {
    margin-bottom: constant(safe-area-inset-bottom);
    margin-bottom: env(safe-area-inset-bottom);
    text-align: center;
  }
}
</style>
