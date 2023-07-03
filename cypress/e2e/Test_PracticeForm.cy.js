import Forms from "../POM/PracticeForm";

describe('Forms', function() {
  const formPage = new Forms();

  beforeEach(() => {
    formPage.visit();
  });

  it('Practice Form', function() {
    formPage.clickFormsLink();
    formPage.verifyFormsHeaderText();
    formPage.clickPracticeFormLink();

    formPage.fillFirstName('Amit');
    formPage.fillLastName('Sharma');
    formPage.fillEmail('abc@gmail.com');
    formPage.selectGender();
    formPage.fillPhoneNumber('8600995961');
    formPage.selectDateOfBirth('26 Oct 1987');
    formPage.selectSubject('Commerce');
    formPage.selectHobby();
    formPage.uploadPicture('Amit.jpg');
    formPage.fillCurrentAddress('Canada');
    formPage.selectState('Uttar Pradesh');
    formPage.selectCity('Agra');
    formPage.clickSubmitButton();
    formPage.verifyConfirmationMessage();
    formPage.clickCloseButton();
  });
});
