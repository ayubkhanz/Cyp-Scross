class discountPage{

    elements = {
        tgContDiscount           : ()=> cy.get('.toggle-content').eq(5),
        memberYes                : ()=> cy.get('[for="Yes"]'),
        memberNo                 : ()=> cy.get('[for="No"]'),
        accordionTitleDiscont    : ()=> cy.get('.accordion-title').eq(4)
    }

    click_memberYes(){
        this.elements.memberYes().click()
    }

    click_memberNo(){
        this.elements.memberNo().click()
    }
    
}module.exports = new discountPage();