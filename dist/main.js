(()=>{"use strict";var e={683:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(81),r=n.n(a),o=n(645),i=n.n(o),s=n(667),c=n.n(s),d=new URL(n(123),n.b),p=new URL(n(465),n.b),l=i()(r()),u=c()(d),m=c()(p);l.push([e.id,'html{height:100vh;background-image:linear-gradient(243.18deg, #5cebd1 0%, #1a2b2c 100%);font-family:"Roboto",sans-serif;color:#fff}.city{height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;font-size:2em}.city input{border-radius:15px;padding:15px;margin:40px 0;font-size:.8em}.city button{font-size:.8em;padding:10px 30px;border-radius:15px}.loader{height:100vh;display:flex;justify-content:center;align-content:center}.loader span{margin-top:48vh}.container{display:flex;flex-flow:row nowrap;justify-content:space-around;overflow:hidden}.container .otherData{display:flex;flex-direction:row wrap;justify-content:space-around;margin:0 20px}.container .otherData span{margin-left:50px}.container .otherData span:nth-child(n+1){position:relative}.container .otherData span:nth-child(n+1):before{content:" ";width:46.6666666667px;height:35px;background-image:url('+u+');background-size:cover;position:absolute;left:-45px}.container .otherData span:nth-child(1):before{background-position:-46.6666666667px}.container .otherData span:nth-child(2):before{background-position:-93.3333333333px}.container .otherData span:nth-child(3):before{background-position:-140px}.container .otherData span:nth-child(4):before{background-position:-186.6666666667px}.container .otherData span:before{top:-10px}.cityLabel{margin:10px 0 15px}.cityLabel input{border-radius:5px;padding:3px}.time{display:flex;flex-direction:column;align-items:center;font-size:1.1em}.time>*{margin-top:10px}.currentTemp{font-size:1.1em;display:flex;flex-flow:column wrap;justify-content:flex-start;align-items:center}.currentTemp .cityLocationInfo{display:flex;flex-flow:column nowrap;justify-content:space-around;align-items:center}.currentTemp .cityLocationInfo span{margin-top:5px}.currentTemp .sky{display:flex;flex-flow:column nowrap;align-items:center;font-size:1.8em}.currentTemp .sky img{width:150px;height:150px;margin-top:-30px}.currentTemp .tempWrapper{display:flex;margin:20px 0}.currentTemp .tempWrapper .temperatures{margin:0 30px;display:flex;flex-flow:column wrap;align-items:flex-end}.currentTemp .tempWrapper .temperatures span{margin-top:5px}.currentTemp .tempWrapper .temperatures .current{font-size:6em}.currentTemp .tempWrapper .measure{font-size:8em;position:relative}.currentTemp .tempWrapper .measure sup{font-size:.3em;position:absolute;left:-20px}.currentTemp .sun{display:flex;flex-direction:row;justify-content:center}.currentTemp .sun .sunrise,.currentTemp .sun .sunset{display:flex;flex-direction:column;align-items:center;margin:40px;padding:20px;font-size:1.8em;border-radius:30px}.currentTemp .sun .sunrise{color:#ff0;border:1px solid #ffffe0}.currentTemp .sun .sunset{color:#00008b;border:2px solid #00008b}.forecasts{display:flex;flex-flow:column nowrap;justify-content:center;align-items:space-between;margin-top:-50px}.forecasts .nextBtn,.forecasts .prevBtn{background-color:rgba(0,0,0,0);width:50px;height:50px;border-radius:50%;border:none}.forecasts .nextBtn:active,.forecasts .prevBtn:active{border-left:4px solid #ff0;border-bottom:4px solid #ff0}.forecasts .nextBtn:before,.forecasts .prevBtn:before{content:" ";width:20px;height:20px;display:inline-block;border-left:4px solid #00008b;border-bottom:4px solid #00008b;border-radius:0 0 0 4px;margin-top:5px}.forecasts .nextBtn{transform:rotate(225deg)}.forecasts .prevBtn{transform:rotate(45deg)}.hourly{margin-top:30px}.hourly .card{display:flex;flex-flow:column nowrap;padding:15px 0;margin:10px;background-color:rgba(17,255,0,.05);border-radius:10px;box-shadow:3px -2px 14px -1px rgba(100,100,0,.4);width:150px}.hourly .card img{width:50px;height:50px;margin:0 auto}.hourly .card span,.hourly .card time{text-align:center;margin:5px 0}.hourly .card span:nth-child(n+4){position:relative}.hourly .card span:nth-child(n+4):before{content:" ";width:33.3333333333px;height:25px;background-image:url('+u+');background-size:cover;position:absolute;left:5px}.hourly .card span:nth-child(4):before{background-position:0px}.hourly .card span:nth-child(5):before{background-position:-33.3333333333px}.hourly .card span:nth-child(6):before{background-position:-66.6666666667px}.hourly .card span:nth-child(7):before{background-position:-100px}.hourly .card span:nth-child(8):before{background-position:-133.3333333333px}.daily{margin-top:100px}.daily .card{width:235px;padding:15px 0}.daily .card .sun{display:flex;flex-flow:row nowrap;justify-content:space-around;margin:30px 15px 10px}.daily .card .sun time{font-size:1.3em}.daily .card .sun time:nth-child(n+1){position:relative}.daily .card .sun time:nth-child(n+1):before{content:" ";width:53.3333333333px;height:40px;background-image:url('+u+');background-size:cover;position:absolute;left:0px}.daily .card .sun time:nth-child(1):before{background-position:-320px}.daily .card .sun time:nth-child(2):before{background-position:-373.3333333333px}.daily .card .sun time:nth-child(3):before{background-position:-426.6666666667px}.daily .card .sun time:nth-child(4):before{background-position:-480px}.daily .card .sun time:nth-child(5):before{background-position:-533.3333333333px}.daily .card .sun time:nth-child(6):before{background-position:-586.6666666667px}.daily .card .sun time:nth-child(7):before{background-position:-640px}.daily .card .sun time:nth-child(8):before{background-position:-693.3333333333px}.daily .card .sun time:before{top:-35px}.daily .card .predict{display:flex;flex-flow:row wrap;justify-content:space-around;padding-top:20px}.daily .card .predict span{margin:0 10px}.daily .card .predict span:nth-child(n+1){position:relative}.daily .card .predict span:nth-child(n+1):before{content:" ";width:30px;height:30px;background-image:url('+m+');background-size:cover;position:absolute;left:-5px}.daily .card .predict span:nth-child(1):before{background-position:0px}.daily .card .predict span:nth-child(2):before{background-position:-30px}.daily .card .predict span:nth-child(3):before{background-position:-60px}.daily .card .predict span:nth-child(4):before{background-position:-90px}.daily .card .predict span:before{top:-30px}.daily .card .other{display:flex;flex-flow:row wrap;justify-content:flex-end;margin:20px 20px 10px}.daily .card .other span{margin:10px 10px;min-width:65px;text-align:left;font-size:.8em}.daily .card .other span:nth-child(n+1){position:relative}.daily .card .other span:nth-child(n+1):before{content:" ";width:33.3333333333px;height:25px;background-image:url('+u+");background-size:cover;position:absolute;left:-34px}.daily .card .other span:nth-child(1):before{background-position:-33.3333333333px}.daily .card .other span:nth-child(2):before{background-position:-66.6666666667px}.daily .card .other span:nth-child(3):before{background-position:-100px}.daily .card .other span:nth-child(4):before{background-position:-133.3333333333px}.daily .card .other span:nth-child(5):before{background-position:-166.6666666667px}.daily .card .other span:nth-child(6):before{background-position:-200px}.daily .card .other span:before{top:-5px}.dispRow{display:flex;flex-flow:row nowrap;justify-content:center;align-items:center}.cards{display:flex;flex-flow:row nowrap}.card{display:flex;flex-flow:column nowrap;margin:10px;background-color:rgba(17,255,0,.05);border-radius:10px;box-shadow:3px -2px 14px -1px rgba(100,100,0,.4)}.card img{width:50px;height:50px;margin:0 auto}.card span,.card time{text-align:center;margin:5px 0}.citiesList .title{font-size:2em;color:#000;background-color:#fff;border-radius:10px;position:fixed;top:30%;left:50%;transform:translate(-50%, -67%)}.citiesList .list{position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);background-color:#fff;border:1px solid #000;border-radius:20px;width:600px;height:250px;padding:15px;display:flex;flex-flow:column nowrap;justify-content:space-around}.citiesList li{color:#000;list-style-type:none;display:flex;flex-flow:row nowrap;justify-content:space-around}.citiesList li:hover{outline:1px green solid;border-radius:5px}.citiesList span:first-child{width:300px;cursor:pointer}.citiesList span:last-child{width:250px}.citiesList .cancel{position:absolute;bottom:-20%;right:40%;transform:translate(-60%, -80%)}.citiesList .backLayer{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5)}.error{position:absolute;bottom:10px;left:10px;padding:5px 10px;border:1px red solid;border-radius:5px;color:red;font-size:1.5em}",""]);const g=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var p=[].concat(e[d]);a&&i[p[0]]||(void 0!==o&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=o),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),t.push(p))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var o={},i=[],s=0;s<e.length;s++){var c=e[s],d=a.base?c[0]+a.base:c[0],p=o[d]||0,l="".concat(d," ").concat(p);o[d]=p+1;var u=n(l),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var g=r(m,a);a.byIndex=s,t.splice(s,0,{identifier:l,updater:g,references:1})}i.push(l)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var o=a(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=n(o[i]);t[s].references--}for(var c=a(e,r),d=0;d<o.length;d++){var p=n(o[d]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}o=c}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,r&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},465:(e,t,n)=>{e.exports=n.p+"909ee75399b905f4fc18.png"},123:(e,t,n)=>{e.exports=n.p+"8e37de35f87f37d7eb16.png"}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={id:a,exports:{}};return e[a](o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{const e="https://api.openweathermap.org/geo/1.0",t=async t=>{const n=await fetch(`${e}/reverse?lat=${t.lat}&lon=${t.lon}&appid=8ae3e8d71bc8cb9bbb60a87ec6790462`,{mode:"cors"}),a=await n.json(),r=await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${t.lat}&lon=${t.lon}&exclude=minutely&appid=8ae3e8d71bc8cb9bbb60a87ec6790462`,{mode:"cors"}),o=await r.json(),i={};[i.common]=a,i.forecast=o;const s=o.current.weather[0];i.forecast.current.weather[0].icon=`http://openweathermap.org/img/wn/${s.icon}@2x.png`;const c=e=>{e.forEach((e=>{e.weather[0].icon=`http://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`}))};return c(i.forecast.hourly),c(i.forecast.daily),i},a=()=>({assemble:e=>(...t)=>[...t].reduce(((e,t)=>t(e)),e),node(e){if(0===Object.keys(e).length)return"";const t=structuredClone(e),{tag:n}=t,r=document.createElement(n);Object.entries(t).forEach((e=>{const[t,n]=e;"tag"===t&&"c"===t&&"s"===t||(r[t]=n),t.includes("data-")&&r.setAttribute(t,n),"required"===t&&"false"===n&&r.removeAttribute(t)}));const o=structuredClone(e);if(o.c){const{c:e}=o;Object.values(e).forEach((e=>{r.append(a().node(e))}))}return r},render(e,...t){e.append(...t)}}),r=a;var o=n(379),i=n.n(o),s=n(795),c=n.n(s),d=n(569),p=n.n(d),l=n(565),u=n.n(l),m=n(216),g=n.n(m),f=n(589),h=n.n(f),x=n(683),y={};y.styleTagTransform=h(),y.setAttributes=u(),y.insert=p().bind(null,"head"),y.domAPI=c(),y.insertStyleElement=g(),i()(x.Z,y),x.Z&&x.Z.locals&&x.Z.locals;const b=()=>{const e=r(),t=e=>Math.round(e+-273.16),n=(e,t)=>`0${e[t]()}`.slice(-2),a=(e,t)=>{const a=new Date(1e3*e);let r="";return t.includes("d")&&(r+=`${n(a,"getDate")}`),t.includes("w")&&(r+=` ${["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][a.getDay()]}`),t.includes("wh")&&(r+=" "),t.includes("h")&&(r+=`${n(a,"getHours")}`),t.includes("m")&&(r+=` : ${n(a,"getMinutes")}`),t.includes("s")&&(r+=` : ${n(a,"getSeconds")}`),r},o=()=>{const e=new Date;return`\n      ${e.getDate()} \n      ${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()]} \n      ${e.getFullYear()}\n      `},i=()=>{const e=new Date;return`\n      ${["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()]} \n      ${n(e,"getHours")} : \n      ${n(e,"getMinutes")}\n      `};return{forecastPage(n){const{current:r}=n.forecast,s={tag:"div",className:"container",c:{current:{tag:"div",className:"currentTemp",c:{cityLabel:{tag:"label",className:"cityLabel",c:{cityInput:{tag:"input",type:"text",className:"cityInput",id:"cityInput"},submitBtn:{tag:"button",id:"submitBtn",textContent:"Ok"}}},cityData:{tag:"div",className:"cityLocationInfo",c:{name:{tag:"span",textContent:`${n.common.name}`},state:{tag:"span",textContent:`${n.common.state}`},country:{tag:"span",textContent:`${n.common.country}`}}},currentDate:{tag:"div",className:"time",c:{date:{tag:"time",className:"date",id:"date",textContent:o()},time:{tag:"time",className:"time",id:"time",textContent:i()}}},skyWrapper:{tag:"div",className:"sky",c:{skyImg:{tag:"img",id:"skyImg",src:r.weather[0].icon},sky:{tag:"span",id:"sky",textContent:`${r.weather[0].description}`}}},tempWrapper:{tag:"div",className:"tempWrapper",c:{temperatures:{tag:"div",className:"temperatures",c:{current:{tag:"span",className:"current",id:"current",textContent:t(r.temp)},feelsLike:{tag:"span",id:"feelsLike",textContent:`feels like: ${t(r.feels_like)}`}}},measure:{tag:"span",className:"measure",innerHTML:"<sup>0</sup>C"}}},otherData:{tag:"div",className:"otherData",c:{pressure:{tag:"span",id:"pressure",textContent:`${r.pressure} hPa`},humidity:{tag:"span",id:"humidity",textContent:`${r.humidity} %`},windSpeed:{tag:"span",id:"windSpeed",textContent:`${r.wind_speed} m/s`},deg:{tag:"span",id:"deg",textContent:`${r.wind_deg} deg.`}}},sun:{tag:"div",className:"sun",c:{sunrise:{tag:"div",className:"sunrise",c:{name:{tag:"h4",textContent:"Sunrise"},time:{tag:"time",id:"sunrise",textContent:a(r.sunrise,"hm")}}},sunset:{tag:"div",className:"sunset",c:{name:{tag:"h4",textContent:"Sunset"},time:{tag:"time",id:"sunset",textContent:a(r.sunset,"hm")}}}}}}},forecasts:{tag:"div",className:"forecasts",c:{}}}};return n.common.state||delete s.c.current.c.cityData.c.state,s.c.forecasts.c.hourly=(e=>{const n={tag:"div",className:"hourly dispRow",c:{previous:{tag:"button",id:"hourlyPrev",className:"prevBtn"},wrapper:{tag:"div",className:"cards",id:"hourlyCards",c:{}},next:{tag:"button",id:"hourlyNext",className:"nextBtn"}}},{forecast:r}=e;return r.hourly.forEach(((e,r)=>{const o={tag:"div",className:"card",c:{hour:{tag:"time",textContent:a(e.dt,"whm")},icon:{tag:"img",src:e.weather[0].icon,icon:e.weather[0].description},descr:{tag:"span",textContent:e.weather[0].main},temperature:{tag:"span",innerHTML:`${t(e.temp)} <sup>0</sup>C,`},pressure:{tag:"span",textContent:`${e.pressure} hPa`},humidity:{tag:"span",textContent:`${e.humidity} %`},windSpeed:{tag:"span",textContent:`${e.wind_speed} m/s`},deg:{tag:"span",textContent:`${e.wind_deg} deg.`}}};n.c.wrapper.c[`h${r+1}`]=o})),n})(n),s.c.forecasts.c.daily=(e=>{const n={tag:"div",className:"daily dispRow",c:{previous:{tag:"button",id:"dailyPrev",className:"prevBtn"},wrapper:{tag:"div",className:"cards",id:"dailyCards",c:{}},next:{tag:"button",id:"dailyNext",className:"nextBtn"}}},{forecast:r}=e;return r.daily.forEach(((e,r)=>{const o="<sup>0</sup>",i={tag:"div",className:"card",c:{date:{tag:"time",textContent:a(e.dt,"dw")},icon:{tag:"img",src:e.weather[0].icon,alt:e.weather[0].description},descr:{tag:"span",textContent:e.weather[0].description},sun:{tag:"div",className:"sun",c:{sunrise:{tag:"time",textContent:a(e.sunrise,"hm")},sunset:{tag:"time",textContent:a(e.sunset,"hm")}}},temperatures:{tag:"div",className:"predict",c:{morning:{tag:"span",innerHTML:`${t(e.temp.morn)} ${o}`},day:{tag:"span",innerHTML:`${t(e.temp.day)} ${o}`},evening:{tag:"span",innerHTML:`${t(e.temp.eve)} ${o}`},night:{tag:"span",innerHTML:`${t(e.temp.night)} ${o}`}}},otherData:{tag:"div",className:"other",c:{pressure:{tag:"span",textContent:`${e.pressure} hPa`},humidity:{tag:"span",textContent:`${e.humidity} %`},windSpeed:{tag:"span",textContent:`${e.wind_speed} m/s`},deg:{tag:"span",textContent:`${e.wind_deg} deg.`},uvi:{tag:"span",textContent:e.uvi}}}}};n.c.wrapper.c[`d${r+1}`]=i})),n})(n),e.node(s)},manualInput:()=>e.node({tag:"label",className:"city",c:{title:{tag:"span",textContent:"Please, enter a city name"},cityInput:{tag:"input",type:"text",className:"cityInput",id:"cityInput"},submitBtn:{tag:"button",id:"submitBtn",textContent:"Ok"}}}),citiesList(t){const n={tag:"div",className:"citiesList",c:{title:{tag:"h3",className:"title",textContent:"Please choose one of the cities from the list."},backLayer:{tag:"div",className:"backLayer"},ul:{tag:"ul",className:"list",c:{}}}};return t.forEach(((e,t)=>{const a=e.state?`${e.state}, `:"",r={tag:"li",c:{city:{tag:"span",className:"cities",textContent:`${e.name}, ${a}${e.country}`},coords:{tag:"span",textContent:"coords: ",c:{link:{tag:"a",textContent:`${e.lat}, ${e.lon}`,href:`https://www.google.com/maps?q=${e.lat},+${e.lon}`,target:"_blank"}}}}};n.c.ul.c[t]=r})),n.c.ul.c.cancelBtn={tag:"li",className:"cancel",c:{cancel:{tag:"button",className:"button",id:"cancel",textContent:"Cancel"}}},e.node(n)},errorMessage(t){const n={tag:"span",className:"error",textContent:t};return e.node(n)}}},v=()=>({slider(e,t){const{offset:n}=t,a=e.querySelector(`#${t.shell}`),r=e.querySelectorAll(`#${t.shell}>.${t.card}`),o=r,i=e.querySelector(`#${t.prev}`),s=e.querySelector(`#${t.next}`);r.forEach((e=>e.remove()));let c=0;const d=(e,t=!1)=>{let[r,i]=[0,0];if(t?([r,i]=[e,e-n],c-=n):([r,i]=[e,e+n],c+=n),i<r&&([r,i]=[e-n,e]),r<n&&([r,i,c]=[0,0+n,0+n]),r+n>=o.length){const{length:e}=o;let t=e-e%n;t===e&&(t=e-n),[c,r,i]=[t,t,e]}a.replaceChildren();for(let e=r;e<i;e+=1)a.append(o[e])};return d(c),s.addEventListener("click",(()=>{d(c)})),i.addEventListener("click",(()=>{d(c,!0)})),e},cityInput(e,t,n){const a=e.querySelector(`#${n.inp}`),r=()=>{n.removePrev&&e.remove();const r=document.querySelector(".citiesList");return r&&r.remove(),t(a.value)};return a.addEventListener("keydown",(e=>{"Enter"===e.key&&r()})),n.btn&&e.querySelector(`#${n.btn}`).addEventListener("click",r),e},citiesList(e,t,n){const a=()=>{const t=document.querySelector("#cityInput");t&&(t.value=""),e.remove()};e.querySelectorAll(".cities").forEach(((e,r)=>{e.addEventListener("click",(()=>{n(t[r]),a()}))}));const r=e.querySelector(".backLayer"),o=e.querySelector("#cancel");return r.addEventListener("click",a),o.addEventListener("click",a),document.addEventListener("keydown",(e=>{"Escape"===e.key&&a()}),{once:!0}),e}});(()=>{const n=r(),a=(...e)=>{[...e].forEach((e=>{const t=document.querySelector(e);t&&t.remove()}))},o=()=>({add(e="Loading..."){const t={tag:"div",className:"loader",c:{phrase:{tag:"span",textContent:e}}};n.render(document.body,n.node(t))},remove(){const e=document.querySelector(".loader");e&&e.remove()}}),i=e=>{const t=b().errorMessage(e);n.render(document.body,t),setTimeout((()=>{t.remove()}),5e3)},s=e=>{o().remove();const t=b().forecastPage(e),a=v();n.render(document.body,n.assemble(t)((e=>a.slider(e,{offset:6,shell:"hourlyCards",card:"card",prev:"hourlyPrev",next:"hourlyNext"})),(e=>a.slider(e,{offset:4,shell:"dailyCards",card:"card",prev:"dailyPrev",next:"dailyNext"})),(e=>a.cityInput(e,c,{inp:"cityInput",btn:"submitBtn"}))))},c=async r=>{o().remove();const c=await(async t=>{const n=await fetch(`${e}/direct?q=${t}&limit=10&appid=8ae3e8d71bc8cb9bbb60a87ec6790462`,{mode:"cors"});return await n.json()})(r);if(0===c.length)i("No such city found. Please, check the name.");else if(1===c.length){const e=await t(c[0]);a(".city",".container"),s(e)}else(e=>{const r=b().citiesList(e),i=v();n.render(document.body,i.citiesList(r,e,(async e=>{const n=await t(e);a(".city",".container"),o().add(),s(n)})))})(c)},d=async e=>{o().remove(),o().add();const n={lon:e.coords.longitude,lat:e.coords.latitude},a=await t(n);s(a)},p=e=>{o().remove(),i(e.message);const t=b().manualInput(),a=v();n.render(document.body,a.cityInput(t,c,{inp:"cityInput",btn:"submitBtn"}))};return{start(){o().add("Retreiving location. Please, allow it in your browser settings"),navigator.geolocation.getCurrentPosition(d,p)}}})().start()})()})();