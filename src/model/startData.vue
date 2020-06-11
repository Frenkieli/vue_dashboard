<!--
  /**
  * @description 用來獲取從後端來的起始資料
  * @author frenkie
  * @date 2020-06-08
  */
-->
<script>
import fetchStartData from "../interface/data/fetchStartData";
import countToiletQuantity from '../controller/countToiletQuantity';
import countToiletProperty from '../controller/countToiletProperty';
import bindToiletData from '../controller/bindToiletData';
import socketController from '../controller/socketController';
export default {
  mixins: [fetchStartData, bindToiletData, countToiletQuantity, countToiletProperty, socketController],
  name: "startData",
  data() {
    return {
      dashboardData: {
        property: [],
        mapStyle: {
          background: {
            bright: 0,
            color: 0
          },
          itemStyle: {
            background: {
              bright: 0,
              color: 0,
              opacity: 0
            },
            border: {
              bright: 0,
              color: 0,
              opacity: 0,
              width: 0
            },
            textStyle: {
              bright: 0,
              color: 0,
              fontSize: 0,
              opacity: 0
            }
          }
        },
        home: [],
        countTotalItem: [],
        mapImg: [],
        countItem: [],
        mapItem: [],
        propertyItem: [],
        doorDeviceItem: {}
      }
    };
  },
  methods: {
    async getStartData() {
      let vm = this;
      vm.socketInit();
      await vm.fetchStartData().then(res => {
        vm.dashboardData = res;
        vm.deviceValueData();
        // console.log(vm);
      });
    }
  }
};
</script>