import express from 'express';
import cors from 'cors';
import { formSubmissionRouter } from './src/routes/formSubmissionRouter.js';

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/lookup', formSubmissionRouter);

app.listen(PORT, err => {
    if(err) throw err;
    console.log(`Server listening on port ${PORT}`);
})