<template>
    <ul
    class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
  >
    <ShopListItem v-for="sku in skus" :key="sku.id" :sku="sku" />
  </ul>
</template>

<script>
import ShopListItem from './ShopListItem'
import {mapGetters, mapActions} from 'vuex'
export default {
    components:{
        ShopListItem
    },
    methods:{
      ...mapActions("skus",["getSkus"])
    },
    computed:{
      ...mapGetters("skus",["skus"])
    },
    created(){
      this.getSkus()
    }
}
</script>

<style>

</style>