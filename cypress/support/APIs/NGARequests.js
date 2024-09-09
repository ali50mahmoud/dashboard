const apiURL =  Cypress.env('NGACore')

/**
 * Login to NGA with API
 */
export const  LoginNGA = () => 
    
cy.request({
    method: 'POST',
    url:`${apiURL}rest/public/authenticate?language=en`,
    headers: {
        'Content-Type': 'application/json'
    },
    body:{
        "machineIp": "NA",
        "machineMac": "NA",
        "machineName": "NA",
        "password": "1",
        "userName": "emar1"
    }
})


/**
 * Get travel Id
 * @param {*} cookie 
 * @param {*} UBD 
 * @returns 
 */
export const  GetTravelID_NGA = (cookie, UDB) => 
cy.request({
    method: 'GET',
    url:`${apiURL}rest/preclearance/udb/${UDB}?language=en`,

    headers: {
        
        'Content-Type': 'application/json',
        'Cookie':cookie
        
        
    }
})


export const  MarkEntry_Travel_ID = (cookie,travelId, payload) => 
    cy.request({
        method: 'POST',
        url:`${apiURL}rest/traveler/${travelId}/mark_travel/file/${payload.file.fileNo}?language=en`,
    
        headers: {
            'Content-Type': 'application/json',
            'Cookie':cookie    
        },
        timeout:100000,
        body:payload
})
