export default {
  firstName: [
    { required: true, message: 'Please Enter First Name', trigger: 'blur' }
  ],
  lastName: [
    { required: true, message: 'Please Enter Last Name', trigger: 'blur' }
  ],
  phone: [
    { required: true, message: 'Please Enter Phone Number', trigger: 'blur' },
    { min: 7, message: 'Number Should Be At Least 7 Digits', trigger: 'blur' }
  ],
  email: [
    { required: true, message: 'Please Input Email Address', trigger: 'blur' },
    { type: 'email', message: 'Please Input Valid Email Address', trigger: 'blur,change' }
  ]
};
