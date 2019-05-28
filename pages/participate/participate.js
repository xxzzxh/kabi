//participate.js 我参加的表单
//获取应用实例
const app = getApp();

Page({
  data: {
    deviceWidth: 0,
    deviceHeight: 0,
    navTab: ['全部', '待填写', '已完成'],
    currentTab: 0,
    sendList: [],
    inputValue: '',
    forms: [
      {
        starttime: '19/05/28 18:00',
        endtime: '19/05/28 18:00',
        name: '关于毕业意向填写',
        status:'未填写'
      },
      {
        starttime: '19/05/28 18:00',
        endtime: '19/05/28 18:00',
        name: '关于毕业意向填写',
        status: '已填写'
      },
      {
        starttime: '19/05/28 18:00',
        endtime: '19/05/28 18:00',
        name: '关于毕业意向填写',
        status: '未填写'
      },
    ]
      

  },
  currentTab: function (e) {
    // debugger
    if (this.data.currentTab == e.currentTarget.dataset.idx) {
      return;
    }
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
    this.select = {
      page: 1,
      size: 6,
      isEnd: false
    }
    this.data.sendList = [];
    this.setData({
      sendList: []
    });

    wx.pageScrollTo({
      scrollTop: 0,
      duration: 0
    });
    this.getData()
  },
})