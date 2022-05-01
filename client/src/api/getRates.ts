import axios from 'axios';
import Currency, { SPREAD } from '../currency';
import { Rate, Response } from './typings';

const KEY = process.env.REACT_APP_CURRENCY_API_KEY;

export const getRates = async (from: Currency): Promise<Rate[]> => {
  const { data }: Response = await axios.get(
    `https://api.getgeoapi.com/v2/currency/convert?api_key=${KEY}&from=${from}`
  );

  const ratesArray = Object.entries(data.rates)
    .map((rate) => {
      return { currencyToCode: rate[0], info: rate[1] };
    })
    .filter((rate) => rate.currencyToCode in Currency);

  // Convert currencyCode to Currency enum
  const ratesEnumArray = ratesArray.map((rate) => {
    return {
      currencyFromCode: from,
      currencyFromName: data.base_currency_name,
      currencyToCode: rate.currencyToCode as Currency,
      currencyToName: rate.info.currency_name,
      sellRate: (parseFloat(rate.info.rate) + parseFloat(rate.info.rate) * SPREAD).toFixed(4),
      buyRate: (parseFloat(rate.info.rate) - parseFloat(rate.info.rate) * SPREAD).toFixed(4),
    };
  });
  return ratesEnumArray;
};
