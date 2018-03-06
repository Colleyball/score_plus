//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },
  bindTennis:function () {
    wx.navigateTo({
      url: '../TennisScoreBoard/TennisScoreBoard',
    })
  },
  onLoad: function () {

  },
})
