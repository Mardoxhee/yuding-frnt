import LoadingButton from '@mui/lab/LoadingButton';
import * as React from 'react';

export default function LoadingButtonField({ action }) {
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }
  return (
    <LoadingButton
      onClick={handleClick}
      //   endIcon={<SendIcon />}
      loading={loading}
      loadingPosition="end"
      variant="contained">
      {action}
    </LoadingButton>
  );
}
