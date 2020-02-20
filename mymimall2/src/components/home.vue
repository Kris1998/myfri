<template>
    <div>
        home
        <nav-header></nav-header>
        <div class="content-1">
            <div class="container">
                <div class="sidebar">
                    <ul>
                        <li class="sidebar-li">手机 电话卡<span class="icon"></span>
                            <div class="children">
                                <ul v-for="(item , index) in menuList" :key="index">
                                    <li v-for="(sub , index2) in item" :key="index2">
                                        <a href="javascript:;">
                                            <img :src="sub ? sub.img : '/images/item-box-1.png'">{{sub ? sub.name : '小米CC9'}}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="sidebar-li">电视 盒子<span class="icon"></span></li>
                        <li class="sidebar-li">笔记本 平板<span class="icon"></span></li>
                        <li class="sidebar-li">家电 插线板<span class="icon"></span></li>
                        <li class="sidebar-li">出行 穿戴<span class="icon"></span></li>
                        <li class="sidebar-li">耳机 音箱<span class="icon"></span></li>
                        <li class="sidebar-li">电源 配件<span class="icon"></span></li>
                        <li class="sidebar-li">生活 箱包<span class="icon"></span></li>
                    </ul>
                </div>
                <div class="swiper-box">
                    <swiper :options="swiperOption">
                        <swiper-slide v-for="( item, index ) in sliderItems " :key="index">
                            <a href="http://www.baidu.com"><img :src="'/images/slider/'+item.img"></a>
                        </swiper-slide>
                        <div class="swiper-pagination" slot="pagination"></div>
                        <div class="swiper-button-prev" slot="button-prev"></div>
                        <div class="swiper-button-next" slot="button-next"></div>
                    </swiper>
                </div>
            </div>
        </div>
        <div class="content-2">
            <div class="container">
                <a href="javascript:;" v-for="(item, index) in adList" :key="index">
                    <img :src="'/images/ads/ads-' + item.img">
                </a>
            </div>
        </div>
        <div class="content-3">
            <div class="container">
                <a href="javascript:;"><img src="/images/banner-1.png"></a>
            </div>
        </div>
        <div class="content-4">
            <div class="container">
                <div class="title">手机</div>
                <div class="product-container">
                    <div class="left-banner">
                        <a href="javascript:;">
                            <img src="/images/mix-alpha.jpg">
                        </a>
                    </div>
                    <div class="product-list">
                        <div class="product-row" v-for="(row, index) in productList" :key="index">
                            <a href="javascript:;" class="product-item" v-for="(item, index2) in row" :key="index2">
                                <div class="bgcgreen" v-if="productTag[index][index2] == 'new'">新品</div>
                                <div class="bgcred" v-else-if="productTag[index][index2] == 'kill'">秒杀</div>
                                <div class="bgcred" v-else-if="productTag[index][index2] == 'discount'">减200元</div>
                                <div class="other" v-else></div>
                                <img :src="item.mainImage">
                                <p class="item-name">{{item.name}}</p>
                                <p class="item-subtitle">{{item.subtitle}}</p>
                                <p class="item-price">{{item.price}}元<a href="javascript:;" @click="addCart"></a></p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <service-bar></service-bar>
        <nav-footer></nav-footer>
        <modal title="提示" confirmText="查看购物车" :showModal="showModal" @close="closeModal">
            <template v-slot:body>
                <p class="modal-p">添加购物车成功</p>
            </template>
        </modal>
    </div>
</template>

<script>
import navHeader from './navheader'
import navFooter from './navfooter'
import serviceBar from './servicebar'
import modal from './modal'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

export default {
    name: 'home',
    data(){
        return {
            swiperOption: {
                autoplay: true,
                loop: true,
                effect: 'cube',
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next'
                }
            },
            sliderItems: [
                {
                    id: 1,
                    img: 'slide-1.jpg'
                },
                {
                    id: 2,
                    img: 'slide-2.jpg'
                },
                {
                    id: 3,
                    img: 'slide-3.jpg'
                },
                {
                    id: 4,
                    img: 'slide-4.jpg'
                },
                {
                    id: 5,
                    img: 'slide-5.jpg'
                }
            ],
            menuList: [
                [
                    {
                        id: 30,
                        img: '/images/item-box-1.png',
                        name: '小米CC9'
                    },
                    {
                        id: 31,
                        img: '/images/item-box-2.png',
                        name: '小米8青春版'
                    },
                    {
                        id: 32,
                        img: '/images/item-box-3.jpg',
                        name: 'Redmi K20'
                    },
                    {
                        id: 33,
                        img: '/images/item-box-4.jpg',
                        name: '移动4G专区'
                    }
                ],
                [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]
            ],
            adList: [
                {
                    id: 33,
                    img: '1.png'
                },
                {
                    id: 48,
                    img: '2.jpg'
                },
                {
                    id: 45,
                    img: '3.png'
                },
                {
                    id: 47,
                    img: '4.jpg'
                }
            ],
            productList: [],
            productTag: [['new','kill','','new'],['new','new','discount','new']],
            showModal: false
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
                    pageSize: 14
                }
            }).then( (res) => {
                let list = res.data.data.list.slice(6,14);
                this.productList = [list.slice(0,4), list.slice(4,8)]
            })
        },
        addCart(){
            this.showModal = true;
        },
        closeModal(){
            this.showModal = false;
        }
    },
    components: {
        navHeader,
        navFooter,
        serviceBar,
        swiper,
        swiperSlide,
        modal
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/base.scss';
@import '../assets/scss/config.scss';
@import '../assets/scss/mixin.scss';
.content-1 {
    .container {
        .swiper-box {
            width: 1226px;
            .swiper-container {
                .swiper-wrapper {
                    a {
                        img {
                            width: 1226px;
                            height: 451px;
                        }
                    }
                }
                .swiper-button-prev {
                    left: 270px;
                }
            }
        }
        .sidebar {
            width: 264px;
            height: 451px;
            background-color: rgba(51,51,51,0.3);
            position: absolute;
            z-index: 9;
            ul {
                padding-top: 26px;
                .sidebar-li {
                    width: 234px;
                    height: 50px;
                    line-height: 50px;
                    color: $colorG;
                    font-size: 16px;
                    font-family: FZLanTingHeiS-R-GB;
                    font-weight: bold;
                    padding-left: 30px;
                    .icon {
                        @include bgImg(10px,15px,'/images/icon-arrow.png');
                        // position: absolute;
                        // top: 18px;
                        // right: 30px;
                        float: right;
                        margin-right: 30px;
                        margin-top: 18px;
                    }
                    &:hover {
                        cursor: pointer;
                        background-color: $colorA;
                        .children {
                            width: 962px;
                        }
                    }
                    .children {
                        width: 0px;
                        height: 451px;
                        overflow: hidden;
                        background-color: $colorG;
                        position: absolute;
                        top: 0;
                        left: 264px;
                        ul {
                            width: 962px;
                            height: 75px;
                            padding-top: 0;
                            li {
                                display: inline-block;
                                width: 25%;
                                height: 100%;
                                line-height: 75px;
                                font-family: FZLanTingHeiS-R-GB;
                                font-size: 14px;
                                font-weight: bold;
                                a {
                                    color: $colorB;
                                    display: block;
                                    img {
                                        vertical-align: middle;
                                        width: 35px;
                                        height: 42px;
                                        padding-left: 23px;
                                        padding-right: 15px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
.content-2 {
    margin-top: 14px;
    margin-bottom: 31px;
    .container{
        display: flex;
        justify-content: space-between;
        img {
            width: 296px;
            height: 167px;
        }
    }
}
.content-3 {
    padding-bottom: 50px; 
    img {
        width: 1226px;
        height: 130px;
    }
}
.content-4 {
    background-color: $colorJ;
    padding-bottom: 50px;
    .container {
        .title {
            color: $colorB;
            font-size: 22px;
            font-family: $familyA;
            padding-top: 30px;
            padding-bottom: 20px;
        }
        .product-container {
            width: 1226px;
            height: 619px;
            @include flex();
            .left-banner {
                a {
                    display: block;
                    width: 224px;
                    height: 619px;
                    img {
                        width: 224px;
                        height: 619px;
                    }
                }                
            }
            .product-list {
                width: 986px;
                height: 619px;
                @include flex();
                flex-direction: column;
                .product-row {
                    width: 986px;
                    height: 302px;
                    @include flex();
                    .product-item {
                        display: block;
                        width: 236px;
                        height: 302px;
                        background-color: $colorG;
                        text-align: center;
                        font-family: $familyA;
                        div {
                            width: 67px;
                            height: 24px;
                            font-size: 14px;
                            color: $colorG;
                            margin: 0 auto;
                            line-height: 24px;
                        }
                        .bgcred {
                            background-color: #E82626;
                        }
                        .bgcgreen {
                            background-color: #7ECF68;
                        }
                        .other {
                            background-color: #fff;
                        }
                        img {
                            height: 154px;
                            padding: 20px 0;
                        }
                        .item-name {
                            line-height: 13px;
                            font-size: 14px;
                            color: $colorB;
                            padding-bottom: 8px;
                        }
                        .item-subtitle {
                            line-height: 13px;
                            font-size: 12px;
                            color: $colorD;
                            padding-bottom: 13px;
                        }
                        .item-price {
                            line-height: 13px;
                            font-size: 14px;
                            color: #F20A0A;
                        }
                        p {
                            a {
                                @include bgImg(22px,22px,'/images/icon-cart-hover.png');
                                vertical-align: middle;
                                margin-left: 5px;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>