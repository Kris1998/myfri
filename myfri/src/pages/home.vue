<template>
<div>
    home
    <itemcontainer fatherComponent = 'home'></itemcontainer>
</div>
</template>

<script>
import itemcontainer from '../components/itemcontainer2'
export default {
    name: 'home',
    components: {
        itemcontainer
    }
}
</script>

<style scoped>

</style>