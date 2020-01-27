import * as fb from 'firebase'

class Zakaz{
    constructor(belomnimed){
        this.belomnimed=belomnimed
    }
    
}
export default {
    state:{
        zakaz:[]
    },
    mutations:{
        createZakaz(state,payload){
            state.zakaz.push(payload)
        },
        loadzakaz(state,payload){
            state.zakaz=payload
        }
    },
    actions:{
        async createZakaz ({commit}, payload){
            commit('clearError')
            commit('setLoading', true)
            try{
                const newZakaz= new Zakaz (
                 payload.belomnimed
                )
              fb.database().ref('zakaz').push()
            // console.log(zakaz)
            commit('setLoading',false)
            commit('createZakaz',{
                ...newZakaz
            })
            }catch(error){
                commit('setError',error)
                commit('setLoading',false)
                throw error
            }
            
        },
        async fetchProducts({commit}){
            commit('clearError')
            commit('setLoading',true)
            const resultZakaz=[]
            try{
                const zakazVal= await fb.database().ref('zakaz').once('value')
                const zakaz=zakazVal.val()
                Object.keys(zakaz).forEach(key=>{
                   const zak = zakaz[key] 
                   resultZakaz.push(
                       new Zakaz(
                           zak.belomnimed,
                           key
                       )
                   )
                   commit('loadzakaz',resultZakaz)
                   commit('setLoading',false)
                })
            }catch(error){
                commit('setError',error)
                commit('setLoading',false)
                throw error
            }
        }
    },
    getters:{
        zakaz(state){
            return state.zakaz
            

        }
    },

}