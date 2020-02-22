<template>
    <div class="product">
        <product-params></product-params>
        <div class="test"></div> 
    </div>
</template>

<script>
import productParams from '../components/ProductParams'
export default {
    name: 'product',
    components: {
        productParams
    }
}
</script>

<style scoped>
.test {
    height: 1000px;
    background-color: pink;
}
</style>