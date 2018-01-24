// pages/catchPic/catchPic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    context: null,
    context0: null,
    x: '',
    y: '',
    width: 300,
    height: 300
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */

  canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg)
  },

  onReady: function () {
    this.setData({
      width: wx.getSystemInfoSync().windowWidth,
      height: wx.getSystemInfoSync().windowWidth
    }) 
    var context = wx.createCanvasContext('firstCanvas')
    context.drawImage('../../pictures/0.jpg', 0, 0, this.data.width, this.data.height)   
    context.draw()
    console.log(context)
    var context0 = wx.createCanvasContext('secondCanvas')
    this.setData({
      context: context,
      context0: context0
    })
  },

  confirm: function(){
    this.data.context.drawImage('../../pictures/0.jpg', 10, 10, 200, 200)
    this.data.context.fillText('测试', this.data.x, this.data.y)
    this.data.context.draw()
  },

  chooseImg: function(){
    wx.chooseImage({
      success: function(res) {
        console.log(res)
      },
    })
  },

  catchPic: function() {
    wx.canvasToTempFilePath({
      canvasId: 'firstCanvas',
      success: function (res) {
        console.log(res.tempFilePath)
      }
    })
  },

  bindtouchmove: function(e) {
    console.log(e)
    var x = e.touches[0].x
    var y = e.touches[0].y
    this.data.context0.fillText('测试',x,y)
    //this.data.context0.drawImage('../../pictures/1.jpg', x, y,200,200)
    this.data.context0.draw()
    this.setData({
      x: x,
      y: y
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