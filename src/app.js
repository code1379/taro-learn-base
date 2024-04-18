import { useLaunch } from "@tarojs/taro";
import "./app.scss";

function App({ children }) {
  // 入口文件， class 生命周期 https://docs.taro.zone/docs/react-entry#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E6%96%B9%E6%B3%95

  // 入口文件，function 生命周期 https://docs.taro.zone/docs/apis/taro.hooks/useLaunch
  // https://docs.taro.zone/docs/hooks#taro-hooks
  useLaunch(() => {
    console.log("App launched.");
  });

  // children 是将要会渲染的页面
  return children;
}

export default App;
