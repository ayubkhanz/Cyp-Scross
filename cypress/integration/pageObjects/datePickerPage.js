class datePickerPage{

    elements = {
        toggleContentDate  : ()=> cy.get('.toggle-content').eq(2),
        departDate         : ()=> cy.get('#datepicker'),
        datePicker         : ()=> cy.get('#ui-datepicker-div'),
        nextNavigator      : ()=> cy.get('a.ui-datepicker-next'),
        monthName          : ()=> cy.get('.ui-datepicker-month'),
        yearNum            : ()=> cy.get('.ui-datepicker-year'),
        dayNum             : ()=> cy.get('.ui-state-default'),
        returnDate         : ()=> cy.get('#datepickerend'),
        nextBtnDates       : ()=> cy.get('[data-required-field^="start"]'),
        accodionTitleDates : ()=> cy.get('.accordion-title div').eq(1)
    }

    click_departDate(){
        this.elements.departDate().click()
    }

    click_returnDate(){
        this.elements.returnDate().click()
    }
    click_nextBtnDates(){
        this.elements.nextBtnDates().click()
    }
    
    counter = 0;
    selectDepart_Date( year, month, day){

        if(this.counter == 12)
        {   this.elements.nextNavigator().should('have.class', 'ui-state-disabled')
            cy.log('Cant Proceed Departure date : '+ day +'-'+ month +'-'+year)
            cy.log('Date Should be within a year from today')
            return
        }
        this.elements.yearNum().then(($yr) => {

            this.elements.monthName().then($mth => {

               if( $yr.text() == year && $mth.text() == month)
                {
                    this.elements.dayNum().eq(day-1).click({force:true})
                    cy.log("Departure Date Selected : " + day+"-"+month+"-"+year)
                   // this.counter = 0;
                    return
                }
                else
                {
                        this.elements.nextNavigator().click()
                        this.counter++;
                        cy.log(this.counter)
                }
                this.selectDepart_Date(year, month, day)
            })
        })
    }


    counter2=0;
    selectReturn_Date( year, month, day){

        if(this.counter2 == 12)
        {   this.elements.nextNavigator().should('have.class', 'ui-state-disabled')
        cy.log('Cant Proceed Return date : '+ day +'-'+ month +'-'+year)
        cy.log('Date Should be within a year from the day of Departure Date')
        return
        }
      
        this.elements.yearNum().then(($yr) => {

            this.elements.monthName().then($mth => {

               if( $yr.text() == year && $mth.text() == month)
                {
                    this.elements.dayNum().eq(day-1).click({force:true})
                   // this.counter2 = 0;
                    return
                }
                else
                {
                        this.elements.nextNavigator().click()
                        this.counter2++;
                        cy.log(this.counter2)
                }
                
                this.selectReturn_Date(year, month, day)

            })
        })
    }
    

}module.exports = new datePickerPage();