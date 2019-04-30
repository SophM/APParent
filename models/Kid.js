module.exports = function(sequelize, DataTypes){
    var Kid = sequelize.define("kids", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        gradeLevel: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validation: {
                min: 1,
                max:12
            }
        }
    })

    Kid.associate = function (models) {
        Kid.belongsTo(models.parents, {
          foreignKey: 'kidId'
        });
        Kid.hasOne(models.schools);

      };
}