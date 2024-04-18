// 全局变量
// 1. 类组件使用 https://docs.taro.zone/docs/come-from-miniapp#react
// 2. 函数组件 全局定义 https://docs.taro.zone/docs/best-practice#%E5%85%A8%E5%B1%80%E5%8F%98%E9%87%8F

const globalData = {
  name: "dell",
};

export function set(key, val) {
  globalData[key] = val;
}

export function get(key) {
  return globalData[key];
}
