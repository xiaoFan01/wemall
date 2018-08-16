const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    color1: "red",
    color2: "black",
    color3: "black",
    color4: "black",
    webPath: 'http://www.tangcool.store',
    order:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.allorder();
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
  select1: function () {
    this.allorder(),
    this.setData({
      color1: "red",
      color2: "black",
      color3: "black",
      color4: "black",
    })
  },
  select2: function () {
    var that = this;
    wx.request({
      url: app.globalData.URL + '/orderform/findByStore_idAndOrder_status',
      data: {
        store_id: 32769,
        order_status: 10
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        that.setData({
          order: res.data
        })
        console.log(that.data.order)
      }
    })
    that.setData({
      color1: "black",
      color2: "red",
      color3: "black",
      color4: "black",
    })
  },
  select3: function () {
    var that = this;
    wx.request({
      url: app.globalData.URL + '/orderform/findByStore_idAndOrder_status',
      data: {
        store_id: 32769,
        order_status: 20
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        that.setData({
          order: res.data
        })
        console.log(that.data.order);
      }
    })
    that.setData({
      color1: "bleak",
      color2: "black",
      color3: "red",
      color4: "black",
    })
  },
  select4: function () {
    var that = this;
    wx.request({
      url: app.globalData.URL + '/orderform/findByStore_idAndOrder_status',
      data: {
        store_id: 32769,
        order_status: 40
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        that.setData({
          order: res.data
        })
        console.log(that.data.order)
      }
    })
    that.setData({
      color1: "bleak",
      color2: "black",
      color3: "bleak",
      color4: "red",
    })
  },
  allorder(){
    var that = this;
    wx.request({
      url: app.globalData.URL + '/orderform/findAll',
      data: {
        store_id: 32769,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        that.setData({
          order: res.data
        })
        console.log(res.data)
      }
    })
  },
  order_msg(e){
    var index = parseInt(e.currentTarget.dataset.index);
    wx.navigateTo({
      url: '/pages/order-msg/order-msg?id=' + this.data.order[index].of_id
    })
  }
})