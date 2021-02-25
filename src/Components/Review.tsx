import { Button } from '@material-ui/core'
import React, { SetStateAction } from 'react'
import { valTypes } from './Types';

interface Props {
    submit: React.Dispatch<SetStateAction<number>>;
    val: valTypes
}

export const Review: React.FC<Props> = ({ submit, val }) => {
    console.log("data is here = ", val);
    const len = val.password.length;
    const x = 'x';
    return (
        <div>
            <h3>Personal Data</h3>
            <div>Name : {val.name}</div>
            <div>Age : {val.age}</div>
            <div>Program : {val.Program}</div>
            <br />
            <h3>Contact Data</h3>
            <div>Phone Number : {val.phone}</div>
            <div>Email Id : {val.email}</div>
            <div>Password: {x.repeat(len)}</div>
            <br /><br />
            <Button onClick={() => submit(1)} variant="contained" color="inherit"> Back</Button>&nbsp;&nbsp;
            <Button onClick={() => submit(3)} type="submit" variant="contained" color="primary"> Next</Button>
        </div>
    )
}
