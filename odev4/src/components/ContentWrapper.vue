<template>
    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
        <MainContent/>
        <FooterContent/>
    </div>
    <!-- End of Content Wrapper -->
</template>

<script>
import MainContent from "./MainContent.vue"
import FooterContent from "./FooterContent.vue"
export default {
    name: 'ContentWrapper',
    components: {
    MainContent,
    FooterContent
}
}
</script>

<style>

</style>