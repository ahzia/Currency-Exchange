import { latestRates } from '../../api/exchangeRate';

const FETCH_LOADING = 'FETCH_LOADING';
const FETCH_SUCCESS_RATES = 'FETCH_SUCCESS_RATES';
const FETCH_ERROR = 'FETCH_ERROR';

const initialState = {
  loading: true,
  forex: [],
  error: null,
};

export const fetchLoading = () => ({
  type: FETCH_LOADING,
});

export const fetchSuccessRates = (payload) => ({
  type: FETCH_SUCCESS_RATES,
  payload,
});

export const fetchError = (payload) => ({
  type: FETCH_ERROR,
  payload,
});

export const fetchRequestForexRates = () => async (dispatch) => {
  dispatch(fetchLoading());
  latestRates()
    .then((result) => {
      dispatch(
        fetchSuccessRates(result),
      );
    })
    .catch((error) => {
      fetchError(error);
    });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOADING:
      return {
        forex: [...state.forex],
        loading: true,
        error: null,
      };

    case FETCH_SUCCESS_RATES:
      return {
        loading: false,
        forex: action.payload,
        error: null,
      };

    case FETCH_ERROR:
      return {
        loading: false,
        forex: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
