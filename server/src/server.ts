import express from 'express';
import path from 'path';
import cors from 'cors';

import routes from './routes';

const PORT = 3333;
const app = express();

app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(cors());

app.listen(PORT);
