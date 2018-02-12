
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
    { required: true, message: 'Please Add a State', trigger: 'blur' }
  ],
  zip: [
    { required: true, message: 'Please Enter a Zip Code', trigger: 'blur' }
  ]
};
