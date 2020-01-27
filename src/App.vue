<template>
  <v-app>
    <Nuvigation/>
  </v-app>
</template>

<script>
import Nuvigation from './components/Nuvigation'

export default {
  name: 'App',

  components: {
        Nuvigation,
  },

  data: () => ({
    //
  }),
};
</script>
<style>
#app{
  max-width: 1440px;
  background-color: #fff;
  margin: 0 auto;
  transition: .5s ease-in-out
 
}
</style>
