<script>
import axios from "../module/axiosItem";
export default {
  extends: axios,
  name: "fetchStartData",
  data() {
    return {
      dashboardHome: [],
      dashboardProperty: [],
      dashboardMapStyle: [],
      dashboardMapImg: [],
      dashboardItem: [],
      dashboardMapItem: [],
      dashboardPropertyItem: [],
      dashboardDoorDeviceItem: {}
    };
  },
  methods: {
    fetchStartData() {
      // return this.axiosGet("toilet/toiletInfo/5ea24eec0ea58823cc92b16a").then(res => {
      return this.axiosGet("data.json").then(res => {
        // console.log("獲取啟始資料:");
        // console.log(res.data);
        let dashboardData = res.data;
        let vm = this;
        vm.dashboardProperty = dashboardData.dashboard_property;
        vm.dashboardMapImg = dashboardData.mapData.mapImg;
        vm.dashboardMapStyle = {
          background: dashboardData.mapData.mapBackground,
          itemStyle: dashboardData.mapData.mapItemStyle,
          toiletSize: dashboardData.mapData.toiletOcpnSize
        };
        let mapItem = dashboardData.mapData.mapItem;
        mapItem.forEach(v => {
          let itemID = v._id;
          itemID = itemID.split("_");
          if (itemID[0] !== "map" && itemID.length === 2) {
            vm.dashboardDoorDeviceItem[v._id] = {
              top: v.style.top,
              left: v.style.left,
              value: 0
            };
          } else if (itemID[0] === "map" && itemID.length === 3) {
            vm.dashboardPropertyItem.push(v);
          } else if (itemID.length === 3) {
            vm.dashboardMapItem.push(v);
          }else if(itemID[0] === "map" && itemID.length === 2){
            vm.dashboardItem.push(v);
          }else if(itemID.length === 1){
            vm.dashboardHome.push(v);
          }
        });
        return {
          home: vm.dashboardHome,
          property: vm.dashboardProperty,
          mapStyle: vm.dashboardMapStyle,
          mapImg: vm.dashboardMapImg,
          item: vm.dashboardItem,
          mapItem: vm.dashboardMapItem,
          propertyItem: vm.dashboardPropertyItem,
          doorDeviceItem: vm.dashboardDoorDeviceItem
        };
      }).catch((err)=>{
        console.log('獲取起始資料失敗:' , err)
      });
    }
  }
};
</script>