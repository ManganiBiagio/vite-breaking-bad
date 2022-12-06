<template lang="">
    <div class="container py-3">
        <div class="title">Found {{store.count}} characters</div>
        <div class="row row-cols-1 row-cols-md-5 g-4 py-3">
            <div class="col" v-for="character in store.charactersList">
               <CharacterCard :character="character"></CharacterCard>
            </div>
        </div>
        
    </div>
    
</template>
<script>
import { store, fetchCharacters } from "../store";
import CharacterCard from "./CharacterCard.vue"
export default {
    components:{CharacterCard},
    data() {
        return {
            store,
        }
    }

}
</script>
<style lang="scss">
.title{
    background-color: white;
    padding: 1rem 1rem;
}
    
</style>