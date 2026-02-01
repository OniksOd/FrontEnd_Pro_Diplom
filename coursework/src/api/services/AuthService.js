export class AuthService {
  constructor(client) {
    this.client = client;
  }

  login(data) {
    return this.client.auth.signIn.email(data);
  }
  signUp(data) {
    return this.client.auth.signUp.email(data);
  }
  getMe() {
    return this.client.auth.getSession();
  }
  logOut() {
    return this.client.auth.signOut();
  }
}
