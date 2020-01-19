<template>
    <div>
        mainpage
        <router-link to='order'>ha</router-link>
        <button @click="jump">jump</button>
    </div>
</template>

<script>
export default {
    name: 'mainpage',
    methods: {
        jump(){
            this.$router.push('order');
        }
    }
}
</script>

<style scoped>

</style>