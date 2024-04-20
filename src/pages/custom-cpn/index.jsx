import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import HYButton from "@/components/HYButton";
import { useState } from "react";
import "./index.scss";

export default function CustomCpn() {
  const [show, setShow] = useState(false);
  useLoad(() => {
    console.log("Page loaded.");
  });

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <View className="custom-cpn">
      <HYButton>click me</HYButton>
      <HYButton type="blue" onClick={handleClick}>
        click me
      </HYButton>
      {show && <HYButton type="primary">click me</HYButton>}
    </View>
  );
}
