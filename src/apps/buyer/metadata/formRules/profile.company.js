
export default {
  name: [
    { required: true, message: 'Company Name', trigger: 'blur' }
  ],
  address: [
    { required: false, message: 'Company Address', trigger: 'blur' }
  ],
  city: [
    { required: false, message: 'Company City', trigger: 'blur' }
  ],
  state: [
    { required: false, message: 'Company State', trigger: 'blur' },
    { min: 2, max: 2, message: 'State Must Be Two Letters', trigger: 'blur' }
  ],
  zip: [
    { required: false, message: 'Company Zip', trigger: 'blur' },
    { min: 5, message: 'Zip Must Be 5 or More Digits', trigger: 'blur' }
  ]
};
