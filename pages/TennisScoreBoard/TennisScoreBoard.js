Page({

  /**
   * 页面的初始数据
   */
  data: {
   animationA:'',
   animationB:'',
   tip_score:'',
   Ascore:'00',
   Bscore:'00',
   Aset1:0,
   Bset1:0,
   Aset2: 0,
   Bset2: 0,
   Aset3: 0,
   Bset3: 0,
   Amatch:0,
   Bmatch:0,
   Aname:'Player1',
   Bname:'Player2',
   ScoreDetail:[]
  },
  addscoreA:function(option) {
    var addscore = parseInt(option.target.dataset.score)
    var Ascore = this.data.Ascore
    var Bscore = this.data.Bscore
    var Ascore_new = Ascore;
    var Bscore_new = Bscore;
    var Amatch = this.data.Amatch
    var Bmatch = this.data.Bmatch
    var MatchDetial = wx.getStorageSync('MatchDetial')
    if (Amatch + Bmatch == 0) {
      var Aset = this.data.Aset1
      var Bset = this.data.Bset1
      var Aset_new = 'Aset1'
      var Bset_new = 'Bset1'
    }
    if (Amatch + Bmatch == 1) {
      var Aset = this.data.Aset2
      var Bset = this.data.Bset2
      var Aset_new = 'Aset2'
      var Bset_new = 'Bset2'
    }
    if (Amatch + Bmatch == 2) {
      var Aset = this.data.Aset3
      var Bset = this.data.Bset3
      var Aset_new = 'Aset3'
      var Bset_new = 'Bset3'
    }
    this.animationA.translateY(-300).scale(2).opacity(0.8).step()
    this.setData({
      tip_score: '+',
      animationA: this.animationA.export(),
    })
    if (Aset == 6 && Bset ==6) {
      Ascore = parseInt(Ascore)
      Ascore_new = Ascore + 1
      if ((Ascore_new == 7 && Bscore < 6) || (Ascore_new > 7 && Ascore_new-Bscore == 2)) {
        Aset = Aset + 1
        Amatch = Amatch + 1
      }
      console.log('A win a score in tiebreak')
    } else {
      if (Ascore == '00') {
        Ascore_new = '15'
        UpdateScore(Ascore_new, Bscore_new)
        console.log('A win a score 15 in set')
      }
      if (Ascore == '15') {
        Ascore_new = '30'
        UpdateScore(Ascore_new, Bscore_new)
        console.log('A win a score 30 in set')
      }
      if (Ascore == '30') {
        Ascore_new = '40'
        UpdateScore(Ascore_new, Bscore_new)
        console.log('A win a score 40 in set')
      }
      if (Ascore == '40' && Bscore != '40' && Bscore != 'AD') {
        Ascore_new = '00'
        Bscore_new = '00'
        Aset = Aset + 1
        UpdateScore(Aset, Bset)
        if (Aset == 6 && Bset < 5) {
          Amatch = Amatch + 1
          console.log('A win a match')
        }
        if (Aset == 7 && Bset == 5) {
          Amatch = Amatch + 1
          console.log('A win a match')
        }
        console.log('A win a set')
      }
      if (Ascore == '40' && Bscore == '40') {
        Ascore_new = 'AD'
        console.log('A win a score AD in set')
        UpdateScore(Ascore_new, Bscore_new)
      }
      if (Ascore == '40' && Bscore == 'AD') {
        Ascore_new = '40'
        Bscore_new = '40'
        console.log('A win a score duces in set')
        UpdateScore(Ascore_new, Bscore_new)
      }
      if (Ascore == 'AD') {
        Ascore_new = '00'
        Bscore_new = '00'
        Aset = Aset + 1
        UpdateScore(Aset, Bset)
        if (Aset == 6 && Bset < 5) {
          Amatch = Amatch + 1;
        }
        if (Aset == 7 && Bset == 5) {
          Amatch = Amatch + 1;
        }
      }
    }
    setTimeout(function(){
      this.animationA.translateY(0).scale(0).opacity(0).step()
      this.setData({
        animationA: this.animationA.export(),
        Ascore: Ascore_new,
        Bscore: Bscore_new,
        [Aset_new]: Aset,
        [Bset_new]: Bset,
        Amatch: Amatch,
        Bmatch: Bmatch,
        ScoreDetail: wx.getStorageSync('MatchDetail')
      })
    }.bind(this),1000)
  },
  addscoreB: function (option) {
    var Ascore = this.data.Ascore
    var Bscore = this.data.Bscore
    var Ascore_new = Ascore;
    var Bscore_new = Bscore;
    var Amatch = this.data.Amatch
    var Bmatch = this.data.Bmatch
    if (Amatch + Bmatch == 0) {
      var Aset = this.data.Aset1
      var Bset = this.data.Bset1
      var Aset_new = 'Aset1'
      var Bset_new = 'Bset1'
    }
    if (Amatch + Bmatch == 1) {
      var Aset = this.data.Aset2
      var Bset = this.data.Bset2
      var Aset_new = 'Aset2'
      var Bset_new = 'Bset2'
    }
    if (Amatch + Bmatch == 2) {
      var Aset = this.data.Aset3
      var Bset = this.data.Bset3
      var Aset_new = 'Aset3'
      var Bset_new = 'Bset3'
    }
    var addscore = parseInt(option.target.dataset.score)
    this.animationB.translateY(-300).scale(2).opacity(0.8).step()
    this.setData({
      tip_score: '+',
      animationB: this.animationB.export(),
    })
    if (Aset == 6 && Bset == 6) {
      Bscore_new = Bscore + 1
      if ((Bscore_new == 7 && Ascore < 6) || (Bscore_new > 7 && Bscore_new - Ascore == 2)) {
        Bset = Bset + 1
        Bmatch = Bmatch + 1
      }
    } else {
      if (Bscore == '00') {
        Bscore_new = '15'
        UpdateScore(Ascore_new, Bscore_new)
        console.log('B win a score 15 in set')
      }
      if (Bscore == '15') {
        Bscore_new = '30'
        UpdateScore(Ascore_new, Bscore_new)
        console.log('B win a score 15 in set')
      }
      if (Bscore == '30') {
        Bscore_new = '40'
        UpdateScore(Ascore_new, Bscore_new)
        console.log('B win a score 15 in set')
      }
      if (Bscore == '40' && Ascore != '40' && Ascore != 'AD') {
        Ascore_new = '00'
        Bscore_new = '00'
        Bset = Bset + 1
        UpdateScore(Aset, Bset)
        console.log('B win a set')
        if (Bset == 6 && Aset < 5) {
          Bmatch = Bmatch + 1;
        }
        if (Bset == 7 && Aset == 5) {
          Bmatch = Bmatch + 1;
        }
      }
      if (Bscore == '40' && Ascore == '40') {
        Bscore_new = 'AD'
        UpdateScore(Ascore_new, Bscore_new)
        console.log('B win a score AD in set')
      }
      if (Bscore == '40' && Ascore == 'AD') {
        Ascore_new = '40'
        Bscore_new = '40'
        UpdateScore(Ascore_new, Bscore_new)
        console.log('B win a score duces in set')
      }
      if (Bscore == 'AD') {
        Ascore_new = '00'
        Bscore_new = '00'
        Bset = Bset + 1
        UpdateScore(Aset, Bset)
        console.log('B win a set')
        if (Bset == 6 && Aset < 5) {
          Bmatch = Bmatch + 1;
        }
        if (Bset == 7 && Aset == 5) {
          Bmatch = Bmatch + 1;
        }
      }
    }
    setTimeout(function () {
      this.animationB.translateY(0).scale(0).opacity(0).step()
      this.setData({
        animationB: this.animationB.export(),
        Ascore: Ascore_new,
        Bscore: Bscore_new,
        [Aset_new]: Aset,
        [Bset_new]: Bset,
        Amatch: Amatch,
        Bmatch: Bmatch,
        ScoreDetail: wx.getStorageSync('MatchDetail')
      })
    }.bind(this), 1000)
  },
  reducescoreA: function (option) {
    this.animationA.translateY(-300).scale(2).opacity(0.8).step()
    this.setData({
      tip_score: '-',
      animationA: this.animationA.export(),
    })
    setTimeout(function () {
      this.animationA.translateY(0).scale(0).opacity(0).step()
      this.setData({
        animationA: this.animationA.export(),
        Ascore: this.data.Ascore - 1
      })
    }.bind(this), 1000)
  },
  reducescoreB: function (option) {
    this.animationB.translateY(-300).scale(2).opacity(0.8).step()
    this.setData({
      tip_score: '-',
      animationB: this.animationB.export(),
    })
    setTimeout(function () {
      this.animationB.translateY(0).scale(0).opacity(0).step()
      this.setData({
        animationB: this.animationB.export(),
        Bscore: this.data.Bscore - 1
      })
    }.bind(this), 1000)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var MatchDetail = []
    wx.setStorage({
      key: 'MatchDetail',
      data: MatchDetail,
    })
    if(wx.getStorageSync('ScoreBoard')){
      wx.showModal({
        title:'提示',
        content:'是否载入上次的记录',
        success:function(res) {
          if(res.confirm){
            wx.getStorage({
            key: 'ScoreBoard',
            success: function(res) {
              that.setData({
                Ascore: res.data.Ascore,
                Bscore: res.data.Bscore,
                Aname: res.data.teamA,
                Bname: res.data.teamB,
              })
            },
          })
          }
          if(!res.confirm){
            wx.removeStorageSync('ScoreBoard')
          }
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.animationA = wx.createAnimation({
      duration: 500,
      timingFunction: 'linear',
      delay: 0,
    })
    this.animationB = wx.createAnimation({
      duration: 500,
      timingFunction: 'linear',
      delay: 0,
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
    console.log(1)
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    var that = this
    if(this.data.Aname==""&&this.data.Bname==""&&this.data.Ascore==0&&this.data.Bscore==0){

    } else {
      wx.setStorage({
        key: 'ScoreBoard',
        data: {
          time: util.gettime(),
          teamA: this.data.Aname,
          teamB: this.data.Bname,
          Ascore: this.data.Ascore,
          Bscore: this.data.Bscore
        },
        success: function (res) { console.log(res) },
        fail: function (res) { console.log(res) },
        complete: function (res) { console.log(res) },
      })
    }
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

function UpdateScore(Ascore,Bscore) {
  var MatchDetail = wx.getStorageSync('MatchDetail')
  var socre = [Ascore, Bscore]
  MatchDetail.push(socre)
  //MatchDetail.push(Bscore)
  wx.setStorageSync('MatchDetail', MatchDetail)
}