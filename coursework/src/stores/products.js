import { makeObservable, action, runInAction, observable } from "mobx";
const delay = (delayInms) => {
  return new Promise((resolve) => setTimeout(resolve, delayInms));
};

export class ProductsStore {
  products = [];
  isLoading = false;
  isAddLoading = false;
  isModalOpen = false;
  isDeleteModalOpen = false;
  isDeleteLoading = false;

  constructor(apiRequester) {
    this.apiRequester = apiRequester;
    makeObservable(this, {
      products: observable,
      isLoading: observable,
      isModalOpen: observable,
      isAddLoading: observable,
      getProducts: action.bound,
      addProduct: action.bound,
      editProduct: action.bound,
      deleteProduct: action.bound,
      clear: action.bound,
      toggleModal: action.bound,
      toggleDeleteModal: action.bound,
      isDeleteModalOpen: observable,
      isDeleteLoading: observable,
    });
  }
  toggleModal(isOpen) {
    this.isModalOpen = isOpen;
  }
  toggleDeleteModal(isOpen) {
    this.isDeleteModalOpen = isOpen;
  }
  async getProducts() {
    this.isLoading = true;
    try {
      const products = await this.apiRequester.productsService.getProducts();
      runInAction(() => {
        this.products = products;
      });
      this.isLoading = false;
    } catch (e) {
      this.isLoading = false;
    }
  }

  async addProduct(productData) {
    this.isAddLoading = true;
    try {
      const [product] =
        await this.apiRequester.productsService.addProduct(productData);
      runInAction(() => {
        this.products.push(product);
        this.toggleModal(false);
        this.isAddLoading = false;
      });
    } catch (e) {
      this.isAddLoading = false;
    }
  }
  clear() {
    this.products = [];
  }

  async editProduct(productData) {
    this.isAddLoading = true;
    try {
      await delay(3000);
      const [product] =
        await this.apiRequester.productsService.editProduct(productData);
      const index = this.products.findIndex(
        (_product) => _product.id === product.id,
      );

      runInAction(() => {
        if (index !== -1) {
          this.products[index] = productData;
        }

        this.toggleModal(false);
        this.isAddLoading = false;
      });
    } catch (e) {
      this.isAddLoading = false;
    }
  }
  async deleteProduct(id) {
    this.isDeleteLoading = true;
    try {
      await delay(3000);
      await this.apiRequester.productsService.deleteProduct(id);
      const index = this.products.findIndex((product) => product.id === id);
      if (index !== -1) {
        runInAction(() => {
          this.products.splice(index, 1);
        });
      }
      this.isDeleteLoading = false;
      this.toggleDeleteModal(false);
    } catch (e) {
      this.isDeleteLoading = false;
    }
  }
}
