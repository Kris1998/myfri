<template>
    <div class="nav-header">
        <div class="topbar-1">
            <div class="container">
                <div class="topbar-1-left">
                    <a href="javascript:;">松果出行</a>
                    <a href="javascript:;">MIUI</a>
                    <a href="javascript:;">云服务</a>
                    <a href="javascript:;">协议规则</a>
                </div>
                <div class="topbar-1-right">
                    <a href="javascript:;">登录</a>
                    <a href="javascript:;">注册</a>
                    <a href="javascript:;" class="my-cart"><span class="icon-cart"></span>购物车</a>
                </div>
            </div>
        </div>
        <div class="topbar-2"></div>
    </div>
</template>

<script>
export default {
    name: 'nav-header'
}
</script>

<style lang="scss">
.nav-header {
    .topbar-1 {
        height: 39px;
        line-height: 39px;
        background-color: #333;
        color: #B0B0B0;
        .container {
            width: 1226px;
            margin: auto auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            a {
                color: #B0B0B0;
                display: inline-block;
                margin-right: 17px;
            }
            .my-cart {
                width: 110px;
                background-color: #F60;
                text-align: center;
                color: #fff;
                margin-right: 0;
                .icon-cart {
                    background: url('/images/icon-cart-checked.png');
                    background-size: contain;
                    display: inline-block;
                    width: 16px;
                    height: 12px;
                    margin-right: 4px;
                }
            }
        }
    }
}
</style>