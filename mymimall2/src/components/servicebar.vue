<template>
    <div class="service-bar">
        <div class="container">
            <div class="part">
                <div class="wrap">
                    <span class="img1"></span>
                    <span class="word">预约维修服务</span>
                </div>
            </div>
            <div class="part">
                <div class="wrap">
                    <span class="img2"></span>
                    <span class="word">7天无理由退货</span>
                </div>
            </div>
            <div class="part">
                <div class="wrap">
                    <span class="img3"></span>
                    <span class="word">15天免费换货</span>
                </div>
            </div>
            <div class="part">
                <div class="wrap">
                    <span class="img4"></span>
                    <span class="word">满150元包邮</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'service-bar'
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/base.scss';
@import '../assets/scss/config.scss';
@import '../assets/scss/mixin.scss';
.service-bar {
    height: 80px;
    .container {
        .part {
            display: inline-block;
            width: 25%;
            font-size: 16px;
            font-family: "PingFangSC-Regular";
            color: $colorC;
            font-weight: bold;
            height: 80px;
            position: relative;
            &::before{
                    content: ''; 
                    position: absolute;
                    right: 0;
                    top: 23px;
                    width: 1px;
                    height: 34px;
                    background-color: $colorH;
                }
            &:last-child:before {
                display: none;
            }
            .wrap {
                width: 100%;
                height: 100%;
                @include flex(center,center);
                .img1 {
                    @include bgImg(20px,20px,'/images/icon-setting.png');
                    padding-right: 8px;
                }
                .img2 {
                    @include bgImg(20px,20px,'/images/icon-7day.png');
                    padding-right: 8px;
                }
                .img3 {
                    @include bgImg(20px,20px,'/images/icon-15day.png');
                    padding-right: 8px;
                }
                .img4 {
                    @include bgImg(20px,20px,'/images/icon-post.png');
                    padding-right: 8px;
                }
            } 
        }
    }
}
</style>