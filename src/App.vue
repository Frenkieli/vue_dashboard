<template>
  <div id="app"></div>
</template>

<script>
import "./assets/lib/css/reset.css";

//moduleInterface
import socketItem from "./interface/module/socketItem";

/**
 * @description 用來獲取從後端來的起始資料並標準化
 * @author frenkie
 * @date 2020-06-09
  @param {object} dashboardData  {
                                    property: [],
                                    mapStyle: [],
                                    mapImg: [],
                                    item: [],
                                    mapItem: [],
                                    propertyItem: [],
                                    doorDeviceItem: {}
                                  }
 */
import getStartData from "./model/startData";

// import HelloWorld from './components/HelloWorld.vue'
export default {
  // extends: socketItem,
  mixins: [socketItem, getStartData],
  name: "App",
  data() {
    return {};
  },

  // components: {
  //   HelloWorld
  // },

  created() {
    let vm = this;
    vm.connectSocket();
    vm.getStartData();
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
#app {
  position: relative;
  width: 100%;
  height: 100vh;
  font-family: arial, Microsoft JhengHei, sans-serif;
  line-height: 1.15;
}
</style>
