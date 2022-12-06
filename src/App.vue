<template >
  <div class="bg-all-page">
  <TheNavbar></TheNavbar>
  <TheFilter></TheFilter>
  <MainContent></MainContent>
</div>

  
</template>

<script>
import MainContent from './components/MainContent.vue';
import TheFilter from './components/TheFilter.vue';
import TheNavbar from './components/TheNavbar.vue';

import { store,fetchCharacters } from "./store";

export default {
  components:{ TheNavbar, TheFilter, MainContent },
  created(){
    fetchCharacters();
  }
  
}
</script>

<style lang="scss" >
@use "./styles/general.scss";



.bg-all-page{
  background-color: var(--color-bg);
}

  
</style>
