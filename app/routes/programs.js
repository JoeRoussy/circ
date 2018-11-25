import express from 'express';

import { required } from '../components/custom-utils';
import { getChildLogger } from '../components/log-factory';

import { createProgram } from '../controllers/programs';

export default ({
    db = required('db'),
    baseLogger = required('baseLogger')
}) => {
    const programRouter = express.Router();

    programRouter.post('/', createProgram({
        programsCollection: db.collection('programs'),
        logger: getChildLogger({
            baseLogger,
            additionalFields: {
                module: 'api-create-program'
            }
        })
    }));

    return programRouter;
}