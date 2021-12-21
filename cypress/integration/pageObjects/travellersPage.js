class travellersPage{
    elements = {
        nextTraveller            : ()=> cy.get('[data-required-field^="traveler"]'),
        tgContTravellers         : ()=> cy.get('.toggle-content').eq(4),
        adultDropdown            : ()=> cy.get('.chosen-container').eq(1),
        noOfAdults               : ()=> cy.get('[data-option-array-index="2"]').eq(1),
        kidsDropdown             : ()=> cy.get('.chosen-container').eq(2),
        noOfKids                 : ()=> cy.get('[data-option-array-index="4"]').eq(1),
        ageAdult1                : ()=> cy.get('[placeholder="Age"]').eq(0),
        ageAdult2                : ()=> cy.get('[placeholder="Age"]').eq(1),
        adultAgeInfo             : ()=> cy.get('#Div_InfoText'),
        accordionTitleTravller   : ()=> cy.get('.accordion-title').eq(3)

        

    }

    click_AdultDropDown(){
        this.elements.adultDropdown().click()
    }
    Select_NoOfAdults(adults){
      return cy.get('[data-option-array-index='+adults+']').eq(1).click({force:true})
    }
    click_KidsDropDown(){
        this.elements.kidsDropdown().click()
    }

    Select_NoOfKids(kids){
        return cy.get('[data-option-array-index='+kids+']').eq(1).click({force:true})
    }

    type_AgeInput(Age1,Age2){
        this.elements.ageAdult1().type(Age1)
        this.elements.ageAdult2().type(Age2)
    }

    Click_nextTravelButton(){
        this.elements.nextTraveller().click()
    }

}module.exports = new travellersPage();