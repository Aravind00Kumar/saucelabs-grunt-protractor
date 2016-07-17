// home page specs
describe('What toto applocation', function () {
  it('Home page should have a title "Office"', function () {
    browser.get( browser.baseUrl + '/home')
      .then(function () {
        return element(by.binding('homeCtrl.title')).getText();
      })
      .then(function (value) {
        expect(value).toEqual('Office');
      })
      .catch(function (error) {
        console.log(error);
      })
  });
});