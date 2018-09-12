function formatDate(input) {
  var date = new Date(input);
  var nowDate = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  if (minute < 10) {
    minute = "0" + minute;
  }
  var second = date.getSeconds();
  var curTime = "";
  var curYear = year + "-"
  // var curYear = "";

  if (year == nowDate.getFullYear() &&
    month == nowDate.getMonth() + 1 &&
    day == nowDate.getDate()) {
    curTime = "今天";
  } else if (year == nowDate.getFullYear() &&
    month == nowDate.getMonth() + 1 &&
    day == nowDate.getDate() - 1) {
    curTime = "昨天";
  } else if (nowDate.getDate() > date.getDate() && (nowDate - date) < 1000 * 60 * 60 * 24 * 7) {
    switch (date.getDay()) {
      case 0:
        curTime = "星期天";
        break;
      case 1:
        curTime = "星期一";
        break;
      case 2:
        curTime = "星期二";
        break;
      case 3:
        curTime = "星期三";
        break;
      case 4:
        curTime = "星期四";
        break;
      case 5:
        curTime = "星期五";
        break;
      case 6:
        curTime = "星期六";
        break;
    }
  };
  if (year == nowDate.getFullYear()) {
    if (curTime != '') {
      return curTime + " " + hour + ":" + minute;
    } else {
      return month + "-" + day + " " + hour + ":" + minute;
    }
  } else {
    return curYear + month + "-" + day + " " + hour + ":" + minute;
  }

}
function getWeek(date) {
  var week = ''
  switch (date.getDay()) {
    case 0:
      week = "日";
      break;
    case 1:
      week = "一";
      break;
    case 2:
      week = "二";
      break;
    case 3:
      week = "三";
      break;
    case 4:
      week = "四";
      break;
    case 5:
      week = "五";
      break;
    case 6:
      week = "六";
      break;
  }
  return week;
}
function formatTimestamp(timestamp) {
  var date = new Date(timestamp)
  var year = date.getFullYear()
  var month = date.getMonth() + 1 > 9 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1)
  var day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate()
  var dateStr = year + '-' + month + '-' + day
  return dateStr
}
//计算天数差的函数，通用  
function DateDiff(sDate1, sDate2) {    //sDate1和sDate2是2002-12-18格式  
  var aDate, oDateStr, oDate1, oDate2, iDays
  aDate = sDate1.split("-")
  oDateStr = (aDate[1] + '-' + aDate[2] + '-' + aDate[0]).replace(/\-/g, '/')
  oDate1 = new Date(oDateStr)    //转换为12-18-2002格式  
  aDate = sDate2.split("-")
  oDateStr = (aDate[1] + '-' + aDate[2] + '-' + aDate[0]).replace(/\-/g, '/')
  oDate2 = new Date(oDateStr)
  iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24)    //把相差的毫秒数转换为天数 
  return iDays
}
module.exports = {
  formatDate: formatDate,
  formatTimestamp: formatTimestamp,
  getWeek: getWeek,
  DateDiff: DateDiff
}