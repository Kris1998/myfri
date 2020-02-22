<template>
    <div class="login">
        <div class="login-header">
            <a href="/#/" class="mi-logo"></a>
            <p class="big-title">小米商城</p>
            <p class="sub-title">让每个人都能享受科技的乐趣</p>
        </div>
        <div class="login-body">
            <div class="body-form">
                <a class="top top-left" href="javascript:;">账号登录</a>
                <a class="top top-right" href="javascript:;">扫码登陆</a>
                <input class="input-box input-box-username" type="text" placeholder="邮箱/手机号码/小米ID" v-model="username">
                <input class="input-box input-box-password" type="password" placeholder="密码" v-model="password">
                <input class="btn btn-huge btn-submit" type="submit" value="登录" @click="login">
                <div class="form-bottom">
                    <a class="form-bottom-left" href="javascript:;" @click="register">手机短信登录/注册</a>
                    <div>
                        <a class="form-bottom-right form-bottom-right-1" href="javascript:;">立即注册</a>
                        <a class="form-bottom-right" href="javascript:;">忘记密码</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="login-footer">
            <div class="buttons">
                <a href="javascript:;">简体</a>
                <a href="javascript:;">繁体</a>
                <a href="javascript:;">English</a>
                <a href="javascript:;">常见问题</a>
                <a href="javascript:;">隐私策略</a>
            </div>
            <p class="copyright">小米公司版权所有-京ICP备10046444-<span class="police-logo"></span>京公网安备11010802020134号-京ICP证110507号</p>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'login',
    data(){
        return {
            username: '',
            password: '',
            userId: '' //前后端传递的凭证
        }
    },
    methods: {
        ...mapActions([
            'saveUserName'
        ]),
        login(){
            let {username, password} = this;
            this.axios.post('/user/login',{
                username,
                password
            }).then( (res) => {
                // this.$cookie.set('userId',res.id,{expires:'1M'});
                this.saveUserName(res.username);
                this.$router.push('/#/');
            })
        },
        register(){
            let {username, password} = this;
            this.axios.post('/user/register',{
                username,
                password,
                email: '1233721323545@qq.com'
            }).then( () => {
                alert('注册成功');
                // this.$cookie.set('userId',res.id,{expires:'1M'});
                // this.$router.push('/#/');
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/config.scss';
@import '../assets/scss/mixin.scss';
@import '../assets/scss/button.scss';
.login {
    .login-header {
        width: 1920px;
        height: 112px;
        background-color: $colorG;
        margin: 0 auto;
        position: relative;
        letter-spacing: 0.3px;
        .mi-logo {
            @include bgImg(52px,52px,'/images/logo-mi.png');
            @include absPos(391px,30px);
        }
        .big-title {
            line-height: 32px;
            font-family: $familyB;
            color: $colorB;
            font-size: 33px;
            @include absPos(462px,30px);
        }
        .sub-title {
            line-height: 10px;
            font-family: $familyC;
            color: $colorC;
            font-size: 10px;
            @include absPos(462px,72px);
        }
    }
    .login-body {
        width: 1920px;
        height: 576px;
        margin: 0 auto;
        background: url('/images/login-bg.jpg') no-repeat;
        background-size: 1920px 576px;
        position: relative;
        .body-form {
            background-color: $colorG;
            width: 410px;
            height: 510px;
            @include absPos(1139px,37px);
            .top {
                font-size: 24px;
                font-weight: bold;
                font-family: $familyC;
                line-height: 23px;
            }
            .top-left {
                color: $colorA;
                @include absPos(73px,40px);
                &:before {
                    content: '';
                    width: 2px;
                    height: 25px;
                    background-color: $colorF;
                    @include absPos(132px,0)
                }
            }
            .top-right {
                color: $colorC;
                @include absPos(241px,40px);
            }
            .input-box {
                width: 348px;
                height: 50px;
                box-sizing: border-box;
                border: 1px solid $colorH;
                font-size: 14px;
                font-family: $familyC;
                color: $colorD;
                padding-left: 18px;
            }
            .input-box-username {
                @include absPos(31px,112px);
            }
            .input-box-password {
                @include absPos(31px,182px);
            }
            .btn-submit {
                font-weight: bold;
                @include absPos(31px,262px);
            }
            .form-bottom {
                width: 348px;
                font-size: 14px;
                font-family: $familyC;
                font-weight: bold;
                @include absPos(31px,326px);
                @include flex();
            }
            .form-bottom-left {
                color: $colorA;
            }
            .form-bottom-right {
                color: $colorD;
                position: relative;
            }
            .form-bottom-right-1 {
                padding-right: 15px;
                &:before {
                    content: '';
                    width: 1px;
                    height: 14px;
                    background-color: $colorF;
                    @include absPos(64px,4px);
                }
            }
        }
    }
    .login-footer {
        width: 1920px;
        margin: 0 auto;
        height: 391px;
        text-align: center;
        .buttons {
            padding-top: 251px;
            a {
                font-size: 14px;
                font-family: $familyD;
                font-weight: 400;
                color: $colorB;
                padding: 0 12px;
                position: relative;
                &:before {
                    content: '';
                    width: 1px;
                    height: 13px;
                    position: absolute;
                    background-color: $colorD;
                    top: 3px;
                    right: 0;
                }
                &:last-child:before {
                    display: none;
                }
            }
        }
        .copyright {
            font-size: 14px;
            font-family: $familyD;
            font-weight: 400;
            color: $colorB;
            padding-top: 19px;
            .police-logo {
                @include bgImg(21px,25px,'/images/police-logo.png');
                vertical-align: middle;
            }
        }
    }
}
</style>