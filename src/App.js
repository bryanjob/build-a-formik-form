import React from 'react';
// TODO: import useFormik from formik library
import { useFormik } from 'formik';

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values => {
      console.log('form: ', values);
      alert('Login Successful');
    },
    validate: values => {
      let errors = {};
      if (!values.email) errors.email = 'Field required';
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) errors.email = 'Username should be an email';
      if (!values.password) errors.password = 'Field required';
      
      return errors;
    }
  })

  return (
    <div>
      {/* TODO: build you form here. */}
      <form onSubmit={formik.handleSubmit}>
        <div>Email: </div>
        <input id="emailField" name="email" type="text" onChange={formik.handleChange} value={formik.values.email} />
        {formik.errors.email ? <div id="emailError" style={{ color: 'red' }}>{formik.errors.email}</div> : <div>&nbsp;</div>}
        <div>Password: </div>
        <input id="pswField" name="password" type="text" onChange={formik.handleChange} value={formik.values.password}/>
        {formik.errors.password ? <div id="pswError" style={{ color: 'red' }}>{formik.errors.password}</div> : <div>&nbsp;</div>}
        <div>
          <button id="submitBtn" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
