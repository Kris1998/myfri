export default{
    addItem(state){
        state.itemNum++;
    },
    recordAnswer(state,answer){
        state.answers.push(answer);
    },
    initializeData(state){
        state.itemNum = 1;
        state.answers = [];
        state.allTime = 0;
    },
    recordTime(state){
        state.timer = setInterval( () => {
           state.allTime++; 
        },1000)
    }
}