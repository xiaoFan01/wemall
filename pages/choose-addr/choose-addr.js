const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: null,
    addr:{} 
    // [{
    //   id: 1,
    //   addr: "陕西省西安市长安区",
    //   name: "小明",
    //   phone: "1234564789",
    // },
    // {
    //   id: 2,
    //   addr: "陕西省西安市长安区",
    //   name: "张三",
    //   phone: "9876543210",
    // }
    // ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: app.globalData.URL + '/address/user_id',
      data: {
        user_id: 32780,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          addr: res.data
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
  select(e) {
    var index = parseInt(e.target.dataset.index);
    var i = 0;
    console.log("index" + index);
    this.data.addr[index].isSelect = !this.data.addr[index].isSelect;
    console.log(this.data.addr[index].isSelect);
    let addr = this.data.addr
    for (i = 0; i < this.data.addr.length; i++) {
      addr[i].isSelect = false
    }
    addr[index].isSelect = true;
    this.setData({
      addr,
      id: this.data.addr[index].id
    })
  },
  add: function (e) {
    if(this.data.id==null){
      wx.showToast({
         title: '请选择',
         icon: 'none',
         duration: 3000
       });
    }
    else{
      var index = parseInt(e.target.dataset.index);
      wx.redirectTo({
        url: '/pages/order-confirm/order-confirm?id=' + this.data.id,
      })
    }
  },
})