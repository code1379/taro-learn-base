import { View, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./index.scss";
import "./no-transform-unit.scss";

export default function index() {
  const inlineStyle = {
    // fontSize: 30,
    fontSize: Taro.pxTransform(30),
    color: "green",
  };
  return (
    <View>
      <Text className="style-taro">单位 px 转换为 rpx 和 rem</Text>
      <View className="no-transform-unit">
        <Text>不转换单位</Text>
      </View>

      <View>
        {/* 不写到 Text 里面也可以显示 */}
        <Text style={inlineStyle}>行内样式</Text>
      </View>
    </View>
  );
}
