import { useHistory } from 'react-router-dom';
import CurrencyCard from '../CurrencyCard';

/* eslint-disable react/prop-types */
const Home = ({ data }) => {
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
  const history = useHistory();
  function handleOnCardClick(currency) {
    history.push(`/details/${currency}`);
  }
  const { forex } = data;
  const rates = Object.entries(forex.rates);
  return (
    <div className="flex flex-col">
      <p>
        Last Update:
        {forex.date}
      </p>
      <p>
        Base Currency:
        {forex.base}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-6">
        {rates.map((currencyData) => (
          // currencyData[0] is the Currency name and currencyData[1] is the Exchange rate
          <div key={currencyData[0]} onClick={() => handleOnCardClick(currencyData[0])} role="button" onKeyDown={() => handleOnCardClick(currencyData[0])} tabIndex={0}>
            <CurrencyCard
              name={currencyData[0]}
              rate={currencyData[1]}
              baseCurrency={forex.base}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
