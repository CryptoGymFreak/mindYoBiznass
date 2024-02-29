// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
// a product looks up a category to show category columns too
// aka product is a slave to category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products
// category has permission to be looked up by product
// aka category is a master to product
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});


// Product belongToMany Tag (through ProductTag)
// product_tag table
// columns: product_id, tag_id
Product.belongsToMany(Tag, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false
  }
});


// Tag belongToMany Product (through ProductTag)
// product_tag table
// columns: product_id, tag_id
Tag.belongsToMany(Product, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false
  }
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
