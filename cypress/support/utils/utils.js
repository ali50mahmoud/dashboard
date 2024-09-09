export const UpdateJson=(filePath,keyValuePairs)=> {
  const payload='Payloads/'+filePath
    cy.readFile(payload).then(jsonData => {
      for (const { keyToChange, newValue } of keyValuePairs) {
        const keys = keyToChange.split('.');
        let targetObject = jsonData;
        for (const key of keys.slice(0, -1)) {
          targetObject = targetObject[key];
        }
        targetObject[keys[keys.length - 1]] = newValue;
      }

      cy.writeFile(payload, jsonData);
    })
  
  }
  export const sendRequest=(method,endpoint,filePath,responseValue)=> {
    const payload='Payloads/'+filePath
    cy.readFile(payload).then(jsonData => {
      cy.log(jsonData)
     
    cy.request({
  method: method,
      url: Cypress.env('core') + endpoint,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': '158a483339019a3b61eb7e2eae729fbc47360ee18381dfff9a77045d7f32f886',
        'consumer_id': 'ec4eafce7d8773862f59a83264fe0af6',
        'operated_by': 1001,
        'accept': '*/*'
      },
      body: jsonData
  
  }).then((request) => {
    const selectedValue=request.body[responseValue]
    cy.writeFile('cypress/fixtures/ResponseValue.json', {
      [responseValue]: selectedValue,
  })
    expect(request.status).to.eq(200)
        })
      })
}
export const getFileNumberWithPermit = (payload)=>{
  const fileNumber = `${payload.departmentId}` + `${payload.year}` + `${payload.fileTypeId}` + `${payload.fileComponent.serialNumber}` 
  return fileNumber
  }
export const getFileNumberWithoutPermit = (payload, responseBody)=>{
  const sequenceId = `${responseBody.sequenceId}`;
  const fileTypeId = `${responseBody.fileTypeId}`;
  const fullSequenceId = sequenceId.length < 6 ? "0".repeat(6 - sequenceId.length) + sequenceId : sequenceId;
  const fullFileTypeId = fileTypeId.length < 2 ? "0" + fileTypeId : fileTypeId;
  const year = `${payload.year}`
  const fileNumber = `${payload.departmentId}` + `${fullFileTypeId}` + `${year.substr(-2)}` +  `${fullSequenceId}` 
  return fileNumber
  }

export const getFileNumberForTWP = (payload, responseBody)=>{
  const sequenceId = `${responseBody.sequenceId}`;
  const fullSequenceId = sequenceId.length < 6 ? "0".repeat(6 - sequenceId.length) + sequenceId : sequenceId;
  const fileNumber =  `${payload.year}` + `${fullSequenceId}` 
  return fileNumber

  }

  export const getFileNumberForOutPass = (payload, responseBody)=>{
    const sequenceId = `${responseBody.sequenceId}`;
    const fullSequenceId = sequenceId.length < 8 ? "0".repeat(8 - sequenceId.length) + sequenceId : sequenceId;
    const fileNumber =  `${payload.year}`  + `${payload.departmentId}` + `${fullSequenceId}` 
    return fileNumber
  }

  export const getFileNumberWithLocation = (payload, responseBody, type)=>{
    const sequenceId = `${responseBody.sequenceId}`;
    const fullSequenceId = sequenceId.length < 6 ? "0".repeat(6 - sequenceId.length) + sequenceId : sequenceId;    const fileTypeId = `${responseBody.fileTypeId}`;
    const fileCategoryId = `${responseBody.fileTypeId}`;
    const fullFileTypeId = fileTypeId.length < 2 ? "0" + fileTypeId : fileTypeId;
    const fullFileCategoryId = fileCategoryId.length < 2 ? "0" + fileCategoryId : fileCategoryId;
    const year = `${payload.year}`
    const fileNumber = `${payload.locationId}`+`${fullFileCategoryId}` + `${fullFileTypeId}` + `${year.substr(-2)}` +  `${fullSequenceId}` 
    return fileNumber
  }

  /**
 * Generate random  number with a specified number of digits
 * @param {Integer} numberOfDigits
 */
  export const  generateRandomNumber = (numberOfDigits) => {
    const maxValue = 10 ** numberOfDigits - 1;
    return Math.floor(Math.random() * maxValue);
  }
/**
 * 
 * @param {Integer} noOfDaysInFuture 
 * @returns Future Date
 */
  export const generateFutureDate = (noOfDaysInFuture) => {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + noOfDaysInFuture);
    return futureDate;
  };
/**
 * 
 * @returns Today date
 */
  export const getTodayDate = () =>{
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();

    const newDate = new Date(year, month, day);
    return newDate
  }
/**
 * 
 * @param {*} profileType 
 * @returns File category based on file type
 */
  export const getFileCategory = (profileType) =>{
    const fileCategory = profileType === 'ENTRYPERMIT' ? '1'
      : profileType === 'RESIDENCE' ? '2'
      : profileType === 'OUTPASS' ? '3'
      : profileType === 'TWP' ? '4'
      : 'Unknown choice';
    return fileCategory
  }
/**
 * 
 * @param {*} length 
 * @returns Random English string
 */
  export const generateRandomEnglishString = (length)=> {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
  
    return result;
  }
/**
 * 
 * @param {*} length 
 * @returns Random Arabic string
 */
  export const  generateRandomArabicString = (length) => {
    const arabicCharacters = 'ابتثجحخدذرزسشصضطظعغفقكلمنهوي';
  
    let randomArabicString = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * arabicCharacters.length);
      randomArabicString += arabicCharacters.charAt(randomIndex);
    }
  
    return randomArabicString;
  }
  /**
   * 
   * @returns Random valid birth date
   */
  export const  generateRandomBirthDate = ()=> {
    const startDate = new Date('1970-01-01'); // January 1, 1970
    const endDate = new Date('2003-12-31'); // December 31, 2003
  
    const randomBirthDateTimestamp =
      startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime());
  
    const randomBirthDate = new Date(randomBirthDateTimestamp);
  
    const year = randomBirthDate.getFullYear();
    const month = String(randomBirthDate.getMonth() + 1).padStart(2, '0'); // Month is zero-based
    const day = String(randomBirthDate.getDate()).padStart(2, '0');
  
    const formattedDate = `${year}-${month}-${day}T00:00:00`;
  
    return formattedDate;
  }

  export const getUAEtimeZoneDate = (date) => {
    // Create a new Date object with the UAE time zone
    const uaeDate = new Date(date);
    const formattedDateString  = uaeDate.toLocaleString('en-US');
  
    return formattedDateString.split(', ')[0];
  };
export const assertCommitteeExemptionResponse = (response) => {
  expect(response.body.committeeExemption[0]).to.have.property('id')
  expect(response.body.committeeExemption[0]).to.have.property('ppsId'); 
  expect(response.body.committeeExemption[0]).to.have.property('fileNumber')
  expect(response.body.committeeExemption[0]).to.have.property('fileType')
}


export const changeDateFormat =(inputDate)=>{
  const date = new Date(inputDate)
  const monthNames = [ "Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct","Nov", "Dec"]
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  const formattedDate = `${day}-${monthNames[monthIndex]}-${year}`;
  return formattedDate;
}


export const getFormateDateWithUAEZone = ()=>{
  let currentDate = new Date();

  // Add one day to the current date
  currentDate.setDate(currentDate.getDate());
  
  // Extract the components of the new date (tomorrow's date)
  let year = currentDate.getFullYear();
  let month = currentDate.getMonth() + 1; // Note: Months are zero-based, so we add 1
  let day = currentDate.getDate();
  
  // Get the current time components
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let seconds = currentDate.getSeconds();
  
  // Format the date and time as needed
  let formattedDateTime = `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year} ${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  return formattedDateTime
}