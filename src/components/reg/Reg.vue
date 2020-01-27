<template>
    <div class="wrapper_reg">
        <div class="section_reg">
            <div class="sign_reg_btn">
                <a href=""><button  class="btn_reg_reg">Регистрация</button></a>   
              <a href="/sign"> <button class="btn_sign_reg">Вход</button></a>
              <v-form action="" class="field_reg" v-model="valid" ref="form" lazy-validation="">
                  <div class="fild_reg_block"><span class="span_reg">Email</span><input label="email" type="email" class="input_reg"  v-model="email"
            :rules="emailRules" required placeholder="example: evver@mail.ru"></div>
                  <div class="fild_reg_block"><span class="span_reg">Пароль</span><input  label="password" type="password" class="input_reg" v-model="password"
             :counter="6" placeholder="Минимум 6 символов"
             :rules="psswordRules" required></div>
                  <div class="fild_reg_block"><span class="span_reg">Подтвердите пароль</span><input type="password" class="input_reg" v-model="confirmPassword"
             :counter="6" placeholder="Повторите пароль"
             :rules="confirmPsswordRules" required></div>
                  <div class="fild_reg_block"><span class="span_reg">УНП</span><input type="text" class="input_reg" v-model="unp" required></div>
                  <div class="fild_reg_block"><span class="span_reg">Полное наименование компании</span><input type="text" class="input_reg" v-model="nameCompany" required></div>
                  <div class="fild_reg_block"><span class="span_reg">Юридический адрес компании</span><input type="text"  class="input_reg" v-model="uradress" required></div>
                  <div class="fild_reg_block"><span class="span_reg">Адрес доставки</span><input type="text" class="input_reg" v-model="adress" required></div>
                  <div class="fild_reg_block"><span class="span_reg">ФИО представителя компании</span><input type="text" class="input_reg" label="fio" v-model="fio" required></div>
                  <div class="fild_reg_block"><span class="span_reg">Номер телефона</span><input type="tel" label="number" class="input_reg" :rules="numberRules " v-model="number" required placeholder="+375-29-123-45-67"
                  ></div>
                  <div class="agreement_block">
                  <div class="agreement"><input type="checkbox" class="checkbox_teg"> <span class="agreement_text" required>Я подтверждаю, что ознакомлен и согласен с условиями  <button><ins class="ins">Пользовательского соглашения</ins></button> </span></div>
                    <div class="agreement"><input type="checkbox" class="checkbox_teg"> <span class="agreement_text">Я хочу получать последние новости об обновлениях сервиса </span></div>
                  </div>
                  
              </v-form>
              <div class="container_btn_reg"><button class="button_reg"  @click="onSubmit"
              :loading="loading"
              :disabled="!valid || loading">Зарегестрироваться</button></div>
            </div>
  

        </div>
                 
  </div>
    

</template>
<script>

export default {
    data(){
        return{

          fio:'',
          unp:'',
          confirmPassword:'',
          nameCompany:'',
          uradress:'',
          adress:'',
          number:'',
             email:'',
            password: '',
            valid: false,
            emailRules:[v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',],
        psswordRules:[
            v=>!!v|| 'ok',
            v=>(v&& v.length >=6)|| 'no ok'
        ],
          confirmPsswordRules:[
            v=>!!v|| 'ok',
            v=>(v&& v.length >=6)|| 'no ok'
        ],
        numberRules:[     v=>!!v|| 'ok',
            v=>(v&& v.length >=6)|| 'no ok'
        ],
        }
    },
     computed: {
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    onSubmit () {
      if (this.$refs.form.validate()|| this.user.password !== this.user.confirmPassword)
       {
        const user = {
          confirmPassword:this.confirmPassword,
          email: this.email,
          password: this.password,
          number: this.number,
          fio: this.fio,
          adress:this.adress,
          nameCompany:this.nameCompany,
          uradress:this.uradress,
          unp:this.unp
        }
        

        this.$store.dispatch('registerUser', user)
        .then(() => {
          this.$router.push('/personal')
        })
        .catch(() => {})
        this.$store.dispatch('create', user)
       
      }
     
    }
  },
  props:['uid']
}
    
    

</script>


<style scoped>
input:invalid {border-color: red;}
@media screen and (max-width: 380px){
  .button_reg{
    width: 50% !important;
    height: 30px !important;
    margin-left: 25% !important;
    font-size: 12px !important 
  }
  .button_reg:active{
    width: 45% !important;
    height: 25px !important;
  }
  .agreement_text{
    
    font-size:8px !important
  }
  .span_reg{
    font-size: 10px !important
  }
  .section_reg{
    width:90.13% !important;
    height: 650px !important
    
  }
  .btn_reg_reg{
    
    height: 40px !important;
    font-size: 12px !important 
  }
  .btn_sign_reg{
     
    height: 40px !important;
    font-size: 12px !important 
  }
}
input:invalid:not(:placeholder-shown) {border-color: red;}
button{
    outline: none;
}
.button_reg{
 width: 30%;
height: 45px;
color: white;
margin-left:  38.5%;
margin-top:  25px;



background: #15DBC6;
}
.button_reg:active{
  width: 27%;
  height: 40px;
}
.agreement_block{
    margin-top:10px;
}
.checkbox_teg{
   margin-right: 1%;
}
.agreement_text{
font-family: 'Montserrat', sans-serif;
font-size: 10px;


color: #454A4A;
}
.agreement{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 10%;
    
}
.span_reg{
    width: 30%;
font-family: 'Montserrat', sans-serif;
font-size: 14px;


color: #454A4A;
}
.fild_reg_block{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
}
.input_reg{
  padding-left: 5px !important;
    border: 2px solid #C9C9C9;
box-sizing: border-box;
border-radius: 1px;
width: 50%;
font-size: 14px;
height: 35px;
}
.btn_sign_reg{
     width: 50%;
    height: 60px;
    border: 1px solid #019393;
    font-family: 'Montserrat', sans-serif;
    font-size:22px;
    text-decoration: none;
    color: #60BCBC;
}
.btn_reg_reg{
     font-family: 'Montserrat', sans-serif;
    font-size:22px;
    width: 50%;
    height: 60px;
    background: #019393;
    color:#ffff
}
.section_reg{
     position: relative;
    width: 50%;
    height: 750px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5); 
}
.wrapper_reg{
        width: 100%;
    display: flex;
    margin-top: 120px;
    justify-content: center;
}
</style>