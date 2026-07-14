import { Router } from 'express';
import * as formSubmissionController from '../controllers/formSubmissionController.js';

const formSubmissionRouter = Router();

formSubmissionRouter.post('/', formSubmissionController.formSubmission);

export { formSubmissionRouter };