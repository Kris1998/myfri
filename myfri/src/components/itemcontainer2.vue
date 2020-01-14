<template>
    <div>
        <span class="header-span" v-if="fatherComponent == 'home'">{{level}}</span>
        <span class="header-span" v-if="fatherComponent == 'item'">No. {{itemNum}}</span>
        
        <div v-if="fatherComponent == 'home'">
            <button @click="getStart">Let's start</button>
        </div>

        <div v-if="fatherComponent == 'item'">
            <div>{{itemDetail[itemNum-1].topic_name}}</div>
            <ul>
                <li v-for="(item,index) in itemDetail[itemNum-1].topic_answer" @click="setChosenIndex(index)" :key="item.answer_id" :class="{chosen: index == chosenIndex}">{{chooseType(index)}} {{item.answer_name}}</li>
            </ul>
            <button @click="nextItem" v-if="itemNum < itemDetail.length">next</button>
            <button @click="submitItem" v-else>submit</button>
            <div>{{allTime}}</div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: 'itemcontainer',
    props: ['fatherComponent'],
    data(){
        return {
            chosenIndex: null
        }
    },
    computed: mapState([
        'level',
        'itemNum',
        'itemDetail',
        'allTime',
        'timer'
    ]),
    methods: {
        ...mapActions(['addItem', 'initializeData']),
        chooseType(type){
            switch(type){
                case 0: return 'A';
                case 1: return 'B';
                case 2: return 'C';
                case 3: return 'D';
            }
        },
        nextItem(){
            if (this.chosenIndex == null) {
                alert('you chose nothing yet');
            }else{
                this.addItem(this.chooseType(this.chosenIndex));
                this.chosenIndex = null;
            }
        },
        submitItem(){
            if (this.chosenIndex == null) {
                alert('you chose nothing yet');
            }else{
                this.addItem(this.chooseType(this.chosenIndex));
                this.chosenIndex = null;
                clearInterval(this.timer);
                this.$router.push('/score');
            }            
        },
        setChosenIndex(index){
            this.chosenIndex = index;
        },
        getStart(){
            this.initializeData();
            this.$router.push('/item');
        }
    },
}
</script>

<style scoped>
ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
}
li {
    width: 200px;
}
.chosen {
    border: red 3px solid;
    border-radius: 5px;
}
</style>