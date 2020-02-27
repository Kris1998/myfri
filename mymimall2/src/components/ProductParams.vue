<template>
    <div class="product-params" :class="{'isFixed': isFixed}">
        <div class="container">
            <div class="params-left">{{title}}</div>
            <div class="params-right">
                <a class="params-right-link" href="javascript:;">概述</a>
                <a class="params-right-link" href="javascript:;">参数</a>
                <a class="params-right-link" href="javascript:;">用户评价</a>
                <a class="btn btn-small" href="javascript:;">立即购买</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'product-params',
    data(){
        return {
            isFixed: false
        }
    },
    props: ['title'],
    mounted(){
        window.addEventListener('scroll',this.fixTheBar)
    },
    destroyed(){
        window.removeEventListener('scroll',this.fixTheBar);
    },
    methods: {
        fixTheBar(){
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            this.isFixed = scrollTop > 152 ? true : false;
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/config.scss';
@import '../assets/scss/base.scss';
@import '../assets/scss/button.scss';
@import '../assets/scss/mixin.scss';
.product-params {
    &.isFixed {
        position: fixed;
        top: 0;
        width: 100%;
        background-color: $colorG;
        z-index: 9;
    }
    .container {
        @include flex();
        height: 70px;
        .params-left {
            font-size: 18px;
            font-weight: bold;
            font-family: $familyD;
        }
        .params-right {
            .params-right-link {
                color: $colorC;
                font-size: 14px;
                padding: 0 10px;
                position: relative;
                &:before {
                    content: '';
                    width: 1px;
                    height: 11px;
                    background-color: $colorD;
                    @include absPos(0,2px);
                }
                &:first-child:before {
                    display: none;
                }
            }
        }
    }
}
</style>