const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");const o=new class{startChangeBGcolor(){this.isActive||(t.disabled=!0,e.disabled=!1,this.isActive=!0,this.intervalID=setInterval((()=>{return t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`,void(document.body.style.backgroundColor=t);var t}),1e3))}stopChangeBGcolor(){t.disabled=!1,e.disabled=!0,clearInterval(this.intervalID),this.isActive=!1}constructor(t){this.intervalID=null,this.isActive=!1,this.updateBodyBGcolor=t,e.disabled=!0}};t.addEventListener("click",(()=>o.startChangeBGcolor())),e.addEventListener("click",(()=>o.stopChangeBGcolor()));
//# sourceMappingURL=01-color-switcher.ea7511f9.js.map
