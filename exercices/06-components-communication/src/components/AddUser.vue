<template>
     <div class="m-1 p-2 border rounded shadow">
        <form @submit.prevent="addUser" class="bg-white shadow sm:rounded-lg pb-2 m-2">
          <div class="px-4 py-5 sm:p-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Create a new user
            </h3>
            <div class="mt-1 sm:flex sm:items-center">
              <div class="max-w-xs w-full">
                <label for="name" class="sr-only">name</label>
                <div class="relative rounded-md shadow-sm">
                  <input name="name" class="input-base" placeholder="name" v-model="fullName" />
                </div>
              </div>
              <div class="max-w-xs w-full">
                <label for="age" class="sr-only">age</label>
                <div class="relative rounded-md shadow-sm">
                  <input age="age" class="input-base" placeholder="age" v-model="age" />
                </div>
              </div>
              <span
                class="mt-3 inline-flex rounded-md shadow-sm sm:mt-0 sm:ml-3 sm:w-auto"
              >
                <button type="submit" class="btn">
                  Create
                </button>
              </span>
            </div>
          </div>
        </form>
      </div>
</template>
<script>
export default {
    name:"AddUser",
    emits:["add-user"],
    data(){
        return {
            age:'',
            fullName:''
        }
    },
    methods:{
        addUser(){
            this.$emit("add-user",this.fullName, this.age)
            this.age = this.fullName='';
        }
    }
}
</script>