import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars({ getOpened, getClosed }) {
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar open={getOpened} autoHideDuration={6000} onClose={getClosed}>
        <Alert onClose={getClosed} severity="success" sx={{ width: "100%" }}>
          Réservation effectuée avec succès!
        </Alert>
      </Snackbar>
    </Stack>
  );
}
