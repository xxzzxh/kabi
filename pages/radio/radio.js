// pages/radio/radio.js
const app = getApp();
const $v = app.globalData.createInfo;
var schemadata = require('../../data/schemadata.js');  //引入
Page({

  /**
   * 页面的初始数据
   */

  data: {
    
    isMust:1,
    "type":1,
    index:"",
    // STEP2:DOWN
    schema:"",
    schemaschema:"",
    schematitle:'',
    // form:
      title: "",
      answerslist: [""],  //添加选项,answerslist
  },
  // 标题
  title(e){
    var val = e.detail.value;
    this.setData({
      "schema.title":val
    })
    // console.log("title" + JSON.stringify(this.data.schema))
  },
  //日期选择
  radioChange(e)
  {
    var val = e.detail.value;
    this.setData({
      "schema.default": val
    })
    console.log("title" + JSON.stringify(this.data.schema))
  },

  // 选项值
  addTitle(e){
    var index = e.currentTarget.dataset.index;
    var val = e.detail.value;
    var arr = this.data.schema.enums;
    if(val == "") {
      arr[index]= "";
    }else {
      arr[index] = { text: val };
    }
    this.setData({
      //  answerslist: arr,
      'schema.enums': arr
    })
    // this.data.schema.enums = arr
    console.log("enums" + JSON.stringify(this.data.schema))
  },
  // 添加选项
  addOptions(){
    var arr = this.data.schema.enums;
    arr.push("");
    this.setData({
      //  answerslist:arr,
      'schema.enums':arr
    })
    // this.data.schema.enums = arr
    // console.log("enums" + JSON.stringify(this.data.schema.enums))
    // console.log("answerslist" + JSON.stringify(this.data.answerslist))
  },
  // 删除选项
  remove(e) {
    var index = e.currentTarget.dataset.index;
    var arr = this.data.schema.enums;
    wx.showModal({
      title: '提示',
      content: '删除本选项？',
      success:res=>{
        if(res.confirm) {
          if (arr.length == 1) {
            wx.showToast({
              title: '只剩一个啦，不要删除啦',
              icon: "none",
              duration: 800
            })
            return false;
          }
          arr.splice(index, 1);
          this.setData({
            'schema.enums': arr,
            //  answerslist:arr
          })
          // this.data.schema.enums = arr
          // console.log("enums" + JSON.stringify(this.data.schema))
        }
      }
    });
    
  },

  // 切换填空题
  changeType(e){
    var checked = e.detail.value?1:0;
    this.setData({
      "type":checked
    })
    if(checked) {
      wx.setNavigationBarTitle({
        title: "单选题"//页面标题为路由参数
      })
    }else{
      wx.setNavigationBarTitle({
        title: "填空题"//页面标题为路由参数
      })
    }
    
  },
  //设置tab默认值
  changedefault(e) {
    var checked = e.detail.value;
    console.log("默认值" + checked);
    this.setData({
      "schema.default": checked ? 1 : 0
    });
  },
  // tab 类型 设置是否为整数
  changeIs(e) {
    var checked = e.detail.value;
    var properties = e.currentTarget.dataset.properties;
    switch(properties){
      case "ui_integer":
        this.setData({
          "schema.ui_integer": checked ? 1 : 0
        });
        break;
      case "ui_required":
        this.setData({
          "schema.ui_required": checked ? 1 : 0
        });
        break;

    }
    
  },
  // input 类型 设置文本输入最大值
  setinput(e) {
    var input = e.detail.value;
    var properties = e.currentTarget.dataset.properties;
    switch (properties) {
      case "maximum":
        this.setData({
          "schema.maximum": input
        });
        break;
      case "minimum":
        this.setData({
          "schema.minimum": input
        });
        break;
     }
  },
  //提交
  submit(){
    var arr = this.data.schema.enums;
    if(this.data.schema.title == "") {
      wx.showToast({
        title: '标题不能为空',
        icon: "none",
        duration: 800
      });
      return;
    }
    // 不同组件判断不同
    if (this.data.schema.ui_widget == "array") {
      for (let i in arr) {
        if (arr[i] == "") {
          wx.showToast({
            title: '选项不能为空',
            icon: "none",
            duration: 800
          });
          return;
        }
      }
    // 将值存进全局中
      // "isMust": this.data.isMust,
      //   "type": this.data.type,
      //     "question": this.data.title,
      var json = {
        "schema":this.data.schema,
        "schematitle":this.data.schematitle
      }
      }else {
      var json = {
        "schema": this.data.schema,
        "schematitle": this.data.schematitle
      }
    }    
    // var psqList = $v.psqList ? $v.psqList:[];
    // console.log(psqList);
    // if(this.data.index!="") {
    //   psqList[this.data.index] = json;
    // }else {
    //   psqList.push(json);
    // }
    
    // $v.psqList = psqList;
    // console.log($v);
    // console.log(JSON.stringify($v));
    // wx.navigateBack({});
    var schemaList = $v.schemaList ? $v.schemaList : [];
    console.log(schemaList);
    //如果没有题目 和有题目的情况
    if (this.data.index != "") {
      console.log("index"+this.data.index);
      schemaList[this.data.index] = json;
    } else {
      schemaList.push(json);
    }

    $v.schemaList = schemaList;
    console.log($v);
    console.log(JSON.stringify($v));
    wx.navigateBack({});
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // schemas
    var schemaschemas = schemadata.schemaschema; 
    console.log("schemaschemas" + schemaschemas)
    this.setData({
      "schemaschema": schemaschemas
    });

    //获取表单页面的修改的第几个  
    if(options.index) {
      var index = options.index;
      this.setData({
        index:index
      })
      // if (parseInt($v.schemaList[index].type)){
      //   wx.setNavigationBarTitle({
      //     title: "单选题"//页面标题为路由参数
      //   })
      // } else {
      //   wx.setNavigationBarTitle({
      //     title: "填空题"//页面标题为路由参数
      //   })
      // }
      wx.setNavigationBarTitle({
        title: $v.schemaList[index].schematitle//页面标题为路由参数
      })
      // if ($v.schemaList[index].type){
        this.setData({
          schema: $v.schemaList[index].schema,
          schematitle: $v.schemaList[index].schematitle

        })
      // }else {
      //   this.setData({
      //     "type": $v.psqList[index].type,
      //     title: $v.psqList[index].question,
      //     isMust: $v.psqList[index].isMust
      //   })
      // }
      
    }else {
      //STEP1：DOWN
      var schema = JSON.parse(options.schema)
      var copyschema = JSON.parse(JSON.stringify(schema))
      var schematitle = copyschema.title
      // title
      schema.title = ""
      // 选项
      schema.enums = [""]
      console.log("schema" + JSON.stringify(schema))
      this.setData({
        // "type": parseInt(options.type)
        "schema": schema,
        "schematitle": schematitle,
      });
        wx.setNavigationBarTitle({
          title: schematitle//页面标题为路由参数
        })
    }
    
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