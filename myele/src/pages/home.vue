<template>
    <div>
        home
        <nav-footer></nav-footer>
        <router-view></router-view>
    </div>
</template>

<script>
import navFooter from '../components/navfooter'
export default {
    name: 'home',
    components: {
        navFooter
    }
}
</script>

<style scoped>

</style>