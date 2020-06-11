<!--
  /**
  * @description 用來獲取地圖資料並標準化的接口
  * @author frenkie
  * @date 2020-06-08
  */
-->
<script>
import axios from "../module/axiosItem";
export default {
  extends: axios,
  name: "fetchStartData",
  methods: {
    fetchStartData() {
      let dashboardHome = [];
      let dashboardProperty = [];
      let dashboardMapStyle = [];
      let dashboardMapImg = [];
      let dashboardCountTotalItem = [];
      let dashboardCountItem = [];
      let dashboardMapItem = [];
      let dashboardPropertyItem = [];
      let dashboardDoorDeviceItem = {};
      return this.axiosGet("toilet/toiletInfo/5ea24eec0ea58823cc92b16a").then(res => {
      // return this.axiosGet("data.json").then(res => {
        // console.log("獲取啟始資料:");
        // console.log(res.data);
        let dashboardData = res.data;
        dashboardProperty = dashboardData.dashboard_property;
        dashboardMapImg = dashboardData.mapData.mapImg;
        dashboardMapStyle = {
          background: dashboardData.mapData.mapBackground,
          itemStyle: dashboardData.mapData.mapItemStyle,
          toiletSize: dashboardData.mapData.toiletOcpnSize
        };
        let mapItem = dashboardData.mapData.mapItem;
        mapItem.forEach(v => {
          let itemID = v._id;
          itemID = itemID.split("_");
          if (itemID[0] !== "map" && itemID.length === 2) {
            dashboardDoorDeviceItem[v._id] = {
              top: v.style.top,
              left: v.style.left,
              gender: v.style.gender,
              isSit: v.style.isSit,
              transform: v.style.transform,
            };
          } else if (itemID[0] === "map" && itemID.length === 3) {
            dashboardPropertyItem.push(v);
          } else if (itemID.length === 3) {
            dashboardMapItem.push(v);
          }else if(itemID[0] === "map" && itemID.length === 2){
            if(itemID[1] === 'total'){
              dashboardCountTotalItem.push(v);
            }else{
              dashboardCountItem.push(v);
            }
          }else if(itemID.length === 1){
            dashboardHome.push(v);
          }
        });
        return {
          home: dashboardHome,
          property: dashboardProperty,
          mapStyle: dashboardMapStyle,
          mapImg: dashboardMapImg,
          countTotalItem: dashboardCountTotalItem,
          countItem: dashboardCountItem,
          mapItem: dashboardMapItem,
          propertyItem: dashboardPropertyItem,
          doorDeviceItem: dashboardDoorDeviceItem
        };
      }).catch((err)=>{
        console.log('獲取起始資料失敗:' , err)
      });
    }
  }
};
</script>