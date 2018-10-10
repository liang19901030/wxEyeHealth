// pages/selectDoctor/selectDoctor.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    current_tab: 0,
    swiper_height: 0,
    name:'张仲景',
    title:'主任医生',
    hospital:'洛阳市第一眼科医院 (眼科)',
    cost:'挂号费用:',
    costValue:'30',
    costUnit:'元',

    major:'处理眼科各类常见病、多发病，尤其擅长各类斜视的非手术和手术矫正、儿童屈光不正的治疗、弱视视功能康复以及甲状腺相关眼病、眼眶肿瘤、眼眶爆裂性骨折等眼眶疾病的诊治。',
    introduce:'张仲景，医学博士、主任医师、教授、博士研究生导师，南京医科大学第一附属医院眼科副主任，现任中华医学会眼科学分会斜视与小儿眼科学组副组长、中国医师协会眼科医师分会斜视与儿童眼病专业委员会副主任委员、江苏省医学会眼科学分会副主任委员、江苏省医学会眼科学分会斜视与儿童眼病学组组长。专业方向：斜视与小儿眼科。近年来作为项目负责人主持国自然、江苏省自然基金及其他课题多项，以第一作者（通讯作者）在Ophthalmology, British Journal of Ophthalmology, Graefes Arch Clin Exp Ophthalmol, Scientific Reports, Optometry and vision science, Ophthalmic & Physiological Optics等国内外杂志发表论文多篇，主编（译）专著多部。现为江苏省省级临床重点专科学科带头人之一。',

    selectedDateList:[
      {
        date:'2018-07-11',
        time:'上午',
        remainNum:'6',
      },
      {
        date: '2018-07-11',
        time: '下午',
        remainNum: '6',
      }
    ],

    moreDateList:[
      {
        date: '2018-07-11',
        time: '上午',
        remainNum: '6',
      },
      {
        date: '2018-07-11',
        time: '下午',
        remainNum: '6',
      },
      {
        date: '2018-07-11',
        time: '上午',
        remainNum: '6',
      },
      {
        date: '2018-07-11',
        time: '下午',
        remainNum: '6',
      },
      {
        date: '2018-07-11',
        time: '上午',
        remainNum: '6',
      },
      {
        date: '2018-07-11',
        time: '下午',
        remainNum: '6',
      }
    ],
  },

  tabChange: function (e) {
    var that = this
    if (that.data.current_tab === e.target.dataset.current) {
      return false
    } else {
      that.setData({
        current_tab: e.target.dataset.current
      })
    }
  },

  swiperBindChange: function (e) {
    var that = this
    that.setData({
      current_tab: e.detail.current
    })
  },

  orderBtnTap:function () {
    wx.navigateTo({
      url: '../payment/payment',
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
      swiper_height: windowHeight - windowWidth / 750 * (330 + 98),
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