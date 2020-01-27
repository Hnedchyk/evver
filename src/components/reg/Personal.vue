<template>
<div class="personal">    
    <div class="personal_text">Личный кабинет</div>
    <div class="personal_block_btn">
        <a href="/inf" class="list_info"><button > Личная информация</button></a> 
        <a href="/personal" class="zakaz"><button >Мои заказы</button></a>
    </div>
    
    <button class="logOut" v-for="(linksExit, i) in linksExit"
        :key="i"
        :to="linksExit.url"
        text><a href="/"  @click="onLogout" class="logOut_href">{{linksExit.title}}</a></button>
    <div class="zakaz_list" >
        <div class="zakaz_list_li_block">
            <div class="zakaz_number">Заказ № 1</div>
            <!-- <div class="zakaz_data">30.11.2019</div > -->
            <button  class="show_list" v-on:click="provider_inf=!provider_inf">{{provider_inf? 'Свернуть':'Показать' }}</button>
            
        
        </div>
        <div class="zakaz_list" v-show="provider_inf" v-if="$store.state.cart.length > 0" >
             
            <ul v-for="item in $store.state.cart"
                :key="item.id">
                <li class="li_personal"><span class="personal_item_name">{{item.name}}</span>
                    <span class="personal_item_price"> {{item.totalPrice}} Br</span>
                    <span class="personal_item_col"><p>{{ item.quantity  }}</p></span>
                    <div class="personal_btn_col">
                        <button class="personal_btn_plus" @click="addCart(item)" >+</button>
                        <button class="personal_btn_minus" @click="addCartMinus(item)">-</button></div>
                    <div>
                        <button class="personal_btn_remove" @click.prevent="removeFromCart(item)" ><img src="images/remove.png" alt="" ></button>
                    </div>
                </li>
            </ul>
            <div class="provider_block" >
          <div class="provider_head" >
          <div class="provider">Контакт</div>
          <div class="btn_block" ><button v-on:click="provider_block=!provider_block"><img src="/images/show.png" alt=""></button></div>
            <span class="personal_total">Итог {{totalPrice}} Br</span>
            </div>
        <div class="provider_inf" v-show="provider_block" >
            <div class="provider_inf_text">ЧУП "ЮНИКО-ДЕНТАЛ"<br>
ул. М.Танка, 20, офис 205 <br>
Email: younico@tut.by <br>
8 (017) 374-87-14 тел/факс <br>
8 (017) 374-25-81 <br>
8 (029) 660-46-16 (VEL) <br>
8 (029) 660-46-10"</div>
        </div>
    </div>
        
      </div>
      <div class="zakaz_list" v-show="provider_inf" v-if="$store.state.belomnimed.length > 0" >
             
            <ul v-for="item in $store.state.belomnimed"
                :key="item.id">
                <li class="li_personal"><span class="personal_item_name">{{item.name}}</span>
                    <span class="personal_item_price"> {{item.totalPrice}} Br</span>
                    <span class="personal_item_col"><p>{{ item.quantity  }}</p></span>
                    <div class="personal_btn_col">
                        <button class="personal_btn_plus" @click="addBelomnimed(item)" >+</button>
                        <button class="personal_btn_minus" @click="addCartMinusBelomnimed(item)">-</button></div>
                    <div>
                        <button class="personal_btn_remove" @click.prevent="removeFromBelomnimed(item)" ><img src="images/remove.png" alt="" ></button>
                    </div>
                </li>
            </ul>
            <div class="provider_block" >
          <div class="provider_head" >
          <div class="provider">Контакт</div>
          <div class="btn_block" ><button v-on:click="provider_block_belomnimed=!provider_block_belomnimed"><img src="/images/show.png" alt=""></button></div>
            <span class="personal_total">Итог {{totalPriceBelomnimed}} Br</span>
            </div>
        <div class="provider_inf" v-show="provider_block_belomnimed" >
            <div class="provider_inf_text">
БЕЛОМНИМЕД<br>
1-й Твердый переулок 5-101а<br>
220037 Минск, Беларусь <br>
Email: info@belomnimed.by <br>
+375172948511 для оптовой торговли <br>
+375172853444 для оптовой торговли <br>
+37517210052 2факс 
+375173509021 розничный магазин "Дэнтстор" </div>
        </div>
    </div>
        
      </div>
       <div class="zakaz_list" v-show="provider_inf" v-if="$store.state.dinomed.length > 0" >
             
            <ul v-for="item in $store.state.dinomed"
                :key="item.id">
                <li class="li_personal"><span class="personal_item_name">{{item.name}}</span>
                    <span class="personal_item_price"> {{item.totalPrice}} Br</span>
                    <span class="personal_item_col"><p>{{ item.quantity  }}</p></span>
                    <div class="personal_btn_col">
                        <button class="personal_btn_plus" @click="addDinomed(item)" >+</button>
                        <button class="personal_btn_minus" @click="addCartMinusDinomed(item)">-</button></div>
                    <div>
                        <button class="personal_btn_remove" @click.prevent="removeFromDinomed(item)" ><img src="images/remove.png" alt="" ></button>
                    </div>
                </li>
            </ul>
            <div class="provider_block" >
          <div class="provider_head" >
          <div class="provider">Контакт</div>
          <div class="btn_block" ><button v-on:click="provider_block_dinomed=!provider_block_dinomed"><img src="/images/show.png" alt=""></button></div>
            <span class="personal_total">Итог {{totalPriceDinomed}} Br</span>
            </div>
        <div class="provider_inf" v-show="provider_block_dinomed" >
            <div class="provider_inf_text">
"ООО Дина Интернешнл" <br>
г. Минск, ул. Немига, 40, 1-ый подъезд, 8-ой этаж <br>
Email: ab@dinamed.by <br>
+375 (17) 200-69-25 <br>
+375 (17) 200-69-47 <br>
+375 (17) 200-50-70 <br>
+375 (29) 144-66-74"		 </div>
        </div>
    </div>
        
      </div>
       <div class="zakaz_list" v-show="provider_inf" v-if="$store.state.ihde.length > 0" >
             
            <ul v-for="item in $store.state.ihde"
                :key="item.id">
                <li class="li_personal"><span class="personal_item_name">{{item.name}}</span>
                    <span class="personal_item_price"> {{item.totalPrice}} Br</span>
                    <span class="personal_item_col"><p>{{ item.quantity  }}</p></span>
                    <div class="personal_btn_col">
                        <button class="personal_btn_plus" @click="addIhde(item)" >+</button>
                        <button class="personal_btn_minus" @click="addCartMinusIhde(item)">-</button></div>
                    <div>
                        <button class="personal_btn_remove" @click.prevent="removeFromIhde(item)" ><img src="images/remove.png" alt="" ></button>
                    </div>
                </li>
            </ul>
            <div class="provider_block" >
          <div class="provider_head" >
          <div class="provider">Контакт</div>
          <div class="btn_block" ><button v-on:click="provider_block_ihde=!provider_block_ihde"><img src="/images/show.png" alt=""></button></div>
            <span class="personal_total">Итог {{totalPriceIhde}} Br</span>
            </div>
        <div class="provider_inf" v-show="provider_block_ihde" >
            <div class="provider_inf_text">
ООО «ВанвейБиомед» <br>
г. Минск, ул. Кропоткина 84, офис 117 <br>
Email: info@swissbiomed.ru <br>
+375 29 997 99 99 <br>
+375 29 643 20 00 <br>
+375 29 313 20 00"		 </div>
        </div>
    </div>
       </div>
     <div class="zakaz_list" v-show="provider_inf" v-if="$store.state.meding.length > 0" >
             
            <ul v-for="item in $store.state.meding"
                :key="item.id">
                <li class="li_personal"><span class="personal_item_name">{{item.name}}</span>
                    <span class="personal_item_price"> {{item.totalPrice}} Br</span>
                    <span class="personal_item_col"><p>{{ item.quantity  }}</p></span>
                    <div class="personal_btn_col">
                        <button class="personal_btn_plus" @click="addMeding(item)" >+</button>
                        <button class="personal_btn_minus" @click="addCartMinusMeding(item)">-</button></div>
                    <div>
                        <button class="personal_btn_remove" @click.prevent="removeFromMeding(item)" ><img src="images/remove.png" alt="" ></button>
                    </div>
                </li>
            </ul>
            <div class="provider_block" >
          <div class="provider_head" >
          <div class="provider">Контакт</div>
          <div class="btn_block" ><button v-on:click="provider_block_meding=!provider_block_meding"><img src="/images/show.png" alt=""></button></div>
            <span class="personal_total">Итог {{totalPriceMeding}} Br</span>
            </div>
        <div class="provider_inf" v-show="provider_block_meding" >
            <div class="provider_inf_text">
ООО "Мединг Групп" <br>
Беларусь, Минск, ул. Красная, 17Б, оф. 17 <br>
Email: 1@meding.by <br>
Тел./факс: +375 17 3881511 <br>
Velcom: +375 29 3881511"	 </div>
        </div>
    </div>
        
      </div>
      <div class="zakaz_list" v-show="provider_inf" v-if="$store.state.medistom.length > 0" >
             
            <ul v-for="item in $store.state.medistom"
                :key="item.id">
                <li class="li_personal"><span class="personal_item_name">{{item.name}}</span>
                    <span class="personal_item_price"> {{item.totalPrice}} Br</span>
                    <span class="personal_item_col"><p>{{ item.quantity  }}</p></span>
                    <div class="personal_btn_col">
                        <button class="personal_btn_plus" @click="addMedistom(item)" >+</button>
                        <button class="personal_btn_minus" @click="addCartMinusMedistom(item)">-</button></div>
                    <div>
                        <button class="personal_btn_remove" @click.prevent="removeFromMedistom(item)" ><img src="images/remove.png" alt="" ></button>
                    </div>
                </li>
            </ul>
            <div class="provider_block" >
          <div class="provider_head" >
          <div class="provider">Контакт</div>
          <div class="btn_block" ><button v-on:click="provider_block_medistom=!provider_block_medistom"><img src="/images/show.png" alt=""></button></div>
            <span class="personal_total">Итог {{totalPriceMedistom}} Br</span>
            </div>
        <div class="provider_inf" v-show="provider_block_medistom" >
            <div class="provider_inf_text">
ООО "Медистом" <br>
220116 г.Минск, <br>
пр-т им. Газеты ""Правда"" 15, пом.243 <br>
Email: info@medistom.biz <br>
+375 (17) 305 84 86 
+375 (17) 271 84 90 
+375 (17) 362 98 83 <br>
+375 (17) 362 98 84 
+375 (17) 362 98 86 <br>
+375 (29) 662 98 82 
+375 (29) 662 98 86 
+375 (33) 362 98 00	 </div>
        </div>
    </div>
        
      </div>
       <div class="zakaz_list" v-show="provider_inf" v-if="$store.state.dental.length > 0" >
             
            <ul v-for="item in $store.state.dental"
                :key="item.id">
                <li class="li_personal"><span class="personal_item_name">{{item.name}}</span>
                    <span class="personal_item_price"> {{item.totalPrice}} Br</span>
                    <span class="personal_item_col"><p>{{ item.quantity  }}</p></span>
                    <div class="personal_btn_col">
                        <button class="personal_btn_plus" @click="addDental(item)" >+</button>
                        <button class="personal_btn_minus" @click="addCartMinusDental(item)">-</button></div>
                    <div>
                        <button class="personal_btn_remove" @click.prevent="removeFromDental(item)" ><img src="images/remove.png" alt="" ></button>
                    </div>
                </li>
            </ul>
            <div class="provider_block" >
          <div class="provider_head" >
          <div class="provider">Контакт</div>
          <div class="btn_block" ><button v-on:click="provider_block_dental=!provider_block_dental"><img src="/images/show.png" alt=""></button></div>
            <span class="personal_total">Итог {{totalPriceDental}} Br</span>
            </div>
        <div class="provider_inf" v-show="provider_block_dental" >
            <div class="provider_inf_text">
ЗАО ''Белмедпоставка''<br>
ул. Беды, д.8, 220001 Минск<br>
Email: leonida_bedy8@rambler.ru<br>
(017) 247-89-99<br>
8029 670 32 88<br>
8044 753 55 55<br>
г. Минск, ул. М.Танка, 20, к. 245<br>
220004 Минск<br>
Email: minskoffice11@mail.ru<br>
(017) 211-25-72<br>
8029 846 55 55<br>
8029 122 00 33<br>
8029 551 55 55</div>
        </div>
    </div>
        
      </div>
       <div class="zakaz_list" v-show="provider_inf" v-if="$store.state.vmk.length > 0" >
             
            <ul v-for="item in $store.state.vmk"
                :key="item.id">
                <li class="li_personal"><span class="personal_item_name">{{item.name}}</span>
                    <span class="personal_item_price"> {{item.totalPrice}} Br</span>
                    <span class="personal_item_col"><p>{{ item.quantity  }}</p></span>
                    <div class="personal_btn_col">
                        <button class="personal_btn_plus" @click="addVmk(item)" >+</button>
                        <button class="personal_btn_minus" @click="addCartMinusVmk(item)">-</button></div>
                    <div>
                        <button class="personal_btn_remove" @click.prevent="removeFromVmk(item)" ><img src="images/remove.png" alt="" ></button>
                    </div>
                </li>
            </ul>
            <div class="provider_block" >
          <div class="provider_head" >
          <div class="provider">Контакт</div>
          <div class="btn_block" ><button v-on:click="provider_block_vmk=!provider_block_vmk"><img src="/images/show.png" alt=""></button></div>
            <span class="personal_total">Итог {{totalPriceVmk}} Br</span>
            </div>
        <div class="provider_inf" v-show="provider_block_vmk" >
            <div class="provider_inf_text">
ЧТУП "ВМК-Дент" <br>
Email: torg@vmk-dent.by<br>
Розничный отдел:<br>
г. Минск, ул. Академическая, д.17-2н, 220012, Беларусь<br>
Тел.: (017) 331 11 87.<br>
Факс: (017) 296 60 27.<br>
Юридичемки отдел:<br>
г. Минск, ул. Платонова, 49, корпус Б, офис Б106.<br>
Тел.: (017) 361 1 361, 361 1 360<br>
                  361 11 87, 361 74 87<br>
Факс: (017) 361 00 24<br>
А1: (029) 684 89 10<br>
МТС: (029) 597 94 49<br>
        </div>
    </div>
        
      </div>
      <div class="zakaz_list" v-show="provider_inf" v-if="$store.state.rovira.length > 0" >
             
            <ul v-for="item in $store.state.rovira"
                :key="item.id">
                <li class="li_personal"><span class="personal_item_name">{{item.name}}</span>
                    <span class="personal_item_price"> {{item.totalPrice}} Br</span>
                    <span class="personal_item_col"><p>{{ item.quantity  }}</p></span>
                    <div class="personal_btn_col">
                        <button class="personal_btn_plus" @click="addRovira(item)" >+</button>
                        <button class="personal_btn_minus" @click="addCartMinusRovira(item)">-</button></div>
                    <div>
                        <button class="personal_btn_remove" @click.prevent="removeFromRovira(item)" ><img src="images/remove.png" alt="" ></button>
                    </div>
                </li>
            </ul>
            <div class="provider_block" >
          <div class="provider_head" >
          <div class="provider">Контакт</div>
          <div class="btn_block" ><button v-on:click="provider_block_rovira=!provider_block_rovira"><img src="/images/show.png" alt=""></button></div>
            <span class="personal_total">Итог {{totalPriceRovira}} Br</span>
            </div>
        <div class="provider_inf" v-show="provider_block_rovira" >
            <div class="provider_inf_text">
                ООО "Ровира"<br>
г. Минск, ул. Кропоткина, 93<br>
Email: info@rovira.by<br>
+375 (17) 237-76-81<br>
+375 (29) 665-19-85<br>
+375 (29) 879-09-90<br>
 </div>
        </div>
    </div>
        
      </div>
       <div class="zakaz_list" v-show="provider_inf" v-if="$store.state.stomalux.length > 0" >
             
            <ul v-for="item in $store.state.stomalux"
                :key="item.id">
                <li class="li_personal"><span class="personal_item_name">{{item.name}}</span>
                    <span class="personal_item_price"> {{item.totalPrice}} Br</span>
                    <span class="personal_item_col"><p>{{ item.quantity  }}</p></span>
                    <div class="personal_btn_col">
                        <button class="personal_btn_plus" @click="addStomalux(item)" >+</button>
                        <button class="personal_btn_minus" @click="addCartMinusStomalux(item)">-</button></div>
                    <div>
                        <button class="personal_btn_remove" @click.prevent="removeFromStomalux(item)" ><img src="images/remove.png" alt="" ></button>
                    </div>
                </li>
            </ul>
            <div class="provider_block" >
          <div class="provider_head" >
          <div class="provider">Контакт</div>
          <div class="btn_block" ><button v-on:click="provider_block_stomalux=!provider_block_stomalux"><img src="/images/show.png" alt=""></button></div>
            <span class="personal_total">Итог {{totalPriceStomalux}} Br</span>
            </div>
        <div class="provider_inf" v-show="provider_block_stomalux" >
            <div class="provider_inf_text">
                "УП ""Стомалюкс"<br>
220069, г.Минск, пр-т Дзержинского, д. 9, <br>
офис 1041 (1 этаж, вход со двора)<br>
Email: stomalux@tut.by<br>
+375 29 566 03 23 (МТС)<br>
+375 44 592 65 78 (А1)<br>
+375 17 374 50 50"<br>
 </div>
        </div>
    </div>
        
      </div>
        <div class="zakaz_list" v-show="provider_inf" v-if="$store.state.fordent.length > 0" >
             
            <ul v-for="item in $store.state.fordent"
                :key="item.id">
                <li class="li_personal"><span class="personal_item_name">{{item.name}}</span>
                    <span class="personal_item_price"> {{item.totalPrice}} Br</span>
                    <span class="personal_item_col"><p>{{ item.quantity  }}</p></span>
                    <div class="personal_btn_col">
                        <button class="personal_btn_plus" @click="addFordent(item)" >+</button>
                        <button class="personal_btn_minus" @click="addCartMinusFordent(item)">-</button></div>
                    <div>
                        <button class="personal_btn_remove" @click.prevent="removeFromFordent(item)" ><img src="images/remove.png" alt="" ></button>
                    </div>
                </li>
            </ul>
            <div class="provider_block" >
          <div class="provider_head" >
          <div class="provider">Контакт</div>
          <div class="btn_block" ><button v-on:click="provider_block_fordent=!provider_block_fordent"><img src="/images/show.png" alt=""></button></div>
            <span class="personal_total">Итог {{totalPriceFordent}} Br</span>
            </div>
        <div class="provider_inf" v-show="provider_block_fordent" >
            <div class="provider_inf_text">
            ООО "Фордент"<br>
ул. Петра Мстиславца, 24 <br>
офис 161, этаж цокольный <br>
Email: <br>
+375 44 710-61-09<br>
+375 29 603-13-28<br>
 </div>
        </div>
    </div>
        
      </div>
    <div class="general_total__block">
        <div class="general_total">Общий итог {{ totalPriceBelomnimed+=totalPrice+=totalPriceDinomed+=totalPriceIhde+=totalPriceMeding+=totalPriceMedistom+=totalPriceDental +=totalPriceVmk+=totalPriceStomalux+=totalPriceFordent}}Br</div>
        </div>  
    
    <div class="personal_btn_show_block" ><button class="personal_btn_show">Показать больше</button></div>
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

export default {
    data(){
        return{
            provider_inf:false,
            provider_block:false,
            provider_block_belomnimed:false,
            provider_block_dinomed:false,
            provider_block_ihde:false,
             provider_block_meding:false,
             provider_block_medistom:false,
             provider_block_dental:false,
             provider_block_vmk:false,
             provider_block_rovira:false,
             provider_block_stomalux:false,
             provider_block_fordent:false,
        }
   
},
  computed: {
         linksExit(){
      if (this.isUserLoggedIn){
        return[
          {title: 'Выход'}
        ]
      }
      return[]
    },
    isUserLoggedIn(){
      return this.$store.getters.isUserLoggedIn
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
       
    addCart(item){
         this.$store.commit('addToCart', item);
    },
    removeFromCart(item) {
        this.$store.commit('removeFromCart', item);
    },
    addCartMinus(item){
       this.$store.commit('addToCartMinus', item); 
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
    this.$store.commit('removeFromVmk', item);
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
// general(){
//     this.totalPrice+=this.totalPriceBelomnimed
// },
 onLogout(){
      this.$store.dispatch('logoutUser')
      this.$router.push('/')}

},


}
</script>
<style>
@media screen and (min-width: 380px){
.logOut{
    display: none !important;
}
}
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
    .logOut{
         
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
    height: 100%;
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


text-align: center;

padding-top: 15px;
}
.personal_item_price{
    width: 8%;
    margin-left:20px;

   


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
    margin-top: 30px;
    display: flex;
    align-items: center
}
.list_info button{
    color: #019393;
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
.zakaz button{
    color: #ffffff;
}
.logOut_href{
    color: white !important;
    text-decoration: none;
}
.logOut{
   text-decoration: none;
    display: flex;
    justify-content:center;
    width: 32.5%;
    color: #ffffff;
height: 54px;
margin-left: 33.75%;
margin-top: 30px;

background: #019393;
border-radius: 1px; 
}
.zakaz{
    text-decoration: none;
    display: flex;
    justify-content:center;
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
</style>