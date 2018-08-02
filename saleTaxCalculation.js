// Import taxjar
const Taxjar = require('taxjar');


// get client using TAXJAR_API_KEY
const client = new Taxjar({
  apiKey: 'c5b4072ab1d51a3f461f0a731bb381da'
});


// Argument passed to calculateSaleTax function to calculate sale tax , Ideally we should get these from sale/purchase/order Object

var quantity = 1;
var unit_price = 20.0;
var shipping_charge = 10;

var from_country = 'US';
var from_zip = '07001';
var from_state = 'NJ';
var to_country = 'US';
var to_zip = '07446';
var to_state = 'NJ';



(async function f() {
  const amount = await calculateSaleTax(quantity, unit_price, shipping_charge);
  console.log("Tax amount: ", amount);
})()


async function calculateSaleTax(quantity, unit_price, shipping_charge) {

  try {

    const res = await client.taxForOrder({
      from_country: from_country,
      from_zip: from_zip,
      from_state: from_state,
      to_country: to_country,
      to_zip: to_zip,
      to_state: to_state,
      shipping: shipping_charge,
      line_items: [
        {
          quantity: quantity,
          unit_price: unit_price,
        }
      ]

    });

    var total_amount = res.tax.amount_to_collect + res.tax.order_total_amount;
    return total_amount;
  } catch (e) {
    console.error(e)
  }

}
