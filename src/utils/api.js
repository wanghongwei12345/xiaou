import {get,post} from 'http'

//获取一级分类信息(首页快速分类导航)
export const getcate = () =>get('/api/getcate')
//获取商品全部分类信息
export const getcates = ()=> get('/api/getcates')
//获取轮播图信息
export const getbanner = ()=>get('/api/getbanner')
//获取限时秒杀信息(首页)
export const getseckill  = ()=>get('/api/getseckill')
//获取商品信息(首页)
export const gethortgoods = ()=>get('/api/gethortgoods')
//搜索（like模糊搜索）
export const search = (params)=>get('/api/search',params)
//获取一级分类下的所有商品
export const getgoodlist = (params)=>get('/api/getgoodlist',params)
//获取二级分类下的所有商品
export const getgoodlis = (params)=>get('//api/getgoodlis',params)
//获取一个商品信息
export const getgoodsinfo = (params)=>get('/api/getgoodsinfo',params)
//会员注册（vue项目）
export const register = (params)=>post('/api/register',params)
//会员登录（vue项目）
export const login = (params)=>post('/api/login',params)
//购物车列表
export const cartlist = (params)=>get('/api/cartlist',params)
//购物车添加
export const cartadd = (params)=>post('/api/cartadd',params)
//购物车修改
export const cartedit = (params)=>post('/api/cartedit',params)
//购物车删除
export const cartdelete = (params)=>post('/api/cartdelete',params)
