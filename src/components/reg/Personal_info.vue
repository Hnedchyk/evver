<template>
<div class="personal"> 
    <div  v-for="zak in zakaz" :key="zak">
   
   {{zak}}
   </div>   
    <div class="personal_text">Личный кабинет</div>
    <div class="personal_block_btn">
         <a href="/inf" class="list_info"><button > Личная информация</button></a> 
        <a href="/personal" class="zakaz"><button >Мои заказы</button></a>
    </div>
    <div class="wrapper_reg">
        <div class="section_reg">
            <div class="sign_reg_btn"  >
                
              <div class="field_reg" v-for="inf in info" :key="inf">
                  <div class="fild_reg_block"><span class="span_reg"  >Email</span><div label="email" type="email" class="input_reg"  >{{inf.email}}</div></div>
                 
                  
                  <div class="fild_reg_block"><span class="span_reg">УНП</span><div type="text" class="input_reg"> {{inf.unp}}</div></div>
                  <div class="fild_reg_block"><span class="span_reg">Полное наименование компании</span><div type="text" class="input_reg">{{inf.nameCompany}}</div></div>
                  <div class="fild_reg_block"><span class="span_reg">Юридический адрес компании</span><div type="text"  class="input_reg">{{inf.uradress}}</div></div>
                  <div class="fild_reg_block"><span class="span_reg">Адрес доставки</span><div type="text" class="input_reg">{{inf.adress}}</div></div>
                  <div class="fild_reg_block"><span class="span_reg">ФИО представителя компании</span><div type="text" class="input_reg"> {{inf.fio}}</div></div>
                  <div class="fild_reg_block"><span class="span_reg">Номер телефона</span><div type="text" label="number" class="input_reg" 
                  >{{inf.number}}</div></div>
                  
                  
              </div>
             
            </div>
  

        </div>
                 
  </div>
   
   <div class="personal_footer">
               <div class="logo_footer">
                <img src="/images/footer_logo.svg" alt="" class="logo_foote_mob">
                
            </div>
            <div class="email">evvermed@gmail.com</div>
            <div class="tel">+375 (29) 618 05 01</div>
            <div class="born">2019 @ EVVER med All right are reserved</div>
            <div class="communication">
                <img src="/images/email.png" alt="" class="communication_img">
                <img src="/images/tel.png" alt="" class="communication_img">
                <img src="/images/telega.png" alt="" class="communication_img">
                <img src="/images/viber.png" alt="" class="communication_img"> 
            </div>
            <!-- <div class="delay">Доставка</div>
            <div class="partner">Как стать партнером</div> -->
            <div class="inf">
                <p>Часто задаваемые вопросы</p>
                <p>Техническая поддержка</p>
                <p>Пользовательское соглашение</p>
                <p>Политика конфиденциальности</p>
            </div>
        </div>
    
</div>
</template>
<script>
// import axios from 'axios'
export default {
   data(){
       return{
        //    zakaz:[]
       }
   },
    //  created() {
    //       axios.get('https://react-evver.firebaseio.com/zakaz/-LzLzbXJLnTb0qwQcQoK/belomnimed.json')
    //             .then(response => {
    //                 this.zakaz = response.data
    //             })
    //             .catch(e => {
    //                 this.errors.push(e)
    //             })
    //  },
     computed: {
    loading () {
      return this.$store.getters.loading
    },
    info(){
        return this.$store.getters.info
    },
    zakaz(){
        return this.$store.getters.zakaz
    }
  },
  methods: {
    onSubmit () {
      if (this.$refs.form.validate()) {
        const user = {
          email: this.email,
          password: this.password,
          number: this.number
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
@media screen and (max-width: 380px){
    .personal_footer{
        height: 274px !important
    }
    .personal_btn_show{
        width: 50% !important;
        height: 30px !important;
        font-size: 12px !important;
        margin-top:-60px !important;
    }
    .provider_inf{
        margin-top: 10px !important;
    }
    .provider_inf_text{
        font-size:12px !important
    }
    .general_total{
        font-size: 14px !important;
        margin-left: 62% !important;
        
    }
    .general_total__block{
        width: 90.13% !important;
        margin-left: 4.5% !important;
        height: 50px !important;
    }
    .personal_total{
        font-size: 14px !important;
        margin-top: 10px !important;
    }
    .btn_block{
        margin-left: 10% !important;
        margin-top: 10px !important;
    }
    .btn_block button img {
        width: 10px !important;
        
    }
    .provider{
        font-size: 14px !important;
        margin-left: 8% !important;
        margin-top: 10px !important;
    }
    .zakaz_list_li_block{
        width: 90.13% !important;
        margin-left: 4.5% !important;
        height: 50px !important;
    }
    .li_personal{
        width: 90.13% !important;
        margin-left: 1%!important;
        height: 110px !important
    }
    .personal_item_col p{
        margin-top: -14px;
    }
    .personal_item_col{
          
        width: 30px !important;
        height: 28px !important;
        margin-left: 3% !important;
        margin-top: -1px;
    }
    .personal_item_price{
        font-size: 12px !important;
        margin-left: 4%!important;
        line-height: 120% !important;
        width: 17% !important
    }
    .personal_btn_remove{
        position: absolute;
        margin-top: 20px !important;
        margin-left: 0.5%!important;
        
    }
    .personal_btn_remove img{
        width: 25px !important
    }
    .personal_btn_minus{
         position: absolute;
        width: 30px !important;
        margin-top: -15px !important;
        
         
    }
    .personal_btn_plus{
           position: absolute;
        width: 30px !important;
        margin-top: -45px;
        
         
    }
    .personal_item_name{
        font-size: 12px !important;
         line-height: 120% !important;
         width: 50% !important
    }
    .personal_text{
        font-size: 14px !important;
        
        
    }
    .show_list{
        width: 30% !important;
        height: 30px !important;
        font-size: 12px !important;
        margin-left: 25% !important ;
    }
    .list_info{
        height: 30px !important;
        font-size: 11px !important;
    }
    .zakaz{
        height: 30px !important;
        font-size: 11px !important;
    }
    .personal_block_btn{
        margin-top: -80px;
    }
    .zakaz_number{
        font-size:18px !important;
        width: 40% !important;
        
    }
}
.li_personal{
    list-style: none;
height: 88px;
display: flex;

align-items: center;
width: 77.08%;
margin-left: 10.50%;
margin-top: 5px;
border: 1px solid #C9C9C9;
box-sizing: border-box;
}
button{
    outline: none;
}
.personal_btn_remove{
    margin-left: 10px;
}
.personal_footer{
     position: relative;
      width: 100%;
        height: 340px;
        left: 0px;
        margin-top:91px;
        background: #2A3950;
}
.personal_btn_show_block{
    width: 77.08%;
    margin-left: 11.45%;
    display: flex;
    justify-content: center;
    margin-top: 98px;
    color: #ffffff;
}
.personal_btn_show{
width: 34.37%;
height: 56px;


background: #15DBC6;
border-radius: 1px;
}
.general_total{
   margin-left: 67.5%; 
font-family: 'Montserrat', sans-serif;
font-size: 30px;
line-height: 35px;

color: #454A4A;
}
.general_total__block{
border: 0.5px solid #000000;
box-sizing: border-box;
width: 77.08%;
margin-left:11.45% ;
height: 92px;
display: flex;
align-items: center;
}
.provider_inf_text{
   

width: 66.30%;
font-family: 'Montserrat', sans-serif;
top:50px;
font-size: 20px;
margin-left: 6.39%;


color: #000000;
}
.provider_inf{
    width: 77.08%;
    height: 225px;
    margin-left: 11.45%;
    margin-top:37px;
    background-color: #E4E4E4;
}
.personal_total{
margin-top: 27px; 
font-family: 'Montserrat', sans-serif;
margin-left: 41%;
font-size: 30px;
display: flex;



color: #454A4A;

}
.btn_block{
    margin-left: 2%;
    margin-top: 35px;
    width: 5%
}
.provider{
 margin-left: 15.69%;
font-family: 'Montserrat', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 30px;
line-height: 35px;
/* identical to box height */
margin-top: 27px;
color: #000000;
width: 7.7%
}
.provider_head{
    display: flex;
    width: 100%;
    align-items: center;
    
}

.personal_btn_minus{
width: 65px;
height: 28px;
color: #ffffff;
margin-top: 1px;
background: #15DBC6;
}
.personal_btn_plus{
width: 65px;
height: 28px;
color: #ffffff;

background: #15DBC6;
}
.personal_btn_col{
    display: flex;
flex-direction: column;
margin-left: 2.52%;
}
.personal_item_col{
    width: 87px;
height: 52px;
border: 1px solid #019393;
box-sizing: border-box;

margin-left: 2%;
text-align: center;

padding-top: 15px;
}
.personal_item_price{
    width: 10%;

    margin-left: -2%;


font-family: 'Montserrat', sans-serif;
font-size: 22px;
line-height: 26px;

color: #454A4A;
}
li{


}
.personal_item_name{
width: 66.75%;
margin-left: 2.07%;




font-family: 'Montserrat', sans-serif;
font-size: 20px;
line-height: 26px;

color: #454A4A;
}
.show_list{
width: 18.55%;
height: 56px;
margin-left: 59%;
color: #ffffff;

background: #019393;
border-radius: 1px;
}
.zakaz_data{
font-family: 'Montserrat', sans-serif;
width: 19.1%;
margin-left: 5.67%;
font-size: 36px;
line-height: 131.9%;
/* or 47px */
text-align: center;

color: #454A4A;
}
.zakaz_number{
    
width: 19.1%;

margin-left: 0.81;

font-family: 'Montserrat', sans-serif;


font-size: 36px;
line-height: 131.9%;
/* or 47px */
text-align: center;

color: #454A4A;

}
.zakaz_list_li_block{
    width: 77.08%;
    height: 92px;
    background-color:  #E4E4E4;
    margin-left: 11.45%;
    margin-top: 90px;
    display: flex;
    align-items: center
}
.list_info{
    text-decoration: none;
    display: flex;
    justify-content: center;
    width: 32.63%;
height: 54px;
margin-left: 13.40%;
margin-top: 100px;
color: #019393;

border: 2px solid #019393;
box-sizing: border-box;
border-radius: 1px;
}
.zakaz{
    width: 32.63%;
    color: #ffffff;
height: 54px;
margin-left: 7.91%;
margin-top: 100px;

background: #019393;
border-radius: 1px;
}
.personal_block_btn{
    display: flex;
}
.personal{
    width: 100%;
    
}
.personal_text{
font-family: 'Montserrat', sans-serif;
font-size: 36px;
font-weight: 600;
/* or 47px */
text-align: center;
margin-top: 124px;
width: 54.65%;
color: #292B31;
margin-left: 22.5%;
}

@media screen and (max-width: 380px){
  .button_reg{
    width: 50% !important;
    height: 30px !important;
    margin-left: 25% !important;
    font-size: 12px !important 
  }
  .agreement_text{
    
    font-size:8px !important
  }
  .span_reg{
    font-size: 10px !important
  }
  .section_reg{
    width:90.13% !important;
    height: 390px !important
    
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
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #C9C9C9;
box-sizing: border-box;
border-radius: 1px;
width: 50%;
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
    height: 420px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5); 
}
.wrapper_reg{
        width: 100%;
    display: flex;
    margin-top: 70px;
    justify-content: center;
}
</style>