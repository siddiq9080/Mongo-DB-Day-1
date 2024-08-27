//1: Find all the information about each products

db.product.find();

//2: Find the product price which are between 400 to 800

db.product.find({ product_price: { $lte: 800, $gte: 400 } });

//3: Find the product price which are not between 400 to 600

db.product
  .find({
    $or: [{ product_price: { $lt: 400 } }, { product_price: { $gt: 600 } }],
  })
  .pretty();

//4: List the four product which are greater than 500 in price

db.product
  .find({ product_price: { $gt: 500 } })
  .sort({ product_price: -1 })
  .limit(4)
  .pretty();

//5: Find the product name and product material of each products

db.product.find({}, { product_name: 1, product_material: 1, _id: 0 }).pretty();

//6: Find the product with a row id of 10

db.product.findOne({ id: "10" }).pretty();

//7: Find only the product name and product material

db.product.find({}, { product_price: 1, product_material: 1, _id: 0 }).pretty();

//8: Find all products which contain the value of soft in product material

db.product
  .find({ product_material: { $regex: "soft", $options: "i" } })
  .pretty();

//9: Find products which contain product color indigo and product price 492.00

db.product.find({ product_price: 492, product_color: "indigo" }).pretty();

//10: Delete the products which product price value are 28

db.product.deleteMany({ procduct_price: 28 }).pretty();
