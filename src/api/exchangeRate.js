const url = 'https://api.exchangerate.host';

const latestRates = async (base = 'usd', source = 'forex', amount = 1, places = 2) => {
  let endPoint = `${url}/latest?base=${base}&amount=${amount}&places=${places}`;
  // forex is the default sourse
  endPoint = (source === 'forex') ? endPoint : `${endPoint}&source=${source}`;
  const response = await fetch(endPoint);
  const data = await response.json();
  return data;
};

const getsymbols = async () => {
  const endPoint = `${url}/symbols`;
  const response = await fetch(endPoint);
  const data = await response.json();
  return data.symbols;
};

const convert = async (from, to, source = 'forex', amount = 1) => {
  let endPoint = `${url}/convert?from=${from}&to=${to}&amount=${amount}`;
  endPoint = (source === 'forex') ? endPoint : `${endPoint}&source=${source}`;
  const response = await fetch(endPoint);
  const data = await response.json();
  return data.result;
};

const bankSources = async () => {
  const endPoint = `${url}/sources`;
  const response = await fetch(endPoint);
  const data = await response.json();
  return data.sources;
};

const cryptoList = async () => {
  const endPoint = `${url}/cryptocurrencies`;
  const response = await fetch(endPoint);
  const data = await response.json();
  return data.cryptocurrencies;
};

export {
  latestRates, getsymbols, convert, bankSources, cryptoList,
};
