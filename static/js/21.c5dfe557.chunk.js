(this["webpackJsonplegiopad-app"]=this["webpackJsonplegiopad-app"]||[]).push([[21],{882:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(8),s=n(11),u=n(12),o=n(424),i=n(146),l=n(451),p=n(858),b=n(444),d=n(128),f=n(29),j=n(87),v=n(0),h=n(9),O=n(10),g=n(60),k=n.n(g),x=n(18),m=function(){function e(){Object(h.a)(this,e)}return Object(O.a)(e,[{key:"postSolAddress",value:function(){var e=Object(s.a)(a.a.mark((function e(t,n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.post("".concat(x.l,"bsc/link"),{message:t,signature:n});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getLinkedSolAddress",value:function(){var e=Object(s.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("".concat(x.l,"bsc/linked-sol/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data.sol);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),w=n(4),y=Object(o.a)((function(e){return{content:{backgroundColor:e.colors.neutralLighter,padding:16,marginTop:16},input:{},button:{margin:"12px auto"}}}));t.default=function(){var e=y(),t=Object(v.useState)({sol:""}),n=Object(u.a)(t,2),r=n[0],o=n[1],h=Object(f.b)(),O=h.account,g=h.library,k=new m,x=Object(j.b)().enqueueSnackbar,S=function(){var e=Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(O){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,k.getLinkedSolAddress(O);case 5:t=e.sent,o((function(e){return Object(c.a)(Object(c.a)({},e),{},{sol:t})})),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(2);case 11:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();Object(v.useEffect)((function(){S()}),[O,g]);var L=function(){var e=Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(O&&g){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,g.getSigner().signMessage(r.sol);case 5:return t=e.sent,e.next=8,k.postSolAddress(r.sol,t);case 8:x("You linked you SOL address successfully!"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),x(e.t0.message||"Something went wrong",{variant:"error"}),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(){return e.apply(this,arguments)}}();return Object(w.jsxs)(d.i,{children:[Object(w.jsx)(i.a,{align:"center",component:"h3",variant:"h1",children:"Link Sol"}),Object(w.jsx)(l.a,{container:!0,style:{justifyContent:"center"},children:Object(w.jsx)(l.a,{item:!0,sm:12,md:8,children:Object(w.jsxs)("div",{className:e.content,children:[Object(w.jsx)(p.a,{color:"primary",className:e.input,fullWidth:!0,label:"Solana Wallet Address",variant:"outlined",value:r.sol,onChange:function(e){o((function(t){return Object(c.a)(Object(c.a)({},t),{},{sol:e.target.value})}))}}),Object(w.jsx)(b.a,{color:"primary",fullWidth:!0,variant:"contained",disabled:!r.sol,onClick:L,className:e.button,children:"Link"})]})})})]})}}}]);
//# sourceMappingURL=21.c5dfe557.chunk.js.map