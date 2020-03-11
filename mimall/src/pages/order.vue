<template>
    <div class="order">
        <router-view></router-view>
        <service-bar></service-bar>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
import serviceBar from '../components/ServiceBar'
import navFooter from '../components/NavFooter'
export default {
    name: 'order',
    components: {
        serviceBar,
        navFooter
    }
}
</script>

<style lang="scss" scoped>

</style>