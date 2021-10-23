import PropTypes from 'prop-types';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const ExchangeCard = ({ name, rate, baseCurrency }) => {
  const currencyLowerCase = name.toLowerCase();
  const currencyClass = `currency-flag currency-flag-xl currency-flag-${currencyLowerCase}`;

  return (
    <div className="exchange-card">
      <div className="flex">
        <div className={currencyClass} />
        <div className="font-bold text-xl mx-5">{name}</div>
      </div>
      <div className="flex items-center">
        <p className="text-xl mx-3">
          {rate}
          {baseCurrency}
        </p>
        <BsFillArrowRightCircleFill />
      </div>
    </div>
  );
};

ExchangeCard.propTypes = {
  name: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  baseCurrency: PropTypes.string.isRequired,
};

export default ExchangeCard;
