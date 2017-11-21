<script>
import { mapGetters } from 'vuex';
import ProductsInput from './ProductsInput';
import EdibleForm from './EdibleForm';

export default {
  extends: ProductsInput,
  components: {
    ProductForm: EdibleForm
  }
};
</script>
