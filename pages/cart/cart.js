const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    webPath:"http://www.tangcool.store",
    flag1: false,
    flag2: true,
    flag3: false,
    hidden: false,
    hiddenEmpty: true,
    isAllSelect: false,
    totalMoney: 0,
    //商品详情介绍
    carts:{} 
    // [
    //   {
    //     id: 1,
    //     pic: "/static/img/iPad.jpg",
    //     name: "APPLE苹果iPad2018款平板电脑air2更新版9APPLE苹果iPad2018新款平板电脑",
    //     price: 2088,
    //     isSelect: false,
    //     // 数据设定
    //     count: 1
    //   },
    //   {
    //     id: 2,
    //     pic: "/static/img/02.jpg",
    //     name: "惠科（HKC）C340 34英寸",
    //     price: 2299,
    //     isSelect: false,
    //     // 数据设定
    //     count: 1
    //   }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: app.globalData.URL + '/cart',
      data: {
        user_id:32780,
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
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let i = 0;
    this.data.totalMoney = 0;
    for (i = 0; i < this.data.carts.length; i++) {
      this.data.totalMoney = this.data.totalMoney + (this.data.carts[i].goods_price * this.data.carts[i].number);
    }
    this.setData({
      carts: this.data.carts,
      totalMoney: this.data.totalMoney
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
  select0: function () {
    this.setData({
      flag1: true,
      flag2: false,
      flag3: false
    }),
    wx.redirectTo({
      url: '/pages/index/index',
    })
  },
  select1: function () {
    this.setData({
      flag1: false,
      flag2: true,
      flag3: false
    })
  },
  select2: function () {
    this.setData({
      flag1: false,
      flag2: false,
      flag3: true
    }),
    wx.redirectTo({
      url: '/pages/userinfo/index/index',
    })
  },
  //勾选事件处理函数  
  switchSelect: function (e) {
    // 获取item项的id，和数组的下标值  
    var Allprice = 0, i = 0;
    let id = e.target.dataset.id,

      index = parseInt(e.target.dataset.index);
    this.data.carts[index].isSelect = !this.data.carts[index].isSelect;
    //价钱统计
    if (this.data.carts[index].isSelect) {
      this.data.totalMoney = this.data.totalMoney + (this.data.carts[index].price * this.data.carts[index].count);
    }
    else {
      this.data.totalMoney = this.data.totalMoney - (this.data.carts[index].price * this.data.carts[index].count);
    }
    //是否全选判断
    for (i = 0; i < this.data.carts.length; i++) {
      Allprice = Allprice + (this.data.carts[index].price * this.data.carts[index].count);
    }
    if (Allprice == this.data.totalMoney) {
      this.data.isAllSelect = true;
    }
    else {
      this.data.isAllSelect = false;
    }
    this.setData({
      carts: this.data.carts,
      totalMoney: this.data.totalMoney,
      isAllSelect: this.data.isAllSelect,
    })
  },
  //全选
  allSelect: function (e) {
    //处理全选逻辑
    let i = 0;
    if (!this.data.isAllSelect) {
      this.data.totalMoney = 0;
      for (i = 0; i < this.data.carts.length; i++) {
        this.data.carts[i].isSelect = true;
        this.data.totalMoney = this.data.totalMoney + (this.data.carts[i].goods_price * this.data.carts[i].number);

      }
    }
    else {
      for (i = 0; i < this.data.carts.length; i++) {
        this.data.carts[i].isSelect = false;
      }
      this.data.totalMoney = 0;
    }
    this.setData({
      carts: this.data.carts,
      isAllSelect: !this.data.isAllSelect,
      totalMoney: this.data.totalMoney,
    })
  },
  // 去结算
  toBuy() {
    // var a=0;
    // for(var i=0;i<this.data.carts.length;i++){
    //   if(this.data.carts[i].isSelect==true){
    //     a++;
    //   }
    // }
    // if(a==0){
    //   wx.showToast({
    //     title: '请选择',
    //     icon: 'none',
    //     duration: 3000
    //   });
    // }
    // else{
    //   // wx.showToast({
    //   //   title: '去结算',
    //   //   icon: 'success',
    //   //   duration: 3000
    //   // });
      wx.navigateTo({
        url: '/pages/order-confirm/order-confirm'
      })
    app.globalData.totalMoney = this.data.totalMoney;
    // }
    // this.setData({
    //   showDialog: !this.data.showDialog
    // });
  },
  //数量变化处理
  handleQuantityChange(e) {
    var componentId = e.componentId;
    var quantity = e.quantity;
    this.data.carts[componentId].number.quantity = quantity;
    this.setData({
      carts: this.data.carts,
    });
  },
  /* 减数 */
  delCount: function (e) {
    var index = e.target.dataset.index;
    console.log("刚刚您点击了加一");
    var count = this.data.carts[index].number;
    // 商品总数量-1
    if (count > 1) {
      this.data.carts[index].number--;
    }
    // 将数值与状态写回  
    this.setData({
      carts: this.data.carts
    });
    console.log("carts:" + this.data.carts);
    this.priceCount();
  },
  /* 加数 */
  addCount: function (e) {
    var index = e.target.dataset.index;
    console.log("刚刚您点击了加+");
    var count = this.data.carts[index].number;
    // 商品总数量+1  
    if (count < 10) {
      this.data.carts[index].number++;
    }
    // 将数值与状态写回  
    this.setData({
      carts: this.data.carts
    });
    console.log("carts:" + this.data.carts);
    this.priceCount();
  },
  priceCount: function (e) {
    this.data.totalMoney = 0;
    for (var i = 0; i < this.data.carts.length; i++) {
      this.data.totalMoney = this.data.totalMoney + (this.data.carts[i].goods_price * this.data.carts[i].number);
    }
    this.setData({
      totalMoney: this.data.totalMoney,
    })
  },
  del(e){
    var index = parseInt(e.target.dataset.index);
    let carts = this.data.carts;
    var a = 0;
    console.log(index);
    this.data.totalMoney = this.data.totalMoney - carts[index].goods_price * carts[index].number;
    wx.request({
      url: app.globalData.URL+"/cart/deleteGoods",
      data:{
        userId: 32780,
        goodsId:this.data.carts[index].goods_id
      },
      method:'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res){
        console.log(res.data)
      }
    })
    carts[index] = null;
    this.setData({
      carts,
      totalMoney: this.data.totalMoney
    })
    console.log(carts)
    for (var i = 0; i < this.data.carts.length;i++){
      if(carts[i]!=null){
        a++;
      }
    }
    if(a==0){
      this.setData({
        hidden: true,
        hiddenEmpty: false,
      })
    }
  },
  toindex(){
    wx.redirectTo({
      url: '/pages/index/index',
    })
  }
})