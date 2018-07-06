(function() {  
    
    // Bind event listener for Cart
    // Set all variables via JSON and assign defaults
    // New modal
   
    
    var prospaPayTerm = document.getElementById('prospa-pay').getAttribute("term") || 13;
    var serviceFee = prospaPayTerm * 2.95;
    var establishmentFee = 19.95; 
    var itemPrice = undefined;
    var prospaPayWeeklyPrice = undefined;
    var minPrice = Number(document.getElementById('prospa-pay').getAttribute("minprice")) || 1000;
    var prospaPayOffer = '';
    var offerDisplayed = false;

    
    !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t,e){var n=document.createElement("script");n.type="text/javascript";n.async=!0;n.src="https://cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a);analytics._loadOptions=e};analytics.SNIPPET_VERSION="4.1.0";
    analytics.load("UXoGCevr6fdRT3RDpt4OUAHOzNMZjoY8");
    analytics.page();
    }}();
    
    var script = document.createElement("script");
    script.src = "https://cdn.optimizely.com/js/10931930792.js";
    document.head.appendChild(script);
    
 

    function __construct() {

        bindSegmentEvent();
        getPrice();
        showPrice();

        document.addEventListener("DOMContentLoaded", function(event) {
            bindSegmentEvent();
            broadcast('Product Viewed');              
        });
        
        
        //Bind an event listener for cart update woocommerce only
        
        
        
        

    }

    
    
    function bindSegmentEvent (){

      var cta = document.querySelectorAll( 'button[type="button"],button[type="submit"]');
            for (var i = 0; i < cta.length; i++) {
                if ( cta[i].innerText.search( /add to cart/i ) !== -1 ) {                    
                    cta[i].addEventListener("click", function () {broadcast('Added To Cart')});
                    break;
                }
            }
    }

    
    
    function getPrice(){

        var platform = document.getElementById('prospa-pay').getAttribute("platform");    

            switch (platform){                
                case 'shopify':
                    itemPrice = document.getElementById('prospa-pay').getAttribute("price") / 100;
                    break;
                case 'woocommerce':                
                    itemPrice = document.getElementById('prospa-pay').getAttribute("price"); 
                    break;
                case 'neto':                
                    itemPrice = document.getElementById('prospa-pay').getAttribute("price"); 
                    break;
            }

    }
 
  
    function showPrice () {
      
            if (itemPrice >= minPrice && itemPrice <= 20000){
                
                if (itemPrice > 2000){
                        establishmentFee = (Math.floor(itemPrice / 1000)*10) + 9.95;
                }

                prospaPayWeeklyPrice = ((Number(itemPrice) + establishmentFee + serviceFee)/prospaPayTerm).toFixed(2);
                prospaPayOffer = 'or $' + prospaPayWeeklyPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' a&nbsp;week. <span><a href="#prospa-pay-modal" id="prospa-pay-modal-link" style="text-decoration:none; color:#0AC775">ProspaPay&nbsp;for&nbsp;business.</a></span>';
               
            } else if (isNaN(itemPrice)|| itemPrice == undefined || itemPrice == null || itemPrice == '' ) {                                
                prospaPayOffer = 'Pay in 13 weekly instalments. <span><a href="#prospa-pay-modal" id="prospa-pay-modal-link" style="text-decoration:none; color:#0AC775">ProspaPay&nbsp;for&nbsp;business.</a></span>';                
            } else if (itemPrice < minPrice || itemPrice > 20000 ){
                return;
            }
            
                        
            document.getElementById("prospa-pay").innerHTML = prospaPayOffer;
            offerDisplayed = true;
            
            document.body.insertAdjacentHTML('beforeend','<div id="prospa-pay-modal" class="prospa-pay-overlay"><a id="prospa-pay-offer" class="prospa-pay-cancel" href="#" onclick="location.href=\'#\'"></a><div class="prospa-pay-modal"><div class="prospa-pay-content"><img src="https://partner-kit.prospa.com/assets/prospa-pay-how-it-works.png" width="100%"></div></div></div>');
      
            document.getElementById("prospa-pay-modal-link").addEventListener("click", function () {broadcast('ProspaPay Offer Viewed')});
                                                                   
                    
            document.getElementById("prospa-pay").insertAdjacentHTML('beforebegin', '<style type="text/css">\
                                                                                       #prospa-pay{padding-top:10px;padding-bottom:10px}.prospa-pay-overlay{position:absolute;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,.8);transition:opacity .2s;visibility:hidden;opacity:0}.prospa-pay-overlay .prospa-pay-cancel{position:absolute;width:100%;height:100%;cursor:default}.prospa-pay-overlay:target{visibility:visible;opacity:1}#prospa-pay-modal.prospa-pay-overlay{z-index:1000000}.prospa-pay-modal{margin:100px auto;background:#fff;width:100%;max-width:710px;border-radius:2px;box-shadow:0 0 50px rgba(0,0,0,.5);position:relative}.prospa-pay-modal .prospa-pay-content{max-height:490px;overflow:auto}\
                                                                                    </style>');
    }    
    
    
   
    function broadcast(message) {
        analytics.track(message, {
            instalmentPrice: prospaPayWeeklyPrice,
            numberInstalments: prospaPayTerm,
            offerCopy: document.getElementById("prospa-pay").innerText,
            offerDisplayed: offerDisplayed,
            productName: document.getElementById('prospa-pay').getAttribute("productname"),
            productPrice: itemPrice,
            url: document.URL,
            store: document.getElementById('prospa-pay').getAttribute("store"),
            platform: document.getElementById('prospa-pay').getAttribute("platform")
        });
    }
        
        
       

   
    
    
  __construct();
    
    

})();