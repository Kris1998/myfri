<template>
  <div class="navbar">
		<div class="navbar-left">
			<a href="/">
				<img src="../imgs/logo.png">
			</a>
		</div>
		<div class="navbar-right">
			<a href="/">Kris</a>
			<a href="/"></a>
		</div>
	</div>
</template>

<script>
export default {
  name: 'navHeader',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{
	text-decoration: none;
	color: inherit;
}

body{
	background: #f5f7fc
}

ul,li{
	list-style: none;
	margin: 0;
	padding: 0;
}

.navbar{
	width: 100%;
	height: 84px;
	max-width: 1280px;
	margin: 0 auto;
	padding: 0 20px;
}

.navbar-left{
	float: left;
}

.navbar-right{
	width: 100px;
	height: 80px;
	float: right;
	
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>
