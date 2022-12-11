const route = require('express').Router();
const {detailsController}  = require('../controllers') 
const {authMiddleware}  = require('../middlewares') 

route.use(authMiddleware) ;

route.get("/", detailsController.getDetails)
route.post("/subscribe"  , detailsController.subscribe )
route.post("/pay"  , detailsController.makePayment )
module.exports = route ;
