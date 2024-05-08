const express = require('express');
const route = express.Router()
const services = require('../services/render');


/**
 *  @description Root Route
 *  @method GET /
 */
 route.get('/', services.homeRoutes);


   
  /**
 *  @description add users
 *  @method GET /add-user
 */
route.get('/add-user', services.add_user)
   



  module.exports = route