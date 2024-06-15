import Helper from "../Helper/Helper.js";
const helper = new Helper();

class Logout {
  //#region Logout page elements

  burgerMenu = "#react-burger-menu-btn";
  logout = "#logout_sidebar_link";

  //#endregion

  //#region

  clickBurgerMenu() {
    helper.click(this.burgerMenu);
  }

  clickLogout() {
    helper.click(this.logout);
  }

  logoutApp() {
    this.clickBurgerMenu();
    this.clickLogout();
  }

  //#endregion
}

export default Logout;
