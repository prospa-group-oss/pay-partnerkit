!function(){var e=document.getElementById("prospa-pay").getAttribute("term")||13,t=2.95*e,a=19.95,o=void 0,n=void 0,r=Number(document.getElementById("prospa-pay").getAttribute("minprice"))||1e3,p="",i=!1;!function(){var e=window.analytics=window.analytics||[];if(!e.initialize)if(e.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{e.invoked=!0,e.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"],e.factory=function(t){return function(){var a=Array.prototype.slice.call(arguments);return a.unshift(t),e.push(a),e}};for(var t=0;t<e.methods.length;t++){var a=e.methods[t];e[a]=e.factory(a)}e.load=function(t,a){var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src="https://cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(o,n),e._loadOptions=a},e.SNIPPET_VERSION="4.1.0",e.load("u5j2Ccd2Do623Vd7FP5m5BdZNHS5bNIS"),e.page()}}();var s=document.createElement("script");function d(){for(var e=document.querySelectorAll('button[type="button"],button[type="submit"]'),t=0;t<e.length;t++)if(-1!==e[t].innerText.search(/add to cart/i)){e[t].addEventListener("click",function(){c("Added To Cart")});break}}function c(t){analytics.track(t,{instalmentPrice:n,numberInstalments:e,offerCopy:document.getElementById("prospa-pay").innerText,offerDisplayed:i,productName:document.getElementById("prospa-pay").getAttribute("productname"),productPrice:o,url:document.URL,store:document.getElementById("prospa-pay").getAttribute("store"),platform:document.getElementById("prospa-pay").getAttribute("platform")})}s.src="https://cdn.optimizely.com/js/10931930792.js",document.head.appendChild(s),d(),function(){switch(document.getElementById("prospa-pay").getAttribute("platform")){case"shopify":o=document.getElementById("prospa-pay").getAttribute("price")/100;break;case"woocommerce":case"neto":o=document.getElementById("prospa-pay").getAttribute("price")}}(),function(){if(o>=r&&o<=2e4)o>2e3&&(a=10*Math.floor(o/1e3)+9.95),n=((Number(o)+a+t)/e).toFixed(2),p="or $"+n.replace(/\B(?=(\d{3})+(?!\d))/g,",")+' a&nbsp;week over 13 weeks. <span><a href="#prospa-pay-modal" id="prospa-pay-modal-link" style="text-decoration:none; color:#0AC775">ProspaPay&nbsp;for&nbsp;business.</a></span>';else if(isNaN(o)||null==o||null==o||""==o)p='Pay in 13 weekly instalments. <span><a href="#prospa-pay-modal" id="prospa-pay-modal-link" style="text-decoration:none; color:#0AC775">ProspaPay&nbsp;for&nbsp;business.</a></span>';else if(o<r||o>2e4)return;document.getElementById("prospa-pay").innerHTML=p,i=!0,document.body.insertAdjacentHTML("beforeend",'<div id="prospa-pay-modal" class="prospa-pay-overlay"><a id="prospa-pay-offer" class="prospa-pay-cancel" href="#" onclick="location.href=\'#\'"></a><div class="prospa-pay-modal"><div class="prospa-pay-content"><img src="https://partner-kit.prospa.com/assets/prospa-pay-how-it-works.png" width="100%"></div></div></div>'),document.getElementById("prospa-pay-modal-link").addEventListener("click",function(){c("ProspaPay Offer Viewed")}),document.getElementById("prospa-pay").insertAdjacentHTML("beforebegin",'<style type="text/css">                                                                                       #prospa-pay{padding-top:10px;padding-bottom:10px}.prospa-pay-overlay{position:absolute;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,.8);transition:opacity .2s;visibility:hidden;opacity:0}.prospa-pay-overlay .prospa-pay-cancel{position:absolute;width:100%;height:100%;cursor:default}.prospa-pay-overlay:target{visibility:visible;opacity:1}#prospa-pay-modal.prospa-pay-overlay{z-index:1000000}.prospa-pay-modal{margin:100px auto;background:#fff;width:100%;max-width:710px;border-radius:2px;box-shadow:0 0 50px rgba(0,0,0,.5);position:relative}.prospa-pay-modal .prospa-pay-content{max-height:490px;overflow:auto}                                                                                    </style>')}(),document.addEventListener("DOMContentLoaded",function(e){d(),c("Product Viewed")})}();