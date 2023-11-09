class TokenService {
  static getLocalRefreshToken() {
    const user = JSON.parse(localStorage.getItem("player"));
    return user?.refresh;
  }

  static getLocalAccessToken() {
    const user = JSON.parse(localStorage.getItem("player"));
    return user?.access;
  }

  static updateLocalAccessToken(token) {
    let user = JSON.parse(localStorage.getItem("player"));
    user.access = token;
    localStorage.setItem("player", JSON.stringify(user));
  }
  static updateUser(newUser) {
    let user = JSON.parse(localStorage.getItem("player"));
    user.user = newUser;
    localStorage.setItem("user", JSON.stringify(user));
  }

  static getUser() {
    return JSON.parse(localStorage.getItem("player"));
  }

  static setUser(user) {
    localStorage.setItem("player", JSON.stringify(user));
  }

  static removeUser(key = "player") {
    localStorage.removeItem(key);
  }
}
  
  export default TokenService;