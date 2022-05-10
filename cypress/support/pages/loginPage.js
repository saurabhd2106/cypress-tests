export class LoginPage {

    signinLocator = "a[href='/user/login']";

    emailLocator = "input[type='email']";

    passwordLocator = "input[type='password']";

    signInText = "Sign in";

    navigateToSigninPage(){

         cy.get(this.signinLocator).click()
    }

    loginToApplication(useremail, userpassword){

        cy.get(this.emailLocator).type(useremail)

        cy.get(this.passwordLocator).type(userpassword)

        cy.contains("button", this.signInText).click()

    }

    verifyloginSuccessfull(){

        cy.contains("vv", "New Article").should("be.visible");
    }


}

export const loginPage = new LoginPage();