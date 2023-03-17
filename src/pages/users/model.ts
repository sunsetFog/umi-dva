// 引入接口
import { query, userslist } from '@/pages/users/service';
// dva/router在官网API
import { routerRedux } from 'dva/router';
export default {
  namespace: 'users', // 命名空间，引入vuex用的名字

  state: {
    // 数据
    water: '水',
  },
  // 订阅 监听action调用
  subscriptions: {
    setup({ dispatch, history }) {},
  },
  // 业务逻辑  可异步，等于vue的action
  effects: {
    *iceApt({ payload }, { call, put }) {
      console.log('顺序1-入参=', payload);
      yield put({ type: 'iceAir', payload });
    },
    *getData({ payload }, { call, put }) {
      // 调用接口，异步操作
      // const data = yield call(query);
      // study: mock模拟本地接口
      const data = yield call(userslist);
      console.log('mock接口=', data);
      // 调用reducers方法
      yield put({ type: 'save', payload: data.data });
    },
  },
  // 更新state数据  等于vue的mutation    effects和reducers都是用dispatch调
  reducers: {
    iceAir(state, action) {
      console.log('顺序2-入参=', action);
      return { ...state, water: action.payload };
    },
    save(state, action) {
      console.log('后端数据2：', action.payload);
      return { ...state, fish: action.payload };
    },
  },
};
