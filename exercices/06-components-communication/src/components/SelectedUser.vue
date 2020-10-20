<template>
  <div class="m-1 p-2 border rounded shadow">
    <form
      @submit.prevent="updateUser"
      class="bg-white shadow sm:rounded-lg pb-2 m-2"
    >
      <div class="px-4 py-5 sm:p-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          Selected user is {{ selectedUser ? selectedUser.fullName : "" }}
        </h3>
        <div class="mt-2 max-w-xl text-sm leading-5 text-gray-500">
          <p>
            Update the data.
          </p>
        </div>
        <div class="mt-1 sm:flex sm:items-center">
          <div class="max-w-xs w-full">
            <label for="name" class="sr-only">name</label>
            <div class="relative rounded-md shadow-sm">
              <input
                name="name"
                class="input-base"
                placeholder="name"
                v-model="name"
              />
            </div>
          </div>
          <div class="max-w-xs w-full">
            <label for="age" class="sr-only">age</label>
            <div class="relative rounded-md shadow-sm">
              <input
                age="age"
                class="input-base"
                placeholder="age"
                v-model="age"
              />
            </div>
          </div>
          <span
            class="mt-3 inline-flex rounded-md shadow-sm sm:mt-0 sm:ml-3 sm:w-auto"
          >
            <button type="submit" class="btn">
              Update user
            </button>
          </span>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "SelectedUser",
  props: {
    selectedUser: {
      type: Object,
    },
  },
  emits:["update-user"],
  data() {
    return {
      enteredName: "",
      enteredAge: "",
    };
  },
  methods: {
    updateUser() {
      this.$emit('update-user',{id:this.selectedUser.id,fullName:this.enteredName,age:this.enteredAge})
    },
  },
//   beforeCreate(){
//       console.log('beforeCreate')
//   },
//   created(){
//       console.log('created')
//   },
//   beforeMount(){
//       console.log('beforer mount')
//   },
//   mounted(){
//       console.log('mounted')
//   },
//   beforeUpdate(){
//       console.log('beforeUpdate')
//   },
  updated(){
     this.enteredName= this.selectedUser.fullName
     this.enteredAge= this.selectedUser.age
  },
  computed: {
    name: {
      get() {
        if (this.selectedUser) {
          return this.selectedUser.fullName;
        } else {
          return "";
        }
      },
      set(newValue) {
        this.enteredName = newValue;
      },
    },
    age: {
      get() {
        if (this.selectedUser) {
          return this.selectedUser.age;
        } else {
          return "";
        }
      },
      set(newValue) {
        this.enteredAge = newValue;
      },
    },
  },
};
</script>
