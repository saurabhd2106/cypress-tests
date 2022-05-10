/// <reference types="Cypress"/>

import { loginPage } from "../../support/pages/loginPage"

describe("Test login of Conduit App", function (){

    it("Login to application", function (){

        cy.visit("/")

        loginPage.navigateToSigninPage()

        loginPage.loginToApplication("saurabh@fake.com", "admin")

        loginPage.verifyloginSuccessfull()


    })

})

