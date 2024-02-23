<script>
import axios from 'axios';
// import HelloWorld from './components/HelloWorld.vue'
import AppHeader from './components/AppHeader.vue';
import AppHome from './pages/AppHome.vue';
  export default{
    components:{
      AppHeader,
      AppHome
    },
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
  <AppHeader/>
  <router-view>

  </router-view>
</template>

<style>

</style>
