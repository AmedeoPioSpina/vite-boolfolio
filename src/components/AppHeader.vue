<template lang="">
    <header>
        <nav>
            <ul>
                <li>
                    <router-link :to="{name: 'home'}">
                        Home
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name: 'main'}">
                        Main
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name: 'projects'}">
                        Projects
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>
<script>
export default {
    name: 'AppHeader'
}
</script>
<style lang="">
    
</style>