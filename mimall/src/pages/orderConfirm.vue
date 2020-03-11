<template>
    <div class="order-confirm">
        <order-header :title="title" class="order-header">
            <template v-slot:subtitle>
                <span>{{tip}}</span>
            </template>
        </order-header>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position: absolute; width: 0px; height: 0px; overflow: hidden;">
            <defs>
                <symbol id="icon-add" viewBox="0 0 31 32">
                    <title>add</title>
                    <path d="M30.745 15.152h-14.382v-14.596c0-0.308-0.243-0.557-0.543-0.557s-0.543 0.249-0.543 0.557v14.596h-14.665c-0.3 0-0.543 0.249-0.543 0.557s0.243 0.557 0.543 0.557h14.665v15.177c0 0.307 0.243 0.557 0.543 0.557s0.543-0.249 0.543-0.557v-15.177h14.382c0.3 0 0.543-0.249 0.543-0.557s-0.243-0.557-0.543-0.557z" class="path1"></path>
                </symbol>
                <symbol id="icon-edit" viewBox="0 0 32 32">
                    <title>edit</title>
                    <path d="M28.287 8.51l-4.805-4.806 0.831-0.831c0.472-0.472 1.086-0.777 1.564-0.777 0.248 0 0.452 0.082 0.622 0.253l3.143 3.144c0.539 0.54 0.133 1.529-0.524 2.186l-0.831 0.831zM26.805 9.992l-1.138 1.138-4.805-4.806 1.138-1.138 4.805 4.806zM24.186 12.612l-14.758 14.762-4.805-4.806 14.758-14.762 4.805 4.806zM7.379 28.288l-4.892 1.224 1.223-4.894 3.669 3.67zM31.123 4.011l-3.143-3.144c-0.567-0.567-1.294-0.867-2.103-0.867-1.036 0-2.174 0.52-3.045 1.391l-20.429 20.436c-0.135 0.134-0.23 0.302-0.276 0.487l-2.095 8.385c-0.089 0.355 0.017 0.736 0.276 0.995 0.198 0.198 0.461 0.307 0.741 0.307 0.085 0 0.171-0.010 0.254-0.031l8.381-2.096c0.185-0.047 0.354-0.142 0.487-0.276l20.43-20.436c1.409-1.41 2.042-3.632 0.524-5.15v0z" class="path1"></path>
                </symbol>
                <symbol id="icon-del" viewBox="0 0 32 32">
                    <title>delete</title>
                    <path d="M11.355 4.129v-2.065h9.29v2.065h-9.29zM6.194 29.935v-23.742h19.613v23.742h-19.613zM30.968 4.129h-8.258v-3.097c0-0.569-0.463-1.032-1.032-1.032h-11.355c-0.569 0-1.032 0.463-1.032 1.032v3.097h-8.258c-0.569 0-1.032 0.463-1.032 1.032s0.463 1.032 1.032 1.032h3.097v24.774c0 0.569 0.463 1.032 1.032 1.032h21.677c0.569 0 1.032-0.463 1.032-1.032v-24.774h3.097c0.569 0 1.032-0.463 1.032-1.032s-0.463-1.032-1.032-1.032v0z" class="path1"></path>
                    <path d="M10.323 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z" class="path2"></path>
                    <path d="M16 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z" class="path3"></path>
                    <path d="M21.677 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z" class="path4"></path>
                </symbol>
            </defs>
        </svg>
        <div class="confirm-body">
            <div class="title">收货地址</div>
            <ul class="address-box">
                <li class="address-item" v-for="(item,index) in addressList" :key="index" @click="checked = item.id" :class="{'checked': checked == item.id}">
                    <p class="address-name">{{item.receiverName}}</p>
                    <p class="address-tel">{{item.receiverMobile}}</p>
                    <p class="address-content">{{item.receiverProvince + ' ' + item.receiverCity + ' ' + item.receiverDistrict + ' ' + item.receiverAddress}}</p>
                    <div class="action">
                        <a href="javascript:;" @click.stop="delAddressItem(item.id)">
                            <svg class="icon">
                                <use xlink:href="#icon-del"></use>
                            </svg>
                        </a>
                        <a href="javascript:;" @click.stop="openEditModal(item)">
                            <svg class="icon">
                                <use xlink:href="#icon-edit"></use>
                            </svg>
                        </a>
                    </div>
                </li>
                <li class="address-item">
                    <div class="add-address">
                        <a href="javascript:;" @click="openAddModal">
                            <svg class="icon-add">
                                <use xlink:href="#icon-add"></use>
                            </svg>
                        </a>
                        <a class="add-words" href="javascript:;" @click="openAddModal">添加地址</a>
                    </div>
                </li>
            </ul>
            <div class="products">
                <div class="products-title">商品</div>
                <div class="products-item" v-for="(item,index) in cartList" :key="index">
                    <img class="products-pic" :src="item.productMainImage">
                    <span class="products-name">{{item.productName + ' ' + item.productSubtitle}}</span>
                    <span class="products-price">{{item.productPrice}}元x{{item.quantity}}</span>
                    <span class="products-sum">{{item.productTotalPrice}}元</span>
                </div>
            </div>
            <div class="deliveryAndInvoice">
                <span class="d-title">配送方式</span>
                <span>包邮</span>
            </div>
            <div class="deliveryAndInvoice">
                <span class="d-title">发票</span>
                <span>电子发票</span>
                <span>个人</span>
            </div>
            <div class="confirm-right-sum">
                <div class="right-box">
                    <div class="product-quantity">
                        <span>商品件数：</span>
                        <span class="right-part">{{totalQuantity}}件</span>
                    </div>
                    <div class="product-presum">
                        <span>商品总价：</span>
                        <span class="right-part">{{totalPrice}}元</span>
                    </div>
                    <div class="product-discount">
                        <span>优惠：</span>
                        <span class="right-part">0元</span>
                    </div>
                    <div class="product-sum">
                        <span>应付总额：</span>
                        <span class="right-part"><span class="total-price">{{totalPrice}}</span>元</span>
                    </div>
                </div>
            </div>
            <div class="btn-box">
                <a href="javascript:;" class="btn btn-large btn-left">返回购物车</a>
                <a href="javascript:;" class="btn btn-large" @click="orderSubmit">去结算</a>
            </div>
        </div>
        <modal title="提示" btnType="2" :showModal="showDeleteModal" @close="showDeleteModal = false" @confirm="editAddressList">
            <template v-slot:body>
                <p>确定将删除这个地址?</p>
            </template>
        </modal>
        <modal title="添加收货地址" btnType="2" confirmText="添加" :showModal="showAddModal" @close="closeModal" @confirm="editAddressList">
            <template v-slot:body>
                <div class="add-form">
                    <input type="text" placeholder="姓名" v-model="toAdd.receiverName">
                    <input type="text" placeholder="手机号" v-model="toAdd.receiverMobile">
                    <div class="select-item">
                        <select name="" id="" v-model="toAdd.receiverProvince">
                            <option>北京</option>
                            <option>上海</option>
                        </select>
                        <select name="" id="" v-model="toAdd.receiverCity">
                            <option>北京市</option>
                            <option>上海市</option>
                        </select>
                        <select name="" id="" v-model="toAdd.receiverDistrict">
                            <option>静安区</option>
                            <option>黄浦区</option>
                        </select>
                    </div>
                    <textarea class="address-detail" placeholder="详细地址" v-model="toAdd.receiverAddress"></textarea>
                    <input type="text" placeholder="邮政编号" v-model="toAdd.receiverZip">
                </div>
            </template>
        </modal>
    </div>
</template>

<script>
import orderHeader from '../components/OrderHeader'
import modal from '../components/Modal'
export default {
    name: 'order-confirm',
    data(){
        return {
            title: '订单确认',
            tip: '',
            addressList: [],
            cartList: [],
            totalPrice: 0,
            totalQuantity: 0,
            showDeleteModal: false,
            showAddModal: false,
            toDelete: -1, //需要删除的id
            toEdit: -1, //需要修改的id
            toAdd: {}, //把需要添加的地址存进来（与弹框的表单双向绑定）
            userAction: 0, //1代表删除地址,2代表添加地址
            checked: -1 //代表选中的那个地址
        }
    },
    mounted(){
        this.getAddressList();
        this.getCartList();
    },
    methods: {
        getAddressList(){
            this.axios.get('/shippings').then((res)=>{
                this.addressList = res.list;
            })
        },
        getCartList(){
            this.axios.get('/carts').then((res)=>{
                let list = res.cartProductVoList;
                this.cartList = list.filter((item)=>{
                    return item.productSelected == true;
                });
                this.totalPrice = res.cartTotalPrice;
                this.cartList.forEach(item => {
                    this.totalQuantity += item.quantity;
                });
            })
        },
        delAddressItem(id){
            this.showDeleteModal = true;
            this.toDelete = id;
            this.userAction = 1;
        },
        openAddModal(){
            this.showAddModal = true;
            this.userAction = 2;
        },
        openEditModal(item){
            this.showAddModal = true;
            this.userAction = 3;
            this.toEdit = item.id;
            // this.toAdd = item;
            this.toAdd.receiverName = item.receiverName;
            this.toAdd.receiverMobile = item.receiverMobile;
            this.toAdd.receiverProvince = item.receiverProvince;
            this.toAdd.receiverCity = item.receiverCity;
            this.toAdd.receiverDistrict = item.receiverDistrict;
            this.toAdd.receiverAddress = item.receiverAddress;
            this.toAdd.receiverZip = item.receiverZip;
        },
        closeModal(){
            this.showAddModal = false;
            this.toAdd = {};
        },
        editAddressList(){
            let action = '';
            let url = '';
            let msg = '';
            let params = {};
            let { receiverName, receiverMobile, receiverProvince, receiverCity, receiverDistrict, receiverAddress, receiverZip } = this.toAdd;
            if(this.userAction == 1){
                action = 'delete';
                url = `/shippings/${this.toDelete}`;
            }else if(this.userAction == 2){
                action = 'post';
                url =  '/shippings';
            }else if(this.userAction == 3){
                action = 'put';
                url = `/shippings/${this.toEdit}`;
            }

            if( this.userAction == 2 || this.userAction == 3){
                if(!receiverName){
                    msg = '名称不能为空';
                }else if(!receiverMobile || !/\d{11}/.test(receiverMobile)){
                    msg = '请检查手机号码的输入';
                }else if(!receiverProvince){
                    msg = '省份不能为空';
                }else if(!receiverCity){
                    msg = '城市不能为空';
                }else if(!receiverDistrict){
                    msg = '区不能为空';
                }else if(!receiverAddress){
                    msg = '地址不能为空';
                }else if(!receiverZip || !/\d{6}/.test(receiverZip)){
                    msg = '请检查邮编的输入';
                }

                if(msg){
                    this.$message.warning(msg);
                    return;
                }
                params = {
                    receiverName,
                    receiverMobile,
                    receiverProvince,
                    receiverCity,
                    receiverDistrict,
                    receiverAddress,
                    receiverZip
                }
            }

            this.axios[action](url,params).then( () => {
                this.getAddressList();
                this.showDeleteModal = false;
                this.showAddModal = false;
                this.toAdd = {};
                this.$message.info('操作成功');
            })
        },
        orderSubmit(){
            let isAnyChecked = this.addressList.some(item => {
                return this.checked == item.id;
            })
            if(!isAnyChecked){
                this.$message.warning('请选择一个收货地址');
            }else{
                this.axios.post('/orders',{
                    shippingId: this.checked
                }).then(res=>{
                    this.$router.push({
                        path: '/order/pay',
                        query: {
                            orderNo: res.orderNo
                        }
                    })
                });
            }
        }
    },
    components: {
        modal,
        orderHeader
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/config.scss';
@import '../assets/scss/button.scss';
@import '../assets/scss/mixin.scss';
.order-confirm {
    background-color: $colorJ;
    overflow: hidden;
    .order-header {
        background-color: $colorG;
    }
    .confirm-body {
        width: 1226px;
        margin: 26px auto 102px;
        background-color: $colorG;
        padding-left: 31.5px;
        padding-top: 30px;
        .title {
            font-size: 16px;
            color: $colorB;
            font-weight: bold;
            padding-bottom: 15px;
        }
        .address-box {
            margin-bottom: 10px;
            display: flex;
            flex-wrap: wrap;
            .address-item {
                // display: inline-block;
                // float: left;
                width: 280px;
                height: 200px;
                box-sizing: border-box;
                border: 1px $colorH solid;
                padding: 0 20px;
                margin-bottom: 20px;
                margin-right: 18px;
                &.checked {
                    border: 1px $colorA solid;
                }
                .address-name {
                    font-size: 16px;
                    padding-top: 20px;
                    padding-bottom: 25px;
                }
                .address-tel, .address-content {
                    font-size: 14px;
                }
                .address-content {
                    height: 50px;
                }
                .action {
                    @include flex();
                    a {
                        display: inline-block;
                        width: 30px;
                        height: 30px;
                        .icon {
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
                .add-address {
                    @include flex(center,center);
                    flex-direction: column;
                    height: 100%;
                    .icon-add {
                        width: 30px;
                        height: 30px;
                        // border: 2px solid $colorH;
                        // border-radius: 50%;
                    }
                    .add-words {
                        color: $colorD;
                        font-size: 14px;
                        padding-top: 4px;
                    }
                }
            }
        }
        .products {
            margin-bottom: 20px;
            .products-title {
                font-size: 16px;
                font-weight: bold;
                line-height: 30px;
                border-bottom: 1px $colorH solid;
            }
            .products-item {
                line-height: 50px;
                border-bottom: 1px $colorH solid;
                font-size: 14px;
                img {
                    height: 40px;
                    width: 40px;
                    vertical-align: middle;
                }
                .products-name {
                    display: inline-block;
                    width: 600px;
                }
                .products-price {
                    display: inline-block;
                    width: 450px;
                    text-align: center;
                }
                .products-sum {
                    display: inline-block;
                    width: 100px;
                    text-align: center;
                    color: $colorA;
                }
            }
        }
        .deliveryAndInvoice {
            line-height: 40px;
            .d-title {
                display: inline-block;
                font-size: 16px;
                color: $colorB;
                width: 100px;
            }
            span {
                margin-right: 15px;
                color: $colorA;
                font-size: 14px;
                font-weight: 600;
            }
        }
        .confirm-right-sum {
            border-bottom: 1px $colorH solid;
            .right-box {
                font-weight: bold;
                font-size: 14px;
                line-height: 24px;
                text-align: right;
                padding-right: 33px;
                .product-sum {
                    line-height: 50px;
                }
                .right-part {
                    color: $colorA;
                    display: inline-block;
                    width:120px;
                    .total-price {
                        font-size: 24px;
                    }
                }
            }
        }
        .btn-box {
            text-align: right;
            padding-top: 18px;
            padding-right: 33px;
            padding-bottom: 45px;
            .btn-left {
                background-color: $colorG;
                color: $colorD;
                margin-right: 10px;
                box-sizing: border-box;
                border: 1px solid $colorH;
            }
        }
    }
    .add-form {
        input {
            width: 283px;
            height: 40px;
            box-sizing: border-box;
            border:  1px solid $colorH;
            color: $colorD;
            font-size: 14px;
            padding-left: 10px;
            outline: none;
            margin-bottom: 10px;
            font-family: $familyA;
            &:first-child {
                margin-right: 12px;
            }
        }
        .address-detail {
            width: 100%;
            height: 80px;
            padding-left: 10px;
            padding-top: 10px;
            box-sizing: border-box;
            border: 1px solid $colorH;
            color: $colorD;
            font-size: 14px;
            font-family: $familyA;
            margin-bottom: 10px;
        }
        select {
            width: 100px;
            height: 40px;
            outline: none;
            border: 1px solid $colorH;
            margin-bottom: 10px;
            margin-right: 15px;
            font-size: 14px;
            padding-left: 6px;

        }
    }
}
</style>