import util from '../../utils/util.js'
import req from '../../utils/service.js'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    editType: '',
    navTitle: '',
    name:'',
    idCard:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      editType: options.type
    })

    if (this.data.editType == 1) {
      this.setData({
        navTitle: '更改身份证号',
        idCard: options.idCard
      })
    }else {
      this.setData({
        navTitle: '更改姓名',
        name: options.name
      })
    }

    wx.setNavigationBarTitle({
      title: this.data.navTitle,
    })
  },

  setName: function (e) {
    var value = e.detail.value
    this.setData({
      name: value
    })
  },

  setIdCard: function (e) {
    var value = e.detail.value
    this.setData({
      idCard: value
    })
  },

  isValidateIdCard: function () {
    var idCardReg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
    if (!idCardReg.test(this.data.idCard)) {
      return false
    }
    return true
  },

  editDone: function () {
    var user = wx.getStorageSync('terryUser')
    var savedName = user.name
    var savedIdCard = user.idCard
    if (this.data.editType == 0) {
      if (this.data.name == '') {
        wx.showToast({
          title: '请填写您的姓名',
          icon: 'none',
          duration: 2000
        })
        return
      }
      savedName = this.data.name
    } else {
      if (!this.isValidateIdCard()) {
        wx.showToast({
          title: '请填写正确的身份证号',
          icon: 'none',
          duration: 2000
        })
        return
      }
      savedIdCard = this.data.idCard
    }

    req.putRequest('basic/patients', {
      name: savedName,
      idCard: savedIdCard,
    }).then(res => {
      if (res === 'loginSuccess') {
        this.editDone()
        return
      }
      res.data.returnObject.accessToken = user.accessToken
      wx.setStorageSync('terryUser', res.data.returnObject)
      wx.navigateBack({
        delta: 1
      })
    })    
  }
})