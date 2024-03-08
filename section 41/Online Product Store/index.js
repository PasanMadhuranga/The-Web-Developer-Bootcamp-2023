const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Product = require("./models/product");
const methodOverride = require("method-override");
const AppError = require("./AppError");

mongoose
  .connect("mongodb://127.0.0.1:27017/farmStand2")
  .then(() => {
    console.log("MONGO CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.log("OH NO MONGO CONNECTION ERROR!!!");
    console.log(err);
  });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

const categories = ["fruit", "vegetable", "dairy"];

function wrapAsync(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((e) => next(e));
  };
}

app.get(
  "/products",
  wrapAsync(async (req, res, next) => {
    let products;
    const filter = req.query.category || "all";
    if (filter === "all") {
      products = await Product.find({});
    } else {
      products = await Product.find({ category: filter });
    }
    res.render("products/index", { products, categories, filter });
  })
);

// app.get('/products/filtered', async (req, res) => {
//     const filter = req.query.category || 'all';
//     if (filter === 'all') {
//         const products = await Product.find({})
//         res.render('products/index', { products, categories })
//     }else {
//         console.log(filter)
//         const products = await Product.find({category: filter})
//         res.render('products/filtered', { products, categories, filter })
//     }
// })

app.post(
  "/products",
  wrapAsync(async (req, res, next) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`);
  })
);

app.get("/products/new", (req, res) => {
  res.render("products/new", { categories });
});

app.get(
  "/products/:id/update",
  wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      throw next(new AppError("Product Not Found", 404));
    }
    res.render("products/update", { product, categories });
  })
);

app.delete(
  "/products/:id",
  wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect("/products");
  })
);

app.put(
  "/products/:id",
  wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    await Product.findByIdAndUpdate(id, req.body, { runValidators: true });
    res.redirect(`/products/${id}`);
  })
);

app.get(
  "/products/:id",
  wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      throw next(new AppError("Product Not Found", 404));
    }
    res.render("products/show", { product });
  })
);

const handleValidationError = (err) => {
  console.dir(err);
  return new AppError(`Validation Failed: ${err.message}`, 400);
};

app.use((err, req, res, next) => {
  console.log(err.name);
  if (err.name === "ValidationError") err = handleValidationError(err);
  next(err);
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Something went wrong" } = err;
  res.status(status).send(message);
});

app.listen(3000, () => {
  console.log("APP IS LISTENING ON PORT 3000");
});
