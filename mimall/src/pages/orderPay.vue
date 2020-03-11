<template>
    <div class="order-pay">
        <order-header :title="title">
            <template v-slot:subtitle>
                <span>{{tip}}</span>
            </template>
        </order-header>
        <div class="wrapper">
            <div class="container">
                <div class="order-wrap">
                    <div class="item-order">
                        <div class="icon-succ"></div>
                        <div class="order-info">
                            <h2>订单提交成功！去付款咯~</h2>
                            <p>请在<span>30分</span>内完成支付，超时后将取消订单</p>
                            <p>收货信息：{{addressInfo}}</p>
                        </div>
                        <div class="order-total">
                            <p>应付金额：<span>{{amount}}</span>元</p>
                            <p @click="showDetail = !showDetail">点击查看订单详情<a href="javascript:;" class="icon-down" :class="{'up': showDetail}"></a></p>
                        </div>
                    </div>
                    <div class="item-detail" v-show="showDetail">
                        <div class="item">
                            <div class="detail-title">订单号</div>
                            <div class="detail-info">{{orderId}}</div>
                        </div>
                        <div class="item">
                            <div class="detail-title">收货信息</div>
                            <div class="detail-info">{{addressInfo}}</div>
                        </div>
                        <div class="item">
                            <div class="detail-title">商品名称</div>
                            <div class="detail-info">
                                <ul>
                                    <li v-for="(item,index) in orderDetail" :key="index">
                                        <img :src="item.productImage">{{item.productName}}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="item">
                            <div class="detail-title">发票信息</div>
                            <div class="detail-info">电子发票 个人</div>
                        </div>
                    </div>
                    <div class="item-pay">
                        <h3>选择以下支付方式付款</h3>
                        <div class="pay-way">
                            <p>支付平台</p>
                            <div class="pay pay-ali" :class="{'checked': checked == 'ali'}" @click="alipay"></div>
                            <div class="pay pay-wechat" :class="{'checked': checked == 'wechat'}" @click="wechatpay"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <modal title="请微信扫描二维码支付" confirmText="已支付成功" :showModal="showWechatCode" @close="showWechatCode = false" @confirm="goToShowPayTip">
            <template v-slot:body>
                <img class="qrimg" :src="qrimg" alt="">
            </template>
        </modal>
        <modal title="提示" confirmText="查看我的订单" :showModal="showPayTip" @close="showPayTip = false" @confirm="goToOrderList">
            <template v-slot:body>
                若您已成功支付，将跳转到订单列表，请稍候片刻。若没有跳转，请检查您是否成功支付。
            </template>
        </modal>
    </div>
</template>

<script>
import QRCode from 'qrcode'
import modal from '../components/Modal'
import orderHeader from '../components/OrderHeader'
export default {
    name: 'order-pay',
    components: {
        modal,
        orderHeader
    },
    data(){
        return {
            title: '订单支付',
            tip: '',
            orderId: this.$route.query.orderNo,
            addressInfo: '',
            orderDetail: '',
            amount: 0,
            showDetail: false,
            checked: 'ali',
            alipayContent: '',
            qrimg: '',
            showWechatCode: false,
            showPayTip: false,
            timer: null, //定义一个定时器去不停启动查询订单状态
        }
    },
    mounted(){
        this.init();
    },
    methods: {
        init(){
            this.axios.get(`/orders/${this.orderId}`).then(res=>{
                let item = res.shippingVo;
                this.addressInfo = `${item.receiverName} ${item.receiverMobile} ${item.receiverProvince} ${item.receiverCity} ${item.receiverDistrict} ${item.receiverAddress}`;
                this.orderDetail = res.orderItemVoList;
                this.amount = res.payment;
            });
        },
        alipay(){
            this.checked = 'ali';
            window.open(`/#/order/alipay?orderId=${this.orderId}`,'_blank');
        },
        wechatpay(){
            this.checked = 'wechat';
            this.axios.post('/pay',{
                orderId: this.orderId,
                orderName: 'not funny',
                amount: 0.01,
                payType: 2
            }).then(res=>{
                QRCode.toDataURL(res.content).then(url=>{
                    this.qrimg  = url;
                })
                this.showWechatCode = true;
                this.loopOrderState();
            })
        },
        goToShowPayTip(){
            this.showWechatCode = false;
            this.showPayTip = true;
            clearInterval(this.timer);
        },
        loopOrderState(){
            this.timer = setInterval(()=>{
                this.axios.get(`/orders/${this.orderId}`).then(res=>{
                    if(res.status == 20){
                        clearInterval(this.timer);
                        this.goToOrderList();
                    }
                })
            },1000)
        },
        goToOrderList(){
            this.$router.push('/order/list');
            this.showPayTip = false;
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/config.scss';
@import '../assets/scss/base.scss';
@import '../assets/scss/mixin.scss';
.order-pay {
    .wrapper {
        background-color: $colorJ;
        padding-top: 30px;
        padding-bottom: 61px;
        .order-wrap {
            padding: 62px 50px;
            background-color: $colorG;
            font-size: 14px;
            margin-bottom: 30px;
            .item-order {
                display: flex;
                align-items: center;
                .icon-succ {
                    width: 90px;
                    height: 90px;
                    background: url('/images/icon-gou.png') #80c58a no-repeat center;
                    background-size: 60px;
                    border-radius: 50%;
                }
                .order-info {
                    margin-right: 288px;
                    margin-left: 30px;
                    width: 550px;
                    h2 {
                        font-size: 24px;
                        color: $colorB;
                        margin-bottom: 20px;
                    }
                    p {
                        color: $colorC;
                        span {
                            color: $colorA;
                        }
                    }
                }
                .order-total {
                    p:first-child {
                        margin-bottom: 30px;
                    }
                    span {
                        font-size: 28px;
                        color: $colorA;
                    }
                    .icon-down {
                        @include bgImg(14px,10px,'/images/icon-down.png');
                        margin-left: 9px;
                        transition: all .5s;
                        cursor: pointer;
                        &.up {
                            transform: rotate(180deg);
                        }
                    }
                }
            }
            .item-detail {
                border-top: 1px solid #d7d7d7;
                padding-top: 47px;
                margin-bottom: 40px;
                font-size: 14px;
                margin-top: 45px;
                .item {
                    margin-bottom: 19px;
                    margin-left: 133px;
                    display: flex;
                    .detail-title {
                        width: 100px;
                    }
                    .detail-info {
                        img {
                            width: 30px;
                            vertical-align: middle;
                        }
                    }
                }
            }
            .item-pay {
                padding: 26px 50px 72px;
                background-color: #fff;
                color: $colorB;
                margin-top: 30px;
                h3 {
                    font-size: 20px;
                    font-weight: 200;
                    color: $colorB;
                    padding-bottom: 24px;
                    border-bottom: 1px solid #d7d7d7;
                    margin-bottom: 26px;
                }
                .pay-way {
                    font-size: 18px;
                    p {
                        padding-bottom: 19px;
                    }
                    .pay {
                        display: inline-block;
                        width: 188px;
                        height: 64px;
                        border: 1px solid #d7d7d7;
                        cursor: pointer;
                        margin-right: 20px;
                        &.checked {
                            border: 1px solid $colorA;
                        }
                    }
                    .pay-ali {
                        background: url('/images/pay/icon-ali.png') no-repeat center;
                        background-size: 103px 38px;
                    }
                    .pay-wechat {
                        background: url('/images/pay/icon-wechat.png') no-repeat center;
                        background-size: 130px 38px;
                    }
                }
            }
        }
    }
    .qrimg {
        margin: 0 auto;
        display: block;
    }
}
</style>