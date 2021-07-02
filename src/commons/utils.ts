/**
 * 打开链接
 * @param url
 */
export function openUrl(url: string) {
  // #ifdef H5
  // const $a = document.createElement('a')
  // $a.target = '_blank'
  // $a.href = url
  // $a.click()
  window.open(url, '_blank');
  // #endif
  // #ifdef APP-PLUS
  plus.runtime.openURL(url);
  // #endif
  // #ifndef APP-PLUS || H5
  uni.navigateTo({
    url: '/pages/plat/index?url=' + url,
  });
  // #endif
}
