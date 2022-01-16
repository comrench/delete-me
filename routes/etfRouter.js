import express from 'express';
import axios from 'axios';

const routes = express.Router();

routes.get('/loadETFs', async (req, res, next) => {
  console.log('routes -> /loadETFs');
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/todos'
      // 'https://purposecloud.s3.amazonaws.com/challenge-data.json'
    );
    res.send(response.data);
  } catch (err) {
    next(err);
  }
});

routes.post('/saveETFs', async (req, res, next) => {
  console.log('routes -> /saveETFs');
  try {
    res.json(req.body);
  } catch (err) {
    next(err);
  }
});

export default routes;
