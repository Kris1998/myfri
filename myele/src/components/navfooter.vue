<template>
    <div class="footer">
        <div class="item" :class="{chosen: fatherComponent == 'mainpage'}" @click="jump('mainpage')">主页</div>
        <div class="item" :class="{chosen: fatherComponent == 'order'}" @click="jump('order')">订单</div>
        <div class="item" :class="{chosen: fatherComponent == 'my'}" @click="jump('my')">我的</div>
    </div>
</template>

<script>
export default {
    name: 'nav-footer',
    props: ['fatherComponent'],
    methods: {
        jump(path){
            this.$router.push(path);
        }
    }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}
.footer {
    position: fixed;
    left: 8px;
    bottom: 0;
    height: 60px;
    width: 420px;
    background-color: #fff;
}
.item {
    display: inline-block;
    width: 140px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    font-family: 'microsoft jhenghei';
    font-weight: bold;   
}
.item:hover {
    font-weight: bolder;
    background-color: #00BFFF;
    color: #fff;
}
.chosen {
    font-weight: bolder;
    background-color: #00BFFF;
    color: #fff;
}
</style>