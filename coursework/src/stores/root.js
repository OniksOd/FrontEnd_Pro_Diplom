import { apiRequester } from "../api/APIRequester";
import { AuthStore } from "./auth";
import { ProductsStore } from "./products";

export class RootStore {
  constructor() {
    this.authStore = new AuthStore(apiRequester);
    this.productsStore = new ProductsStore(apiRequester);
  }
}
