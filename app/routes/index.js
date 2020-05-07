import express from 'express';

let router = express.Router();

import { 
    AdsController,
} from '../controllers';

router.use('/ads', AdsController);

module.exports = router;