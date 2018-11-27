/* SIMPLE VERSION OF THE WIDGET */

(function() {  
    

    var prospaPayNode = document.getElementById('prospa-pay');
    
    if (!prospaPayNode) return;
    
    var prospaPayTerm = document.getElementById('prospa-pay').getAttribute("term") || 13;
    var serviceFee = prospaPayTerm * 2.95;
    var establishmentFee = 19.95; 
    var itemPrice = undefined;
    var prospaPayWeeklyPrice = undefined;
    var minPrice = Number(document.getElementById('prospa-pay').getAttribute("minprice")) || 500;
    var prospaPayOffer = '';
    var offerDisplayed = false;
    var step = document.getElementById('prospa-pay').getAttribute("step") || 'product';

    
    !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t,e){var n=document.createElement("script");n.type="text/javascript";n.async=!0;n.src="https://cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a);analytics._loadOptions=e};analytics.SNIPPET_VERSION="4.1.0";
    analytics.load("u5j2Ccd2Do623Vd7FP5m5BdZNHS5bNIS");
    analytics.page();
    }}();

  
    var script = document.createElement("script");
    script.src = "https://cdn.optimizely.com/js/10931930792.js";
    document.head.appendChild(script);
 

    function __construct() {
        
        bindSegmentEvent();
        showProspaPay();
        
        try {
         jQuery(document.body).on('updated_cart_totals', function() {showProspaPay();broadcastViewed();});
        }
        catch(e) {}     
        
        
        
        document.addEventListener("DOMContentLoaded", function(event) {
            bindSegmentEvent();
            broadcastViewed();              
        });
        
       
    }
    
    
    function broadcastViewed(){
        broadcastSegmentEvent((step == 'cart') ? 'Cart Viewed' : 'Product Viewed');
    }
    

    function showProspaPay(){
        getPrice();
        showPrice();
    }
    
    
    function bindSegmentEvent (){
      var cta = document.querySelectorAll( 'button[type="button"],button[type="submit"]');
            for (var i = 0; i < cta.length; i++) {
                if ( cta[i].innerText.search( /add to cart/i ) !== -1 ) {                    
                    cta[i].addEventListener("click", function () {broadcastSegmentEvent('Added To Cart')});
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

                prospaPayWeeklyPrice = ((Number(itemPrice) + establishmentFee + serviceFee)/prospaPayTerm).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                
                prospaPayOffer = '<span id="prospa-pay-offer" style="font-size:14px; font-family: \'Maison Book\', sans-serif; color:#000"><span id="prospa-pay-offer-prefix">or <span id="prospa-pay-instalment" style="font-family: \'Maison Demi\', sans-serif;"> $' + prospaPayWeeklyPrice + '/week </span><span id="prospa-pay-term">over ' + prospaPayTerm + ' weeks with Prospa&nbsp;Pay.</span></span> <span id="prospa-pay-more-info"><a id="prospa-pay-modal-link" href="#prospa-pay-modal" style="text-decoration:underline; color:#38B973;font-family: \'Maison Demi\', sans-serif; ">Find&nbsp;out&nbsp;more</a></span></span>';
                
                
               
            } else if (isNaN(itemPrice)|| itemPrice == undefined || itemPrice == null || itemPrice == '' ) {                                
                prospaPayOffer = '<span id="prospa-pay-offer" style="font-size:14px; font-family: \'Maison Book\', sans-serif; color:#000"><span id="prospa-pay-offer-prefix">Pay in ' + prospaPayTerm + ' weekly instalments with Prospa&nbsp;Pay.</span> <span id="prospa-pay-more-info"><a id="prospa-pay-modal-link" href="#prospa-pay-modal" style="text-decoration:underline; color:#38B973;font-family: \'Maison Demi\', sans-serif; ">Find&nbsp;out&nbsp;more</a></span></span>';                
            } else if (itemPrice < minPrice || itemPrice > 20000 ){
                offerDisplayed = false;
                return;
            }
            
                      
            document.getElementById("prospa-pay").innerHTML = prospaPayOffer;
        
            document.getElementById("prospa-pay-offer").insertAdjacentHTML('beforeend','<br/><br/><a id="prospa-pay-modal-link" href="#prospa-pay-modal"><img src="https://partner-kit.prospa.com/assets/prospa-gift-card-offer.png" width="334px"/></a>');
        
        
            offerDisplayed = true;
            
            document.body.insertAdjacentHTML('beforeend','<div id="prospa-pay-modal" class="prospa-pay-overlay"><a id="prospa-pay-offer" class="prospa-pay-cancel" href="#" onclick="location.href=\'#\'"></a><div class="prospa-pay-modal"><div class="prospa-pay-content"><img src="https://partner-kit.prospa.com/assets/prospa-pay-how-it-works-promo.png" width="100%"></div></div></div>');
      
            document.getElementById("prospa-pay-modal-link").addEventListener("click", function () {broadcastSegmentEvent('ProspaPay Offer Viewed')});
                                            
                    
       document.getElementById("prospa-pay").insertAdjacentHTML('beforebegin', '<style type="text/css">\
                                                                                       #prospa-pay{padding-top:10px;padding-bottom:10px}.prospa-pay-overlay{position:absolute;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,.8);transition:opacity .2s;visibility:hidden;opacity:0}.prospa-pay-overlay .prospa-pay-cancel{position:absolute;width:100%;height:100%;cursor:default}.prospa-pay-overlay:target{visibility:visible;opacity:1}#prospa-pay-modal.prospa-pay-overlay{z-index:1000000}.prospa-pay-modal{margin:100px auto;background:#fff;width:100%;max-width:710px;border-radius:2px;box-shadow:0 0 50px rgba(0,0,0,.5);position:relative}.prospa-pay-modal .prospa-pay-content{max-height:539px;overflow:auto}@font-face{font-family:"Maison Bold";src:url(https://partner-kit.prospa.com/assets/fonts/MaisonNeue-Bold.woff2) format("woff2"),url(https://partner-kit.prospa.com/assets/fonts/MaisonNeue-Bold.woff) format("woff")}@font-face{font-family:"Maison Book";src:url(https://partner-kit.prospa.com/assets/fonts/MaisonNeue-Book.woff2) format("woff2"),url(https://partner-kit.prospa.com/assets/fonts/MaisonNeue-Book.woff) format("woff")}@font-face{font-family:"Maison Demi";src:url(https://partner-kit.prospa.com/assets/fonts/MaisonNeue-Demi.woff2) format("woff2"),url(https://partner-kit.prospa.com/assets/fonts/MaisonNeue-Demi.woff) format("woff")}\
                                                                                    </style>');
    }    
    
    
   
    function broadcastSegmentEvent(message) {
        analytics.track(message, {
            instalmentPrice: prospaPayWeeklyPrice,
            numberInstalments: prospaPayTerm,
            offerCopy: document.getElementById("prospa-pay").innerText,
            offerDisplayed: offerDisplayed,
            productName: document.getElementById('prospa-pay').getAttribute("productname"),
            productPrice: itemPrice,
            url: document.URL,
            store: document.getElementById('prospa-pay').getAttribute("store"),
            platform: document.getElementById('prospa-pay').getAttribute("platform"),
            step: step
        });
    }
        
     
    
    
  __construct();
    
    

})();