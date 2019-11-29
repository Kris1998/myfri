<template>
  <div>
    <nav-header></nav-header>
    <breadcrumb title="地址"></breadcrumb>
    this is an address.
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import navHeader from '../components/Header'
import navFooter from '../components/Footer'
import breadcrumb from '../components/Breadcrumb'

export default {
  name: 'v-address',
  props: {
  },
  components: {
    navHeader,
    navFooter,
    breadcrumb
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>