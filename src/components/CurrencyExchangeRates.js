import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import ExchangeCard from './ExchangeCard';

const CurrencyExchangeRates = ({ currency, data }) => {
  if (data.loading) {
    return (
      <p>loading</p>
    );
  }
  if (data.error) {
    return (
      <p>error</p>
    );
  }
  if (!data.exchange[currency]) {
    return (
      <p>No Result for this currency</p>
    );
  }
  const rates = Object.entries(data.exchange[currency].rates);
  const currencyLowerCase = currency.toLowerCase();
  const currencyClass = `currency-flag currency-flag-xl currency-flag-${currencyLowerCase}`;
  const history = useHistory();

  return (
    <div className="content-container">
      <div className="bg-gray-700 text-pink-500 mx-4 my-4 text-md flex items-center hover:text-white hover:cursor-pointer" onClick={() => history.push('/')} role="button" onKeyDown={() => history.push('/')} tabIndex={0}>
        <MdOutlineArrowBackIosNew />
        <p>
          Back
        </p>
      </div>
      <div className="page-header">
        <div className="m-auto">
          <div className={currencyClass} />
        </div>
        <div className="m-auto">
          <p className="font-bold text-xl">
            {currency}
          </p>
          <p>
            Last Update:
            {data.exchange[currency].date}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {rates.map((currencyData) => (
          <div key={currencyData[0]}>
            <ExchangeCard name={currencyData[0]} rate={currencyData[1]} baseCurrency={currency} />
          </div>
        ))}
      </div>
    </div>
  );
};

CurrencyExchangeRates.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  currency: PropTypes.string.isRequired,
};

export default CurrencyExchangeRates;
