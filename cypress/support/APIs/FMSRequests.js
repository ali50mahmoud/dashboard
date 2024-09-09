const apiURL =  Cypress.env('FMSCore')

/**
 * Generate file number
 * @param {object} payload 
 * 
 */
export const generateFileNumber = (payload) =>
cy.request({
    method: 'POST',
    url: `${apiURL}/api/v1/generate-file-number`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': '158a483339019a3b61eb7e2eae729fbc47360ee18381dfff9a77045d7f32f886',
      'consumer_id': 'ec4eafce7d8773862f59a83264fe0af6',
      'operated_by': 1001,
      'accept': '*/*'
    },
    body: payload
})


/**
 * Generate Immigration file 
 * @param {object} payload 
 * 
 */
export const createImmigrationFile = (payload) =>
cy.request({
    method: 'POST',
    url: `${apiURL}/api/v1/files`,
    failOnStatusCode: false,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': '158a483339019a3b61eb7e2eae729fbc47360ee18381dfff9a77045d7f32f886',
      'consumer_id': 'ec4eafce7d8773862f59a83264fe0af6',
      'operated_by': 1001,
      'accept': '*/*'
    },
    body: payload
})


/**
 * Search for immigration file
 * @param {object} payload 
 * 
 */
export const searchImmigrationFile = (payload) =>
cy.request({
    method: 'POST',
    url: `${apiURL}/api/v1/files/search?active=true&closed=true`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': '158a483339019a3b61eb7e2eae729fbc47360ee18381dfff9a77045d7f32f886',
      'consumer_id': 'ec4eafce7d8773862f59a83264fe0af6',
      'operated_by': 1001,
      'accept': '*/*'
    },
    body: payload
})



/**
 * Cancel for immigration File
 * @param {object} payload
 */
export const CancelImmigrationFile = (payload) =>
cy.request({
  method: 'PUT',
  url: `https://stgcore.e-vision.ae/immigration-file-canary/api/v1/files/cancel`,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': '158a483339019a3b61eb7e2eae729fbc47360ee18381dfff9a77045d7f32f886',
    'consumer_id': 'Mifi9sijn289E3D4sEWE3WEW2kukr77d',
    'operated_by': 1,
    'accept': '*/*'
  },
  body: payload,
   // failOnStatusCode:false
})


/**
 * Close immigration File
 * @param {object} payload
 */
export const CloseImmigrationFile = (payload) =>
cy.request({
  method: 'PUT',
  url: `https://stgcore.e-vision.ae/immigration-file-canary/api/v1/files/close`,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': '158a483339019a3b61eb7e2eae729fbc47360ee18381dfff9a77045d7f32f886',
    'consumer_id': 'Mifi9sijn289E3D4sEWE3WEW2kukr77d',
    'operated_by': 1,
    'accept': '*/*'
  },
  body: payload,
   // failOnStatusCode:false
})


/**
 * Lift Close immigration File
 * @param {object} payload
 */
export const liftCloseImmigrationFile = (payload) =>
cy.request({
  method: 'PUT',
  url: `${apiURL}/api/v1/files/lift-closure`,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': '158a483339019a3b61eb7e2eae729fbc47360ee18381dfff9a77045d7f32f886',
    'consumer_id': 'Mifi9sijn289E3D4sEWE3WEW2kukr77d',
    'operated_by': 1,
    'accept': '*/*'
  },
  body: payload,
   failOnStatusCode:false
})

/**
 * Lift Cancel immigration File
 * @param {object} payload
 */
export const liftCancelImmigrationFile = (payload) =>
cy.request({
  method: 'PUT',
  url: `${apiURL}/api/v1/files/lift-cancel`,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': '158a483339019a3b61eb7e2eae729fbc47360ee18381dfff9a77045d7f32f886',
    'consumer_id': 'Mifi9sijn289E3D4sEWE3WEW2kukr77d',
    'operated_by': 1,
    'accept': '*/*'
  },
  body: payload,
  //  failOnStatusCode:false
})