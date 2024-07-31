// JS
Page({
  data: {

    // 菜单列表
    product: {
      value: '0-0',
      options: [
        {
          value: '0-0',
          label: '选项1-1',
        },
        {
          value: '0-1',
          label: '选项1-2',
        },
        {
          value: '0-2',
          label: '选项1-4',
        },
      ],
    },

    // 树形数据
    options1: [],
    value: ['0', '0-0'],

    // 树形数据1
    value2:['0','0-0'],
    options2:[
      {
        value:'0',
        label:'一',
        children:[
          {
          value:'0-0',
          label:'一选择1'
        },
        {
          value:'0-1',
          label:'一选择2'
        },
        {
          value:'0-2',
          label:'一选择3'
        },
      ]
      },
      {
        value:'1',
        label:'二',
        children:[
          {
          value:'1-0',
          label:'二选择1'
        },
        {
          value:'1-1',
          label:'二选择2'
        },
        {
          value:'1-2',
          label:'二选择3',
          
        },
      ]
      },
      {
        value:'2',
        label:'三',
        children:[
          {
          value:'2-0',
          label:'三选择1'
        },
        {
          value:'2-1',
          label:'三选择2'
        },
        {
          value:'2-2',
          label:'三选择3',
          children:[
            {
              value:'2-2-0',
              label:'三选择3-0'
          },
          {
            value:'2-2-1',
            label:'三选择3-1'
        },
          ]
        },
      ]
      },
      {
        value:'3',
        label:'四',
        children:[],
      },
    ],


    // 树形数据是否可见
    visible:false,
  },

  // 下拉菜单列表
  onChange(e) {
    this.setData({
      'product.value': e.detail.value,
    });
  },

  onMenuOpen(){
    this.setData({
      visible:true
    })
  },
  onMenuClose(){
    this.setData({
      visible:false
    })
  },

  // 树形列表点击函数
  onChange1(e) {
    console.log('选择了选项：',e)
    console.log('选择值', e.detail.value[1])
    this.setData({
      value: e.detail.value,
      'product.value': '0-1',
    });
  },
  // 树形数据生成函数
  generateOptions() {
    console.log('111');
    const chineseNumber = '一二三四五六七八九十'.split('');
    console.log('中文数组', chineseNumber);

    // 定义递归生成树形结构的函数
    const generateTree = (deep = 1, count = 10, prefix)=>{
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

  // 树形列表2 点击函数
  onChange2(e){
    console.log(e);
    console.log('选择了值', e.detail.value)
    this.setData({
      value2:e.detail.value
    })
    const choseOption = {}
    // choseOption.value
    if(e.detail.value[1]){
      choseOption.value = e.detail.value;
      // choseOption.label = 
      
    }
  },

  onLoad(options){
    // this.generateOptions();
  }
 
});