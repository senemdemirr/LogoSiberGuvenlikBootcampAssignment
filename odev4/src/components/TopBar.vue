<template>
    <!-- Topbar -->
    <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <!-- Sidebar Toggle (Topbar) -->
        <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
            <i class="fa fa-bars"></i>
        </button>

        <TopbarSearch/>
        <TopNavbar/>
       
    </nav>
    <!-- End of Topbar -->
</template>

<script>
import TopbarSearch from "./TopbarSearch.vue";
import TopNavbar from "./TopNavbar.vue"
export default {
    name: "TopBar",
    components: { 
        TopbarSearch,
        TopNavbar    
    }
}
</script>

<style>

</style>