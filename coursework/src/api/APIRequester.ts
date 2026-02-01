import { createClient } from "@neondatabase/neon-js";

import { AuthService, ProductsService } from "./services";

class ApiRequester {
  public client: any | null = null;
  public authService: AuthService | null = null;
  public productsService: ProductsService | null = null;
  constructor() {
    this.client = createClient({
      auth: {
        url: import.meta.env.VITE_NEON_AUTH_URL,
      },
      dataApi: {
        url: import.meta.env.VITE_NEON_DATA_API_URL,
      },
    });
    this.authService = new AuthService(this.client);
    this.productsService = new ProductsService(this.client);
  }
}

export const apiRequester = new ApiRequester();
