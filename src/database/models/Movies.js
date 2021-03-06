module.exports = (sequelize, DataTypes) =>{
    const Movies = sequelize.define(
        "Movies",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey:true,
                autoIncrement:true,
            },
            title:{
                type: DataTypes.STRING
            } ,
            rating:{
                type: DataTypes.DECIMAL(10,2)
            } ,
            awards:{
                type: DataTypes.INTEGER
            } , 
            release_date:{
                type: DataTypes.DATE
            },
            length:{
                type: DataTypes.INTEGER
            },
            genre_id:{
                type: DataTypes.INTEGER
            } ,
            created_at:{
                type: DataTypes.DATE
            },
            updated_at:{
                type: DataTypes.DATE
            },  

        },
        
        
        
        {timestamps:false})


    return Movies
}