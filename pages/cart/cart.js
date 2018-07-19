Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag1: false,
    flag2: true,
    flag3: false,
    hidden: null,
    hiddenEmpty: true,
    isAllSelect: false,
    totalMoney: 0,
    // 商品详情介绍
    carts: [
      {
        id: 1,
        pic: "/static/img/iPad.jpg",
        name: "APPLE苹果iPad2018款",
        price: 2088,
        isSelect: false,
        // 数据设定
        count: 1
      },
      {
        id: 2,
        pic: "/static/img/02.jpg",
        name: "惠科（HKC）C340 34英寸",
        price: 2299,
        isSelect: false,
        // 数据设定
        count: 1
      }]
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
        this.data.totalMoney = this.data.totalMoney + (this.data.carts[i].price * this.data.carts[i].count);

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
    wx.showToast({
      title: '去结算',
      icon: 'success',
      duration: 3000
    });
    this.setData({
      showDialog: !this.data.showDialog
    });
  },
  //数量变化处理
  handleQuantityChange(e) {
    var componentId = e.componentId;
    var quantity = e.quantity;
    this.data.carts[componentId].count.quantity = quantity;
    this.setData({
      carts: this.data.carts,
    });
  },
  /* 减数 */
  delCount: function (e) {
    var index = e.target.dataset.index;
    console.log("刚刚您点击了加一");
    var count = this.data.carts[index].count;
    // 商品总数量-1
    if (count > 1) {
      this.data.carts[index].count--;
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
    var count = this.data.carts[index].count;
    // 商品总数量+1  
    if (count < 10) {
      this.data.carts[index].count++;
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
      if (this.data.carts[i].isSelect == true) {
        this.data.totalMoney = this.data.totalMoney + (this.data.carts[i].price * this.data.carts[i].count);
      }

    }
    this.setData({
      totalMoney: this.data.totalMoney,
    })
  }
})