class TokenService {
  removeToken() {
    return localStorage.removeItem("access_token");
  }
  getToken() {
    return localStorage.getItem("access_token");
  }
  removeUser() {
    localStorage.clear();
  }
}

export default new TokenService();
