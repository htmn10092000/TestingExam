@sign_up
Feature: Sign up to the system
    As a user, I want to sign up to the system
    @sign_up_successfully
    Scenario: Sign up to the system successfully
        Given the user is on conduit page
        When the user sign up with info as below:
            | username | email          | password  |
            | dagsh1   | dsdi@gmail.com | 1423547ry |
        Then the user can access Home page successfully
