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
    ChooseServerFlag: true,
    L:'',
    S:''
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
        Rplayer: this.data.BName,
        L: 'A'
      })
    } else {
      this.setData({
        Lplayer: this.data.BName,
        Rplayer: this.data.AName,
        L: 'B'
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
        ServerPlayer:this.data.AName,
        S: 'A'
      })
    } else {
      this.setData({
        serverflag: true,
        ServerPlayer: this.data.BName,
        S: 'B'
      })
    }
    this.setData({
      ChooseServerFlag: true
    })
  },
  formSubmit: function (e) {
    var that = this;
    if (this.data.AName == 'Player1' || this.data.BName == 'Player2') {
      wx.showModal({
        title: '提示',
        content: '未输入运动员名称',
        showCancel: false
      })
    } else if (this.data.L == '' || this.data.S == '') {
      wx.showModal({
        title: '提示',
        content: '未进行挑边',
        showCancel: false
      })
    } else {
      wx.navigateTo({
        url: '../TennisScoreBoard/TennisScoreBoard?L='+that.data.L+'&S='+that.data.S+'&AName='+that.data.AName+'&BName='+that.data.BName,
      })
    }
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