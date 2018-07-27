const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    webPath: 'http://www.tangcool.store',
    id:null,
    totalMoney:0,
    //商品详情介绍
    carts:{}, 
    // [
    //   {
    //     id: 1,
    //     pic: "/static/img/iPad.jpg",
    //     name: "APPLE苹果iPad2018款大苏打阿瑟东撒的阿瑟东阿瑟东撒的阿瑟东阿瑟东阿瑟东阿三的",
    //     price: 2088,
    //     isSelect: false,
    //     // 数据设定
    //     count: 2
    //   },
    //   {
    //     id: 2,
    //     pic: "/static/img/02.jpg",
    //     name: "惠科（HKC）C340 34英寸",
    //     price: 2299,
    //     isSelect: false,
    //     // 数据设定
    //     count: 1
    //   }],
    addr:{} 
    // {
    //   id: 1,
    //   addr: "陕西省西安市长安区",
    //   name: "小明",
    //   phone: "1234564789",
    //   isSelect: true
    // }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: app.globalData.URL + '/cart',
      data: {
        user_id: 32780,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          carts: res.data
        })
      }
    })
    if (options.id){
      wx.request({
        url: app.globalData.URL+"/address/id",
        data:{
          id: options.id
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
    }
    else{
      wx.request({
        url: app.globalData.URL + "/address/user_id",
        data: {
          user_id: 32780
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
      console.log(this.data.addr+"123");
      if(!this.data.addr){
        wx.navigateTo({
          url: '/pages/userinfo/addaddress/addaddress?flag=1',
        })
      }
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      totalMoney:app.globalData.totalMoney
    })
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
  chooseaddr(){
    wx.redirectTo({
      url: '/pages/choose-addr/choose-addr',
    })
  }
})