var config = {
  //api 类型 
  clientType: 15,
  //版本号
  version: "1.0.0",
  // 测试环境接口
  // server: {
  //   api: "https://betaapi.terrydr.com/",
  //   ossDownload: "https://betafile.terrydr.com/",
  //   slider: "https://betadoctor.terrydr.com/seadragon",
  //   messageServer: "wss://betawebsocket.terrydr.com:8889/webpush/websocket"
  // },
  // 开发环境接口
  // server: {
  //   api: "https://devapi.terrydr.com/",
  //   ossDownload: "https://devfile.terrydr.com/",
  //   slider: "https://devdoctor.terrydr.com/seadragon",
  //   region: "oss-cn-hangzhou",
  //   ossBucket: "terrydr-hd-dev",
  //   messageServer: "ws://devwebsocket.terrydr.com:9001/webpush/websocket"
  // },
  // 生产环境接口
  server: {
    api: "https://api.terrydr.com/",
    ossDownload: "https://file.terrydr.com/",
    // slider: "https://doctor.terrydr.com/seadragon",
    // messageServer: "wss://websocket.terrydr.com:8889/webpush/websocket",
  },

  url: {
    login: "basic/patients/loginByMiniProgram",

  }
}
module.exports = config;
