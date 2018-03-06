// pages/RefereeRecorder/RR-Confirm-P/RR-Confirm-P.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    AName: 'Player1',
    BName: 'Player2',
    Lplayer:'Player1',
    Rplayer:'Player2',
    ServerPlayer:'',
    Uid:'',
    serverflag:false,
    ChooseSideFlag: true,
    ChooseServerFlag: true
  },
  getA: function (e) {
    this.setData({
      AName: e.detail.value
    })
  },
  getB: function (e) {
    this.setData({
      BName: e.detail.value
    })
  },
  ShowChooseSide: function () {
    console.log('show choose side')
    this.setData({
      ChooseSideFlag: false
    })
  },
  ChooseSide: function (e) {
    if (e.currentTarget.dataset.name   == 'A') {
      this.setData({
        Lplayer: this.data.AName,
        Rplayer: this.data.BName
      })
    } else {
      this.setData({
        Lplayer: this.data.BName,
        Rplayer: this.data.AName
      })
    }
    this.setData({
      ChooseSideFlag: true
    })
  },
  ShowChooseServer: function () {
    console.log('show choose server')
    this.setData({
      ChooseServerFlag: false
    })
  },
  ChooseServer: function (e) {
    if (e.currentTarget.dataset.name == 'A') {
      this.setData({
        serverflag:false,
        ServerPlayer:this.data.AName
      })
    } else {
      this.setData({
        serverflag: true,
        ServerPlayer: this.data.BName
      })
    }
    this.setData({
      ChooseServerFlag: true
    })
  },
  formSubmit: function (e) {
    var that = this;
    this.setData({
      toolflag: false,
    })
    wx.showToast({
      title: '正在创建比赛……',
      icon: 'loading',
      duration: 2000,
      mask: true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
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
  
  }
})