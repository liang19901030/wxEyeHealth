import config from 'config.js'
var user, headers
var Promise = require('../lib/es6-promise.js')

function wxPromisify(fn) {
  user = wx.getStorageSync('terryUser')
  headers = {
    'userId': user == undefined ? '' : user.id,
    'token': user == undefined ? '' : user.accessToken,
    'phoneNum': user == undefined ? '' : user.teleNo,
    'deviceOS': 0,
    'userType': 1,
    'clientVersion': 0,
    'clientType': 15,
  }
  return function(obj = {}) {
    return new Promise((resolve, reject) => {
      obj.success = function(res) {
        //成功
        if (res.data.responseCode == 0) {
          resolve(res)
        } else if (res.data.responseCode == 26) {
          wx.login({
            success: function(res) {
              if (res.code) {
                console.log('获取用户登录成功！' + res.code)
                wx.request({
                  url: config.server.api + 'basic/patients/loginByMiniProgram',
                  method: 'POST',
                  header: {
                    'content-type': 'application/x-www-form-urlencoded'
                  },
                  data: {
                    code: res.code
                  },
                  success: function(res) {
                    if (res.data.responseCode == 0) {
                      wx.setStorageSync('terryUser', res.data.returnObject)
                      resolve('loginSuccess')
                    } else if (res.data.responseCode == 28) {
                      wx.setStorageSync('openid', res.data.returnObject)
                      wx.navigateTo({
                        url: '../register/register?type=0'
                      })
                    } else {

                    }
                  },
                  fail: function(err) {
                    console.log(err)
                  }
                })
              } else {
                console.log('获取用户登录态失败！' + res.errMsg)
              }
            }
          });
        } else {
          wx.hideLoading()
          wx.showModal({
            title: res.data.returnMsg,
            content: '',
            showCancel: false,
            confirmColor: "#0089f1"
          })
        }
      }
      obj.fail = function(res) {
        //失败
        reject(res)
      }
      fn(obj)
    })
  }
}
//无论promise对象最后状态如何都会执行
Promise.prototype.finally = function(callback) {
  let P = this.constructor;
  return this.then(
    value => P.resolve(callback()).then(() => value),
    reason => P.resolve(callback()).then(() => {
      throw reason
    })
  );
};
/**
 * 微信请求get方法
 * url
 * data 以对象的格式传入
 */
function getRequest(url, data) {
  var getRequest = wxPromisify(wx.request)
  headers['Content-Type'] = 'application/json'
  return getRequest({
    url: config.server.api + url,
    method: 'GET',
    data: data,
    header: headers
  })
}
/**
 * 微信请求post方法封装
 * url
 * data 以对象的格式传入
 */
function postRequest(url, data) {
  var postRequest = wxPromisify(wx.request)
  headers['Content-Type'] = 'application/x-www-form-urlencoded'
  return postRequest({
    url: config.server.api + url,
    method: 'POST',
    data: data,
    header: headers
  })
}
/**
 * 微信请求put方法封装
 * url
 * data 以对象的格式传入
 */
function putRequest(url, data) {
  var putRequest = wxPromisify(wx.request)
  headers['Content-Type'] = 'application/x-www-form-urlencoded'
  return putRequest({
    url: config.server.api + url,
    method: 'PUT',
    data: data,
    header: headers
  })
}

/**
 * 微信请求delete方法封装
 * url
 * data 以对象的格式传入
 */
function deleteRequest(url, data) {
  var deleteRequest = wxPromisify(wx.request)
  headers['Content-Type'] = 'application/x-www-form-urlencoded'
  return deleteRequest({
    url: config.server.api + url,
    method: 'DELETE',
    data: data,
    header: headers
  })
}
module.exports = {
  postRequest: postRequest,
  getRequest: getRequest,
  putRequest: putRequest,
  deleteRequest: deleteRequest
}