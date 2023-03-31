import './Login.css'
import axios from 'axios'
import { Formik } from 'formik';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Register() {

    const handleSubmit = values => {
        axios.post(`http://localhost:5000/users/register`,{name:values.name,email:values.email, password:values.password})
        .then((res)=>console.log(res))
        .catch(err=>console.error(err.response.data))
    }
      
    return(
      <div className='login'>
        <h1>Register page</h1>
        <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
            const errors = {};
            if (!values.email) {
            errors.email = 'Required';
            } 
            return errors;
        }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(values.name + ' je dodan u sustav');
          //console.log(values)
          setSubmitting(false);
          handleSubmit(values)
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <Form onSubmit={handleSubmit}>
            <Form.Control
            className='formControl'
            placeholder='Enter your name...'
            type="text"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          <Form.Control
            className='formControl'
            placeholder='Enter your email...'
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <Form.Control
            className='formControl'
            placeholder='Enter your password...'
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  </div>
    )
}

export default Register