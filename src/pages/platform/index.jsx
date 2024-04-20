import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.scss";
import HYButton from "@/components/HYButton";

export default function Platform() {
  // weapp / swan /alipay / tt / qq/ jd / h5 / rn
  console.log("platform ", process.env.TARO_ENV);

  const platform = process.env.TARO_ENV;

  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View className="platform">
      {platform == "h5" && (
        <>
          <View>1. 我是 h5 端专有的组件</View>
          <HYButton>click</HYButton>
        </>
      )}
      {platform == "weapp" && (
        <>
          <View>2. 我是 weapp 端专有的组件</View>
          <HYButton type="primary">click</HYButton>
        </>
      )}
    </View>
  );
}
