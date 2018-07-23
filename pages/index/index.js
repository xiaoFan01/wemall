const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag1: true,
    flag2: false,
    flag3: false,
    imgUrls: [
      '../../static/img/001.jpg',
      '../../static/img/002.jpg',
      '../../static/img/003.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
    goods: [{
      id: 1,
      name: "APPLE苹果iPad2018新款平板电脑air2更新版9.8英寸 金色WLAN版",
      img: "/static/img/iPad.jpg",
      price: 2088
    },
      {
        id: 1,
        name: "APPLE苹果iPad2018新款平板电脑air2更新版9.8英寸 金色WLAN版",
        img: "/static/img/iPad.jpg",
        price: 2088
      },
      {
        id: 1,
        name: "APPLE苹果iPad2018新款平板电脑air2更新版9.8英寸 金色WLAN版",
        img: "/static/img/iPad.jpg",
        price: 2088
      },
    {
        id: 3,
        name: "APPLE苹果iPad2018新款平板电脑air2更新版9.8英寸 金色WLAN版",
        img: "/static/img/iPad.jpg",
        price: 2988
      },
    {
      id: 4,
      name: "APPLE苹果iPad2018新款平板电脑air2更新版9.8英寸 金色WLAN版",
      img: "/static/img/iPad.jpg",
      price: 2998
    }
    ],
    goods1: [{
      id: 2,
      name: "惠科（HKC）C340 34英寸100Hz刷新准4K高分21:9曲面电竞吃鸡游戏组装主机台",
      img: "/static/img/02.jpg",
      price: 2299
    },
      {
        id: 9,
        name: "惠科（HKC）C340 34英寸100Hz刷新准4K高分21:9曲面电竞吃鸡游戏组装主机台",
        img: "/static/img/02.jpg",
        price: 9999
      }
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  onClick() {
    wx.navigateTo({
      url: '../goodsearch/goodsearch',
    })
  },
  select0: function() {
    this.setData({
      flag1: true,
      flag2: false,
      flag3: false
    })
  },
  select1: function() {
    this.setData({
        flag1: false,
        flag2: true,
        flag3: false
      }),
      wx.redirectTo({
        url: '/pages/cart/cart'
      })
  },
  select2: function() {
    this.setData({
        flag1: false,
        flag2: false,
        flag3: true
      }),
      wx.redirectTo({
        url: '/pages/userinfo/index/index'
      })
  },
  togoodsinfo: function(e) {
    var index = parseInt(e.currentTarget.dataset.index);
    wx.navigateTo({
      url: '/pages/goodsinfo/index/index?id='+this.data.goods[index].id
    })
  },
  togoodsinfo1: function (e) {
    var index = parseInt(e.currentTarget.dataset.index);
    wx.navigateTo({
      url: '/pages/goodsinfo/index/index?id=' + this.data.goods1[index].id
    })
  }
})