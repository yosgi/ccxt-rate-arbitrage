const exchange = require('./exchange')
const getSymbol = async () => {
    let symbols = ["SANDUSDT","BTCUSDT","ETHUSDT","BCHUSDT","SOLUSDT","XRPUSDT","DOTUSDT","ADAUSDT","DOGEUSDT"]
    let aimSymbol = ""
    let rate = 0
    for(let i = 0 ; i < symbols.length ; i ++) {
        let symbol = symbols[i]
        let {result} = await exchange.publicGetPublicLinearFundingPrevFundingRate({symbol})
        console.log(result.symbol + result.funding_rate)
        if (result.funding_rate > rate) {
            rate = result.funding_rate;
            aimSymbol = result.symbol
        }
    }
    if (rate > 0) {
        return [aimSymbol,rate - 0]
    } else {
        return ['',0]
    }
}

module.exports = getSymbol;