const BlogPost = require('./BlogPost');
const User = require('./User');

User.hasMany(BlogPost, {
    foreignKey: "userId",
    onDelete: "CASCADE",
});

BlogPost.belongsTo(User, {
    foreignKey: "userId",
});

module.exports = {
    User,
    BlogPost,
};