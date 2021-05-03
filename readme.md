#StockCalculator

The 2 stock calculator functions - calculateMaxProfit and calculateMaxProfitWithShortSell are present in the **stockCalculator.js** file

to start project:
Make sure you have Node JS installed in your machine, then:
```bash
1. npm install
```

```bash
2. npm start
```
This will start a local server at port 4000. 

The 2 functions are accesible via 2 POST endpoints:

```bash
1. /maxprofit
```

```bash
2. /maxprofitwithshortsell
```

You can test them by sending POST requests with a body in the format

```bash
{
	"prices": [1, 2, 3]
}
```


### Testing
This project uses Mocha and Assert for testing. Visit http://mochajs.org for details

to execute tests:

```bash
npm test
```

## Development

This project uses EditorConfig to standardize text editor configuration. Visit http://editorconfig.org for details.


