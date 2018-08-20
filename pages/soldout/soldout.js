const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    webPath: 'http://www.tangcool.store',
    goods:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: app.globalData.URL + '/goods',
      data: {
        goods_store_id: 32769,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          goods: res.data
        })
      }
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
  sold_out(e){
    var that = this;
    var index = parseInt(e.currentTarget.dataset.index);
    console.log(that.data.goods[index].id)
    wx.request({
      url: app.globalData.URL + '/down',
      data: {
        id: that.data.goods[index].id,
      },
      success: function (res) {
        console.log(res.data)
        wx.showToast({
          title: '已下架',
        })
      }
    })
  }
})