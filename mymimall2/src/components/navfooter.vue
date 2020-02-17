<template>
    <div class="nav-footer">
        <div class="container">
            <div class="mi-logo"></div>
            <div class="logo-name">小米商城</div>
            <div class="footer-bottom">
                <div class="links">
                    <ul>
                        <li><a href="javascript:;">河畔一角主页</a></li>
                        <li><a href="javascript:;">Vue全栈课程</a></li>
                        <li><a href="javascript:;">React全家桶课程</a></li>
                        <li><a href="javascript:;">微信支付专项课程（H5+小程序+Node+Mongo）</a></li>
                    </ul>
                </div>
                <div class="copyright">Copyright <span class="copyright-icon">©</span> 2019 <a href="javascript:;" class="purse-link">mi.51purse.com</a> All Rights Reserved</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'nav-footer'
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/config.scss';
@import '../assets/scss/mixin.scss';
@import '../assets/scss/base.scss';
.nav-footer {
    border-top: 4px solid #ff7301;
    background-color: $colorB;
    color: $colorD;
    text-align: center;
    font-family: "FZLTHJW--GB1-0";
    font-size: 16px;
    .container {
        .mi-logo {
            margin-top: 46px;
            @include bgImg(53px,36px,'/images/logo-footer.png');
        }
        .logo-name {
            margin-top: 13px;
        }
        .footer-bottom {
            margin-top: 31px;
            @include flex();
            flex-direction: column;
            height: 46px;
            padding-bottom: 46px;
            .links {
                ul {
                    li {
                        float: left;
                        border-right: 1px solid $colorD;
                        padding: 0 10px;
                        a {
                            color: $colorD;
                        }
                        &:last-child {
                            border: none;
                        }
                    }
                }
            }
            .copyright {
                .copyright-logo {
                    font-family: "Adobe Heiti Std R"
                }
                .purse-link {
                    color: $colorA;
                }
            }
        }
    }
}
</style>