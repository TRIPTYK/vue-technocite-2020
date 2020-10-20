<template>
  <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 border h-screen">
    <header class="w-full bg-teal-100 flex">
      <div>
        <img class="w-1/5" src="./assets/logo.png" />
      </div>
    </header>
    <main>
      <h1 class="text-3xl ">Components communication</h1>
      <SelectedUser :selected-user="selectedUser" @update-user="updateUser"></SelectedUser>
      <AddUser @add-user="addUser"></AddUser>
      <div class="m-1 p-2 border rounded shadow">
        <ul>
          <user-item v-for="user in users" :key="user.id" :user="user" @select-user="selectUser"></user-item>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
import UserItem from './components/UserItem'
import SelectedUser from './components/SelectedUser'
import AddUser from './components/AddUser'
export default {
  components: {
    UserItem, SelectedUser, AddUser
  },
  data(){
    return{
      users:[
        {id:1,fullName:'Gilles BERTRAND', age:46},
        {id:2,fullName:'Vincent URBAIN', age:49},
        {id:3,fullName:'Laurent Deketelaere', age:40},
      ],
      selectedUser:null
    }
  },
  methods:{
    selectUser(user){
      this.selectedUser = user
    },
    updateUser(user){
      let userToUpdate = this.users.find(u=>u.id===user.id)
      userToUpdate.age= user.age
      userToUpdate.fullName= user.fullName
    },
    addUser(fullName, age){
      this.users.push({
        id:this.users.length,
        fullName,
        age
      })
    }
  }
};
</script>

<style></style>
