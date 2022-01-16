import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import routes from './routes/etfRouter.js';
import { parseInputData } from './etc/helper.js';

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));

app.use(cors());

app.use('/api/', routes);

// parseInputData({ name: 'test1' });

app.server = app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
