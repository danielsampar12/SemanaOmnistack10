const Dev = require('../models/dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
module.exports = {
  async index(request, response){
    const {latitude, longitude, techs} = request.query;
    //busca todos os devs no raio de 10km e filtrar por techs
    const techsArray = parseStringAsArray(techs);

    const devs = await Dev.find({
      techs: {
        $in: techsArray,
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          $maxDistance: 10000,
        },
      },
    });

    return response.json({ devs });
  }

};