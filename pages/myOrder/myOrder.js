// pages/myOrder/myOrder.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiper_height:0,
    myOrderList:[
      {
        avatar: '',
        name: '张仲景',
        title: '主治医师',
        hospital: '洛阳市第一眼科医院(眼科)',
        charge: '费用总计: 60元',
        explain: '(挂号费￥30.00+服务费￥30.00）',
        treatmentDate: '就诊时间: 2017-07-11  上午',
        patient: '就诊人: 闻人轻语'
      },
      {
        avatar: '',
        name: '张仲景',
        title: '主治医师',
        hospital: '洛阳市第一眼科医院(眼科)',
        charge: '费用总计: 60元',
        explain: '(挂号费￥30.00+服务费￥30.00）',
        treatmentDate: '就诊时间: 2017-07-11  上午',
        patient: '就诊人: 闻人轻语'
      },
      {
        avatar: '',
        name: '张仲景',
        title: '主治医师',
        hospital: '洛阳市第一眼科医院(眼科)',
        charge: '费用总计: 60元',
        explain: '(挂号费￥30.00+服务费￥30.00）',
        treatmentDate: '就诊时间: 2017-07-11  上午',
        patient: '就诊人: 闻人轻语'
      }
    ],
  
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
      swiper_height: windowHeight - windowWidth / 750 * 90,
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