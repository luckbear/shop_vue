<template>
    <div>
        <div class="mui-numbox" data-numbox-min="1">
            <!-- "-"按钮，点击可减小当前数值 -->
            <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
            <input class="mui-numbox-input" type="number" :value="goodsCount" @change="changeCount"  ref="box" readonly/>
            <!-- "+"按钮，点击可增大当前数值 -->
            <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
        </div>
    </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.min.js";
export default {
  mounted() {
    mui(".mui-numbox").numbox();
  },

  methods: {
    changeCount() {
        this.$store.commit('updateShopCar',{
            id:this.goodsId,
            count:parseInt(this.$refs.box.value)  
        })
    }
  },
  props: ["goodsCount",'goodsId']
};
</script>

<style lang="less" scoped>
</style>
