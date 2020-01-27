import * as fb from 'firebase'

class Info{
    constructor(number,email,fio,uradress,adress,nameCompany,unp){
        this.number=number
        this.email=email
        this.fio=fio
        this.uradress=uradress
        this.adress=adress
        this.nameCompany=nameCompany
        this.unp=unp
    }
    
}
export default {
    state:{
        info:[]
    },
    mutations:{
        create(state,payload){
            state.info.push(payload)
        },
        loadinfo(state,payload){
            state.info=payload
        }
    },
    actions:{
        async create ({commit}, payload){
            commit('clearError')
            commit('setLoading', true)
            try{
                const newInfo= new Info (
                 payload.number,
                 payload.email,
                 payload.fio,
                 payload.uradress,
                 payload.nameCompany,
                 payload.adress,
                 payload.unp
                )
              fb.database().ref('iform').push(newInfo)
            // console.log(info)
            commit('setLoading',false)
            commit('create',{
                ...newInfo
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
            const resultInfo=[]
            try{
                const infoVal= await fb.database().ref('iform').once('value')
                const info=infoVal.val()
                Object.keys(info).forEach(key=>{
                   const inf = info[key] 
                   resultInfo.push(
                       new Info(
                           inf.number,
                           inf.email,
                           inf.fio,
                           inf.uradress,
                           inf.adress,
                           inf.nameCompany,
                           inf.unp,
                           key
                       )
                   )
                   commit('loadinfo',resultInfo)
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
        info(state,getters){
            return state.info.filter(info=>{
                return info.email===getters.user.email
            })

        }
    },

}