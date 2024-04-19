import { View, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./index.scss";
import "./no-transform-unit.scss";

import styles from "./index.module.scss";

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

      <View className={styles["local-style"]}>
        <Text>编写局部样式</Text>
        <Text className={styles.name}>name</Text>
      </View>

      <View className="title">在局部样式中使用 :global 定义的全局样式</View>

      <View className={styles["bg-img"]}></View>

      <Text className="iconfont icon-tuichu text" />
    </View>
  );
}
