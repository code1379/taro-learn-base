import { View, Text, Button } from "@tarojs/components";
import Taro, { useLoad, useRouter } from "@tarojs/taro";
import "./index.scss";
import { useUnload } from "@tarojs/taro";
import { useReady } from "@tarojs/taro";
import { useDidShow } from "@tarojs/taro";
import { useDidHide } from "@tarojs/taro";
import { usePullDownRefresh } from "@tarojs/taro";
import { useReachBottom } from "@tarojs/taro";
import { useRef } from "react";

export default function Detail() {
  // useRef 存的对象在整个组件的生命周期中都保持同一个对象
  const instanceRef = useRef(Taro.getCurrentInstance());

  console.log(
    "instanceRef.current.router.params",
    instanceRef.current.router.params
  );
  // const instance = Taro.getCurrentInstance();
  // const eventChannel = instance.page.getOpenerEventChannel();
  const pages = Taro.getCurrentPages();
  const page = pages[pages.length - 1];
  const eventChannel = page.getOpenerEventChannel();
  const { params } = useRouter();

  const handleBack = () => {
    Taro.navigateBack({
      delta: 1,
    });
    eventChannel.emit("acceptDataFromDetailPage", {
      data: "从详情页面返回给首页的数据",
    });
  };

  const handleBack1 = () => {
    Taro.navigateBack({
      delta: 1,
    });
    Taro.eventCenter.trigger("dataFromDetail", {
      data: "dataCenter 详情页发出的数据",
    });
  };

  // 页面生命周期
  useLoad((options) => {
    console.log("detail page loaded", options);
    eventChannel.on("acceptDataFromHomePage", (data) => {
      console.log(data);
    });
  });

  useReady(() => {
    console.log("detail page ready");
  });

  useUnload(() => {
    console.log("detail page unloaded");
  });

  useDidShow(() => {
    console.log("detail page show");
  });

  useDidHide(() => {
    console.log("detail page hide");
  });

  // 下拉刷新
  usePullDownRefresh(() => {
    console.log("detail page pull down refresh");
    setTimeout(() => {
      Taro.stopPullDownRefresh();
    }, 1000);
  });

  // 上拉触底
  useReachBottom(() => {
    console.log("detail page reach bottom");
  });

  return (
    <View className="detail">
      <Text>detail - {params.id}</Text>
      <Button onClick={handleBack}>返回 eventChannel</Button>
      <Button onClick={handleBack1}>返回 eventCenter</Button>
      {Array.from({ length: 10 }, (v, i) => {
        return (
          <View className="detail-item" key={i}>
            {i}
          </View>
        );
      })}
    </View>
  );
}
