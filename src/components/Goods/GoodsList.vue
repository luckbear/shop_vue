<template>
    <div>
        <div class="product">
            <img src="https://i1.mifile.cn/a1/pms_1509723483.31416776!200x200.jpg" alt="">
            <h2>小米MIX 2 全网通版 8GB内存 全陶瓷尊享版</h2>
            <div class="price">
                <span class="nowPri">&yen;999</span>
                <span class="oldPri">&yen;1199</span>
            </div>
            <div class="num">
                <span>热卖中</span>
                <span>剩余12件</span>
            </div>
        </div>
                <div class="product">
            <img src="https://i1.mifile.cn/a1/pms_1509723483.31416776!200x200.jpg" alt="">
            <h2>小米MIX 2 全网通版 8GB内存 全陶瓷尊享版</h2>
            <div class="price">
                <span class="nowPri">&yen;999</span>
                <span class="oldPri">&yen;1199</span>
            </div>
            <div class="num">
                <span>热卖中</span>
                <span>剩余12件</span>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style lang="less" scoped>
.product {
  display: inline-block;
  width: 46%;
  margin-left: 2%;
  img {
    display: block;
    width: 100%;
    margin: auto;
  }
  h2 {
    font-size: 14px;
    line-height: 18px;
  }
  .price {
    .nowPri {
      color: orange;
      margin: 0 5   px;
    }
    .oldPri {
      font-size: 13px;
      text-decoration: line-through;
    }
  }
  .num {
    font-size: 12px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
