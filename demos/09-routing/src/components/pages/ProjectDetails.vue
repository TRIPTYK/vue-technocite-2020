<template>
  Details of the project {{projectName}}
</template>

<script>
export default {
    name:'ProjectDetails',
    data(){
        return {
            projectName:'test'
        }
    },
    created(){
        this.projectName = this.$route.params.id
    }
}
</script>

<style>

</style>