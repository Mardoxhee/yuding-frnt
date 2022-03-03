import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FormPropsTextFields() {
  return (
    <Box
      component="div"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' }
      }}
      noValidate
      autoComplete="off">
      <div>
        <TextField
          className="textfield"
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true
          }}
        />
      </div>
    </Box>
  );
}
