import './App.css'
import {useFormik} from 'formik'
import * as yup from 'yup'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'

const validationSchema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Enter a valid email').required('Email name is required'),
})

function App() {

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: (values) => {
      console.log(values)
    },
    validationSchema: validationSchema,
  })


  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit}>
        <TextField 
          id="firstName"
          name='firstName'
          label='First Name'
          margin='normal'
          value={formik.values.firstName}
          onChange={formik.handleChange}

          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
          onBlur={formik.handleBlur}
        />
        <TextField 
          id="lastName"
          name='lastName'
          label='Last Name'
          margin='normal'
          value={formik.values.lastName}
          onChange={formik.handleChange}

          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
          onBlur={formik.handleBlur}
        />
        <TextField 
          id="email"
          name='email'
          label='Email'
          margin='normal'
          value={formik.values.email}
          onChange={formik.handleChange}

          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          onBlur={formik.handleBlur}
        />
        <Button type='submit' variant="outlined">Submit</Button>
      </form>
    </div>
  )
}

export default App
