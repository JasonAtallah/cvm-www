<script>
import { mapGetters } from 'vuex';
import ProductsInput from './ProductsInput';
import ConcentrateForm from './ConcentrateForm';

export default {
  extends: ProductsInput,
  components: {
    ProductForm: ConcentrateForm
  }
};
</script>
