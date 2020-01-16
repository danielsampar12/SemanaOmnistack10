const axios = require('axios');
const Dev = require('../models/dev');

module.exports = {
  async store(request, response)  {
    const {github_username , techs, latitude, longitude} = request.body;
    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
    //AWAIT: espera a resposta da api
    const { name = login, avatar_url, bio } = apiResponse.data
  
    const techsArrays = techs.split(',').map(tech => tech.trim());
  
    const location = {
      type: 'Point',
      coordinates: [longitude, latitude],
    }
  
    const dev = await Dev.create({
      github_username,
      name,
      avatar_url,
      bio,
      techs: techsArrays,
      location,
    });
  
    console.log(name, avatar_url, bio, github_username, techs);
  
    return response.json(dev);
  }
};