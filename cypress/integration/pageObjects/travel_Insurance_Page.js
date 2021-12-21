// export keyword at the bottom with new keyword 
// also check user3.js to know how to import the class correctly.

class travel_Insurance_Page{
   

    elements = {
        a                  : ()=> cy.get(''),
        holiday            : ()=> cy.get('.icon-point').eq(0),
        h1Text             : ()=> cy.get('h1.container'),

        singleTrip         : ()=> cy.get('[for="Singletrip"]'),
        nextBtn            : ()=> cy.get('[data-required-field^="isSingle"]'),
        toggleContentTrip  : ()=> cy.get('.toggle-content').eq(1),
        accodionTitleTrip     : ()=> cy.get('.accordion-title div').eq(0)

       
       
    }

    // navigateToUrl(){
    //     return cy.visit('/');
    // }
    click_holiday(){
        this.elements.holiday().click()
    }
    click_singleTrip(){
        this.elements.singleTrip().click()
    }
    click_nextBtn(){
        this.elements.nextBtn().click()
    }
 


}
module.exports = new travel_Insurance_Page();