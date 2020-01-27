<template>
    
    <div class="header">
        
        <div class="header_text">
            EVVER med - cервис для онлайн заказа медицинских материалов и оборудования 
        </div>
       <div class="catalog_link"><a href="/catalog" style="color:#019393 ">Перейти к каталогу </a></div> 
        <div>
            <input type="text" placeholder="Например: хирургические перчатки" v-on:input="ok=!ok" class="search" v-model="search">
            <div class="search_img"><img src="/images/search.png" alt=""></div>
        </div>
        <div v-show="ok" class="list">
            <ul  >
                <li v-for="yonico_item in filteredUsers"
                    :key="yonico_item" class="item_home">
                     <div class="name_home"> {{yonico_item.name}}</div>
                     <div class="price_home" >{{yonico_item.price}}.00 Br</div> 
                     <div><button class="add" @click="addCart(yonico_item)">+</button></div>
                </li>
            </ul>
        </div>         
        <div class="zag_content">Как работает сервис?</div>
        
        <div class="card_container">
            <div class="big_plus"><img src="/images/big_plus.png" alt=""></div>
            <div class="card1">
                
                
                <div class="card1__head_line"></div>
                <div class="card1_line1"></div>
                <div class="card1_line2">
                    <div class="card_line1__line1"></div>
                    <div class="card_line1__line2"></div>
                    <div class="plus1"><img src="/images/+.png" alt="" class="plus1_mob"></div>
                    </div> 
                <div class="card1_line3">
                     <div class="card_line1__line1"></div>
                    <div class="card_line1__line2"></div>
                    <div class="plus1"><img src="/images/+.png" alt="" class="plus1_mob"></div> 
                    </div>
                      

            </div>
            <div class="card_text1">Клиент находит нужные ему товары с помощью поиска и не покидая экрана может сразу выбрать количество и добавить в корзину </div>
            <div class="card2">
                <div class="card2__head_line"></div>
                   <div class="card1_line1"></div>
                <div class="card1_line2">
                    <div class="card_line1__line1"></div>
                    <div class="card_line1__line2"></div>
                    <div class="plus1"><img src="/images/+.png" alt="" class="plus1_mob" ></div>
                    </div> 
                <div class="card1_line3">
                     <div class="card_line1__line1"></div>
                    <div class="card_line1__line2"></div>
                    <div class="plus1"><img src="/images/+.png" alt="" class="plus1_mob"></div> 
                    </div>
            </div>
            <div class="card_text2">Воспользовавшись каталог можно отфильтровать товары по категориям и далее перейти к регистрации</div>
            <div class="card3">
                <div class="line_hor1"></div>
                <div class="line_hor2"></div>
                <div class="line_vert1"><img src="/images/lineVert.png" alt=""></div>
                <div class="line_vert2"><img src="/images/lineVert.png" alt=""></div>
                <div class="arrow1"><img src="/images/arrow1.png" alt="" class="plus1_mobarrow"></div>
                <div class="arrow2"><img src="/images/arrow2.png" alt="" class="plus1_mobarrow"></div>
                <div class="card3__head_line"></div>
                <div class="podcard1">
                    <div class="podcard_line1">
                        <div class="podcard_line1__line1"></div>
                        <div class="podcard_line1__line2"></div>
                    </div>
                    <div class="podcard_line2">
                        <div class="podcard_line1__line1"></div>
                        <div class="podcard_line1__line2"></div></div>    
                </div>
                <div class="podcard2">
                    <div class="podcard_line1">
                        <div class="podcard_line1__line1"></div>
                        <div class="podcard_line1__line2"></div>
                    </div>
                    <div class="podcard_line2">
                        <div class="podcard_line1__line1"></div>
                        <div class="podcard_line1__line2"></div>
                    </div>
                </div>
            </div>
            <div class="card_text3">В личном кабинете покупатель сможет отредактировать свой заказ и узнать всю информацию о продавце</div>
            



        </div>
        <div class="newsletter">
            <div class="newsletter_text">Подписывайтесь на обновления!</div>
            <input type="text" class="newsletter_name" placeholder="Имя">
            <input type="text" class="newsletter_mail" placeholder="Email">
            <button class="newsletter_button">Подписаться на рассылку</button>
        </div>
        <div class="footer">
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
import axios from 'axios'

export default {
    data(){
        return{
            cart:[],
            search: '',
            ok: false,
            yonico:[],
            errors: [],
            }
            },
                created() {
             axios.get('https://react-evver.firebaseio.com/yonico.json')
                .then(response => {
                    this.yonico = response.data
                })
                .catch(e => {
                    this.errors.push(e)
                })
        },
        computed:{
            filteredUsers() {
    return this.yonico
        
        .filter(product => {
            return this.search == '' || product.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1;
        });
 }
        },
 
    
   methods: {
    addCart(yonico_item) {
        this.$store.commit('addToCart', yonico_item);
    }
   }

}
</script>

<style>
.catalog_link a{
    text-decoration: none;
    color: #019393;
}
.catalog_link{
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 43.73%;
    top: 132px;
    left: 105px;
    height: 30px;
    background-color: #fff;
    font-size: 12px
    
}
@media screen and (min-width: 380px){
.catalog_link{
    display: none;
}
}
@media screen and (max-width: 380px){
    
    .footer{
        height: 274px !important
    }
    .inf{
        font-size: 14px !important;
        width: 328px !important;
        text-align: center;
        margin-left: -200px;
        margin-top: 50px;
    }
    .born{
        font-size: 12px !important;
        width: 328px !important;
        margin-top: -50px;
        margin-left: -30px;
    }
    .communication_img{
        width: 32px !important;
        margin-left: 15px !important;
    }
    .communication{
        margin-top: -10px;
        margin-left: 60px;
    }
    .logo_footer{
        margin-top: -65px;
        margin-left: -34px;
    }
    .logo_foote_mob{
        width: 77px !important;
        
    }
    .email{
        font-size: 14px !important;
        margin-left: -31px;
        margin-top: -80px;
        
    }
    .tel{
       font-size: 14px !important;
        margin-left: -31px;
        margin-top: -95px; 
        width: 342px !important;
    }
    
    .plus1_mobarrow{
        width: 16px !important
    }
    .header{
        height: 186px !important;
    }
    .header_text{
        width: 302px !important;
        height: 146px !important;
        font-size: 16px !important;
        margin-left: -12%;
        margin-top: -135px ;
        line-height: 140.9% !important;
        
    }
    .search{
        display: none;
        
    }
    .search_img{
        display: none;
    }
    .zag_content{
        margin-top: -525px;
        font-size: 15px !important;
    }
    .card_text1{
        font-size: 14px !important;
        width: 90.13% !important;
        line-height: 153.8% !important;
        margin-top: -587px;
        margin-left: -50%;
        
    }
    .card_text2{
        font-size: 14px !important;
        width: 90.13% !important;
        line-height: 153.8% !important;
        margin-top: -650px;
        margin-left: -5%;
        
    }
    .card_text3{
        font-size: 14px !important;
        width: 90.13% !important;
        line-height: 153.8% !important;
        margin-top: -740px;
        margin-left: -50%;
        
    }
    .card1{
        margin-top: -490px;
        width: 90.13% !important;
        height: 149px !important;
        margin-left: -6%;
    }
     .card2{
        margin-top: -570px;
        width: 90.13% !important;
        height: 149px !important;
        margin-left: -41%;
    }
     .card3{
        margin-top: -650px;
        width: 90.13% !important;
        height: 149px !important;
        margin-left: -6%;
    }
    .podcard1{
        height: 54px !important;
        margin-top: -14px;
    }
    .podcard2{
        height: 54px !important;
        margin-top: -61px;
    }
    .podcard_line1{
        height: 19px !important;
        margin-top: -6px;
    }
    .podcard_line1__line1{
        height: 6px !important;
        margin-top: -1px;
    }
    .podcard_line1__line2{
        height: 6px !important;
        margin-top: -6px;
    }
    .podcard_line2{
        height: 19px !important;
        margin-top: -20px;
    }
    .card3__head_line{
        height: 15px !important;
    }
    .card1__head_line{
        height: 15px !important;
    }
    .card1_line1{
        margin-top: -20px;
        height: 18px !important;
    }
    .card1_line2{
        margin-top: -42px;
        height: 42px !important;

    }
    .card_line1__line1{
        height: 13px !important;
        margin-top: -5px;
    }
    .card_line1__line2{
        height: 13px !important;
        margin-top: -15px;
    }
    .card1_line3{
        margin-top: -80px;
         height: 42px !important;
        
    }
    .plus1{
       margin-top: -25px;
       margin-left: 15px;
    }
    .plus1_mob{
        width: 19px !important;
        
    }
    .big_plus{
        display: none;

    }
    .card2__head_line{
        height: 15px !important;
    }
    .arrow1{
        margin-top: -30px;
    }
    .line_hor1{
        width: 68px !important;
        margin-top: -33px;
    }
    .line_vert1{
        margin-top: -32px;
    }
    .arrow2{
        margin-top: -62px;
    }
    .line_hor2{
        margin-top: -62px;
    }
    .line_vert2{
        margin-top: -62px;
    }
    .newsletter_text{
        font-size: 15px !important;
        margin-top: -880px
        
    }
    .newsletter_name{
        height: 32px !important;
        width: 90.13% !important;
        margin-left: 6.13% !important;
        margin-top: -30px;
       
    }
    .newsletter_mail{
        height: 32px !important;
        width: 90.13% !important;
        margin-left: 6.13% !important;
        margin-top: 10px;
    }
    .newsletter_button{
        width: 222px !important;
        height: 22px !important;
        font-size: 14px !important;
        margin-top: 70px;
        margin-left: -275px !important;
    }



}
.newsletter_name{
    width: 24.30%;
height: 54px;
margin-left: 11.45%;




border: 2px solid #C9C9C9;
box-sizing: border-box;
}
.newsletter_mail{
    width: 24.30%;
height: 54px;
margin-left: 2.1%;


border: 2px solid #C9C9C9;
box-sizing: border-box;
}
.newsletter_button:hover{
    background-color: #019393;
}
.newsletter_button{
position: absolute;
width: 24.30%;
height: 54px;
color: #FFFFFF;
margin-left: 2.1%;
background: #15DBC6;
}
.newsletter_text{
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
font-size: 36px;
line-height: 131.9%;
padding-bottom: 42px;
/* or 47px */
text-align: center;

color: #454A4A;
}
.newsletter{
    
    position: relative;
    top:2000px;
    
}
.price_home{
font-family: 'Montserrat', sans-serif;
font-size: 14px;
line-height: 18px; 
color: #454A4A;
width: 10%;
}
.name_home{
width: 66%;
margin-left: 3%;
font-family: 'Montserrat', sans-serif;
font-size: 14px;
line-height: 18px;

color: #454A4A;
}

.big_plus{
 position: absolute;
top: 1030px;
left: 51.52%;
z-index: 1;


}
.search_img{
    
position: absolute;

left: 72.08%;
top: 443px;


}
input{
    padding-left: 40px;
    outline:none

}
.add:hover{
    color: #019393;
}

.add{
    font-family: 'Montserrat', sans-serif;
font-size: 50px;
    margin-left: 50px;
   color:#15DBC6; 
    
}
.arrow1{
    position: absolute;
    z-index: 1;
    top: 69px;
    left: 41.5%;
}
.arrow2{
    position: absolute;
    z-index: 1;
    top: 172px;
    left: 61.2%;
}
.line_vert2{
    position: absolute;
    top:127px;
    left:42.07%;
    z-index: 1;
}
.line_vert1{
    position: absolute;
    top:80px;
    left:63.03%;
    z-index: 1;
}
.line_hor2{
    position: absolute;
    width: 19.8%;
    height: 7px;
    background-color: #15DBC6;
    top: 180px;
    left: 42.07%;
    z-index: 1;
}
.line_hor1{
    position: absolute;
    width: 19.80%;
    height: 7px;
    background-color: #15DBC6;
    top: 80px;
    left:44.38%; 
    z-index: 1;
}
.podcard_line1__line1{
    position: absolute;
width: 70.56%;
height: 11px;
left: 3%;
top: 4px;

background: #E4E4E4;
}
.podcard_line1__line2{
    position: absolute;
width: 70.56%;
height: 11px;
left: 3%;
top: 17px;

background: #E4E4E4;
}
.podcard_line1{

position: absolute;
width: 92.67%;
height: 34px;
left: 3%;
top: 11px;

background: #FFFFFF;
}
.podcard_line2{

position: absolute;
width: 92.67%;
height: 34px;
left: 3%;
top: 51px;

background: #FFFFFF;
}
.podcard1{
    
position: absolute;
width: 44.05%;
height: 99px;
left: 3.5%;
top: 50px;
z-index: 0;

background: #019393;
}
.podcard2{
    
position: absolute;
width: 44.05%;
height: 99px;
left: 51.48%;
top: 140px;
z-index: 0;

background: #019393;
}
.plus1{
  position: absolute;
  left:80%;
  top: -20px;




font-family: 'Montserrat', sans-serif;
font-size: 80px;
line-height: 93px;

color: #15DBC6;  
}
.card_line1__line2{
    position: absolute;
width: 59.48%;
height: 24px;
left: 3.01%;
top: 38px;

background: #E4E4E4;
}
.card_line1__line1{
position: absolute;
width: 70.62%;
height: 24px;
left: 3.1%;
top: 10px;

background: #E4E4E4;
}
.card1_line3{
position: absolute;
width: 90.42%;
height: 76px;
left:3.5%;
top: 180px;

background: #FFFFFF;
}
.card1_line2{
position: absolute;
width: 90.42%;
height: 76px;
left:3.5%;
top: 92px;

background: #FFFFFF;
}
.card1_line1{
position: absolute;
width: 90.42%;
height: 34px;

top: 45px;
left:3.5%;  
background: #FFFFFF;
}
.card1__head_line{
position: absolute;
width: 100%;
height: 28px;
background: #019393;
}
.card2__head_line{
    position: absolute;
width: 100%;
height: 28px;
background: #019393;
}
.card3__head_line{
    position: absolute;
width: 100%;
height: 28px;
background: #019393;
}
.list{
  position: relative;
  top:484px;
  left: 24.65%; 
  width:50.69%;
  background-color: #ffffff;
  height: 233px;
  overflow: scroll;
  overflow-x: hidden; 
    
    
    
    
    
}
 .list::-webkit-scrollbar-button {
        width: 12px;
        background-color: #15DBC6;
    }

    .list::-webkit-scrollbar {
        width: 12px;
        background-color: #FFFFFF;
    }

    .list::-webkit-scrollbar-thumb {
        width: 8px;
        background-color: #15DBC6;
    }


 .item_home{
    display: flex;
    height: 52px;
    border: 1px solid #C9C9C9;
    box-sizing: border-box;
    width: 100%;
    margin-left: -1.7%;
    margin-top: 5px;
    align-items: center;
    

     
    
}

.inf{
position: absolute;
width: 30.47%;

left: 57.75%;
top: 65px;

font-family: 'Montserrat', sans-serif;
font-size: 22px;
line-height: 162.4%;
/* or 36px */

color: #FFFFFF;
}
.inf p{
  margin-top: -15px;
}
.partner{
    
position: absolute;
width: 23.75%;

left: 32.91%;
top: 157px;

font-family: 'Montserrat', sans-serif;
font-size: 22px;
line-height: 162.4%;
/* or 36px */

color: #FFFFFF;
}
.delay{
    position: absolute;
width: 23.75%;

left: 32.91%;
top: 122px;

font-family: 'Montserrat', sans-serif;
font-size: 22px;
line-height: 162.4%;
/* or 36px */

color: #FFFFFF;
}
.communication{
    position: absolute;
    top:60px;
    left:29.5%;
    
   

}
.communication img{
    margin-left: 24px;
}
.born{
    
position: absolute;
width: 47.43%;

left: 11.45%;
top: 270px;

font-family: 'Montserrat', sans-serif;
font-size: 18px;
line-height: 162.4%;
/* or 29px */

color: #FFFFFF;
}
.tel{
position: absolute;
width:22%;
left: 11.45%;
top: 158px;


font-family: 'Montserrat', sans-serif;
font-size: 22px;
line-height: 162.4%;
/* or 36px */

color: #FFFFFF;
}
.email{
    position: absolute;
    width: 23.75%;

left: 11.45%;
top: 124px;

font-family: 'Montserrat', sans-serif;
font-size: 22px;
line-height: 162.4%;
/* or 36px */

color: #FFFFFF;
}
.header{
    position: relative;
    width: 100%;
    height: 664px;
    background-image: url('/images/back.png');
    background-size: cover;
    
}
.header_text{
position: absolute;
width: 54.65%;
height: 155px;
left: 22.56%;
top: 196px;

font-weight:600;
font-family: 'Montserrat', sans-serif;


font-size: 34px;
line-height: 131.9%;
/* or 47px */
text-align: center;

color: #454A4A;
}
.search{
    position: absolute;
    width: 50.69%;
    height: 52px;
    left: 24.65%;
    top: 432px;

    background: #FFFFFF;
}
.zag_content{
    
position: absolute;
width: 54.65%;
height: 155px;
left: 22.56%;
top: 736px;
font-weight: 500;
font-family: 'Montserrat', sans-serif;
font-size: 36px;
line-height: 131.9%;
/* or 47px */
text-align: center;

color: #454A4A;
}
.card_container{
    display: flex;
    
}
.card1{
    position: absolute;
width: 42.08%;
height: 268px;
left: 11.45%;
top: 864px;
z-index: 0;
background: #E4E4E4;
}
.card_text1{
    
position: absolute;
width: 30.92%;
height: 143px;
left: 55.76%;
top: 853px;

font-family: 'Montserrat', sans-serif;
font-weight: 300;
font-size: 22px;
line-height: 34px;

color: #454A4A;
}
.card2{

position: absolute;
width: 42.08%;
height: 268px;
left: 46.52%;
top: 1224px;

background: #E4E4E4;
}
.card_text2{

position: absolute;
width:30.90%;
height: 143px;
left: 11.45%;
top: 1213px;

font-family: 'Montserrat', sans-serif;
font-size: 22px;
line-height: 34px;

color: #454A4A;
}
.card3{
position: absolute;
width: 43.08%;
height: 268px;
left: 11.45%;
top: 1584px;

background: #E4E4E4;
}
.card_text3{
position: absolute;
width:30.90%;
height: 228px;
left: 57.63%;
top: 1574px;

font-family: 'Montserrat', sans-serif;
font-size: 22px;
line-height: 34px;

color: #454A4A;
}
.footer{
    position: relative;
width: 100%;
height: 340px;
left: 0px;
top: 2150px;

background: #2A3950;
}
.logo_footer{
    position: absolute;
    top: 84px;
    left:11.45%;
    
}
.logo_footer img{
    margin-left: 3px;
}
</style>