import express from "express";
import { MongoClient, ObjectId } from "mongodb";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
const port = 3001;

const runGetStarted = async () => {
  const uri =
    "mongodb+srv://romanovkirill_db_user:YVc4D8qGC5iN1y51@cluster0.jlk4fyd.mongodb.net/?appName=Cluster0";
  const instance = new MongoClient(uri, { monitorCommands: true });

  try {
    const client = await instance.connect();
    const database = client.db("sample_mflix");
    const products = database.collection("products");

    app.get("/products", async (req, res) => {
      const productsList = (await products.find({}).toArray()).map(
        (product) => ({
          id: product._id,
          description: product.description,
          category: product.category,
          name: product.name,
          price: product.price,
          photo: product.photo,
          quantity: product.quantity,
        }),
      );
      res.send(productsList);
    });

    app.post("/products", async (req, res) => {
      const productModel = req.body;
      const { insertedId } = await products.insertOne(productModel);
      const { _id, ...rest } = await products.findOne({
        _id: insertedId,
      });
      res.send({
        id: _id,
        ...rest,
      });
    });

    app.patch("/products/:id", async (req, res) => {
      const { id } = req.params;
      const data = req.body;
      const filter = { _id: new ObjectId(id) };
      const updateDocument = {
        $set: data,
      };
      await products.updateOne(filter, updateDocument);
      const { _id, ...rest } = await products.findOne({
        _id: new ObjectId(id),
      });
      res.send({
        id: _id,
        ...rest,
      });
    });
    app.delete("/products/:id", async (req, res) => {
      const { id } = req.params;
      const productEntity = await products.deleteOne({ _id: new ObjectId(id) });
      res.send(productEntity);
    });

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (e) {
    console.error(e);
  }
};
runGetStarted().catch(console.dir);
