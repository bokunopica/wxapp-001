// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
      jumpCount: 5, // 跳过倒计时
      needOpen: true, // 开屏状态 false-不需要开屏 true-需要开屏
      openOpacity: 100 // 开屏不透明度-用于渐变
  },

  jumpOpen:function(){
    /* 
    跳过开屏图方法
    */
    var that = this;
    this.y=setInterval(function(){
        // 开屏图渐变淡出
        that.setData({openOpacity:that.data.openOpacity/2});
        console.log
    }, 50)
    setTimeout(function(){
        // 设置延时任务-与渐变淡出同步
        clearInterval(this.y)
        that.setData({
            needOpen:false
        });
        wx.showTabBar();
    }, 1000)
    clearInterval(this.x); //清除开屏图渐变定时器
  },
  onLoad() {
      console.log("----onLoad begin----")
      var that = this;
      if(that.data.needOpen){
          wx.hideTabBar();
          this.x=setInterval(function(){
            // count down
            that.setData({
                jumpCount:that.data.jumpCount-1
            });
            if(that.data.jumpCount<=0){
                that.jumpOpen();
            }
          }, 1000);
      }
      console.log("----onLoad end----")
  }
})
