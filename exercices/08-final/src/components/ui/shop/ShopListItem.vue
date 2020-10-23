<template>
    <li class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow">
    <div class="flex-1 flex flex-col p-8">
      <img
        class="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full"
        :src="sku.image"
        alt=""
      />
      <h3 class="mt-6 text-gray-900 text-sm leading-5 font-medium">
        {{ sku.title }}
      </h3>
      <dl class="mt-1 flex-grow flex flex-col justify-between">
        <dt class="sr-only">Title</dt>
        <dd class="text-gray-500 text-sm leading-5">{{ sku.description }}</dd>
        <dt class="sr-only">Role</dt>
        <dd class="mt-3">
          <span
            class="px-2 py-1 text-teal-800 text-xs leading-4 font-medium bg-teal-100 rounded-full"
            >{{ sku.category }}</span
          >
        </dd>
      </dl>
    </div>
    <div class="border-t border-gray-200">
      <div class="-mt-px flex">
        <div class="w-0 flex-1 flex border-r border-gray-200">
          <a
            href="#"
            class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
          >
            <svg
              class="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>

            <span class="ml-3">{{ sku.price }} €</span>
          </a>
        </div>
        <div class="-ml-px w-0 flex-1 flex">
          <button
            type="button"
            @click="addToCart(sku)"
            class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
          >
            <!-- Heroicon name: phone -->
            <svg
              class="w-5 h-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>

            <span class="ml-3">Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
      sku:{
        type:Object,
        required:true
      }
    }
  
}
</script>

<style>

</style>