import { latestRates } from '../../api/exchangeRate';

const FETCH_LOADING = 'FETCH_LOADING';
const FETCH_SUCCESS_RATES = 'FETCH_SUCCESS_RATES';
const FETCH_ERROR = 'FETCH_ERROR';

const initialState = {
  loading: true,
  exchange: {},
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

export const fetchRequestForexExchange = (currency) => async (dispatch, getState) => {
  dispatch(fetchLoading());
  if (!getState().forexDetails.exchange[currency]) {
    latestRates(currency)
      .then((result) => {
        dispatch(
          fetchSuccessRates(result, currency),
        );
      })
      .catch((error) => {
        fetchError(error);
      });
  } else {
    const result = getState().forexDetails.exchange[currency];
    dispatch(
      fetchSuccessRates(result, currency),
    );
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOADING:
      return {
        exchange: { ...state.exchange },
        loading: true,
        error: null,
      };

    case FETCH_SUCCESS_RATES:
      if (!action.currency) {
        return {
          loading: false,
          exchange: { ...state.exchange },
          error: null,
        };
      }
      return {
        loading: false,
        exchange: { ...state.exchange, [action.currency]: action.payload },
        error: null,
      };
    case FETCH_ERROR:
      return {
        loading: false,
        exchange: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
