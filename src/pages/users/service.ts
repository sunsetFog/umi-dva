// 官网位置：插件 》@umijs/plugin-request
import { request } from 'umi';

export function query() {
  return fetch('http://localhost:8062/sky/menu/btnList').then((response) =>
    response.json(),
  );
}

// study: mock模拟本地接口
export function userslist() {
  return request('/users/list', {
    method: 'GET',
    params: {
      name: 1,
    },
    skipErrorHandler: true,
  });
}
