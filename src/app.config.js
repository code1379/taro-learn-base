// https://docs.taro.zone/docs/app-config
export default defineAppConfig({
  pages: [
    "pages/home/index",
    "pages/category/index",
    "pages/cart/index",
    "pages/profile/index",
    "pages/style-taro/index",
    "pages/cpns/cpns",
    "pages/index/index",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#ff454e",
    navigationBarTitleText: "Taro App",
    navigationBarTextStyle: "white",
  },
  tabBar: {
    color: "#999",
    selectedColor: "#ff464e",
    list: [
      {
        text: "首页",
        pagePath: "pages/home/index",
        iconPath: "assets/tabbar/home.png",
        selectedIconPath: "assets/tabbar/home_active.png",
      },
      {
        text: "分类",
        pagePath: "pages/category/index",
        iconPath: "assets/tabbar/category.png",
        selectedIconPath: "assets/tabbar/category_active.png",
      },
      {
        text: "购物车",
        pagePath: "pages/cart/index",
        iconPath: "assets/tabbar/cart.png",
        selectedIconPath: "assets/tabbar/cart_active.png",
      },
      {
        text: "我的",
        pagePath: "pages/profile/index",
        iconPath: "assets/tabbar/profile.png",
        selectedIconPath: "assets/tabbar/profile_active.png",
      },
    ],
  },
});
