@sign_in
Feature: Sign in to the system
    As a user, I want to sign in to the system
    @sign_in_unsuccessfully
    Scenario Outline: Sign in to the system unsuccessfully
        Given the user is on conduit page
        When the user sign in with info as below:
            | email   | password   |
            | <email> | <password> |
        Then an error message is shown
        And the user cannot access Home page successfully
        Examples:
            | email           | password    |
            | dsdi@gmail.com  | 142353g47ry |
            | testS@gmail.com | 123456      |

