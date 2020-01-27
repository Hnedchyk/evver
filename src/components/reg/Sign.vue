<template>
    <div class="wrapper_sign">
        <div class="section_sign">
            <div class="sign_reg_btn">
             <a href="/reg"><button  class="btn_reg">Регистрация</button></a>   
              <a href=""> <button class="btn_sign">Вход</button></a> 

            </div>
                
         <v-form class="field_sign" v-model="valid" ref="form" lazy-validation="">
            <div class="field_email"> <span class="field_text">email</span><input
            type="email" 
            
            class="field_input"
            
            v-model="email"
            :rules="emailRules"
            > </div>
            <div class="field_password"> <span class="field_text">Пароль</span><input
           
             type="password" 
             class="field_input" v-model="password"
             
             :rules="psswordRules"
             outlined></div>
            <div class="recovery"><button> <ins>Забыли пароль? </ins></button></div>
            
        </v-form>
        <div class="section_btn"><button  class="field_btn_sign" @click="onSubmit" :loading="loading"  :disabled="!valid||loading"> Войти </button></div>

        </div>
        
    </div>  
</template>
<script>
export default {
    data(){
        return{
            email:'',
            password: '',
            valid: false,
            emailRules:[v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',],
        psswordRules:[
            v=>!!v|| 'ok',
            v=>(v&& v.length >=6)|| 'no ok'
        ]
    
            

        }
    },
 computed: {
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    onSubmit () {
      if (this.$refs.form.validate()) {
        const user = {
          email: this.email,
          password: this.password
        }

        this.$store.dispatch('loginUser', user)
        .then(() => {
          this.$router.push('/personal')
        })
        
        .catch(() => {})
      }
    }
  },
}
</script>
<style scoped>
@media screen and (max-width: 380px){
  .field_btn_sign{
    height: 30px !important
  }
  .recovery{
    font-size: 14px !important;
    margin-left: 52% !important;
  }
  .field_input{
    height: 30px !important
  }
  .section_sign{
    width:90.13% !important;
    height: 280px !important;
  }
  .field_text{
    font-size: 14px !important
  }

  .sign_reg_btn{
    margin-top: 6px;
  }
  .btn_reg{
    margin-top: -120px !important;
    height: 40px !important;
    font-size: 12px !important 
    
  }
  .btn_sign{
   margin-top: -120px !important;
    height: 40px !important;
    font-size: 12px !important  
  }
}
input:invalid:not(:placeholder-shown) {border-color: red;}

.field_btn_sign a{
    text-decoration: none;
    color: #ffff;
}

.field_btn_sign{
width: 30%;
height: 45px;
color: white;
margin-left: 38.5%;




background: #15DBC6;
}
button{
    outline: none;
}
.recovery{
font-family: 'Montserrat', sans-serif;
font-size: 16px;
line-height: 36px;
text-decoration-line: underline;
margin-left: 69.5%;
color: #15DBC6;
}
.field_password{
      margin-top: 30px;
  
align-items: center;
justify-content: center;
display: flex;
}
.field_text{
    margin-right: 17%;
    font-family: 'Montserrat', sans-serif;
font-size: 22px;
line-height: 26px;
width: 10%;
color: #454A4A;
}
.field_input{
    width: 50%;
    height: 40px;
    border: 2px solid #15DBC6;
    box-sizing: border-box;
    border-radius: 1px;
}
.field_email{
   margin-top: 50px;
  
align-items: center;
justify-content: center;
display: flex;


}
.section_sign{
    position: relative;
    width: 50%;
    height: 360px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5); 
   
    
    
    
}
.wrapper_sign{
    width: 100%;
    display: flex;
    margin-top: 170px;
    justify-content: center;
}
.btn_sign{
    font-family: 'Montserrat', sans-serif;
    font-size:22px;
    width: 50%;
    height: 60px;
    background: #019393;
    color:#ffff
    

}
.btn_reg{
    width: 50%;
    height: 60px;
    border: 1px solid #019393;
    font-family: 'Montserrat', sans-serif;
    font-size:22px;
    text-decoration: none;
    color: #60BCBC;

}
</style>