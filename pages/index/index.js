const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Height:"",
    Width:"",
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
    duration: 500
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      Height:app.globalData.windowHeight,
      Width: app.globalData.windowWidth
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  select0: function(){
    this.setData({
      flag1:true,
      flag2:false,
      flag3:false
    })
  },
  select1: function () {
    this.setData({
      flag1: false,
      flag2: true,
      flag3: false
    }),
    wx.redirectTo({
      url: '/pages/cart/cart'
    })
  },
  select2: function () {
    this.setData({
      flag1: false,
      flag2: false,
      flag3: true
    }),
      wx.redirectTo({
        url: '/pages/userinfo/index/index'
      })
  },
  togoodsinfo: function () {
    wx.navigateTo({
      url: '/pages/goodsinfo/index/index'
    })
  }
})