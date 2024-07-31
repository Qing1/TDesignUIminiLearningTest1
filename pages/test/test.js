// pages/test/test.js

const chineseNumber = '一二三四五六七八九十'.split('');

const generateTree = function (deep = 0, count = 10, prefix) {
  const ans = [];

  for (let i = 0; i < count; i += 1) {
    const value = prefix ? `${prefix}-${i}` : `${i}`;
    const rect = {
      label: `选项${chineseNumber[i]}`,
      value,
    };

    if (deep > 0) {
      rect.children = generateTree(deep - 1, 10, value);
    }
    ans.push(rect);
  }

  return ans;
};

Page({

  /**
   * 页面的初始数据
   */
  data: {
    options: generateTree(1),
    value: ['0', '0-0'],
    options1: [],
  },

  onChange(e) {
    this.setData({
      value: e.detail.value,
    });
  },

  // 选项列表生成函数
  // generateOptions() {
  //   console.log('111')
  //   const chineseNumber = '一二三四五六七八九十'.split('');
  //   console.log('中文数组',chineseNumber)
  //   const generateTree = function(deep = 0, count = 10, prefix) => {
  //     const ans = [];
  //     for (let i = 0; i < count; i += 1) {
  //       const value = prefix ? `${prefix}-${i}` : `${i}`;
  //       const node = {
  //         label: `选项${chineseNumber[i]}`,
  //         value,
  //         children: deep>0 ? generateTree(deep-1,10,value):[]
  //       };
  //       console.log('第几次循环',i+1);
  //       console.log('目前数组情况',ans)
  //       ans.push(node);
  //     }
  //     const optionss = generateTree() 
  //     this.setData({
  //       options1: optionss
  //     })
  //   }
  // },
    generateOptions: function() {
      console.log('111');
      const chineseNumber = '一二三四五六七八九十'.split('');
      console.log('中文数组', chineseNumber);
  
      // 定义递归生成树形结构的函数
      const generateTree = (deep = 1, count = 10, prefix) => {
        const ans = [];
  
        for (let i = 0; i < count; i += 1) {
          const value = prefix ? `${prefix}-${i}` : `${i}`;
          const node = {
            label: `选项${chineseNumber[i]}`,
            value,
            children: deep > 0 ? generateTree(deep - 1, 10, value) : [] // 递归生成子节点
          };
          console.log('第几次循环', i + 1);
          console.log('目前数组情况', ans);
          ans.push(node);
        }
        console.log('生成的选项数组', ans);
        return ans; // 返回生成的数组
      };
  
      const options = generateTree(); // 调用生成函数
      this.setData({
        options1: options // 使用setData更新页面数据
      });
    },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.generateOptions()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})