(function() {
  
    
    var prospaPayTerm = document.getElementById('prospa-pay').getAttribute("term") || 13;
    var serviceFee = prospaPayTerm * 2.95; // weekly service fee
    var establishmentFee = 19.95; //default for an item between $500 and $2,000
    var itemPrice = 0;
    var prospaPayWeeklyPrice = 0;
  
   
    !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t,e){var n=document.createElement("script");n.type="text/javascript";n.async=!0;n.src="https://cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a);analytics._loadOptions=e};analytics.SNIPPET_VERSION="4.1.0";
    analytics.load("UXoGCevr6fdRT3RDpt4OUAHOzNMZjoY8");
    analytics.page();
    }}();
    
   
    var script = document.createElement("script");
    script.src = "https://cdn.optimizely.com/js/10934491209.js";
    document.head.appendChild(script);
    
   
    
    function __construct() {
        document.addEventListener("DOMContentLoaded", function(event) {
            setPrice();
            calculatePrice();
            renderPrice();
        });
    }

  
    function setPrice(){     
       
        var platform = document.getElementById('prospa-pay').getAttribute("platform");    
        
        switch (platform){                
            case 'shopify':
                itemPrice = document.getElementById('prospa-pay').getAttribute("price") / 100;
                break;
                
            default:
                itemPrice = parseInt(document.getElementById(document.getElementById('prospa-pay').getAttribute("priceid")).innerHTML.replace(/[^0-9\.-]+/g,""));         
        }        
        
    }
    
    
    function calculatePrice() {    
            
        if (itemPrice > 2000 && itemPrice <= 20000) {
            establishmentFee = (Math.floor(itemPrice / 1000)*10) + 9.95;    
        } else if (itemPrice < 500 || itemPrice > 20000) {
            return;
        }
        
        prospaPayWeeklyPrice = ((itemPrice + establishmentFee + serviceFee)/prospaPayTerm).toFixed(2);  
 
    }
    
    
    function renderPrice() {
        
        document.body.insertAdjacentHTML('beforebegin','<div id="prospa-pay-modal" class="prospa-pay-overlay"><a class="prospa-pay-cancel" href="#"></a><div class="prospa-pay-modal"><div class="prospa-pay-content"><img src="https://partner-kit.prospa.com/prospapay-moreinfo.png" width="100%"></div></div></div>');
        
        document.getElementById("prospa-pay").innerHTML = 'Or pay <span class="prospa-pay-tooltip-toggle" aria-label="' + 'Includes an establishment fee $' + establishmentFee + ' and a service fee $' + serviceFee  +'." tabindex="0" style="border-bottom: 1px dashed #333">$' + prospaPayWeeklyPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</span> per week over ' + prospaPayTerm + ' weeks, no interest with Prospa Pay. <a href="#prospa-pay-modal" style="color:#333">How does it work?</a>';
        
        var prospaPayStyle = document.createElement("style");
        prospaPayStyle.src = "https://cdn.optimizely.com/js/10934491209.css";
        document.head.appendChild(prospaPayStyle);
        
        document.getElementById("prospa-pay").insertAdjacentHTML('beforebegin', '<style type="text/css">\
                                                                                    .prospa-pay-overlay{position:absolute;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,0.8);transition:opacity 200ms;visibility:hidden;opacity:0}.prospa-pay-overlay .prospa-pay-cancel{position:absolute;width:100%;height:100%;cursor:default}.prospa-pay-overlay:target{visibility:visible;opacity:1}.prospa-pay-modal{margin:100px auto;padding:2px;background:#fff;width:100%;max-width:709px;border-radius:2px;box-shadow:0 0 50px rgba(0,0,0,0.5);position:relative}.prospa-pay-modal .prospa-pay-content{max-height:467px;overflow:auto}.prospa-pay-tooltip-toggle{cursor:pointer;position:relative;white-space:pre-wrap}.prospa-pay-tooltip-toggle svg{height:18px;width:18px}.prospa-pay-tooltip-toggle::before{position:absolute;top:-80px;left:-80px;background-color:#2b222a;border-radius:5px;color:#fff;content:attr(aria-label);padding:1rem;text-transform:none;transition:all .5s ease;width:160px}.prospa-pay-tooltip-toggle::after{position:absolute;top:-12px;left:9px;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid #2b222a;content:" ";font-size:0;line-height:0;margin-left:-5px;width:0}.prospa-pay-tooltip-toggle::before,.prospa-pay-tooltip-toggle::after{color:#fff;font-family:monospace;font-size:16px;opacity:0;pointer-events:none;text-align:center}.prospa-pay-tooltip-toggle:focus::before,.prospa-pay-tooltip-toggle:focus::after,.prospa-pay-tooltip-toggle:hover::before,.prospa-pay-tooltip-toggle:hover::after{opacity:1;transition:all .75s ease} \
                                                                                </style>');                                       
                                                                                     
 
    
    
    
    }
 
  __construct();

})();