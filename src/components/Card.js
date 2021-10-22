/* eslint-disable react/prop-types */
const Card = ({ name, value }) => (
  <div className="rounded overflow-hidden shadow-lg cursor-pointer">
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{name}</div>
      <p className="text-gray-700 text-gray">
        More info About Currency
        Value:
        {value}
      </p>
    </div>
  </div>
);

export default Card;
