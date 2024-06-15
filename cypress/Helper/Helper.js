class Helper {
  type(element, value) {
    cy.get(element).type(value);
  }

  click(element) {
    cy.get(element).click();
  }

  isVisible(element) {
    cy.get(element).should("be.visible");
  }

  notBeVisible(element) {
    cy.get(element).should("not.be.visible");
  }

  scrollTOView(element) {
    cy.get(element).scrollIntoView();
  }

  getText(element,value) {
    cy.get(element).should("have.text",value);
  }
}

export default Helper;
