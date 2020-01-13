<template>
    <div>
        <span class="header-span" v-if="fatherComponent == 'home'">{{first}}</span>
        <span class="header-span" v-if="fatherComponent == 'item'"></span>

    </div>
</template>

<script>
export default {
    name: 'itemcontainer',
    props: ['fatherComponent'],
    data(){
        return {
            
        }
    },
    computed: {
        first(){
            return this.$store.state.level;
        }
    }
}
</script>

<style scoped>

</style>