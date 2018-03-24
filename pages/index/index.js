// pages/index/index.js
const util = require("../../utils/util.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    winWidth:0,
    winHeight:0,

    // tab switch
    currentTab: 0,

    // collect data
    datalist: [],
    dataListDateCurrent: 0,
    dataListDateCount: 0,

    // daily data
    dataThemes: [],

    hotHidden: true,

    // loading
    hidden: true,

    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeigh: res.windowWidth
        });
      },
    })

    that.setData(
      { hidden: false }
    )

    // 请求日报
    util.AJAX('news/latest', function(res){
      var arr = res.data.top_stories;

      console.log(res)

      that.setData({
        dataThemes: arr,
      })
    })

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
  
  }
})