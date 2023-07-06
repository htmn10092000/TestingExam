const signUpOpt = "//a[text()='Sign up']";
const userNameTxt = "//div[@class='auth-page']//input[@placeholder='Username']";
const emailTxt = "//div[@class='auth-page']//input[@placeholder='Email']";
const passwordTxt = "//div[@class='auth-page']//input[@placeholder='Password']";
const signInBtn = "//button[text()='Sign in']";

class SignUpPage {
  visitSystem() {
    cy.visit("/");
  }
  clickOnSignUpButton() {
    cy.xpath(signUpOpt).click();
  }

  signUpANewAccount(userName, email, password) {
    cy.xpath(userNameTxt).type(userName);
    cy.xpath(emailTxt).type(email);
    cy.xpath(passwordTxt).type(password);
  }

  clickOnSignInButton() {
    cy.xpath(signInBtn).click();
  }
}

module.exports = new SignUpPage();
