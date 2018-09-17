module.exports = function(sequelize, DataTypes) {
  var Example = sequelize.define("saved", {
    text : DataTypes.STRING,
    subjectivity : DataTypes.STRING,
    sentiment : DataTypes.STRING,
    commercial : DataTypes.STRING,
    topic : DataTypes.STRING,
    adult : DataTypes.STRING
  });
  return Example;
};
