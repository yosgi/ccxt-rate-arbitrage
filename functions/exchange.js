const  ccxt = require ('ccxt');
const config = require('../configs/default.json')
const  HttpsProxyAgent = require ('https-proxy-agent')
const proxy = config.proxy
const agent = proxy ? new HttpsProxyAgent (proxy) : '';
const exchangeId = 'bybit'
, exchangeClass = ccxt[exchangeId]
, exchange = new exchangeClass ({...config.account,agent})
// use testnet instead
exchange.setSandboxMode (true)
module.exports = exchange