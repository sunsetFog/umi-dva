/*
study: mock模拟本地接口
cnpm install mockjs --save
cnpm install @types/mockjs --save-dev


mock.js官网: http://mockjs.com

官网位置：文档 》Mock数据
*/
import mockjs from 'mockjs';
let dataList = mockjs.mock({
  status: 200,
  message: '显示用户信息成功',
  'data|35': [
    {
      'id|+1': 1,
      name: '@cname',
      salary: '@integer(5000,12000)',
      city: '@city',
      time: '@date',
    },
  ],
});

export default {
  'GET /users/list': dataList,
  'DELETE /users/delete': (req: any, res: any) => {
    // req请求信息  res响应信息
    // 删除id项
    dataList.data = dataList.data.filter(function (item, index) {
      return item.id != req.query.id;
    });
    // 接口返回
    res.send({
      status: 200,
      message: '删除成功！',
    });
  },
  'POST /users/add': (req: any, res: any) => {
    // id等于最后一项加1
    req.body.id = ++dataList.data[dataList.data.length - 1].id;
    // 前面加一项
    dataList.data.unshift(req.body);
    // 接口返回
    res.send({
      status: 200,
      message: '添加成功！',
    });
  },
  'PUT /users/update': (req: any, res: any) => {
    // 符合条件，返回下标
    let idx = dataList.data.findIndex(function (item) {
      return item.id == req.body.id;
    });
    // 替换
    dataList.data.splice(idx, 1, req.body);
    // 接口返回
    res.send({
      status: 200,
      message: '修改成功！',
    });
  },
};
