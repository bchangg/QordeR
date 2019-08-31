import React, { useState } from "react";
import { FormGroup, FormControl, FormHelperText, Input, InputLabel } from '@material-ui/core'
import 'typeface-roboto';
import './Application.scss'


export default function Admin() {
  const [value, setValue] = useState("");
  let ERROR = true
  return (
    <div>
      <h2 className="text-center">Restaurant Login</h2>
      <FormGroup>
        <FormControl>
        <InputLabel htmlFor="my-input">Restaurant Code</InputLabel>
        <Input value={value} onChange={(event) => setValue(event.target.value)}/>
        {ERROR ? <FormHelperText error>ERROR</FormHelperText> : "Hola"}
        </FormControl>
      </FormGroup>
    </div>
  )
}