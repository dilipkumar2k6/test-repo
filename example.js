var SalesTax = require("sales-tax");
SalesTax.setTaxOriginCountry("FR", false)


var usHasSalesTax = SalesTax.hasSalesTax("US")
var franceHasSalesTax = SalesTax.hasSalesTax("FR")
// var unitedStatesCaliforniaHasSalesTax = SalesTax.hasSalesTax("US", "CA")
//
// var brazilHasSalesTax = SalesTax.hasSalesTax("BR")  // brazilHasSalesTax === true
// var hongKongHasSalesTax = SalesTax.hasSalesTax("HK")
//
// console.log(brazilHasSalesTax)
// console.log(hongKongHasSalesTax)
//
// console.log(usHasSalesTax)
// console.log(franceHasSalesTax)
// console.log(unitedStatesCaliforniaHasSalesTax)



SalesTax.getSalesTax("LV")
    .then((tax) => {
        // This customer has to pay 21% VAT (as it is a consumer)
         tax ===
          {
            type     : "vat",
            rate     : 0.21,
            area     : "worldwide",
            exchange : "consumer",

            charge   : {
              direct  : true,
              reverse : false
            }
          }
    });














