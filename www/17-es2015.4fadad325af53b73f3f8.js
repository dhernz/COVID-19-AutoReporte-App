(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"f+ep":function(n,t,e){"use strict";e.r(t);var l=e("8Y7J");class i{}var o=e("pMnS"),a=e("MKJQ"),u=e("sZkV"),r=e("s7LF"),s=e("iInd"),g=e("SVse"),c=e("H+bZ"),d=e("OlR4"),b=e("kPEz");class p{constructor(n,t,e,l){this.apiService=n,this.common=t,this.ga=e,this.router=l,this.userData={gender:"female",identityOne:"",identityTwo:"",identityThree:""},this.validIdentity=""}ngOnInit(){this.ga.trackPagesHandler("Login","/login")}validateIdentityOne(){15==(this.userData.identityOne.toString()+"-"+this.userData.identityTwo.toString()+"-"+this.userData.identityThree.toString()).toString().length?this.validIdentity="valid":this.identityOne&&(this.validIdentity="invalid"),4==this.userData.identityOne.toString().length&&this.identityTwo.nativeElement.focus()}validateIdentityTwo(){let n=this.userData.identityOne.toString()+"-"+this.userData.identityTwo.toString()+"-"+this.userData.identityThree.toString();this.validIdentity=15==n.toString().length?"valid":"invalid",4==this.userData.identityTwo.toString().length&&this.identityThree.nativeElement.focus()}validateIdentityThree(){let n=this.userData.identityOne.toString()+"-"+this.userData.identityTwo.toString()+"-"+this.userData.identityThree.toString();this.validIdentity=15==n.toString().length?"valid":"invalid",5==this.userData.identityThree.toString().length&&this.identityThree.nativeElement.focus()}btnEnabled(){return"valid"==this.validIdentity?"enabled":"disabled"}processForm(){if("enabled"==this.btnEnabled()){let n={identity:this.userData.identityOne.toString()+"-"+this.userData.identityTwo.toString()+"-"+this.userData.identityThree.toString()};this.common.presentLoading(),this.apiService.signin(n).then(n=>{localStorage.setItem("token",n.token),localStorage.setItem("name",n.name),localStorage.setItem("identity",this.userData.identityOne.toString()+"-"+this.userData.identityTwo.toString()+"-"+this.userData.identityThree.toString()),this.apiService.getCurrentReport().then(n=>{localStorage.setItem("statusId",n.status_id),localStorage.setItem("reportId",n.id),this.router.navigate(["/user-status"]),this.common.hideLoading()}).catch(n=>{this.router.navigate(["/user-status"]),this.common.hideLoading()})}).catch(n=>{console.log(n),"user_not_found"==n&&(n="Usuario no encontrado"),this.common.presentToast(n),this.common.hideLoading()}),console.log("Process form"),console.log(n)}else this.validIdentity="invalid",this.common.presentToast("Por favor rellena los campos")}}var h=l.nb({encapsulation:0,styles:[["@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700,900&display=swap);.form-container[_ngcontent-%COMP%]{font-family:Rubik}.label-top-text[_ngcontent-%COMP%]{font-family:Rubik;font-style:normal;font-weight:400;font-size:14px;line-height:17px;color:#777;margin:20px 40px}.element[_ngcontent-%COMP%]{margin-left:40px;margin-right:40px;margin-top:20px;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.element[_ngcontent-%COMP%]   .title-element[_ngcontent-%COMP%]{font-style:normal;font-weight:500;font-size:18px;line-height:21px;letter-spacing:-.47px;color:#333}.element[_ngcontent-%COMP%]   .subtitle-element[_ngcontent-%COMP%]{margin-top:5px;font-style:normal;font-weight:400;font-size:14px;line-height:17px;color:#777}.element[_ngcontent-%COMP%]   .input-container.invalid[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:2px solid #df3030}.element[_ngcontent-%COMP%]   .input-container.valid[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:2px solid #30dfa0}.element[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]{margin-top:15px;width:100%}.element[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .date-container[_ngcontent-%COMP%], .element[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding-left:10px;width:100%;height:50px;background:#fff;box-sizing:border-box;border-radius:4px;border:1px solid #828282}.element[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:0;border:2px solid #00b1fa}.element[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#828282}.element[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{color:#828282}.element[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder{color:#828282}.element[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:#828282}.element[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .option-list[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between}.element[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .option-list[_ngcontent-%COMP%]   .option-element[_ngcontent-%COMP%]{width:45%;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;background:#fff;border:1px solid #90dffc;box-sizing:border-box;border-radius:25px;height:50px}.element[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .option-list[_ngcontent-%COMP%]   .option-element[_ngcontent-%COMP%]   .option-text[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:16px;line-height:19px;color:#00b1fa}.element[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .option-list[_ngcontent-%COMP%]   .option-element[_ngcontent-%COMP%]   .option-input[_ngcontent-%COMP%]{margin:10px;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.element[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .option-list[_ngcontent-%COMP%]   .option-element[_ngcontent-%COMP%]   .option-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:1px solid #90dffc;box-sizing:border-box;height:14px;width:14px}.element[_ngcontent-%COMP%]   .input-container.identity[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between}.element[_ngcontent-%COMP%]   .input-container.identity[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:30%}.btn-container-signup[_ngcontent-%COMP%]{background:#00b1fa;border-radius:30px;height:60px;font-style:normal;font-weight:700;font-size:18px;line-height:21px;display:-webkit-box;display:flex;border:0;margin-left:40px;margin-right:40px;-webkit-box-align:center;align-items:center;text-align:center;color:#fff}.btn-container-signup[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{width:100%;text-align:center}.btn-container-login[_ngcontent-%COMP%]{border:0;border-radius:30px;height:60px;font-style:normal;font-weight:700;font-size:18px;line-height:21px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;text-align:center;color:#fff;margin:40px 40px 10px}.btn-container-login[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{width:100%;text-align:center}.btn-container-login.disabled[_ngcontent-%COMP%], .btn-container-login.enabled[_ngcontent-%COMP%]{border:1px solid #00b1fa;color:#00b1fa}"]],data:{}});function m(n){return l.Gb(0,[l.Db(671088640,1,{identityOne:0}),l.Db(671088640,2,{identityTwo:0}),l.Db(671088640,3,{identityThree:0}),(n()(),l.pb(3,0,null,null,47,"ion-content",[],null,null,null,a.y,a.f)),l.ob(4,49152,null,0,u.u,[l.h,l.k,l.x],null,null),(n()(),l.pb(5,0,null,0,1,"ion-img",[["src","assets/icon/LOGO_.svg"],["style","height: 40px;margin-top: 20px;"]],null,null,null,a.D,a.k)),l.ob(6,49152,null,0,u.D,[l.h,l.k,l.x],{src:[0,"src"]},null),(n()(),l.pb(7,0,null,0,43,"div",[["class","form-container"]],null,null,null,null,null)),(n()(),l.pb(8,0,null,null,1,"div",[["class","label-top-text"]],null,null,null,null,null)),(n()(),l.Fb(-1,null,[" Si ya tienes una cuenta, ingresa con tu identidad "])),(n()(),l.pb(10,0,null,null,30,"div",[["class","element"]],null,null,null,null,null)),(n()(),l.pb(11,0,null,null,1,"div",[["class","title-element"]],null,null,null,null,null)),(n()(),l.Fb(-1,null,[" N\xfamero de identidad "])),(n()(),l.pb(13,0,null,null,27,"div",[],[[8,"className",0]],null,null,null,null)),(n()(),l.pb(14,0,[[1,0],["identityOne",1]],null,8,"input",[["maxlength","4"],["pattern","[0-9]*"],["placeholder","0101"],["type","text"]],[[1,"maxlength",0],[1,"pattern",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(n,t,e){var i=!0,o=n.component;return"input"===t&&(i=!1!==l.Bb(n,15)._handleInput(e.target.value)&&i),"blur"===t&&(i=!1!==l.Bb(n,15).onTouched()&&i),"compositionstart"===t&&(i=!1!==l.Bb(n,15)._compositionStart()&&i),"compositionend"===t&&(i=!1!==l.Bb(n,15)._compositionEnd(e.target.value)&&i),"ngModelChange"===t&&(i=!1!==(o.userData.identityOne=e)&&i),"input"===t&&(i=!1!==o.validateIdentityOne()&&i),i}),null,null)),l.ob(15,16384,null,0,r.b,[l.B,l.k,[2,r.a]],null,null),l.ob(16,540672,null,0,r.d,[],{maxlength:[0,"maxlength"]},null),l.ob(17,540672,null,0,r.k,[],{pattern:[0,"pattern"]},null),l.Cb(1024,null,r.e,(function(n,t){return[n,t]}),[r.d,r.k]),l.Cb(1024,null,r.f,(function(n){return[n]}),[r.b]),l.ob(20,671744,null,0,r.i,[[8,null],[6,r.e],[8,null],[6,r.f]],{model:[0,"model"]},{update:"ngModelChange"}),l.Cb(2048,null,r.g,null,[r.i]),l.ob(22,16384,null,0,r.h,[[4,r.g]],null,null),(n()(),l.pb(23,0,[[2,0],["identityTwo",1]],null,8,"input",[["maxlength","4"],["pattern","[0-9]*"],["placeholder","1980"],["type","text"]],[[1,"maxlength",0],[1,"pattern",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(n,t,e){var i=!0,o=n.component;return"input"===t&&(i=!1!==l.Bb(n,24)._handleInput(e.target.value)&&i),"blur"===t&&(i=!1!==l.Bb(n,24).onTouched()&&i),"compositionstart"===t&&(i=!1!==l.Bb(n,24)._compositionStart()&&i),"compositionend"===t&&(i=!1!==l.Bb(n,24)._compositionEnd(e.target.value)&&i),"ngModelChange"===t&&(i=!1!==(o.userData.identityTwo=e)&&i),"input"===t&&(i=!1!==o.validateIdentityTwo()&&i),i}),null,null)),l.ob(24,16384,null,0,r.b,[l.B,l.k,[2,r.a]],null,null),l.ob(25,540672,null,0,r.d,[],{maxlength:[0,"maxlength"]},null),l.ob(26,540672,null,0,r.k,[],{pattern:[0,"pattern"]},null),l.Cb(1024,null,r.e,(function(n,t){return[n,t]}),[r.d,r.k]),l.Cb(1024,null,r.f,(function(n){return[n]}),[r.b]),l.ob(29,671744,null,0,r.i,[[8,null],[6,r.e],[8,null],[6,r.f]],{model:[0,"model"]},{update:"ngModelChange"}),l.Cb(2048,null,r.g,null,[r.i]),l.ob(31,16384,null,0,r.h,[[4,r.g]],null,null),(n()(),l.pb(32,0,[[3,0],["identityThree",1]],null,8,"input",[["maxlength","5"],["pattern","[0-9]*"],["placeholder","12345"],["type","text"]],[[1,"maxlength",0],[1,"pattern",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(n,t,e){var i=!0,o=n.component;return"input"===t&&(i=!1!==l.Bb(n,33)._handleInput(e.target.value)&&i),"blur"===t&&(i=!1!==l.Bb(n,33).onTouched()&&i),"compositionstart"===t&&(i=!1!==l.Bb(n,33)._compositionStart()&&i),"compositionend"===t&&(i=!1!==l.Bb(n,33)._compositionEnd(e.target.value)&&i),"ngModelChange"===t&&(i=!1!==(o.userData.identityThree=e)&&i),"input"===t&&(i=!1!==o.validateIdentityThree()&&i),i}),null,null)),l.ob(33,16384,null,0,r.b,[l.B,l.k,[2,r.a]],null,null),l.ob(34,540672,null,0,r.d,[],{maxlength:[0,"maxlength"]},null),l.ob(35,540672,null,0,r.k,[],{pattern:[0,"pattern"]},null),l.Cb(1024,null,r.e,(function(n,t){return[n,t]}),[r.d,r.k]),l.Cb(1024,null,r.f,(function(n){return[n]}),[r.b]),l.ob(38,671744,null,0,r.i,[[8,null],[6,r.e],[8,null],[6,r.f]],{model:[0,"model"]},{update:"ngModelChange"}),l.Cb(2048,null,r.g,null,[r.i]),l.ob(40,16384,null,0,r.h,[[4,r.g]],null,null),(n()(),l.pb(41,0,null,null,2,"div",[],[[8,"className",0]],[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.processForm()&&l),l}),null,null)),(n()(),l.pb(42,0,null,null,1,"div",[["class","btn"]],null,null,null,null,null)),(n()(),l.Fb(-1,null,[" INICIAR "])),(n()(),l.pb(44,0,null,null,1,"div",[["class","label-top-text"]],null,null,null,null,null)),(n()(),l.Fb(-1,null,[" Si no te has registrado, ingresa aqu\xed. "])),(n()(),l.pb(46,0,null,null,4,"div",[["class","btn-container-signup"],["routerLink","/signin"]],null,[[null,"click"]],(function(n,t,e){var i=!0;return"click"===t&&(i=!1!==l.Bb(n,47).onClick()&&i),"click"===t&&(i=!1!==l.Bb(n,48).onClick(e)&&i),i}),null,null)),l.ob(47,16384,null,0,s.n,[s.m,s.a,[8,null],l.B,l.k],{routerLink:[0,"routerLink"]},null),l.ob(48,737280,null,0,u.Ib,[g.g,u.Fb,l.k,s.m,[2,s.n]],null,null),(n()(),l.pb(49,0,null,null,1,"div",[["class","btn"]],null,null,null,null,null)),(n()(),l.Fb(-1,null,[" REGISTRARME "]))],(function(n,t){var e=t.component;n(t,6,0,"assets/icon/LOGO_.svg"),n(t,16,0,"4"),n(t,17,0,"[0-9]*"),n(t,20,0,e.userData.identityOne),n(t,25,0,"4"),n(t,26,0,"[0-9]*"),n(t,29,0,e.userData.identityTwo),n(t,34,0,"5"),n(t,35,0,"[0-9]*"),n(t,38,0,e.userData.identityThree),n(t,47,0,"/signin"),n(t,48,0)}),(function(n,t){var e=t.component;n(t,13,0,l.tb(1,"input-container ",e.validIdentity," identity")),n(t,14,0,l.Bb(t,16).maxlength?l.Bb(t,16).maxlength:null,l.Bb(t,17).pattern?l.Bb(t,17).pattern:null,l.Bb(t,22).ngClassUntouched,l.Bb(t,22).ngClassTouched,l.Bb(t,22).ngClassPristine,l.Bb(t,22).ngClassDirty,l.Bb(t,22).ngClassValid,l.Bb(t,22).ngClassInvalid,l.Bb(t,22).ngClassPending),n(t,23,0,l.Bb(t,25).maxlength?l.Bb(t,25).maxlength:null,l.Bb(t,26).pattern?l.Bb(t,26).pattern:null,l.Bb(t,31).ngClassUntouched,l.Bb(t,31).ngClassTouched,l.Bb(t,31).ngClassPristine,l.Bb(t,31).ngClassDirty,l.Bb(t,31).ngClassValid,l.Bb(t,31).ngClassInvalid,l.Bb(t,31).ngClassPending),n(t,32,0,l.Bb(t,34).maxlength?l.Bb(t,34).maxlength:null,l.Bb(t,35).pattern?l.Bb(t,35).pattern:null,l.Bb(t,40).ngClassUntouched,l.Bb(t,40).ngClassTouched,l.Bb(t,40).ngClassPristine,l.Bb(t,40).ngClassDirty,l.Bb(t,40).ngClassValid,l.Bb(t,40).ngClassInvalid,l.Bb(t,40).ngClassPending),n(t,41,0,l.tb(1,"btn-container-login ",e.btnEnabled(),""))}))}function C(n){return l.Gb(0,[(n()(),l.pb(0,0,null,null,1,"app-login",[],null,null,null,m,h)),l.ob(1,114688,null,0,p,[c.a,d.a,b.a,s.m],null,null)],(function(n,t){n(t,1,0)}),null)}var x=l.lb("app-login",p,C,{},{},[]);class f{}e.d(t,"LoginPageModuleNgFactory",(function(){return y}));var y=l.mb(i,[],(function(n){return l.yb([l.zb(512,l.j,l.X,[[8,[o.a,x]],[3,l.j],l.v]),l.zb(4608,g.j,g.i,[l.s,[2,g.p]]),l.zb(4608,r.m,r.m,[]),l.zb(4608,u.b,u.b,[l.x,l.g]),l.zb(4608,u.Eb,u.Eb,[u.b,l.j,l.p]),l.zb(4608,u.Hb,u.Hb,[u.b,l.j,l.p]),l.zb(1073742336,g.b,g.b,[]),l.zb(1073742336,r.l,r.l,[]),l.zb(1073742336,r.c,r.c,[]),l.zb(1073742336,u.Bb,u.Bb,[]),l.zb(1073742336,s.o,s.o,[[2,s.t],[2,s.m]]),l.zb(1073742336,f,f,[]),l.zb(1073742336,i,i,[]),l.zb(1024,s.k,(function(){return[[{path:"",component:p}]]}),[])])}))}}]);