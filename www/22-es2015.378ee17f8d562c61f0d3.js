(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{GwRI:function(l,n,e){"use strict";e.r(n);var t=e("8Y7J");class u{}var i=e("pMnS"),o=e("MKJQ"),s=e("sZkV"),a=e("s7LF"),c=e("SVse"),r=e("H+bZ"),b=e("gTw3"),g=e("OlR4"),d=e("kPEz");class p{constructor(l,n,e,t,u,i){this.menu=l,this.geolocation=n,this.common=e,this.router=t,this.ga=u,this.apiService=i,this.sick_days=0,this.address="",this.who_been="",this.who_been_list=[{name:"Familia",value:"family",isChecked:!1},{name:"Amigos",value:"friends",isChecked:!1},{name:"Compa\xf1eros de trabajo",value:"work",isChecked:!1},{name:"Vecinos",value:"neighbors",isChecked:!1}],this.apiService.getAllSymptoms()}ngOnInit(){this.ga.trackPagesHandler("Symptoms","/symptoms")}useCurrentLocation(){console.log("getting current"),this.common.presentLoading(),this.getCurrentAddress().then(l=>{this.address=l,this.common.hideLoading()}).catch(l=>{console.log(l),this.common.hideLoading()})}getCurrentAddress(){return new Promise((l,n)=>{this.geolocation.getCurrentPosition().then(e=>{(new google.maps.Geocoder).geocode({location:{lat:e.coords.latitude,lng:e.coords.longitude}},(function(e,t){console.log(e),"OK"===t?e[0]?l(e[0].formatted_address):n("No results found"):n(t)}))})})}save(){this.who_been="";let l=0;if(this.apiService.symptoms.forEach(n=>{n.isChecked&&(this.apiService.addSymptoms(n.id),l++)}),0==l)return this.common.presentToast("Seleccione al menos un sintoma"),!1;if(""==this.address)return this.common.presentToast("Por favor ingrese una direccion"),!1;this.who_been_list.forEach(l=>{l.isChecked&&(""!=this.who_been&&(this.who_been+=","),this.who_been+=l.value)});let n={sick_days:this.sick_days,address:this.address,who_been:this.who_been,reportId:localStorage.getItem("reportId")};this.apiService.updateReport(n).then(l=>{console.log(l),this.router.navigateByUrl("/map")}).catch(l=>{console.log("updatereporterror ==> ",l)})}ionViewDidEnter(){this.menu.enable(!1,"first")}}var m=e("iInd"),h=t.nb({encapsulation:0,styles:[[".element[_ngcontent-%COMP%]{margin-left:40px;margin-right:40px;margin-top:30px}.element[_ngcontent-%COMP%]   .label-element[_ngcontent-%COMP%]{font-weight:700}.element[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]{margin-top:7px;display:-webkit-box;display:flex}.element[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{text-decoration:underline}.element[_ngcontent-%COMP%]   .option-element[_ngcontent-%COMP%], .element[_ngcontent-%COMP%]   .option-element[_ngcontent-%COMP%]   .radio-list[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;flex-wrap:wrap}.element[_ngcontent-%COMP%]   .option-element[_ngcontent-%COMP%]   .radio-list[_ngcontent-%COMP%]   .radio-item[_ngcontent-%COMP%]{margin-top:10px;border:1px solid #828282;box-sizing:border-box;border-radius:4px;width:100%;padding:10px;display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center}.element[_ngcontent-%COMP%]   .input-element[_ngcontent-%COMP%]{margin-top:10px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.element[_ngcontent-%COMP%]   .input-element[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:40px;width:100px;border:1px solid #828282;box-sizing:border-box;border-radius:4px;text-align:center}.element[_ngcontent-%COMP%]   .input-element[_ngcontent-%COMP%]   .input-right-label[_ngcontent-%COMP%]{margin-left:10px}.element[_ngcontent-%COMP%]   .input-element-default[_ngcontent-%COMP%]{margin-top:10px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.element[_ngcontent-%COMP%]   .input-element-default[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:40px;width:100%;border:1px solid #828282;box-sizing:border-box;border-radius:4px;padding-left:15px}.element[_ngcontent-%COMP%]   .list-symptoms[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;flex-wrap:wrap}.element[_ngcontent-%COMP%]   .list-symptoms[_ngcontent-%COMP%]   .symptom-item[_ngcontent-%COMP%]{margin-top:10px;border:1px solid #828282;box-sizing:border-box;border-radius:4px;width:45%;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:start;-webkit-box-align:center;align-items:center;padding:12px}.element[_ngcontent-%COMP%]   .list-symptoms[_ngcontent-%COMP%]   .symptom-item[_ngcontent-%COMP%]   .label-symptom[_ngcontent-%COMP%]{margin-left:10px;font-family:Rubik;font-style:normal;font-weight:400;font-size:12px;line-height:14px;color:#000}.btn-continue[_ngcontent-%COMP%]{margin:40px}.btn-continue[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#00b1fa;border-radius:30px;height:38px;width:100%;font-family:Rubik;font-style:normal;font-weight:500;font-size:15px;line-height:18px;text-align:center;letter-spacing:-.47px;color:#fff}"]],data:{}});function C(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,10,"div",[["class","symptom-item"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,7,"div",[["class","check-symptom"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,6,"ion-checkbox",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var u=!0;return"ionBlur"===n&&(u=!1!==t.Bb(l,3)._handleBlurEvent(e.target)&&u),"ionChange"===n&&(u=!1!==t.Bb(l,3)._handleIonChange(e.target)&&u),"ngModelChange"===n&&(u=!1!==(l.context.$implicit.isChecked=e)&&u),u}),o.v,o.e)),t.ob(3,16384,null,0,s.c,[t.k],null,null),t.Cb(1024,null,a.f,(function(l){return[l]}),[s.c]),t.ob(5,671744,null,0,a.i,[[8,null],[8,null],[8,null],[6,a.f]],{model:[0,"model"]},{update:"ngModelChange"}),t.Cb(2048,null,a.g,null,[a.i]),t.ob(7,16384,null,0,a.h,[[4,a.g]],null,null),t.ob(8,49152,null,0,s.r,[t.h,t.k,t.x],null,null),(l()(),t.pb(9,0,null,null,1,"div",[["class","label-symptom"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=0!=(l.context.$implicit.isChecked=!l.context.$implicit.isChecked)&&t),t}),null,null)),(l()(),t.Fb(10,null,[" "," "]))],(function(l,n){l(n,5,0,n.context.$implicit.isChecked)}),(function(l,n){l(n,2,0,t.Bb(n,7).ngClassUntouched,t.Bb(n,7).ngClassTouched,t.Bb(n,7).ngClassPristine,t.Bb(n,7).ngClassDirty,t.Bb(n,7).ngClassValid,t.Bb(n,7).ngClassInvalid,t.Bb(n,7).ngClassPending),l(n,10,0,n.context.$implicit.name)}))}function x(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,10,"div",[["class","radio-item"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,1,"div",[["class","radio-label"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=0!=(l.context.$implicit.isChecked=!l.context.$implicit.isChecked)&&t),t}),null,null)),(l()(),t.Fb(2,null,["",""])),(l()(),t.pb(3,0,null,null,7,"div",[["class","radio-value"]],null,null,null,null,null)),(l()(),t.pb(4,0,null,null,6,"ion-checkbox",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var u=!0;return"ionBlur"===n&&(u=!1!==t.Bb(l,5)._handleBlurEvent(e.target)&&u),"ionChange"===n&&(u=!1!==t.Bb(l,5)._handleIonChange(e.target)&&u),"ngModelChange"===n&&(u=!1!==(l.context.$implicit.isChecked=e)&&u),u}),o.v,o.e)),t.ob(5,16384,null,0,s.c,[t.k],null,null),t.Cb(1024,null,a.f,(function(l){return[l]}),[s.c]),t.ob(7,671744,null,0,a.i,[[8,null],[8,null],[8,null],[6,a.f]],{model:[0,"model"]},{update:"ngModelChange"}),t.Cb(2048,null,a.g,null,[a.i]),t.ob(9,16384,null,0,a.h,[[4,a.g]],null,null),t.ob(10,49152,null,0,s.r,[t.h,t.k,t.x],null,null)],(function(l,n){l(n,7,0,n.context.$implicit.isChecked)}),(function(l,n){l(n,2,0,n.context.$implicit.name),l(n,4,0,t.Bb(n,9).ngClassUntouched,t.Bb(n,9).ngClassTouched,t.Bb(n,9).ngClassPristine,t.Bb(n,9).ngClassDirty,t.Bb(n,9).ngClassValid,t.Bb(n,9).ngClassInvalid,t.Bb(n,9).ngClassPending)}))}function f(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,12,"ion-header",[],null,null,null,o.z,o.i)),t.ob(1,49152,null,0,s.B,[t.h,t.k,t.x],null,null),(l()(),t.pb(2,0,null,0,10,"ion-toolbar",[],null,null,null,o.H,o.q)),t.ob(3,49152,null,0,s.zb,[t.h,t.k,t.x],null,null),(l()(),t.pb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,o.u,o.d)),t.ob(5,49152,null,0,s.l,[t.h,t.k,t.x],null,null),(l()(),t.pb(6,0,null,0,2,"ion-back-button",[["color","primary"]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t.Bb(l,8).onClick(e)&&u),u}),o.s,o.b)),t.ob(7,49152,null,0,s.g,[t.h,t.k,t.x],{color:[0,"color"]},null),t.ob(8,16384,null,0,s.h,[[2,s.fb],s.Fb],null,null),(l()(),t.pb(9,0,null,0,3,"ion-title",[["style","margin-right: 48px;"]],null,null,null,o.G,o.p)),t.ob(10,49152,null,0,s.xb,[t.h,t.k,t.x],null,null),(l()(),t.pb(11,0,null,0,1,"ion-img",[["src","assets/icon/LOGO_.svg"],["style","height: 40px;"]],null,null,null,o.B,o.k)),t.ob(12,49152,null,0,s.D,[t.h,t.k,t.x],{src:[0,"src"]},null),(l()(),t.pb(13,0,null,null,46,"ion-content",[],null,null,null,o.w,o.f)),t.ob(14,49152,null,0,s.u,[t.h,t.k,t.x],null,null),(l()(),t.pb(15,0,null,0,5,"div",[["class","element"]],null,null,null,null,null)),(l()(),t.pb(16,0,null,null,1,"div",[["class","label-element"]],null,null,null,null,null)),(l()(),t.Fb(-1,null,["\xbfQue sintomas presentas?"])),(l()(),t.pb(18,0,null,null,2,"div",[["class","list-symptoms"]],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,C)),t.ob(20,278528,null,0,c.h,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t.pb(21,0,null,0,12,"div",[["class","element"]],null,null,null,null,null)),(l()(),t.pb(22,0,null,null,1,"div",[["class","label-element"]],null,null,null,null,null)),(l()(),t.Fb(-1,null,["\xbfHace cuanto comenzaste a sentirte asi?"])),(l()(),t.pb(24,0,null,null,9,"div",[["class","input-element"]],null,null,null,null,null)),(l()(),t.pb(25,0,null,null,6,"input",[["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],(function(l,n,e){var u=!0,i=l.component;return"input"===n&&(u=!1!==t.Bb(l,26)._handleInput(e.target.value)&&u),"blur"===n&&(u=!1!==t.Bb(l,26).onTouched()&&u),"compositionstart"===n&&(u=!1!==t.Bb(l,26)._compositionStart()&&u),"compositionend"===n&&(u=!1!==t.Bb(l,26)._compositionEnd(e.target.value)&&u),"change"===n&&(u=!1!==t.Bb(l,27).onChange(e.target.value)&&u),"input"===n&&(u=!1!==t.Bb(l,27).onChange(e.target.value)&&u),"blur"===n&&(u=!1!==t.Bb(l,27).onTouched()&&u),"ngModelChange"===n&&(u=!1!==(i.sick_days=e)&&u),u}),null,null)),t.ob(26,16384,null,0,a.b,[t.B,t.k,[2,a.a]],null,null),t.ob(27,16384,null,0,a.j,[t.B,t.k],null,null),t.Cb(1024,null,a.f,(function(l,n){return[l,n]}),[a.b,a.j]),t.ob(29,671744,null,0,a.i,[[8,null],[8,null],[8,null],[6,a.f]],{model:[0,"model"]},{update:"ngModelChange"}),t.Cb(2048,null,a.g,null,[a.i]),t.ob(31,16384,null,0,a.h,[[4,a.g]],null,null),(l()(),t.pb(32,0,null,null,1,"div",[["class","input-right-label"]],null,null,null,null,null)),(l()(),t.Fb(-1,null,[" D\xedas "])),(l()(),t.pb(34,0,null,0,15,"div",[["class","element"]],null,null,null,null,null)),(l()(),t.pb(35,0,null,null,1,"div",[["class","label-element"]],null,null,null,null,null)),(l()(),t.Fb(-1,null,["\xbfDonde estas actualmente?"])),(l()(),t.pb(37,0,null,null,6,"div",[["class","input-element-default"]],null,null,null,null,null)),(l()(),t.pb(38,0,null,null,5,"input",[["placeholder","Escribir direccion exacata"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,e){var u=!0,i=l.component;return"input"===n&&(u=!1!==t.Bb(l,39)._handleInput(e.target.value)&&u),"blur"===n&&(u=!1!==t.Bb(l,39).onTouched()&&u),"compositionstart"===n&&(u=!1!==t.Bb(l,39)._compositionStart()&&u),"compositionend"===n&&(u=!1!==t.Bb(l,39)._compositionEnd(e.target.value)&&u),"ngModelChange"===n&&(u=!1!==(i.address=e)&&u),u}),null,null)),t.ob(39,16384,null,0,a.b,[t.B,t.k,[2,a.a]],null,null),t.Cb(1024,null,a.f,(function(l){return[l]}),[a.b]),t.ob(41,671744,null,0,a.i,[[8,null],[8,null],[8,null],[6,a.f]],{model:[0,"model"]},{update:"ngModelChange"}),t.Cb(2048,null,a.g,null,[a.i]),t.ob(43,16384,null,0,a.h,[[4,a.g]],null,null),(l()(),t.pb(44,0,null,null,5,"div",[["class","location"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.useCurrentLocation()&&t),t}),null,null)),(l()(),t.pb(45,0,null,null,2,"div",[["class","icon"]],null,null,null,null,null)),(l()(),t.pb(46,0,null,null,1,"ion-icon",[["name","location-outline"]],null,null,null,o.A,o.j)),t.ob(47,49152,null,0,s.C,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.pb(48,0,null,null,1,"div",[["class","text"]],null,null,null,null,null)),(l()(),t.Fb(-1,null,[" Usar mi ubicacion actual "])),(l()(),t.pb(50,0,null,0,6,"div",[["class","element"],["style","margin-bottom: 20px;"]],null,null,null,null,null)),(l()(),t.pb(51,0,null,null,1,"div",[["class","label-element"]],null,null,null,null,null)),(l()(),t.Fb(-1,null,["\xbfCon quien has estado?"])),(l()(),t.pb(53,0,null,null,3,"div",[["class","option-element"]],null,null,null,null,null)),(l()(),t.pb(54,0,null,null,2,"div",[["class","radio-list"]],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,x)),t.ob(56,278528,null,0,c.h,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t.pb(57,0,null,0,2,"div",[["class","btn-continue"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.save()&&t),t}),null,null)),(l()(),t.pb(58,0,null,null,1,"button",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Continuar"]))],(function(l,n){var e=n.component;l(n,7,0,"primary"),l(n,12,0,"assets/icon/LOGO_.svg"),l(n,20,0,e.apiService.symptoms),l(n,29,0,e.sick_days),l(n,41,0,e.address),l(n,47,0,"location-outline"),l(n,56,0,e.who_been_list)}),(function(l,n){l(n,25,0,t.Bb(n,31).ngClassUntouched,t.Bb(n,31).ngClassTouched,t.Bb(n,31).ngClassPristine,t.Bb(n,31).ngClassDirty,t.Bb(n,31).ngClassValid,t.Bb(n,31).ngClassInvalid,t.Bb(n,31).ngClassPending),l(n,38,0,t.Bb(n,43).ngClassUntouched,t.Bb(n,43).ngClassTouched,t.Bb(n,43).ngClassPristine,t.Bb(n,43).ngClassDirty,t.Bb(n,43).ngClassValid,t.Bb(n,43).ngClassInvalid,t.Bb(n,43).ngClassPending)}))}function k(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,1,"app-symptoms",[],null,null,null,f,h)),t.ob(1,114688,null,0,p,[s.Db,b.a,g.a,m.m,d.a,r.a],null,null)],(function(l,n){l(n,1,0)}),null)}var v=t.lb("app-symptoms",p,k,{},{},[]);class _{}e.d(n,"SymptomsPageModuleNgFactory",(function(){return y}));var y=t.mb(u,[],(function(l){return t.yb([t.zb(512,t.j,t.X,[[8,[i.a,v]],[3,t.j],t.v]),t.zb(4608,c.j,c.i,[t.s,[2,c.p]]),t.zb(4608,a.m,a.m,[]),t.zb(4608,s.b,s.b,[t.x,t.g]),t.zb(4608,s.Eb,s.Eb,[s.b,t.j,t.p]),t.zb(4608,s.Hb,s.Hb,[s.b,t.j,t.p]),t.zb(1073742336,c.b,c.b,[]),t.zb(1073742336,a.l,a.l,[]),t.zb(1073742336,a.c,a.c,[]),t.zb(1073742336,s.Bb,s.Bb,[]),t.zb(1073742336,m.o,m.o,[[2,m.t],[2,m.m]]),t.zb(1073742336,_,_,[]),t.zb(1073742336,u,u,[]),t.zb(1024,m.k,(function(){return[[{path:"",component:p}]]}),[])])}))}}]);