const axios = require('axios');
const Dev = require('../models/dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
//index - listar; show - mostra um; update - altera; destroy - remove;
module.exports = {
  async index(request, response){
    const devs = await Dev.find();
    return response.json(devs);
  },

  async store(request, response)  {
    const {github_username , techs, latitude, longitude} = request.body;
    let dev = await Dev.findOne({ github_username });

    if(!dev){
      const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
    //AWAIT: espera a resposta da api
      const { name = login, avatar_url, bio } = apiResponse.data;
      const techsArrays = parseStringAsArray(techs);
      //separa as tecnologias no array
      const location = {
      type: 'Point',
      coordinates: [longitude, latitude],
      };
      const dev = await Dev.create({
      github_username,
      name,
      avatar_url,
      bio,
      techs: techsArrays,
      location,
      });
    console.log(name, avatar_url, bio, github_username, techs);
    }

    return response.json(dev);
  },
/*
  async update(request, response){
    const{ github_username, techs, bio, avatar_url, latitude, longitude} = request.params;
    let dev = await Dev.findOne({ github_username });
    if(dev){
      const techsArray = parseStringAsArray(techs);
      const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      };
      const dev = await Dev.update({
        techs: techsArray,
        bio,
        avatar_url,
        location,
      });
    }
    return response.json(dev);
  },

  async destroy(request, response){
    const {github_username} = request.params;
    let dev = await Dev.findOne({ github_username });
    if(dev){
      dev = await dev.destroy({
        github_username,
      });
    }
    return response.json(dev);
  },*/
};