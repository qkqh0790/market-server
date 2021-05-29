module.exports = function (sequelize, dataTypes) {
  const register = sequelize.define("Register", {
    user: {
      type: dataTypes.STRING(10),
      allowNull: false,
    },
    password: {
      type: dataTypes.STRING(10),
      allowNull: false,
    },
    name: {
      type: dataTypes.STRING(10),
      allowNull: false,
    },
    nickname: {
      type: dataTypes.STRING(10),
      allowNull: false,
    },
    year: {
      type: dataTypes.STRING(4),
      allowNull: false,
    },
    month: {
      type: dataTypes.STRING(2),
      allowNull: false,
    },
    day: {
      type: dataTypes.STRING(2),
      allowNull: false,
    },
    gender: {
      type: dataTypes.STRING(1),
      allowNull: false,
    },
    email: {
      type: dataTypes.STRING(50),
      allowNull: true,
    },
    phonenumber: {
      type: dataTypes.STRING(12),
      allowNull: false,
    },
  });
  return register;
};
