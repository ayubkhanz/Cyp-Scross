class quoteSummaryPage{

    elements = {
        getQuote                 : ()=> cy.get('#getQuote'),
       // quoteSummary           : ()=> cy.get('.quote-summary-list-triptype'),
        quoteSummary             : ()=> cy.get('div.row>ul>li:nth-child(1)')
    }

    click_getQuote(){
        this.elements.getQuote().click()
        cy.wait(10000)
    }

    get_quoteSummary(index){
        return cy.get('div.row>ul>li:nth-child('+index+")")
    }

    get_quotePrice(price2){
       cy.get('div.row>ul>li:nth-child(7)>span').then(($el)=>{
           let price1 = $el.text()
               price1 = price1.substr(83,6);
               price1 = "$"+price1;
           cy.log(price1)
           cy.log(price2)
         expect(price1).to.equal(price2)
         return
       })

    }


}module.exports = new quoteSummaryPage();
