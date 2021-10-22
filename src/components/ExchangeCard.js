import PropTypes from 'prop-types';

const ExchangeCard = ({ name, rate, baseCurrency }) => (
  <div className="rounded overflow-hidden shadow-lg">
    <div className="flex px-6 py-4">
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

ExchangeCard.propTypes = {
  name: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  baseCurrency: PropTypes.string.isRequired,
};

export default ExchangeCard;
