export class ProductsService {
  constructor(client) {
    this.client = client;
  }

  getProducts() {
    return this.client
      .from("products")
      .select("*")
      .then(({ data }) => data);
  }
  addProduct(productData) {
    return this.client
      .from("products")
      .insert(productData)
      .select()
      .then(({ data }) => data);
  }
  editProduct({ id, ...productData }) {
    return this.client
      .from("products")
      .update(productData)
      .eq("id", id)
      .select()
      .then(({ data }) => data);
  }
  deleteProduct(id) {
    return this.client
      .from("products")
      .delete()
      .eq("id", id)
      .then(({ data }) => data);
  }
}
