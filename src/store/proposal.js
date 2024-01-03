import axios from "axios"
export default {
    namespaced: true,
    state: {
        proposals: null,
    },
    getters:{
        proposals(state){
            return state.proposals
        }
    },
    mutations: {
        SET_PROPOSAL(state, data){
            state.proposals = data
        }
    },
    actions: {

        async all({ dispatch, commit }){
            let res = await axios.get('v1/proposal')
            commit("SET_PROPOSAL",res.data);
        },

        async create({ dispatch, commit}, data){
            let res = await axios.post("v1/proposal/create", data);
            return res;
        },
    }
}