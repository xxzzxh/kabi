//preview.js 我参加的表单
//获取应用实例
const app = getApp();
const $v = app.globalData.createInfo;
Page({
  data: {
    // confirm还没改理清楚
  confirm: true,
  form:{
    radio:'',
    select:'',
    checkbox:'',
    input:''
  }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _m = "question";
    this.setData({
      [_m]: $v
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.onLoad();
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