class TokenService {
  static getLocalRefreshToken() {
    const user = JSON.parse(localStorage.getItem("user"));
    return user?.refresh;
  }

  static getLocalAccessToken() {
    const user = JSON.parse(localStorage.getItem("user"));
    return user?.access;
  }
  static getUserBalance() {
    const user = JSON.parse(localStorage.getItem("user"));
    return user?.user.balance;
  }
  static updateUserBalance(balance) {
    const userInfo = JSON.parse(localStorage.getItem("user"));
    const newBalance = { ...userInfo?.user, balance };
    localStorage.setItem(
      "user",
      JSON.stringify({ ...userInfo, user: newBalance })
    );
    return { ...userInfo, user: newBalance };
  }

  static updateLocalAccessToken(token) {
    let user = JSON.parse(localStorage.getItem("user"));
    user.access = token;
    localStorage.setItem("user", JSON.stringify(user));
  }
  static updateUser(newUser) {
    
    let user = JSON.parse(localStorage.getItem("user"));
    user.user = newUser;
    localStorage.setItem("user", JSON.stringify(user));
  }

  static getUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  static setUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  static removeUser(user = "user") {
    localStorage.removeItem(user);
  }
  static getRole() {
    const user = this.getUser();

    return user?.user ? user.user.role : null;
  }
}

export default TokenService;
