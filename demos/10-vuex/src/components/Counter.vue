<template>
  <h3 class="text-indigo-700 font-medium">{{counter}}</h3>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name:'Counter',
    computed:{
        ...mapGetters(['counter'])
        // counter(){
        //     return this.$store.getters.counter
        // }
    }
    
}
</script>

<style>

</style>