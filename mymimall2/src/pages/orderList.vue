<template>
    <div class="order-list">
        <order-header :title="title">
            <template v-slot:subtitle>
                <span>{{tip}}</span>
            </template>
        </order-header>
        <div class="wrapper">
            <div class="container">
                <div class="order-box" v-for="(item,index) in orderList" :key="index">
                    <div class="order-box-top">
                        <div class="title">
                            <div class="title-item">{{item.createTime}}</div>
                            <div class="title-item">{{item.receiverName}}</div>
                            <div class="title-item">订单号：{{item.orderNo}}</div>
                            <div class="title-item">{{item.paymentTypeDesc}}</div>
                        </div>
                        <div class="sum-money">
                            应付金额：<span class="sum-money-number">{{item.payment}}</span>元
                        </div>
                    </div>
                    <div class="order-box-bottom" v-for="(subItem,subIndex) in item.orderItemVoList" :key="subIndex">
                        <div class="product-info">
                            <img :src="subItem.productImage">
                            <div class="product-name">
                                <p>{{subItem.productName}}</p>
                                <p>{{subItem.currentUnitPrice}} × {{subItem.quantity}}元</p>
                            </div>
                        </div>
                        <div class="payment-status" v-show="subIndex == 0">
                            <div class="toPay" v-if="item.statusDesc == '未支付'">
                                <a href="javascript:;" @click="openDelModal(item.orderNo)">删除订单</a>
                                <a href="javascript:;" @click="goToOrderPay(item.orderNo)">去支付</a>
                                <span>未支付</span>
                            </div>
                            <span v-else-if="item.statusDesc == '已付款'">已付款</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <modal title="提示" btnType="3" :showModal="showDelModal" @confirm="delOrder" @close="showDelModal = false">
            <template v-slot:body>
                <p>确定将删除本条订单?</p>
            </template>
        </modal>
    </div>
</template>

<script>
import orderHeader from '../components/OrderHeader'
import modal from '../components/Modal'
export default {
    name: 'order-list',
    data(){
        return {
            title: '订单列表',
            tip: '请谨防钓鱼链接或诈骗电话',
            orderList: [],
            toDelId: '',
            showDelModal: false
        }
    },
    components: {
        orderHeader,
        modal
    },
    mounted(){
        this.getOrderList();
    },
    methods: {
        getOrderList(){
            this.axios.get('/orders').then(res=>{
                let list = res.list;
                this.orderList = list.filter(item => {
                    return item.status != 0;
                })
            })
        },
        goToOrderPay(no){
            this.$router.push({
                path: '/order/pay',
                query: {
                    orderNo: no
                }
            });
        },
        openDelModal(no){
            this.showDelModal = true;
            this.toDelId = no;
        },
        delOrder(){
            this.axios.put(`/orders/${this.toDelId}`).then(()=>{
                this.getOrderList();
                this.showDelModal = false;
            });
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/config.scss';
@import '../assets/scss/base.scss';
@import '../assets/scss/mixin.scss';
.order-list {
    .wrapper {
        padding: 30px 0 80px;
        background-color: $colorJ;
        .container {
            .order-box {
                width: 100%;
                height: auto;
                box-sizing: border-box;
                border: 1px solid $colorF;
                margin-bottom: 30px;
                .order-box-top {
                    width: 1224px;
                    height: 74px;
                    background-color: #fffaf7;
                    box-sizing: border-box;
                    padding: 0 44px;
                    @include flex();
                    .title {
                        display: flex;
                        .title-item {
                            font-size: 16px;
                            font-family: $familyC;
                            font-weight: bold;
                            color: $colorC;
                            padding: 0 10px;
                            position: relative;
                            &:before {
                                content: '';
                                position: absolute;
                                width: 1px;
                                height: 13px;
                                background-color: $colorH;
                                top: 4px;
                                left: 0;
                            }
                            &:first-child {
                                padding-left: 0;
                            }
                            &:first-child:before {
                                display: none;
                            }
                        }
                    }
                    .sum-money {
                        font-size: 16px;
                        font-family: $familyC;
                        font-weight: bold;
                        color: $colorC;
                        .sum-money-number {
                            font-size: 26px;
                            color: $colorB;
                        }
                    }
                }
                .order-box-bottom {
                    width: 1224px;
                    height: 144px;
                    background-color: $colorG;
                    @include flex();
                    padding: 0 44px;
                    box-sizing: border-box;
                    .product-info {
                        display: flex;
                        img {
                            width: 70px;
                            height: 90px;
                        }
                        .product-name {
                            padding-left: 45px;
                            line-height: 30px;
                            color: $colorB;
                            font-size: 20px;
                            font-family: $familyC;
                            font-weight: bold;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                        }
                    }
                    .payment-status {
                        span {
                            color: $colorA;
                            font-size: 20px;
                        }
                        a {
                            font-size: 14px;
                            color: $colorC;
                            text-decoration: underline;
                            margin-right: 10px;
                        }
                    }
                }
            }
        }
    }
}
</style>