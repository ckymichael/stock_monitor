from dataclasses import dataclass
from server.domain.models.Util import *


@dataclass
class StockPriceInfo:
    stock_code: Optional[str]
    high: Optional[float]
    low: Optional[float]
    open: Optional[float]
    close: Optional[float]
    volume: Optional[float]
    adj_close: Optional[float]

    @staticmethod
    def from_dict(obj: Any) -> 'StockPriceInfo':
        assert isinstance(obj, dict)
        high = from_union([from_float, from_none], obj.get("High"))
        low = from_union([from_float, from_none], obj.get("Low"))
        open = from_union([from_float, from_none], obj.get("Open"))
        close = from_union([from_float, from_none], obj.get("Close"))
        volume = from_union([from_float, from_none], obj.get("Volume"))
        adj_close = from_union([from_float, from_none], obj.get("Adj Close"))
        return StockPriceInfo(None, high, low, open, close, volume, adj_close)

    def to_dict(self) -> dict:
        result: dict = {}
        result["stock_code"] = from_union([from_str, from_none], self.stock_code)
        result["high"] = from_union([to_float, from_none], self.high)
        result["low"] = from_union([to_float, from_none], self.low)
        result["open"] = from_union([to_float, from_none], self.open)
        result["close"] = from_union([to_float, from_none], self.close)
        result["volume"] = from_union([to_float, from_none], self.volume)
        result["adj_close"] = from_union([to_float, from_none], self.adj_close)
        return result


def stock_price_info_from_dict(s: Any) -> StockPriceInfo:
    return StockPriceInfo.from_dict(s)


def stock_price_info_to_dict(x: StockPriceInfo) -> Any:
    return to_class(StockPriceInfo, x)
