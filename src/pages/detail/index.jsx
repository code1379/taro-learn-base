import { View, Text, Button } from "@tarojs/components";
import Taro, { useLoad, useRouter } from "@tarojs/taro";
import "./index.scss";

export default function Detail() {
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

  useLoad(() => {
    console.log("Page loaded.");
    eventChannel.on("acceptDataFromHomePage", (data) => {
      console.log(data);
    });
  });

  return (
    <View className="detail">
      <Text>detail - {params.id}</Text>
      <Button onClick={handleBack}>返回</Button>
    </View>
  );
}
