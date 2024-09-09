class MarkEntryPage{
// ##### Page Elements ####
changeLangButton = () => cy.get('[class="language-link"]')
userNameInputField = () => cy.get('[formcontrolname="userName"]')
passwordInputField = () => cy.get('[formcontrolname="password"]')
submitButton = () => cy.get('[type="submit"]')
scanDocumentTab = () => cy.get('[tabindex="1"] > div')
udbTab = () => cy.get('[data-tab="tab-5"]')
udbInputField = () => cy.get('[formcontrolname="udbNumber"]')
proceedButton = () => cy.get('[class="btn btn-block btn-primary"]').last()
investigateButton = () => cy.contains(' Investigate (I) ')
processEntryButton = () => cy.contains('Process Entry (F9)')
successfulMessage = () => cy.get('[class="shadow-lg flashnotification successful"]')

// #### Page Actions ####

markEntry (){ 
    cy.readFile('cypress/testData/profileInfo.json').then((profile)=>{
        const udbNo = parseInt(profile.udbNo)
        cy.visit(Cypress.env('NGAURL'))
        this.changeLangButton().click()
        this.userNameInputField().type('akef')
        this.passwordInputField().type('1')
        this.submitButton().click()
        this.scanDocumentTab().click()
        this.udbTab().click()
        this.udbInputField().type(udbNo)
        cy.wait(2000)
        this.proceedButton().click({force:true})
        cy.wait(10000)
        this.investigateButton().click()
        this.processEntryButton().click()
        this.successfulMessage().should('be.visible')
    })
}
// #### Page Assertions 
}
export const markEntryPage = new MarkEntryPage()

    
