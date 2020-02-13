<template>
    <div>
        home
        <nav-header></nav-header>
        <service-bar></service-bar>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
import navHeader from './navheader'
import navFooter from './navfooter'
import serviceBar from './servicebar'
export default {
    name: 'home',
    components: {
        navHeader,
        navFooter,
        serviceBar
    }
}
</script>