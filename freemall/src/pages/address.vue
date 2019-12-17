<template>
  <div>
    <nav-header></nav-header>
    <breadcrumb title="地址"></breadcrumb>
    <div class="content">
      <div class="content-title">
        <h2>配送地址</h2>
      </div>
      <ul class="content-table">
        <li class="content-table-cell" v-for="(item,index) in addressFilter" :key="item.addressId" @click="chosen(index)" :class="{chosen: index == chosenIndex, notChosen: index != chosenIndex}">
          <p>{{item.userName}}</p>
          <p>{{item.streetName}}</p>
          <p>{{item.tel}}</p>
          <div class="content-table-button">
            <button class="setDefault" v-show="(!item.isDefault)&&(index == chosenIndex)" @click="setDefault(item)">设为默认</button>
            <div class="defaultAddress" v-show="item.isDefault">默认地址</div>
            <button class="deleteButton" @click.stop="deleteItem(item)">删除</button>
          </div>
        </li>
      </ul>
      <div>
        <button @click="fold()">{{status}}</button>
      </div>
    </div>
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
  data(){
    return {
      addressList: [],
      limitConst: 3,
      limit: 3,
      chosenIndex: 1
    }
  },
  components: {
    navHeader,
    navFooter,
    breadcrumb
  },
  computed:{
    addressFilter(){
      return this.addressList.slice(0, this.limit);
    },
    status(){
      if (this.limit == this.limitConst) {
        return "展开";
      }else{
        return "收起";
      }
    },
  },
  mounted(){
    this.init();
  },
  methods:{
    init(){
      this.axios.get("/mock/address.json").then((response) => {
        this.addressList = response.data.data; 
      });
    },
    fold(){
      if (this.limit == this.limitConst) {
        this.limit = this.addressList.length;
      }else{
        this.limit = this.limitConst;
      }
    },
    chosen(index){
      this.chosenIndex = index;
    },
    deleteItem(delItem){
      this.addressList.forEach((item, index) => {
        if (item.addressId == delItem.addressId) {
          this.addressList.splice(index, 1);
          if (this.chosenIndex == index) {
            this.chosenIndex = -1;
          }else if (this.chosenIndex > index) {
            this.chosenIndex--;
          }
        }
      });
    },
    setDefault(defaultItem){
      this.addressList.forEach((item) => {
        if (item.isDefault == true) {
          item.isDefault = false;
        }
        if(item.addressId == defaultItem.addressId){
          item.isDefault = true;
        }
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul,li,p,a{
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: left;
  text-decoration: none;
}
.content{
  width: 1280px;
  margin: 0 auto;
}
.content-title{
  letter-spacing: 1em;
  padding-top: 20px;
  display: flex;
}
.content ul{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.content ul li{
  width: 296px;
  height: 160px;
  margin-right: 20px;
  margin-bottom: 20px;
  cursor: pointer;
}
.notChosen{
  border: 2px solid grey;
}
.chosen{
  border: 2px solid orange;
}

.content ul li p{
  padding-left: 10px;
  padding-top: 15px;
}
.content ul li .content-table-button{
  padding-left: 10px;
  padding-top: 15px;
  position: relative;
  display: inline-block;
}

.content ul li .content-table-button button,div{
  display: inline-block;
}

.setDefault{
  position: absolute;
  top: 15px;
  left: 10px;
  width: 80px;
}

.defaultAddress{
  position: absolute;
  top: 15px;
  left: 10px;
  width: 80px;
}

.deleteButton{
  position: absolute;
  top: 15px;
  left: 200px;
  width: 50px;
} 
</style>