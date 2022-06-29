// import store from "../store";

class TokenService {
  //   getLocalRefreshToken() {
  //     const state = store.getState();
  //     return state?.authSlices?.accessToken;
  //   }

  //   getLocalAccessToken() {
  //     const state = store.getState();
  //     return state?.authSlices?.accessToken;
  //   }

  //   updateLocalAccessToken(token) {
  //     const state = store.getState();
  //     state.authSlices.accessToken = token;
  //     return state?.authSlices?.accessToken;
  //   }

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
