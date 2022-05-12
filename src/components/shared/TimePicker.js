import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TimePicker from "@mui/lab/TimePicker";

export default function MaterialUIPickers({ value, onChange, label, className }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} className="timeCont">
      <TimePicker
        label={label}
        value={value}
        onChange={onChange}
        className={className}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
