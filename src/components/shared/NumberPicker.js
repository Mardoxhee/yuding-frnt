import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FormPropsTextFields({ label }) {
  return (
    <Box component="div" noValidate autoComplete="off">
      <div>
        <TextField
          className="textfield"
          id="outlined-number"
          label={label}
          type="number"
          InputLabelProps={{
            shrink: true
          }}
        />
      </div>
    </Box>
  );
}
