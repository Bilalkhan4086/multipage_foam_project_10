import { Button, NativeSelect, TextField } from '@material-ui/core';
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup';
import { valTypes } from './Types';

interface Props {
    submit: React.Dispatch<React.SetStateAction<number>>;
    setval: React.Dispatch<React.SetStateAction<valTypes>>;
    val: valTypes
}

export const Personal: React.FC<Props> = ({ submit, setval, val }) => {

    return (
        <Formik
            initialValues={val}
            validationSchema={Yup.object({
                name: Yup.string().required()
                    .max(20, 'Not moe than 20 Alphabets')
                    .min(3, 'Name shoud be less than 3 Alphabets'),
                age: Yup.number().required()
                    .max(30, "Age should not be greater than 30 years")
                    .min(14, "Age shoud not be less than 14 years"),
                Program: Yup.string()
            })}
            onSubmit={(values) => {
                console.log(values.Program);
                setval({ ...values });
                submit(1);
            }}>
            <Form>
                <label htmlFor="name">Name : </label>&nbsp;&nbsp;&nbsp;&nbsp;
         <Field name="name" as={TextField} label="name" variant="outlined" type="text" /><br />
                <ErrorMessage name="name" >{msg => (<span style={{ color: "red", fontSize: "11px" }}>{msg}</span>)}</ErrorMessage><br />
                <label htmlFor="age">Age:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <Field name="age" as={TextField} label="age" variant="outlined" type="number" /><br />
                <ErrorMessage name="age" >{msg => (<span style={{ color: "red", fontSize: "11px" }}>{msg}</span>)}</ErrorMessage><br />
                <label htmlFor="Program">Program : </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         {/* <InputLabel htmlFor="age-native-simple">Age</InputLabel> */}

                <Field as={NativeSelect} name="Program" variant="outlined" style={{ minWidth: "250px" }} placehoder="Select" label="Program">
                    <option aria-label="Select" value="No Selected" >Select Course</option>
                    <option style={{ cursor: "pointer" }} value="Ai">Artifical Intellegence</option>
                    <option style={{ cursor: "pointer" }} value="Iot">Internet of Things</option>
                    <option style={{ cursor: "pointer" }} value="BC">BlockChain</option>
                    <option style={{ cursor: "pointer" }} value='Cloud'>Cloud Computing</option>
                    {/* <FormHelperText>Placeholder</FormHelperText> */}

                </Field><br /><br /><br />
                <Button variant="contained" disabled> Back</Button>&nbsp;&nbsp;
         <Button type="submit" variant="contained" color="primary"> Next</Button>
            </Form>
        </Formik>
    )
}
