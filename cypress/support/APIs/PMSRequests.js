const apiURL =  Cypress.env('PMS')



/**
 * Create Profile
 * @param {object} payload 
 * 
 */
export const createProfile = (payload) =>
cy.request({
    method: 'POST',
    url: `${apiURL}/api/v1/profiles`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': '158a483339019a3b61eb7e2eae729fbc47360ee18381dfff9a77045d7f32f886',
      'consumer_id': 'Mifi9sijn289E3D4sEWE3WEW2kukr77d',
      'operated_by': 1001,
      'accept': '*/*'
    },
    body: payload
})


/**
 * Search with details for profile by ppsId 
 * @param {object} payload 
 * 
 */
export const getProfileInfoByPPSId = (ppsId) =>
cy.request({
    method: 'POST',
    url: `${apiURL}/api/v1/profiles/search?detailedResponse=true`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': '158a483339019a3b61eb7e2eae729fbc47360ee18381dfff9a77045d7f32f886',
      'consumer_id': 'Mifi9sijn289E3D4sEWE3WEW2kukr77d',
      'operated_by': 1001,
      'accept': '*/*'
    },
    body: {
      "ppsId": `${ppsId}`
    }
})




/**
 * Search Profile
 * @param {object} payload 
 * 
 */
export const searchProfile = (payload) =>
cy.request({
    method: 'POST',
    url: `${apiURL}/api/v1/profiles/search`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': '158a483339019a3b61eb7e2eae729fbc47360ee18381dfff9a77045d7f32f886',
      'consumer_id': 'Mifi9sijn289E3D4sEWE3WEW2kukr77d',
      'operated_by': 1001,
      'accept': '*/*'
    },
    body: payload,
    failOnStatusCode: false
})


/***
 * searchWithPPSID
 * @param {number} ppsId
 */
export const searchProfileWithPPSID = (ppsId) =>
cy.request({
    method: 'POST',
    url: `${apiURL}/api/v1/profiles/search`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': '158a483339019a3b61eb7e2eae729fbc47360ee18381dfff9a77045d7f32f886',
      'consumer_id': 'Mifi9sijn289E3D4sEWE3WEW2kukr77d',
      'operated_by': 1001,
      'accept': '*/*'
    },
    body: `{"ppsId":${ppsId}}`,
    failOnStatusCode: false
})

/**
 * Search with post method 
 * @param {object} payload 
 * 
 */
export const searchProfileWithUpdateLegality = (ppsId) =>
cy.request({
    method: 'POST',
    url: `${apiURL}/api/v1/profiles/search?autoCorrectLegality=true&searchFor=VISION_FALLBACK_BY_LEGACY`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': '158a483339019a3b61eb7e2eae729fbc47360ee18381dfff9a77045d7f32f886',
      'consumer_id': 'viP97UilKY0uP57Dp0gjC5i6lesD77ux',
      'operated_by': 1,
      'accept': '*/*'
    },
    
    body: {
      "ppsId": `${ppsId}`,
      "channel": {
          "id": "3"
      },
      "travelType": {
          "id": "1"
      }
  }
})



/**
 * Update profile To MarsoumHolder flage = True
 * @param {object} payload
 */
export const updateProfileFromSpecialNationalityToMarsoum = (ppsId) =>
cy.request({
  method: 'PUT',
  url: `${apiURL}/api/v1/profiles/${ppsId}`,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': '158a483339019a3b61eb7e2eae729fbc47360ee18381dfff9a77045d7f32f886',
    'consumer_id': 'Mifi9sijn289E3D4sEWE3WEW2kukr77d',
    'operated_by': 1,
    'accept': '*/*'
  },
  body: {
    "sourceChannel": {
        "id": 4
    },
    "marrsoumHolder": true
},
failOnStatusCode: false

})


/**
 * Update profile To MarsoumHolder flage = True
 * @param {object} payload
 */
export const updateProfileToMarsoumHolderFlagEqualFalse = (ppsId) =>
cy.request({
  method: 'PUT',
  url: `${apiURL}/api/v1/profiles/${ppsId}`,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': '158a483339019a3b61eb7e2eae729fbc47360ee18381dfff9a77045d7f32f886',
    'consumer_id': 'Mifi9sijn289E3D4sEWE3WEW2kukr77d',
    'operated_by': 1,
    'accept': '*/*'
  },
  body: {
    "sourceChannel": {
        "id": 4
    },
    "marrsoumHolder": false
},
failOnStatusCode: false

})

/**
 * Update profile To MarsoumHolder flage = True
 * @param {object} payload
 */
export const updateProfileToPassportByOrderToTrue = (ppsId) =>
cy.request({
  method: 'PUT',
  url: `${apiURL}/api/v1/profiles/${ppsId}`,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': '158a483339019a3b61eb7e2eae729fbc47360ee18381dfff9a77045d7f32f886',
    'consumer_id': 'Mifi9sijn289E3D4sEWE3WEW2kukr77d',
    'operated_by': 1,
    'accept': '*/*'
  },
  body: {
    "sourceChannel": {
        "id": 4
    },
    "passportByOrder": true,
},
failOnStatusCode: false

})

/**
 * Update profile To MarsoumHolder flage = True
 * @param {object} payload
 */
export const updateProfileToPassportByOrderToFalse = (ppsId) =>
cy.request({
  method: 'PUT',
  url: `${apiURL}/api/v1/profiles/${ppsId}`,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': '158a483339019a3b61eb7e2eae729fbc47360ee18381dfff9a77045d7f32f886',
    'consumer_id': 'Mifi9sijn289E3D4sEWE3WEW2kukr77d',
    'operated_by': 1,
    'accept': '*/*'
  },
  body: {
    "sourceChannel": {
        "id": 4
    },
    "passportByOrder": false,
},
failOnStatusCode: false

})

/**
 * Update Profile
 * @param {object} payload 
 * 
 */
export const UpdateProfile = (payload, ppsId) =>
cy.request({
    method: 'PUT',
    url: `${apiURL}/api/v1/profiles/${ppsId}`,
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