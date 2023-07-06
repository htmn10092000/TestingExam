const signInOpt = "//a[text()='Sign in']";
const emailTxt = "//div[@class='auth-page']//input[@placeholder='Email']";
const passwordTxt = "//div[@class='auth-page']//input[@placeholder='Password']";
const signInBtn = "//button[text()='Sign in']";
const errorMessageLbl =
  "//div[@class='auth-page']//ul[@class='error-messages']//li[contains(.,'email or password') and contains(.,'is invalid')]";

class SignInPage {
  selectSignInOption() {
    cy.xpath(signInOpt).click();
  }

  signIn(email, password) {
    cy.xpath(emailTxt).type(email);
    cy.xpath(passwordTxt).type(password);
  }

  clickOnSignInButton() {
    cy.xpath(signInBtn).click();
  }

  getErrorMessage() {
    return cy.xpath(errorMessageLbl);
  }
}

module.exports = new SignInPage();
