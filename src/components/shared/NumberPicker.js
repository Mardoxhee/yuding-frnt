import * as React from "react";
import TextField from "@mui/material/TextField";

export default function FormPropsTextFields({
  label,
  onChange,
  num,
  className,
}) {
  return (
    <TextField
      onChange={onChange}
      className={className ? className : "textfield"}
      id="outlined-number"
      label={label}
      type="number"
      value={num}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
}
