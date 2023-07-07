import Forms from "../POM/PracticeForm";
import testData from "../fixtures/Data.json"

describe('Forms', function() {
  const formPage = new Forms();

  beforeEach(() => {
    formPage.visit();
  });

  it('Practice Form', function() {
    formPage.verifyHomePageHeaderText();
    formPage.clickFormsLink();
    formPage.verifyFormsHeaderText();
    formPage.clickPracticeFormLink();

    formPage.fillFirstName(testData.firstName);
    formPage.fillLastName(testData.lastName);
    formPage.fillEmail(testData.email);
    formPage.selectGender();
    formPage.fillPhoneNumber(testData.mobile);
    formPage.selectDateOfBirth(testData.dob);
    formPage.selectSubject(testData.subject);
    formPage.selectHobby();
    formPage.uploadPicture('Amit.jpg');
    formPage.fillCurrentAddress(testData.currentAddress);
    formPage.selectState(testData.state);
    formPage.selectCity(testData.city);
    formPage.clickSubmitButton();
    formPage.verifyConfirmationMessage();
    formPage.clickCloseButton();
    
  });
});
