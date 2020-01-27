let cart = window.localStorage.getItem('cart');
let belomnimed = window.localStorage.getItem('belomnimed');
let cartCount = window.localStorage.getItem('cartCount');
let dinomed = window.localStorage.getItem('dinomed');
let ihde = window.localStorage.getItem('ihde');
let meding = window.localStorage.getItem('meding');
let medistom = window.localStorage.getItem('medistom');
let dental = window.localStorage.getItem('dental');
let rovira = window.localStorage.getItem('rovira');
let vmk = window.localStorage.getItem('vmk');
let stomalux = window.localStorage.getItem('stomalux');
let fordent = window.localStorage.getItem('fordent');


import Vue from 'vue'
import Vuex from 'vuex'
import user from '../store/user'
import common from '../store/common'
import inf from '../store/inf'
import storeZakaz from '../store/storeZakaz'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // yonico
    cart: cart ? JSON.parse(cart) : [],
    cartCount: cartCount ? parseInt(cartCount) : 0,
    // belomnimed
    belomnimed: belomnimed ? JSON.parse(belomnimed) : [],
    //dinomed
    dinomed: dinomed ? JSON.parse(dinomed) : [],
    //ihde
    ihde: ihde ? JSON.parse(ihde) : [],
    //meding
    meding: meding ? JSON.parse(meding) : [],
    // medistom
    medistom: medistom ? JSON.parse(medistom) : [],
    // dental
    dental: dental ? JSON.parse(dental) : [],
// vmk
vmk: vmk ? JSON.parse(vmk) : [],
  // rovira
  rovira: rovira ? JSON.parse(rovira) : [],
  // stomalux
  stomalux: stomalux ? JSON.parse(stomalux) : [],
    // fordent
    fordent: fordent ? JSON.parse(fordent) : [],
  },
  mutations:{
    // yonico
  addToCart(state, item) {
    let found = state.cart.find(product => product.id == item.id);

    if (found) {
        found.quantity ++;
        found.totalPrice = found.quantity * found.price;
    } else {
        state.cart.push(item);

        Vue.set(item, 'quantity', 1);
        Vue.set(item, 'totalPrice', item.price);
    }

    state.cartCount++;
    this.commit('saveCart')
},
addToCartMinus(state, item) {
  let found = state.cart.find(product => product.id == item.id);

  if (found) {
      found.quantity --;
      found.totalPrice = found.quantity * found.price;
  } else {
      state.cart.push(item);

      Vue.set(item, 'quantity', 1);
      Vue.set(item, 'totalPrice', item.price);
  }

  state.cartCount--;
  this.commit('saveCart')
},

removeFromCart(state, item) {
  let index = state.cart.indexOf(item);

  if (index > -1) {
      let product = state.cart[index];
      state.cartCount -= product.quantity;

      state.cart.splice(index, 1);
  }
  this.commit('saveCart')
},
saveCart(state) {
  window.localStorage.setItem('cart', JSON.stringify(state.cart));
  window.localStorage.setItem('cartCount', state.cartCount);
},
// belomnimed
addToCartBelomnimed(state, belomnimed_item) {
  let found = state.belomnimed.find(Belomnimedproduct => Belomnimedproduct.id == belomnimed_item.id);

  if (found) {
      found.quantity ++;
      found.totalPrice = found.quantity * found.price;
  } else {
      state.belomnimed.push(belomnimed_item);

      Vue.set(belomnimed_item, 'quantity', 1);
      Vue.set(belomnimed_item, 'totalPrice', belomnimed_item.price);
  }

  state.cartCount++;
  this.commit('saveBelomnimed')
},
addToCartMinusBelomnimed(state, belomnimed_item) {
let found = state.belomnimed.find(Belomnimedproduct => Belomnimedproduct.id == belomnimed_item.id);

if (found) {
    found.quantity --;
    found.totalPrice = found.quantity * found.price;
} else {
    state.belomnimed.push(belomnimed_item);

    Vue.set(belomnimed_item, 'quantity', 1);
    Vue.set(belomnimed_item, 'totalPrice', belomnimed_item.price);
}

state.cartCount--;
this.commit('saveBelomnimed')
},

removeFromBelomnimed(state, belomnimed_item) {
let index = state.belomnimed.indexOf(belomnimed_item);

if (index > -1) {
    let Belomnimedproduct = state.belomnimed[index];
    state.cartCount -= Belomnimedproduct.quantity;

    state.belomnimed.splice(index, 1);
}
this.commit('saveBelomnimed')
},
saveBelomnimed(state) {
window.localStorage.setItem('belomnimed', JSON.stringify(state.belomnimed));
window.localStorage.setItem('cartCount', state.cartCount);
},
//dinomed
addToCartDinomed(state, dinomed_item) {
  let found = state.dinomed.find(Dinomedproduct => Dinomedproduct.id == dinomed_item.id);

  if (found) {
      found.quantity ++;
      found.totalPrice = found.quantity * found.price;
  } else {
      state.dinomed.push(dinomed_item);

      Vue.set(dinomed_item, 'quantity', 1);
      Vue.set(dinomed_item, 'totalPrice', dinomed_item.price);
  }

  state.cartCount++;
  this.commit('saveDinomed')
},
addToCartMinusDinomed(state, dinomed_item) {
let found = state.dinomed.find(Dinomedproduct => Dinomedproduct.id == dinomed_item.id);

if (found) {
    found.quantity --;
    found.totalPrice = found.quantity * found.price;
} else {
    state.dinomed.push(dinomed_item);

    Vue.set(dinomed_item, 'quantity', 1);
    Vue.set(dinomed_item, 'totalPrice', dinomed_item.price);
}

state.cartCount--;
this.commit('saveDinomed')
},

removeFromDinomed(state, dinomed_item) {
let index = state.dinomed.indexOf(dinomed_item);

if (index > -1) {
    let Dinomedproduct = state.dinomed[index];
    state.cartCount -= Dinomedproduct.quantity;

    state.dinomed.splice(index, 1);
}
this.commit('saveDinomed')
},
saveDinomed(state) {
window.localStorage.setItem('dinomed', JSON.stringify(state.dinomed));
window.localStorage.setItem('cartCount', state.cartCount);
},

//ihde
addToCartIhde(state, ihde_item) {
  let found = state.ihde.find(Ihdeproduct => Ihdeproduct.id == ihde_item.id);

  if (found) {
      found.quantity ++;
      found.totalPrice = found.quantity * found.price;
  } else {
      state.ihde.push(ihde_item);

      Vue.set(ihde_item, 'quantity', 1);
      Vue.set(ihde_item, 'totalPrice', ihde_item.price);
  }

  state.cartCount++;
  this.commit('saveIhde')
},
addToCartMinusIhde(state, ihde_item) {
let found = state.ihde.find(Ihdeproduct => Ihdeproduct.id == ihde_item.id);

if (found) {
    found.quantity --;
    found.totalPrice = found.quantity * found.price;
} else {
    state.ihde.push(ihde_item);

    Vue.set(ihde_item, 'quantity', 1);
    Vue.set(ihde_item, 'totalPrice', ihde_item.price);
}

state.cartCount--;
this.commit('saveIhde')
},

removeFromIhde(state, ihde_item) {
let index = state.ihde.indexOf(ihde_item);

if (index > -1) {
    let Ihdeproduct = state.ihde[index];
    state.cartCount -= Ihdeproduct.quantity;

    state.ihde.splice(index, 1);
}
this.commit('saveIhde')
},
saveIhde(state) {
window.localStorage.setItem('ihde', JSON.stringify(state.ihde));
window.localStorage.setItem('cartCount', state.cartCount);
},
//meding
addToCartMeding(state, meding_item) {
  let found = state.meding.find(Medingproduct => Medingproduct.id == meding_item.id);

  if (found) {
      found.quantity ++;
      found.totalPrice = found.quantity * found.price;
  } else {
      state.meding.push(meding_item);

      Vue.set(meding_item, 'quantity', 1);
      Vue.set(meding_item, 'totalPrice', meding_item.price);
  }

  state.cartCount++;
  this.commit('saveMeding')
},
addToCartMinusMeding(state, meding_item) {
let found = state.meding.find(Medingproduct => Medingproduct.id == meding_item.id);

if (found) {
    found.quantity --;
    found.totalPrice = found.quantity * found.price;
} else {
    state.meding.push(meding_item);

    Vue.set(meding_item, 'quantity', 1);
    Vue.set(meding_item, 'totalPrice', meding_item.price);
}

state.cartCount--;
this.commit('saveMeding')
},

removeFromMeding(state, meding_item) {
let index = state.meding.indexOf(meding_item);

if (index > -1) {
    let Medingproduct = state.meding[index];
    state.cartCount -= Medingproduct.quantity;

    state.meding.splice(index, 1);
}
this.commit('saveMeding')
},
saveMeding(state) {
window.localStorage.setItem('meding', JSON.stringify(state.meding));
window.localStorage.setItem('cartCount', state.cartCount);
},
//medistom
addToCartMedistom(state, medistom_item) {
    let found = state.medistom.find(Medistomproduct => Medistomproduct.id == medistom_item.id);
  
    if (found) {
        found.quantity ++;
        found.totalPrice = found.quantity * found.price;
    } else {
        state.medistom.push(medistom_item);
  
        Vue.set(medistom_item, 'quantity', 1);
        Vue.set(medistom_item, 'totalPrice', medistom_item.price);
    }
  
    state.cartCount++;
    this.commit('saveMedistom')
  },
  addToCartMinusMedistom(state, medistom_item) {
  let found = state.medistom.find(Medistomproduct => Medistomproduct.id == medistom_item.id);
  
  if (found) {
      found.quantity --;
      found.totalPrice = found.quantity * found.price;
  } else {
      state.medistom.push(medistom_item);
  
      Vue.set(medistom_item, 'quantity', 1);
      Vue.set(medistom_item, 'totalPrice', medistom_item.price);
  }
  
  state.cartCount--;
  this.commit('saveMedistom')
  },
  
  removeFromMedistom(state, medistom_item) {
  let index = state.medistom.indexOf(medistom_item);
  
  if (index > -1) {
      let Medistomproduct = state.medistom[index];
      state.cartCount -= Medistomproduct.quantity;
  
      state.medistom.splice(index, 1);
  }
  this.commit('saveMedistom')
  },
  saveMedistom(state) {
  window.localStorage.setItem('medistom', JSON.stringify(state.medistom));
  window.localStorage.setItem('cartCount', state.cartCount);
  
  },
  //dental
addToCartDental(state, dental_item) {
    let found = state.dental.find(Dentalproduct => Dentalproduct.id == dental_item.id);
  
    if (found) {
        found.quantity ++;
        found.totalPrice = found.quantity * found.price;
    } else {
        state.dental.push(dental_item);
  
        Vue.set(dental_item, 'quantity', 1);
        Vue.set(dental_item, 'totalPrice', dental_item.price);
    }
  
    state.cartCount++;
    this.commit('saveDental')
  },
  addToCartMinusDental(state,dental_item) {
  let found = state.dental.find(Dentalproduct => Dentalproduct.id == dental_item.id);
  
  if (found) {
      found.quantity --;
      found.totalPrice = found.quantity * found.price;
  } else {
      state.dental.push(dental_item);
  
      Vue.set(dental_item, 'quantity', 1);
      Vue.set(dental_item, 'totalPrice',dental_item.price);
  }
  
  state.cartCount--;
  this.commit('saveDental')
  },
  
  removeFromDental(state, dental_item) {
  let index = state.dental.indexOf(dental_item);
  
  if (index > -1) {
      let Dentalproduct = state.dental[index];
      state.cartCount -= Dentalproduct.quantity;
  
      state.dental.splice(index, 1);
  }
  this.commit('saveDental')
  },
  saveDental(state) {
  window.localStorage.setItem('dental', JSON.stringify(state.dental));
  window.localStorage.setItem('cartCount', state.cartCount);
  },
  //vmk
addToCartVmk(state, vmk_item) {
    let found = state.vmk.find(vmk_product => vmk_product.id == vmk_item.id);
  
    if (found) {
        found.quantity ++;
        found.totalPrice = found.quantity * found.price;
    } else {
        state.vmk.push(vmk_item);
  
        Vue.set(vmk_item, 'quantity', 1);
        Vue.set(vmk_item, 'totalPrice', vmk_item.price);
    }
  
    state.cartCount++;
    this.commit('savevmk')
  },
  addToCartMinusvmk(state,vmk_item) {
  let found = state.vmk.find(vmkproduct => vmkproduct.id ==vmk_item.id);
  
  if (found) {
      found.quantity --;
      found.totalPrice = found.quantity * found.price;
  } else {
      state.vmk.push(vmk_item);
  
      Vue.set(vmk_item, 'quantity', 1);
      Vue.set(vmk_item, 'totalPrice',vmk_item.price);
  }
  
  state.cartCount--;
  this.commit('savevmk')
  },
  
  removeFromvmk(state, vmk_item) {
  let index = state.vmk.indexOf(vmk_item);
  
  if (index > -1) {
      let vmkproduct = state.vmk[index];
      state.cartCount -= vmkproduct.quantity;
  
      state.vmk.splice(index, 1);
  }
  this.commit('savevmk')
  },
  savevmk(state) {
  window.localStorage.setItem('vmk', JSON.stringify(state.vmk));
  window.localStorage.setItem('cartCount', state.cartCount);
  },
  //rovira
addToCartRovira(state, rovira_item) {
    let found = state.rovira.find(Roviraproduct => Roviraproduct.id == rovira_item.id);
  
    if (found) {
        found.quantity ++;
        found.totalPrice = found.quantity * found.price;
    } else {
        state.rovira.push(rovira_item);
  
        Vue.set(rovira_item, 'quantity', 1);
        Vue.set(rovira_item, 'totalPrice', rovira_item.price);
    }
  
    state.cartCount++;
    this.commit('saveRovira')
  },
  addToCartMinusRovira(state,rovira_item) {
  let found = state.rovira.find(Roviraproduct => Roviraproduct.id == rovira_item.id);
  
  if (found) {
      found.quantity --;
      found.totalPrice = found.quantity * found.price;
  } else {
      state.rovira.push(rovira_item);
  
      Vue.set(rovira_item, 'quantity', 1);
      Vue.set(rovira_item, 'totalPrice',rovira_item.price);
  }
  
  state.cartCount--;
  this.commit('saveRovira')
  },
  
  removeFromRovira(state, rovira_item) {
  let index = state.rovira.indexOf(rovira_item);
  
  if (index > -1) {
      let Roviraproduct = state.rovira[index];
      state.cartCount -= Roviraproduct.quantity;
  
      state.rovira.splice(index, 1);
  }
  this.commit('saveRovira')
  },
  saveRovira(state) {
  window.localStorage.setItem('rovira', JSON.stringify(state.rovira));
  window.localStorage.setItem('cartCount', state.cartCount);
  },
    //stomalux
addToCartStomalux(state, stomalux_item) {
    let found = state.stomalux.find(Stomaluxproduct => Stomaluxproduct.id == stomalux_item.id);
  
    if (found) {
        found.quantity ++;
        found.totalPrice = found.quantity * found.price;
    } else {
        state.stomalux.push(stomalux_item);
  
        Vue.set(stomalux_item, 'quantity', 1);
        Vue.set(stomalux_item, 'totalPrice', stomalux_item.price);
    }
  
    state.cartCount++;
    this.commit('saveStomalux')
  },
  addToCartMinusStomalux(state,stomalux_item) {
  let found = state.stomalux.find(Stomaluxproduct => Stomaluxproduct.id == stomalux_item.id);
  
  if (found) {
      found.quantity --;
      found.totalPrice = found.quantity * found.price;
  } else {
      state.stomalux.push(stomalux_item);
  
      Vue.set(stomalux_item, 'quantity', 1);
      Vue.set(stomalux_item, 'totalPrice',stomalux_item.price);
  }
  
  state.cartCount--;
  this.commit('saveStomalux')
  },
  
  removeFromStomalux(state, stomalux_item) {
  let index = state.stomalux.indexOf(stomalux_item);
  
  if (index > -1) {
      let Stomaluxproduct = state.stomalux[index];
      state.cartCount -= Stomaluxproduct.quantity;
  
      state.stomalux.splice(index, 1);
  }
  this.commit('saveStomalux')
  },
  saveStomalux(state) {
  window.localStorage.setItem('stomalux', JSON.stringify(state.stomalux));
  window.localStorage.setItem('cartCount', state.cartCount);
  },
  //fordent
addToCartFordent(state, fordent_item) {
    let found = state.fordent.find(fordent => fordent.id == fordent_item.id);
  
    if (found) {
        found.quantity ++;
        found.totalPrice = found.quantity * found.price;
    } else {
        state.fordent.push(fordent_item);
  
        Vue.set(fordent_item, 'quantity', 1);
        Vue.set(fordent_item, 'totalPrice', fordent_item.price);
    }
  
    state.cartCount++;
    this.commit('saveFordent')
  },
  addToCartMinusFordent(state,fordent_item) {
  let found = state.fordent.find(Fordentproduct => Fordentproduct.id == fordent_item.id);
  
  if (found) {
      found.quantity --;
      found.totalPrice = found.quantity * found.price;
  } else {
      state.fordent.push(fordent_item);
  
      Vue.set(fordent_item, 'quantity', 1);
      Vue.set(fordent_item, 'totalPrice',fordent_item.price);
  }
  
  state.cartCount--;
  this.commit('saveFordent')
  },
  
  removeFromFordent(state, fordent_item) {
  let index = state.fordent.indexOf(fordent_item);
  
  if (index > -1) {
      let Fordentproduct = state.fordent[index];
      state.cartCount -= Fordentproduct.quantity;
  
      state.fordent.splice(index, 1);
  }
  this.commit('saveFordent')
  },
  saveFordent(state) {
  window.localStorage.setItem('fordent', JSON.stringify(state.fordent));
  window.localStorage.setItem('cartCount', state.cartCount);
  },
},
  actions: {
  },
  modules: {
    user,
    common,
    inf,
    storeZakaz
  },
  getters:{
      belomnimed(state){
          return state.belomnimed
      }
  }
})
