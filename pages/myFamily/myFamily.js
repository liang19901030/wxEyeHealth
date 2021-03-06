// pages/myFamily/myFamily.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isOrder: false,
    scroll_height: 0,
    myFamilyList:[
      {
        isSelected: false,
        name: 'liang',
        sex: 0,
        age: '25岁',
        teleno: '15202563256',
        idCard: '410101022020145563',
      },
      {
        isSelected: false,
        name: 'liangdsfafasfafasfafsfsfa',
        sex: 1,
        age: '25岁',
        teleno: '15202563256',
        idCard: '410101022020145563',
      },
      {
        isSelected: true,
        name: 'liang',
        sex: 0,
        age: '25岁',
        teleno: '15202563256',
        idCard: '410101022020145563',
      },
      {
        isSelected: false,
        name: 'liang',
        sex: 0,
        age: '25岁',
        teleno: '15202563256',
        idCard: '410101022020145563',
      },
      {
        isSelected: false,
        name: 'liang',
        sex: 1,
        age: '25岁',
        teleno: '15202563256',
        idCard: '410101022020145563',
      }
    ]
  
  },

  addMemberTap: function() {
    wx.navigateTo({
      url: '../addMember/addMember',
    })

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
    var windowHeight = app.globalData.windowHeight
    var windowWidth = app.globalData.windowWidth
    this.setData({
      scroll_height: windowHeight - windowWidth / 750 * 100,
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
  
  }
})