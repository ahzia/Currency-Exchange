import PropTypes from 'prop-types';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const CurrencyCard = ({ name, rate, baseCurrency }) => {
  const currencyLowerCase = name.toLowerCase();
  const currencyClass = `currency-flag currency-flag-xl currency-flag-${currencyLowerCase}`;
  return (
    <div className="currency-card">
      <div className="w-full flex justify-between">
        <div className={currencyClass} />
        <BsFillArrowRightCircleFill />
      </div>
      <div className="px-6 py-4 self-end">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p>
          {rate}
          {baseCurrency}
        </p>
      </div>
    </div>
  );
};

CurrencyCard.propTypes = {
  name: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  baseCurrency: PropTypes.string.isRequired,
};

export default CurrencyCard;
