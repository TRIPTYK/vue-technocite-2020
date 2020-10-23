<template>
<hr />
  <h3 class="text-indigo-700 font-medium">{{finalCounter}}</h3>
  we do more ...
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name:'FinalCounter',
    computed:{
        ...mapGetters(['finalCounter'])
        // counter(){
        //     return this.$store.getters.finalCounter
        // }
    }
    
}
</script>

<style>

</style>