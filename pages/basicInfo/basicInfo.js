import userInfo from '../../models/userInfo.js'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo,
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var savedUser = wx.getStorageSync('terryUser')
    this.setData({
      userInfo: savedUser,
      'userInfo.sex' : savedUser.sex == 0 ? '男' : '女'
    })
  },

  nameTap: function() {
    wx.navigateTo({
      url: '../editInfo/editInfo?type=0&name=' + this.data.userInfo.name,
    })
  },

  idCardTap: function () {
    wx.navigateTo({
      url: '../editInfo/editInfo?type=1&idCard=' + this.data.userInfo.idCard,
    })
  },
})