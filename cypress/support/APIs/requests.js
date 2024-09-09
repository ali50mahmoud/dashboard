import { generateFutureDate, getTodayDate, Login } from "../utils/utils"
import { searchImmigrationFile } from "./FMSRequests"

const apiURL =  Cypress.env('visionCore')

/**
 * Create profile
 * @param {object} payload 
 * 
 */
export const createProfile = (payload) =>
cy.request({
    method: 'POST',
    url: `${apiURL}/individual-profile-canary/api/v1/profiles`,
    headers: {
      'Authorization': '158a483339019a3b61eb7e2eae729fbc47360ee18381dfff9a77045d7f32f886',
      'Content-Type': 'application/json',
      'consumer_id': 'Mifi9sijn289E3D4sEWE3WEW2kukr77d',
      'operated_by': 1,
      'accept': '*/*'
    },
    body: payload
})

/**
 * Create application
 * @param {object} payload 
 * 
 */
export const createApplication = (payload) =>
cy.request({
    method: 'POST',
    url: `${visionCore}visioncore/ApplicationService`,
    headers: {
      'Content-Type': 'text/xml'
    },
    body: payload
})


/**
 * API request convert from file number to file component 
 * @param {integer} fileCategory 
 * @param {integer} fileNumber 
 */
export const convertFileNumberToFileComponent = (fileCategory, fileNumber)=>
  cy.request({
    method: 'GET',
    url: `https://stgcore.e-vision.ae/immigration-file-canary/api/v1/files/convert?fileCategoryId=${fileCategory}&fileNumber=${fileNumber}`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': '158a483339019a3b61eb7e2eae729fbc47360ee18381dfff9a77045d7f32f886',
      'consumer_id': 'ec4eafce7d8773862f59a83264fe0af6',
      'operated_by': 1001,
      'accept': '*/*'
    },
})

export const SecService1 = () => {
    
  cy.readFile('cypress/testData/profileInfo.json').then((profile)=>{
      const ppsId = parseInt(profile.ppsId)
      searchImmigrationFile({
        "profileIds": [
            ppsId
        ]
      }).then((response1)=>{
        const personNo = response1.body.immigrationFiles[0].fileNumber
        cy.request({
            method: 'PUT',
            url: 'https://10.14.90.202/individual-profile-canary/api/v1/profiles/'+ppsId,
            headers: {
                'Content-Type': 'application/json',
                'Authorization':'158a483339019a3b61eb7e2eae729fbc47360ee18381dfff9a77045d7f32f886',
                'consumer_id' : 'KJsZfg2ouEkukr94R',
                'operated_by' : '1'
            },
            body:  {

                "sourceChannel": {
            
                    "id": 29,
            
                    "descEnglish": null,
            
                    "descArabic": null,
            
                    "archived": false,
            
                    "desc": null
            
                }, "individualPersonNo": {
            
                    "personNo":personNo,
            
                    "personType": {
            
                        "id":2,
            
                        "descEnglish": null,
            
                        "descArabic": null,
            
                        "archived": false,
            
                        "desc": null
            
                    },
            
                    "makeAllPersonNoUnoperational": true,
            
                    "operational": true
            
                }
            
            }
        })
      })
    })
}

export const  MarkEntryWithAPI = () => {
  
  const travelDate = getTodayDate();
  const formattedTravelDate = `${travelDate.getFullYear()}-${(travelDate.getMonth() + 1).toString().padStart(2, '0')}-${travelDate.getDate().toString().padStart(2, '0')}`;
  const expiryDate = generateFutureDate(58);
  const formattedExpiryDate = `${expiryDate.getFullYear()}-${(expiryDate.getMonth() + 1).toString().padStart(2, '0')}-${expiryDate.getDate().toString().padStart(2, '0')}`;

  cy.readFile('cypress/testData/profileInfo.json').then((profile)=>{
    cy.readFile('cypress/testData/Payloads/createProfilePayloads/createProfilePayload.json').then((profilePayload)=>{
      const passportNo = profilePayload.passportNo
      console.log(passportNo)
      const ppsId = parseInt(profile.ppsId)
      searchImmigrationFile({
        "profileIds": [
            ppsId
        ]
      }).then((response1)=>{
        const entryPermitNo = response1.body.immigrationFiles[0].fileNumber
      cy.request({
        method: 'POST',
        url:'https://stgcore.e-vision.ae/visioncore/TravelService',
    
        headers: {
            
            'Content-Type': 'text/xml'
            
            
        },
        body:
      `  <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns="http://travel.api.service.borderentryexit.v2015.emaratech.com/1.0">
  <soapenv:Header/>
  <soapenv:Body>
      <NS1:travelOnTravelDocumentWithPermit xmlns:NS1="http://travel.api.service.borderentryexit.v2015.emaratech.com/1.0">
        <travelOnTravelDocumentWithPermitRequest>
            <operatedBy>1001</operatedBy>
            <operationDate>2023-01-23T11:57:33</operationDate>
            <source> 
              <id>3</id>
            </source>
            <MSUniqueId>1492507373</MSUniqueId>
            <blacklisted>false</blacklisted>
            <flightNumber>522</flightNumber>
            <port>
              <id>300</id>
            </port>
            <profileId>${ppsId}</profileId>
            <toFromCountry>
              <id>207</id>
            </toFromCountry>
            <toFromDestination>
              <id>287</id>
              <country>
                  <id>207</id>
              </country>
            </toFromDestination> 
            <travelDate>${formattedTravelDate}T11:56:44</travelDate>
            <travelDocument>
              <documentNo>${passportNo}</documentNo>
              <documentType>
                  <id>1</id>
              </documentType>
              <expiryDate>2045-08-01</expiryDate>
              <issueCountry>
                  <id>205</id>
              </issueCountry>
              <issueCountryGov>
                  <id>205</id>
              </issueCountryGov>
              <nationality>
                  <id>205</id>
              </nationality>
              <issueDate>2010-08-03</issueDate>
            </travelDocument>
            <travelType>
              <id>1</id>
            </travelType>
            <entryPermitNo>${entryPermitNo}</entryPermitNo>
            <permitType>
              <id>1</id>
            </permitType>
            <permitValidityDate>${formattedExpiryDate}</permitValidityDate>
        </travelOnTravelDocumentWithPermitRequest>
      </NS1:travelOnTravelDocumentWithPermit>
  </soapenv:Body>
  </soapenv:Envelope>`
        })
      })
    })
  })
}