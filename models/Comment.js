module.exports = function(sequelize, DataTypes){
    var Comment = sequelize.define("comments", {
        description: {
            type: DataTypes.TEXT, 
            allowNull: false
        }
    })

    Comment.associate = function (models) {
        Comment.belongsTo(models.posts, {
          foreignKey: 'commentId'
        });
        Comment.belongsTo(models.parents, {
          foreignKey: 'commentId'
        });
      };
}