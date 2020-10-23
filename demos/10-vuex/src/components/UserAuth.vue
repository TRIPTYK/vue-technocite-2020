<template>
  <button v-if="!isAuth" type="button" class="border px-3 shadow m-2" @click="login">login</button>
  <button v-if="isAuth" type="button" class="border px-3 shadow m-2" @click="logout">logout</button>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    methods:{
        ...mapActions(['login','logout'])
    },
    computed:{
        ...mapGetters(['isAuth'])
    }
}
</script>

<style>

</style>