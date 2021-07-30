import express, { Application } from 'express';
import { connect } from './database/connect';
import routes from './routes/routes';

const port = process.env.APP_PORT || 3200;
const host = process.env.APP_HOST || "localhost";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log(`App listening at http://${host}:${port}`);
    connect();
    routes(app);
});