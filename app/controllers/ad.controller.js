import express from 'express';
import path from 'path';

let router = express.Router();

//write your controller function below this
const ads = async(req, res, next) => {
    try{
        res.status(200).send({
            "status" : true,
            "data" : 'ad1.jpeg'
        });
    }catch(e){
        next(e);
    }
}

/**
 * Routes for user defined below
 */
router.get('/', ads);

module.exports = router;