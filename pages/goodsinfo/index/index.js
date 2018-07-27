const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    webPath: 'http://www.tangcool.store',
    goods:{},
    images:{}, 
    // [{
    //     url: '../static/image/iPad0.jpg'
    //   },
    //   {
    //     url: '../static/image/iPad1.jpeg'
    //   },
    //   {
    //     url: '../static/image/iPad2.jpeg'
    //   },
    //   {
    //     url: '../static/image/iPad3.jpeg'
    //   }

    // ],
    color: [{
        color: '金色',
        id: 0
      },
      {
        color: '银色',
        id: 1
      },
      {
        color: '深空灰色',
        id: 2
      }
    ],
    data: [{
        data: '【2018款】32G WLAN版标配'
      },
      {
        data: '18款32G WLAN版-普通键盘+皮套+钢化膜'
      },
      {
        data: '18款128G WLAN款-普通键盘+皮套+钢化膜'
      }
    ],
    downlist: true,
    downlistagainst: false,
    downlist2: true,
    downlistagainst2: false
  },
  radio: function(e) {
    this.setData({
      id: e.currentTarget.dataset.id
    })
    // console.log(e.currentTarget.dataset.id)
  },
  radioChange: function(e) {
    this.setData({
      msg: e.detail.value
    })
    // console.log(e.detail.value)
  },

  radioChange2: function(e) {
    this.setData({
      msg2: e.detail.value
    })
    // console.log(e.detail.value)
  },
  onClickDownList: function() {
    var downlist = this.data.downlist;
    if (downlist == true) {
      this.setData({
        downlistagainst: true,
        downlist: false
      })
      // console.log(downlist);
      // setData.downlist=false;
    } else {
      this.setData({
        downlistagainst: false,
        downlist: true
      })
      // console.log(downlist);
    }
  },
  onClickDownList2: function() {
    var downlist2 = this.data.downlist2;
    if (downlist2 == true) {
      this.setData({
        downlistagainst2: true,
        downlist2: false
      })
      // console.log(downlist);
      // setData.downlist=false;
    } else {
      this.setData({
        downlistagainst2: false,
        downlist2: true
      })
      // console.log(downlist);
    }
  },
  jumptomore: function(location) {
    wx.redirectTo({
      url: '../more/more'
    })
  },
  jumptojudge: function() {
    wx.redirectTo({
      url: '../judge/judge'
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    wx.request({
      url: app.globalData.URL + '/goods/id',
      data: {
        id: options.id,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
         that.setData({
           goods: res.data,
           images: res.data.zuTu
         })
      }
    })
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
  addToCart(){
    var that = this;
    wx.request({
      url: app.globalData.URL + '/addToCart',
      data: {
        user_id:32780,
        goods_id:this.data.goods.id,
        spec_info:null
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        wx.showToast({
          title: '添加成功',
        })
      }
    })
  }
})