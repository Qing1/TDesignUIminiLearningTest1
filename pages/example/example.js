



Page({
  data: {

    // 性别
    product: {
      value: 'all',
      options: [
        {
          value: 'all',
          label: '不限',
        },
        {
          value: 'male',
          label: '男',
        },
        {
          value: 'female',
          label: '女',
        },
      ],
    },

    // 学历
    education: {
      value: 'all',
      options: [
        {
          value: 'all',
          label: '不限',
        },
        {
          value: '01',
          label: '博士',
        },
        {
          value: '02',
          label: '硕士',
        },
        {
          value: '03',
          label: '学士',
        },
        {
          value: '04',
          label: '高中',
        },
        {
          value: '05',
          label: '初中',
        },
        {
          value: '06',
          label: '其他',
        },
      ]
    },

    // 民族
    nation: {
      value: '56',
      options: [
        {
          "value": "56",
          "label": "不限"
        },
        {
          "value": "00",
          "label": "汉族"
        },
        {
          "value": "01",
          "label": "蒙古族"
        },
        {
          "value": "02",
          "label": "回族"
        },
        {
          "value": "03",
          "label": "藏族"
        },
        {
          "value": "04",
          "label": "维吾尔族"
        },
        {
          "value": "05",
          "label": "苗族"
        },
        {
          "value": "06",
          "label": "彝族"
        },
        {
          "value": "07",
          "label": "壮族"
        },
        {
          "value": "08",
          "label": "布依族"
        },
        {
          "value": "09",
          "label": "朝鲜族"
        },
        {
          "value": "10",
          "label": "满族"
        },
        {
          "value": "11",
          "label": "瑶族"
        },
        {
          "value": "12",
          "label": "白族"
        },
        {
          "value": "13",
          "label": "哈尼族"
        },
        {
          "value": "14",
          "label": "哈萨克族"
        },
        {
          "value": "15",
          "label": "傣族"
        },
        {
          "value": "16",
          "label": "黎族"
        },
        {
          "value": "17",
          "label": "傈僳族"
        },
        {
          "value": "18",
          "label": "佤族"
        },
        {
          "value": "19",
          "label": "畲族"
        },
        {
          "value": "20",
          "label": "高山族"
        },
        {
          "value": "21",
          "label": "拉祜族"
        },
        {
          "value": "22",
          "label": "水族"
        },
        {
          "value": "23",
          "label": "东乡族"
        },
        {
          "value": "24",
          "label": "纳西族"
        },
        {
          "value": "25",
          "label": "景颇族"
        },
        {
          "value": "26",
          "label": "柯尔克孜族"
        },
        {
          "value": "27",
          "label": "土族"
        },
        {
          "value": "28",
          "label": "达斡尔族"
        },
        {
          "value": "29",
          "label": "仫佬族"
        },
        {
          "value": "30",
          "label": "羌族"
        },
        {
          "value": "31",
          "label": "布朗族"
        },
        {
          "value": "32",
          "label": "撒拉族"
        },
        {
          "value": "33",
          "label": "毛南族"
        },
        {
          "value": "34",
          "label": "仡佬族"
        },
        {
          "value": "35",
          "label": "锡伯族"
        },
        {
          "value": "36",
          "label": "阿昌族"
        },
        {
          "value": "37",
          "label": "普米族"
        },
        {
          "value": "38",
          "label": "塔吉克族"
        },
        {
          "value": "39",
          "label": "怒族"
        },
        {
          "value": "40",
          "label": "乌孜别克族"
        },
        {
          "value": "41",
          "label": "俄罗斯族"
        },
        {
          "value": "42",
          "label": "鄂温克族"
        },
        {
          "value": "43",
          "label": "德昂族"
        },
        {
          "value": "44",
          "label": "保安族"
        },
        {
          "value": "45",
          "label": "裕固族"
        },
        {
          "value": "46",
          "label": "京族"
        },
        {
          "value": "47",
          "label": "塔塔尔族"
        },
        {
          "value": "48",
          "label": "独龙族"
        },
        {
          "value": "49",
          "label": "鄂伦春族"
        },
        {
          "value": "50",
          "label": "赫哲族"
        },
        {
          "value": "51",
          "label": "门巴族"
        },
        {
          "value": "52",
          "label": "珞巴族"
        },
        {
          "value": "53",
          "label": "基诺族"
        },
        {
          "value": "54",
          "label": "德昂族"
        },
        {
          "value": "55",
          "label": "保安族"
        }
      ]
    },

    // 部门
    department: {
      value: '00',
      options: [
        {
          value: '00',
          label: '不限'
        },
        {
          value: '01',
          label: '行政'
        },
        {
          value: '02',
          label: '人力'
        },
        {
          value: '03',
          label: '财务'
        },
        {
          value: '04',
          label: '生产'
        },
        {
          value: '05',
          label: '营销'
        },
        {
          value: '06',
          label: '安全'
        },
        {
          value: '07',
          label: '后勤'
        },
        {
          value: '08',
          label: '采购'
        },
        {
          value: '09',
          label: '保卫'
        },
      ],
    },

    // 年龄
    age: {
      value: '00',
      options: [
        {
          value: '00',
          label: '不限'
        },
      ]
    },
    // 职位
    career: {
      value: '00',
      options: [
        {
          value: '00',
          label: '不限'
        },
        {
          value: '01',
          label: '程序员'
        },
        {
          value: '02',
          label: '人事HR'
        },
        {
          value: '03',
          label: '财务会计'
        },
        {
          value: '04',
          label: '总经理'
        },
        {
          value: '05',
          label: '设计师'
        },
        {
          value: '06',
          label: '运营'
        },
      ],
    },


    // 员工个人信息
    employeeInfo: [
      {
        fullName: '张三',
        gender: '男',
        department: '开发部',
        higestEducation: '博士后',
        company: '人生匆匆',
        employeeId: '001',
      },
      {
        fullName: '李四',
        gender: '男',
        department: '采购部',
        higestEducation: '学士',
        company: '时光有限',
        employeeId: '002'
      },
      {
        fullName: '王五娘',
        gender: '女',
        department: '财务部',
        higestEducation: '硕士',
        company: '手头有限',
        employeeId: '003'
      },
      {
        fullName: '王五娘',
        gender: '女',
        department: '财务部',
        higestEducation: '硕士',
        company: '手头有限',
        employeeId: '003'
      },
      {
        fullName: '王五娘',
        gender: '女',
        department: '财务部',
        higestEducation: '硕士',
        company: '手头有限',
        employeeId: '003'
      },
      {
        fullName: '王五娘',
        gender: '女',
        department: '财务部',
        higestEducation: '硕士',
        company: '手头有限',
        employeeId: '003'
      },
      {
        fullName: '王五娘',
        gender: '女',
        department: '财务部',
        higestEducation: '硕士',
        company: '手头有限',
        employeeId: '003'
      },
      {
        fullName: '王五娘',
        gender: '女',
        department: '财务部',
        higestEducation: '硕士',
        company: '手头有限',
        employeeId: '003'
      },
      {
        fullName: '王五娘',
        gender: '女',
        department: '财务部',
        higestEducation: '硕士',
        company: '手头有限',
        employeeId: '003'
      },
      {
        fullName: '王五娘',
        gender: '女',
        department: '财务部',
        higestEducation: '硕士',
        company: '手头有限',
        employeeId: '003'
      },
      {
        fullName: '王五娘',
        gender: '女',
        department: '财务部',
        higestEducation: '硕士',
        company: '手头有限',
        employeeId: '003'
      },
      {
        fullName: '王五娘',
        gender: '女',
        department: '财务部',
        higestEducation: '硕士',
        company: '手头有限',
        employeeId: '003'
      },
      {
        fullName: '王五娘',
        gender: '女',
        department: '财务部',
        higestEducation: '硕士',
        company: '手头有限',
        employeeId: '003'
      },
    ],
    tableOrderList: [],
    // 动态生成的链接数组对象
    linkOrderList: [],
    linkOrderList1: [],
    // 跳转链接数据 原始不带参数的 当前已经不再使用
    navigatorProps: {
      url: '/pages/employeeInfo/employeeInfo',
      openType: 'navigate',
    }
  },

  // 序号生成函数
  generateOrderList() {
    const maxLength = this.data.employeeInfo.length;
    const OrderList = [];
    for (let i = 1; i <= maxLength; i++) {
      OrderList.push(i)
    }
    // console.log('生成的序列表', OrderList);
    this.setData({
      tableOrderList: OrderList
    });
  },

  // 性别
  onChange(e) {
    console.log('点击了性别选项：', e)
    this.setData({
      'product.value': e.detail.value,
    });
  },
  // 学历
  onEducation(e) {
    console.log('点击了学历选项：', e)
    this.setData({
      'education.value': e.detail.value,
    });
  },
  // 民族
  onNation(e) {
    console.log('点击了民族选项：', e)
    this.setData({
      'nation.value': e.detail.value,
    });
  },

  // 部门
  onDepartment(e) {
    console.log('点击了部门选项：', e)
    this.setData({
      'department.value': e.detail.value,
    });

    // console.log('部门', this.data.department.options)
  },

  // 年龄
  onAge(e) {
    console.log('点击了年龄选项：', e)
    this.setData({
      'age.value': e.detail.value,
    });
  },

  // 职位
  onCareer(e) {
    console.log('点击了职位选项', e);
    this.setData({
      'career.value': e.detail.value
    })
  },
  // 年龄列表生成函数
  setAge() {
    let ageOptions = this.data.age.options.slice(0);
    const minAge = 18;
    const maxAge = 99;
    for (let age = minAge; age <= maxAge; age++) {
      const ageLabel = age.toString();
      ageOptions.push({
        value: ageLabel,
        label: ageLabel
      });
      this.setData({
        'age.options': ageOptions
      });
    }
    // console.log('年龄列表', ageOptions)

  },

  // 搜索触发事件
  onSearch(event) {
    console.log('点击了搜索按钮', event)
  },

  // 重置触发事件
  onReset(event) {
    console.log('点击了重置按钮', event)
  },

  // 带参数跳转链接 生成 数组对象 但会报黄色警报 说是类型不匹配 具体报错如下
  // property "navigatorProps" of "miniprogram_npm/tdesign-miniprogram/link/link" received type-uncompatible value: expected <Object> but got non-object value. Used null instead.
  link() {
    const linkList = [];
    const length = this.data.employeeInfo.length;
    for (let i = 0; i < length; i++) {
      const url = '/pages/employeeInfo/employeeInfo?employeeId=' + this.data.employeeInfo[i].employeeId + '&gender=' + this.data.employeeInfo[i].gender;
      const openType = 'navigate';
      linkList.push({
        url: url,
        openType: openType
      });
    };
    console.log('生成的link链接表', linkList)
    this.setData({
      linkOrderList: linkList,

    })
  },

  // 尝试生成 对象 来解决黄色警告现象 失败
  link1(){
    const linkList = {};
    const length = this.data.employeeInfo.length;
    for(let i=0;i<length;i++){
      const employee  = this.data.employeeInfo[i]
      const url = '/pages/employeeInfo/employeeInfo?employeeId=' + employee.employeeId + '&gender=' + employee.gender;
      const openType = "navigate";
      linkList[employee.employeeId]={
        url:url,
        openType:openType
      };
    };
    console.log('生成的链接对象',linkList);

    this.setData({
      linkOrderList1:linkList,
    });

  },
  // 详情跳转  现在该函数没作用
  onNav(e) {
    console.log(e);
    const employeeId = e.currentTarget.dataset.id;
    console.log('传递的员工Id', employeeId)
    // 找到对应的员工信息
    const employee = this.data.employeeInfo.find(emp => emp.employeeId === employeeId);
    if (employee) {
      const gender = employee.gender;
      console.log('该员工的性别是', gender)
      // this.setData({
      //   'navigatorProps.url':'/pages/employeeInfo/employeeInfo?employeeId='+employeeId+'&gender='+gender,
      // })
      // 暂时解决不了的 方案 直接使用点击函数 把原来的跳转链接去除 直接在跳转完成时，重新写跳转函数
      // 终于解决了  使用 link()函数 根据表格 对每一个链接生成 自己带参数链接
      //   wx.navigateTo({
      //     url: '/pages/employeeInfo/employeeInfo?employeeId='+employeeId+'&gender='+gender,
      //   })
    } else {
      console.log('未找到该员工Id对应的员工信息')
    }

  },

  


  onLoad() {
    //调用 序号列表生成函数
    this.generateOrderList();
    //调用 年龄列表生成函数
    this.setAge();
    // 调用链接列表生成
    this.link();
    this.link1();
  },



})
