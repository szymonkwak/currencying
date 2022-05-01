import axios from 'axios';
import Currency, { SPREAD } from '../currency';
import { Rate, Response } from './typings';

const KEY = process.env.REACT_APP_CURRENCY_API_KEY;

export const getExchange = async (from: Currency, to: Currency, amount: number = 1): Promise<Rate> => {
  const { data }: Response = await axios.get(
    `https://api.getgeoapi.com/v2/currency/convert?api_key=${KEY}&from=${from}&to=${to}&amount=${amount}`
  );

  const rate = { currencyCode: Object.entries(data.rates)[0][0], info: Object.entries(data.rates)[0][1] };

  return {
    currencyFromCode: from,
    currencyFromName: data.base_currency_name,
    currencyToCode: rate.currencyCode as Currency,
    currencyToName: rate.info.currency_name,
    sellRate: (parseFloat(rate.info.rate) + parseFloat(rate.info.rate) * SPREAD).toFixed(4),
    buyRate: (parseFloat(rate.info.rate) - parseFloat(rate.info.rate) * SPREAD).toFixed(4),
  };
};
