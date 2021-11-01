<template>
   <div class="card-container">
       <img class="prImage" href="#" src="../static/john.jpg" alt="..." />
       <p>john wick</p>
       <p>Bounty $400G</p>
   </div>
</template>

<script>
export default {
    name:'PrCard' ,

}
</script>

<style scoped>
    .card-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        
    }

  .prImage{
      width:100%;
      height:244px; 
  }


  @media screen and (min-width:768px) {
      .prImage{
      width:100%;
      height:500px; 
  }
  }

   @media screen and (min-width:992px) {
      .prImage{
      width:100%;
      height:420px; 
  }
  }

 


</style>