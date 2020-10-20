<template>
    <li class="border-green-200">
            <div class="flex items-center px-4 py-4 sm:px-6">
              <div class="min-w-0 flex-1 flex items-center">
                <div
                  class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4"
                >
                  <div>
                    <div
                      class="text-sm leading-5 font-medium text-indigo-600 truncate"
                    >
                     {{user.fullName}}
                    </div>
                    <div
                      class="mt-2 flex items-center text-sm leading-5 text-gray-500"
                    >
                      <span class="truncate">{{user.age}}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <span class="inline-flex rounded-md shadow-sm">
                    <button type="button" class="btn hover:bg-indigo-500" @click="selectUser">
                      Select User
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </li>
</template>
<script>
export default {
    name:"UserItem",
    props:{
        user:{
            type:Object,
            required:true
        }
    },
    emits:["select-user"],
    methods:{
        selectUser(){
            this.$emit('select-user',this.user)
        }
    }
}
</script>