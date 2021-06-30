<template>
  <view>
    <web-view :src="url"></web-view>
    <view class="fixed">
      <uni-data-picker v-model="currentParseUrl" :localdata="lineList" placeholder="请选择线路" popup-title="请选择线路" @change="onSelect"></uni-data-picker>
    </view>
  </view>
</template>

<script lang="ts">
import Vue from 'vue'
import { parseUrls } from '@/commons/config'

export default Vue.extend({
  data() {
    return {
      url: '',
      videoUrl: '',
      currentParseUrl: parseUrls[0],
      lineList: parseUrls.map((url, index) => ({ text: `线路${index + 1}`, value: url })),
    }
  },
  onLoad({ url }: AnyObject) {
    this.videoUrl = url
    this.url = this.currentParseUrl + url
  },
  methods: {
    onSelect() {
      this.url = this.currentParseUrl + this.videoUrl
    },
  },
})
</script>

<style lang="scss" scoped>
.fixed {
  position: fixed;
  top: 80;
  left: 0;
  right: 0;
  background-color: #fff;
  z-index: 999;
}
</style>
