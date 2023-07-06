/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import signUpPage from "../../page-objects/sign-up-page";
import homePage from "../../page-objects/home-page";

Given("the user is on conduit page", function () {
  signUpPage.visitSystem();
});

When("the user sign up with info as below:", function (table) {
  table.hashes().forEach((element) => {
    signUpPage.clickOnSignUpButton();
    let randomSuffix = (Math.random() + 1).toString(36).substring(7);
    const randomUserName = element.username + randomSuffix;
    const randomEmail = element.email + randomSuffix;
    signUpPage.signUpANewAccount(randomUserName, randomEmail, element.password);
    signUpPage.clickOnSignInButton();
  });
});

Then("the user can access Home page successfully", function () {
  homePage.getHomePage().should("be.visible");
});
