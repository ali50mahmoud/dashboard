import { committeeExemptions } from "../../support/APIs/VMSRequests"
import { assertCommitteeExemptionResponse } from "../../support/utils/utils";


Given ('Update violation exemption inquiry - Passing all search parameters', ()=>{
    cy.readFile('cypress/testData/Payloads/updateViolationExemptionPayload.json').then((payload)=>{
        committeeExemptions(payload)
    }).then((response)=>{
        expect(response.status).to.eq(200); 
        assertCommitteeExemptionResponse(response)

    })
})


Given ('Update Violation Exemption Inquiry - Passing Exemption ID, Expired Exemption Status and isActive', ()=>{
    committeeExemptions({
            "exemptionId": 79,
            "exemptionStatus": "ACTIVE",
            "isActive" : true
    }).then((response)=>{
        expect(response.status).to.eq(200); 
        assertCommitteeExemptionResponse(response)
    })

})


Given ('Update Violation Exemption Inquiry - Passing File Type and File Number', ()=>{
    committeeExemptions({
            "fileNumber": 2101121601498,
            "fileType": "PERMIT"
}).then((response)=>{
    expect(response.status).to.eq(200);
    assertCommitteeExemptionResponse(response)
})
})