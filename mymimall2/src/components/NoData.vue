<template>
    <div class="no-data">
        <img src="/images/icon-no-data.png">
        <p>没有数据</p>
    </div>
</template>

<script>
export default {
    name: 'no-data'
}
</script>

<style lang="scss" scoped>
.no-data {
    text-align: center;
    font-size: 16px;
    color: #999999;
    margin: 50px 0;
    img {
        width: 240px;
        height: 180px;
        margin-bottom: 20px;
    }
}
</style>