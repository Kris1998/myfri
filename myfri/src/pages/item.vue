<template>
<div>
    <itemcontainer fatherComponent = 'item'></itemcontainer>
</div>
</template>

<script>
import itemcontainer from '../components/itemcontainer2'
export default {
    name: 'item',
    components: {
        itemcontainer
    },
    created(){
        this.$store.commit('recordTime');
    }
}
</script>

<style scoped>

</style>