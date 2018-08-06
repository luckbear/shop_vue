<template>
    <div>
        <div class="mui-numbox" data-numbox-min="1">
            <!-- "-"按钮，点击可减小当前数值 -->
            <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
            <input class="mui-numbox-input" type="number" value="1" @change="numChange" ref="box"/>
            <!-- "+"按钮，点击可增大当前数值 -->
            <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
        </div>
    </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.min.js";
export default {
  props: ["maxNum"],

  //通过侦听器拿到父组件得到的商品库存值并赋值给numbox
  watch: {
    maxNum: function(newValue, oldValue) {
      mui(".mui-numbox")
        .numbox()
        .setOption("max", newValue);
    }
  },

  methods: {
    numChange() {
      //文本框发生改变时就把最新的值保存到父组件的data中
      this.$emit("getSelectNum", parseInt(this.$refs.box.value));
    }
  }
};
</script>

<style lang="less" scoped>
</style>
