(function(){"use strict";var e={4648:function(e,t,n){var o=n(144),r=n(998),i=n(6232),a=n(3059),s=n(3687),l=function(){var e=this,t=e._self._c;return t(r.Z,[t(i.Z,{attrs:{app:"",color:"primary",dark:"",sticky:""}},[t("h1",[e._v(e._s(e.$data.string.helloString))]),t(s.Z),t("NewLink")],1),t("OpenLink"),t(a.Z,[t("router-view")],1),t("FooterComp")],1)},c=[],u=n(4562),d=n(9582),h=n(4886),p=n(8271),m=n(4324),f=n(6319),k=function(){var e=this,t=e._self._c;return t(p.Z,{attrs:{dark:"",padless:""}},[t(d.Z,{staticClass:"flex",attrs:{flat:"",tile:""}},[t(h.EB,{staticClass:"teal"},[t("strong",{staticClass:"subheading"},[e._v("Mamy nadzieje że spodobał ci sie nasz skracacz linków")]),t(s.Z),t(u.Z,{attrs:{elevation:"4",icon:"",title:"go to github"}},[t("a",{attrs:{href:e.links.github}},[t(m.Z,{attrs:{color:"#000000"}},[e._v(e._s(e.$data.icons.mdiGithub))])],1)]),t(f.Z,{attrs:{label:e.$vuetify.theme.dark?"Dark Theme":"Ligth theme"},on:{change:e.changeTheme},model:{value:e.$vuetify.theme.dark,callback:function(t){e.$set(e.$vuetify.theme,"dark",t)},expression:"$vuetify.theme.dark"}})],1),t(h.ZB,{staticClass:"py-2 white--text text-center"},[e._v(" "+e._s((new Date).getFullYear())+" — "),t("strong",[e._v("Shortened(aka pythontest)")])])],1)],1)},v=[],w=n(5317),g={name:"FooterComp",data:()=>({links:{github:"https://github.com/gpctf/shortened"},icons:{github:"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",mdiGithub:w.LcO,mdiSwapHorizontal:w.p$j}}),methods:{changeTheme(){localStorage.theme=this.$vuetify.theme.dark}}},b=g,y=n(1001),Z=(0,y.Z)(b,k,v,!1,null,null,null),_=Z.exports,z=n(1653),x=n(6718),j=n(3305),O=n(1280),C=function(){var e=this,t=e._self._c;return t(x.Z,{attrs:{persistent:"","max-width":"1300","overlay-opacity":"0.90","overlay-color":"#000000"},scopedSlots:e._u([{key:"activator",fn:function({on:n}){return[t(u.Z,e._g({attrs:{color:"secondary",elevation:"2"}},n),[e._v("Generate link")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(d.Z,{directives:[{name:"show",rawName:"v-show",value:!e.hidecomp,expression:"!hidecomp"}]},[t(h.EB,{staticClass:"text-h5"},[e._v(" Skróć Link ")]),t(h.ZB,[e._v("Poniżej wpisz link który chcesz skrócić")]),t(O.Z,{attrs:{label:"Link",rules:e.rules,color:"textBoxFocus"},model:{value:e.linktocreate,callback:function(t){e.linktocreate=t},expression:"linktocreate"}},[t(m.Z,{attrs:{slot:"prepend"},slot:"prepend"},[e._v("mdi-link")])],1),t(h.h7,[t(s.Z),t(u.Z,{attrs:{color:"red darken-1",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" Odrzuć ")]),t(u.Z,{attrs:{color:"green darken-1",text:""},on:{click:function(t){e.thinking=!e.thinking,e.generateLink(e.linktocreate)}}},[t(j.Z,{directives:[{name:"show",rawName:"v-show",value:e.thinking,expression:"thinking"}],attrs:{indeterminate:"",width:3,size:25}}),e._v(" Stwórz link ")],1)],1)],1),t(d.Z,{directives:[{name:"show",rawName:"v-show",value:e.showlink,expression:"showlink"}]},[t(z.Z,{attrs:{outlined:"",prominent:"",type:"success"}},[e._v(" Oto twój link"),t("br"),e._v(e._s(e.link)+" ")])],1),t(d.Z,{directives:[{name:"show",rawName:"v-show",value:e.error,expression:"error"}]},[t(z.Z,{attrs:{prominent:"",type:"error"}},[e._v("Podczas przetwarzania twojego żądania wystąpił błąd"+e._s(e.showerror?`: ${e.error}`:""))])],1)],1)},P=[],S={name:"NewLink",data:()=>({dialog:!1,thinking:!1,error:void 0,showerror:!1,link:void 0,hidecomp:!1,showlink:!1,linktocreate:"",rules:[e=>!!e||"Required.",e=>e&&e.length>=10||"Min 10 characters"],icons:{mdiLink:w.tuE}}),methods:{generateLink:function(e){const t=this;fetch(document.location.origin+"/api/",{method:"POST",body:new URLSearchParams({operation:1,data:e})}).then((async e=>{t.thinking=!1;const n=await e.json();n.error?(t.hidecomp=!0,t.error=n.error,t.showerror=n.inform):(t.link=window.location.origin+"/link/"+n.code,t.hidecomp=!0,this.showlink=!0)}))}}},L=S,E=(0,y.Z)(L,C,P,!1,null,"7392c564",null),T=E.exports,N=n(9223),$=n(5808),B=n(4525),F=n(4133),M=n(9592),A=n(1783),H=function(){var e=this,t=e._self._c;return t(x.Z,{attrs:{persistent:"","max-width":"1300",transition:"dialog-bottom-transition","overlay-opacity":"0.99","overlay-color":"#000000"},model:{value:e.islink,callback:function(t){e.islink=t},expression:"islink"}},[t(d.Z,[t(A.Z,{attrs:{color:"primary",dark:""}},[e._v("Próbujesz otworzyć link")]),t(M.Z,{directives:[{name:"show",rawName:"v-show",value:!e.loaded&&!e.isError,expression:"(!loaded && !isError)"}],staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}}),t(z.Z,{attrs:{prominent:"",type:"error"},model:{value:e.isError,callback:function(t){e.isError=t},expression:"isError"}},[e._v("Podczas przetwarzania twojego żądania wystąpił błąd"+e._s(e.showerror?`: ${e.error}`:""))]),t($.Z,{directives:[{name:"show",rawName:"v-show",value:e.loaded,expression:"loaded"}],attrs:{"three-line":"",subheader:""}},[t(B.Z,[t(F.km,[t(F.V9,[e._v("Link który próbujesz otworzyć")]),t(F.oZ,[e._v(e._s(e.link))])],1)],1),t(B.Z,[t(F.km,[t(F.V9,[e._v("Pamiętaj aby nie otwierać podejrzanych linków")]),t(F.oZ,[e._v("Takie linki mogę próbować wyłudzić dane dostępowe albo zrobić inne niefajne rzeczy z twoją intenetową tożsamością lub twoim komputerem")])],1)],1)],1),t(N.Z),t(s.Z),t(h.h7,{staticClass:"d-flex justify-end"},[t(u.Z,{attrs:{color:"red darken-1",text:""},on:{click:function(t){e.islink=!1}}},[e._v(" Odrzuć ")]),t(u.Z,{attrs:{color:"green darken-1",text:"",id:"openlink",disabled:!e.loaded},on:{click:function(t){return e.openlink(e.link)}}},[e._v(" Przejdź do linku ")])],1)],1)],1)},V=[],G={name:"OpenLink",data:()=>({islink:!1,loaded:!1,link:"about:blank",error:"something went wrong",showerror:!1,isError:!1}),methods:{onload:e=>{let t=!1;const n=document.location.pathname.split("/",3);"link"!==n[1]||n[2].includes("/")||(t=!0),e.islink=t},openlink:e=>{window.location=e}},mounted:function(){this.onload(this),this.islink&&fetch(document.location.origin+"/api/",{method:"POST",body:new URLSearchParams({operation:2,data:document.location.pathname.split("/",3)[2]}),headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((async e=>{const t=await e.json();if(200===e.status)this.link=t.link,this.loaded=!0;else{this.isError=!0;const e=t.error,n=t.inform;this.error=e,this.showerror=n}}))}},W=G,D=(0,y.Z)(W,H,V,!1,null,null,null),R=D.exports,U={name:"App",components:{FooterComp:_,NewLink:T,OpenLink:R},data:()=>({string:{helloString:"Shortened"}}),mounted:function(){void 0!==localStorage.theme&&(this.$vuetify.theme.dark="true"===localStorage.theme)}},q=U,Y=(0,y.Z)(q,l,c,!1,null,null,null),I=Y.exports,J=n(8345),K=function(){var e=this,t=e._self._c;return t("hello-world")},Q=[],X=n(266),ee=n(2118),te=n(1713),ne=function(){var e=this,t=e._self._c;return t(ee.Z,[t(te.Z,{staticClass:"text-center"},[t(X.Z,{attrs:{cols:"12"}},[t(m.Z,{attrs:{size:200}},[e._v(e._s(e.icons.mdiShieldLinkVariant))])],1),t(X.Z,{staticClass:"mb-4"},[t("h1",{staticClass:"display-2 font-weight-bold mb-3"},[e._v(" Witaj w shortened. ")]),t("p",{staticClass:"subheading font-weight-regular"},[e._v(" Bezpiecznym i co najważniejsze "),t("b",[e._v("BEZPIECZNYM")]),e._v(" skraczacu linków."),t("br"),e._v("Używanie naszego skraczaca jest dziecinnie proste"),t("br"),e._v("Wystarczy kliknąć w powyższy przycisk oraz wkleić link który chcesz skrócić. ")])]),t(X.Z,{staticClass:"mb-5",attrs:{cols:"12"}},[t("h3",[e._v("pamiętaj że każdy link który wrzucisz jest przeglądany przez bardzo dokładnego i trzymającego sie zasad administratora.(zwią go wiedźadmin)")])])],1)],1)},oe=[],re={name:"HelloWorld",data:()=>({icons:{mdiShieldLinkVariant:w.OTe}})},ie=re,ae=(0,y.Z)(ie,ne,oe,!1,null,null,null),se=ae.exports,le={name:"HomeView",components:{HelloWorld:se}},ce=le,ue=(0,y.Z)(ce,K,Q,!1,null,null,null),de=ue.exports;o.ZP.use(J.ZP);const he=[{path:"/",name:"home",component:de},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,1272))}],pe=new J.ZP({routes:he});var me=pe,fe=n(8864);o.ZP.use(fe.Z);var ke=new fe.Z({theme:{dark:!0,themes:{dark:{primary:"#2e2e2e",secondary:"#000000",textBoxFocus:"#6a6a6b"},light:{textBoxFocus:"#1976D2"}}}});o.ZP.config.productionTip=!1,new o.ZP({router:me,vuetify:ke,render:e=>e(I),data:{islink:!1}}).$mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var a=1/0;for(u=0;u<e.length;u++){o=e[u][0],r=e[u][1],i=e[u][2];for(var s=!0,l=0;l<o.length;l++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(s=!1,i<a&&(a=i));if(s){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.cdfd9d97.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="gui:";n.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var s,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+i){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+i),s.src=o),e[o]=[r];var h=function(t,n){s.onerror=s.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(t),s=new Error,l=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,r[1](s)}};n.l(a,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],s=o[1],l=o[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(l)var u=l(n)}for(t&&t(o);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},o=self["webpackChunkgui"]=self["webpackChunkgui"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(4648)}));o=n.O(o)})();
//# sourceMappingURL=app.7efe6abc.js.map