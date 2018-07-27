const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    f:0,
    flag:null,
    // name,
    // phone,
    // city,
    // addr
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.flag){
      this.setData({
        flag: options.flag,
      })
    }
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
  commit(){
    this.judge();
    if(this.data.f!=1){
      wx.showToast({
        title: '请填写完整',
        icon: 'none',
      })
    }
    else{
      var that = this;
      wx.request({
        url: app.globalData.URL + '/address/save',
        data: ({
          area_info:this.data.city+that.data.addr,
          mobile:this.data.phone,
          trueName:this.data.name,
          user_id:32780
        }),
        header: {
          'content-type': 'application/x-www-form-urlencoded' // 默认值
        },
        method:"POST",
        success: function (res) {
          console.log(res.data)
          that.setData({
            addr: res.data
          })
        }
      })
      if (this.data.flag) {
        wx.redirectTo({
          url: '/pages/order-confirm/order-confirm',
        })
      }
      else {
        wx.redirectTo({
          url: '/pages/userinfo/address/address',
        })
      }
    }
  },
  name(e) {
    this.data.name = e.detail.value;
  },
  phone(e) {
    this.data.phone = e.detail.value;
  },
  city(e) {
    this.data.city = e.detail.value;
  },
  addr(e) {
    this.data.addr = e.detail.value;
  },
  judge(){
    var that = this;
    if(that.data.name&&that.data.phone&&that.data.city&&that.data.addr){
      that.setData({
        f:1
      })
    }
  }
})