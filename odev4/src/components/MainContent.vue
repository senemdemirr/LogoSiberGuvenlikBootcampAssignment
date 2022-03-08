<template>
    <!-- Main Content -->
    <div id="content">
        <TopBar/>
        <BlankPage/>     
    </div>
    <!-- End of Main Content -->
</template>

<script>
import TopBar from "./TopBar.vue"
import BlankPage from "./BlankPage.vue"
export default {
    name: 'MainContent',
    components: {
        TopBar,
        BlankPage
    }
}
</script>

<style>

</style>