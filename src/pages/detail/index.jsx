import { View, Text } from "@tarojs/components";
import { useLoad, useRouter } from "@tarojs/taro";
import "./index.scss";

export default function Detail() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  const { params } = useRouter();

  return (
    <View className="detail">
      <Text>detail - {params.id}</Text>
    </View>
  );
}
