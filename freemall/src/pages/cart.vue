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
          <li>
            <div class="cart-tab-1">
              <div class="cart-item-check">
                <a href="/">check</a>
              </div>
              <div class="cart-item-title">
                小度人工智能音箱
              </div>
            </div>
            <div class="cart-tab-2">
              <div class="item-price">
                89
              </div>
            </div>
            <div class="cart-tab-3">
              <div class="item-quantity">
                <span>1</span>
              </div>
            </div>
            <div class="cart-tab-4">
              <div class="item-total-price">
                ￥89元
              </div>
            </div>
            <div class="cart-tab-5">
              <div class="item-delete">
                <a href="/">删除</a>
              </div>
            </div>
          </li>
        </ul>		
      </div>
    </div>
    <nav-footer></nav-footer> 
  </div>
</template>

<script>
import navFooter from '../components/Footer.vue'
import navHeader from '../components/Header.vue'
import breadcrumb from '../components/Breadcrumb.vue'

export default {
  name: 'cart',
  props: {
  },
  components: {
    navFooter,
    navHeader,
    breadcrumb
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

.cart-tab-2{
	display: table-cell;
	border: 1px solid blue;
}

.cart-tab-3{
	display: table-cell;
	border: 1px solid blue;
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
</style>