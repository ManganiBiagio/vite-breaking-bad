<template lang="">
    <div class="container">
        <div>Cerca il tuo personaggio preferito</div>
        <input type="text"  v-model="nome">
        <button class="btn btn-primary ms-3" @click="onSearch()">Search</button>
        

    </div>
</template>
<script>
import { store } from '../store';
export default {
    data(){
        return{
            nome:""

        }
    },
    methods:{
        onSearch(){
            store.nameSearched=this.nome;
            this.$emit("search");
            
        }
    }
    
}
</script>
<style lang="">
    
</style>