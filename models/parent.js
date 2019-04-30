// Creating Activity model for activities table
module.exports = function(sequelize, DataTypes) {
  var Parent = sequelize.define("parent", {
    userName: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: true,
      validate: {
        len: [5, 10]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [5, 20]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      isEmail: true, // checks for email format (test@test.com)
      validate: {
        notEmpty: true
      }
    },
    city: {
      type: DataTypes.STRING,
      is: ["^[a-z]+$", "i"], // will only allow letters
      allowNull: true
    },
    state: {
      type: DataTypes.STRING,
      is: ["^[a-z]+$", "i"], // will only allow letters
      allowNull: true
    }
  });

  Parent.associate = function(models) {
    Parent.hasMany(models.posts, {
      as: "posts",
      foreignKey: "parentId"
    });
    Parents.belongsToMany(models.schools, {
      as: "schools",
      through: "parentSchools",
      foreignKey: "parentId"
    });
    Parents.hasMany(models.comments, {
      as: "comments",
      foreignKey: "parentId"
    });
  };

  return Parent;
};
