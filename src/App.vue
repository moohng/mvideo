<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  mpType: 'app',
  onLaunch() {
    console.log('App Launch');
  },
  onShow() {
    console.log('App Show');
  },
  onHide() {
    console.log('App Hide');
  },
});
</script>

<style lang="scss">
page {
  font-family: PingFangSC-Regular, PingFang SC, sans-serif;
  font-size: 28rpx;
}
</style>
