import { View } from "@tarojs/components";
import { memo, useEffect } from "react";
import styles from "./index.module.scss";
import classNames from "classnames";
import PropTypes from "proptypes";
import { useLoad, useDidHide } from "@tarojs/taro";

const HYButton = (props) => {
  const { children, type = "default", onClick: pOnClick } = props;
  const cls = classNames(styles["hy-button"], styles[type]);

  const handleClick = (e) => {
    console.log("click");
    pOnClick?.(e);
  };

  useEffect(() => {
    console.log("btn mounted");
    return () => {
      console.log("btn unmounted");
    };
  }, []);

  return (
    <View className={cls} onClick={handleClick}>
      {children}
    </View>
  );
};

HYButton.prototype = {
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default memo(HYButton);
