(this.webpackJsonpsim=this.webpackJsonpsim||[]).push([[21],{1006:function(e,t,a){"use strict";a.d(t,"a",(function(){return E})),a.d(t,"b",(function(){return y}));var n=a(16),r=a(2),o=a.n(r),i=a(945),c=a(1424),l=a(857),u=a(47),s=a(264),d=a.n(s),f=a(968),m=Object(l.a)((function(e){return{barBox:{padding:3,paddingTop:"10px",paddingBottom:"3px",borderRadius:"5px","&:hover":{background:"#f5f5f5",cursor:"pointer"},"&.selected":{background:"rgba(86,116,154,0.75)","& .txt, & .number":{color:"#fff"},"& .borderBox":{border:"1px solid white"},"& .percentBar":{background:"white"}}},borderBox:{position:"relative",height:"5px",borderRadius:"10px",border:"1px solid #acbbd1"},percentBar:{position:"absolute",height:"100%",background:"#acbbd1",borderRadius:"10px"},txt:{textTransform:"uppercase",fontSize:11,display:"flex",alignItems:"center"},number:{float:"right",border:"#fff",fontWeight:"bold",color:"#56749a",minWidth:"20px",height:"20px",lineHeight:"20px",textAlign:"center",fontSize:"10px",borderRadius:"10px",padding:"0px 10px"},icon:{width:"14px",height:"14px",marginRight:5,marginLeft:5,background:"#acbbd1",padding:"4px",borderRadius:"50%",borderTopRightRadius:0,borderTopLeftRadius:0,"& svg":{width:"100%",height:"14px"},"& path":{fill:"white"}}}})),p=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")},h=function(e){var t=m();return o.a.createElement("div",null,e.data.map((function(a,n){var r;return o.a.createElement(o.a.Fragment,null,a.count>0&&o.a.createElement("div",{key:n,className:"".concat(t.barBox," ").concat((null===e||void 0===e||null===(r=e.selectedType)||void 0===r?void 0:r.slug)===a.slug?"selected":""),onClick:function(t){e.setType(a)}},o.a.createElement("div",{className:"borderBox ".concat(t.borderBox)},o.a.createElement("div",{style:{width:"".concat(a.percent,"%")},className:"percentBar ".concat(t.percentBar)})),o.a.createElement("div",null,o.a.createElement("div",{className:"".concat(t.txt," txt")},o.a.createElement("div",{className:t.icon},u.d.find((function(e){return e.value===a.icon})).icon),a.name,o.a.createElement("span",{className:"number ".concat(t.number)},p(a.count))))))})))},b=function(e){var t,a=Object(r.useRef)(null);return Object(r.useEffect)((function(){!function(){var t=e.data.map((function(e){return{type:e._id?e._id:"Sin procesar",value:e.count,color:e.color}})),n=f.f(a.current);n.attr("viewBox","0 0 200 200");var r=f.a().innerRadius(70).outerRadius(85),o=f.b().value((function(e){return e.value})),i=(f.a().innerRadius(95).outerRadius(95),o(t));n.append("g").attr("class","donut-container").attr("transform","translate(".concat(100,", ").concat(100,")")).selectAll("path").data(i).join("path").style("stroke","white").style("stroke-width",2).style("fill",(function(e){return e.data.color})).attr("d",r)}()}),[]),o.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",alignItems:"center",position:"relative"}},o.a.createElement("svg",{style:{maxWidth:130},ref:a,className:e.className}),o.a.createElement("div",null,null===(t=e.data)||void 0===t?void 0:t.map((function(e,t){return o.a.createElement("div",{style:{textTransform:"uppercase",fontSize:"10px",fontWeight:"bold"},key:t},e._id?u.a.find((function(t){return t.value===e._id})).label:"Sin procesar",o.a.createElement("div",{style:{background:e.color,textAlign:"center",fontWeight:"bold",color:"white",maxWidth:60,borderRadius:3}},p(e.count)))}))))},g=Object(l.a)((function(e){return{container:{display:"flex",flexDirection:"column",width:"90%",overflowY:"auto",marginLeft:"5%",marginTop:"20px",backgroundColor:"#fff",borderRadius:"5px",boxShadow:"inset 0 0 5px rgba(0,0,0,.1)"},item:{padding:"10px",borderBottom:"1px solid #f2f8ff",overflow:"hidden",color:"#777",paddingTop:25,fontSize:14,position:"relative"},itemName:Object(n.a)({fontWeight:"bold",color:"#333",marginBottom:5,position:"absolute",top:15,transform:"translateY(-50%)",textTransform:"uppercase",fontSize:12},"color","#56749a"),chip:{margin:2,padding:2,"& .MuiChip-avatar":{width:"20px !important",height:"20px !important",marginLeft:"13px !important"}}}})),v=function(e){var t=g();return o.a.createElement(i.a,{className:t.item,style:e.style?e.style:{}},o.a.createElement("div",{className:t.itemName},e.title),e.item?e.item:e.children)},x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";var a=1024,n=t<0?0:t,r=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],o=Math.floor(Math.log(e)/Math.log(a));return parseFloat((e/Math.pow(a,o)).toFixed(n))+" "+r[o]},E=function(e){var t,a,n=g();return Object(r.useEffect)((function(){0===e.record.parent.length?e.setMetadata(null):e.metadata&&e.setMetadata(e.record.parent[0])}),[e.record]),o.a.createElement(i.a,{className:n.container},o.a.createElement(v,{title:"Nombre del archivo",item:(null===e||void 0===e||null===(t=e.record)||void 0===t?void 0:t.displayName)?null===e||void 0===e||null===(a=e.record)||void 0===a?void 0:a.displayName:e.record.name}),o.a.createElement(v,{title:"HASH",item:e.record.hash}),o.a.createElement(v,{title:"Tama\xf1o",item:x(e.record.size)}),e.record.parent.length>0&&o.a.createElement(v,{title:"Contenido relacionado"},e.record.parent.map((function(t,a){return o.a.createElement(c.a,{avatar:u.d.filter((function(e){return e.value===t.icon}))?u.d.filter((function(e){return e.value===t.icon}))[0].iconlight:o.a.createElement(d.a,null),key:a,label:t.name,className:n.chip,onClick:function(){e.setMetadata(t)}})}))))},y=function(e){var t=g();return o.a.createElement(i.a,{className:t.container},o.a.createElement(v,{title:"Descripci\xf3n",item:e.type.description}),o.a.createElement(v,{title:"Balance general del contenido",item:o.a.createElement(h,{selectedType:e.selectedType,setType:e.setType,data:e.parents})}),e.files.total>0&&o.a.createElement(v,{title:"Balance general de los documentos",item:o.a.createElement(b,{data:e.files.data})}))}},1387:function(e,t,a){"use strict";a.r(t);a(203);var n=a(37),r=a(2),o=a.n(r),i=a(1005),c=a(51),l=a(119),u=(a(961),a(994)),s=a(953),d=a(952),f=a(958),m=a.n(f),p=a(857),h=a(47),b=a(968),g=a(1006),v=a(945),x=a(1433),E=(a(1017),a(1028),a(1011),a(1130)),y=Object(p.a)((function(e){return{toolbar:{minHeight:"auto",padding:5,paddingLeft:"10px !important",backgroundColor:"#56749a",color:"#fff",borderTopLeftRadius:10,overflow:"hidden",alignItems:"center","& h6":{textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",fontSize:16,margin:0}}}}));t.default=Object(c.b)((function(e){return{user:e.auth.user}}),l.a)((function(e){var t=y(),a=Object(r.useState)(null),c=Object(n.a)(a,2),l=c[0],f=c[1],p=Object(r.useState)(null),j=Object(n.a)(p,2),w=j[0],O=j[1],B=Object(r.useState)(null),T=Object(n.a)(B,2),k=T[0],R=T[1],S=Object(r.useState)(null),N=Object(n.a)(S,2),z=N[0],L=N[1],A=Object(r.useState)(null),C=Object(n.a)(A,2),H=(C[0],C[1],Object(r.useState)(null)),M=Object(n.a)(H,2),P=M[0],W=M[1],F=Object(r.useState)(null),G=Object(n.a)(F,2);G[0],G[1],b.e;Object(r.useEffect)((function(){e.match.params.slug&&u.e(e.match.params.slug).then((function(e){console.log(e),f(e.types),L(e.files),O({name:e.name,icon:e.icon,description:e.description}),e.parent&&W(e.parent)})).catch((function(e){console.log(e)}))}),[]);return o.a.createElement(s.a,null,o.a.createElement(d.a,{userRoles:e.user.roles,list:function(){var t=[];return t.push({name:"Volver",icon:o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,null)),callback:function(){e.history.goBack()}}),t}()}),l&&z&&w&&P&&o.a.createElement(i.BloqueContenido,{style:{width:"calc(100% - 20px)",height:"calc(100vh - 100px)",padding:"2px",background:"rgb(255 255 255 / 34%)",border:"none",backdropFilter:"blur(10px)",display:"flex"}},o.a.createElement(v.a,{style:{width:"400px",height:"100%",background:"white",borderTopLeftRadius:10,borderBottomLeftRadius:10,marginRight:10,overflow:"auto"}},o.a.createElement(x.a,{className:t.toolbar},o.a.createElement("div",{style:{marginLeft:"24px"}},h.d.find((function(e){return e.value===w.icon})).icon),o.a.createElement("h6",{style:{flexGrow:1,marginLeft:15}},w.name)),o.a.createElement(g.b,{type:w,parents:l,files:z,setType:function(e){k&&e.slug===k.slug?R(null):R(e)},selectedType:k})),o.a.createElement(E.a,{types:l,selectedType:k,history:e.history,view:e.match.params.slug,selectedResource:{_id:P}})))}))},994:function(e,t,a){"use strict";a.d(t,"c",(function(){return o})),a.d(t,"e",(function(){return i})),a.d(t,"f",(function(){return c})),a.d(t,"b",(function(){return l})),a.d(t,"d",(function(){return u})),a.d(t,"a",(function(){return s}));var n=a(204),r=a(47);function o(e){var t="/views/"+e,a={method:"GET",headers:new Headers({Authorization:Object(n.a)()}),mode:"cors",cache:"default"};return fetch(r.e+t,a).then((function(e){return 200!==e.status?Promise.reject(e):e.json()}))}function i(e){var t="/views/info/"+e,a={method:"GET",headers:new Headers({Authorization:Object(n.a)()}),mode:"cors",cache:"default"};return fetch(r.e+t,a).then((function(e){return 200!==e.status?Promise.reject(e):e.json()}))}function c(e,t){var a="/views/"+e,o={method:"PUT",headers:new Headers({Authorization:Object(n.a)(),"Content-Type":"application/json"}),mode:"cors",cache:"default",body:t};return fetch(r.e+a,o).then((function(e){return 200!==e.status?Promise.reject(e):e.json()}))}function l(e){var t="/views/"+e,a={method:"DELETE",headers:new Headers({Authorization:Object(n.a)()}),mode:"cors",cache:"default"};return fetch(r.e+t,a).then((function(e){return 200!==e.status?Promise.reject(e):e.json()}))}function u(){var e={method:"GET",headers:new Headers({Authorization:Object(n.a)()}),mode:"cors",cache:"default"};return fetch(r.e+"/views",e).then((function(e){return 200!==e.status?Promise.reject(e):e.json()}))}function s(e){var t={method:"POST",headers:new Headers({Authorization:Object(n.a)(),"Content-Type":"application/json"}),mode:"cors",cache:"default",body:e};return fetch(r.e+"/views",t).then((function(e){return 201!==e.status?Promise.reject(e):e.json()}))}}}]);
//# sourceMappingURL=21.00b890dd.chunk.js.map