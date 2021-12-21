class destinationsPage{
    elements = {
        tgContDestinations       : ()=> cy.get('.toggle-content').eq(3),
        chooseChoices_InputBox   : ()=> cy.get('.chosen-choices'),
        selectCountry1           : ()=> cy.get('[data-popular-country-code="SG"]'),
        selectCountry2           : ()=> cy.get('[data-popular-country-code="IN"]'),
        travelWarning            : ()=> cy.get('.orange-message'),
        nextBtnDestinations      : ()=> cy.get('[data-required-field="destinations"]'),
        accordionTitleDest       : ()=> cy.get('.accordion-title').eq(2),
        countryOption_Ind        : ()=> cy.get('[data-option-array-index="98"]'),
        countryOption_Sin        : ()=> cy.get('[data-option-array-index="185"]'),
        CountryOptionsList       : ()=> cy.get('.chosen-drop'),
        accodionTitleDest        : ()=> cy.get('.accordion-title div').eq(2),
        backButton               : ()=> cy.get('.quote-back-button'),
        countrySelected          : ()=> cy.get('.search-choice'),
        closeOptions             : ()=> cy.get('.search-choice-close'),


       a : ()=> cy.get('')

    }

    Click_chooseChoices_InputBox(){
        this.elements.chooseChoices_InputBox().click()
    }

    type_chooseChoices_InputBox(country){
       return this.elements.chooseChoices_InputBox().type(country)
    }
    click_countryOption_Ind(){
        this.elements.countryOption_Ind().click({force:true})
    }

    click_countryOPtion(cc){
        return cy.get('[data-popular-country-code='+cc+']').click({force:true})
    }

    click_countryOption_Sin(){
        this.elements.countryOption_Sin().click({force:true})
    }

    click_selectCountry2(){
        this.elements.selectCountry2().click()
    }
    click_selectCountry1(){
        this.elements.selectCountry1().click()
    }

    click_nextBtnDestinations(){
        this.elements.nextBtnDestinations().click()
    }

    click_backButton(){
        this.elements.backButton().eq(2).click()
    }

    click_closeOptions(){
        this.elements.closeOptions().each(() =>{
        this.elements.closeOptions().eq(0).click()
        })
    }

    delete_CountrySelected(countryName){
        this.elements.countrySelected().each(($el,index,list) => {

            if($el.text()== countryName)
            {
                this.elements.closeOptions().eq(index).click()
            }
        })
    }
}
module.exports = new destinationsPage();