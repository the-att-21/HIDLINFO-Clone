const axios = require('axios');
const db = require('./db/connect');

async function fetchAndStoreData() {
  const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
  const tickers = response.data;

  for (const ticker in tickers) {
    const { name, last, buy, sell, volume, base_unit } = tickers[ticker];

    const query = {
      text: 'INSERT INTO tickers (name, last, buy, sell, volume, base_unit) VALUES ($1, $2, $3, $4, $5, $6)',
      values: [name, last, buy, sell, volume, base_unit],
    };

    await db.query(query);
  }
}

module.exports = fetchAndStoreData;