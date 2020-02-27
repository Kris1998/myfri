<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'app',
  mounted(){
    this.getUser();
    this.getCartCount();
  },
  methods: {
    ...mapActions(['saveUserName']),
    getUser(){
      this.axios.get('/user').then( (res={}) => {
        this.saveUserName(res.username);
      });
    },
    getCartCount(){
      this.axios.get('/carts/products/sum').then( () => {
        //todo
      });
    }
  }
}
</script>

<style>
@import './assets/scss/reset.scss';
</style>
