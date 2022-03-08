<template>
  <div id="page-top">
    <!-- Page Wrapper -->
    <div id="wrapper">
      <SideBar/>
      <div class="right-main">
      <MainContent/>
      <FooterContent/>
      </div>
    </div>
    <!-- End of Page Wrapper -->
  </div>
</template>

<script>
import SideBar from "./components/SideBar.vue" //components are imported
import MainContent from "./components/MainContent.vue"
import FooterContent from "./components/FooterContent.vue"
export default {
  name: 'App',
  components: {
    SideBar,MainContent,FooterContent
  }
}
</script>

<style>
#wrapper{
  /* navbarın tüm genişliği alması için yazıldı */
  width: 100% !important; 
}
#page-top{
  display:flex;
  flex-direction: row;
  
}
/* sağ taraf ayrı bir kapsayıcı içinde olsun diye oluşturuldu */
.right-main{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
}
</style>
