export interface YahooQueryResult {
  count:                          number;
  explains:                       any[];
  lists:                          any[];
  nav:                            any[];
  news:                           any[];
  quotes:                         Quote[];
  timeTakenForAlgowatchlist:      number;
  timeTakenForCrunchbase:         number;
  timeTakenForNews:               number;
  timeTakenForPredefinedScreener: number;
  timeTakenForQuotes:             number;
  totalTime:                      number;
}

export class Quote {
  exchange?:      string;
  index:          string;
  isYahooFinance: boolean;
  longname?:      string;
  quoteType?:     string;
  score?:         number;
  shortname?:     string;
  symbol?:        string;
  typeDisp?:      string;
  name?:          string;
  permalink?:     string;
}
