<template>
  <ul class="vendor-filter">
    <li>
      <div class="title">Sort By</div>
      <single-select :options="sortOptions" v-model="sortValue"></single-select>
    </li>
  </ul>
</template>

<script>
import SingleSelect from '@/components/form/SingleSelect';

export default {
  name: 'vendor-filter',
  data() {
    return {
      sortOptions: [
        'Recent First',
        'Recent Last'
      ]
    };
  },
  props: {
    filter: {
      type: Object,
      required: true
    }
  },
  computed: {
    sortValue() {
      return this.filter.sort;
    }
  },
  methods: {
    productTypes(vendor) {
      return [...vendor.products.reduce((types, product) => {
        types.add(product.type);
        return types;
      }, new Set())];
    },
    getFieldVal(fieldName) {
      switch (fieldName) {
        case 'Sort':
          return {
            options: [
              {
                value: 1,
                label: '1'
              }
            ],
            selected: null
          };

        default:
          return {
            options: [],
            selected: null
          };
      }
    }
  },
  components: {
    SingleSelect
  }
};
</script>

<style scoped>
.vendor-filter {
  list-style: none;
  height: 3rem;
}

.vendor-filter li {
  list-style: none;
  display: inline-block;
  min-width: 10rem;
  margin-right: 20px;
  text-align: left;
}

.vendor-filter li .title {
  display: inline-block;
}
</style>
