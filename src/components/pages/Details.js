/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchRequestForexDetails } from '../../redux/forexData/forexDetails';
import CurrencyExchangeRates from '../CurrencyExchangeRates';

const Details = ({ match }) => {
  const { params: { currencyName } } = match;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRequestForexDetails(currencyName));
  }, []);

  const forexRates = useSelector((state) => state.forexDetails);
  return (
    <div>
      <CurrencyExchangeRates currency={currencyName} data={forexRates} />
    </div>
  );
};

export default Details;
