<template lang="">
     <div class="card">
          <div class="card-body">
             <h5 class="card-title">{{character.name}}</h5>
             <p class="card-text">
                <ul>
                    <li>height:{{character.height}}cm</li>
                    <li>mass:{{character.mass}}kg</li>
                    <li>hair color:{{character.hair_color}}</li>
                    <li>skin color:{{character.skin_color}}</li>
                    <li>eye color:{{character.eye_color}}</li>
                    <li>birth year:{{character.birth_year}}</li>
                    

               </ul>
            </p>
          </div>
     </div>
</template>
<script>
export default {
    props:{
        character:Object
    }

}
</script>
<style lang="scss">

</style>