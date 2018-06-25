( function ( $ ) {

    
    var prospaPayTerm = 13; // 13 or 26 weeks
    var serviceFee = prospaPayTerm * 2.95; // weekly service fee
    var establishmentFee = 19.95; //default for an item between $500 and $2,000
    var itemPrice = 0;
    
  
    function __construct() {

    $( document ).ready( function() {
        itemPrice = document.getElementById(document.getElementById('prospa-pay').getAttribute("priceid")).innerHTML;
        calculatePrice();
    });


  }

  
    function calculatePrice() {    
     
        itemPrice = parseInt(itemPrice.replace(/[^0-9\.-]+/g,""));    

        if (itemPrice < 500 || itemPrice > 20000){
            return;
        } else if (itemPrice > 2000 && itemPrice <= 20000) {
            establishmentFee = (Math.floor(itemPrice / 1000)*10) + 9.95;    
        }  

        var prospaPayWeeklyPrice = ((itemPrice + establishmentFee + serviceFee)/prospaPayTerm).toFixed(2);  

        document.getElementById("prospa-pay").innerHTML = 'or pay <span class="tooltip-toggle" aria-label="" tabindex="0" style="border-bottom: 1px dashed #333">$' + prospaPayWeeklyPrice + '</span> per week over ' + prospaPayTerm + ' weeks, no interest with Prospa Pay.';
 
  }

  __construct();

} )( jQuery );