import { generateRandomArabicString, generateRandomBirthDate, generateRandomEnglishString, generateRandomNumber, getTodayDate } from "./utils"

export const generateRandomDataForCreatingApplication = (createApplicationPayload, visaType, appNo) =>{
    const engFirstName = generateRandomEnglishString(4)
    const engMidName = generateRandomEnglishString(4)
    const engLastName = generateRandomEnglishString(4)
    const engMotherName = generateRandomEnglishString(4)
    const arFirstName = generateRandomArabicString(4)
    const arMidName = generateRandomArabicString(4)
    const arLastName = generateRandomArabicString(4)
    const arMotherName = generateRandomArabicString(4)
    const passportNo = 'LR' + generateRandomNumber(9)
    const birthDate = generateRandomBirthDate()
    const currentDate = getTodayDate()
    createApplicationPayload.application.payment.paymentDate = currentDate;
    createApplicationPayload.application.applicantInfo.nameEn = `${engFirstName} ${engMidName} ${engLastName}`
    createApplicationPayload.application.applicantInfo.nameAr = `${arFirstName} ${arMidName} ${arLastName}`

    createApplicationPayload.application.applicantInfo.firstNameAr = arFirstName;
    createApplicationPayload.application.applicantInfo.middleNameAr = arMidName;
    createApplicationPayload.application.applicantInfo.lastNameAr = arLastName;
    createApplicationPayload.application.applicantInfo.motherNameAr = arMotherName;

    createApplicationPayload.application.applicantInfo.firstNameEn = engFirstName;
    createApplicationPayload.application.applicantInfo.lastNameEn = engLastName;
    createApplicationPayload.application.applicantInfo.middleNameEn = engMidName;
    createApplicationPayload.application.applicantInfo.motherNameEn = engMotherName;

    createApplicationPayload.application.applicantInfo.passportNo = passportNo;
    createApplicationPayload.application.applicantInfo.birthDate = birthDate;
    createApplicationPayload.application.applicationInfo.appNo = appNo;
    createApplicationPayload.application.applicationInfo.appDate = currentDate
    createApplicationPayload.application.applicationInfo.visaType.id = visaType
    return createApplicationPayload
}

export const generateRandomDataForCreatingProfile = (createProfilePayload, visaType) =>{
    const engFirstName = generateRandomEnglishString(4)
    const engMidName = generateRandomEnglishString(4)
    const engLastName = generateRandomEnglishString(4)
    const engMotherName = generateRandomEnglishString(4)
    const arFirstName = generateRandomArabicString(4)
    const arMidName = generateRandomArabicString(4)
    const arLastName = generateRandomArabicString(4)
    const arMotherName = generateRandomArabicString(4)
    const passportNo = 'LR' + generateRandomNumber(9)
    const birthDate = generateRandomBirthDate()
    createProfilePayload.nameEn = `${engFirstName} ${engMidName} ${engLastName}`
    createProfilePayload.nameAr = `${arFirstName} ${arMidName} ${arLastName}`

    createProfilePayload.firstNameAr = arFirstName;
    createProfilePayload.secondNameAr = arMidName;
    createProfilePayload.lastNameAr = arLastName;
    createProfilePayload.motherNameAr = arMotherName;

    createProfilePayload.firstNameEn = engFirstName;
    createProfilePayload.lastNameEn = engLastName;
    createProfilePayload.secondNameEn = engMidName;
    createProfilePayload.motherNameEn = engMotherName;

    createProfilePayload.passportNo = passportNo;
    createProfilePayload.immigrationDocuments[0].documentNo = passportNo;
    createProfilePayload.birthDate = birthDate;
    return createProfilePayload
}




export const generateRandomDataForCreatingProfileWith2Passport = (createProfilePayload, visaType) =>{
    const engFirstName = generateRandomEnglishString(4)
    const engMidName = generateRandomEnglishString(4)
    const engLastName = generateRandomEnglishString(4)
    const engMotherName = generateRandomEnglishString(4)
    const arFirstName = generateRandomArabicString(4)
    const arMidName = generateRandomArabicString(4)
    const arLastName = generateRandomArabicString(4)
    const arMotherName = generateRandomArabicString(4)
    const passportNo1 = 'LR' + generateRandomNumber(9)
    const passportNo2 = 'LR' + generateRandomNumber(9)
    const birthDate = generateRandomBirthDate()
    createProfilePayload.nameEn = `${engFirstName} ${engMidName} ${engLastName}`
    createProfilePayload.nameAr = `${arFirstName} ${arMidName} ${arLastName}`

    createProfilePayload.firstNameAr = arFirstName;
    createProfilePayload.secondNameAr = arMidName;
    createProfilePayload.lastNameAr = arLastName;
    createProfilePayload.motherNameAr = arMotherName;

    createProfilePayload.firstNameEn = engFirstName;
    createProfilePayload.lastNameEn = engLastName;
    createProfilePayload.secondNameEn = engMidName;
    createProfilePayload.motherNameEn = engMotherName;

    createProfilePayload.immigrationDocuments[0].documentNo = passportNo1;
    createProfilePayload.immigrationDocuments[1].documentNo = passportNo2;
    createProfilePayload.birthDate = birthDate;
    return createProfilePayload
}