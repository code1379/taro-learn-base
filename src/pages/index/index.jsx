import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.scss";
import { get as getGlobalData } from "@/global_data.js";

export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
    console.log(VERSION);
  });

  const name = getGlobalData("name");

  return (
    <View className="index global-style">
      <Text>Hello {name}!</Text>
    </View>
  );
}
