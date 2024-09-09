const apiURL =  Cypress.env('VMSCore')

/**
 * Update Violation Exemption Inquiry
 * @param {object} payload 
 * 
 */
export const committeeExemptions = (payload) =>
cy.request({
    method: 'POST',
    url: `${apiURL}api/v1/exemption/committee-exemptions`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': '158a483339019a3b61eb7e2eae729fbc47360ee18381dfff9a77045d7f32f886',
      'consumer_id': 'INTRhhsdanuyc4j1gp497',
      'operated_by': 1001,
      'accept': '*/*'
    },
    body: payload
})
