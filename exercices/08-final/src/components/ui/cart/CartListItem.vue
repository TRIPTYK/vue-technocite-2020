<template>
  <tr>
    <td class="hidden pb-4 md:table-cell">
      <a href="#">
        <img :src="item.image" class="w-20 rounded" alt="Thumbnail" />
      </a>
    </td>
    <td>
      <a href="#">
        <p class="mb-2 md:ml-4">{{ item.title }}</p>
        <form action="" method="POST">
          <button type="submit" class="text-gray-700 md:ml-4">
            <small>(Remove item)</small>
          </button>
        </form>
      </a>
    </td>
    <td class="justify-center md:justify-end md:flex mt-6">
      <div class="w-20 h-10">
        <div class="relative flex flex-row w-full h-8">
          <input
            v-model="qt"
            type="number"
            class="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black"
          />
        </div>
      </div>
    </td>
    <td class="hidden text-right md:table-cell">
      <span class="text-sm lg:text-base font-medium">
        {{ item.price }}
      </span>
    </td>
    <td class="text-right">
      <span class="text-sm lg:text-base font-medium">
        {{ item.price * item.qt }}
      </span>
    </td>
  </tr>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods:{
    ...mapActions('cart',['addToCart','removeFromCart'])
  },
  computed: {
    qt: {
      get() {
        return this.item.qt;
      },
      set(value) {
        console.log(value)
        if(value < this.item.qt)
        {
          return this.removeFromCart(this.item)
        } 
        this.addToCart(this.item)
      },
    },
  },
};
</script>

<style></style>
