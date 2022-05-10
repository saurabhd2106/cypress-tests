/// <reference types="Cypress"/>

import { articlesPage } from "../../support/pages/articlesPage";
import { loginPage } from "../../support/pages/loginPage"

describe("Articles Page Test", function (){

    before(function(){

    })

    after(function() {
        
    })

    beforeEach(function() {

        cy.visit("/")

        loginPage.navigateToSigninPage();
        loginPage.loginToApplication("saurabh@fake.com", "admin");
        loginPage.verifyloginSuccessfull()


    })

    it("Add Article", function(){

        articlesPage.navigateToAddArticlePage();

        articlesPage.addArticle()

        articlesPage.verifyAddArticleSuccessfull()

    })

    afterEach(function(){

    })
})