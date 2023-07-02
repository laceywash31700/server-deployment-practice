'use strict';

// timeStamp middleWare
const stamper = (_,res,next) => {
  res.timeStamp = { time: Date()};
  next();
};

module.exports = stamper;