// pages/createSub/createSub.js
const app = getApp();
const $v = app.globalData.createInfo;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    question:{},
    confirm:true,
    showModal: false, // 显示modal弹窗
    single: true, // false 只显示一个按钮，如果想显示两个改为true即可
    widget: [
      { "title": "多选框", 
        "description": "", 
        "type": "array", 
        "default": [],
        "ui_widget": "checkbox", 
        "ui_required": true, 
        "ui_key": "veniam exercitation officia quis ipsum", 
        "ui_icon": "", 
        "maxItems": 3,
        "minItems": 1, 
        "enums": [] 
      },
       { "title": "下拉选择", 
         "description": "", 
         "type": "array", 
         "default": [], 
         "ui_widget": "dropdown", 
         "ui_required": true, 
         "ui_key": "sit do in", 
         "ui_icon": "", 
         "maxItems": 3, 
         "minItems": 1, 
         "enums": [] 
       }, 
       { 
         "title": "单选框", 
         "description": "", 
         "type": "array", 
         "default": [], 
         "ui_widget": "radio", 
         "ui_required": true, 
         "ui_key": "elit ad", 
         "ui_icon": "", 
         "maxItems": 3, 
         "minItems": 1, 
         "enums": [] 
        }, 
        { 
          "title": "tab选择", 
          "description": "", 
          "type": "array", 
          "default": [], 
          "ui_widget": "tab", 
          "ui_required": true, 
          "ui_key": "velit", 
          "ui_icon": "", 
          "maxItems": 3, 
          "minItems": 1, 
          "enums": [] 
          }, 
       { 
         "title": "数字", 
         "description": "", 
         "type": "number", 
         "default": 0, 
         "ui_widget": "number", 
         "ui_required": true, 
         "ui_key": "Duis esse culpa cupidatat", 
         "ui_icon": "", 
         "ui_integer": true, 
         "maximum": -28257425.009113565, 
         "minimum": 23077025.643414244     
       }, 
            {
              "title": "星级评分", 
              "description": "", 
              "type": "number", 
              "default": 0, 
              "ui_widget": "rate", 
              "ui_required": true, 
              "ui_key": "qui", 
              "ui_icon": "", 
              "ui_integer": true, 
              "maximum": 5, 
              "minimum": 0, 
              "ui_can_half": true 
              }, 
              {
                 "title": "滑块", "description": "", "type": "number", "default": 0, "ui_widget": "slider", "ui_required": true, "ui_key": "enim dolore quis consectetur", "ui_icon": "", "ui_integer": false, "maximum": -38204407.941461734, "minimum": 66815528.59491283 }, 
              { "title": "日期", "description": "", "type": "string", "default": "", "ui_widget": "format-date", "ui_required": true, "ui_key": "adipisicing u", "ui_icon": "", "maxLength": 255, "minLength": 1, "format": "date" },
              { "title": "邮箱", "description": "", "type": "string", "default": "", "ui_widget": "format-email", "ui_required": true, "ui_key": "ad", "ui_icon": "", "maxLength": 255, "minLength": 1, "format": "email" }, 
              { "title": "手机号", "description": "", "type": "string", "default": "", "ui_widget": "format-mobile-number", "ui_required": true, "ui_key": "consequat", "ui_icon": "", "maxLength": 255, "minLength": 1, "format": "mobile-number" }, 
              { "title": "密码", "description": "", "type": "string", "default": "", "ui_widget": "password", "ui_required": true, "ui_key": "velit in aute voluptate Lorem", "ui_icon": "", "maxLength": 255, "minLength": 1 }, 
              { "title": "文本", "description": "", "type": "string", "default": "", "ui_widget": "text", "ui_required": true, "ui_key": "do sunt ipsum", "ui_icon": "", "maxLength": 255, "minLength": 1 },   
              { "title": "多行文本", "description": "", "type": "string", "default": "", "ui_widget": "textarea", "ui_required": true, "ui_key": "aliqua Ut consequat", "ui_icon": "", "maxLength": 255, "minLength": 1 },
               { "title": "文本(正则验证)", "description": "", "type": "string", "default": "", "ui_widget": "text_regex", "ui_required": true, "ui_key": "sed sunt ex commodo", "ui_icon": "", "maxLength": 255, "minLength": 1, "pattern": "" }
        ]
  },
// 展现组件页面
  towidget:function(){
    var showModal = this.data.showModal;
    this.setData({ showModal: !showModal});
  },
  // 去单选页面
  toRadio(e){
    console.log(e);
    //为拖拽到容器的元素添加唯一 key
    var key = Date.parse(new Date()) + '_' + Math.ceil(Math.random() * 99999)
    //给选中的schema赋值key
    e.currentTarget.dataset.item.ui_key = key;
    var schema = JSON.stringify(e.currentTarget.dataset.item);
    wx.navigateTo({
      url: '/pages/radio/radio?schema=' + schema,
    })
    var showModal = this.data.showModal;
    this.setData({ showModal: !showModal });
  },
  //去编辑页面
  edit(e){
    var index = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '/pages/radio/radio?index='+index,
    })
  },
  // 提交信息
  preview(){
    if ($v.schemaList.length == 0 || !$v.schemaList.length) {
      wx.showToast({
        title: '你还没有创建题目',
        icon:"none",
        duration:800
      });
      return ;
    }
    this.setData({
      confirm:false
    })
    wx.navigateTo({
      url: '/pages/preview/preview'
    })
  },
  // 发布信息
  publish(){
    wx.showModal({
          title: '提示',
          content: '发布成功,跳转新建问卷',
          showCancel:false,
          success:res=>{
            if(res.confirm) {
              wx.switchTab({
                url: '/pages/creats/creats',
                success: function (e) {
                  var page = getCurrentPages().pop();
                  if (page == undefined || page == null) return;
                  page.onLoad();
                }
              })
            }
          }
        })
    // app.res({
    //   url: "psq/save",
    //   method: "POST",
    //   data: $v,
    //   callback: res => {
    //     $v.paper = {};
    //     $v.psqList = [];
    //     wx.showModal({
    //       title: '提示',
    //       content: '发布成功,跳转新建问卷',
    //       showCancel:false,
    //       success:res=>{
    //         if(res.confirm) {
    //           wx.switchTab({
    //             url: '/pages/creat/creat',
    //             success: function (e) {
    //               var page = getCurrentPages().pop();
    //               if (page == undefined || page == null) return;
    //               page.onLoad();
    //             }
    //           })
    //         }
    //       }
    //     })

    //   }
    // })
  },
  returnEdit(){
    this.setData({
      confirm: true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _m = "question";
    this.setData({
      [_m]:$v
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