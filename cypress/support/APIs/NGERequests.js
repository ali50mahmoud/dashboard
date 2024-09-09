const apiURL = Cypress.env("NGEAPIURL");

/**
 * Login to NGE with API
 */
export const LoginNGE = () =>
  cy.request({
    method: "POST",
    url: `${apiURL}rest/public/authenticate?language=en`,
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      machineIp: "NA",
      machineMac: "NA",
      machineName: "NA",
      password: "1",
      userName: "akef",
    },
  });

  /**
 * Get travel id
 */
export const GetTravelID = (cookie, UDB) =>
  cy.request({
    method: "GET",
    url: `${apiURL}rest/preclearance/udb/${UDB}?language=en`,

    headers: {
      "Content-Type": "application/json",
      Cookie: cookie,
    },
  });

  export const  MarkExit = (cookie,travelId, payload) => 
  cy.request({
      method: 'POST',
      url:`${apiURL}rest/traveler/${travelId}/mark_travel/file/${payload.file.fileNo}?language=en`,
  
      headers: {
          
          'Content-Type': 'application/json',
          'Cookie':cookie
          
          
      },
      body: payload
})
