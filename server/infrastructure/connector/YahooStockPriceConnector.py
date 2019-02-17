from datetime import datetime, timedelta

from pandas_datareader import data as pdr

from server.infrastructure.models import StockPriceInfo
from server.infrastructure.models.StockPriceInfo import stock_price_info_from_dict


class YahooStockPriceConnector:

    @staticmethod
    def get_latest_stock_price(stock_code: str) -> StockPriceInfo:
        stock_data = pdr.get_data_yahoo(stock_code, start=datetime.now().date() - timedelta(days=5), end=datetime.now().date())
        stock_price_info = stock_price_info_from_dict(stock_data.to_dict(orient='records')[-1])
        stock_price_info.stock_code = stock_code
        return stock_price_info
