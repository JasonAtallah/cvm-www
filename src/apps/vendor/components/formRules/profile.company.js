
export default {
  name: [
    { required: true, message: 'Please Enter a Company Name', trigger: 'blur' }
  ],
  address: [
    { required: true, message: 'Please Enter an Address', trigger: 'blur' }
  ],
  city: [
    { required: true, message: 'Please Enter a City', trigger: 'blur' }
  ],
  state: [
    { required: true, message: 'Please Enter a State', trigger: 'blur' },
    { min: 2, max: 2, message: 'State Must Be Two Letters', trigger: 'blur' }
  ],
  zip: [
    { required: true, message: 'Please Enter a Zip', trigger: 'blur' },
    { min: 5, message: 'Zip Must Be 5 or More Digits', trigger: 'blur' }
  ]
};
