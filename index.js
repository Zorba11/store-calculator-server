const express = require('express');
const stockCalculator = require('./stockCalculator');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post('/maxprofit', (req, res) => {
  let prices = req.body.prices;
  console.log('body..', req.body);
  console.log('prices..', prices);
  if (!prices || prices.some(isNaN)) {
   return res.status(400).send('Please input stock prices!');
  }

  if (prices && prices.length > 1) {

    let maxProfit = stockCalculator.calculateMaxProfit(prices);

    return res.json({"maxProfit": maxProfit});
  } else {
    return res.status(400).send('Need atleast two time periods to make a profit!!');
  }
})

app.post('/maxprofitwithshortsell', (req, res) => {
  let prices = req.body.prices;

  if (!prices || prices.some(isNaN)) {
    return res.status(400).send('Please input stock prices!');
  }

  if (prices && prices.length > 1) {
    let maxProfitwithShortsell = stockCalculator.calculateMaxProfitWithShortSell(prices);

    return res.json({ "maxProfitWithShortsell": maxProfitwithShortsell });
  } else {
    return res.status(400).send('Need atleast two time periods to make a profit!!');
  }

});

app.listen(process.env.PORT || 4000, () => {
  console.log(`listening on PORT: 4000`);
})
