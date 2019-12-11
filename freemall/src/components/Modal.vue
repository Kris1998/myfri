<template>
<div class="modal-backdrop">
  <div class="modal" :style="mainStyles"> 
    <div class="modal-header">
      <slot name="header"></slot>
    </div>
    <div class="modal-body">
      <slot name="body"></slot>
    </div>
    <div class="modal-footer">
      <button class="btn-close" @click="closeSelf">cancel</button>
      <button class="btn-confirm" @click="deleteSelf">confirm</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'navModal',
  props: ['width'],
  computed:{
    mainStyles(){
      let style = {};
      style.width = this.width + 'px';
      return style;
    }
  },
  methods:{
    closeSelf(){
      this.$emit('on-cancel');
    },
    deleteSelf(){
      this.$emit('on-delete');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal-backdrop{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal{
  background: #fff;
  box-shadow: 2px 2px 20px 1px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
}

.modal-header{
  border-bottom: 1px solid #eeeeee;
  color: #313131;
  justify-content: space-between;
  display: flex;
  padding: 15px;
}

.modal-footer{
  border-top: 1px solid #eeeeee;
  display: flex;
  justify-content: flex-end;
  padding: 15px;
}

.modal-body{
  position: relative;
  padding: 20px 10px;
}

.btn-close, .btn-confirm{
  border-radius: 8px;
  margin-left: 16px;
  width: 56px;
  height: 36px;
  border: none;
  cursor: pointer;
}

.btn-close{
  color: #313131;
  background-color: transparent;
}

.btn-confirm{
  color: #fff;
  background-color: #2d8cf0;
}

</style>
