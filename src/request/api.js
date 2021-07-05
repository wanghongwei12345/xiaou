import {get, post} from "./http"


// =================================首页================================
// 快速分类导航
export const homeCate = ()=> get("/api/getcate")
// 轮播图
export const homeBanner = ()=> get("/api/getbanner")
// 限时秒杀
export const homeSeckill = ()=> get("/api/getseckill")
// 商品信息
export const homeGoods = ()=> get("/api/gethortgoods")

// =================================分类================================
export const sortList = ()=> get("/api/getcates")

// =================================注册================================
export const register = (params)=> post("/api/register",params)

// =================================登录================================
export const login = (params)=> post("/api/login",params)

// =================================搜索================================
export const search = (params)=> get("/api/search",params)

// =================================获取一级分类商品================================
export const goodlist = (params)=> get("/api/getgoodlist",params)

// =================================获取一条商品信息================================
export const goodinfo = (params)=> get("/api/getgoodsinfo",params)

// =================================购物车添加================================
export const cartadd = (params)=> post("/api/cartadd",params)

// =================================购物车列表================================
export const cartlist = (params)=> get("/api/cartlist",params)
//修改购物车
export const cartedit = (params)=> post("/api/cartedit",params)
//添加地址 
export const addressadd = (params)=> post("/api/addressadd",params)
//地址列表
export const addresslist = (params)=> get("/api/addresslist",params)

