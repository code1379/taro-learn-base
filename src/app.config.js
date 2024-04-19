// https://docs.taro.zone/docs/app-config
export default defineAppConfig({
  pages: ["pages/style-taro/index", "pages/cpns/cpns", "pages/index/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#ff454e",
    navigationBarTitleText: "Taro App",
    navigationBarTextStyle: "white",
  },
});
