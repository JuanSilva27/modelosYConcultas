const db = require("../database/models")
const Op = db.Sequelize.Op;

module.exports={
    list: (req, res)=>{
        db.Genres.findAll().then(genres=>{
            res.render("genresList", {genres:genres})
        })
        .catch(err =>{
            console.log(err)
        })
    },
    detail:(req,res)=>{
        db.Genres.findByPk(+req.params.id).then(genre=>{
            res.render("genresDetail",{genre:genre})
        })
        .catch(err =>{
            console.log(err)
        })
    }
    


}