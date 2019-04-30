// Creating Activity model for activities table
module.exports = function(sequelize, DataTypes) {
  var Parent = sequelize.define("parents", {
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
      onDelete: "cascade"
    });
    Parent.belongsToMany(models.schools, {
      as: "schools",
      through: "parentSchools",
      foreignKey: "parentId"
    });
    Parent.hasMany(models.comments, {
      onDelete: "cascade"
    });
  };

  return Parent;
};