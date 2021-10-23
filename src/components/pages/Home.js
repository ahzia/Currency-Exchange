import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import CurrencyCard from '../CurrencyCard';

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
  const currencyLowerCase = forex.base.toLowerCase();
  const currencyClass = `currency-flag currency-flag-xl currency-flag-${currencyLowerCase}`;
  return (
    <div className="content-container">
      <div className="page-header">
        <div className="m-auto">
          <div className={currencyClass} />
        </div>
        <div className="m-auto">
          <p className="font-bold text-xl">
            {forex.base}
          </p>
          <p>
            Last Update:
            {forex.date}
          </p>
        </div>
      </div>
      <div className="bg-gray-700 text-pink-500 mx-4  ">
        Exchange Rates for base currency:
        {forex.base}
      </div>
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

Home.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default Home;
