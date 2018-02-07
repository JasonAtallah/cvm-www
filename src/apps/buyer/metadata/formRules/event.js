
export default {
  name: [
    { required: true, message: 'Please Enter a Company Name', trigger: 'blur' }
  ],
  date: [
    { required: true, message: 'Please Choose a Date', trigger: 'blur' }
  ],
  time: [
    { required: true, message: 'Please Choose a Time', trigger: 'blur' }
  ],
  duration: [
    { required: true, message: 'Please Add a Duration', trigger: 'blur' }
  ],
  location: [
    { required: true, message: 'Please Add a Location', trigger: 'blur' }
  ]
};
