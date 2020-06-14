var check 
module.exports = {
    beforeEach: browser => {
        check = browser.page.checkpoint2Objects()
        check.navigate()
    },
    after: browser => {
        check.end()
    },
    'Evens and Odds Test': browser => {
        check
        .click('input[name="evenOddInput"]')
        .setValue('input[name="evenOddInput"]', ["1, 2, 5, 6, 9"])
        .click('@button1')
        .verify.containsText('span[name="evenResults"]',"2,6")
        .verify.containsText('span[name="oddResults"]',"1,5,9")
    
        

        
    },
    'Filter Object Test': browser => {
        check
        .click('input[name="objectFilterInput"]')
        .setValue('input[name="objectFilterInput"]',"name")
        .click('@button2')
        .verify.containsText('span[name="objectFilterResults"]',"name")
        
    },
    'Filter String Test': browser => {
        check
        .click('input[id="nameFilterInput"]')
        .setValue('input[id="nameFilterInput"]',"James")
        .click('@button3')
        .verify.containsText('span[name="nameFilterResults"]',"James")
        
    },
    'Palindrome Test': browser => {
        check
        .click('input[name="palindromeInput"]')
        .setValue('input[name="palindromeInput"]',"2002")
        .click('@button4')
        .verify.containsText('span[name="palindromeResults"]',"true")
        .click('input[name="palindromeInput"]')
        .clearValue('input[name="palindromeInput"]')
        .setValue('input[name="palindromeInput"]',"2001")
        .click('@button4')
        .verify.containsText('span[name="palindromeResults"]',"false")
        
    },
    'Sum Test': browser => {
        check
        .click('input[name="sumInput1"]')
        .setValue('input[name="sumInput1"]',"3")
        .click('input[name="sumInput2"]')
        .setValue('input[name="sumInput2"]',"63")
        .click('@button5')
        .verify.containsText('span[name="sumResults"]',"66")
        
    }

}


    
    
    
         
