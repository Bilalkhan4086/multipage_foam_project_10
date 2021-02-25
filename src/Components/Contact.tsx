import { Button, TextField } from '@material-ui/core'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { valTypes } from './Types'

interface Props {
  submit: React.Dispatch<React.SetStateAction<number>>;
  setval: React.Dispatch<React.SetStateAction<valTypes>>;
  val: valTypes
}

export const Contact: React.FC<Props> = ({ submit, val, setval }) => {

  return (
    <div>
      <Formik
        initialValues={
          val}
        validationSchema={Yup.object({
          phone: Yup.string().required()
            .max(11, 'Phone number should not more than 11 digits')
            .min(11, 'Phone Number shoud Not be less than 11 digits'),
          password: Yup.string()
            .max(20, "Password should not be greater than 20 charaters").required()
            .min(8, "Password should not be less than 8 charaters"),
          email: Yup.string().email("Not a valid Eami").required()

        })}
        onSubmit={(values) => {
          setval({ ...val, ...values })
          submit(2)
          console.log("In Personal val is =", val)
        }}
      >
        <Form>
          <Field name="phone" as={TextField} label="Phone" variant="outlined" type="text" /><br />
          <ErrorMessage name="phone" >{msg => (<span style={{ color: "red", fontSize: "11px" }}>{msg}</span>)}</ErrorMessage><br />
          <Field name="email" as={TextField} label="Email" variant="outlined" type="text" /><br />
          <ErrorMessage name="email" >{msg => (<span style={{ color: "red", fontSize: "11px" }}>{msg}</span>)}</ErrorMessage><br />

          <Field name="password" as={TextField} label="Password" variant="outlined" type="text" /><br />
          <ErrorMessage name="password" >{msg => (<span style={{ color: "red", fontSize: "11px" }}>{msg}</span>)}</ErrorMessage>




          <br /><br /><br />
          <Button onClick={() => submit(0)} variant="contained" color="inherit"> Back</Button>&nbsp;&nbsp;
         <Button type="submit" variant="contained" color="primary"> Next</Button>
        </Form>
      </Formik>
    </div>
  )
}
