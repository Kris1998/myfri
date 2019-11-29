<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <p>{{name}}</p>
    <button @click="update">update</button>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data(){
    return{
      name:"jack"
    }
  },
  beforeCreate(){
    console.log("beforeCreate")
  },
  created(){
    console.log("Created");
  },
  beforeMount(){
    console.log("beforeMount");
  },
  mounted(){
    console.log("mounted");
  },
  beforeUpdate(){
    console.log("beforeUpdate");
  },
  updated(){
    console.log("updated");
  },
  beforeDestroy(){
    console.log("beforeDestroy");
  },
  destroyed(){
    console.log("destroyed");
  },
  methods:{
    update(){
      this.name="rose";
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
