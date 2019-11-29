<template>
	<div class="footbar">
		<p><a href="/">主页</a>|<a href="/">Vue全栈打造商城</a>|<a href="/">React全家桶打造通用后台</a>|<a href="/">微信支付专项（H5/小程序/小程序云+Node+Mongo）</a></p>
		<p><a href="/">关于我们</a>|<a href="/">条款与条件</a>|<a href="/">隐私政策</a></p>
		<p>Copyright © 2019 河畔一角 版权所有</p>
	</div>
</template>

<script>
export default {
  name: 'navFooter',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footbar{
	width: 100%;
	background-color: white;
	height: 210px;
	margin: 0 auto;
	color: #333333;

	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;

	border-top: 1px solid rgba(51, 51, 51, 0.15)
}

.footbar a{
	padding: 0 10px;
	font-size: 12px;
}
</style>
