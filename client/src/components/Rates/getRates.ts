import axios from 'axios';
import Currency from '../../currency';
import { RatesResponse, Response } from './typings';

const KEY = process.env.REACT_APP_CURRENCY_API_KEY;

export const getRates = async (from: Currency): Promise<RatesResponse> => {
  const { data }: Response = await axios.get(
    `https://api.getgeoapi.com/v2/currency/convert?api_key=${KEY}&from=${from}`
  );

  const ratesArray = Object.entries(data.rates)
    .map((rate) => {
      return { currencyCode: rate[0], info: rate[1] };
    })
    .filter((rate) => rate.currencyCode in Currency);

  // Convert currencyCode to Currency enum
  const ratesEnumArray = ratesArray.map((rate) => {
    return { currencyCode: rate.currencyCode as Currency, info: rate.info };
  });
  return ratesEnumArray;
};
