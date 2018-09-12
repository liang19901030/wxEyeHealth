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
  }
})