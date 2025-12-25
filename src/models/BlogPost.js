const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const BlogPost = sequelize.define("BlogPost", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

  published: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = BlogPost;
