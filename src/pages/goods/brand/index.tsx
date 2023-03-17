import React, { useEffect } from 'react';
import { connect, router } from 'dva';
import { history } from 'umi';

const { withRouter } = router;

function brandUnit(props) {
  const { state, dispatch } = props;

  useEffect(() => {}, []);

  const backHome = () => {
    history.push('/');
  };

  return (
    <section>
      ---商品品牌---
      <br />
      <button onClick={backHome}>回到首页</button>
    </section>
  );
}

function mapStateToProps(params) {
  console.log('-mapStateToProps-', params);
  return {
    state: params.users,
  };
}
export default connect(mapStateToProps)(withRouter(brandUnit));
