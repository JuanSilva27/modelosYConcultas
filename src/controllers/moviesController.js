

const db = require("../database/models")
const Op = db.Sequelize.Op;
module.exports={

    list:(req,res)=>{
        
        db.Movies.findAll().then(movies=>{
            res.render("moviesList",{movies: movies})
        })
        .catch(err =>{
            console.log(err)
        })
        
    },

    new:(req, res)=>{
        db.Movies.findAll({
            order:[
                ["release_date", "DESC"]
            ]
        }).then(movies=>{
            res.render("newestMovies", {movies: movies})
        })
        .catch(err=>{
            console.log(err)
        })
    },



    detail: (req,res)=>{
        
        db.Movies.findByPk(+req.params.id).then(movie=>{
            res.render("moviesDetail",{movie:movie})
        })
        .catch(err=>{
            console.log(err)
        })
    },

    recomended: (req, res)=>{
        db.Movies.findAll({
            /* where:{
                rating: {[Op.eq]: 10}
            }, */
            order:[
                ["release_date", "DESC"]
            ],
            limit: 5
        }).then(movies=>{
            res.render("recommendedMovies",{movies:movies})
        })
        .catch(err=>{
            console.log(err)
        })
    }
}