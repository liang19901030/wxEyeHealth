import config from '../../utils/config.js'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    userName: 'liang',
    userTeleno: '15637237384',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.login({
      success: function(res) {
        if (res.code) {
          console.log('获取用户登录成功！' + res.code)
          wx.request({
            url: config.server.api + config.url.login,
            method: 'POST',
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            data: {
              code: res.code
            },

            success: function(res) {
              if (res.data.responsecode == 0) {
                wx.setStorageSync('terryUser', res.data.returnObject)
              }else if (res.data.responsecode == 28) {
                wx.redirectTo({
                  url: '../register/register?type=0',
                })
              }else {

              }
            },

            fail: function(err) {
              console.log(err)
            }
          })

        }else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    })
  },

  //基本信息
  infoTap: function() {
    wx.navigateTo({
      url: '../basicInfo/basicInfo',
    })
  },

  //我的预约
  myOrderTap: function() {
    wx.navigateTo({
      url: '../myOrder/myOrder',
    })
  },

  //我的家庭
  myFamilyTap: function() {
    wx.navigateTo({
      url: '../myFamily/myFamily',
    })
  },

  //报告信息
  reportTap: function() {
    wx.navigateTo({
      url: '../report/report',
    })
  },

  //预约挂号
  orderTap: function () {
    wx.navigateTo({
      url: '../order/order',
    })
  },
})