const apiURL =  Cypress.env('APSCore')


/**
 * Login with API
 */
export const login = (userName, password)=>
cy.request({
        method: 'POST',
        url: `${apiURL}/public/login`,
        headers: {
          'Content-Type': 'application/json'
        },
        body: {
          "userName": `${userName}`,
          "password": `${password}`
      }
})

/**
 * Create application
 * @param {object} payload 
 * 
 */
export const createApplication = (payload)=>
cy.request({
        method: 'POST',
        url: `${apiURL}/public/sc/application/json`,
        headers: {
          'Content-Type': 'application/json'
        },
        body: payload
})



/**
 * Fetch application
 * @param {object} payload 
 * 
 */
export const fetchApplication = (payload, authToken)=>
cy.request({
        method: 'POST',
        url: `${apiURL}/application/fetch`,
        headers: {
          'Content-Type': 'application/json',
          "Authorization" : `Bearer ${authToken}`
        },
        body: payload
})

/**
 * Get application
 * @param {object} payload 
 * 
 */
export const getApplication = (applicationNumber, authToken)=>
cy.request({
        method: 'POST',
        url: `${apiURL}/application/search/criteria?pageNo=0&pageSize=10`,
        headers: {
          'Content-Type': 'application/json',
          "Authorization" : `Bearer ${authToken}`
        },
        body: {"applicationNo":`${applicationNumber}`}
})


/**
 * Approve document
 * @param {object} payload 
 * 
 */
export const approveDocument = (payload, authToken)=>
cy.request({
        method: 'POST',
        url: `${apiURL}/document/save`,
        headers: {
          'Content-Type': 'application/json',
          "Authorization" : `Bearer ${authToken}`
        },
        body: payload
})


/**
 * Create profile
 * @param {object} payload 
 * 
 */
export const createProfile = (applicationId, authToken)=>
cy.request({
        method: 'POST',
        url: `${apiURL}/profile/create/${applicationId}`,
        headers: {
          'Content-Type': 'application/json',
          "Authorization" : `Bearer ${authToken}`
        },
})


/**
 * Approve application
 * @param {object} payload 
 * @param {string} authToken
 */
export const approveApplication = (applicationId, actionId, roleId, authToken)=>
cy.request({
        method: 'POST',
        url: `${apiURL}/application/approve/committee/${actionId}`,
        headers: {
          'Content-Type': 'application/json',
          "Authorization" : `Bearer ${authToken}`
        },
        body: {
          
            "applicationId": `${applicationId}`,
            "actionId": `${actionId}`,
            "reasonId": "49",
            "remarks": null,
            "validationToken": null,
            "committeeNSDFlag": false,
            "roleId": roleId
             }
        
})


/**
 * Get profile
 * @param {object} payload 
 * 
 */
export const getProfile = (ppsId, authToken)=>
cy.request({
        method: 'GET',
        url: `${apiURL}/profile/${ppsId}`,
        headers: {
          'Content-Type': 'application/json',
          "Authorization" : `Bearer ${authToken}`
        },
})

export const getActiveFiles = (ppsId, authToken) =>
cy.request({
  method: 'GET',
    url: `${apiURL}/generalInquiry/api/general-inquiry/profile/${ppsId}/files`,
    headers: {
      'Content-Type': 'application/json',
      "Authorization" : `Bearer ${authToken}`,
      'consumer_id': 'ec4eafce7d8773862f59a83264fe0af6',
      'operated_by': 1001,
      'accept': '*/*'
    },
})

