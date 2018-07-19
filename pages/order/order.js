Page({

  /**
   * 页面的初始数据
   */
  data: {
    color1: "red",
    color2: "black",
    color3: "black",
    color4: "black",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    this.setData({
      color1: "red",
      color2: "black",
      color3: "black",
      color4: "black",
    })
  },
  select2: function () {
    this.setData({
      color1: "black",
      color2: "red",
      color3: "black",
      color4: "black",
    })
  },
  select3: function () {
    this.setData({
      color1: "bleak",
      color2: "black",
      color3: "red",
      color4: "black",
    })
  },
  select4: function () {
    this.setData({
      color1: "bleak",
      color2: "black",
      color3: "bleak",
      color4: "red",
    })
  }
})