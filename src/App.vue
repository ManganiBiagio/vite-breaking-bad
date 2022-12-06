<template >
  <div class="bg-all-page">
  <TheNavbar></TheNavbar>
  <TheLoader v-if="store.loading"></TheLoader>
  <TheFilter></TheFilter>
  <MainContent></MainContent>
  
</div>

  
</template>

<script>
import MainContent from './components/MainContent.vue';
import TheFilter from './components/TheFilter.vue';
import TheLoader from './components/TheLoader.vue';
import TheNavbar from './components/TheNavbar.vue';

import { store,fetchCharacters } from "./store";

export default {
  data(){
    return{
      store
    }
  },
  components:{ TheNavbar, TheFilter, MainContent, TheLoader },
  created(){
    fetchCharacters();
  }
  
}
</script>

<style lang="scss" >
@use "./styles/general.scss";



.bg-all-page{
  background-color: var(--color-bg);
  position: relative;
}

  
</style>
