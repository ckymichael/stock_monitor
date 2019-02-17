from server.controller.YahooStockPriceGetter import ns_yahoo_stock_price
from flask_restplus import Api

api = Api(
    title='Live Stream scraper',
    version='1.0',
    description='Happy scraping',
    doc='/document'
)

api.add_namespace(ns_yahoo_stock_price)
