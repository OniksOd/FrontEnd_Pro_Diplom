import { createAuthClient } from "@neondatabase/neon-js/auth";

export const authClient = createAuthClient(import.meta.env.VITE_NEON_AUTH_URL);

import { makeObservable, observable, computed, action } from "mobx";

import { RouteProvider } from "../providers/RouteProvider";

export class AuthStore {
  user = null;
  loginError = null;
  isLoading = true;
  apiRequester = null;
  constructor(apiRequester) {
    this.apiRequester = apiRequester;
    makeObservable(this, {
      isAuthorized: computed,
      isLoading: observable,
      user: observable,
      loginError: observable,
      login: action.bound,
      getMe: action.bound,
      signUp: action.bound,
      logOut: action.bound,
    });
  }
  get isAuthorized() {
    return !!this.user;
  }

  async login(payload) {
    this.loginError = null;
    try {
      const {
        data: { user },
      } = await this.apiRequester.authService.login(payload);
      this.user = user;
      RouteProvider.navigate("/", { replace: true });
    } catch (e) {
      this.loginError = e;
    }
  }
  async signUp(payload) {
    // this.isLoading = true;
    this.loginError = null;
    try {
      const data = await this.apiRequester.authService.signUp({
        ...payload,
        name: payload.email.split("@")[0],
      });
      console.log(data);
      //   this.user = data;
      //   this.isLoading = false;
      RouteProvider.navigate("/", { replace: true });
    } catch (e) {
      this.loginError = e;
      console.log(e);
      //   this.isLoading = false;
    }
  }

  async getMe() {
    this.isLoading = true;
    try {
      const {
        data: { user },
      } = await this.apiRequester.authService.getMe();
      this.user = user;
      this.isLoading = false;
    } catch (e) {
      this.isLoading = false;
    }
  }
  async logOut() {
    try {
      await this.apiRequester.authService.logOut();
      this.user = null;
    } catch (e) {}
  }
}
