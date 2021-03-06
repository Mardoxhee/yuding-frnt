import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function CheckboxLabels({ label, onChange, id, value }) {
  return (
    <FormControlLabel
      control={<Checkbox />}
      label={label}
      onChange={onChange}
      id={id}
      value={value}
    />
  );
}
