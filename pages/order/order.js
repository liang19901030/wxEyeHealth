// pages/order/order.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    scroll_height: 0,
    today:"今天是09月20日 星期四",
    orderDate:[
      {
        week:'二',
        date:'10'
      },
      {
        week: '三',
        date: '11'
      },
      {
        week: '四',
        date: '12'
      },
      {
        week: '五',
        date: '13'
      },
      {
        week: '六',
        date: '14'
      },
      {
        week: '日',
        date: '15'
      },
      {
        week: '一',
        date: '16'
      },
    ],

    doctorList:[
      {
        avatar:'',
        name:'孙思邈',
        title:'主任医生',
        major:'处理眼科各类常见病、多发病，尤其擅长各类斜视的非手术和手术矫正',
        orderStatus:'有号',
      },
      {
        avatar: '',
        name: '孙思邈',
        title: '主任医生',
        major: '处理眼科各类常见病、多发病，尤其擅长各类斜视的非手术和手术矫正',
        orderStatus: '有号',
      },
      {
        avatar: '',
        name: '孙思邈',
        title: '主任医生',
        major: '处理眼科各类常见病、多发病，尤其擅长各类斜视的非手术和手术矫正',
        orderStatus: '有号',
      },
      {
        avatar: '',
        name: '孙思邈',
        title: '主任医生',
        major: '处理眼科各类常见病、多发病，尤其擅长各类斜视的非手术和手术矫正',
        orderStatus: '有号',
      },
      {
        avatar: '',
        name: '孙思邈',
        title: '主任医生',
        major: '处理眼科各类常见病、多发病，尤其擅长各类斜视的非手术和手术矫正',
        orderStatus: '有号',
      },
    ]
  
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
      scroll_height: windowHeight - windowWidth / 750 * 480,
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