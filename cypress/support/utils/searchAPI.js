import { getFileCategory } from "../utils/utils"

class SearchAPI {

    verifySearchAPIResponse(fileType, response,fileNumber){
        
        expect(response.status).to.eq(200)
        expect(response.body.immigrationFiles[0].fileCategory.businessNameEn).to.eq(fileType)
        expect(response.body.immigrationFiles[0].monolithFileNumber).to.not.be.null 
    }



}

export const searchAPI = new SearchAPI();