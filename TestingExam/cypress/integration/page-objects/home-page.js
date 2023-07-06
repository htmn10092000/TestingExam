const homePage = "//div[@class='home-page']";
const loggedAva = "div#myvne_user_logged a#myvne_avatar_taskbar";
const loggedAcc = "div#myvne_user_logged span[class='name_user_av']";

class HomePage {
  getHomePage() {
    return cy.xpath(homePage);
  }
}

module.exports = new HomePage();
