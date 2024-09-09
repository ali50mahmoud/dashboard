const apiURL =  Cypress.env('LMS')

/**
 * Lookup with full details
 * @param {string} lookupType 
 * 
 */
export const lookupWithFullDetails = (lookupType) =>
cy.request({
    method: 'GET',
    url: `${apiURL}/v1/lookups/complete/${lookupType}`,
    headers: {
      'Content-Type': 'application/json',
      'consumerKey': 's1a-BBT.WXwL5bgbcfdq1TJrFy0QqnRiGKG9cpQ1HGhzgJ6PWjPOasoL_hHevvoM8VGSLkMJvq7lXGSrvSaOgQn2_CQr-KAMlrgdk_TqiS_ayc0Xg86zKV2AZzHrUlsk2geUNhElaT_JvpUT',
      'operated_by': 1001,
      'accept': '*/*'
    }

})


/**
 * Lookup with lookupType
 * @param {string} lookupType 
 * 
 */
export const getLookupWithlookupType = (lookupType) =>
cy.request({
    method: 'GET',
    url: `${apiURL}/v1/lookups/${lookupType}`,
    headers: {
      'Content-Type': 'application/json',
      'consumerKey': 's1a-BBT.WXwL5bgbcfdq1TJrFy0QqnRiGKG9cpQ1HGhzgJ6PWjPOasoL_hHevvoM8VGSLkMJvq7lXGSrvSaOgQn2_CQr-KAMlrgdk_TqiS_ayc0Xg86zKV2AZzHrUlsk2geUNhElaT_JvpUT',
      'operated_by': 1001,
      'accept': '*/*'
    }

})

/**
 * Lookup By ID
 * @param {string} lookupType 
 * @param {number} ID 
 * 
 */
export const getLookupByID = (lookupType,ID) =>
cy.request({
    method: 'GET',
    url: `${apiURL}/v1/lookups/${lookupType}/${ID}`,
    headers: {
      'Content-Type': 'application/json',
      'consumerKey': 's1a-BBT.WXwL5bgbcfdq1TJrFy0QqnRiGKG9cpQ1HGhzgJ6PWjPOasoL_hHevvoM8VGSLkMJvq7lXGSrvSaOgQn2_CQr-KAMlrgdk_TqiS_ayc0Xg86zKV2AZzHrUlsk2geUNhElaT_JvpUT',
      'operated_by': 1001,
      'accept': '*/*'
    }

})


/**
 * Lookup By Get CGG Countries 
 * 
 * 
 */
export const getGCCCountries = () =>
cy.request({
    method: 'GET',
    url: `${apiURL}/v1/lookups/countries/gcc`,
    headers: {
      'Content-Type': 'application/json',
      'consumerKey': 's1a-BBT.WXwL5bgbcfdq1TJrFy0QqnRiGKG9cpQ1HGhzgJ6PWjPOasoL_hHevvoM8VGSLkMJvq7lXGSrvSaOgQn2_CQr-KAMlrgdk_TqiS_ayc0Xg86zKV2AZzHrUlsk2geUNhElaT_JvpUT',
      'operated_by': 1001,
      'accept': '*/*'
    }

})

export const getArabCountries = () =>
cy.request({
    method: 'GET',
    url: `${apiURL}/v1/lookups/countries/arab`,
    headers: {
      'Content-Type': 'application/json',
      'consumerKey': 's1a-BBT.WXwL5bgbcfdq1TJrFy0QqnRiGKG9cpQ1HGhzgJ6PWjPOasoL_hHevvoM8VGSLkMJvq7lXGSrvSaOgQn2_CQr-KAMlrgdk_TqiS_ayc0Xg86zKV2AZzHrUlsk2geUNhElaT_JvpUT',
      'operated_by': 1001,
      'accept': '*/*'
    }

})


export const getAlternateCountries = () =>
cy.request({
    method: 'GET',
    url: `${apiURL}/v1/lookups/countries/alternate`,
    headers: {
      'Content-Type': 'application/json',
      'consumerKey': 's1a-BBT.WXwL5bgbcfdq1TJrFy0QqnRiGKG9cpQ1HGhzgJ6PWjPOasoL_hHevvoM8VGSLkMJvq7lXGSrvSaOgQn2_CQr-KAMlrgdk_TqiS_ayc0Xg86zKV2AZzHrUlsk2geUNhElaT_JvpUT',
      'operated_by': 1001,
      'accept': '*/*'
    }

})