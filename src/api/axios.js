// npm install axios   安装axios
import axios from 'axios'



axios.default.timeout === 1000;


//拦截器
axios.interceptors.response.use((res) => {
    if ( res.data.code !== 200) {
        window.alert('请求数据失败')
        return Promise.reject(res)
    }
    return res
}, (error) => {
    window.alert('请求失败!')
    return Promise.reject(error)
})

export function fetchGet(url, param) {
    return new Promise((resolve,reject) => {
        axios.get(url, {
            params: param
        })
        .then(response => {
            resolve(response.data)
        }, err => {
            reject(err)
        })
        .catch(error => {
            reject(error)
        })
    })
}