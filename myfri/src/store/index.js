import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

const state = {
    level: 'first week',
    itemNum: 1,
    answers: [],
    timer: '',
    allTime: 0,
    itemDetail: [{
            topic_name: 'here is question 1',
            topic_answer: [
                {
                    answer_id: 1,
                    answer_name: 'here is option A'
                },
                {
                    answer_id: 2,
                    answer_name: 'and option B'
                },
                {
                    answer_id: 3,
                    answer_name: 'option C is not correct'
                },
                {
                    answer_id: 4,
                    answer_name: 'but option D?'
                }
            ]
        }, {
            topic_name: 'here is question 2',
            topic_answer: [
                {
                    answer_id: 1,
                    answer_name: 'here is option A again'
                },
                {
                    answer_id: 2,
                    answer_name: 'and option B again'
                },
                {
                    answer_id: 3,
                    answer_name: 'option C is not correct, either'
                },
                {
                    answer_id: 4,
                    answer_name: 'but option D? God knows'
                }
            ]
        },{
            topic_name: 'final one',
            topic_answer: [
                {
                    answer_id: 1,
                    answer_name: 'this is not correct'
                },
                {
                    answer_id: 2,
                    answer_name: 'this is not correct either'
                },
                {
                    answer_id: 3,
                    answer_name: 'you think C is correct?'
                },
                {
                    answer_id: 4,
                    answer_name: 'maybe this one is the right option?'
                }
            ]
        }
    ]
}

export default new Vuex.Store({
    state,
    mutations,
    actions
});