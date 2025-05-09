"use strict";(self.webpackChunkarchihub=self.webpackChunkarchihub||[]).push([[7417],{7417:function(e,t,r){r.r(t);r(65043),r(22505);var n=r(83003),o=(r(50062),r(72378)),a=(r(46020),r(24208),r(11238),r(26240)),i=r(73216),l=(r(43288),r(17135)),s=r(70579);t.default=function(e){(0,n.d4)((function(e){return e.app.user})),(0,a.A)(),(0,i.Zp)();return(0,s.jsx)(o.Ay,{style:{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"flex-start"},children:(0,s.jsx)(o.EL,{style:{padding:10,height:"calc(100vh - 40px)",width:"600px",display:"block",overflow:"auto",placeContent:"flex-start"},children:(0,s.jsx)(l.A,{})})})}},8168:function(e,t,r){var n=r(60436),o=r(5544),a=r(65043),i=r(83003),l=r(85211),s=r(51962),c=r(17392),d=r(15316),u=r(71806),p=r(73460),g=r(10039),f=r(79650),h=r(84882),m=r(19090),b=r(28076),x=r(63336),y=r(35084),j=r(26240),w=r(70579);function k(e){var t=(0,j.A)(),r=(0,i.d4)((function(e){return e.app.isDarkMode})),n=(0,i.d4)((function(e){return e.app.filters})),o=(0,i.wA)(),a=e.view,s=(e.sortOrder,e.sortBy),d=(e.numSelected,e.rowCount,e.onRequestSort,e.headCells);return(0,w.jsx)(h.A,{children:(0,w.jsx)(b.A,{children:d.map((function(e){return(0,w.jsxs)(g.A,{align:e.numeric?"right":"left",padding:e.disablePadding?"none":"normal",style:{color:r?t.palette.grey[400]:t.palette.grey[600],borderBottom:"1px solid ".concat(r?t.palette.grey[800]:t.palette.grey[200])},children:[e.label,e.sortBy&&(0,w.jsx)(c.A,{size:"small",style:{marginLeft:"5px",backgroundColor:s===e.sortBy&&r?t.palette.grey[600]:s===e.sortBy?t.palette.primary.light:r?t.palette.grey[800]:"#f5f5f5",color:s===e.sortBy&&r?t.palette.primary.light:s===e.sortBy?t.palette.primary.main:t.palette.grey[500]},onClick:function(){var t=n[a].sortBy===e.sortBy&&"asc"===n[a].sortOrder?"desc":"asc",r=(0,l.e)(n,a,"sortOrder",t);r=(0,l.e)(r,a,"sortBy",e.sortBy),o((0,l.vm)(r))},children:(0,w.jsx)(y.A,{})})]},e.id)}))})})}function A(e){var t=(0,i.wA)(),r=(0,i.d4)((function(e){return e.app.filters})),n=(0,i.d4)((function(e){return e.app.isDarkMode}));return(0,w.jsx)(m.A,{rowsPerPage:e.perpage,rowsPerPageOptions:[],count:e.total,page:r[e.view]&&e.view?r[e.view].page:e.page,onPageChange:function(n,o){if(e.view){var a=(0,l.e)(r,e.view,"page",o);t((0,l.vm)(a))}else e.setPage(o)},style:{color:n?"white":"black",borderTop:"1px solid ".concat(n?"rgba(255, 255, 255, 0.12)":"rgba(0, 0, 0, 0.12)"),backgroundColor:n?"rgba(0, 0, 0, 0.12)":"rgba(255, 255, 255, 0.12)",borderBottom:"1px solid ".concat(n?"rgba(255, 255, 255, 0.12)":"rgba(0, 0, 0, 0.12)")}})}t.A=function(e){var t=e.sortBy,r=e.sortOrder,l=e.style,c=e.resources,h=e.pagination,m=e.columns,y=e.columnSolver,v=e.page,C=e.setPage,M=e.total,S=e.handleClick,D=e.perpage,B=e.type,I=e.selectedResources,P=e.view,H=a.useState(!1),z=(0,o.A)(H,2),T=z[0],E=(z[1],(0,a.useState)([])),R=(0,o.A)(E,2),N=R[0],O=(R[1],(0,i.d4)((function(e){return e.app.isDarkMode}))),_=(0,j.A)();return(0,w.jsx)(w.Fragment,{children:c.length>0&&(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(d.A,{sx:{width:"100%"},style:l||null,children:(0,w.jsx)(f.A,{children:(0,w.jsxs)(u.A,{sx:{width:"100%"},"aria-labelledby":"tableTitle",size:T?"small":"medium",padding:"none",children:[(0,w.jsx)(k,{numSelected:N.length,headCells:"checkbox"===B?[{id:"checkbox",numeric:!1,disablePadding:!0,label:""}].concat((0,n.A)(m)):m,sortBy:t,sortOrder:r,view:P}),(0,w.jsx)(p.A,{children:c.map((function(e){return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(b.A,{hover:!0,role:"checkbox",tabIndex:-1,style:S?{cursor:"pointer"}:{},children:["checkbox"===B&&(0,w.jsx)(g.A,{component:"th",id:"checkbox",scope:"row",sx:{padding:"10px 10px",borderBottom:"1px solid ".concat(O?_.palette.grey[800]:_.palette.grey[200])},children:(0,w.jsx)(s.A,{onClick:S?function(){return S(e)}:null,color:"primary",checked:!!I&&I.includes(e.id),sx:{color:O?_.palette.grey[400]:_.palette.grey[600],"&.Mui-checked":{color:_.palette.primary.main+" !important"}}})}),m.map((function(t){return(0,w.jsx)(g.A,{component:"th",id:t.destiny,scope:"row",onClick:S&&""!==t.destiny?function(){return S(e)}:null,sx:{padding:"10px 10px",color:O?_.palette.grey[400]:_.palette.grey[600],borderBottom:"1px solid ".concat(O?_.palette.grey[800]:_.palette.grey[200])},children:y(e,t)},t.destiny)}))]},e.id),e.snap&&(0,w.jsx)(b.A,{children:(0,w.jsx)(g.A,{component:"th",scope:"row",sx:{padding:"10px 10px"},children:(0,w.jsx)(x.A,{children:e.snap})})})]})}))}),h&&(0,w.jsx)(A,{view:P,page:v,setPage:C,total:M,perpage:D})]})})})})})}},15089:function(e,t,r){var n=r(5544),o=r(65043),a=r(26240),i=r(83003),l=r(70579);t.A=function(e){var t=(0,a.A)(),r=(0,o.useRef)(null),s=(0,o.useState)(0),c=(0,n.A)(s,2),d=c[0],u=c[1],p=(0,i.d4)((function(e){return e.app.isDarkMode}));return(0,o.useEffect)((function(){!function(){for(var t=5,n=0;n<d;n++)r.current.innerHTML=e.list[n].label,t+=r.current.offsetWidth;r.current.innerHTML=e.list[d].label,r.current.style.left="".concat(t,"px")}()}),[d]),(0,o.useEffect)((function(){if(e.value){var t=e.list.findIndex((function(t){return t.value===e.value}));t>=0&&u(t)}}),[]),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{style:{display:"flex",alignItems:"center",background:p?t.palette.grey[800]:t.palette.grey[100],borderRadius:"50px",marginLeft:"10px",marginRight:"10px",padding:"5px",position:"relative",overflow:"hidden"},children:[(0,l.jsx)("div",{ref:r,style:{position:"absolute",padding:"7px",borderRadius:"50px",cursor:"pointer",background:t.palette.primary.main,color:"transparent",transition:"all 0.25s ease"}}),e.list.map((function(r,n){return(0,l.jsx)("div",{style:{position:"relative",padding:"7px",borderRadius:"50px",cursor:"pointer",color:d===n?"white":t.palette.secondary.contrastText},onClick:function(){u(n),e.onChange&&e.onChange(r)},children:r.label},n)}))]})})}},17135:function(e,t,r){var n=r(5544),o=r(65043),a=r(83003),i=r(86279),l=r(73216),s=r(26240),c=r(41905),d=r(8168),u=r(43845),p=r(55263),g=r(43288),f=r(53171),h=r(58140),m=r(94495),b=r(98787),x=r(15089),y=r(99246),j=r(70579);t.A=function(e){var t=(0,s.A)(),r=(0,y.A)(),w=(0,h.M)().showAlert,k=(0,c.A)((function(e){return{btn_color:{color:"#869bb7 !important",padding:"5px !important",width:"30px !important",height:"30px !important",margin:"0 2px !important",borderRadius:"50%",border:"1px solid #c6d0dd !important","&:hover":{color:"#fff !important",backgroundColor:"#56749a !important"},"& .MuiSvgIcon-root":{width:"14px !important"}},chip_style:{margin:"1px 2px !important",backgroundColor:t.palette.secondary.light+" !important",color:t.palette.primary.dark+" !important",border:"1px solid white !important",transition:"all .3s ease-in-out !important","& svg":{width:"15px !important",marginLeft:"10px !important"},"& path":{fill:t.palette.secondary.main+" !important",transition:"all .3s ease-in-out !important"},"&:hover":{backgroundColor:t.palette.primary.dark+" !important",color:"#fff !important","& path":{fill:"#fff !important"}}},access_chip:{backgroundColor:t.palette.secondary.light+" !important",border:"1px solid "+t.palette.secondary.main+" !important",color:t.palette.secondary.dark+" !important","&.pending":{backgroundColor:t.palette.warning.light+" !important",color:"white !important",borderColor:t.palette.warning.light+" !important"},"&.review":{backgroundColor:t.palette.info.light+" !important",color:"white !important",borderColor:t.palette.info.light+" !important"},"&.rejected":{backgroundColor:t.palette.error.main+" !important",color:"white !important",borderColor:t.palette.error.light+" !important"},"& svg":{marginLeft:"10px !important",width:"15px !important",height:"15px !important",opacity:".5 !important"}}}}))(),A=(0,o.useState)([]),v=(0,n.A)(A,2),C=v[0],M=v[1],S=(0,o.useState)(0),D=(0,n.A)(S,2),B=D[0],I=D[1],P=(0,o.useState)(!0),H=(0,n.A)(P,2),z=H[0],T=H[1],E=(0,o.useState)(0),R=(0,n.A)(E,2),N=R[0],O=R[1],_=(0,o.useState)({label:"En curso",value:"working"}),L=(0,n.A)(_,2),F=L[0],q=L[1],G=(0,l.Zp)();(0,a.d4)((function(e){return e.app.isDarkMode}));(0,o.useEffect)((function(){W()}),[B,F]);var W=function(){M([]),T(!0),i.C(JSON.stringify({status:"working"===F.value?["pending","review","rejected"]:["approved"],page:B,user:e.user?e.user:null})).then((function(e){T(!1),M(e.results),O(e.total)})).catch((function(e){e.json().then((function(t){w("error",e.msg).then((function(){G("/")}))}))}))};return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("div",{style:{padding:5,marginBottom:5,width:"calc(100% - 10px)"},children:(0,j.jsx)(p.A,{style:{minHeight:"auto",margin:5,justifyContent:"center"},children:(0,j.jsx)(x.A,{value:F,list:[{label:r.formatMessage({id:"tasks.working"}),value:"working"},{label:r.formatMessage({id:"tasks.completed"}),value:"completed"}],onChange:function(e){q(e)}})})}),z&&(0,j.jsx)(g.A,{}),0===C.length&&!z&&(0,j.jsx)(f.A,{}),C.length>0&&(0,j.jsx)(d.A,{pagination:!0,resources:C,perpage:10,page:B,setPage:I,total:N,columns:[{destiny:"date",label:r.formatMessage({id:"general.date"})},{destiny:"user",label:r.formatMessage({id:"general.user"})},{destiny:"status",label:r.formatMessage({id:"general.status"})},{destiny:"link",label:""}],columnSolver:function(e,t){return(0,j.jsxs)(j.Fragment,{children:["user"===t.destiny&&(0,j.jsx)("span",{children:e.user}),"status"===t.destiny&&(0,j.jsx)(u.A,{label:m.Y$.find((function(t){return t.value===e.status})).label,size:"small",style:{margin:"2px"},className:"".concat(k.access_chip," ").concat(e.status)}),"link"===t.destiny&&(0,j.jsx)(u.A,{size:"small",icon:(0,j.jsx)(b.A,{}),className:k.chip_style,onClick:function(){e.resourceId&&G("/cataloging/".concat(e.resourceType,"/edit/").concat(e.resourceId)),e.recordId&&G("/file/".concat(e.recordId))}}),"date"===t.destiny&&(0,j.jsx)("span",{children:e.createdAt})]})}})]})}},24208:function(e,t,r){r.r(t),r.d(t,{TarjetaItem:function(){return H}});var n=r(5544),o=r(65043),a=r(73216),i=r(83003),l=r(31445),s=r(19853),c=r(95540),d=r(22505),u=r(749),p=r(96795),g=r(87243),f=r(17339),h=r(97563),m=r(18219),b=r(81551),x=r(21337),y=r(85473),j=r(35475),w=r(6456),k=r(72378),A=r(11238),v=r(26240),C=r(43288),M=r(36910),S=r(18751),D=r(92429),B=r(58140),I=r(99246),P=r(70579),H=function(e){var t=(0,v.A)(),r=(0,i.d4)((function(e){return e.app.isDarkMode})),a=(0,b.A)((function(e){return{card:{marginTop:5,marginBottom:5,backgroundColor:r?t.palette.grey[700]:"white","& .MuiCardHeader-root":{padding:"5px 10px","& .MuiCardHeader-content":{"& .MuiTypography-root":{fontSize:"14px",fontWeight:"normal",color:r?t.palette.grey[300]:t.palette.grey[700]}}}},btn_color:{color:r?t.palette.grey[800]:t.palette.grey[400],backgroundColor:r?t.palette.grey[500]:t.palette.grey[100],padding:5,width:30,height:30,margin:"0 2px",border:"1px solid ".concat(r?t.palette.grey[700]:t.palette.grey[300]),"&:hover":{color:"#fff",backgroundColor:t.palette.primary.main},"& .MuiSvgIcon-root":{width:14}}}}))(),l=(0,o.useState)(!1),s=(0,n.A)(l,2),d=s[0],k=s[1];return(0,P.jsxs)(u.A,{className:a.card,children:[(0,P.jsx)(p.A,{title:e.title,action:(0,P.jsxs)(g.A,{disableGutters:!0,variant:"dense",children:[e.onDuplicate&&(0,P.jsx)(f.A,{className:a.btn_color,size:"small","aria-label":"duplicate",onClick:function(){e.onDuplicate(e.slug)},children:(0,P.jsx)(M.A,{})}),e.onDownload&&(0,P.jsx)(f.A,{className:a.btn_color,size:"small","aria-label":"download",onClick:function(){e.onDownload(e.slug)},children:(0,P.jsx)(S.A,{})}),(0,P.jsx)(j.N_,{to:"/".concat(e.type,"/").concat(e.slug),children:(0,P.jsx)(f.A,{className:a.btn_color,size:"small","aria-label":"settings",children:(0,P.jsx)(c.A,{})})}),(0,P.jsx)(f.A,{className:a.btn_color,size:"small","aria-label":"settings",onClick:function(){e.onDeleted(e.slug)},children:(0,P.jsx)(w.A,{})}),(0,P.jsx)(f.A,{size:"small","aria-label":"settings",onClick:function(){return k(!d)},children:d?(0,P.jsx)(y.A,{}):(0,P.jsx)(x.A,{})})]})}),(0,P.jsx)(h.A,{in:d,timeout:"auto",unmountOnExit:!0,children:(0,P.jsx)(m.A,{children:e.description})})]})};t.default=function(e){(0,a.g)().id;var t=(0,o.useState)([]),r=(0,n.A)(t,2),c=r[0],u=r[1],p=((0,i.d4)((function(e){return e.user})),(0,a.Zp)()),f=(0,v.A)(),h=(0,B.M)().showAlert,m=(0,i.d4)((function(e){return e.app.isDarkMode})),b=(0,I.A)();(0,o.useEffect)((function(){l.DI().then((function(e){u(e)}),(function(e){console.log(e)}))}),[]);var x=function(e){h("confirm",b.formatMessage({id:"cataloging.confirmDelete"})).then((function(t){t&&l.SJ(e).then((function(t){u(c.filter((function(t){return t.slug!==e})))}),(function(e){console.log(e)}))})).catch((function(e){console.log(e)}))};return(0,P.jsx)(k.Ay,{style:{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"flex-start"},children:(0,P.jsxs)(k.EL,{style:{width:"70%",maxWidth:400,display:"block",overflow:"auto",placeContent:"flex-start"},children:[(0,P.jsxs)("div",{style:{padding:10},children:[(0,P.jsx)(g.A,{style:{justifyContent:"space-between",minHeight:"auto",padding:0},children:(0,P.jsx)(A.nA,{startIcon:(0,P.jsx)(d.A,{}),label:b.formatMessage({id:"cataloging.createNew"}),style:{borderRadius:5,backgroundColor:f.palette.success.light,color:f.palette.success.main},onClick:function(){return p("/cataloging/types/new")}})}),(0,P.jsx)(A.nA,{startIcon:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(S.A,{}),(0,P.jsx)(D.A,{})]}),label:b.formatMessage({id:"cataloging.downloadInventory"}),style:{borderRadius:5,backgroundColor:m?f.palette.grey[800]:f.palette.grey[200],color:f.palette.grey[500]},onClick:function(){h("confirm",b.formatMessage({id:"cataloging.confirmDownloadInventory"})).then((function(e){e&&s.Gj("inventoryMaker",JSON.stringify({}),"bulk-types").then((function(e){h("success",e.msg)})).catch((function(e){e.json().then((function(e){h("error",e.msg)}))}))}))}})]}),0===c.length&&(0,P.jsx)(C.A,{}),c.map((function(e,t){return(0,P.jsx)(H,{title:e.name,description:e.description,slug:e.slug,onDeleted:x,type:"cataloging/types"},t)}))]})})}},46020:function(e,t,r){r.d(t,{Jt:function(){return a},O8:function(){return d},UK:function(){return c},hE:function(){return i},lD:function(){return s},yo:function(){return l}});var n=r(88120),o=r(91280);function a(e){var t="/views/"+e,r={method:"GET",headers:new Headers({Authorization:(0,o.g)()}),mode:"cors",cache:"default"};return fetch((0,n.H6)()+t,r).then((function(e){return 200!==e.status?Promise.reject(e):e.json()}))}function i(e){var t="/views/info/"+e,r={method:"GET",headers:new Headers({Authorization:(0,o.g)()}),mode:"cors",cache:"default"};return fetch((0,n.H6)()+t,r).then((function(e){return 200!==e.status?Promise.reject(e):e.json()}))}function l(e,t){var r="/views/"+e,a={method:"PUT",headers:new Headers({Authorization:(0,o.g)(),"Content-Type":"application/json"}),mode:"cors",cache:"default",body:t};return fetch((0,n.H6)()+r,a).then((function(e){return 200!==e.status?Promise.reject(e):e.json()}))}function s(e){var t="/views/"+e,r={method:"DELETE",headers:new Headers({Authorization:(0,o.g)()}),mode:"cors",cache:"default"};return fetch((0,n.H6)()+t,r).then((function(e){return 200!==e.status?Promise.reject(e):e.json()}))}function c(){var e={method:"GET",headers:new Headers({Authorization:(0,o.g)()}),mode:"cors",cache:"default"};return fetch((0,n.H6)()+"/views",e).then((function(e){return 200!==e.status?Promise.reject(e):e.json()}))}function d(e){var t={method:"POST",headers:new Headers({Authorization:(0,o.g)(),"Content-Type":"application/json"}),mode:"cors",cache:"default",body:e};return fetch((0,n.H6)()+"/views",t).then((function(e){return 201!==e.status?Promise.reject(e):e.json()}))}},53171:function(e,t,r){r(65043);var n=r(26240),o=r(94777),a=r(70579);t.A=function(e){var t=(0,n.A)();return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{style:{textAlign:"center",padding:10,width:"100%"},children:(0,a.jsx)(o.A,{style:{fontSize:50,color:t.palette.primary.light}})})})}},72378:function(e,t,r){r.d(t,{EL:function(){return s},WB:function(){return c}});var n=r(89379),o=(r(65043),r(26240)),a=r(81551),i=r(83003),l=r(70579),s=function(e){var t=(0,o.A)(),r=(0,i.d4)((function(e){return e.app.isDarkMode})),s=(0,a.A)((function(e){return{bloque:{"&::-webkit-scrollbar":{width:6,height:2},"&::-webkit-scrollbar-button":{width:10,height:10},"&::-webkit-scrollbar-thumb":{background:t.palette.primary.main,border:"0px none #ffffff",borderRadius:50},"&::-webkit-scrollbar-thumb:hover":{background:t.palette.primary.main},"&::-webkit-scrollbar-thumb:active":{background:t.palette.primary.main},"&::-webkit-scrollbar-track":{background:"rgba(0,0,0,0.1)",border:"0px none #ffffff",borderRadius:50},"&::-webkit-scrollbar-track:hover":{background:"rgba(0,0,0,0.1)"},"&::-webkit-scrollbar-track:active":{background:"rgba(0,0,0,0.1)"}}}}))();return(0,l.jsx)("div",{id:e.id,style:(0,n.A)({width:"100%",height:"calc(100% - 40px)",display:"flex",margin:"10px",borderRadius:"10px",padding:"10px",background:r?t.palette.grey[900]:"white",boxShadow:"0px 0px 1px rgba(0,0,0,0.1)",justifyContent:"center",alignItems:"center",alignContent:"center",flexWrap:"wrap"},e.style),className:s.bloque,onScroll:e.onScroll,children:e.children})},c=function(e){var t=(0,o.A)(),r=(0,a.A)((function(e){return{bloque:{"&::-webkit-scrollbar":{width:6,height:2},"&::-webkit-scrollbar-button":{width:10,height:10},"&::-webkit-scrollbar-thumb":{background:t.palette.grey[500],border:"0px none #ffffff",borderRadius:50},"&::-webkit-scrollbar-thumb:hover":{background:t.palette.grey[500]},"&::-webkit-scrollbar-thumb:active":{background:t.palette.grey[500]},"&::-webkit-scrollbar-track":{background:"rgba(0,0,0,0.1)",border:"0px none #ffffff",borderRadius:50},"&::-webkit-scrollbar-track:hover":{background:"rgba(0,0,0,0.1)"},"&::-webkit-scrollbar-track:active":{background:"rgba(0,0,0,0.1)"}}}}))();return(0,l.jsx)("div",{id:e.id,style:(0,n.A)({padding:10,backgroundColor:t.palette.grey[100],borderRadius:5,color:t.palette.grey[600],height:100,overflow:"auto",width:"100%"},e.style),className:r.bloque,children:e.children})};t.Ay=function(e){var t=e.children,r=e.style;e.onScroll;return(0,l.jsx)("section",{style:(0,n.A)({display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100vh"},r),children:t})}}}]);
//# sourceMappingURL=7417.d552d23f.chunk.js.map