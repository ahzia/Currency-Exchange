import { useHistory } from 'react-router-dom';
import Card from '../Card';

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
  const rates = Object.entries(data.forex.rates);
  return (
    <div className="flex flex-col">
      <p>
        Last Update:
        {data.forex.date}
      </p>
      <p>
        Base Currency:
        {data.forex.base}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-6">
        {rates.map((rate) => (
          <div key={rate[0]} onClick={() => handleOnCardClick(rate[0])} role="button" onKeyDown={() => handleOnCardClick(rate[0])} tabIndex={0}>
            <Card name={rate[0]} value={rate[1]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
