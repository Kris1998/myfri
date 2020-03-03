<template>
    <div class="detail">
        <product-params :title="product.name"></product-params>
        <div class="container">
            <div class="swiper-box">
                <swiper :options="swiperOption">
                    <swiperSlide v-for="(item,index) in swiperPic" :key="index">
                        <img :src="`/images/detail/phone-${item}.jpg`">
                    </swiperSlide>
                </swiper>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
            <div class="detail-content">
                <div class="title">{{product.name}}</div>
                <div class="subtitle">相机全新升级 / 960帧超慢动作 / 手持超级夜景 / 全球首款双频GPS / 骁龙845处理器 / 红外人脸解锁 / AI变焦双摄 / 三星 AMOLED 屏</div>
                <div class="price">{{product.price}}元</div>
                <div class="address">
                    <span class="icon"></span>
                    <span class="address-content">北京 北京市 朝阳区 安定门街道</span>
                    <span class="modify">修改</span>
                    <span class="stockinhand">有现货</span>
                </div>
                <div class="choosetitle">选择版本</div>
                <div>
                    <div class="block" v-for="(item,index) in versionList" :key="index" :class="{'chosen': index == chosenVersion}" @click="chosenVersion = index">{{item}}</div>
                </div>
                <div class="choosetitle">选择颜色</div>
                <div>
                    <div class="block" v-for="(item,index) in colorList" :key="index" :class="{'chosen': index == chosenColor}" @click="chosenColor = index">{{item}}</div>
                </div>
                <div class="conclusion"><span class="conclusion-item">{{product.name}} {{versionList[chosenVersion]}} {{colorList[chosenColor]}}</span><span class="conclusion-price">总计：{{product.price}}元</span></div>
                <div class="btn btn-detail" @click="addToCart">加入购物车</div>
            </div>
        </div>
        <div class="detail-footer">
            <div class="detail-footer-container">
                <p>价格说明</p>
                <img src="/images/detail/item-price.jpeg">
            </div>
        </div>
        <modal title="提示" confirmText="查看购物车" :showModal="showModal" @close="closeModal" @confirm="goToCart">
            <template v-slot:body>
                <p>添加购物车成功</p>
            </template>
        </modal>
        <modal title="提示" btnType="2" confirmText="登录" cancelText="暂不登录" :showModal="showModal2" @close="closeModal" @confirm="goToLogin">
            <template v-slot:body>
                <p>您还未登录！</p>
            </template>
        </modal>
    </div>
</template>

<script>
import productParams from '../components/ProductParams'
import modal from '../components/Modal'
import { mapActions } from 'vuex'

import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

export default {
    name: 'detail',
    data(){
        return {
            showModal: false,
            showModal2: false,
            swiperPic: [1,2,3,4],
            product: {}, //商品信息
            versionList: ['4GB+64GB 移动4G','6GB+64GB 全网通','6GB+128GB 全网通'],
            chosenVersion: 0,
            colorList: ['深空黑','雪山银'],
            chosenColor: 0,
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination'
                },
                autoplay: true,
                loop: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            }
        }
    },
    mounted(){
        this.getProduct();
    },
    methods: {
        ...mapActions(['saveCartCount']),
        getProduct(){
            let id = this.$route.params.id;
            this.axios.get(`/products/${id}`,{
                params: {
                    productId: id
                }
            }).then( (res)=> {
                this.product = res;
            })
        },
        addToCart(){ 
            this.axios.post('/carts',{
                productId: this.product.id,
                selected: true
            }).then((res)=>{
                this.saveCartCount(res.cartTotalQuantity);
                this.showModal = true;
            }).catch(()=>{
                this.showModal2 = true;
            })
        },
        closeModal(){
            this.showModal = false;
            this.showModal2 = false;
        },
        goToCart(){
            this.$router.push('/cart');
        },
        goToLogin(){
            this.$router.push('/login');
        }
    },
    components: {
        productParams,
        modal,
        swiper,
        swiperSlide
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/config.scss';
@import '../assets/scss/mixin.scss';
@import '../assets/scss/button.scss';
@import '../assets/scss/base.scss';
.detail {
    .container {
        @include flex(space-between,flex-start);
        .swiper-box {
            width: 50%;
            position: relative;
            .swiper-container {
                width: 400px;
                height: 400px;
                margin: 50px auto;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .swiper-pagination {
                position: relative;
            }
            .swiper-button-prev {
                left: 80px;
            }
            .swiper-button-next {
                right: 80px;
            }
        }
        .detail-content {
            width: 50%;
            .title {
                font-size: 28px;
                font-family: $familyD;
                font-weight: bold;
                color: $colorB;
                line-height:60px;
            }
            .subtitle{
                font-size: 14px;
                font-family: $familyC;
                font-weight: bold;
                color: $colorD;
                line-height:22px;
            }
            .price {
                font-size: 20px;
                font-family: $familyC;
                font-weight: bold;
                color:#FF6700;
                line-height: 22px;
                padding-top: 16px;
                padding-bottom: 16px;
                border-bottom: $colorH 1px solid;
            }
            .address {
                width: 100%;
                height: 108px;
                box-sizing: border-box;
                border: 1px $colorH solid;
                background-color: #FAFAFA;
                position: relative;
                font-size: 14px;
                font-family: $familyD;
                font-weight: bold;
                margin-bottom: 30px;
                .icon {
                    @include bgImg(20px,22px,'/images/detail/icon-loc.png');
                    @include absPos(34px,27px);
                }
                .address-content {
                    @include absPos(64px,31px);
                }
                .modify {
                    color: $colorA;
                    @include absPos(283px,31px);
                }
                .stockinhand{
                    color: $colorA;
                    @include absPos(64px,60px);
                }
            }
            .choosetitle {
                line-height: 18px;
                font-size: 18px;
                font-family: $familyD;
                font-weight: bold;
                padding-bottom: 20px;
            }
            .block {
                display: inline-block;
                width: 300px;
                height: 50px;
                margin-bottom: 20px;
                text-align: center;
                line-height: 50px;
                border: 1px solid $colorH;
                font-size: 16px;
                font-family: $familyD;
                font-weight: bold;
                box-sizing: border-box;
                &:nth-child(odd) {
                    margin-right: 12px;
                }
                &.chosen {
                    color: $colorA;
                    border: 1px solid $colorA;
                }
            }
            .conclusion {
                width: 100%;
                height: 108px;
                background-color: #FAFAFA;
                position: relative;
                margin-bottom: 30px;
                .conclusion-item {
                    font-size: 14px;
                    font-weight: bold;
                    font-family: $familyC;
                    @include absPos(30px,24px);
                }
                .conclusion-price {
                    font-size: 24px;
                    font-weight: bold;
                    font-family: $familyC;
                    color: $colorA;
                    @include absPos(30px,56px);
                }
            }
            .btn-detail {
                font-size: 16px;
                width: 300px;
                height: 54px;
                line-height: 54px;
                margin-bottom: 50px;
            }
        }
    }
    .detail-footer {
        height: 340px;
        background-color: #F3F3F3;
        .detail-footer-container {
            width: 1226px;
            margin: 0 auto;
            p {
                font-size: 24px;
                font-family: $familyC;
                font-weight: bold;
                line-height: 24px;
                padding: 38px 0 30px;
            }
            img {
                display: block;
                width: 1226px;
                height: 189px;
                margin-bottom: 60px;
            }
        }
    }
}
</style>