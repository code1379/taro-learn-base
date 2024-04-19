import { View, Text, Button } from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";
import api from "@/api";
import "./index.scss";

export default function Service() {
  const getHomeData = async () => {
    // http://codercba.com:8000/home/multidata
    // Taro.request({
    //   url: "http://codercba.com:8000/home/multidata",
    //   method: "GET",
    //   data: {},
    //   success: (res) => {
    //     console.log("res", res);
    //   },
    //   fail: () => {},
    // });
    // api.get("/home/multidata").then((res) => {
    //   console.log("res", res);
    // });
    const res = await api.get("/home/multidata");
    console.log("res", res);
  };

  useLoad(() => {
    console.log("Page loaded.");
    getHomeData();
  });

  const saveData = () => {
    Taro.setStorageSync("profile", { name: "dell", age: 18 });
  };

  const getData = () => {
    const profile = Taro.getStorageSync("profile");
    console.log("profile", profile);
  };

  return (
    <View className="service">
      <Text>Service</Text>
      <View>本地数据存储</View>
      <Button onClick={saveData}>存储</Button>
      <Button onClick={getData}>获取</Button>
    </View>
  );
}
