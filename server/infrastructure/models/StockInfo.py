from schematics.models import Model
from schematics.types import StringType, DecimalType, IntType, BooleanType


class StockInfo(Model):
    stock_code = StringType()
    language = StringType()
    region = StringType()
    quote_type = StringType(deserialize_from="quoteType",
                            serialized_name="quoteType")
    currency = StringType()
    fifty_two_week_low_change_percent = DecimalType(deserialize_from="fiftyTwoWeekLowChangePercent",
                                                    serialized_name="fiftyTwoWeekLowChangePercent")
    fifty_two_week_low_change = DecimalType(deserialize_from="fifty_two_week_low_change",
                                            serialized_name="fifty_two_week_low_change")
    fifty_two_week_range = StringType(deserialize_from="fiftyTwoWeekRange", serialized_name="fiftyTwoWeekRange")
    fifty_two_week_high_change = DecimalType(deserialize_from="fiftyTwoWeekHighChange",
                                             serialized_name="fiftyTwoWeekHighChange")
    fifty_two_week_high_change_percent = DecimalType(deserialize_from="fiftyTwoWeekHighChangePercent",
                                                     serialized_name="fiftyTwoWeekHighChangePercent")
    fifty_two_week_low = DecimalType(deserialize_from="fiftyTwoWeekLow", serialized_name="fiftyTwoWeekLow")
    fifty_two_week_high = DecimalType(deserialize_from="fiftyTwoWeekHigh", serialized_name="fiftyTwoWeekHigh")
    dividend_date = IntType(deserialize_from="dividendDate", serialized_name="dividendDate")
    earnings_timestamp = IntType(deserialize_from="earningsTimestamp", serialized_name="earningsTimestamp")
    earnings_timestamp_start = IntType(deserialize_from="earningsTimestampStart",
                                       serialized_name="earningsTimestampStart")
    earnings_timestamp_end = IntType(deserialize_from="earningsTimestampEnd", serialized_name="earningsTimestampEnd")
    trailing_annual_dividend_rate = DecimalType(deserialize_from="trailingAnnualDividendRate",
                                                serialized_name="trailingAnnualDividendRate")
    trailing_pe = DecimalType(deserialize_from="trailingPe", serialized_name="trailingPe")
    trailing_annual_dividend_yield = DecimalType(deserialize_from="trailingAnnualDividendYield",
                                                 serialized_name="trailingAnnualDividendYield")
    eps_trailing_twelve_months = DecimalType(deserialize_from="epsTrailingTwelveMonths",
                                             serialized_name="epsTrailingTwelveMonths")
    eps_forward = DecimalType(deserialize_from="epsForward", serialized_name="epsForward")
    post_market_change_percent = DecimalType(deserialize_from="postMarketChangePercent",
                                             serialized_name="postMarketChangePercent")
    exchange_data_delayed_by = IntType(deserialize_from="exchangeDataDelayedBy",
                                       serialized_name="exchangeDataDelayedBy")
    shares_outstanding = IntType(deserialize_from="sharesOutstanding", serialized_name="sharesOutstanding")
    book_value = DecimalType(deserialize_from="bookValue", serialized_name="bookValue")
    fifty_day_average = DecimalType(deserialize_from="fiftyDayAverage", serialized_name="fiftyDayAverage")
    fifty_day_average_change = DecimalType(deserialize_from="fiftyDayAverageChange",
                                           serialized_name="fiftyDayAverageChange")
    fifty_day_average_change_percent = DecimalType(deserialize_from="fiftyDayAverageChangePercent",
                                                   serialized_name="fiftyday_average_change_percent")
    two_hundred_day_average = DecimalType(deserialize_from="twoHundredDayAverage",
                                          serialized_name="twoHundredDayAverage")
    two_hundred_day_average_change = DecimalType(deserialize_from="twoHundredDayAverageChange",
                                                 serialized_name="twoHundredDayAverageChange")
    two_hundred_day_average_change_percent = DecimalType(deserialize_from="twoHundredDayAverageChangePercent",
                                                         serialized_name="twoHundredDayAverageChangePercent")
    forward_pe = DecimalType(deserialize_from="forwardPe", serialized_name="forwardPe")
    market_cap = IntType(deserialize_from="marketCap", serialized_name="marketCap")
    exchange = StringType()
    price_hint = IntType(deserialize_from="priceHint", serialized_name="priceHint")
    regular_market_price = DecimalType(deserialize_from="regularMarketPrice", serialized_name="regularMarketPrice")
    regular_market_time = IntType(deserialize_from="regularMarketTime", serialized_name="regular_market_time")
    regular_market_change = DecimalType(deserialize_from="regularMarketChange", serialized_name="regularMarketChange")
    regular_market_open = DecimalType(deserialize_from="regularMarketOpen", serialized_name="regularMarketOpen")
    regular_market_day_high = DecimalType(deserialize_from="regularMarketDayHigh",
                                          serialized_name="regularMarketDayHigh")
    regular_market_day_low = DecimalType(deserialize_from="regularMarketDayLow", serialized_name="regularMarketDayLow")
    regular_market_volume = IntType(deserialize_from="regularMarketVolume", serialized_name="regularMarketVolume")
    post_market_time = IntType(deserialize_from="postMarketTime", serialized_name="postMarketTime")
    post_market_price = DecimalType(deserialize_from="postMarketPrice", serialized_name="postMarketPrice")
    post_market_change = DecimalType(deserialize_from="postMarketChange", serialized_name="postMarketChange")
    regular_market_change_percent = DecimalType(deserialize_from="regularMarketChangePercent",
                                                serialized_name="regularMarketChangePercent")
    regular_market_day_range = StringType(deserialize_from="regularMarketDayRange",
                                          serialized_name="regularMarketDayRange")
    regular_market_previous_close = DecimalType(deserialize_from="regularMarketPreviousClose",
                                                serialized_name="regularMarketPreviousClose")
    message_board_id = StringType(deserialize_from="messageBoardId", serialized_name="messageBoardId")
    full_exchange_name = StringType(deserialize_from="fullExchangeName", serialized_name="fullExchangeName")
    long_name = StringType(deserialize_from="longName", serialized_name="longName")
    financial_currency = StringType(deserialize_from="financialCurrency", serialized_name="financialCurrency")
    average_daily_volume3_month = IntType(deserialize_from="averageDailyVolume3Month",
                                          serialized_name="averageDailyVolume3Month")
    average_daily_volume10_day = IntType(deserialize_from="averageDailyVolume10Day",
                                         serialized_name="averageDailyVolume10Day")
    price_to_book = DecimalType(deserialize_from="priceToBook", serialized_name="priceToBook")
    source_interval = IntType(deserialize_from="sourceInterval", serialized_name="sourceInterval")
    exchange_timezone_name = StringType(deserialize_from="exchangeTimezoneName", serialized_name="exchangeTimezoneName")
    exchange_timezone_short_name = StringType(deserialize_from="exchangeTimezoneShortName",
                                              serialized_name="exchangeTimezoneShortName")
    gmt_off_set_milliseconds = IntType(deserialize_from="gmtOffSetMilliseconds",
                                       serialized_name="gmtOffSetMilliseconds")
    esg_populated = BooleanType(deserialize_from="esgPopulated", serialized_name="esgPopulated")
    tradeable = BooleanType(deserialize_from="tradeable", serialized_name="tradeable")
    short_name = StringType(deserialize_from="shortName", serialized_name="shortName")
    market_state = StringType(deserialize_from="marketState", serialized_name="marketState")
    market = StringType()
    price = DecimalType()
