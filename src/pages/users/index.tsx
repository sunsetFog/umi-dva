import React, { useEffect } from 'react';
import { connect, router } from 'dva';
/*
import { withRouter } from 'dva/router'; 这个报错
Please use `require("dva").router` instead of `require("dva/router")`. Support for the latter will be removed in the next major release.

解决：https://blog.csdn.net/tigerwxm630/article/details/111599648
*/

const { withRouter } = router;
import moment from 'moment';

function userUnit(props) {
  // 解释为 userUnit:React.FC<any> = (props:any) => {}   所以React要引入
  const { state, dispatch } = props;

  useEffect(() => {
    // study: mock模拟本地接口
    dispatch({
      type: 'users/getData',
      payload: [],
    });
    console.log('时间转moment=', moment('2023-1-1', 'YYYY-MM-DD'));
  }, []);

  const iceWay = () => {
    console.log('---水变冰---');
    dispatch({
      type: 'users/iceApt',
      payload: '水变冰',
    });
  };
  return (
    <section>
      ---函数组件---
      <button onClick={iceWay}>--{state.water}--</button>
    </section>
  );
}

function mapStateToProps(params) {
  console.log('-mapStateToProps-', params);
  return {
    state: params.users,
  };
}
// props对象加入了state,dispatch,history属性   history用于跳转
export default connect(mapStateToProps)(withRouter(userUnit));
