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
        <service-bar></service-bar>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
import navHeader from './navheader'
import navFooter from './navfooter'
import serviceBar from './servicebar'
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
            ]
        }
    },
    components: {
        navHeader,
        navFooter,
        serviceBar,
        swiper,
        swiperSlide
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
</style>