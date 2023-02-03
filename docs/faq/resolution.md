# UEFI 启动后分辨率过低

此问题已得到解决（2021/07/20），在此之前制作基于 Ventoy 启动盘的用户可以重新下载并替换 U 盘中的`ventoy/ventoy_wimboot.img`

## 获取

<a href="https://pineapple.edgeless.top/api/v2/info/ventoy_plugin_addr" class="button button-primary button-rounded button-small" target="_blank">点击下载</a>

## 替换

![](https://pineapple.edgeless.top/picbed/wiki/img/210516.png)

<style>
.button {
  color: #666;
  background-color: #EEE;
  border-color: #EEE;
  font-weight: 300;
  font-size: 16px;
  font-family: "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  text-decoration: none;
  text-align: center;
  line-height: 40px;
  height: 40px;
  padding: 0 40px;
  margin: 0;
  display: inline-block;
  appearance: none;
  cursor: pointer;
  border: none;
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
  -webkit-transition-property: all;
          transition-property: all;
  -webkit-transition-duration: .3s;
          transition-duration: .3s;
  /*
  * Disabled State
  *
  * The disabled state uses the class .disabled, is-disabled,
  * and the form attribute disabled="disabled".
  * The use of !important is only added because this is a state
  * that must be applied to all buttons when in a disabled state.
  */ }
  .button:visited {
    color: #666; }
  .button:hover, .button:focus {
    background-color: #f6f6f6;
    text-decoration: none;
    outline: none; }
  .button:active, .button.active, .button.is-active {
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.3);
    text-decoration: none;
    background-color: #eeeeee;
    border-color: #cfcfcf;
    color: #d4d4d4;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
    -webkit-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
            box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2); }
  .button.disabled, .button.is-disabled, .button:disabled {
    top: 0 !important;
    background: #EEE !important;
    border: 1px solid #DDD !important;
    text-shadow: 0 1px 1px white !important;
    color: #CCC !important;
    cursor: default !important;
    appearance: none !important;
    -webkit-box-shadow: none !important;
            box-shadow: none !important;
    opacity: .8 !important; }
.button-primary,
.button-primary-flat {
  background-color: #1B9AF7;
  border-color: #1B9AF7;
  color: #FFF; }
  .button-primary:visited,
  .button-primary-flat:visited {
    color: #FFF; }
  .button-primary:hover, .button-primary:focus,
  .button-primary-flat:hover,
  .button-primary-flat:focus {
    background-color: #4cb0f9;
    border-color: #4cb0f9;
    color: #FFF; }
  .button-primary:active, .button-primary.active, .button-primary.is-active,
  .button-primary-flat:active,
  .button-primary-flat.active,
  .button-primary-flat.is-active {
    background-color: #2798eb;
    border-color: #2798eb;
    color: #0880d7; }
.button-rounded {
  border-radius: 4px; }
.button-small {
  font-size: 12px;
  height: 30px;
  line-height: 30px;
  padding: 0 30px; }
</style>
