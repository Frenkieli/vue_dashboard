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
export default {
  mixins: [fetchStartData, countToiletQuantity],
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
        home: {
          style: {
            top: 0,
            left: 0
          }
        },
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
      this.dashboardData = await this.fetchStartData();
    }
  }
};
</script>