(this.webpackJsonpsim=this.webpackJsonpsim||[]).push([[20],{1017:function(e,t,a){"use strict";a.d(t,"d",(function(){return o})),a.d(t,"e",(function(){return c})),a.d(t,"f",(function(){return i})),a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return u}));var n=a(46),r=a(204);function o(){var e={method:"GET",headers:new Headers({Authorization:Object(r.a)()}),mode:"cors",cache:"default"};return fetch(n.e+"/forms",e).then((function(e){return 200!==e.status?Promise.reject(e):e.json()}))}function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=new Headers({Authorization:Object(r.a)(),"Content-Type":"application/json"}),o="/forms/"+e,c={method:"POST",headers:a,mode:"cors",cache:"default",body:JSON.stringify(t)};return fetch(n.e+o,c).then((function(e){return 200!==e.status?Promise.reject(e):e.json()}))}function i(e,t){var a="/forms/"+e,o={method:"PUT",headers:new Headers({Authorization:Object(r.a)(),"Content-Type":"application/json"}),mode:"cors",cache:"default",body:t};return fetch(n.e+a,o).then((function(e){return 200!==e.status?Promise.reject(e):e.json()}))}function l(e){var t={method:"POST",headers:new Headers({Authorization:Object(r.a)(),"Content-Type":"application/json"}),mode:"cors",cache:"default",body:e};return fetch(n.e+"/forms",t).then((function(e){return 201!==e.status?Promise.reject(e):e.json()}))}function s(e){var t="/forms/"+e,a={method:"DELETE",headers:new Headers({Authorization:Object(r.a)()}),mode:"cors",cache:"default"};return fetch(n.e+t,a).then((function(e){if(204!==e.status)return Promise.reject(e)}))}function u(e){var t="/forms/duplicate/"+e,a={method:"POST",headers:new Headers({Authorization:Object(r.a)(),"Content-Type":"application/json"}),mode:"cors",cache:"default"};return fetch(n.e+t,a).then((function(e){if(201!==e.status)return Promise.reject(e)}))}},1031:function(e,t,a){"use strict";var n=a(3),r=a(6),o=a(2),c=a(8),i=a(850),l=a(14),s=o.forwardRef((function(e,t){var a=e.classes,l=e.className,s=e.raised,u=void 0!==s&&s,d=Object(r.a)(e,["classes","className","raised"]);return o.createElement(i.a,Object(n.a)({className:Object(c.a)(a.root,l),elevation:u?8:1,ref:t},d))}));t.a=Object(l.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(s)},1033:function(e,t,a){"use strict";var n=a(2),r=a(209);t.a=Object(r.a)(n.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete")},1039:function(e,t,a){"use strict";var n=a(3),r=a(6),o=a(2),c=a(8),i=a(14),l=a(202),s=o.forwardRef((function(e,t){var a=e.action,i=e.avatar,s=e.classes,u=e.className,d=e.component,f=void 0===d?"div":d,m=e.disableTypography,h=void 0!==m&&m,p=e.subheader,b=e.subheaderTypographyProps,v=e.title,g=e.titleTypographyProps,E=Object(r.a)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),j=v;null==j||j.type===l.a||h||(j=o.createElement(l.a,Object(n.a)({variant:i?"body2":"h5",className:s.title,component:"span",display:"block"},g),j));var y=p;return null==y||y.type===l.a||h||(y=o.createElement(l.a,Object(n.a)({variant:i?"body2":"body1",className:s.subheader,color:"textSecondary",component:"span",display:"block"},b),y)),o.createElement(f,Object(n.a)({className:Object(c.a)(s.root,u),ref:t},E),i&&o.createElement("div",{className:s.avatar},i),o.createElement("div",{className:s.content},j,y),a&&o.createElement("div",{className:s.action},a))}));t.a=Object(i.a)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(s)},1153:function(e,t,a){"use strict";a.r(t),a.d(t,"BloqueContenido",(function(){return B}));var n=a(35),r=a(2),o=a.n(r),c=a(36),i=a(963),l=a(50),s=a(139),u=a(942),d=a.n(u),f=a(949),m=a.n(f),h=a(960),p=a.n(h),b=a(993),v=a.n(b),g=a(940),E=a(941),j=a(1031),y=a(1039),x=a(920),O=a(492),w=a(926),k=a(843),C=a(61),T=a(1033),z=Object(k.a)((function(e){return{bloque:{padding:"10px",backgroundColor:"rgba(255,255,255,.9)",margin:5,width:"100%",height:"100%",overflow:"auto",position:"relative",borderRadius:10,border:"3px solid #fff","&::-webkit-scrollbar":{width:6,height:2},"&::-webkit-scrollbar-button":{width:10,height:10},"&::-webkit-scrollbar-thumb":{background:"#56749a",border:"0px none #ffffff",borderRadius:50},"&::-webkit-scrollbar-thumb:hover":{background:"#56749a"},"&::-webkit-scrollbar-thumb:active":{background:"#56749a"},"&::-webkit-scrollbar-track":{background:"rgba(0,0,0,0.1)",border:"0px none #ffffff",borderRadius:50},"&::-webkit-scrollbar-track:hover":{background:"rgba(0,0,0,0.1)"},"&::-webkit-scrollbar-track:active":{background:"rgba(0,0,0,0.1)"}},tituloBloque:{top:0,fontSize:15,fontWeight:"bold",padding:"10px 15px",position:"sticky",zIndex:10,width:"100%",left:0,background:"#e6e6e6",borderTopLeftRadius:10,borderTopRightRadius:10,color:"#56749a",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"},breadcrumbs:{padding:"5px 15px",background:"#56749a",position:"sticky",color:"#fff",borderBottomLeftRadius:10,borderBottomRightRadius:10,textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"},linkBreadcrumb:{color:"#fff",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",maxWidth:200,display:"inline-block","&:hover":{color:"#fff"}},selectedBread:{color:"#fff !important",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",maxWidth:150,backgroundColor:"rgba(255,255,255,.2)",display:"inline-block",padding:"0 5px",borderRadius:2},columnas:{display:"flex",height:"calc(100vh - 150px)"},card:{marginTop:5,marginBottom:5,"& .MuiCardHeader-root":{padding:"5px 10px",borderBottom:"1px solid #ececec","& .MuiCardHeader-content":{"& .MuiTypography-root":{fontSize:"14px",fontWeight:"bold",fontFamily:"Montserrat",color:"rgb(86, 116, 154)"}}}},btn_color:{color:"#869bb7",padding:5,width:30,height:30,margin:"0 2px",border:"1px solid #c6d0dd","&:hover":{color:"#fff",backgroundColor:"#56749a"},"& .MuiSvgIcon-root":{width:14}}}})),S=function(e){var t=z(),a=Object(r.useState)(!1),c=Object(n.a)(a,2);c[0],c[1];return o.a.createElement(j.a,{className:t.card},o.a.createElement(y.a,{title:e.title,action:o.a.createElement(x.a,{disableGutters:!0,variant:"dense"},o.a.createElement(C.Link,{to:"/lists/".concat(e.id)},o.a.createElement(O.a,{className:t.btn_color,size:"small","aria-label":"settings"},o.a.createElement(d.a,null))),o.a.createElement(O.a,{className:t.btn_color,size:"small","aria-label":"delete",onClick:function(){e.onDeleted(e.id)}},o.a.createElement(T.a,null)))}))},B=function(e){var t=z();return o.a.createElement(w.a,{className:t.bloque,style:e.style},e.title&&o.a.createElement(w.a,{className:t.tituloBloque},e.title),e.topBar&&o.a.createElement(o.a.Fragment,null,e.topBar),e.children)};t.default=Object(l.b)((function(e){return{user:e.auth.user}}),s.a)((function(e){Object(c.m)().id;var t=z(),a=Object(r.useState)(null),l=Object(n.a)(a,2),s=(l[0],l[1],Object(r.useState)([])),u=Object(n.a)(s,2),d=u[0],f=u[1];Object(r.useEffect)((function(){i.c().then((function(e){f(e)})).catch((function(e){console.log(e)}))}),[]);var h=function(t){e.history.push("".concat(t))};return o.a.createElement(E.a,null,o.a.createElement(g.a,{userRoles:e.user.roles,list:function(){var t=[];return e.user.roles.includes("admin")&&t.push({name:"Agregar listado",icon:o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,null),o.a.createElement(m.a,null)),action:"new",callback:function(){return h("/lists/new")}}),e.user.roles.includes("admin")&&t.push({name:"Est\xe1ndares de metadatos",icon:o.a.createElement(o.a.Fragment,null,o.a.createElement(v.a,null)),callback:function(){return h("/forms")}}),t}()}),o.a.createElement(w.a,{className:t.columnas},o.a.createElement(B,{style:{width:"70%",maxWidth:500},title:"Listados"},d.map((function(e,t){return o.a.createElement(S,{key:t,title:e.name,description:e.description,id:e.id,onDeleted:function(e){i.b(e).then((function(e){i.c().then((function(e){f(e)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))}})})))))}))},1367:function(e,t,a){"use strict";a.r(t);var n=a(35),r=a(2),o=a.n(r),c=a(50),i=a(139),l=(a(1017),a(963)),s=a(843),u=a(926),d=a(925),f=a(941),m=a(940),h=a(950),p=a.n(h),b=a(1153),v=a(938),g=a(948),E=a(993),j=a.n(E),y=a(974),x=a.n(y),O=a(980),w=a.n(O),k=a(138),C=a.n(k),T=a(939),z=Object(s.a)((function(e){return{columna:{display:"flex",height:"calc(100vh - 150px)"},error:{color:"white",backgroundColor:"#f97b7b",padding:10,borderRadius:5,marginBottom:10,"&:first-child":{marginTop:10}}}}));t.default=Object(c.b)((function(e){return{user:e.auth.user}}),i.a)((function(e){var t=z(),a=Object(r.useState)([]),c=Object(n.a)(a,2),i=(c[0],c[1],Object(r.useState)(!1)),s=Object(n.a)(i,2),h=s[0],E=s[1],y=Object(r.useState)(null),O=Object(n.a)(y,2),k=O[0],S=O[1];Object(r.useEffect)((function(){e.match.params.slug?l.d(e.match.params.slug).then((function(e){e&&(e.msg?C.a.fire({title:"Error",text:e.msg,icon:"error",confirmButtonText:"Aceptar"}).then((function(){B("/lists")})):(console.log(e),E(!0),S(e)))})).catch((function(e){e.json().then((function(e){C.a.fire({title:"Error",text:e.msg,icon:"error",confirmButtonText:"Aceptar"}).then((function(){B("/forms")}))}))})):(E(!1),S({name:"",description:"",options:[]}))}),[]);var B=function(t){e.history.push("".concat(t))};return o.a.createElement(f.a,null,o.a.createElement(m.a,{userRoles:e.user.roles,list:function(){var t=[];return e.user.roles.includes("admin")&&t.push({name:"Volver",icon:o.a.createElement(o.a.Fragment,null,o.a.createElement(j.a,null),o.a.createElement(p.a,null)),callback:function(){return B("/lists")}}),(e.user.roles.includes("admin")||e.user.roles.includes("editor"))&&t.push({name:"Descargar listado",icon:o.a.createElement(o.a.Fragment,null,o.a.createElement(x.a,null),o.a.createElement(w.a,null)),callback:function(){C.a.fire({title:"\xbfEst\xe1s seguro?",text:"Se generar\xe1 un archivo con el contenido del listado",icon:"warning",showCancelButton:!0}).then((function(t){t.isConfirmed&&v.p("inventoryMaker",JSON.stringify({parent:e.match.params.slug}),"bulk-lists").then((function(e){C.a.fire({title:"Procesamiento iniciado",text:e.msg,icon:"success",confirmButtonText:"Aceptar"})})).catch((function(e){e.json().then((function(e){C.a.fire({title:"Error",text:e.msg,icon:"error",confirmButtonText:"Aceptar"})}))}))}))}}),t}()}),o.a.createElement(u.a,{className:t.columna},o.a.createElement(b.BloqueContenido,{style:{width:"100%",maxWidth:700},title:"Agregar listado"},k&&o.a.createElement(g.c,{initialValues:k,onSubmit:function(t,a){var n=a.setSubmitting;h?h&&C.a.fire({title:"\xbfEst\xe1s seguro?",text:"\xbfEst\xe1s seguro que desea actualizar este listado?",icon:"question",showCancelButton:!0,confirmButtonText:"S\xed, actualizar",cancelButtonText:"Cancelar"}).then((function(a){l.e(e.match.params.slug,JSON.stringify(t,null,2)).then((function(e){e&&B("/lists")})).catch((function(e){e.json().then((function(e){C.a.fire({title:"Error",text:e.msg,icon:"error",confirmButtonText:"Aceptar"})}))}))})):C.a.fire({title:"\xbfEst\xe1s seguro?",text:"\xbfEst\xe1s seguro de agregar este listado?",icon:"question",showCancelButton:!0,confirmButtonText:"S\xed, agregar",cancelButtonText:"Cancelar"}).then((function(e){e.isConfirmed&&l.a(JSON.stringify(t,null,2)).then((function(e){e&&B("/lists")})).catch((function(e){e.json().then((function(e){C.a.fire({title:"Error",text:e.msg,icon:"error",confirmButtonText:"Aceptar"})}))}))})),n(!1)},validate:function(e){var t={};return e.name||(t.name="El nombre es requerido"),t}},(function(e){var t=e.values,a=e.errors,n=(e.touched,e.handleChange),r=e.handleBlur,c=e.handleSubmit,i=e.isSubmitting;return o.a.createElement("form",{onSubmit:c},o.a.createElement(u.a,{style:{display:"flex",flexDirection:"column"}},o.a.createElement(T.o,{name:"Nombre",id:"name",handleChange:n,handleBlur:r,value:t.name,errors:a.name,required:!0}),o.a.createElement(T.n,{name:"Descripci\xf3n",id:"description",handleChange:n,handleBlur:r,value:t.description}),o.a.createElement(g.b,{name:"options"},(function(e){var a=e.insert,n=e.remove,r=e.push,c=e.move;e.replace;return o.a.createElement(T.e,{name:"Opciones",id:"options",insert:a,remove:n,push:r,move:c,value:t.options.filter((function(e){return!e.deleted})),editing:h})})),!h&&o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{style:{display:"flex",justifyContent:"flex-end",gap:10,marginTop:10}},o.a.createElement(d.a,{type:"button",variant:"outlined",onClick:function(){return B("/lists")}},"Cancelar"),o.a.createElement(d.a,{type:"submit",variant:"outlined",disabled:i},"Guardar"))),h&&o.a.createElement(u.a,{style:{display:"flex",justifyContent:"flex-end",gap:10,marginTop:10}},o.a.createElement(d.a,{type:"button",variant:"outlined",onClick:function(){return B("/lists")}},"Cancelar"),o.a.createElement(d.a,{type:"submit",variant:"outlined",disabled:i},"Actualizar"))))})))))}))},942:function(e,t,a){"use strict";var n=a(40);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(67)),o=a(0);t.default=(0,r.default)((0,o.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit")},949:function(e,t,a){"use strict";var n=a(40);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(67)),o=a(0);t.default=(0,r.default)((0,o.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add")},960:function(e,t,a){"use strict";var n=a(40);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(67)),o=a(0);t.default=(0,r.default)((0,o.jsx)("path",{d:"M19 5v14H5V5zm1.1-2H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9M11 7h6v2h-6zm0 4h6v2h-6zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7z"}),"ListAlt")},974:function(e,t,a){"use strict";var n=a(40);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(67)),o=a(0);t.default=(0,r.default)((0,o.jsx)("path",{d:"M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z"}),"Download")},980:function(e,t,a){"use strict";var n=a(40);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(67)),o=a(0);t.default=(0,r.default)((0,o.jsx)("path",{d:"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m2 14H7v-2h7zm3-4H7v-2h10zm0-4H7V7h10z"}),"Assignment")},993:function(e,t,a){"use strict";var n=a(40);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(67)),o=a(0);t.default=(0,r.default)((0,o.jsx)("path",{d:"M4 7v2c0 .55-.45 1-1 1H2v4h1c.55 0 1 .45 1 1v2c0 1.65 1.35 3 3 3h3v-2H7c-.55 0-1-.45-1-1v-2c0-1.3-.84-2.42-2-2.83v-.34C5.16 11.42 6 10.3 6 9V7c0-.55.45-1 1-1h3V4H7C5.35 4 4 5.35 4 7m17 3c-.55 0-1-.45-1-1V7c0-1.65-1.35-3-3-3h-3v2h3c.55 0 1 .45 1 1v2c0 1.3.84 2.42 2 2.83v.34c-1.16.41-2 1.52-2 2.83v2c0 .55-.45 1-1 1h-3v2h3c1.65 0 3-1.35 3-3v-2c0-.55.45-1 1-1h1v-4z"}),"DataObject")}}]);
//# sourceMappingURL=20.1c92c51b.chunk.js.map