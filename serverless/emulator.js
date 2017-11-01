import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { generateGreeting } from './utils';

const router = express.Router();

router.use('/', cors(), bodyParser.json(), (req, res) => {
	return res.json({ message: generateGreeting(true)});
});

module.exports = router;