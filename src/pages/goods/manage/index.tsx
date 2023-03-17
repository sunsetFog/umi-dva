import React, { useEffect } from 'react';
import { connect, router } from 'dva';

const { withRouter } = router;

function manageUnit(props) {
  const { state, dispatch } = props;

  useEffect(() => {}, []);

  return <section>---商品管理---</section>;
}

function mapStateToProps(params) {
  console.log('-mapStateToProps-', params);
  return {
    state: params.users,
  };
}
export default connect(mapStateToProps)(withRouter(manageUnit));
