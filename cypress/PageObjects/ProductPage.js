import Helper from "../Helper/Helper.js";
const helper = new Helper();

class Product {
  sauceLabProduct = "#add-to-cart-sauce-labs-backpack";
  cartContainer = "#shopping_cart_container";
  removeFromCart = "#remove-sauce-labs-backpack";
  cartBadge = ".shopping_cart_badge";

  clickSauceLabProduct() {
    helper.click(this.sauceLabProduct);
  }

  verifyItemInCart() {
    helper.scrollTOView(this.cartBadge);
    helper.isVisible(this.cartBadge);
  }

  removeItemFromCart() {
    helper.click(this.removeFromCart);
  }

  verifyItemNotInCart() {
    helper.isVisible(this.sauceLabProduct);
  }

  clickCartContainer() {
    helper.click(this.cartContainer);
  }

  addRemoveProductFromCart() {
    this.clickSauceLabProduct();
    this.verifyItemInCart();
    this.removeItemFromCart();
    this.verifyItemNotInCart();
  }
}
export default Product;
