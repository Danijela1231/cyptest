

class Navigation {
    get loginButton() {
        return cy.get("a[href='/login']")
    }
    get logoutButton() {
        return cy.get("a[role='button ']")
    }

    get submitButton() {
        return cy.get("button[type='submit']")
    }

    clickLoginButton() {
        this.loginButton.click()
    }

    clickLogoutButton() {
        this.logoutButton.click()
    }

    clickSubmitButton() {
        this.submitButton.click()
    }

}

export const navigation = new Navigation()




    