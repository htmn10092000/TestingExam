/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import signInPage from "../../page-objects/sign-in-page";
import homePage from "../../page-objects/home-page";
import signUpPage from "../../page-objects/sign-up-page";

Given("the user is on conduit page", function () {
  signUpPage.visitSystem();
});

When("the user sign in with info as below:", function (table) {
  table.hashes().forEach((element) => {
    signInPage.selectSignInOption();
    signInPage.signIn(element.email, element.password);
    signInPage.clickOnSignInButton();
  });
});

Then("an error message is shown", function () {
  signInPage.getErrorMessage().should("be.visible");
});

Then("the user cannot access Home page successfully", function () {
  homePage.getHomePage().should("not.exist");
});
