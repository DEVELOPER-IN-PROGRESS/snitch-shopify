 <template lang="">
     
    <div class="flexWrapper">
      <div class="grid__container">
      <!-- <div class="product-grid"> -->
        <PrCard2 v-for="(list, i) in productArray"
          :key="i"
         :title="list.name"
           :imgUrl="list.images[0].src"
           :price="list.price.original"
          />
        <!-- </div> -->
    </div>
  </div>


</template>
<script>
// import {
//   productGetters,
//   useFacet,
//   facetGetters,
// } from "@vue-storefront/shopify";
// import { SfProductCard } from "@storefront-ui/vue";
// import { computed, onMounted } from "@vue/composition-api";
// import { onSSR } from "@vue-storefront/core";
import PrCard2 from  '~/components/ProductCardvariant.vue';

export default {
   
  props: {
    title: String,
    products: Array,
    loading: Boolean
  },

  name : 'Productflex' ,

  components:{
    PrCard2 ,
  },
  // setup() {
  //   const { result, search, loading } = useFacet();
  //   const products = computed(() => facetGetters.getProducts(result.value));

  //   onSSR(async () => {  
  //     await search({
  //       categorySlug: "shirts",
  //       itemsPerPage: 8,
  //     });
  //   });

  //    onMounted(()=>{ console.log("products grid", this.products)})

  //   return {
  //     products,
  //     loading,
  //     productGetters,
  //   };
  // },
  computed: {
     productArray(){
       return this.products ;
     }
  } ,

    mounted(){
   console.log('grid' ,this.products);
    console.log( );
  },


};
</script>

<style scoped>
 .flexWrapper{
  display:flex;
  width: 100%;
  margin:30px auto;
    height:400px;
   border: 1px dashed black;

 }

  .grid__container{  
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        flex-grow: 1;
        margin: 0;
        height:400px;
        overflow-x: scroll; 
    }

@media screen and (min-width: 768px) {

 }



/* @media screen and (min-width: 992px) {
        .flexWrapper{
  display:grid;
  place-items: center;
  padding:0px 20px; 
 }

       
       .grid__container{  
        display: grid;
        margin:  0px 4px;
        width: 100%;
        grid-template-columns: 1fr 1fr 1fr 1fr ;
        border: 1px dashed black;
        column-gap: 22px;
        row-gap: 28px;
    }

 } */
  
</style> 