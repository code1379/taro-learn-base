import {
  View,
  Text,
  Button,
  Image,
  ScrollView,
  Swiper,
  SwiperItem,
} from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
// 手动引入本地图片
import chongqing from "@/assets/chongqing.jpg";

import "./cpns.scss";

// http://codercba.com:8000/home/multidata

export default function Cpns() {
  const list = [
    {
      acm: "3.mce.2_10_1jhwa.43542.0.ccy5br4OlfK0Q.pos_0-m_454801-sd_119",
      height: 390,
      height923: 390,
      image:
        "https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg",
      image923:
        "https://s10.mogucdn.com/mlcdn/c45406/180926_7d5c521e0aa3h38786lkakebkjlh8_750x390.jpg",
      link: "https://act.mogujie.com/huanxin0001?acm=3.mce.2_10_1jhwa.43542.0.ccy5br4OlfK0Q.pos_0-m_454801-sd_119",
      title: "焕新女装节",
      width: 750,
      width923: 750,
    },
    {
      acm: "3.mce.2_10_1ji16.43542.0.ccy5br4OlfK0R.pos_1-m_454889-sd_119",
      height: 390,
      height923: 390,
      image:
        "https://s10.mogucdn.com/mlcdn/c45406/180926_31eb9h75jc217k7iej24i2dd0jba3_750x390.jpg",
      image923:
        "https://s10.mogucdn.com/mlcdn/c45406/180926_14l41d2ekghbeh771g3ghgll54224_750x390.jpg",
      link: "https://act.mogujie.com/ruqiu00001?acm=3.mce.2_10_1ji16.43542.0.ccy5br4OlfK0R.pos_1-m_454889-sd_119",
      title: "入秋穿搭指南",
      width: 750,
      width923: 750,
    },
    {
      acm: "3.mce.2_10_1jfj8.43542.0.ccy5br4OlfK0S.pos_2-m_453270-sd_119",
      height: 390,
      height923: 390,
      image:
        "https://s10.mogucdn.com/mlcdn/c45406/180919_3f62ijgkj656k2lj03dh0di4iflea_750x390.jpg",
      image923:
        "https://s10.mogucdn.com/mlcdn/c45406/180919_47iclhel8f4ld06hid21he98i93fc_750x390.jpg",
      link: "https://act.mogujie.com/huanji001?acm=3.mce.2_10_1jfj8.43542.0.ccy5br4OlfK0S.pos_2-m_453270-sd_119",
      title: "秋季护肤大作战",
      width: 750,
      width923: 750,
    },
    {
      acm: "3.mce.2_10_1jepe.43542.0.ccy5br4OlfK0T.pos_3-m_452733-sd_119",
      height: 390,
      height923: 390,
      image:
        "https://s10.mogucdn.com/mlcdn/c45406/180917_18l981g6clk33fbl3833ja357aaa0_750x390.jpg",
      image923:
        "https://s10.mogucdn.com/mlcdn/c45406/180917_0hgle1e2c350a57ekhbj4f10a6b03_750x390.jpg",
      link: "https://act.mogujie.com/liuxing00001?acm=3.mce.2_10_1jepe.43542.0.ccy5br4OlfK0T.pos_3-m_452733-sd_119",
      title: "流行抢先一步",
      width: 750,
      width923: 750,
    },
  ];
  useLoad(() => {
    console.log("Cpns Page loaded.");
  });

  return (
    <View>
      <Text>Cpns</Text>
      <Button type="primary">click</Button>
      <Image src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <Image src={chongqing} className="image" />
      <Swiper className="banner" indicatorDots autoplay circular>
        {list.map((item, index) => (
          <SwiperItem key={index}>
            <Image src={item.image} className="banner-item-image" />
          </SwiperItem>
        ))}
      </Swiper>
      <ScrollView scrollY className="v-scroll">
        {Array.from({ length: 30 }, (v, i) => i).map((i) => (
          <View key={i} className="v-item">
            {i}
          </View>
        ))}
      </ScrollView>

      <ScrollView scrollX className="h-scroll">
        <View className="h-list">
          {Array.from({ length: 30 }, (v, i) => i).map((i) => (
            <View key={i} className="h-item">
              {i}
            </View>
          ))}
        </View>
      </ScrollView>

      <ScrollView scrollX className="h-scroll2">
        {Array.from({ length: 30 }, (v, i) => i).map((i) => (
          <View key={i} className="h-item2">
            {i}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
