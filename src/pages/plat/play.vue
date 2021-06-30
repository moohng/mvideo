<template>
  <view>
    <web-view :src="url"></web-view>
    <cover-view>1212121</cover-view>
  </view>
</template>

<script lang="ts">
import Vue from 'vue'
import { parseUrls } from '@/commons/config'

export default Vue.extend({
  data() {
    return {
      url: '',
      parseIndex: 0,
    }
  },
  onLoad({ url }: AnyObject) {
    this.url = parseUrls[this.parseIndex] + url;
  },
})
</script>
