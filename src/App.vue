<script>
import axios from 'axios';
// import HelloWorld from './components/HelloWorld.vue'
  export default{
    methods:{
      getProjects(){
        axios.get('http://127.0.0.1:8000/api/projects')
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
      }
    },
    created(){
      this.getProjects();
    }
  }
</script>

<template>

</template>

<style>

</style>
