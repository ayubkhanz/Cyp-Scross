Feature: Holiday Insurance 

    Feature Description

    Scenario: Scenario 1 : Choose Insurance Type
        Given Visit home page
        When Customer clicks on holiday option
        Then Open quote page

    Scenario: Scenario 2 : Choose Trip Type Single or Multiple
        Given Next button should be in Disabled Mode
        When Customer clicks on Single Trip
        Then Trip Title Should Display Text - Single Trip
        Then Next Button For Trip Types Should Be Enabled
        And Customer clicks on Next Button
        Then Single Trip Content Should be hidden and Dates content should be visibe

    Scenario: Scenario 3 : Select Trip Dates : Departure Date Options
        Given Next Button For Dates Should Be Disabled
        When Customer Clicks on Depart Date Options
        Then Date Picker Should Be Visible
        And Select Departure Date
        And Departure Date Should Be Within a Year From Today

    Scenario: Scenario 4 : Select Trip Dates : Return Date Options
        When Customer Clicks on Return Date Options
        Then Date Picker Should Be Visible
        And Select Return Date
        Then Dates Title Text Should Contain Trip Dates :  "25/06/2022 to 17/09/2022"
        Then Next Button For Dates Should Be Enabled
        And Return Date Should Be Within One Year From The Day Of Departure
        And Customer Clicks On Next Button For Dates
        Then Dates Content Should be Hidden and Destination Content Should be Visible

    Scenario: Scenario 5A : Choose Destinatios By Entering Country Names
        Given Click On Destination Options
        When Enter "Ind" in the Destination Input box
        And Select India Option from List
        Then Next Button For Destinations Should be Enabled
        When Enter "Sin" in the Destination Input box
        And Select Singapore option From List
        Then Travel Warning Should be displayed
        And Destinations Title Text Should have Country Names Selected "India, Singapore"
        And Click on Next Button For Destinations
        Then Destinations Content Should be Hidden and Treveller Content Should be Visible

    Scenario: Scenario 5B : Choose Destinatios From Popular Destinations List
        Given Click Back Button
        And Delete All Already Selected Destinations
        And Select Japan,Thailand,India - "JP","TH","IN" From Popular Destinations
        Then Travel Warning Should be displayed
        And Destinations Title Text Should have Country Names Selected "Japan, Thailand, India"
        And Delete "Thailand" From Selected Countries
        And Click on Next Button For Destinations
        Then Destinations Content Should be Hidden and Treveller Content Should be Visible

    Scenario: Scenario 6 :  No Of Travellers To Be Covered
        Given Travellers Content Should Be Visible
        And Next Button Should Be Disabled
        When Click Drop Down For Adults
        And Select "2" Adults From List
        Then 2 Adult Age Input Boxes Should Be Visible
        And Should Display Message "Enter adult traveller ages based on their age today. Adults must be aged between 18 and 118."
        And Enter "45" And "41" in Age Input Boxes
        And Click Drop Down For Kids
        And Select "4" Kids From List
        Then Next Button Should be Enabled
        And Travellers Title Should have Text "2 Adults , 4 Children"
        And Click On Next Button
        Then Travellers Content Should Be Hidden and Discount Content Should Be Visible

    Scenario: Scenario 7 : Select If Southern Cross Member
        When Click on Member Yes Option
        Then Discount Title Should have Text "5% Member Discount"
        When Click on Member No Option
        Then Discount Title Should have Text "No Discount"
        And Get Quote Button Should Be Enabled
    
    Scenario: Scenario 8 : Get Quote Summary
        When Clicks On Get Quote
        Then Type Of Insurance Should Be "Holiday"
        And Type Of Trip Should Be "Single Trip"
        And Date Of Trip Should Be "25/06/2022 to 17/09/2022"
        And Destinations Selected Should Be "Japan, India"
        And Number Of Travellers Should Be "2 Adults , 4 Children"
        And Discount Applied Should Be "No Discount"
        #And Insurance Premium Should Be "$967.25"

