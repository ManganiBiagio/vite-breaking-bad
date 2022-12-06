<template lang="">
    <div class="container py-3">
        <div class="title">Found {{store.count}} characters</div>
        <div class="row row-cols-1 row-cols-md-5 g-4 py-3">
            <div class="col" v-for="character in store.charactersList">
                <div class="card">
                     
                         <div class="card-body">
                             <h5 class="card-title">Card title</h5>
                             <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                         </div>
                </div>
            </div>
        </div>
        
    </div>
    
</template>
<script>
import { store, fetchCharacters } from "../store";
export default {
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