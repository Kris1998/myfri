<template>
    <div class="nav-header">
        <div class="topbar-1">
            <div class="container">
                <div class="topbar-1-left">
                    <a href="javascript:;">松果出行</a>
                    <a href="javascript:;">MIUI</a>
                    <a href="javascript:;">云服务</a>
                    <a href="javascript:;">协议规则</a>
                </div>
                <div class="topbar-1-right">
                    <a href="javascript:;" v-if="userName">{{ userName }}</a>
                    <a href="javascript:;" v-else>登录</a>
                    <a href="javascript:;">我的订单</a>
                    <a href="javascript:;" class="my-cart"><span class="icon-cart"></span>购物车</a>
                </div>
            </div>
        </div>
        <div class="topbar-2">
            <div class="container">
                <div class="topbar-2-logo">
                    <a href="javascript:;"></a>
                </div>
                <div class="topbar-2-menu">
                    <div class="menu-item">
                        <span>小米手机</span>
                        <div class="children">
                            <ul>
                                <li class="product" v-for="(item,index) in phoneList" :key=index>
                                    <a href="http://www.baidu.com">
                                        <div class="pro-img">
                                            <img :src="item.mainImage">
                                        </div>
                                        <div class="pro-name">{{ item.name }}</div>
                                        <div class="pro-price">{{ item.price | currency }}</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="menu-item">
                        <span>RedMi红米</span>
                        <div class="children"></div>
                    </div>
                    <div class="menu-item">
                        <span>电视</span>
                        <div class="children">
                            <ul>
                                <li class="product">
                                    <a href="http://www.baidu.com">
                                        <div class="pro-img">
                                            <img src="/images/nav-img/nav-3-1.jpg">
                                        </div>
                                        <div class="pro-name">小米壁画电视</div>
                                        <div class="pro-price">2299元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="http://www.baidu.com">
                                        <div class="pro-img">
                                            <img src="/images/nav-img/nav-3-2.jpg">
                                        </div>
                                        <div class="pro-name">小米全面屏电视</div>
                                        <div class="pro-price">2299元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="http://www.baidu.com">
                                        <div class="pro-img">
                                            <img src="/images/nav-img/nav-3-3.png">
                                        </div>
                                        <div class="pro-name">小米电视4</div>
                                        <div class="pro-price">2299元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="http://www.baidu.com">
                                        <div class="pro-img">
                                            <img src="/images/nav-img/nav-3-4.jpg">
                                        </div>
                                        <div class="pro-name">小米电视4A</div>
                                        <div class="pro-price">2299元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="http://www.baidu.com">
                                        <div class="pro-img">
                                            <img src="/images/nav-img/nav-3-5.jpg">
                                        </div>
                                        <div class="pro-name">小米电视5</div>
                                        <div class="pro-price">2299元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="http://www.baidu.com">
                                        <div class="pro-img">
                                            <img src="/images/nav-img/nav-3-6.png">
                                        </div>
                                        <div class="pro-name">查看全部</div>
                                        <div class="pro-price"></div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="topbar-2-search">
                    <div class="wrapper">
                        <input type="text">
                        <a href="javascript:;"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'nav-header',
    data(){
        return {
            userName: 'Ha',
            phoneList: []
        }
    },
    filters: {
        currency(val){
            if (val == 0) {
                return 0.00;
            }
            return val.toFixed(0) + '元';
        }
    },
    mounted(){
        this.getProductList();
    },
    methods: {
        getProductList(){
            this.axios.get('/products',{
                params: {
                    categoryId: '100012',
                    pageSize: 6
                }
            }).then((res) => {
                this.phoneList = res.data.data.list;
            })
            // this.axios.get('/mock/cart.json').then( (res) => {
            //     this.phoneList2 = res.data.data
            // })
        }

        //todo 跳转到登录页面和购物车页面
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/base.scss';
@import '../assets/scss/mixin.scss';
@import '../assets/scss/config.scss';
.nav-header {
    .topbar-1 {
        height: 39px;
        line-height: 39px;
        background-color: #333;
        color: #B0B0B0;
        .container {
            @include flex();
            a {
                color: #B0B0B0;
                display: inline-block;
                margin-right: 17px;
            }
            .my-cart {
                width: 110px;
                background-color: #F60;
                text-align: center;
                color: #fff;
                margin-right: 0;
                .icon-cart {
                    @include bgImg(16px,12px,'/images/icon-cart-checked.png');
                    margin-right: 4px;
                }
            }
        }
    }
    .topbar-2 {
        .container {
            height: 112px;
            @include flex();
            position: relative;
            .topbar-2-logo {
                display: inline-block;
                width: 55px;
                height: 55px;
                background-color: #F60;
                a {
                    display: inline-block;
                    width: 110px;
                    height: 55px;
                    transition: margin-left .5s ease 0s;
                    &:before {
                        content: ' ';
                        @include bgImg(55px,55px,'/images/mi-logo.png');
                    }
                    &:after {
                        content: ' ';
                        @include bgImg(55px,55px,'/images/mi-home.png');
                    }
                    &:hover {
                        margin-left: -55px;
                    }
                }
            }
            .topbar-2-menu {
                width: 450px;
                .menu-item {
                    display: inline-block;
                    color: #333;
                    font-weight: bold;
                    font-family: FZLanTingHeiS-R-GB;
                    font-size: 16px;
                    margin-right: 20px;
                    span {
                        cursor: pointer;
                    }
                    &:hover {
                        color: #F60;
                        .children {
                            height: 220px;
                            box-shadow:0px 7px 6px 0px rgba(0, 0, 0, 0.11);
                            border-top: 1px solid #e5e5e5;
                        }
                    }
                    .children {
                        width:1226px;
                        height:0;
                        overflow: hidden;
                        position: absolute;
                        top: 112px;
                        left: 0;
                        transition: height .5s;
                        box-shadow: 0; 
                        background-color: #fff;
                        z-index: 99;
                        ul {
                            height: 100%;
                            .product {
                                width: 16.6%;
                                height: 100%;
                                float: left;
                                position: relative;
                                &:before {
                                    content: ' ';
                                    position: absolute;
                                    width: 1px;
                                    height: 99px;
                                    top: 28px;
                                    right: 0;
                                    background-color: $colorF;
                                }
                                &:last-child:before {
                                    display: none;
                                }
                                a {
                                    display: inline-block;
                                    width: 100%;
                                    height: 100%;
                                    cursor: pointer;
                                    text-align: center;
                                    font-size:12px;
                                    font-family:FZLanTingHeiS-R-GB;
                                    font-weight:bold;
                                    color:rgba(51,51,51,1);
                                    .pro-img {
                                        img {
                                            display: inline-block;
                                            height: 111px;
                                            padding-top: 26px;
                                        }
                                    }
                                    .pro-name {
                                        padding-top: 15px;
                                    }
                                    .pro-price {
                                        color: #F60;
                                        padding-top: 8px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            .topbar-2-search {
                width: 319px;
                .wrapper {
                    height: 50px;
                    border: 1px solid #E0E0E0;
                    @include flex(flex-start);
                    input {
                        border: none;
                        border-right: 1px solid #E0E0E0;
                        width: 250px;
                        height: 50px;
                        padding-left: 14px;
                    }
                    a {
                        @include bgImg(18px,18px,'/images/icon-search.png');
                        margin-left: 18px;
                    }
                }
            }
        }
    }
}
</style>