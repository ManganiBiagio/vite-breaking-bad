<template lang="">
    <div class="loader">
        <span>
            Stiamo caricando il tuo contenuto
        </span>
        
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
.loader{
    height: 100vh;
    width: 100%;
    background-color: lightblue;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    span{
        background-color: white;
        padding: 1rem;
        border-radius: 10px;
    }

}
    
</style>