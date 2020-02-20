<template>
    <transition name="slide">
        <div class="modal" v-show="showModal">
            <div class="modal-mask" @click="closeSelf"></div>
            <div class="modal-dialog">
                <div class="dialog-header">{{title}}<a href="javascript:;" @click="closeSelf"></a></div>
                <div class="dialog-body">
                    <slot name="body"></slot>
                </div>
                <div class="dialog-footer">
                    <a class="btn btn-small" href="javascript:;" v-if="btnType == 1">{{confirmText}}</a>
                    <div class="btn-group" v-else>
                        <a class="btn btn-small" href="javascript:;">{{confirmText}}</a>
                        <a class="btn btn-small btn-grey" href="javascript:;">{{cancelText}}</a>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'modal',
    props: {
        //弹框标题
        title: String,
        // 1代表只有确认 2代表只有取消 3代表确认和取消
        btnType: {
            default: 1
        },
        //弹框类型：小 中 大 表单
        modalType: {
            type: String,
            default: 'form'
        },
        //确定和取消按钮的文字
        confirmText: {
            type: String,
            default: '确定'
        },
        cancelText: {
            type: String,
            default: '取消'
        },
        showModal: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        closeSelf(){
            this.$emit('close');
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/mixin.scss';
@import '../assets/scss/config.scss';
@import '../assets/scss/button.scss';
.modal {
    @include pos(fixed);
    transition: all .5s;
    .modal-mask {
        @include pos(fixed);
        background-color: $colorI;
        opacity: 0.5;
    }
    .modal-dialog {
        @include pos(absolute,50%,40%,660px,auto);
        transform: translate(-50%,-50%);
        z-index: 999999999999;
        .dialog-header {
            line-height: 60px;
            background-color: $colorJ;
            padding-left: 25px;
            font-size: 16px;
            a {
                @include bgImg(14px,14px,'/images/icon-close.png');
                float: right;
                margin-right: 25px;
                margin-top: 23px;
                transition: transform .3s;
                &:hover {
                    transform: scale(1.5);
                }
            }
        }
        .dialog-body {
            background-color: $colorG;
            font-size: 14px;
            padding: 42px 40px 42px;
        }
        .dialog-footer {
            background-color: $colorJ;
            line-height: 82px;
            text-align: center;
        }
    }
}
.slide-enter, .slide-leave-to{
    margin-top: -100%;
}
// .slide-enter-active, .slide-leave-active {
//     transition: all .5s;
// }
</style>