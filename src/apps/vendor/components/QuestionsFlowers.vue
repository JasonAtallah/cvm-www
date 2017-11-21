<script>
import { mapGetters } from 'vuex';
import ProductsInput from './ProductsInput';
import FlowerForm from './FlowerForm';

export default {
  extends: ProductsInput,
  components: {
    ProductForm: FlowerForm
  }
};
</script>
