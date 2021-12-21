///<reference types = "cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const tIPage = require('../pageObjects/travel_Insurance_Page')
const datePage = require('../pageObjects/datePickerPage')
const destPage = require('../pageObjects/destinationsPage')
const trvlPage = require('../pageObjects/travellersPage')
const discPage = require('../pageObjects/discountPage')
const quotePage = require('../pageObjects/quoteSummaryPage')


/* ============= Scenario 1 : Choose Insurance Type ============= */
Given('Visit home page', () => {
    cy.visit('/')
})
When('Customer clicks on holiday option', () => {
    tIPage.click_holiday()
})
Then('Open quote page', () => {
    tIPage.elements.h1Text().should('have.text', 'Get an instant quote')
} )

/* ============  Scenario 2 : Choose Trip Type Single or Multiple  ============ */  
Given('Next button should be in Disabled Mode', ()=> {
    tIPage.elements.nextBtn().should('be.disabled')
})
When('Customer clicks on Single Trip', () => {
    tIPage.click_singleTrip()
})
Then('Trip Title Should Display Text - Single Trip', () => {
    tIPage.elements.accodionTitleTrip().should('contain','Single Trip')
})
Then('Next Button For Trip Types Should Be Enabled', () => {
    tIPage.elements.nextBtn().should('be.enabled')
})
And('Customer clicks on Next Button', () => {
    tIPage.click_nextBtn()
})
Then('Single Trip Content Should be hidden and Dates content should be visibe', () => {
    tIPage.elements.toggleContentTrip().should('be.hidden')
    datePage.elements.toggleContentDate().should('be.visible')    
})




/* ============ Scenario 3 :  Select Trip Dates : Departure Date Options ============  */
Given('Next Button For Dates Should Be Disabled', () => {
    datePage.elements.nextBtnDates().should('be.disabled')
})
When('Customer Clicks on Depart Date Options', () => {
    datePage.click_departDate()
})
Then('Date Picker Should Be Visible', () => {
    datePage.elements.datePicker().should('be.visible')
})

And('Select Departure Date', () => {
    datePage.selectDepart_Date(2022, "June", 25)
})
And('Departure Date Should Be Within a Year From Today', () => {
    datePage.click_departDate()
    datePage.selectDepart_Date(2023, "June", 25)
})

/*   ('', () => {})   */

/* ========== Scenario 4 : Select Trip Dates : Return Date Options  ============= */
When('Customer Clicks on Return Date Options', () => {
    datePage.click_returnDate()
})
And('Select Return Date', () => {
    datePage.selectReturn_Date(2022, "September", 17)
})
Then('Dates Title Text Should Contain Trip Dates :  {string}', () => {
    datePage.elements.accodionTitleDates().should('contain', '25/06/2022 to 17/09/2022')
})
Then('Next Button For Dates Should Be Enabled', () => {
    datePage.elements.nextBtnDates().should('be.enabled')
})
And('Return Date Should Be Within One Year From The Day Of Departure', () => {
    datePage.click_returnDate()
    datePage.selectReturn_Date(2023, "September", 17)
})
And('Customer Clicks On Next Button For Dates', () => {
    datePage.click_nextBtnDates()
})
Then('Dates Content Should be Hidden and Destination Content Should be Visible', () => {
    datePage.elements.toggleContentDate().should('be.hidden') 
    destPage.elements.tgContDestinations().should('be.visible')
})
  
/* ============== Scenario 5A : Choose Destinatios For Travel ================ */

Given('Click On Destination Options', () => {
    destPage.Click_chooseChoices_InputBox()
})
When('Enter {string} in the Destination Input box', (country) => {
    destPage.type_chooseChoices_InputBox(country)
})
 And('Select India Option from List', () => {
     destPage.click_countryOption_Ind()
 })
Then('Next Button For Destinations Should be Enabled', () => {
    destPage.elements.nextBtnDestinations().should('be.enabled')
})
And('Select Singapore option From List',()=> {
    destPage.click_countryOption_Sin()
})

Then('Travel Warning Should be displayed', ()=>{
    destPage.elements.travelWarning().should('contain','A travel warning applies to this destination')
})

And('Destinations Title Text Should have Country Names Selected {string}', (countryNames) => {
    destPage.elements.accodionTitleDest().should('contain', countryNames)
})
And('Click on Next Button For Destinations', ()=> {
    destPage.click_nextBtnDestinations()
})
Then('Destinations Content Should be Hidden and Treveller Content Should be Visible', () => {
  destPage.elements.tgContDestinations().should('be.hidden')
  trvlPage.elements.tgContTravellers().should('be.visible')
})

/* =========== Scenario 5B : Choose Destinatios From Popular Destinations List  ============ */

Given('Click Back Button', () => {
    destPage.click_backButton()
})  
And('Delete All Already Selected Destinations', () => {
    destPage.click_closeOptions()
}) 
And('Select India From Popular Destinations List', () => {
    destPage.click_selectCountry2()
})
And('Select Japan,Thailand,India - {string},{string},{string} From Popular Destinations',(cc,dd,ee)=>{
    destPage.click_countryOPtion(cc)
    destPage.click_countryOPtion(dd)
    destPage.click_countryOPtion(ee)
})
And('Delete {string} From Selected Countries', (countryName) => {
    destPage.delete_CountrySelected(countryName)
})

/* ============     Scenario 6 : Choose No Of Travellers  ======= */

Given('Travellers Content Should Be Visible', () => {
    trvlPage.elements.tgContTravellers().should('be.visible')
})   
And('Next Button Should Be Disabled', () => {
    trvlPage.elements.nextTraveller().should('be.disabled')
})
When('Click Drop Down For Adults', () => {
    trvlPage.click_AdultDropDown()
})   
And('Select {string} Adults From List', (adults) => {
    trvlPage.Select_NoOfAdults(adults)
})
Then('2 Adult Age Input Boxes Should Be Visible', () => {
    trvlPage.elements.ageAdult1().should('be.visible')
    trvlPage.elements.ageAdult2().should('be.visible')
})
And('Should Display Message {string}', (ageInfo) =>{
    trvlPage.elements.adultAgeInfo().should('have.text', ageInfo)
})
And('Enter {string} And {string} in Age Input Boxes', (Age1,Age2) => {
    trvlPage.type_AgeInput(Age1,Age2)
}) 
And('Click Drop Down For Kids', () => {
    trvlPage.click_KidsDropDown()
})

And('Select {string} Kids From List', (kids) => {
    trvlPage.Select_NoOfKids(kids)
})
Then('Next Button Should be Enabled', () => {
    trvlPage.elements.nextTraveller().should('be.visible')
})
And('Travellers Title Should have Text {string}', (travellers) => {
    trvlPage.elements.accordionTitleTravller().should('contain', travellers)
}) 

And('Click On Next Button', () => {
    trvlPage.Click_nextTravelButton()
})  
Then('Travellers Content Should Be Hidden and Discount Content Should Be Visible', () => {
    trvlPage.elements.tgContTravellers().should('be.hidden')
    discPage.elements.tgContDiscount().should('be.visible')
})   


/*  ========== Scenario: Scenario 7 : Select If Southern Cross Member ========*/
       

When('Click on Member Yes Option', () => {
    discPage.click_memberYes()
})   
Then('Discount Title Should have Text {string}', (discMsg) => {
    discPage.elements.accordionTitleDiscont().should('contain', discMsg)
})   
When('Click on Member No Option', () => {
    discPage.click_memberNo()
}) 
And('Get Quote Button Should Be Enabled', ()=>{
    quotePage.elements.getQuote().should('be.enabled')
}) 

/*  =========== Scenario 8 : Get Quote Summary =========    */
When('Clicks On Get Quote', ()=>{
    quotePage.click_getQuote()
}) 
Then('Type Of Insurance Should Be {string}', (typeOfIns) => {
    quotePage.get_quoteSummary(1).should('contain', typeOfIns)
})
And('Type Of Trip Should Be {string}', (typeOfTripe) => {
    quotePage.get_quoteSummary(2).should('contain', typeOfTripe)
}) 
And('Date Of Trip Should Be {string}', (tripDates) => {
    quotePage.get_quoteSummary(3).should('contain', tripDates)
})
And('Destinations Selected Should Be {string}', (destinations) => {
    quotePage.get_quoteSummary(4).should('contain', destinations)
})
And('Number Of Travellers Should Be {string}', (noOfTravelers) => {
    quotePage.get_quoteSummary(5).should('contain', noOfTravelers)

}) 
And('Discount Applied Should Be {string}', (discount) => {
    quotePage.get_quoteSummary(6).should('contain', discount)

})   
And('Insurance Premium Should Be {string}', (price2) => {
    quotePage.get_quotePrice(price2)
})
/*/('', () => {})   */
/*('', () => {})   */
/*('', () => {})   */
