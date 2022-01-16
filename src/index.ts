import bodyParser from 'body-parser';
import express from 'express';
import CalcCtrl from './controllers/CalcController';
import cors from 'cors'


const app = express()

const port = 3030
app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', CalcCtrl)

app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
  console.log('Press CTRL-C to stop\n');
})
