import { latestRates } from '../../api/exchangeRate';

const FETCH_LOADING = 'FETCH_LOADING';
const FETCH_SUCCESS_RATES = 'FETCH_SUCCESS_RATES';
const FETCH_ERROR = 'FETCH_ERROR';

const initialState = {
  loading: true,
  details: {},
  error: null,
};

export const fetchLoading = () => ({
  type: FETCH_LOADING,
});

export const fetchSuccessRates = (payload, currency) => ({
  type: FETCH_SUCCESS_RATES,
  payload,
  currency,
});

export const fetchError = (payload) => ({
  type: FETCH_ERROR,
  payload,
});

export const fetchRequestForexDetails = (currency) => async (dispatch) => {
  dispatch(fetchLoading());
  latestRates(currency)
    .then((result) => {
      dispatch(
        fetchSuccessRates(result, currency),
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
        details: { ...state.details },
        loading: true,
        error: null,
      };

    case FETCH_SUCCESS_RATES:
      if (!action.currency) {
        return {
          loading: false,
          details: { ...state.details },
          error: null,
        };
      }
      return {
        loading: false,
        details: { ...state.details, [action.currency]: action.payload },
        error: null,
      };
    case FETCH_ERROR:
      return {
        loading: false,
        details: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
