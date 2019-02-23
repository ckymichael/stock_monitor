from dataclasses import dataclass
from server.domain.models.Util import *


@dataclass
class StockInfo:
    stock_code: Optional[str]
    language: Optional[str]
    region: Optional[str]
    quote_type: Optional[str]
    currency: Optional[str]
    fifty_two_week_low_change_percent: Optional[float]
    fifty_two_week_low_change: Optional[float]
    fifty_two_week_range: Optional[str]
    fifty_two_week_high_change: Optional[float]
    fifty_two_week_high_change_percent: Optional[float]
    fifty_two_week_low: Optional[float]
    fifty_two_week_high: Optional[float]
    dividend_date: Optional[int]
    earnings_timestamp: Optional[int]
    earnings_timestamp_start: Optional[int]
    earnings_timestamp_end: Optional[int]
    trailing_annual_dividend_rate: Optional[float]
    trailing_pe: Optional[float]
    trailing_annual_dividend_yield: Optional[float]
    eps_trailing_twelve_months: Optional[float]
    eps_forward: Optional[float]
    post_market_change_percent: Optional[float]
    exchange_data_delayed_by: Optional[int]
    shares_outstanding: Optional[int]
    book_value: Optional[float]
    fifty_day_average: Optional[float]
    fifty_day_average_change: Optional[float]
    fifty_day_average_change_percent: Optional[float]
    two_hundred_day_average: Optional[float]
    two_hundred_day_average_change: Optional[float]
    two_hundred_day_average_change_percent: Optional[float]
    forward_pe: Optional[float]
    market_cap: Optional[int]
    exchange: Optional[str]
    price_hint: Optional[int]
    regular_market_price: Optional[float]
    regular_market_time: Optional[int]
    regular_market_change: Optional[float]
    regular_market_open: Optional[float]
    regular_market_day_high: Optional[float]
    regular_market_day_low: Optional[float]
    regular_market_volume: Optional[int]
    post_market_time: Optional[int]
    post_market_price: Optional[float]
    post_market_change: Optional[float]
    regular_market_change_percent: Optional[float]
    regular_market_day_range: Optional[str]
    regular_market_previous_close: Optional[float]
    message_board_id: Optional[str]
    full_exchange_name: Optional[str]
    long_name: Optional[str]
    financial_currency: Optional[str]
    average_daily_volume3_month: Optional[int]
    average_daily_volume10_day: Optional[int]
    price_to_book: Optional[float]
    source_interval: Optional[int]
    exchange_timezone_name: Optional[str]
    exchange_timezone_short_name: Optional[str]
    gmt_off_set_milliseconds: Optional[int]
    esg_populated: Optional[bool]
    tradeable: Optional[bool]
    short_name: Optional[str]
    market_state: Optional[str]
    market: Optional[str]
    price: Optional[float]

    @staticmethod
    def from_dict(obj: Any) -> 'StockInfo':
        assert isinstance(obj, dict)
        language = from_union([from_str, from_none], obj.get("language"))
        region = from_union([from_str, from_none], obj.get("region"))
        quote_type = from_union([from_str, from_none], obj.get("quoteType"))
        currency = from_union([from_str, from_none], obj.get("currency"))
        fifty_two_week_low_change_percent = from_union([from_float, from_none], obj.get("fiftyTwoWeekLowChangePercent"))
        fifty_two_week_low_change = from_union([from_float, from_none], obj.get("fiftyTwoWeekLowChange"))
        fifty_two_week_range = from_union([from_str, from_none], obj.get("fiftyTwoWeekRange"))
        fifty_two_week_high_change = from_union([from_float, from_none], obj.get("fiftyTwoWeekHighChange"))
        fifty_two_week_high_change_percent = from_union([from_float, from_none],
                                                        obj.get("fiftyTwoWeekHighChangePercent"))
        fifty_two_week_low = from_union([from_float, from_none], obj.get("fiftyTwoWeekLow"))
        fifty_two_week_high = from_union([from_float, from_none], obj.get("fiftyTwoWeekHigh"))
        dividend_date = from_union([from_int, from_none], obj.get("dividendDate"))
        earnings_timestamp = from_union([from_int, from_none], obj.get("earningsTimestamp"))
        earnings_timestamp_start = from_union([from_int, from_none], obj.get("earningsTimestampStart"))
        earnings_timestamp_end = from_union([from_int, from_none], obj.get("earningsTimestampEnd"))
        trailing_annual_dividend_rate = from_union([from_float, from_none], obj.get("trailingAnnualDividendRate"))
        trailing_pe = from_union([from_float, from_none], obj.get("trailingPE"))
        trailing_annual_dividend_yield = from_union([from_float, from_none], obj.get("trailingAnnualDividendYield"))
        eps_trailing_twelve_months = from_union([from_float, from_none], obj.get("epsTrailingTwelveMonths"))
        eps_forward = from_union([from_float, from_none], obj.get("epsForward"))
        post_market_change_percent = from_union([from_float, from_none], obj.get("postMarketChangePercent"))
        exchange_data_delayed_by = from_union([from_int, from_none], obj.get("exchangeDataDelayedBy"))
        shares_outstanding = from_union([from_int, from_none], obj.get("sharesOutstanding"))
        book_value = from_union([from_float, from_none], obj.get("bookValue"))
        fifty_day_average = from_union([from_float, from_none], obj.get("fiftyDayAverage"))
        fifty_day_average_change = from_union([from_float, from_none], obj.get("fiftyDayAverageChange"))
        fifty_day_average_change_percent = from_union([from_float, from_none], obj.get("fiftyDayAverageChangePercent"))
        two_hundred_day_average = from_union([from_float, from_none], obj.get("twoHundredDayAverage"))
        two_hundred_day_average_change = from_union([from_float, from_none], obj.get("twoHundredDayAverageChange"))
        two_hundred_day_average_change_percent = from_union([from_float, from_none],
                                                            obj.get("twoHundredDayAverageChangePercent"))
        forward_pe = from_union([from_float, from_none], obj.get("forwardPE"))
        market_cap = from_union([from_int, from_none], obj.get("marketCap"))
        exchange = from_union([from_str, from_none], obj.get("exchange"))
        price_hint = from_union([from_int, from_none], obj.get("priceHint"))
        regular_market_price = from_union([from_float, from_none], obj.get("regularMarketPrice"))
        regular_market_time = from_union([from_int, from_none], obj.get("regularMarketTime"))
        regular_market_change = from_union([from_float, from_none], obj.get("regularMarketChange"))
        regular_market_open = from_union([from_float, from_none], obj.get("regularMarketOpen"))
        regular_market_day_high = from_union([from_float, from_none], obj.get("regularMarketDayHigh"))
        regular_market_day_low = from_union([from_float, from_none], obj.get("regularMarketDayLow"))
        regular_market_volume = from_union([from_int, from_none], obj.get("regularMarketVolume"))
        post_market_time = from_union([from_int, from_none], obj.get("postMarketTime"))
        post_market_price = from_union([from_float, from_none], obj.get("postMarketPrice"))
        post_market_change = from_union([from_float, from_none], obj.get("postMarketChange"))
        regular_market_change_percent = from_union([from_float, from_none], obj.get("regularMarketChangePercent"))
        regular_market_day_range = from_union([from_str, from_none], obj.get("regularMarketDayRange"))
        regular_market_previous_close = from_union([from_float, from_none], obj.get("regularMarketPreviousClose"))
        message_board_id = from_union([from_str, from_none], obj.get("messageBoardId"))
        full_exchange_name = from_union([from_str, from_none], obj.get("fullExchangeName"))
        long_name = from_union([from_str, from_none], obj.get("longName"))
        financial_currency = from_union([from_str, from_none], obj.get("financialCurrency"))
        average_daily_volume3_month = from_union([from_int, from_none], obj.get("averageDailyVolume3Month"))
        average_daily_volume10_day = from_union([from_int, from_none], obj.get("averageDailyVolume10Day"))
        price_to_book = from_union([from_float, from_none], obj.get("priceToBook"))
        source_interval = from_union([from_int, from_none], obj.get("sourceInterval"))
        exchange_timezone_name = from_union([from_str, from_none], obj.get("exchangeTimezoneName"))
        exchange_timezone_short_name = from_union([from_str, from_none], obj.get("exchangeTimezoneShortName"))
        gmt_off_set_milliseconds = from_union([from_int, from_none], obj.get("gmtOffSetMilliseconds"))
        esg_populated = from_union([from_bool, from_none], obj.get("esgPopulated"))
        tradeable = from_union([from_bool, from_none], obj.get("tradeable"))
        short_name = from_union([from_str, from_none], obj.get("shortName"))
        market_state = from_union([from_str, from_none], obj.get("marketState"))
        market = from_union([from_str, from_none], obj.get("market"))
        price = from_union([from_float, from_none], obj.get("price"))
        return StockInfo("", language, region, quote_type, currency, fifty_two_week_low_change_percent,
                         fifty_two_week_low_change, fifty_two_week_range, fifty_two_week_high_change,
                         fifty_two_week_high_change_percent, fifty_two_week_low, fifty_two_week_high, dividend_date,
                         earnings_timestamp, earnings_timestamp_start, earnings_timestamp_end,
                         trailing_annual_dividend_rate, trailing_pe, trailing_annual_dividend_yield,
                         eps_trailing_twelve_months, eps_forward, post_market_change_percent, exchange_data_delayed_by,
                         shares_outstanding, book_value, fifty_day_average, fifty_day_average_change,
                         fifty_day_average_change_percent, two_hundred_day_average, two_hundred_day_average_change,
                         two_hundred_day_average_change_percent, forward_pe, market_cap, exchange, price_hint,
                         regular_market_price, regular_market_time, regular_market_change, regular_market_open,
                         regular_market_day_high, regular_market_day_low, regular_market_volume, post_market_time,
                         post_market_price, post_market_change, regular_market_change_percent, regular_market_day_range,
                         regular_market_previous_close, message_board_id,
                         full_exchange_name, long_name, financial_currency, average_daily_volume3_month,
                         average_daily_volume10_day, price_to_book, source_interval, exchange_timezone_name,
                         exchange_timezone_short_name, gmt_off_set_milliseconds, esg_populated, tradeable, short_name,
                         market_state, market, price)

    def to_dict(self) -> dict:
        result: dict = {}
        result["stock_code"] = self.stock_code
        result["language"] = from_union([from_str, from_none], self.language)
        result["region"] = from_union([from_str, from_none], self.region)
        result["quoteType"] = from_union([from_str, from_none], self.quote_type)
        result["currency"] = from_union([from_str, from_none], self.currency)
        result["fiftyTwoWeekLowChangePercent"] = from_union([to_float, from_none],
                                                            self.fifty_two_week_low_change_percent)
        result["fiftyTwoWeekLowChange"] = from_union([to_float, from_none], self.fifty_two_week_low_change)
        result["fiftyTwoWeekRange"] = from_union([from_str, from_none], self.fifty_two_week_range)
        result["fiftyTwoWeekHighChange"] = from_union([to_float, from_none], self.fifty_two_week_high_change)
        result["fiftyTwoWeekHighChangePercent"] = from_union([to_float, from_none],
                                                             self.fifty_two_week_high_change_percent)
        result["fiftyTwoWeekLow"] = from_union([to_float, from_none], self.fifty_two_week_low)
        result["fiftyTwoWeekHigh"] = from_union([to_float, from_none], self.fifty_two_week_high)
        result["dividendDate"] = from_union([from_int, from_none], self.dividend_date)
        result["earningsTimestamp"] = from_union([from_int, from_none], self.earnings_timestamp)
        result["earningsTimestampStart"] = from_union([from_int, from_none], self.earnings_timestamp_start)
        result["earningsTimestampEnd"] = from_union([from_int, from_none], self.earnings_timestamp_end)
        result["trailingAnnualDividendRate"] = from_union([to_float, from_none], self.trailing_annual_dividend_rate)
        result["trailingPE"] = from_union([to_float, from_none], self.trailing_pe)
        result["trailingAnnualDividendYield"] = from_union([to_float, from_none], self.trailing_annual_dividend_yield)
        result["epsTrailingTwelveMonths"] = from_union([to_float, from_none], self.eps_trailing_twelve_months)
        result["epsForward"] = from_union([to_float, from_none], self.eps_forward)
        result["postMarketChangePercent"] = from_union([to_float, from_none], self.post_market_change_percent)
        result["exchangeDataDelayedBy"] = from_union([from_int, from_none], self.exchange_data_delayed_by)
        result["sharesOutstanding"] = from_union([from_int, from_none], self.shares_outstanding)
        result["bookValue"] = from_union([to_float, from_none], self.book_value)
        result["fiftyDayAverage"] = from_union([to_float, from_none], self.fifty_day_average)
        result["fiftyDayAverageChange"] = from_union([to_float, from_none], self.fifty_day_average_change)
        result["fiftyDayAverageChangePercent"] = from_union([to_float, from_none],
                                                            self.fifty_day_average_change_percent)
        result["twoHundredDayAverage"] = from_union([to_float, from_none], self.two_hundred_day_average)
        result["twoHundredDayAverageChange"] = from_union([to_float, from_none], self.two_hundred_day_average_change)
        result["twoHundredDayAverageChangePercent"] = from_union([to_float, from_none],
                                                                 self.two_hundred_day_average_change_percent)
        result["forwardPE"] = from_union([to_float, from_none], self.forward_pe)
        result["marketCap"] = from_union([from_int, from_none], self.market_cap)
        result["exchange"] = from_union([from_str, from_none], self.exchange)
        result["priceHint"] = from_union([from_int, from_none], self.price_hint)
        result["regularMarketPrice"] = from_union([to_float, from_none], self.regular_market_price)
        result["regularMarketTime"] = from_union([from_int, from_none], self.regular_market_time)
        result["regularMarketChange"] = from_union([to_float, from_none], self.regular_market_change)
        result["regularMarketOpen"] = from_union([to_float, from_none], self.regular_market_open)
        result["regularMarketDayHigh"] = from_union([to_float, from_none], self.regular_market_day_high)
        result["regularMarketDayLow"] = from_union([to_float, from_none], self.regular_market_day_low)
        result["regularMarketVolume"] = from_union([from_int, from_none], self.regular_market_volume)
        result["postMarketTime"] = from_union([from_int, from_none], self.post_market_time)
        result["postMarketPrice"] = from_union([to_float, from_none], self.post_market_price)
        result["postMarketChange"] = from_union([to_float, from_none], self.post_market_change)
        result["regularMarketChangePercent"] = from_union([to_float, from_none], self.regular_market_change_percent)
        result["regularMarketDayRange"] = from_union([from_str, from_none], self.regular_market_day_range)
        result["regularMarketPreviousClose"] = from_union([to_float, from_none], self.regular_market_previous_close)
        result["messageBoardId"] = from_union([from_str, from_none], self.message_board_id)
        result["fullExchangeName"] = from_union([from_str, from_none], self.full_exchange_name)
        result["longName"] = from_union([from_str, from_none], self.long_name)
        result["financialCurrency"] = from_union([from_str, from_none], self.financial_currency)
        result["averageDailyVolume3Month"] = from_union([from_int, from_none], self.average_daily_volume3_month)
        result["averageDailyVolume10Day"] = from_union([from_int, from_none], self.average_daily_volume10_day)
        result["priceToBook"] = from_union([to_float, from_none], self.price_to_book)
        result["sourceInterval"] = from_union([from_int, from_none], self.source_interval)
        result["exchangeTimezoneName"] = from_union([from_str, from_none], self.exchange_timezone_name)
        result["exchangeTimezoneShortName"] = from_union([from_str, from_none], self.exchange_timezone_short_name)
        result["gmtOffSetMilliseconds"] = from_union([from_int, from_none], self.gmt_off_set_milliseconds)
        result["esgPopulated"] = from_union([from_bool, from_none], self.esg_populated)
        result["tradeable"] = from_union([from_bool, from_none], self.tradeable)
        result["shortName"] = from_union([from_str, from_none], self.short_name)
        result["marketState"] = from_union([from_str, from_none], self.market_state)
        result["market"] = from_union([from_str, from_none], self.market)
        result["price"] = from_union([to_float, from_none], self.price)
        return result


def stock_info_from_dict(s: Any) -> StockInfo:
    return StockInfo.from_dict(s)


def stock_info_to_dict(x: StockInfo) -> Any:
    return to_class(StockInfo, x)
