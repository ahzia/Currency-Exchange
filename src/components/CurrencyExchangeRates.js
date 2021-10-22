import PropTypes from 'prop-types';
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
  return (
    <div className="flex flex-col">
      <p>
        Last Update:
        {data.exchange[currency].date}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-6">
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
