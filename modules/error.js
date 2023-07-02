'use strict';


const errorHandler = (error,req,res,next) => {
  console.log('in error handler');
  res.status(500).send({
    status: 500,
    route: req.path,
    query: req.query,
    body: req.body,
    message:`SERVER ERROR: ${error.message}`
  });
};

module.exports = errorHandler;