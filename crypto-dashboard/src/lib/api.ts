import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3',
});

export const fetchTopCryptos = async () => {
  const response = await api.get('/coins/markets', {
    params: {
      vs_currency: 'usd',
      order: 'market_cap_desc',
      per_page: 10,
      page: 1,
      sparkline: false,
    },
  });
  return response.data;
};