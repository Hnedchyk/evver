<template>
<div app>
    <div class="wrapper_nav">
      <router-view class="rout"/>
        <a href="/"><div class="logo">
         
            <div>
               
                <img src="/images/logotest.svg" alt="" class="logo_svg">
                 
            </div>
           
        </div></a>
        
        <div class="links">

           <button> <a href="/catalog" class="catalog_links"  v-for="(linkCat, i) in linksCatalog"
        :key="i"
        :to="linkCat.url"
        text>{{linkCat.title}}</a></button>
        <button><a href="/catalog" class="catalog_linksReg"  v-for="(linkCat, i) in linksCatalogReg"
        :key="i"
        :to="linkCat.url"
        text>{{linkCat.title}}</a></button>
        <button class="personalLinkReg_block"><a href="/personal"  v-for="(linksPersonal, i) in linksPersonal"
        :key="i"
        :to="linksPersonal.url"
        text ><div class="personalLinkReg" ><img src="/images/personal.png" alt=""></div></a></button>
        <button><a href="/cart" class="cartLinkReg_block" v-for="(linksCartReg, i) in linksCartReg"
        :key="i"
        :to="linksCartReg.url"
        text><div class="catrtLinkReg"><img src="/images/cartReg.png" alt=""></div></a></button>

           <button> <a href="/cart" class="cart_link" v-for="(linksCart, i) in linksCart"
        :key="i"
        :to="linksCart.url"
        text>{{linksCart.title}}</a></button>
            <div class="count" v-for="(linksCartReg, i) in linksCartReg"
        :key="i">{{$store.state.cart.length +$store.state.belomnimed.length+$store.state.dinomed.length+$store.state.ihde.length+$store.state.meding.length+$store.state.medistom.length+$store.state.dental.length+$store.state.vmk.length+$store.state.fordent.length+$store.state.stomalux.length}}</div>
            <button class="reg_link" v-for="(linksSign, i) in linksSign"
        :key="i"
        :to="linksSign.url"
        text><a href="/sign" >{{linksSign.title}}</a></button>
            <button class="exit" v-for="(linksExit, i) in linksExit"
        :key="i"
        :to="linksExit.url"
        text><a href="/"  @click="onLogout">{{linksExit.title}}</a></button>
        </div>

    </div>
</div>
</template>

<script>
export default {
  name: 'nav',
  data(){
    return{
     
      
    }  
  },
  methods:{
    onLogout(){
      this.$store.dispatch('logoutUser')
      this.$router.push('/')
    }
  },
  computed:{
    isUserLoggedIn(){
      return this.$store.getters.isUserLoggedIn
    },
     linksExit(){
      if (this.isUserLoggedIn){
        return[
          {title: 'Выход'}
        ]
      }
      return[]
    },
    linksSign(){
      if (this.isUserLoggedIn){
        return[
          
        ]
      }
      return[{title: 'Вход', url: '/sign'}]
    },

    linksCart(){
      if (this.isUserLoggedIn){
        return[]
      }
      return[
         { title:'Корзина' ,   url: '/cart'}
      ]
    },
    linksCartReg(){
      if (this.isUserLoggedIn){
        return[
          {url:'/cart'}
        ]
      }
      return[]
    },
    linksCatalog(){
      if (this.isUserLoggedIn){
        return [
          {title: 'Каталог', url: '/catalog'},
        ]
      }
      return [
        
      ]

    },
    linksCatalogReg(){
      if (this.isUserLoggedIn){
        return [
          
        ]
      }
      return [
        {title: 'Каталог', url: '/catalog'},
      ]
    },
    linksPersonal(){
      if(this.isUserLoggedIn){
        return [
          {url:'/personal'}
        ]
      }
      return[]
    }

  }
}
</script>
<style scoped>

@media screen and (max-width: 380px){
  .catalog_linksReg{
    width:20% !important;
    border:2px solid #15DBC6;
    font-size:12px !important;
    margin-top:-25px;
    height:30px !important;
    margin-left: -24%;
    
  }
  .catalog_links{
    width:20% !important;
    border:2px solid #15DBC6;
    font-size:12px !important;
    margin-top:-25px;
    height:30px !important;
    margin-left: -12%;
  }
  .count{
    width: 15px !important;
    height: 15px !important;
    font-size: 12px !important;
    margin-left: 1%;
    margin-top: -3px;
  }
  .catrtLinkReg img{
    width: 18px !important
  }
  .cartLinkReg_block{
    margin-left: -2%;
    margin-top:-12px;
  }
  .personalLinkReg_block{
    margin-left: -10%;
  }
  .catrtLinkReg{
    width: 35px !important;
    height: 30px !important;
   
  }
  .personalLinkReg img{
    width: 18px !important
  }
  .personalLinkReg{
    width: 35px !important;
    height: 30px !important;
    margin-top:-12px !important
  }
  .logo{
    margin-left:-25px;
      margin-top: -15px !important;
  }
 .logo_svg{
  width: 77px;
  
}

.cart_link{
  margin-top: -20px;
font-size: 14px !important;
margin-left: -14%;
}
.reg_link{
  width: 85px !important;
  height: 30px !important;
  margin-top: -10px ;
  margin-left: -25px !important;
}
.reg_link a{
  font-size: 16px !important
}
.exit a{
  font-size: 16px !important
}
.exit{
  display:none
}

}

.exit{
    position: absolute;
  text-align: center;
width: 11.11%;
height: 55px;
background: #15DBC6;  
left: 65%;
top: 17px;
text-decoration: none;
outline:none
}

.catrtLinkReg{
  display: flex;
  text-align: center;
  justify-content: center;
  background-color: #fff;
position: absolute;
width: 65px;
height: 56px;


border: 2px solid #15DBC6;
box-sizing: border-box;
}
.cartLinkReg_block{
  position: absolute;
  left:84.02%;
  top:17px;
  
}
.personalLinkReg_block{
  position: absolute;
  left:77.43%;
  top:17px
}
.personalLinkReg{
  position: relative;
  width: 65px;
  height: 56px;
  background-color: #32DFCD;
  display: flex;
  align-items: center;
  justify-content: center;

  
  
}
.count{
  position: absolute;
  width: 25px;
  height: 25px;
  background-color:red;
  color:white;
  display: flex;
  align-items: center;
  justify-content:center;
  left: 87.5%;
  top:5px;
}
.catalog_links:active{
  font-size: 20px;
  
}
.cart_link:active{
  font-size: 20px;
  
}
.exit a{
 color: #fff;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 22px;
line-height: 26px;
}
.reg_link a{
  color: #fff;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 22px;
line-height: 26px;
}
.personalLinkReg:hover{
  background-color: #019393;;
}
.catrtLinkReg:hover{
  background-color: #019393;;
}
.reg_link{
  
  position: absolute;
  text-align: center;
width: 11.11%;
height: 55px;
background: #15DBC6;  
left: 78.64%;
top: 17px;
text-decoration: none;
outline:none

}
.cart_link{
  position: absolute;
width: 6.11%;
height: 26px;
left: 67.36%;
top: 31px;
text-decoration: none;

font-family: 'Montserrat', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 22px;
line-height: 26px;
/* identical to box height */
text-align: center;

color: #019393;
}
.catalog_linksReg{
  position: absolute;
width: 10.83%;
height: 28px;
left: 55.27%;
top: 31px;

font-family: 'Montserrat', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 22px;
line-height: 26px;
text-align: center;

color: #454A4A;
text-decoration: none;
}
.catalog_links{
  position: absolute;
width: 10.83%;
height: 28px;
left: 55.27%;
top: 31px;

font-family: 'Montserrat', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 22px;
line-height: 26px;
text-align: center;

color: #454A4A;
text-decoration: none;
}
.cart{
  height: 46px !important;
  background-color: #15DBC6 !important;
  left: 15px;

}
button:hover{
    background-color: #019393;
    transition:0.1s
}
.rout{
  position: absolute;
}
.wrapper_nav{
  display: flex;
}
.logo{
  position: absolute;
  left:11.45%;
  top:25px;

}

  
  
  
  
  

.links_btn{
  background-color:#15DBC6 !important;
  color: #fff !important;
  margin-left: 10px;
  height: 46px !important;
 
  
  
}
</style>