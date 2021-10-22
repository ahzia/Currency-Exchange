/* eslint-disable react/prop-types */
const DetailsCard = ({ name, value }) => (
  <div className="rounded overflow-hidden shadow-lg">
    <div className="flex px-6 py-4">
      <div className="font-bold text-xl mb-2">{name}</div>
      <p className="text-gray-700 text-gray">
        More info About Currency
        Value:
        {value}
      </p>
    </div>
  </div>
);

export default DetailsCard;
