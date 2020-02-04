<template>
    <div>
        <div class="header-1">
            <div class="container">
                <div class="header-left">
                    <ul>
                        <li><a href="#">松果出行</a></li>
                        <li><a href="#">MIUI</a></li>
                        <li><a href="#">云服务</a></li>
                        <li><a href="#">协议规则</a></li>
                    </ul>
                </div>
                <div class="header-right">
                    <ul>
                        <li><a href="#">登录</a></li>
                        <li><a href="#">注册</a></li>
                        <li><span class="cart-bgimg"></span><a href="#">购物车</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'nav-header'
}
</script>

<style scoped>
ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
}
.header-1 {
    width: 100%;
    height: 39px;
    background-color: rgb(51,51,51)
}
.container {
    max-width: 1226px;
    margin: 0 auto;
    background-color: brown;
    height: 100%;
    display: flex;
    justify-content: space-between;
}
.header-left ul li {
    line-height: 39px;
    display: inline-block;
    padding: 0 10px;
}
.header-left ul li a {
    font-size: 12px;
    text-decoration: none;
    color: #B0B0B0;
}
.header-right ul li {
    line-height: 39px;
    display: inline-block;
    padding: 0 10px;
}
.header-right ul li a {
    font-size: 12px;
    text-decoration: none;
    color: #B0B0B0;
}
.cart-bgimg {
    display: inline-block;
    width: 12px;
    height: 12px;
    background-color: #fff;
    margin-right: 3px;
    background-image: url('../imgs/cart-icon.png');
    background-size: contain;
}
</style>