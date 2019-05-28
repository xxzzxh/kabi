const app = getApp();
Page({
  data: {
    forms: [
      {
        submitnum: '31',
        submitsum: '418',
        name: '关于毕业意向填写',
        starttime: '19/05/28 18:00',
        endtime: '19/05/28 18:00',
      },
      {
        submitnum: '31',
        submitsum: '418',
        name: '关于毕业意向填写',
        starttime: '19/05/28 18:00',
        endtime: '19/05/28 18:00',
      },
      {
        submitnum: '31',
        submitsum: '418',
        name: '关于毕业意向填写',
        starttime: '19/05/28 18:00',
        endtime: '19/05/28 18:00',
      }
    ]
  },
  //跳转下一步
  tostep() {
    wx.navigateTo({
      url: '/pages/creat/creat',
    });
  },
})
