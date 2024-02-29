<template lang="">
    <main>
        <h1>
            Projects!
        </h1>
        <ul>
            <li v-for="prj in projectsList">
                {{prj.name}}
            </li>
        </ul>
    </main>
</template>
<script>
import axios from 'axios';

export default {
    name: 'AppProjects',
    data() {
        return {
            projectsList: null,
        }
    },
    methods:{

    },
    mounted() {
        axios.get('http://127.0.0.1:8000/api/projects')
        .then(resp => this.projectsList= resp.data)
        .catch(err => console.log(err))
    },
}
</script>
<style lang="">
</style>