import './Login.css'
import axios from 'axios'
import { Formik } from 'formik';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

 function Login(props){

    const navigate = useNavigate()
    
    const handleSubmit = values => {
      axios.post(`http://localhost:5000/users/login`,{email:values.email, password:values.password})
      .then((res)=>{
        console.log(res)
        props.userEmail(res.data.email)
        navigate(`/userpage`)
      })
      .catch(err=>{
        console.error(err)
        alert('invalid email or password')
      })
    }
  
    return(
    <div className='login'>
      <h1>Login page</h1>
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

export default Login
    