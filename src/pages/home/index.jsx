import { View, Button, Navigator } from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";

import "./index.scss";

export default function Home() {
  useLoad((options) => {
    console.log("Page loaded.", options);
  });

  const handleClick = () => {
    Taro.navigateTo({
      url: "/pages/detail/index?id=2",
      // 注意，这种方式只支持微信小程序端
      success: (res) => {
        // console.log(res);
        // 通过 eventChannel 向被打开页面传送数据
        res.eventChannel.emit("acceptDataFromHomePage", {
          name: "dell",
          age: 18,
        });
      },
    });
    // Taro.redirectTo({
    //   url: "/pages/detail/index?id=2",
    // });
    // Taro.switchTab({
    //   url: "/pages/category/index",
    // });
  };
  return (
    <View className="home">
      <View>1. 页面跳转（组件）</View>
      {/* 跳转有返回 */}
      <Navigator url="/pages/detail/index?id=1" openType="navigate">
        <Button>详情页 navigate</Button>
      </Navigator>
      {/* 重定向，跳转无返回 */}
      <Navigator url="/pages/detail/index?id=1" openType="redirect">
        <Button>详情页 redirect</Button>
      </Navigator>
      <Navigator url="/pages/category/index" openType="switchTab">
        <Button>分类tab页 switchTab</Button>
      </Navigator>
      <View>2. 页面跳转（API）</View>
      <Button onClick={handleClick}>跳转到详情页</Button>
    </View>
  );
}
