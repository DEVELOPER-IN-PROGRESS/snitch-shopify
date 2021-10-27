 <template lang="">
  <div class="grid-container">
    <SfProductCard
      data-cy="category-product-card"
      v-for="(product, i) in products"
      :key="productGetters.getId(product)"
      :style="{ '--index': i }"
      :title="productGetters.getName(product)"
      :image="productGetters.getCoverImage(product)"
      :regular-price="$n(productGetters.getPrice(product).regular, 'currency')"
      :special-price="
        productGetters.getPrice(product).special &&
          $n(productGetters.getPrice(product).special, 'currency')
      "
      :link="
        localePath(
          `/p/${productGetters.getId(product)}/${productGetters.getSlug(
            product
          )}`
        )
      "
      class="products__product-card item"
      @click:wishlist="addItemToWishlist({ product })"
      @click:add-to-cart="HandleAddTocart({ product, quantity: 1 })"
    />
  </div>
</template>
<script>
import {
  productGetters,
  useFacet,
  facetGetters,
} from "@vue-storefront/shopify";
import { SfProductCard } from "@storefront-ui/vue";
import { computed, onMounted } from "@vue/composition-api";
import { onSSR } from "@vue-storefront/core";
export default {
  components: {
    SfProductCard,
  },
  setup() {
    const { result, search, loading } = useFacet();
    const products = computed(() => facetGetters.getProducts(result.value));

    onSSR(async () => {
      await search({
        categorySlug: "shirts",
        itemsPerPage: 8,
      });
    });

    onMounted(()=>{ console.log(products)})

    return {
      products,
      loading,
      productGetters,
    };
  },
};
</script>

<style scoped>
@media screen and (min-width: 300px) {
    .grid-container{
        display: grid;
        margin:  auto ;
        grid-template-columns: 1fr 1fr ;
        border: 1px dashed black;
        row-gap: 20px;
    }
}

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