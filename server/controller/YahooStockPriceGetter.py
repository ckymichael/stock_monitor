from flask import request
from flask_restplus import Resource, Namespace

from server.infrastructure.connector.YahooConnector import YahooStockPriceConnector
from server.infrastructure.models.StockInfo import stock_info_to_dict

ns_yahoo_stock_price = Namespace("YahooStockPrice")


@ns_yahoo_stock_price.route('/yahoo-stock-price')
class YahooStockPriceGetter(Resource):
    STOCK_CODE = 'stockCode'
    STOCK_CODE_PARSER = ns_yahoo_stock_price.parser()
    STOCK_CODE_PARSER.add_argument(STOCK_CODE, type=str, help='stock code', location='query')
    YAHOO_STOCK_PRICE_CONNECTOR = YahooStockPriceConnector()

    @ns_yahoo_stock_price.expect(STOCK_CODE_PARSER)
    def get(self) -> {}:
        stock_code = request.args.get(self.STOCK_CODE)
        stock_data = self.YAHOO_STOCK_PRICE_CONNECTOR.get_stock_quote(stock_code)
        return stock_info_to_dict(stock_data)


@ns_yahoo_stock_price.route('/yahoo-stock-code')
class YahooStockCodeGetter(Resource):
    STOCK_CODE = 'stockCode'
    STOCK_CODE_PARSER = ns_yahoo_stock_price.parser()
    STOCK_CODE_PARSER.add_argument(STOCK_CODE, type=str, help='stock code', location='query')
    YAHOO_STOCK_PRICE_CONNECTOR = YahooStockPriceConnector()

    def get(self) -> []:
        stock_code = request.args.get(self.STOCK_CODE)
        return self.YAHOO_STOCK_PRICE_CONNECTOR.get_yahoo_quotes(stock_code)
