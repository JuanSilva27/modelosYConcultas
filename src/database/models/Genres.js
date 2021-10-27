module.exports = (sequelize, DataTypes)=>{
    const Genres = sequelize.define(
        "Genres",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoInrecrement: true
            },

            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            ranking: {
                type: DataTypes.INTEGER,
                allowNull:true,
                unique: true
            },
            active:{
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: "1"
            }
        },
        {
            timestamps: false
        }
    )
    return Genres
}