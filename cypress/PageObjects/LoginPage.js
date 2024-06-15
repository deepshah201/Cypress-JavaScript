import Helper from "../Helper/Helper.js";
import data from "../fixtures/data.json";

const helper = new Helper();

class Login {
  //#region Login Page Elements
  usernameEle = "#user-name";
  passwordEle = "#password";
  loginBtn = "#login-button";
  verifyHeading = ".header_label >div";
  //#endregion

  //#region  login page Methods
  setUserName(username) {
    helper.type(this.usernameEle, username);
  }

  setPassword(pass) {
    helper.type(this.passwordEle, pass);
  }

  clickLogin() {
    helper.click(this.loginBtn);
  }

  verifyLogin() {
    helper.isVisible(this.verifyHeading);
  }

  login() {
    this.setUserName(data.uname);
    this.setPassword(data.password);
    this.clickLogin();
    this.verifyLogin();
  }
  //#endregion
}

export default Login;
