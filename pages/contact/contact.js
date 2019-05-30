//logs.js
const app = getApp()
const TITLE_HEIGHT = 30
const ANCHOR_HEIGHT = 18
Page({
  data: {
    toView:'',
    logs: [],
    scrollTop:0,
    HOT_NAME:'常',
    HOT_SINGER_LEN:10,
    listHeight:[],
    currentIndex:0,
    fixedTitle:'',
    fixedTop:0,
    list:[
      {
        "index": "X",
        "name": "薛谦",
        "img":'../../images/IMG_0973.jpg',
        "department":"人事部"
      },
      {
          "index": "Z",
          "name": "周伦",
          "img":'../../images/IMG_0970.jpg',
        "department":"人事部:经理"
      },
      {
        "index": "X",
        "name": "小伦",
        "img":'../../images/IMG_0970.jpg',
        "department":"人事部:普通职员"
      },
      {
          "index": "X",
          "name": "小宝哥",
          "img":'../../images/IMG_0973.jpg',
        "department":"人事部:普通职员"
      },
      {
          "index": "C",
          "name": "陈迅",
        "department":"策划部：项目经理",
          "img":'../../images/IMG_0893.jpg'
      },
      {
          "index": "L",
          "name": "林杰",
        "department":"宣传部:项目组组长",
          "img":'../../images/IMG_0893.jpg'
      },
      {
          "index": "A",
          "name": "Alan",
          "img":'../../images/IMG_0893.jpg',
        "department":"秘书部"
      },
    ]
  },
  onLoad: function () {
    var that = this,
        list = that.data.list;
    wx.hideLoading()
    this.setData({
      logs: this._normalizeSinger(list)
    })
    this._calculateHeight()
  },
  _normalizeSinger(list) {
    //列表渲染
    let map = {
      hot: {
        title: this.data.HOT_NAME,
        items: []
      }
    }
    list.forEach((item, index) => {
      if (index < this.data.HOT_SINGER_LEN) {
        map.hot.items.push({
          name: item.name,
          avatar:item.img,
          department:item.department
          })
      }
      const key = item.index
      if (!map[key]) {
        map[key] = {
          title: key,
          items: []
        }
      }
      map[key].items.push({
        name: item.name,
        avatar: item.img,
        department:item.department
      })
    })
    // 为了得到有序列表，我们需要处理 map
    let ret = []
    let hot = []
    for (let key in map) {
      let val = map[key]
      if (val.title.match(/[a-zA-Z]/)) {
        ret.push(val)
      } else if (val.title === this.data.HOT_NAME) {
        hot.push(val)
      }
    }
    ret.sort((a, b) => {
      return a.title.charCodeAt(0) - b.title.charCodeAt(0)
    })
    return hot.concat(ret)
  },
  scroll :function(e) {
    var newY = e.detail.scrollTop;
    this.scrollY(newY);
  },
  scrollY(newY) {
    const listHeight = this.data.listHeight
    // 当滚动到顶部，newY>0
    if (newY == 0 || newY < 0) {
      this.setData({
        currentIndex:0,
        fixedTitle:''
      })
      return
    }
    // 在中间部分滚动
    for (let i = 0; i < listHeight.length - 1; i++) {
      let height1 = listHeight[i]
      let height2 = listHeight[i + 1]
      if (newY >= height1 && newY < height2) {
        this.setData({
          currentIndex:i,
          fixedTitle:this.data.logs[i].title
        })
        this.fixedTt(height2 - newY);
        return
      }
    }
    // 当滚动到底部，且-newY大于最后一个元素的上限
    this.setData({
      currentIndex: listHeight.length - 2,
      fixedTitle: this.data.logs[listHeight.length - 2].title
    })
  },
  fixedTt(newVal) {
    let fixedTop = (newVal > 0 && newVal < TITLE_HEIGHT) ? newVal - TITLE_HEIGHT : 0
    if (this.data.fixedTop === fixedTop) {
      return
    }
    this.setData({
      fixedTop:fixedTop
    })
  },
  _calculateHeight() {
    var lHeight = [],
        that = this;
    let height = 0;
    lHeight.push(height);
      var query = wx.createSelectorQuery();
      query.selectAll('.list-group').boundingClientRect(function(rects){
        var rect = rects,
            len = rect.length;
        for (let i = 0; i < len; i++) {
          height += rect[i].height;
          lHeight.push(height)
        }
        
      }).exec();
    var calHeight = setInterval(function(){
      if (lHeight != [0]) {
        that.setData({
          listHeight: lHeight
        });
        clearInterval(calHeight);
      } 
    },1000)
  },
  scrollToview(e){
    var id = e.target.dataset.id

      this.setData({
        toView: id
      })

    
  }
})
