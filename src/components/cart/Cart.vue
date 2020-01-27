<template>
    <div class="wrapper">
        <div class="header_cart">
            <div class="cart_list" >
            <ul>
                <li v-for="itemCart in $store.state.cart"
                :key="itemCart.id"><span class="cart_item_name">{{ itemCart.name }} </span>
                    <div class="cart_item_price"> {{ itemCart.totalPrice }} Br</div>
                    <span class="cart_item_col"><p>{{ itemCart.quantity  }}</p></span>
                    <div class="btn_col">
                        <button class="btn_plus" @click="addCart(itemCart)">+</button>
                        <button class="btn_minus" @click="addCartMinus(itemCart)" >-</button></div>
                    <div>
                        <button class="btn_remove"  @click.prevent="removeFromCart(itemCart)"><img src="images/remove.png" alt="" ></button>
                    </div>
                </li>
                <li v-for="itemCart in belomnimed"
                :key="itemCart.id"><span class="cart_item_name">{{ itemCart.name }} </span>
                    <div class="cart_item_price"> {{ itemCart.totalPrice }} Br</div>
                    <span class="cart_item_col"><p>{{ itemCart.quantity  }}</p></span>
                    <div class="btn_col">
                        <button class="btn_plus" @click="addBelomnimed(itemCart)">+</button>
                        <button class="btn_minus" @click="addCartMinusBelomnimed(itemCart)" >-</button></div>
                    <div>
                        <button class="btn_remove"  @click.prevent="removeFromBelomnimed(itemCart)"><img src="images/remove.png" alt="" ></button>
                    </div>
                </li>
                 <li v-for="itemCart in $store.state.dinomed"
                :key="itemCart.id"><span class="cart_item_name">{{ itemCart.name }} </span>
                    <div class="cart_item_price"> {{ itemCart.totalPrice }} Br</div>
                    <span class="cart_item_col"><p>{{ itemCart.quantity  }}</p></span>
                    <div class="btn_col">
                        <button class="btn_plus" @click="addDinomed(itemCart)">+</button>
                        <button class="btn_minus" @click="addCartMinusDinomed(itemCart)" >-</button></div>
                    <div>
                        <button class="btn_remove"  @click.prevent="removeFromDinomed(itemCart)"><img src="images/remove.png" alt="" ></button>
                    </div>
                </li>
                 <li v-for="itemCart in $store.state.ihde"
                :key="itemCart.id"><span class="cart_item_name">{{ itemCart.name }} </span>
                    <div class="cart_item_price"> {{ itemCart.totalPrice }} Br</div>
                    <span class="cart_item_col"><p>{{ itemCart.quantity  }}</p></span>
                    <div class="btn_col">
                        <button class="btn_plus" @click="addIhde(itemCart)">+</button>
                        <button class="btn_minus" @click="addCartMinusIhde(itemCart)" >-</button></div>
                    <div>
                        <button class="btn_remove"  @click.prevent="removeFromIhde(itemCart)"><img src="images/remove.png" alt="" ></button>
                    </div>
                </li>
                 <li v-for="itemCart in $store.state.meding"
                :key="itemCart.id"><span class="cart_item_name">{{ itemCart.name }} </span>
                    <div class="cart_item_price"> {{ itemCart.totalPrice }} Br</div>
                    <span class="cart_item_col"><p>{{ itemCart.quantity  }}</p></span>
                    <div class="btn_col">
                        <button class="btn_plus" @click="addMeding(itemCart)">+</button>
                        <button class="btn_minus" @click="addCartMinusMeding(itemCart)" >-</button></div>
                    <div>
                        <button class="btn_remove"  @click.prevent="removeFromMeding(itemCart)"><img src="images/remove.png" alt="" ></button>
                    </div>
                </li>
                <li v-for="itemCart in $store.state.medistom"
                :key="itemCart.id"><span class="cart_item_name">{{ itemCart.name }} </span>
                    <div class="cart_item_price"> {{ itemCart.totalPrice }} Br</div>
                    <span class="cart_item_col"><p>{{ itemCart.quantity  }}</p></span>
                    <div class="btn_col">
                        <button class="btn_plus" @click="addMedistom(itemCart)">+</button>
                        <button class="btn_minus" @click="addCartMinusMedistom(itemCart)" >-</button></div>
                    <div>
                        <button class="btn_remove"  @click.prevent="removeFromMedistom(itemCart)"><img src="images/remove.png" alt="" ></button>
                    </div>
                </li>
                 <li v-for="itemCart in $store.state.dental"
                :key="itemCart.id"><span class="cart_item_name">{{ itemCart.name }} </span>
                    <div class="cart_item_price"> {{ itemCart.totalPrice }} Br</div>
                    <span class="cart_item_col"><p>{{ itemCart.quantity  }}</p></span>
                    <div class="btn_col">
                        <button class="btn_plus" @click="addDental(itemCart)">+</button>
                        <button class="btn_minus" @click="addCartMinusDental(itemCart)" >-</button></div>
                    <div>
                        <button class="btn_remove"  @click.prevent="removeFromDental(itemCart)"><img src="images/remove.png" alt="" ></button>
                    </div>
                </li>
                <li v-for="itemCart in $store.state.rovira"
                :key="itemCart.id"><span class="cart_item_name">{{ itemCart.name }} </span>
                    <div class="cart_item_price"> {{ itemCart.totalPrice }} Br</div>
                    <span class="cart_item_col"><p>{{ itemCart.quantity  }}</p></span>
                    <div class="btn_col">
                        <button class="btn_plus" @click="addRovira(itemCart)">+</button>
                        <button class="btn_minus" @click="addCartMinusRovira(itemCart)" >-</button></div>
                    <div>
                        <button class="btn_remove"  @click.prevent="removeFromRovira(itemCart)"><img src="images/remove.png" alt="" ></button>
                    </div>
                </li>
                 <li v-for="itemCart in $store.state.stomalux"
                :key="itemCart.id"><span class="cart_item_name">{{ itemCart.name }} </span>
                    <div class="cart_item_price"> {{ itemCart.totalPrice }} Br</div>
                    <span class="cart_item_col"><p>{{ itemCart.quantity  }}</p></span>
                    <div class="btn_col">
                        <button class="btn_plus" @click="addStomalux(itemCart)">+</button>
                        <button class="btn_minus" @click="addCartMinusStomalux(itemCart)" >-</button></div>
                    <div>
                        <button class="btn_remove"  @click.prevent="removeFromStomalux(itemCart)"><img src="images/remove.png" alt="" ></button>
                    </div>
                </li>
                  <li v-for="itemCart in $store.state.fordent"
                :key="itemCart.id"><span class="cart_item_name">{{ itemCart.name }} </span>
                    <div class="cart_item_price"> {{ itemCart.totalPrice }} Br</div>
                    <span class="cart_item_col"><p>{{ itemCart.quantity  }}</p></span>
                    <div class="btn_col">
                        <button class="btn_plus" @click="addFordent(itemCart)">+</button>
                        <button class="btn_minus" @click="addCartMinusFordent(itemCart)" >-</button></div>
                    <div>
                        <button class="btn_remove"  @click.prevent="removeFromFordent(itemCart)"><img src="images/remove.png" alt="" ></button>
                    </div>
                </li>
                 <li v-for="itemCart in $store.state.vmk"
                :key="itemCart.id"><span class="cart_item_name">{{ itemCart.name }} </span>
                    <div class="cart_item_price"> {{ itemCart.totalPrice }} Br</div>
                    <span class="cart_item_col"><p>{{ itemCart.quantity  }}</p></span>
                    <div class="btn_col">
                        <button class="btn_plus" @click="addVmk(itemCart)">+</button>
                        <button class="btn_minus" @click="addCartMinusVmk(itemCart)" >-</button></div>
                    <div>
                        <button class="btn_remove"  @click.prevent="removeFromVmk(itemCart)"><img src="images/remove.png" alt="" ></button>
                    </div>
                </li>
            </ul>
           
            <div class="total">
                <div class="total_price">Итог {{ totalPriceBelomnimed+=totalPrice+=totalPriceDinomed+=totalPriceIhde+=totalPriceMeding+=totalPriceMedistom+=totalPriceDental+=totalPriceRovira+=totalPriceStomalux}} Br </div>
                
            </div>
           
            
            </div>
            
          
        </div>
        <a href="/personal"><div><button class="order" @click="zakaz">Перейти к заказу</button></div></a>
        <div class="cart_footer">
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
export default {
    data(){
        return{
            
        }
    },
    computed: {
        belomnimed(){
            return this.$store.getters.belomnimed
        },
    totalPrice() {
        let total =0;

        for (let item of this.$store.state.cart) {
            total += item.totalPrice;
        }

        return total;
    },
    totalPriceBelomnimed() {
        let total =0;

        for (let item of this.$store.state.belomnimed) {
            total +=item.totalPrice;
        }

        return total;
    },
     totalPriceDinomed() {
        let total =0;

        for (let item of this.$store.state.dinomed) {
            total +=item.totalPrice;
        }

        return total;
    },
       totalPriceIhde() {
        let total =0;

        for (let item of this.$store.state.ihde) {
            total +=item.totalPrice;
        }

        return total;
    },
    totalPriceMeding() {
        let total =0;

        for (let item of this.$store.state.meding) {
            total +=item.totalPrice;
        }

        return total;
    },
      totalPriceMedistom() {
        let total =0;

        for (let item of this.$store.state.medistom) {
            total +=item.totalPrice;
        }

        return total;
    },
      totalPriceDental() {
        let total =0;

        for (let item of this.$store.state.dental) {
            total +=item.totalPrice;
        }

        return total;
    },
    totalPriceRovira() {
        let total =0;

        for (let item of this.$store.state.rovira) {
            total +=item.totalPrice;
        }

        return total;
    },
      totalPriceStomalux() {
        let total =0;

        for (let item of this.$store.state.stomalux) {
            total +=item.totalPrice;
        }

        return total;
    },
       totalPriceFordent() {
        let total =0;

        for (let item of this.$store.state.fordent) {
            total +=item.totalPrice;
        }

        return total;
    },
    totalPriceVmk() {
        let total =0;

        for (let item of this.$store.state.vmk) {
            total +=item.totalPrice;
        }

        return total;
    }
},
    methods: {
    zakaz(){
        const zakaz ={
            belomnimed:this.belomnimed
        }
        this.$store.dispatch('createZakaz',zakaz)
    },
    addCart(itemCart){
         this.$store.commit('addToCart', itemCart);
    },
    removeFromCart(itemCart) {
        this.$store.commit('removeFromCart', itemCart);
    },
    addCartMinus(itemCart){
       this.$store.commit('addToCartMinus', itemCart); 
    },
    addBelomnimed(item){
    this.$store.commit('addToCartBelomnimed', item);
},
addCartMinusBelomnimed(item){
    this.$store.commit('addToCartMinusBelomnimed', item);
},
removeFromBelomnimed(item){
    this.$store.commit('removeFromBelomnimed', item);
},
    addDinomed(item){
    this.$store.commit('addToCartDinomed', item);
},
addCartMinusDinomed(item){
    this.$store.commit('addToCartMinusDinomed', item);
},
removeFromDinomed(item){
    this.$store.commit('removeFromDinomed', item);
},
    addIhde(item){
    this.$store.commit('addToCartIhde', item);
},
addCartMinusIhde(item){
    this.$store.commit('addToCartMinusIhde', item);
},
removeFromIhde(item){
    this.$store.commit('removeFromIhde', item);
},
    addMeding(item){
    this.$store.commit('addToCartMeding', item);
},
addCartMinusMeding(item){
    this.$store.commit('addToCartMinusMeding', item);
},
removeFromMeding(item){
    this.$store.commit('removeFromMeding', item);
},
    addMedistom(item){
    this.$store.commit('addToCartMedistom', item);
},
addCartMinusMedistom(item){
    this.$store.commit('addToCartMinusMedistom', item);
},
removeFromMedistom(item){
    this.$store.commit('removeFromMedistom', item);
},
    addDental(item){
    this.$store.commit('addToCartDental', item);
},
addCartMinusDental(item){
    this.$store.commit('addToCartMinusDental', item);
},
removeFromDental(item){
    this.$store.commit('removeFromDental', item);
},
    addVmk(item){
    this.$store.commit('addToCartvmk', item);
},
addCartMinusVmk(item){
    this.$store.commit('addToCartMinusvmk', item);
},
removeFromVmk(item){
    this.$store.commit('removeFromvmk', item);
},
    addRovira(item){
    this.$store.commit('addToCartRovira', item);
},
addCartMinusRovira(item){
    this.$store.commit('addToCartMinusRovira', item);
},
removeFromRovira(item){
    this.$store.commit('removeFromRovira', item);
},
    addStomalux(item){
    this.$store.commit('addToCartStomalux', item);
},
addCartMinusStomalux(item){
    this.$store.commit('addToCartMinusStomalux', item);
},
removeFromStomalux(item){
    this.$store.commit('removeFromStomalux', item);
},
    addFordent(item){
    this.$store.commit('addToCartFordent', item);
},
addCartMinusFordent(item){
    this.$store.commit('addToCartMinusFordent', item);
},
removeFromFordent(item){
    this.$store.commit('removeFromFordent', item);
},
},

}
</script>
<style scoped>
@media screen and (max-width: 380px){
    .cart_footer{
         
        height: 274px !important
    
    }
    .order{
        width: 42.4% !important;
        height: 30px !important;
        margin-left: 30% !important;
        font-size: 14px !important
    }
    .total{
        height: 80px !important;
        margin-left: -1%;
    }
    .total_price{
        font-size: 15px !important;
        margin-left: 56% !important;
    }
    .cart_list{
        margin-top: -50px;
    }
    .header_cart{
        width: 90.13% !important;
        margin-left: 5.5% !important;  
    }
    
    .btn_remove{
        position: absolute;
        margin-top: 20px !important;
        margin-left: 30% !important;
    }
    .btn_remove img{
        width: 25px !important
    }
    li{
        height: 110px !important;
        margin-left: -8.7% !important;
        
    }
    .cart_item_name{
        font-size:12px !important;
        line-height: 120% !important;
        width: 50% !important
        
        
    }
    .cart_item_price{
        position: absolute;
        font-size: 14px !important;
        left: 60%;
        width: 20% !important
        
    }
    .btn_plus{
        position: absolute;
        width: 30px !important;
        margin-top: -45px;
        margin-left: 29.5%;    
    }
    .btn_minus{
        position: absolute;
        width: 30px !important;
        margin-left: 29.5%;
        margin-top: -15px !important;
    }
    .cart_item_col p {
        margin-top: -14px;
    }
    .cart_item_col {
        position: absolute;
        width: 30px !important;
        height: 28px !important;
        left: 71% !important;
        margin-top: -1px;

        
    }
}

button{
    outline: none;
}
.order:hover{
    background-color: #019393;
}
.btn_remove img:active{
width: 30px;
}
.order{
    width: 17.70%;
height: 56px;
margin-left: 72.2%;
margin-top:53px;
color: #ffffff;
background: #15DBC6;
border-radius: 1px;
}
.cart_footer{
    position: relative;
      width: 100%;
        height: 340px;
        left: 0px;
        margin-top:91px;
        background: #2A3950;
}
.wrapper{
    display: flex;
    width: 100%;
    flex-direction: column;
    
}
.header_cart{
   margin-top: 144px;
   margin-left: 11.45%;
   width: 78.4%;
}

.cart_item{
    
    width: 100%
    

    
}
.total_price{

font-family: 'Montserrat', sans-serif;
font-size: 30px;
line-height: 35px;
margin-left:78.98%;
color: #454A4A;
}
.total{
width: 100%;
height: 127px;
background: #E4E4E4;
display: flex;
align-items: center;

}

.btn_remove{

margin-left: 25px;
}
.btn_minus{
width: 65px;
height: 28px;
color: #ffffff;
margin-top: 1px;
background: #15DBC6;
}
.btn_plus:hover{
    background-color: #019393;
}
.btn_minus:hover{
    background-color: #019393;
}
.btn_plus{
width: 65px;
height: 28px;
color: #ffffff;

background: #15DBC6;
}
.btn_col{
display: flex;
flex-direction: column;
margin-left: 2.52%;

}
.cart_item_col{
display: inline-block;

width: 87px;
height: 52px;
border: 1px solid #019393;
box-sizing: border-box;

margin-left: 2%;
text-align: center;

padding-top: 15px;
}
.cart_item_price{


width: 10%;
margin-left:10px;


font-family: 'Montserrat', sans-serif;
font-size: 22px;
line-height: 26px;

color: #454A4A;
}
.cart_item_name{


width:60% ;

margin-left: 3%;


font-family: 'Montserrat', sans-serif;
font-size: 20px;
line-height: 26px;

color: #454A4A;

}
li:nth-child(odd){
background-color: #E4E4E4;;
}
li{
list-style: none;
height: 88px;
display: flex;
flex-direction: row;
align-items: center;
margin-left: -2.2%;

}


</style>
