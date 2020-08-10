const { Movies } = require('../../database/models');

module.exports = {
  index: function(req, res) {
    Movies.findAll()
      .then(data => {
        let respuesta = {
          meta:{
            status: 200,
            length: data.length,
            url: req.originalUrl
          },
          data: data
        };

        res.json(respuesta);
        
      });
  },
  show: function(req, res) {

  },
  create: function(req, res) {
    let movie = {
      title: req.body.title,
      rating: req.body.rating,
      awards: req.body.awards,
      release_date: req.body.release_date,
      legth: req.body.length,
      genre_id: req.body.genre_id,
    };

    Movies.create(movie)
    .then(function(confirm){
      let respuesta = null;
      
      if(confirm){
        respuesta = {
          meta: {
            status: 200,
          },
          data: confirm,
        };
      } else {
        respuesta = {
          meta: {
            status: 404,
          },
          data: "Operation failed",
        };
      }
      
      return res.json(respuesta);
    })
    .catch(function(e){
      console.log(e);
       respuesta = {
         meta: {
           status: 404,
         },
         data: "Operation failed",
       };
       return res.json(respuesta);

    }); 

  },
  edit: function(req, res) {
    
  },
  destroy: function(req, res) {
    
  }
}