import PropTypes from 'prop-types';

const CurrencyCard = ({ name, rate, baseCurrency }) => (
  <div className="rounded overflow-hidden shadow-lg cursor-pointer">
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{name}</div>
      <p className="text-gray-700 text-gray">
        More info About Currency
        Value:
        {rate}
        {baseCurrency}
      </p>
    </div>
  </div>
);

CurrencyCard.propTypes = {
  name: PropTypes.string.isRequired,
  rate: PropTypes.string.isRequired,
  baseCurrency: PropTypes.string.isRequired,
};

export default CurrencyCard;
