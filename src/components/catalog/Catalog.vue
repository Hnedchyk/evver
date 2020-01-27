<template>
    <div class="filter_panel">

        <input type="text" class="filter_panel__search" placeholder="Введите название" v-model="search_catalog" v-on:input="ok=true">
        <div><a href = '/catalog'> <button><img src="/images/search.png" alt="" class="search_img_catalog"></button> </a></div>

        <div >
<select  class="filter_panel__category" v-model="selectCategory" >
    <option value="0">Все категории</option>
     <optgroup label="Cтоматологические материалы">
         <option value="1">Терапия</option>
         <option value="7">Эндодонтия</option>
         <option value="2">Ортопедия</option>
         <option value="4">Хирургия</option>
         <option value="3">Ортодонтия</option>
         <option value="15">Боры</option>
    </optgroup>
    <optgroup label="Стоматологическое оборудование">
<option value="5">Стоматологическое  оборудование
</option>
</optgroup>
 <optgroup label="Зуботехнические материалы">
<option value="16">Зуботехнические материалы</option>
</optgroup>
 <optgroup label="Зуботехническое оборудование">
<option value="9">Зуботехническое оборудование</option>
</optgroup>
 <optgroup label="Имплантология">
<option value="13">Имплантология</option>
</optgroup>
 <optgroup label="Медицинские материалы">
<option value="11">Офтальмология</option>
</optgroup>
 <optgroup label="Медицинское оборудование">
<option value="14">Медицинское оборудование</option>
</optgroup>
 <optgroup label="Медицинская мебель">
<option value="10">Медицинская мебель</option>
</optgroup>
  
    
</select>
        </div>
                <div class="prise_zag">Цена б/н</div>
        <div class="catalog">
            <div class="list_catalog">
                <ul>
                    <li v-for="belomnimed_item in filter_belomnimed" :key="belomnimed_item.id" class="item_catalog"> 
                        <div class="name"> {{belomnimed_item.name}} </div> 
                        <div class="price">{{belomnimed_item.price.toFixed(2)}}Br</div> 
                        <div><button class="addToCart" @click="addBelomnimed(belomnimed_item)">+</button></div>
                    </li>
                </ul>
                 <ul>
                    <li v-for="dinomed_item  in filter_dinomed" :key="dinomed_item.id" class="item_catalog"> 
                        <div class="name"> {{dinomed_item.name}} </div> 
                        <div class="price">{{dinomed_item.price.toFixed(2)}}Br</div> 
                        <div><button class="addToCart" @click="addCartDinomed(dinomed_item)">+</button></div>
                    </li>
                </ul>
                  <ul>
                    <li v-for="ihde_item in filter_ihde" :key="ihde_item.id" class="item_catalog"> 
                        <div class="name"> {{ihde_item.name}} </div> 
                        <div class="price">{{ihde_item.price}} Br</div> 
                        <div><button class="addToCart" @click="addCartIhde(ihde_item)">+</button></div>
                    </li>
                </ul>
                <ul>
                    <li v-for="meding_item in filter_meding" :key="meding_item.id" class="item_catalog"> 
                        <div class="name"> {{meding_item.name}} </div> 
                        <div class="price">{{meding_item.price}} Br</div> 
                        <div><button class="addToCart" @click="addCartMeding(meding_item)">+</button></div>
                    </li>
                </ul>
                <ul>
                    <li v-for="medistom_item in filter_medistom" :key="medistom_item.id" class="item_catalog"> 
                        <div class="name"> {{medistom_item.name}} </div> 
                        <div class="price">{{medistom_item.price}}</div> 
                        <div><button class="addToCart" @click="addCartMedistom(medistom_item)">+</button></div>
                    </li>
                </ul>
                <ul>
                    <li v-for="megdgen_item in filter_megdgen" :key="megdgen_item.id" class="item_catalog"> 
                        <div class="name"> {{megdgen_item.name}} </div> 
                        <div class="price">{{megdgen_item.price}}.00 Br</div> 
                        <div><button class="addToCart" @click="addCart(item)">+</button></div>
                    </li>
                </ul>
                <ul>
                    <li v-for="yonico in filter_yonico" :key="yonico.id" class="item_catalog"> 
                        <div class="name"> {{yonico.name}} </div> 
                        <div class="price">{{yonico.price}} </div> 
                        <div><button class="addToCart" @click="addCart(yonico)">+</button></div>
                    </li>
                </ul>
                 <ul>
                    <li v-for="rovira in filter_rovira" :key="rovira.id" class="item_catalog"> 
                        <div class="name"> {{rovira.name}} </div> 
                        <div class="price">{{rovira.price}}.00 Br</div> 
                        <div><button class="addToCart" @click="addCartRovira(rovira)">+</button></div>
                    </li>
                </ul>
                <ul>
                    <li v-for="stomalux_item in filter_stomalux" :key="stomalux_item.id" class="item_catalog"> 
                        <div class="name"> {{stomalux_item.name}} </div> 
                        <div class="price">{{stomalux_item.price}}</div> 
                        <div><button class="addToCart" @click="addCartStomalux(stomalux_item)">+</button></div>
                    </li>
                </ul>
                <ul>
                    <li v-for="fordent_item in filter_fordent" :key="fordent_item.id" class="item_catalog"> 
                        <div class="name"> {{fordent_item.name}} </div> 
                        <div class="price">{{fordent_item.price}}.00 Br</div> 
                        <div><button class="addToCart" @click="addCart(fordent_item)">+</button></div>
                    </li>
                     <li v-for="vmk in filter_vmk" :key="vmk.id" class="item_catalog"> 
                        <div class="name"> {{vmk.name}} </div> 
                        <div class="price">{{vmk.price}} Br</div> 
                        <div><button class="addToCart" @click="addCart(vmk)">+</button></div>

                    </li>
                     <li v-for="dental in filter_dental" :key="dental.id" class="item_catalog"> 
                        <div class="name"> {{dental.name}} </div> 
                        <div class="price">{{dental.price}} </div> 
                        <div><button class="addToCart" @click="addCart(dental)">+</button></div>
                        
                    </li>      
                                   </ul>
                


            </div>
            <button class="load_more" v-on:click="ok=true">
                Показать все результаты
            </button>



        </div>

        <div class="footer_catalog">
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

        data() {
            return {
                ok: false,
                category: false,
                podcategory: false,
                podcategory1: false,
                search_catalog: '',
                belomnimed:[],
                dinomed:[],
                ihde:[],
                meding:[],
                medistom:[],
                megdgen:[],
                yonico:[],
                rovira:[],
                stomalux:[],
                fordent:[],
                dental:[],
                vmk:[],
                errors: [],
                selectCategory: 0,
                
            }

        },
        
     created() {
        //   axios.get('https://react-evver.firebaseio.com/vmk.json')
        //         .then(response => {
        //             this.vmk = response.data
        //         })
        //         .catch(e => {
        //             this.errors.push(e)
        //         })
        //  axios.get('https://react-evver.firebaseio.com/dental.json')
        //         .then(response => {
        //             this.dental = response.data
        //         })
        //         .catch(e => {
        //             this.errors.push(e)
        //         })
            axios.get('https://react-evver.firebaseio.com/belomnimed.json')
                .then(response => {
                    this.belomnimed = response.data
                })
                .catch(e => {
                    this.errors.push(e)
                })
            //  axios.get('https://react-evver.firebaseio.com/dinomed.json')
            //     .then(response => {
            //         this.dinomed = response.data
            //     })
            //     .catch(e => {
            //         this.errors.push(e)
            //     })
            //     axios.get('https://react-evver.firebaseio.com/ihde.json')
            //     .then(response => {
            //         this.ihde = response.data
            //     })
            //     .catch(e => {
            //         this.errors.push(e)
            //     })
            //      axios.get('https://react-evver.firebaseio.com/meding.json')
            //     .then(response => {
            //         this.meding = response.data
            //     })
            //     .catch(e => {
            //         this.errors.push(e)
            //     })
            //      axios.get('https://react-evver.firebaseio.com/medistom.json')
            //     .then(response => {
            //         this.medistom = response.data
            //     })
            //     .catch(e => {
            //         this.errors.push(e)
            //     })
                
            //     .catch(e => {
            //         this.errors.push(e)
            //     })
            //      axios.get('https://react-evver.firebaseio.com/yonico.json')
            //     .then(response => {
            //         this.yonico = response.data
            //     })
            //     .catch(e => {
            //         this.errors.push(e)
            //     })
            //       axios.get('https://react-evver.firebaseio.com/rovira.json')
            //     .then(response => {
            //         this.rovira = response.data
            //     })
            //     .catch(e => {
            //         this.errors.push(e)
            //     })
            //       axios.get('https://react-evver.firebaseio.com/stomalux.json')
            //     .then(response => {
            //         this.stomalux = response.data
            //     })
            //     .catch(e => {
            //         this.errors.push(e)
            //     })
            //       axios.get('https://react-evver.firebaseio.com/fordent.json')
            //     .then(response => {
            //         this.fordent = response.data
            //     })
            //     .catch(e => {
            //         this.errors.push(e)
            //     })
            
        },
 
        computed: {
       
filter_belomnimed: function() {
    return this.belomnimed
        .filter(product => {
            return this.selectCategory == 0 || product.category_id== this.selectCategory;
        })
        .filter(product => {
            return this.search_catalog == '' || product.name.toLowerCase().indexOf(this.search_catalog.toLowerCase()) !== -1;
        });
},
            filter_dinomed: function() {
    return this.dinomed
        .filter(product => {
            return this.selectCategory == 0 || product.category_id== this.selectCategory;
        })
        .filter(product => {
            return this.search_catalog == '' || product.name.toLowerCase().indexOf(this.search_catalog.toLowerCase()) !== -1;
        });
},
             filter_ihde: function() {
    return this.ihde
        .filter(product => {
            return this.selectCategory == 0 || product.category_id== this.selectCategory;
        })
        .filter(product => {
            return this.search_catalog == '' || product.name.toLowerCase().indexOf(this.search_catalog.toLowerCase()) !== -1;
        });
},
              filter_meding: function() {
    return this.meding
        .filter(product => {
            return this.selectCategory == 0 || product.category_id== this.selectCategory;
        })
        .filter(product => {
            return this.search_catalog == '' || product.name.toLowerCase().indexOf(this.search_catalog.toLowerCase()) !== -1;
        });
},
            filter_medistom: function() {
    return this.medistom
        .filter(product => {
            return this.selectCategory == 0 || product.category_id== this.selectCategory;
        })
        .filter(product => {
            return this.search_catalog == '' || product.name.toLowerCase().indexOf(this.search_catalog.toLowerCase()) !== -1;
        });
},
             filter_megdgen: function() {
    return this.megdgen
        .filter(product => {
            return this.selectCategory == 0 || product.category_id== this.selectCategory;
        })
        .filter(product => {
            return this.search_catalog == '' || product.name.toLowerCase().indexOf(this.search_catalog.toLowerCase()) !== -1;
        });
},
               filter_yonico: function() {
    return this.yonico
        .filter(product => {
            return this.selectCategory == 0 || product.category_id== this.selectCategory;
        })
        .filter(product => {
            return this.search_catalog == '' || product.name.toLowerCase().indexOf(this.search_catalog.toLowerCase()) !== -1;
        });
},
             filter_rovira: function() {
    return this.rovira
        .filter(product => {
            return this.selectCategory == 0 || product.category_id== this.selectCategory;
        })
        .filter(product => {
            return this.search_catalog == '' || product.name.toLowerCase().indexOf(this.search_catalog.toLowerCase()) !== -1;
        });
},
             filter_stomalux: function() {
    return this.stomalux
        .filter(product => {
            return this.selectCategory == 0 || product.category_id== this.selectCategory;
        })
        .filter(product => {
            return this.search_catalog == '' || product.name.toLowerCase().indexOf(this.search_catalog.toLowerCase()) !== -1;
        });
},
              filter_fordent: function() {
    return this.fordent
        .filter(product => {
            return this.selectCategory == 0 || product.category_id== this.selectCategory;
        })
        .filter(product => {
            return this.search_catalog == '' || product.name.toLowerCase().indexOf(this.search_catalog.toLowerCase()) !== -1;
        });
},

              filter_vmk: function() {
    return this.vmk
        .filter(product => {
            return this.selectCategory == 0 || product.category_id== this.selectCategory;
        })
        .filter(product => {
            return this.search_catalog == '' || product.name.toLowerCase().indexOf(this.search_catalog.toLowerCase()) !== -1;
        });
},

              filter_dental: function() {
    return this.dental
        .filter(product => {
            return this.selectCategory == 0 || product.category_id== this.selectCategory;
        })
        .filter(product => {
            return this.search_catalog == '' || product.name.toLowerCase().indexOf(this.search_catalog.toLowerCase()) !== -1;
        });
},
 
        },
        


       methods: {
    addCart(yonico) {
        this.$store.commit('addToCart', yonico);
    },
    addBelomnimed(belomnimed_item){
        this.$store.commit('addToCartBelomnimed', belomnimed_item);
    },
    addCartDinomed(dinomed_item){
    this.$store.commit('addToCartDinomed', dinomed_item);
},
addCartIhde(ihde_item){
    this.$store.commit('addToCartIhde', ihde_item);

},
addCartMeding(meding_item){
    this.$store.commit('addToCartMeding', meding_item);
},
addCartMedistom(medistom_item){
    this.$store.commit('addToCartMedistom', medistom_item);
},
addCartDental(dental_item){
    this.$store.commit('addToCartDental', dental_item);
},
addCartvmk(vmk_item){
    this.$store.commit('addToCartvmk', vmk_item);
},
addCartRovira(rovira_item){
    this.$store.commit('addToCartRovira', rovira_item);
},
addCartStomalux(stomalux_item){
    this.$store.commit('addToCartStomalux', stomalux_item);
},
addCartFordent(fordent_item){
    this.$store.commit('addToCartFordent', fordent_item);
},

},

    
    }

</script>
<style scoped>
@media screen and (max-width: 380px){
    .footer_catalog{
        height: 274px !important
    }
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
    
    
    .prise_zag{
        font-size :14px !important;
        margin-top: -80px;
        margin-left:-7%
    }
    .list_catalog{
        height: 220px !important;
        margin-top: -100px;
        
    }
    .load_more{
        width: 59.2% !important;
        height: 30px !important;
        font-size: 14px !important;
        margin-left: -17%; 
    }
    .addToCart{
        font-size: 40px !important;
        margin-left: 20PX;
    }
    .price{
        font-size: 14px !important;
    }
    
    .name{
        font-size: 12px !important;
        line-height: 120% !important;
        width: 60% !important;
    }
    .item_catalog{
        width: 90.13% !important;
        margin-left: 2% !important;
        
    }
    .show_brand img{
        width: 10px;
    }
    .show_brand{
      margin-left: -4%;
        margin-top: -42px;   
    }
    .show{
        margin-left: -4%;
        margin-top: -42px;  
    }
    .show img {
        width: 10px;
    
    }
    .filter_panel__brand p{
        margin-top: -7px;
    }
    .filter_panel__brand{
        height: 32px !important;
        font-size: 12px !important;
        padding-left: 2%;
        margin-top: -30px;
        
    }
    .filter_panel__category{
        height: 32px !important;
        font-size: 12px !important;
        padding-left: 2%;
        margin-top: -30px;
        width: 77.08%;
    }
    .filter_panel{
        margin-top: -50px;
        height: 186px !important;
    }
    .search_img_catalog{
        width: 22px !important;
        margin-left: -5%;
        margin-top: -5px;
    }
    .filter_panel__search{
        height: 34px !important;
        font-size:  14px !important;
    }
}
    .list_catalog::-webkit-scrollbar-button {
        width: 12px;
        background-color: #15DBC6;
    }
   

    .list_catalog::-webkit-scrollbar {
        width: 12px;
        background-color: #FFFFFF;
    }

    .list_catalog::-webkit-scrollbar-thumb {
        width: 8px;
        background-color: #15DBC6;
    }

    .footer_catalog {
        position: relative;
        width: 100%;
        height: 340px;
        left: 0px;
        top: 400px;

        background: #2A3950;
    }

    button {
        outline: none
    }

    .search_img_catalog {
        position: absolute;
        left: 85.20%;
        top: 31px;
    }
    .load_more:hover{
      background-color:   #019393;
    }

    .load_more {
        position: relative;
        width: 350px;
        height: 56px;
        top: 350px;
        left: 37.84%;
        color: #fff;


        background: #15DBC6;
        border-radius: 1px;
    }


.addToCart:active{
color: #019393;
}

    .addToCart {

        
    
        
    
    
    
    
    color:#15DBC6;
outline: none;
font-family:   'Montserrat', sans-serif;
font-size: 36px;
line-height: 42px;
font-weight: 500;
        
   
    }
  
    
    .price {
    margin-left: 5%;
width: 15%;     
font-family: 'Montserrat', sans-serif;
font-size: 22px;
line-height: 26px;

color: #454A4A;
    }

    .prise_zag {
        position: absolute;
        top:240px;
        left: 69%;
        font-family: 'Montserrat', sans-serif;
        font-size: 22px;
        line-height: 26px;

        color: #454A4A;

    }

    .name {
    width: 66.75%;
margin-left: 3.78%;



font-family: 'Montserrat', sans-serif;
font-size: 20px;
line-height: 26px;

color: #454A4A;
    }
    li{
        list-style: none
    }

    .list_catalog {
    width: 100%;  
    position: relative;
    top: 300px; 
    overflow:scroll;
    overflow-x: hidden;
    height: 550px; 
    

    }

    .item_catalog {
        width: 77.08%;
        margin-top: 20px;
             display: flex; 
             align-items: center;
     height: 88px;
margin-left: 11.45%;


border: 1px solid #C9C9C9;
box-sizing: border-box;  


    }

    .podcategory_list {
        position: absolute;
        left: 100%;
        width: 100%;
        background-color: #fff;



    }

    .show_brand {
        position: absolute;
        top: 144px;
        left: 85.83%;
    }

    .show {
        position: absolute;
        top: 144px;
        left: 46.66%;

    }

    .category_list {
        position: absolute;
        width: 37.5%;
        left: 11.45%;
        top: 180px;
        background-color: #fff;
        z-index: 1;




    }

    .category_list button {
        position: relative;
        left: 5%;
        
border: 1px solid #C9C9C9;
box-sizing: border-box;
        width: 90%;
        margin-top: 2px;
    }

    .filter_panel__brand {
        position: absolute;
        width: 37.5%;
        height: 52px;
        left: 51.39%;
        top: 128px;
        text-align: center;
        font-family: 'Montserrat', sans-serif;
        font-size: 22px;
        line-height: 26px;

        color: #000000;

        background: #FFFFFF;
    }

    .filter_panel__brand p {
        position: absolute;
        top: 10px;
        
    }

    .filter_panel__category p {
        position: absolute;
        top: 10px;
        left: 37%;
        
    }
   

    .filter_panel__category {
        position: absolute;
        padding-left:3.78%;
        
        height: 52px;
        left:11.45%;
        top: 128px;
        text-align: center;

        font-family: 'Montserrat', sans-serif;
        font-size: 20px;
        line-height: 26px;

        color: #000000;

        background: #FFFFFF;
        border-radius: 0px !important;
    }

    .filter_panel {

        position: relative;
        width: 100%;
        height: 272px;

        top: 124px;

        background: #E4E4E4;
    }

    .filter_panel__search {
        position: absolute;
        width: 77.08%;
        height: 52px;
        left: 11.45%;
        top: 20px;

        background: #FFFFFF;
        padding-left: 3.78%;
        outline: none
    }

</style>
