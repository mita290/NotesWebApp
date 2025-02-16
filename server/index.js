import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/routes.js';
import cors from 'cors';

const app = express();

const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());
app.use("/api/notes", router);
app.listen(port, () => console.log(`Server running on port ${port}`));
