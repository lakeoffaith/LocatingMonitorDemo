﻿var _empty=function(){};var ua=navigator.userAgent.toLowerCase();var browser={safari:/webkit/.test(ua),opera:/opera/.test(ua),msie:/msie/.test(ua)&&!/opera/.test(ua),mozilla:/mozilla/.test(ua)&&!/(compatible|webkit)/.test(ua)};

//var baseURL=(
//function(){
//var a=document.getElementsByTagName("script");
//return a[a.length-1].src.replace(/^(http:\/\/[^\/]+)?(.*?)(\/)?(scripts\/)?[^\/]+$/i,"$2")
//})();
//alert(baseURL);
var loadCss=function(a){var b=document.createElement("link");b.type="text/css";b.rel="stylesheet";b.href=a;document.getElementsByTagName("head")[0].appendChild(b)};

var loadScript=function(a){var b=document.createElement("script");b.type="text/javascript";b.src=a;document.getElementsByTagName("head")[0].appendChild(b)};
String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")};String.prototype.countBytes=function(){var n=0;for(i=0;i<this.length;i++){n+=this.charCodeAt(i)<255?1:2}return n};String.prototype.startsWith=function(a){return this.substr(0,a.length)==a};String.prototype.endsWith=function(a){return this.substr(this.length-a.length)==a};String.prototype.hasSymbol=function(){var a="~`!@#$%^&*-+=|\\/?,.:;'\"()<>[]{}";for(var i=0;i<a.length;i++){if(this.indexOf(a.charAt(i))!=-1)return true}return false};String.prototype.hasSpace=function(){var a=" ??	";for(var i=0;i<a.length;i++){if(this.indexOf(a.charAt(i))!=-1)return true}return false};String.prototype.inArray=function(a){for(var i=0;i<a.length;i++){if(this==a[i])return true}return false};String.prototype.lowerCaseEquals=function(a){return this.toLowerCase()==a};String.prototype.upperCaseEquals=function(a){return this.toUpperCase()==a};String.prototype.ignoreCaseEquals=function(a){return this.toUpperCase()==a.toUpperCase()};String.prototype.textEncode=function(){var a=this.replace(/&/g,"&amp;");a=a.replace(/</g,"&lt;");a=a.replace(/>/g,"&gt;");return a};String.prototype.textDecode=function(){var a=this.replace(/&lt;/gi,"<");a=a.replace(/&gt;/gi,">");a=a.replace(/&amp;/gi,"&");return a};String.prototype.htmlEncode=function(){var a=this.replace(/&/g,"&amp;");a=a.replace(/</g,"&lt;");a=a.replace(/>/g,"&gt;");a=a.replace(/(?:\t| |\v|\r)*\n/g,"<br />");a=a.replace(/  /g,"&nbsp; ");a=a.replace(/\t/g,"&nbsp; &nbsp; ");a=a.replace(/\x22/g,"&quot;");a=a.replace(/\x27/g,"&#39;");return a};String.prototype.htmlDecode=function(){var a=this.replace(/&nbsp;/gi," ");a=a.replace(/&quot;/gi,"\"");a=a.replace(/&#39;/g,"'");a=a.replace(/&lt;/gi,"<");a=a.replace(/&gt;/gi,">");a=a.replace(/&amp;/gi,"&");a=a.replace(/<br[^>]*>(?:(\r\n)|\r|\n)?/gi,"\r\n");return a};String.prototype.urlEncode=function(){var a="";var x=0;var b=/(^[a-zA-Z0-9_.]*)/;while(x<this.length){var c=b.exec(this.substr(x));if(c!=null&&c.length>1&&c[1]!=""){a+=c[1];x+=c[1].length}else{if(this[x]==" "){a+="+"}else{var d=this.charCodeAt(x);var e=d.toString(16);a+="%"+(e.length<2?"0":"")+e.toUpperCase()}x++}}return a};
function getCookie(a){if(document.cookie&&document.cookie.length!=0){var b=document.cookie.indexOf(a+"=");if(b!=-1){b+=a.length+1;var end=document.cookie.indexOf(";",b);if(end==-1){end=document.cookie.length}return unescape(document.cookie.substring(b,end))}}return""};function setCookie(a,b,c){if(c==null){document.cookie=a+"="+escape(b)}else{var d=new Date();d.setTime(d.getTime()+c*1000);document.cookie=a+"="+escape(b)+"; expires="+d.toGMTString()}};
function addEvent(a,b,c){if(browser.msie)a.attachEvent("on"+b,c);else a.addEventListener(b,c,true)};function removeEvent(a,b,c){if(browser.msie)a.detachEvent("on"+b,c);else a.removeEventListener(b,c,true)};function stopEvent(e){if(browser.msie){e.cancelBubble=true;e.returnValue=false}else{e.preventDefault();e.stopPropagation()}};
/*
         id 与name 配置

*/


function $(a){
return typeof a!="string"?a:(document.getElementById(a)==null?document.getElementById(idPreString+a):document.getElementById(a))
};
function $$(a){return new Audi(a)};

function $create(a,b){var c=document.createElement(a);if(b!=null)b.appendChild(c);return c};function getDocumentElement(){return document.compatMode!="CSS1Compat"?document.body:document.documentElement};

function Audi(a){
this.element=typeof a!="string"?a:(document.getElementById(a)==null?document.getElementById(idPreString+a):document.getElementById(a))
};


Audi.prototype.append=function(a){var b=document.createElement(a);this.element.appendChild(b);return $$(b)};
Audi.prototype.insertBefore=function(a,b){var c=document.createElement(a);this.element.insertBefore(c,b);return $$(c)};
Audi.prototype.replaceWith=function(a){this.element.parentNode.replaceChild(a,this.element)};
Audi.prototype.placeTo=function(a){a.appendChild(this.element);return this};
Audi.prototype.removeChild=function(a){this.element.removeChild(a);return this};
Audi.prototype.remove=function(){this.element.parentNode.removeChild(this.element)};
Audi.prototype.clear=function(){this.element.innerHTML="";return this};
Audi.prototype.setContent=function(a){this.element.innerHTML=a;return this};
Audi.prototype.appendContent=function(a){this.element.innerHTML+=a;return this};
Audi.prototype.setAttribute=function(a,b){this.element[a]=b;return this};
Audi.prototype.removeAttribute=function(a){this.element[a]="";return this};
Audi.prototype.enable=function(){this.element["disabled"]=false;return this};
Audi.prototype.disable=function(){this.element["disabled"]="disabled";return this};
Audi.prototype.setClass=function(a){this.element.className=a;return this};
Audi.prototype.addClass=function(a){this.element.className=this.element.className?(this.element.className+" "+a):a;return this};
Audi.prototype.removeClass=function(a){if(!a){this.element.className=""}else{var b="";var c=this.element.className.split(" ");var d=c.length;for(var i=0;i<d;i++){if(c[i]!=a)b+=" "+b}this.element.className=b.trim()}return this};
Audi.prototype.setStyle=function(a,b){this.element.style[a]=b;return this};
Audi.prototype.setOpacity=function(a){if(browser.msie)this.element.style.filter=(a==100)?"":"alpha(opacity="+a+")";else this.element.style.opacity=(a==100)?"":"0."+a.toString()};Audi.prototype.display=function(){if(this.element.style.display=="none"){this.element.style.display=""}return this};Audi.prototype.hide=function(){this.element.style.display="none";return this};Audi.prototype.visible=function(){this.element.style.visibility="visible";return this};Audi.prototype.unvisible=function(){this.element.style.visibility="hidden";return this};Audi.prototype.floatLeft=function(){if(browser.msie)this.element.style.styleFloat="left";else this.element.style.cssFloat="left";return this};Audi.prototype.floatRight=function(){if(browser.msie)this.element.style.styleFloat="right";else this.element.style.cssFloat="right";return this};Audi.prototype.locate=function(a,b,c){this.element.style.left=parseInt(a)+"px";this.element.style.top=parseInt(b)+"px";if(c!=null)this.element.style.position=c;return this};Audi.prototype.locateCenter=function(){var _x=0;var _y=0;if(window.location!=top.location){_x=180;_y=80;}var a=(parseInt(window.screen.availWidth)-parseInt(this.element.offsetWidth))/2-_x;var b=getScrollPos().y+(parseInt(window.screen.availHeight)-parseInt(this.element.offsetHeight)-100)/2-_y;this.element.style.left=a+"px";this.element.style.top=b+"px";return this};Audi.prototype.bringFront=function(a){this.element.style.zIndex=a?a:65535;return this};Audi.prototype.focus=function(){this.element.focus()};Audi.prototype.blur=function(){this.element.blur()};Audi.prototype.addEvent=function(a,b){if(browser.msie)this.element.attachEvent("on"+a,b);else this.element.addEventListener(a,b,true);return this};Audi.prototype.removeEvent=function(a,b){if(browser.msie)this.element.detachEvent("on"+a,b);else this.element.removeEventListener(a,b,true);return this};Audi.prototype.showLoading=function(a){if(typeof showLoading=="function"){showLoading(a,this.element)}return this};Audi.prototype.showRemind=function(a,b){if(typeof showRemind=="function"){showRemind(a,b,this.element)}return this};
function getPos(a){var p={};if(a.getBoundingClientRect){var b=a.getBoundingClientRect();var c=getDocumentElement();p.x=b.left+c.scrollLeft-c.clientLeft;p.y=b.top+c.scrollTop-c.clientTop}else{p.x=a.offsetLeft;p.y=a.offsetTop;var d=a.offsetParent;while(d){p.x+=d.offsetLeft;p.y+=d.offsetTop;d=d.offsetParent}}return p};function getScrollPos(){var a=getDocumentElement();return{x:a.scrollLeft,y:a.scrollTop}};function mouseCoords(e){e=e||window.event;var a=this.getDocumentElement();if(e.pageX){return{x:e.pageX,y:e.pageY}}return{x:e.clientX+a.scrollLeft-a.clientLeft,y:e.clientY+a.scrollTop-a.clientTop}};
var Ferrari={};Ferrari._current=null;Ferrari._createCarrier=function(){var a=document.createElement("div");a.id="js_tooltip";a.style.position="absolute";a.style.zIndex="9999";a.style.maxWidth="320px";a.style.visibility="hidden";document.getElementsByTagName("body")[0].appendChild(a);return a};Ferrari.handler=function(e){e||(e=window.event);var a=e.target?e.target:e.srcElement;if(!a)return;if(typeof a.alt=="string"&&a.alt.length!=0){a._tip=a.alt;a.alt=""}if(typeof a.title=="string"&&a.title.length!=0){a._tip=a.title;a.title=""}if(Ferrari._current!=a._tip){Ferrari._current=a._tip;var b=document.getElementById("js_tooltip");if(b==null){b=Ferrari._createCarrier()}if(Ferrari._current==null||Ferrari._current==""){b.style.display="none";b.style.visibility="hidden"}else{b.innerHTML=Ferrari._current.replace(/\r\n/g,"<br />");b.style.display="";var c=getDocumentElement();var d=getScrollPos();var f={w:b.clientWidth,h:b.clientHeight};var g={x:e.clientX,y:e.clientY};var h={top:(g.y+12+f.h>c.clientHeight?-f.h-12:12),left:(g.x+12+f.w>c.clientWidth?-f.w-12:12)};b.style.top=g.y+d.y+h.top+"px";b.style.left=g.x+d.x+h.left+"px";b.style.visibility="visible"}}};addEvent(document,"mouseover",Ferrari.handler);
var Dropmenu={};Dropmenu.show=function(a,b){var c=getPos(a);var d=Dropmenu.menuDiv;if(d==null){d=document.createElement("div");d.id="js_dropmenu";document.getElementsByTagName("body")[0].appendChild(d);Dropmenu.menuDiv=d}d.style.left=c.x+"px";d.style.top=c.y+a.offsetHeight+3+"px";if(typeof b=="string"){if(b.length<25){d.innerHTML="";var f=document.getElementById(b).cloneNode(true);f.style.display="";d.appendChild(f)}else{d.innerHTML=b}}else{d.innerHTML="";var f=b.cloneNode(true);f.style.display="";d.appendChild(f)}d.style.display="block";Dropmenu.timer=setTimeout(function(){Dropmenu.hide()},2500);addEvent(d,"mouseover",function(e){clearTimeout(Dropmenu.timer);addEvent(document,"mousemove",Dropmenu.hide)})};Dropmenu.hide=function(e){if(typeof e!="undefined"){e||(e=window.event);var a=e.target?e.target:e.srcElement;while(a){if(a==Dropmenu.menuDiv){return}a=a.parentNode}}if(Dropmenu.menuDiv){Dropmenu.menuDiv.innerHTML="";Dropmenu.menuDiv.style.display="none"}removeEvent(document,"mousemove",Dropmenu.hide)};
var CheckboxUtil={};CheckboxUtil.checkAll=function(a,b){var f=a.form;var v=a.checked;var c=f.elements.length;for(var i=0;i<c;i++){var d=f.elements[i];if(d.type=="checkbox"&&!d.disabled&&(typeof b=="undefined"||d.name==b)){d.checked=v}}};CheckboxUtil.switchDisplay=function(a,b){$(b).style.display=a.checked?"":"none"};CheckboxUtil.switchVisibility=function(a,b){$(b).style.visibility=a.checked?"visible":"hidden"};CheckboxUtil.switchAccessibility=function(a,b){$(b).disabled=a.checked?false:"disabled"};var _submitted=false;function submitOnce(f){if(_submitted){return false}for(var i=0;i<f.elements.length;i++){var a=f.elements[i];var b=a.type.toLowerCase();if(a.tagName=="button"||b=="submit"||b=="button"||b=="reset"){_submitted=true;a.className=(a.className+" buttonDisabled").trim()}}return true};

function showLoading(a,b){
var c=$create("img",b);c.style.width="16px";c.style.height="16px";c.src=baseURL+"/images/loading.gif";c.align="absmiddle";c.style.marginRight="5px";
var d=$create("span",b);d.className="t3";d.innerHTML=(a?a:"Loading ...");

if(b==null){if(browser.msie){return c.outerHTML+d.outerHTML}var e=$create("span");e.appendChild(c);e.appendChild(d);return e.innerHTML}else if(b.style.display=="none"){b.style.display=""}return true};




function showRemind(a,b,c){if(typeof a=="string"){a=[a]}var d=(function(){if(b==1){return"Remind-Error"}else if(b==2){return"Remind-Warning"}return"Remind-Prompt"})();var e=$create("ul",c);e.className="remind";for(var i=0;i<a.length;i++){var f=$create("li",e);f.className=d;f.innerHTML=a[i]}if(!c){if(browser.msie){return e.outerHTML}var g=$create("span");g.appendChild(e);return g.innerHTML}return true};
var appPrefix=(function(){if(document.cookie.length==0||document.cookie.indexOf("Theme=")==-1)return"";var a=document.cookie.split("Theme=")[0];return a.substr(a.lastIndexOf(";")+1).trim()})();var theme=getCookie(appPrefix+"Theme");var themePath=baseURL+"/app_themes/"+(theme==null||theme==""?"default":theme);var themeRel=function(a){return a.replace(/\{\$ThemePath\}/gi,themePath)};var __collapse_cookie="CollapseView";function __switchCollapse(a,h,e){a=typeof a=="object"?a:$(a);var f=$(h);var b=h.replace(/^(\w+)_content$/i,"$1");var g="";var c=[];var i=false;if(document.cookie=="")e=false;if(e){g=getCookie(__collapse_cookie);if(g!=""){c=g.split(",");for(var d=0;d<c.length;d++){if(b==c[d]){i=true;break}}}}if(a.src.toLowerCase().indexOf("expanded")!=-1){a.src=a.src.replace(/expanded/i,"collapsed");f.style.display="none";if(e&&!i){c.push(b);setCookie(__collapse_cookie,c.join(","),86400)}}else{a.src=a.src.replace(/collapsed/i,"expanded");f.style.display="";if(e&&i){var j=[];for(var d=0;d<c.length;d++){if(b!=c[d])j.push(c[d])}setCookie(__collapse_cookie,j.join(","),86400)}}};function __switchTab(a){var h=a.parentNode;var e=h.parentNode.id;var f=h.getElementsByTagName("li");for(var b=0;b<f.length;b++){var g=document.getElementById(e+"_tab"+b);if(g){if(f[b]==a){f[b].className="selected";a.style.display="";g.style.display="";document.getElementById(e+"_selectedIndex").value=b}else{f[b].className="";g.style.display="none"}}}};