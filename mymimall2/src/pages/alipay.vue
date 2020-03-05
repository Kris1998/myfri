<template>
    <div class="alipay">
        <order-header :title="title">
            <template v-slot:subtitle>
                <span>{{tip}}</span>
            </template>
        </order-header>
        <div v-html="content"></div>
        <loading v-show="showLoading"></loading>
    </div>
</template>

<script>
import loading from '../components/Loading'
import orderHeader from '../components/OrderHeader'
export default {
    name: 'alipay',
    components: {
        loading,
        orderHeader
    },
    data(){
        return {
            title: '订单支付',
            tip: '',
            content: '',
            orderId: this.$route.query.orderId,
            showLoading: true,
        }
    },
    mounted(){
        this.pay();
    },
    methods: {
        pay(){
            this.axios.post('/pay',{
                orderId: this.orderId,
                orderName: 'hahah',
                amount: 100,
                payType: 1
            }).then(res=>{
                this.content = res.content;
                setTimeout(()=>{
                    document.getElementById('bestPayForm').submit();
                    // this.showLoading = false;
                },100)
            })
        }
    }
}
</script>

<style scoped>

</style>