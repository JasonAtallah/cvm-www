
export default {
  firstName: [
    { required: true, message: 'Please Enter First Name', trigger: 'blur' }
  ],
  email: [
    { required: true, message: 'Please Input Email Address', trigger: 'blur' },
    { type: 'email', message: 'Please Input Valid Email Address', trigger: 'blur,change' }
  ],
  name: [
    { required: true, message: 'Please Enter a Company Name', trigger: 'blur' }
  ],
  city: [
    { required: true, message: 'Please Enter a City', trigger: 'blur' }
  ]
};
