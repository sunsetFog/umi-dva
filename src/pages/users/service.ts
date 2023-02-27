


export function query() {
    return fetch('http://localhost:8062/sky/menu/btnList').then((response)=>response.json());
}