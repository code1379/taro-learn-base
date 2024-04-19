import { View, Text } from "@tarojs/components";
import Taro, { useLoad, useRouter } from "@tarojs/taro";
import "./index.scss";

export default function Detail() {
  const instance = Taro.getCurrentInstance();
  const eventChannel = instance.page.getOpenerEventChannel();
  useLoad(() => {
    console.log("Page loaded.");
    eventChannel.on("acceptDataFromHomePage", (data) => {
      console.log(data);
    });
  });

  const { params } = useRouter();

  return (
    <View className="detail">
      <Text>detail - {params.id}</Text>
    </View>
  );
}
