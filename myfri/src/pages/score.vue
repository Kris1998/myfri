<template>
<div>
    <div>your score is {{score}}</div>
    <div>{{tip}}</div>
    <router-link to="/">回到首页</router-link>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'score',
    data(){
        return {
            score: 0,
            // tip: [],
            tips: ['你是猪吗','好蠢','还行','不错'],
            correctAnswers: ['A','A','A']
        }
    },
    created(){
        this.setScore();
    },
    computed: {
        tip(){
            return this.tips[this.score/20];
        },
        ...mapState(['answers'])
    },
    methods: {
        setScore(){
            console.log(this.answers);
            this.answers.forEach( (item,index)=>{
                if (item == this.correctAnswers[index]) {
                    this.score += 20;
                }
            });
        }
    }
}
</script>

<style scoped>

</style>