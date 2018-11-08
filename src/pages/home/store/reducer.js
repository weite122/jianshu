import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: "故事",
    imgUrl:"//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
  },{
    id: 2,
    title: "手绘",
    imgUrl:"//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
  },{
    id: 3,
    title: "@IT·互联网",
    imgUrl:"https://upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
  },{
    id: 4,
    title: "自然科普",
    imgUrl:"//upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
  },{
    id: 5,
    title: "读书",
    imgUrl:"//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
  },{
    id: 6,
    title: "摄影",
    imgUrl:"//upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
  },{
    id: 7,
    title: "旅行·在路上",
    imgUrl:"//upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
  }],
  articleList: [{
    id: 1,
    title: "“寂静”的宇宙",
    desc: "XSH 曾几何时啊，我们每个人都想过我们的世界究竟在哪，地球之外又是什么，我们究竟又是怎样地存在。从138.2亿年前",
    imgUrl:"//upload-images.jianshu.io/upload_images/12961714-3318dd46510b0806.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
  },{
    id: 2,
    title: "“九一八事变”时，张学良有多牛？",
    desc: "“九一八事变”，是东北人们心中永远的痛，也是中华民族永远的痛。 虽然当时蒋介石对日本奉行消极政策，但作为东北军政负责人的张学良，无疑负有首要责任",
    imgUrl:"//upload-images.jianshu.io/upload_images/12970526-97710d0be7880964.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
  },{
    id: 3,
    title: "“你好，有偿吗？”-大型直男撩妹车祸现场：95后小姐姐豆瓣征友炸出的80例反面教材",
    desc: "不过了了的一位95后朋友Linda，最近在豆瓣上发了一个征男友的帖子，有图有文，坐标、职业、还有一些基本的个人信息也都说得很清楚。 这位小姐姐呢",
    imgUrl:"https://upload-images.jianshu.io/upload_images/28277-5f3277e5e54b1f2e?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
  },{
    id: 4,
    title: "15条让内心变强大的哲理",
    desc: "15条让内心变强大的哲理 人生没有绝对的公平，但有相对公平。你得到的越多，也必须比别人承受得更多。在人生的任何时候都不怕重头再来。 1、无论做什",
    imgUrl:"https://upload-images.jianshu.io/upload_images/4501092-197cf78b9105c220.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
  },{
    id: 5,
    title: "像超模刘雯一样健康减肥，吃得少不如吃的巧",
    desc: "女生喊得最多的话就是“我要减肥”新陈代谢这个生理现象真是不得不服。但女生减肥就像男人戒烟一样难，而且决心也很值得商榷。节食多日的小编，只不过多吃",
    imgUrl:"https://upload-images.jianshu.io/upload_images/13038478-ef4a0447cdfeae7e?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
  }],
  "recommendList": [{
    "id": 1,
    "imgUrl": "http://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png"
  }, {
    "id": 2,
    "imgUrl": "http://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png"
  }, {
    "id": 3,
    "imgUrl": "http://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
  }, {
    "id": 4,
    "imgUrl": "http://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"
  }, {
    "id": 5,
    "imgUrl": "//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png"
  }]
})

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}