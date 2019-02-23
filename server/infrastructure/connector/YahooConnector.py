from datetime import datetime, timedelta

from pandas_datareader import data as pdr

from server.infrastructure.models import StockInfo
from server.infrastructure.models.StockInfo import stock_info_from_dict
import requests
from string import Template
import logging

class YahooStockPriceConnector:
    YAHOO_QUERY_URL_TEMPLATE = Template("https://query2.finance.yahoo.com/v1/finance/search?q=$quote&quotesCount=10&newsCount=0&quotesQueryId=tss_match_phrase_query&multiQuoteQueryId=multi_quote_single_token_query&newsQueryId=news_ss_symbols&enableCb=true")

    @staticmethod
    def get_latest_stock_price(stock_code: str) -> StockInfo:
        stock_data = pdr.get_data_yahoo(stock_code, start=datetime.now().date() - timedelta(days=5),
                                        end=datetime.now().date())
        stock_price_info = stock_info_from_dict(stock_data.to_dict(orient='records')[-1])
        stock_price_info.stock_code = stock_code
        return stock_price_info

    @staticmethod
    def get_stock_quote(stock_code: str) -> StockInfo:
        stock_data = pdr.get_quote_yahoo(stock_code)
        stock_price_info = stock_info_from_dict(stock_data.to_dict(orient='records')[0])
        stock_price_info.stock_code = stock_code
        return stock_price_info

    @staticmethod
    def get_all_stock_code() -> []:
        sym = pdr.get_iex_symbols()
        pdr.get_nasdaq_symbols()
        return sym['symbol'].to_list()

    def get_yahoo_quotes(self, inputValue: str):
        result = {}
        try:
            result = requests.get(self.YAHOO_QUERY_URL_TEMPLATE.substitute(quote=inputValue)).json()
        except Exception as e:
            logging.error(e)
        return result

