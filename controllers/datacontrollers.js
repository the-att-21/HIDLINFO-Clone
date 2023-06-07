const db = require('../db/connect');
const getdata = async (req, res) => {
    try {
        const query = 'SELECT * FROM tickers';
        const { rows } = await db.query(query);

        res.render('tickers', { tickers: rows });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}
module.exports = { getdata };