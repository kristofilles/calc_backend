import bodyParser from 'body-parser';
import express from 'express';
import CalcCtrl from './controllers/CalcController';


const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', CalcCtrl)

app.listen(3000, () => {
  console.log(`Running at localhost:3000`);
  console.log('Press CTRL-C to stop\n');
})
