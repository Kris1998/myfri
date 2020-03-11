<template>
    <div class="order-header">
        <div class="container">
            <div class="mi-logo">
                <a href="/#/index"></a>
            </div>
            <div class="header-content">
                <div class="header-left">
                    <div class="logo-title">{{title}}</div>
                    <slot name="subtitle"></slot>
                </div>
                <div class="header-right">{{username}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'order-header',
    props: ['title'],
    computed: mapState(['username'])
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/config.scss';
@import '../assets/scss/mixin.scss';
@import '../assets/scss/base.scss';
.order-header {
    width: 100%;
    height: 112px;
    border-bottom: 2px solid $colorA;
    .container {
        @include flex();
        height: 100%;
        .header-content {
            height: 100%;
            width: 1122px;
            @include flex();
            .header-left {
                .logo-title {
                    display: inline-block;
                    font-size: 28px;
                    font-weight: bold;
                    font-family: $familyD;
                    color: $colorB;
                }
                span {
                    font-size: 14px;
                    font-weight: bold;
                    font-family: $familyC;
                    color: $colorD;
                    position: relative;
                    left: 17px;
                }
            }
            .header-right {
                font-size: 16px;
                font-family: $familyC;
                font-weight: bold;
                color: $colorC;
            }
        }
    }
}
</style>