import { View, Button, Navigator } from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";

import "./index.scss";
import { useUnload } from "@tarojs/taro";

export default function Home() {
  // const eventChannel = instance.page.getOpenerEventChannel();
  const pages = Taro.getCurrentPages();
  const page = pages[pages.length - 1];
  const eventChannel = page.getOpenerEventChannel();

  const listenDataFromDetail = (data) => {
    console.log("data", data);
  };

  useLoad(() => {
    console.log("Page loaded.");

    Taro.eventCenter.on("dataFromDetail", listenDataFromDetail);
  });

  useUnload(() => {
    Taro.eventCenter.off("dataFromDetail", listenDataFromDetail);
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

  const handleClick1 = () => {
    Taro.navigateTo({
      url: "/pages/detail/index?id=22",
      events: {
        acceptDataFromDetailPage: function (data) {
          console.log(data);
        },
      },
    });
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
      <Button onClick={handleClick1}>跳转到详情页 - 接收详情页返回数据</Button>
    </View>
  );
}
