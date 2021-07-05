import axios from 'axios'
import qs from "qs"

export let rolelist = (from) => axios.get('/api/rolelist', from)


axios.interceptors.request.use((config) => {
    console.log('请求拦截');
    console.log(config);

    return config
})


//封装get请求
export let get = (url, params = {}) => {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

//封装post请求

export let post = (url, params, isfile = false) => {
    let data = null
    if (isfile) {
        data = new FormData()
        for (let i in params) {
            data.append(i, params[i])
        }
    } else {
        data = qs.stringify(params)
    }
    return new Promise((resolve,reject)=>{
        axios.post(url,data).then(res=>{
            resolve(res)
        }).catch(err=>{
            reject(err)
        })
    })
}
