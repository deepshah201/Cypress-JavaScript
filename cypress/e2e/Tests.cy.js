import LoginPage from "../PageObjects/LoginPage.js";
import data from "../fixtures/data.json";
import LogoutPage from "../PageObjects/LogoutPage.js";
import ProductPage from "../PageObjects/ProductPage.js";
import YourcartPage from "../PageObjects/YourcartPage.js";

const logout = new LogoutPage();
const login = new LoginPage();
const product = new ProductPage();
const yourcart = new YourcartPage();

beforeEach(() => {
  cy.visit(data.url);
  login.login();
});

afterEach(() => {
  logout.logoutApp();
});

describe("Sauce demo automation tests", () => {
  it("TC-07 Verify that the user can remove a product from the cart", () => {
    product.addRemoveProductFromCart();
  });

  it("TC-08 Verify that the user can successfully complete the checkout process", () => {
    yourcart.checkOutProduct();
  });

  // it("TC-12 Reset Cart State from CheckoutStep", () => {
  //   yourcart.checkOutProcessTillZipCodeAndResetIt();
  // });

  // it("TC_15 Should error out when customer information is missing", () => {
  //   yourcart.checkOutProcessWithoutZipCodeAndVerifyError();
  // });
});
