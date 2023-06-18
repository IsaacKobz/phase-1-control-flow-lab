const { expect } = require("chai")

describe('index.js', function() {
  describe('scuberGreetingForFeet()', function () {
    it('gives customers a free sample if the ride is less that or equal to 400 feet', function() {
      expect(scuberGreetingForFeet(199)).to.equal('This is on me!')
    })
    it('charges 30 dollars for a distance over 2000 feet', function () {
      expect(scuberGreetingForFeet(2001)).to.equal('I will gladly take your thirty bucks')
    })
    it('does not allow rides over 2500 feet', function () {
      expect(scuberGreetingForFeet(2501)).to.equal('No can do')
    })
  })
  
  function scuberGreetingForFeet(someValue){
    it('gives customers a free sample if the ride is les that or equal to 400 feet', function () {
      expect(scuberGreetingForFeet(199)).to.equal('This one is on me')
      if (someValue=199) {
        result = it
      }
      if (someValue=>199) {
        result = expect
      }
      
    })

    // Write your code here!
  }
  
})


function ternaryCheckCity(){
  // Write your code here!
}

function switchOnCharmFromTip(){
  // Write your code here!
}