#StockCalculator

The 2 stock calculator functions - calculateMaxProfit and calculateMaxProfitWithShortSell are present in the **stockCalculator.js** file

To see a complete version with a UI, 
please visit: https://stock-calculator-assignment.netlify.app/

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
1. curl -X POST \
  http://localhost:4000/maxprofit \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 332d291e-ee74-e1e1-b05a-8156f6563a27' \
  -d '{
	"prices": [79, 51, 60, 10, 7, 4, 5, 8]
}'
```

```bash
2. curl -X POST \
  http://localhost:4000/maxprofitwithshortsell \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 4e5cc161-2f41-a497-0325-0899ccc23b47' \
  -d '{
	"prices": [1, 2, 3]
}'
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


