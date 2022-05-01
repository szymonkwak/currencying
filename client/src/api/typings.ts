import Currency from '../currency';

export type Response = {
  data: {
    base_currency_code: string;
    base_currency_name: string;
    amount: string;
    updated_date: string;
    rates: { string: { currency_name: string; rate: string; rate_for_amount: string } };
  };
};

export type Rate = {
  currencyToCode: Currency;
  currencyToName: string;
  currencyFromCode: Currency;
  currencyFromName: string;
  sellRate: string;
  buyRate: string;
};
