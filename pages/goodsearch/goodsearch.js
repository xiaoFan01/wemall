// pages/dharma.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    webPath: 'http://www.tangcool.store',
    h1:false,
    h2:false,
    h3:false,
    hidden:true,
    goods:{},
    // [
    //   {
    //     id:5,
    //     name:"APPLE苹果iPad2018新款平板电脑air2更新版9APPLE苹果iPad2018新款平板电脑air2更新版9APPLE苹果iPad2018新款平板电脑",
    //     price:2599,
    //     img:"/static/img/iPad.jpg"
    //   }
    // ]
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
  word(e){
    this.data.word = e.detail.value;
  },
  onsearch(e){
    console.log(this.data.word);
    var that = this;
    wx.request({
      url: app.globalData.URL + '/goods/like',
      data: {
        goods_store_id: 32769,
        word:that.data.word,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        if(res.data){
          that.setData({
            hidden: false,
          })
        }
        that.setData({
          goods: res.data
        })
      }
    })
  },
  
  togoodsinfo(e){
    var index = parseInt(e.currentTarget.dataset.index);
    wx.navigateTo({
      url: '/pages/goodsinfo/index/index?id=' + this.data.goods[index].id
    })
    console.log(this.data.goods[index].id)
  },
  

  onselect1(){
    this.setData({
      h1:true,
      h2:false,
      h3:false
    })
  },

  onselect2: function () {
    this.setData({
      h1: false,
      h2: true,
      h3: false
    })
  },

  onselect3: function () {
    this.setData({
      h1: false,
      h2: false,
      h3: true
    })
  },
  togoodsinfo: function (e) {
    var index = parseInt(e.currentTarget.dataset.index);
    wx.navigateTo({
      url: '/pages/goodsinfo/index/index?id=' + this.data.goods[index].id
    })
  }
})