import express from 'express';
import {config} from 'dotenv'
import * as bodyParser from "body-parser";

import routes from './routes/api';

const app = express();
config()
app.use(bodyParser.json())
app.use('/api', routes)
console.log(process.env.PORT)
app.listen(3001, () => {
    console.log("Running :)")
})
