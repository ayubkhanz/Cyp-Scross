class quoteSummaryPage{

    elements = {
        getQuote                 : ()=> cy.get('#getQuote'),
       // quoteSummary           : ()=> cy.get('.quote-summary-list-triptype'),
        quoteSummary             : ()=> cy.get('div.row>ul>li:nth-child(1)'),
        priceA                   : ()=> cy.get('[class$="premium-decimal"]').eq(0),
        priceB                   : ()=> cy.get('[class$="premium-decimal"]').eq(1)
    }

    click_getQuote(){
        this.elements.getQuote().click()
        cy.wait(10000)
    }

    get_quoteSummary(index){
        return cy.get('div.row>ul>li:nth-child('+index+")")
    }

    get_quotePrice(){
      this.elements.priceA().then(($el)=>{
           let price1 = $el.text()
             //   price1 = price1.substr(-6);
                  price1 = price1.trim();
                  price1 = price1.substr(-6)
                  price1 = "$"+price1;
                  cy.log('PRICE 1 : ' + price1)

           this.elements.priceB().then($el2 => {
              let price2 = $el2.text()
                  price2 = price2.trim()
                  cy.log('PRICE 2 : ' + price2)

                  expect(price1).to.equal(price2)


           })
         return
       })

    }


}module.exports = new quoteSummaryPage();
