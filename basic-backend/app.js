import {config} from 'dotenv';
import path, {dirname} from 'path';
import express from 'express';
import {fileURLToPath} from 'url';
import {router as api} from './api.js';

const __filename = fileURLToPath(
    import.meta.url);
const __dirname = dirname(__filename);
config({path: './config/app.env'});

const app = express();

app.use('/api', api);

app.use(express.static(process.env.FRONTEND_DIST_PATH));
app.use((req, res) => {
    res.sendFile(path.join(__dirname, process.env.FRONTEND_DIST_PATH, 'index.html'))
});

app.listen(process.env.NODE_PORT, () => {
    console.log(`App listening at Port ${process.env.NODE_PORT}`)
});
