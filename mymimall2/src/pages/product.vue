<template>
    <div class="product">
        <product-params></product-params>
        <div class="item-bg">
            <p class="item-title">小米8</p>
            <p class="item-subtitle">8周年旗舰版</p>
            <p class="item-property">
                <a href="javascript:;">全球首款双频GPS</a>
                <a href="javascript:;">骁龙845</a>
                <a href="javascript:;">AI变焦双摄</a>
                <a href="javascript:;">红外人脸识别</a>
            </p>
            <p class="item-price">￥<span class="item-price-num">2599</span></p>
        </div>
        <div class="item-bg2"></div>
        <div class="item-bg3"></div>
        <div class="item-swiper">
            <swiper :options="swiperOption">
                <swiper-slide v-for="(item, index) in slideList" :key="index">
                    <a href="javascript:;">
                        <img :src="'/images/product/' + item">
                    </a>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
            <p>小米8 AI变焦双摄拍摄
            </p>
        </div>
        <div class="item-video">
            <div class="container">
                <p class="item-video-title">60帧超慢动作摄影<br>慢慢回味每一瞬间的精彩</p>
                <p class="item-video-subtitle">后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！<br>更能AI 精准分析视频内容，15个场景智能匹配背景音效。</p>
                <div class="video-bg" @click="showVideo = true"></div>
                <div class="video-box">
                    <div class="overlay" v-if="showVideo"></div>
                    <div class="video" :class="{'slide': showVideo}">
                        <span class="icon-close" @click="showVideo = false"></span>
                        <video src="/images/product/video.mp4" controls autoplay muted></video>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import productParams from '../components/ProductParams'
export default {
    name: 'product',
    data(){
        return {
            slideList: ['gallery-1.png','gallery-2.png','gallery-3.png','gallery-4.png','gallery-5.jpg','gallery-6.jpg'],
            swiperOption: {
                slidesPerView: 3,
                // centeredSlides: true,
                // centeredSlidesBounds: true,
                spaceBetween: 13,
                autoplay: true,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
            },
            showVideo: false
        }
    },
    components: {
        productParams,
        swiper,
        swiperSlide
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/config.scss';
@import '../assets/scss/base.scss';
@import '../assets/scss/mixin.scss';
.product {
    .item-bg {
        width: auto;
        height: 718px;
        background: url('/images/product/product-bg-1.png') no-repeat center;
        background-size: auto 100%;
        color: $colorB;
        font-family: $familyC;
        font-weight: bold;
        text-align: center;
        .item-title {
            font-size: 80px;
            padding-top: 45px;
        }
        .item-subtitle {
            font-size: 24px;
            padding-top: 8px;
        }
        .item-property {
            padding-top: 16px;
            a {
                color: inherit;
                font-size: 16px;
                display: inline-block;
                padding: 0px 18px;
                position: relative;
                &:before {
                    content: '';
                    position: absolute;
                    width: 1px;
                    height: 13px;
                    background-color: #BFAB9D;
                    top: 4px;
                    left: 0;
                }
                &:first-child:before {
                    display: none;
                }
            }
        }
        .item-price {
            padding-top: 18px;
            font-size: 38px;
        }
    }
    .item-bg2 {
        width: 1226px;
        height: 397px;
        background-image: url('/images/product/product-bg-2.png');
        background-size: 100% 100%;
        margin: 38px auto 45px;
    }
    .item-bg3 {
        width: auto;
        height: 638px;
        background-image: url('/images/product/product-bg-3.png');
        background-position: center;
        background-size: auto 100%;
    }
    .item-swiper {
        padding-top: 36px;
        width: 1226px;
        margin: 0 auto;
        .swiper-container {
            padding-bottom: 45px;
        }
        img {
            width: 400px;
            height: 227px;
        }
        p {
            text-align: center;
            font-family: $familyB;
            font-size: 14px;
            font-weight: bold;
            color: $colorB;
            padding-bottom: 30px;
        }
    }
    .item-video {
        background-color: #070708;
        color: $colorG;
        text-align: center;
        font-family: $familyC;
        font-weight: bold;
        padding-bottom: 120px;
        margin-bottom: 40px;
        .container {
            .item-video-title {
                font-size: 60px;
                line-height: 80px;
                padding-top: 60px;
                padding-bottom: 42px;
            }
            .item-video-subtitle {
                font-size: 24px;
                line-height: 36px;
                padding-bottom: 50px;
            }
            .video-bg {
                width: 1226px;
                height: 540px;
                background: url('/images/product/gallery-1.png') no-repeat center;
                background-size: 100% 100%;
                cursor: pointer;
            }
            .video-box {
                .overlay {
                    position: fixed;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    background-color: $colorI;
                    opacity: 0.4;
                    z-index: 10;
                }
                .video {
                    position: fixed;
                    top: -50%;
                    left: 50%;
                    opacity: 0;
                    transform: translate(-50%,-50%);
                    z-index: 10;
                    width: 1000px;
                    height: 536px;
                    transition: all .6s;
                    .icon-close {
                        @include bgImg(20px,20px,'/images/icon-close.png');
                        position: absolute;
                        top: 20px;
                        right: 20px;
                        cursor: pointer;
                        z-index: 11;
                    }
                    video {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        outline: none;
                    }
                    &.slide {
                        top: 50%;
                        opacity: 1;
                    }
                }
            }
        }
    }
}
</style>