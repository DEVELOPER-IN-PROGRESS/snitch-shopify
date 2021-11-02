<template>
   <div  class="card-container">
       <div class="prImage" href="#"  :style="{ backgroundImage: `url(${imgUrl})` }" alt="..." />
       <p>{{ title }}</p>
       <p>{{ price }}</p>
   </div>
</template>


<script>
import {
  SfLink,
  SfPrice
} from '@storefront-ui/vue';
import { productGetters } from '@vue-storefront/shopify';

export default {
    name:'PrCard' ,
 
     props: ['products' , 'loading' ,'imgUrl'] , 

 setup() {
    return { productGetters };
  },
  components: {
     
    SfLink,
    SfPrice
  },
  props: {
      title: {
      type: String,
      default: "",
    },
   price : {
     type:Number ,
     default:0 , 
   } ,

   imgUrl:{
      type:String
   }
  },

  mounted(){
    //console.log(this.products);
    console.log('hiii' ,this.products);
    console.log("imgurl" ,this.imgUrl); 
  },

  data(){
      return{
          titlee: 'John Wick' ,
          price: '400G' ,
          url:"wggwgwg"
      }
  },

  computed: {
    getUrl(){
      return 
    }
  }
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
      background-size:cover ;
      background-repeat:no-repeat ;
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