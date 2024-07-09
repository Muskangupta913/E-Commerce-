const express = require("express");
require("./db/config");
const cors = require("cors");
const app = express();
const user = require("./db/User.js");
const Product = require("./db/Product.js");

app.use(express.json());
app.use(cors());

app.post("/register", async (req, res) => {
  let userr = new user(req.body);

  let result = await userr.save();
  result = result.toObject();
  delete result.password;

  res.send(result);
});
app.post("/login", async (req, resp) => {
  if (req.body.password && req.body.email) {
    let userr = await user.findOne(req.body).select("-password");
    if (userr) {
      resp.send(userr);
    } else {
      resp.send({ result: "no user found" });
    }
  } else {
    resp.send({ result: "no user found" });
  }
});

app.post("/add-product", async (req, resp) => {
  let productt = new Product(req.body);
  let result = await productt.save();
  resp.send(result);
});

app.get("/products", async (req, resp) => {
  let products = await Product.find();
  if (products.length > 0) {
    resp.send(products);
  } else {
    resp.send({ result: "No product found" });
  }
});

app.delete("/product/:id",async(req,resp)=>{
       
        const result= await Product.deleteOne({_id:req.params.id})
        resp.send(result);

});

app.listen(5000);
