import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import * as React from "react";

export default function LoadingButtonField({ action, type, loading, onClick }) {
  return (
    <LoadingButton variant="contained" type={type} onClick={onClick}>
      {action}
    </LoadingButton>
  );
}
