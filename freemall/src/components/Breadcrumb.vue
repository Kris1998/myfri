<template>
	<div class="nav-breadcumb">
		<div class="nav-breadcumb-center">
			<a href="/">首页</a>
			<span>/ {{title}}</span>
		</div>
	</div>
</template>

<script>
export default {
  name: 'breadcrumb',
  props: ['title']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-breadcumb{
	background-color: #f0f0f0;
	width: 100%;
	height: 50px;
}

.nav-breadcumb-center{
	width: 1280px;
	margin: 0 auto;
	line-height: 50px;
	font-size: 14px;
    
    display: flex;
}

.nav-breadcumb-center a{
	color: #999;
    text-decoration: none;
}

.nav-breadcumb-center a:hover{
	color: #d1434a;
}

.nav-breadcumb-center span{
	color: #d1434a;
}
</style>