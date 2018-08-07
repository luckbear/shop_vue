<template>
    <div class="appContainer">
        <!-- mint-ui中的固定在顶部 -->
        <div class="head">
            <mt-header fixed title="vue移动商城">
              <span to="/" slot="left" @click="back" v-show="hidden">
                <mt-button icon="back">返回</mt-button>
              </span>
            </mt-header>
        </div>


        <transition>
            <router-view></router-view>
        </transition>


        <!-- mui中的Tapbar -->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item1" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/member">
				<span class="mui-icon mui-icon-person"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span id="carBadge"
         class="mui-badge">{{$store.getters.getAllCount}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    </div>
</template>

<script>
export default {
  data() {
    return {
      hidden: false
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  },
  watch: {
    "$route.path": function(newVal) {
      if (newVal == "/home") {
        this.hidden = false;
      }else{
        this.hidden=true;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.appContainer {
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden;
  .mui-bar-tab {
    background-color: #fff;
    .mui-tab-item1 {
      display: table-cell;
      overflow: hidden;
      width: 1%;
      height: 50px;
      text-align: center;
      vertical-align: middle;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: #929292;
      .mui-icon {
        top: 3px;
        width: 24px;
        height: 24px;
        padding-top: 0;
        padding-bottom: 0;
      }
      .mui-icon ~ .mui-tab-label {
        font-size: 11px;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .mui-tab-item1.mui-active {
      color: #007aff;
    }
  }
  .v-enter {
    opacity: 0;
    transform: translateX(100%);
  }
  .v-leave-to {
    position: absolute;
    opacity: 0;
    transform: translateX(-100%);
  }
  .v-enter-active,
  .v-leave-active {
    transition: all 0.2s ease;
  }
  * {
    touch-action: pan-y;
  }
}
</style>


