 <template lang="">
     
    <div class="gridWrapper"
      <div class="grid-container"
      <div class="product-grid">
        <PrCard v-for="(list, i) in productArray"
          :key="i"
         :title="list.name"
        :imgUrl="list.images[0].src"
        :price="list.price.original"
          />
        </div>
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
import PrCard from  '~/components/ProductCard.vue';

export default {
   
  props: {
    title: String,
    products: Array,
    loading: Boolean
  },

  name : 'Productgrid' ,

  components:{
    PrCard ,
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
.gridWrapper{
  display:grid;
  place-items: center;
  margin:0 auto; 
}
.product-grid{ 
        display: grid;
        grid-template-columns: 1fr 1fr ;
        column-gap: 14px;
        row-gap: 5px;
    }

@media screen and(min-width:992px) {
  .product-grid{ 
        display: grid;
        padding:0 26px;
        grid-template-columns:1fr 1fr 1fr 1fr;
        column-gap: 20px;
        row-gap: 25px;
    }
}


/* @media screen and (min-width: 300px) {
    .grid-container{
        display: grid;
        margin:  auto ;
        grid-template-columns: 1fr 1fr ;
        border: 1px dashed black;
        row-gap: 20px;
    }
} */

@media screen and (min-width: 768px) {
    .grid-container{
        width:96vw; 
        display: grid;
        border: 1px dashed black;
        margin: 0 auto ;
        grid-template-columns: 1fr 1fr 1fr 1fr  ;
        row-gap: 0px;
    }

}

 
     
</style> 