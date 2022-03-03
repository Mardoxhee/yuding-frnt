export const initialState = {
  loading: true,
  error: '',
  get: {}
};

export const AppReducer = (state, action) => {
  switch (action.type) {
    case 'fetch_success': {
      return {
        loading: false,
        error: '',
        get: action.payload
      };
    }
    case 'fetch_error': {
      return {
        loading: false,
        error: 'something went wrong',
        get: {}
      };
    }
  }
};
