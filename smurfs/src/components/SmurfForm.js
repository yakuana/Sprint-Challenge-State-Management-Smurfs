import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const SmurfForm = ({ errors, touched, values, handleSubmit, status }) => {

    // hook for keeping track of users 
    const [smurf, setSmurf] = useState({});
    
    // updates users if change has occured 
    useEffect(() => {
        if (status) {
            // change has occured, so update users array 
            setSmurf(newSmurf => ({...smurf, newSmurf}))
        }
    }, [status]);
    
    return (
      <div className="form-container">
       
        <h1>Sign Up</h1>

        <Form className="form">
            
            {/* name */}
            <Field 
                type="text" 
                name="name" 
                placeholder="Name"
                className="field" 
            />
            {touched.name && errors.name && ( <p className="error">{errors.name}</p> )}

            {/* age */}
            <Field 
                type="text" 
                name="age" 
                placeholder="Age"
                className="field" 
            />
            {touched.name && errors.name && ( <p className="error">{errors.name}</p> )}

            {/* height */}
            <Field 
                type="text" 
                name="height" 
                placeholder="Height" 
                className="field" 
            />
            {touched.name && errors.name && <p className="error">{errors.name}</p>}

            <button type="submit" className="button">Submit</button>
        </Form>

      </div>
    );
};

// using formik 
const FormikSmurfForm = withFormik({
    
    // making sure each prop has a default value if given value is undefined 
    mapPropsToValues({ name, age, height, id }) {
      return {
        name: name || "",
        age: age || "",
        height: height || "",
        id: Date.now()
      };
    },
    
    // use yup to enforce input requirements 
    validationSchema: Yup.object().shape({
        name: Yup
        .string()
        .required("Please Enter Smurf Name"),
        age: Yup
        .string()
        .min(1)
        .required("Age must be atleast 1 digit"),
        height: Yup
        .string()
        .required("Please Enter Smurf Height Without Units"),
    }),
    
    // update values and set status 
    handleSubmit(values, { setStatus, resetForm }) {
        axios
            // smurf post api 
            .post('http://localhost:3333/smurfs', values)

            .then(response => {
                // successful 
                console.log("post api response object", response);
                console.log("current smurf", values);
                resetForm(); 
                
            })

            .catch(error => {
                // unsuccessful 
                console.log("The api is currently down.", error.response);
                resetForm();
            });
    }

})(SmurfForm); // currying functions
  
export default FormikSmurfForm;
  
