// pages/report/report.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    reportList:[
      {
        cover:'',
        name:'李思思',
        age:'15岁',
        description:'这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述',
        reportType:'诊断报告',
        reportDoctor:'报告医生: 张三三',
        date:'2018-03-06',
      },
      {
        cover: '',
        name: '李思思',
        age: '15岁',
        description: '这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述',
        reportType: '诊断报告',
        reportDoctor: '报告医生: 张三三',
        date: '2018-03-06',
      },
      {
        cover: '',
        name: '李思思',
        age: '15岁',
        description: '这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述',
        reportType: '诊断报告',
        reportDoctor: '报告医生: 张三三',
        date: '2018-03-06',
      },
      {
        cover: '',
        name: '李思思',
        age: '15岁',
        description: '这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述',
        reportType: '诊断报告',
        reportDoctor: '报告医生: 张三三',
        date: '2018-03-06',
      },
      {
        cover: '',
        name: '李思思',
        age: '15岁',
        description: '这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述',
        reportType: '诊断报告',
        reportDoctor: '报告医生: 张三三',
        date: '2018-03-06',
      },
      {
        cover: '',
        name: '李思思',
        age: '15岁',
        description: '这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述',
        reportType: '诊断报告',
        reportDoctor: '报告医生: 张三三',
        date: '2018-03-06',
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
      scroll_height: windowHeight,
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