/* eslint-disable react/prop-types */
import DetailsCard from './DetailsCard';

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
  if (!data.details[currency]) {
    return (
      <p>No Result for this currency</p>
    );
  }
  const rates = Object.entries(data.details[currency].rates);
  return (
    <div className="flex flex-col">
      <p>
        Last Update:
        {data.details[currency].date}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-6">
        {rates.map((rate) => (
          <div key={rate[0]}>
            <DetailsCard name={rate[0]} value={rate[1]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrencyExchangeRates;
