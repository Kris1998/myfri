<template>
  <div>
    <nav-header></nav-header>
    <breadcrumb title="购物车"></breadcrumb>
    <div class="content">
      <div class="content-header">
        <h2>我的购物车</h2>
      </div>
      <div class="cart">
        <div class="cart-head">
          <ul>
            <li>商品信息</li>
            <li>商品金额</li>
            <li>商品数量</li>
            <li>总金额</li>
            <li>编辑</li>
          </ul>
        </div>
        
        <ul class="cart-item">
          <li v-for="item in cartList" v-bind:key="item.productId">
            <div class="cart-tab-1">
              <div class="cart-item-check" v-bind:class="{checked: item.checked}">
                <a @click="check(item)"></a>
              </div>
              <div class="cart-item-title">
                {{item.productName}}
              </div>
            </div>
            <div class="cart-tab-2">
              <div class="item-price">
                {{item.productPrice}}
              </div>
            </div>
            <div class="cart-tab-3">
              <div class="item-quantity">
                <a @click="minusCart(item)">-</a>
                <span>{{item.productNum}}</span>
                <a @click="addCart(item)">+</a>
              </div>
            </div>
            <div class="cart-tab-4">
              <div class="item-total-price">
                {{(item.productPrice*item.productNum) | currency }}
              </div>
            </div>
            <div class="cart-tab-5">
              <div class="item-delete">
                <a @click="openModal(item)">删除</a>
              </div>
            </div>
          </li>
        </ul>

        <div class="cart-foot">
          <div class="cart-foot-1">
            <div class="cart-item-check">
            </div>
            <a href="/">Choose all</a>
          </div>
          <div class="cart-foot-2"></div>
          <div class="cart-foot-3"></div>
          <div class="cart-foot-4">Sum：{{totalPrice | currency}}</div>
          <div class="cart-foot-5"><a href="/">Summit</a></div>
        </div>
      </div>
    </div>
    <nav-footer></nav-footer> 
    <nav-modal v-show="showModal" width="500" @on-cancel="cancel" @on-delete="deleteItem(item)">
      <template v-slot:header>
        
      </template>
      <template v-slot:body>
        确定要删除此条数据吗？
      </template>
    </nav-modal>
  </div>
</template>

<script>
import navFooter from '../components/Footer.vue'
import navHeader from '../components/Header.vue'
import breadcrumb from '../components/Breadcrumb.vue'
import navModal from '../components/Modal.vue'

export default {
  name: 'cart',
  data(){
    return{
      cartList:[],
      totalPrice: 0,
      showModal: false,
      delItem: {}
    }
  },
  props: {
  },
  components: {
    navFooter,
    navHeader,
    breadcrumb,
    navModal
  },
  mounted(){
    this.init();
  },
  beforeUpdate(){
    this.calculateTotalPrice();
  },
  methods:{
    init(){
      this.axios.get("/mock/cart.json").then((response)=>{
        this.cartList = response.data.data;
        console.log(this.cartList);
      })
    },
    addCart(a){
      a.productNum++;
    },
    minusCart(b){
      b.productNum--;
    },
    check(c){
      c.checked = !c.checked;
    },
    calculateTotalPrice(){
      this.totalPrice = 0;
      for (let index = 0; index < this.cartList.length; index++) {
        if (this.cartList[index].checked == true) {
          this.totalPrice += this.cartList[index].productNum * this.cartList[index].productPrice;
        }   
      }
    },
    openModal(item){
      this.showModal = true;
      this.delItem = item;
    },
    cancel(){
      this.showModal = false;
    },
    deleteItem(){
      for (let index = 0; index < this.cartList.length; index++) {
        if (this.cartList[index].productId == this.delItem.productId) {
          this.cartList.splice(index, 1);
        }
      }
      this.showModal = false;
    }
  },
  filters: {
    currency: function(value){
      if (!value) {
        return 0.00;
      }
      return '$' + value.toFixed(2);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
	width: 1280px;
	margin: 0 auto;
}

.content-header{
	padding-top: 20px;
	letter-spacing: 1em;
  display: flex;
}

.cart{
	display: table;
	width: 100%;
	text-align: center;
}

.cart-head{
	display: table-header-group;
	width: 100%;
}

.cart-head ul{
	display: table-row;
	width: 100%;
}

.cart-head ul li{
	display: table-cell;
	height: 40px;
	line-height: 40px;
	background: #605F5F;
    color: #fff;
    text-align: center;
    letter-spacing: .25em;
    text-transform: uppercase;
}

.cart-head li:nth-child(2), .cart-head li:nth-child(3), .cart-head li:nth-child(4), .cart-head li:nth-child(5){
	padding: 0 10px;
}

.cart-item{
	display: table-row-group;
	width: 100%
}

.cart-item li{
	display: table-row;
	width: 100%;
	height: 100px;
}

.cart-item-pic img{
	width: 100px;
	height: 100px;
}

.cart-tab-1{
	display: table-cell;
	border: 1px solid blue;
	width: 40%
}

.cart-item-check{
  height: 30px;
  width: 30px;
  background-color: grey;
}

.cart-item-check a{
  display: block;
  height: 30px;
  width: 30px;
  cursor: pointer;
}

.checked{
  background-color: pink;
}

.cart-tab-2{
	display: table-cell;
	border: 1px solid blue;
}

.cart-tab-3{
	display: table-cell;
	border: 1px solid blue;
}

.item-quantity{
  display: flex;
  align-items: center;
  justify-content: center;
}

.item-quantity a{
  display: block;
  text-decoration: none;
  width: 30px;
  height: 20px;
  background-color: grey;
  cursor: pointer;
}


.cart-tab-4{
	display: table-cell;
	border: 1px solid blue;
}

.cart-tab-5{
	display: table-cell;
	border: 1px solid blue;
}

.cart-item-check, .cart-item-pic, .cart-item-title{
	float: left;
}

.item-price{
	height: 100px;
	line-height: 100px;
}

.cart-foot{
  display: table-footer-group;
  height: 100px; 
  text-align: left;
}

.cart-foot-1{
  display: table-cell;
  height: 40px;
}

.cart-foot-2{
  display: table-cell;
}

.cart-foot-3{
  display: table-cell;
}

.cart-foot-4{
  display: table-cell;
  text-align: center;
}

.cart-foot-5{
  display: table-cell;
  text-align: center;
}
</style>