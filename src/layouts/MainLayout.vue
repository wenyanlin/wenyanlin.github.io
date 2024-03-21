<template>
    <div>
        <Header></Header>
        <div class="main">
            <RouterView></RouterView>
        </div>
        <Footer></Footer>
    </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
    
</script>

<style lang="scss" scoped>

</style>