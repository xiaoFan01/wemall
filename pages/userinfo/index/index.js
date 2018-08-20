const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag1: false,
    flag2: false,
    flag3: true,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    console.log("123")
    try {
      wx.setStorageSync('userInfo', e.detail.userInfo);
      console.log(e.detail.userInfo)
    } catch (e) {
      console.log("缓存失败")
    }
  },
  select0: function() {
    this.setData({
        flag1: true,
        flag2: false,
        flag3: false
      }),
      wx.redirectTo({
        url: '/pages/index/index',
      })
  },
  select1: function() {
    this.setData({
        flag1: false,
        flag2: true,
        flag3: false
      }),
      wx.redirectTo({
        url: '/pages/cart/cart',
      })
  },
  select2: function() {
    this.setData({
      flag1: false,
      flag2: false,
      flag3: true
    })
  },
  toaddress: function() {
    wx.navigateTo({
      url: '/pages/userinfo/address/address',
    })
  },
  tomyorder() {
    wx.navigateTo({
      url: '/pages/order/order',
    })
  },
  tomystore(){
    wx.navigateTo({
      url: '/pages/admin/admin-1',
    })
  }
})