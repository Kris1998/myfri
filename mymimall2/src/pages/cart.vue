<template>
    <div class="cart">
        <order-header title="我的购物车">
            <template v-slot:subtitle>
                <span>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span>
            </template>
        </order-header>
        <div class="cart-body">
            <div class="container">
                <div class="cart-table">
                    <div class="cart-table-head">
                        <a class="icon-checkall" href="javascript:;" :class="{'checked': selectedAll == true}" @click="chooseAllorNot"></a>
                        <a class="header-checkall-button" href="javascript:;" v-if="selectedAll == false" @click="chooseAll">全选</a>
                        <a class="header-checkall-button" href="javascript:;" v-else @click="chooseAllNot">全不选</a>
                        <div class="table-cell header-productname">商品名称</div>
                        <div class="table-cell col-price">单价</div>
                        <div class="table-cell col-quantity">数量</div>
                        <div class="table-cell col-subtotal">小计</div>
                        <div class="table-cell col-delete">删除</div>
                    </div>
                    <div class="cart-table-row" v-for="(item,index) in productList" :key="index">
                        <a class="icon-checkall" href="javascript:;" :class="{'checked': item.productSelected == true}" @click="toggle(item.productId,index,item.productSelected)"></a>
                        <div class="table-cell row-img">
                            <img :src="item.productMainImage">
                        </div>
                        <div class="table-cell row-productinfo">{{item.productName}}</div>
                        <div class="table-cell col-price">{{item.productPrice}}元</div>
                        <div class="table-cell col-quantity">
                            <div class="button-wrap">
                                <a href="javascript:;" class="minus-button" @click="minusQuantity(item.productId,index)" :class="{'unable': item.quantity == 0}">-</a>
                                <span class="quantitynumber">{{item.quantity}}</span>
                                <a href="javascript:;" class="plus-button" @click="plusQuantity(item.productId,index)">+</a>
                            </div>
                        </div>
                        <div class="table-cell col-subtotal row-subtotal">{{item.productPrice * item.quantity}}元</div>
                        <div class="table-cell col-delete">
                            <a href="javascript:;" class="icon-delete" @click="deleteItem(item.productId)"></a>
                        </div>
                    </div>
                </div>
                <div class="cart-footer">
                    <div class="footer-left">
                        <a href="/#/index">继续购物</a>
                        <span>共 <span class="colorA">{{productList.length}}</span> 件商品，已选择 <span class="colorA">{{checkedCount}}</span> 件</span>
                    </div>
                    <div class="footer-right colorA">
                        合计：<span class="sum-price">{{sumMoney}}</span>元
                        <a href="javascript:;" class="btn btn-large btn-to-address" :class="{'btn-unable': checkedCount == 0}">去结算</a>
                    </div>
                </div>
            </div>
        </div>
        <service-bar></service-bar>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
import orderHeader from '../components/OrderHeader'
import serviceBar from '../components/ServiceBar'
import navFooter from '../components/NavFooter'
export default {
    name: 'cart',
    data(){
        return {
            productList: [],
            selectedAll: true
        }
    },
    computed: {
        checkedCount(){
            let count = 0;
            this.productList.forEach((item)=>{
                if(item.productSelected == true){
                    count++;
                }
            })
            return count;
        },
        sumMoney(){
            let sum = 0;
            this.productList.forEach((item)=>{
                if(item.productSelected == true){
                    sum += item.quantity *item.productPrice;
                }
            })
            return sum;
        }
    },
    mounted(){
        this.getProductList();
    },
    methods: {
        getProductList(){
            this.axios.get('/carts').then((res)=>{
                this.productList = res.cartProductVoList;
                this.selectedAll = res.selectedAll;
            })
        },
        minusQuantity(id,index){
            if(this.productList[index].quantity > 0){
                this.axios.put(`/carts/${id}`,{
                    quantity: this.productList[index].quantity - 1,
                    selected: true
                }).then( (res) => {
                    this.productList = res.cartProductVoList;
                })
            }   
        },
        plusQuantity(id,index){
            this.axios.put(`/carts/${id}`,{
                quantity: this.productList[index].quantity + 1,
                selected: true
            }).then( (res) => {
                this.productList = res.cartProductVoList;
            })
        },
        deleteItem(id){
            this.axios.delete(`/carts/${id}`,{
                productId: id
            }).then( (res) => {
                this.$message.info('删除成功');
                this.productList = res.cartProductVoList;
            })
        },
        toggle(id,index,selected){
            this.axios.put(`/carts/${id}`,{
                quantity: this.productList[index].quantity,
                selected: !selected
            }).then( (res) => {
                this.productList = res.cartProductVoList;                
                this.selectedAll = res.selectedAll;
            })
        },
        chooseAll(){
            this.axios.put('/carts/selectAll').then( (res) => {
                this.productList = res.cartProductVoList;                
                this.selectedAll = res.selectedAll;
            })
        },
        chooseAllNot(){
            this.axios.put('/carts/unSelectAll').then( (res) => {
                this.productList = res.cartProductVoList;                
                this.selectedAll = res.selectedAll;
            })
        },
        chooseAllorNot(){
            if(this.selectedAll == true){
                this.chooseAllNot();
            }else{
                this.chooseAll();
            }
        }
    },
    components: {
        orderHeader,
        serviceBar,
        navFooter
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/config.scss';
@import '../assets/scss/base.scss';
@import '../assets/scss/mixin.scss';
@import '../assets/scss/button.scss';
.cart {
    .cart-body {
        padding-top: 30px;
        width: 100%;
        background-color: $colorJ;
        .container {
            .cart-table {
                background-color: $colorG;
                .cart-table-head {
                    height: 80px;
                    width: 1140px;
                    margin: 0 auto;
                    font-size: 14px;
                    font-family: $familyC;
                    font-weight: bold;
                    line-height: 80px;
                    color: $colorC;
                    position: relative;
                    .header-checkall-button {
                        color: $colorC;
                        margin-left: 17px;
                    }
                    .header-productname {
                        @include absPos(236px,0);
                    }
                }
                .cart-table-row {
                    height: 125px;
                    width: 1140px;
                    margin: 0 auto;
                    border-top: 1px solid $colorH;
                    font-size: 18px;
                    font-family: $familyC;
                    font-weight: bold;
                    line-height: 125px;
                    color: $colorB;
                    position: relative;
                    .row-img {
                        width: 80px;
                        height: 80px;
                        @include absPos(125px,0);
                        margin-top: 22px;
                        img {
                            height: 100%;
                            width: 100%;
                        }
                    }
                    .row-productinfo {
                        @include absPos(235px,0);
                    }
                    .row-subtotal {
                        color: $colorA;
                    }
                    .icon-delete {
                        @include bgImg(14px,12px,'/images/icon-close.png');
                    }
                    .col-quantity {
                        .button-wrap {
                            position: absolute;
                            left: 0;
                            top: 42.5px;
                            width: 150px;
                            height: 40px;
                            box-sizing: border-box;
                            border: 1px solid $colorH;
                            // line-height: 40px;
                            @include flex();
                            a {
                                color: $colorB;
                            }
                            .minus-button {
                                padding-left: 22px;
                                &.unable {
                                    color: $colorD;
                                }
                            }
                            .plus-button {
                                padding-right: 22px;
                            }
                        }
                    }
                }
                .table-cell {
                    display: inline-block;
                    text-align: center;
                }
                .icon-checkall {
                    @include bgImg(22px,22px,'/images/icon-gou.png');
                    background-color: $colorD;
                    vertical-align: middle;
                    background-position: center;
                    margin-left: 29px;
                    &.checked {
                        background-color: $colorA;
                    }
                }
                .col-price {
                    width: 96px;
                    @include absPos(650px,0);
                }
                .col-quantity {
                    width: 150px;
                    @include absPos(777px,0);
                }
                .col-subtotal {
                    width: 96px;
                    @include absPos(957px,0);
                }
                .col-delete {
                    width: 28px;
                    @include absPos(1098px,0);
                }
            }
            .cart-footer {
                width: 100%;
                height: 50px;
                padding-top: 20px;
                padding-bottom: 114px;
                @include flex();
                .colorA {
                    color: $colorA;
                }
                .footer-left {
                    font-size: 14px;
                    font-family: $familyE;
                    color: $colorC;
                    font-weight: bold;
                    a {
                        padding-right: 37px;
                        position: relative;
                        &:before {
                            content: '';
                            width: 1px;
                            height: 13px;
                            position: absolute;
                            top: 4px;
                            right: 18px;
                            background-color: $colorH;
                        }
                    }
                }
                .footer-right {
                    font-size: 14px;
                    font-weight: bold;
                    font-family: $familyC;
                    .sum-price {
                        font-size: 24px;
                        font-family: $familyB;
                    }
                    .btn-to-address {
                        margin-left: 31px;
                    }
                    .btn-unable {
                        background-color: $colorD;
                    }
                }
            }
        }
    }
}
</style>