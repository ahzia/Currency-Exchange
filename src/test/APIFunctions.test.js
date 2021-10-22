import { latestRates } from '../api/exchangeRate';

describe('get data From API', () => {
  it('get latest currency rates with default base:USD', () => {
    latestRates().then((data) => {
      expect(data).toBeInstanceOf(Object);
      expect(data.rates).toBeInstanceOf(Object);
      expect(data.base).toEqual('USD');
    });
  });
  it('get latest currency rates with a custome base:AFN', () => {
    latestRates('AFN').then((data) => {
      expect(data).toBeInstanceOf(Object);
      expect(data.rates).toBeInstanceOf(Object);
      expect(data.base).toEqual('AFN');
      expect(data.rates.afn).toEqual(1);
    });
  });
});
