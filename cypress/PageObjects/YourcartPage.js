import Helper from "../Helper/Helper.js";
const helper = new Helper();
import Product from "./ProductPage.js";
import Logout from "./LogoutPage.js";

const product = new Product();
const logout = new Logout();

class Cart {
  checkOut = "#checkout";
  firstName = "#first-name";
  lastName = "#last-name";
  postalCode = "#postal-code";
  continue = "#continue";
  finish = "#finish";
  title = ".title";
  backToProduct = "#back-to-products";
  resetApp = "#reset_sidebar_link";
  cross = "#react-burger-cross-btn";
  errorMsg = "h3[data-test='error']";

  clickCheckOutButton() {
    helper.click(this.checkOut);
  }

  setFirstName(name) {
    helper.type(this.firstName, name);
  }

  setLastName(name) {
    helper.type(this.lastName, name);
  }

  setPostalCode(code) {
    helper.type(this.postalCode, code);
  }

  clickContinueButton() {
    helper.click(this.continue);
  }

  clickFinishButton() {
    helper.click(this.finish);
  }

  verifyTitle() {
    helper.getText(this.title, "Checkout: Complete!");
  }

  clickBackHome() {
    helper.click(this.backToProduct);
  }

  clickResetApp() {
    helper.click(this.resetApp);
  }

  clickCrossButton() {
    helper.click(this.cross);
  }

  verifyErrorMsg() {
    helper.isVisible(this.errorMsg);
  }

  checkOutProduct() {
    product.clickSauceLabProduct();
    product.verifyItemInCart();
    product.clickCartContainer();
    this.clickCheckOutButton();
    this.setFirstName("John");
    this.setLastName("Doe");
    this.setPostalCode("12345");
    this.clickContinueButton();
    this.clickFinishButton();
    this.verifyTitle();
    this.clickBackHome();
  }

  checkOutProcessTillZipCodeAndResetIt() {
    product.clickSauceLabProduct();
    product.verifyItemInCart();
    product.clickCartContainer();
    this.clickCheckOutButton();
    this.setFirstName("John");
    this.setLastName("Doe");
    this.setPostalCode("12345");
    logout.clickBurgerMenu();
    this.clickResetApp();
    this.clickCrossButton();
  }

  checkOutProcessWithoutZipCodeAndVerifyError() {
    product.clickSauceLabProduct();
    product.verifyItemInCart();
    product.clickCartContainer();
    this.clickCheckOutButton();
    this.setFirstName("John");
    this.setLastName("Doe");
    this.clickContinueButton();
    this.verifyErrorMsg();
  }
}
export default Cart;
