(this["webpackJsonplegiopad-app"]=this["webpackJsonplegiopad-app"]||[]).push([[19],{876:function(e,a,t){"use strict";t.r(a);var n=t(12),o=t(7),r=t(0),c=t(424),i=t(146),l=t(464),s=t(877),d=t(857),b=t(128),j=t(19),m=t(8),p=t(632),u=t(451),g=t(147),h=t(16),x=t(29),O=t(28),v=t(86),f=t(110),N=t(511),y=t.n(N),C=t(13),k=t(98),L=t(489),T=t.n(L),z=t(4),S=100,W=Object(c.a)((function(e){return{root:{marginTop:50,position:"relative",margin:"0 5px 16px 5px"},content:{paddingTop:50,backgroundColor:e.colors.neutralLight},avatarWrapper:{position:"absolute",top:-50,left:"calc(50% - ".concat(50,"px)")},avatar:{width:S,height:S,borderRadius:"50%"},main:{padding:16},header:{display:"flex",alignItems:"flex-start",marginBottom:16},title:{color:e.colors.neutralLighter,fontWeight:600,fontSize:24,marginRight:8},symbol:{color:e.colors.neutralDark,fontSize:14,backgroundColor:Object(O.a)(.2,e.colors.neutralLighter),padding:"4px 10px",marginTop:12,fontWeight:700,letterSpacing:1},group:{"&+&":{marginTop:12}},label:{color:e.colors.neutralLighter,fontWeight:500,fontSize:12},value:{color:e.colors.neutralLighter,fontWeight:600,fontSize:18},linkWrapper:{display:"flex",justifyContent:"center",marginTop:16},link:{display:"inline-flex",color:e.colors.primary,alignItems:"center",justifyContent:"center",position:"relative",textDecoration:"none",padding:"8px 12px","&:hover":{textDecoration:"underline"}},statusLabel:{position:"absolute",top:0,right:0,padding:"4px 6px",border:"1px solid ".concat(e.colors.transparent),fontWeight:600,fontSize:14,"&.upcoming":{backgroundColor:Object(O.a)(.9,e.colors.green),color:e.colors.green},"&.ongoing":{backgroundColor:Object(O.a)(.9,e.colors.primary),color:e.colors.primary},"&.ended":{backgroundColor:Object(O.a)(.9,e.colors.error),color:e.colors.error},"&.finalized":{color:e.colors.blue,borderColor:e.colors.blue}},progressWrapper:{position:"relative",backgroundColor:e.colors.neutralLight,marginBottom:16,marginTop:16,height:30,borderRadius:16,color:e.colors.neutralLighter,display:"flex",justifyContent:"center",alignItems:"center",fontSize:14,fontWeight:600,border:"1px solid ".concat(Object(O.a)(.8,e.colors.neutralLighter)),overflow:"hidden","& span":{zIndex:2}},progress:{height:30,position:"absolute",left:0,top:0,bottom:0,backgroundColor:e.colors.primary}}})),I=function(e){var a=Object(g.h)(e.id).data,t=W(),o=Object(r.useState)(1),c=Object(n.a)(o,2),l=(c[0],c[1]),s=Object(x.b)().networkId,d=function(){return l((function(e){return e+1}))};return Object(z.jsxs)("div",{className:t.root,children:[a?Object(z.jsx)("div",{className:t.avatarWrapper,children:Object(z.jsx)(b.f,{src:a.metaData.banner,className:t.avatar,imgClassName:t.avatar})}):null,Object(z.jsx)("div",{className:t.content,children:a?function(){if(!a||!a.meta)return null;var e=a.startTime,n=a.closeTime,o=Object(f.c)(a),r=null;try{r=Object(h.h)(a.token,s)}catch(c){}return r?Object(z.jsx)(z.Fragment,{children:Object(z.jsxs)("div",{className:t.main,children:[Object(z.jsx)("div",{className:t.header,children:Object(z.jsx)(i.a,{className:t.title,children:a.metaData.title})}),Object(z.jsxs)(i.a,{className:Object(C.a)(t.statusLabel,o===j.h.Upcoming&&"upcoming",o===j.h.Ongoing&&"ongoing",o===j.h.Ended&&"ended",o===j.h.Finalized&&"finalized"),children:[o===j.h.Upcoming&&"Coming soon",o===j.h.Ongoing&&"Live",o===j.h.Ended&&"Ended",o===j.h.Finalized&&"Finalized"]}),Object(z.jsxs)("div",{className:t.group,children:[Object(z.jsxs)(i.a,{className:t.label,children:[o===j.h.Upcoming&&"League starts",o===j.h.Ongoing&&"League ends",o===j.h.Ended&&"League Ended",o===j.h.Finalized&&"League Finalized"]}),o===j.h.Upcoming&&Object(z.jsx)(b.c,{destTimeStamp:1e3*e,onReached:d}),o===j.h.Ongoing&&Object(z.jsx)(b.c,{destTimeStamp:1e3*n,onReached:d})]}),Object(z.jsxs)("div",{className:t.group,children:[Object(z.jsx)(i.a,{className:t.label,children:"Start Time"}),Object(z.jsxs)(i.a,{className:t.value,children:[T()(new Date(1e3*e)).utc().format("MM/DD/YYYY HH:mm")," ","GMT"]})]}),Object(z.jsxs)("div",{className:t.group,children:[Object(z.jsx)(i.a,{className:t.label,children:"Close Time"}),Object(z.jsxs)(i.a,{className:t.value,children:[T()(new Date(1e3*n)).utc().format("MM/DD/YYYY HH:mm")," ","GMT"]})]}),Object(z.jsxs)("div",{className:t.group,children:[Object(z.jsx)(i.a,{className:t.label,children:"Total Entry"}),Object(z.jsx)(i.a,{className:t.value,children:a.currentChoiceId.toNumber()})]}),Object(z.jsxs)("div",{className:t.group,children:[Object(z.jsx)(i.a,{className:t.label,children:"Entry Price"}),Object(z.jsxs)(i.a,{className:t.value,children:[Object(v.d)(Object(v.b)(a.entryAmount,r.decimals,0))," ",r.symbol.toUpperCase()]})]}),Object(z.jsxs)("div",{className:t.group,children:[Object(z.jsx)(i.a,{className:t.label,children:"Prize Amount"}),Object(z.jsxs)(i.a,{className:t.value,children:[Object(v.d)(Object(v.b)(a.prizeAmount,r.decimals,0))," ",r.symbol.toUpperCase()]})]}),Object(z.jsx)("div",{className:t.linkWrapper,children:Object(z.jsxs)(k.b,{className:t.link,to:"/sports-pools/".concat(a.address),children:["Research",Object(z.jsx)(y.a,{})]})})]})}):null}():Object(z.jsx)(b.k,{})})]})},D=t(444),M=Object(c.a)((function(e){return{root:{paddingTop:16,paddingBottom:16,display:"flex",justifyContent:"space-around",alignItems:"center","& p":{color:e.colors.primary}}}})),w=function(e){var a=M(),t=(e.total,e.loadMore),n=e.disabled;return Object(z.jsx)("div",{className:a.root,children:Object(z.jsx)(D.a,{color:"primary",disabled:n,onClick:t,variant:"outlined",children:"Load More"})})},E=["children","value","index"],Y=Object(c.a)((function(e){return{root:{"&+&":{marginTop:24}},content:{margin:"16px 0",textAlign:"left"},noIdo:{ontSize:18,color:e.colors.neutralLighter,margin:"24px 0"}}}));function F(e){var a=e.children,t=e.value,n=e.index,o=Object(p.a)(e,E);return Object(z.jsx)("div",Object(m.a)(Object(m.a)({},o),{},{children:t===n&&Object(z.jsx)(l.a,{p:3,children:a})}))}var R=function(e){var a=Y(),t=e.mode,n=e.value,o=e.index,r=Object(g.i)(t),c=r.loading,l=r.data,s=r.loadMore,d=r.hasMore;return Object(z.jsx)(F,{value:n,index:o,children:Object(z.jsxs)("div",{className:a.root,children:[Object(z.jsxs)("div",{className:a.content,children:[l.length>0&&Object(z.jsx)(u.a,{container:!0,spacing:2,children:l.map((function(e){return Object(z.jsx)(u.a,{item:!0,xs:12,sm:6,md:4,children:Object(z.jsx)(I,{id:e.address})},e.address)}))}),c&&Object(z.jsx)(b.k,{}),0===l.length&&!c&&Object(z.jsxs)(i.a,{align:"center",className:a.noIdo,children:["No ",t," League"]})]}),Object(z.jsx)(w,{total:l.length,disabled:c||!d,loadMore:s})]})})},U=Object(c.a)((function(e){return{content:{textAlign:"center",position:"relative"},tabsWrapper:Object(o.a)({marginBottom:16},e.breakpoints.down("md"),{marginBottom:0}),tabsContainer:Object(o.a)({width:"100%",textAlign:"center",margin:"10px auto",padding:"1rem"},e.breakpoints.down("md"),{padding:0}),tabsItem:{backgroundColor:e.colors.neutralLight,color:e.colors.primary},indicator:{backgroundColor:e.colors.primary},button:{backgroundColor:e.colors.primary,outline:"none",border:0,marginTop:12}}})),A=[{id:0,mode:j.h.Ended},{id:1,mode:j.h.Ongoing},{id:2,mode:j.h.Upcoming},{id:3,mode:j.h.Finalized}];a.default=function(){var e=U(),a=Object(r.useState)(0),t=Object(n.a)(a,2),o=t[0],c=t[1];return Object(z.jsx)(b.i,{children:Object(z.jsxs)("div",{className:e.content,children:[Object(z.jsx)(i.a,{align:"center",component:"h3",variant:"h1",children:"Leagues"}),Object(z.jsx)(l.a,{className:e.tabsWrapper,children:Object(z.jsx)(s.a,{value:o,onChange:function(e,a){c(a)},className:e.tabsContainer,centered:!0,TabIndicatorProps:{className:e.indicator},children:A.map((function(a,t){return Object(z.jsx)(d.a,{label:a.mode,className:e.tabsItem,disableRipple:!0},t)}))})}),A.map((function(e){return Object(z.jsx)(R,{mode:e.mode,value:o,index:e.id})}))]})})}}}]);
//# sourceMappingURL=19.519de829.chunk.js.map