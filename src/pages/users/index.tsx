
import React, {useEffect} from 'react';
import { connect, router } from 'dva';
/*
import { withRouter } from 'dva/router'; 这个报错
Please use `require("dva").router` instead of `require("dva/router")`. Support for the latter will be removed in the next major release.

解决：https://blog.csdn.net/tigerwxm630/article/details/111599648
*/

const { withRouter } = router;

function userUnit(props) {
    const { state, dispatch } = props;

    useEffect(() => {
        dispatch({
            type: 'users/getData',
            payload: []
        })
    }, []);


    const iceWay = () => {
        console.log("---水变冰---");
        dispatch({
            type: 'users/iceApt',
            payload: '水变冰'
        })
    }
    return (
        <section>
            ---函数组件---
            <button onClick={iceWay}>--{state.water}--</button>
        </section>
    )
}


function mapStateToProps(params) {
    console.log("-mapStateToProps-", params);
    return {
        state: params.users
    }
}
// props对象加入了state,dispatch,history属性   history用于跳转
export default connect(mapStateToProps)(withRouter(userUnit));

