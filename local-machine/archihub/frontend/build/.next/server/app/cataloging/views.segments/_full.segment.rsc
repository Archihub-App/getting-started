1:"$Sreact.fragment"
a:I[27123,[],"default",1]
:HL["/_next/static/media/26d4368bf94c0ec4-s.p.woff2","font",{"crossOrigin":"","type":"font/woff2"}]
:HL["/_next/static/media/e4af272ccee01ff0-s.p.woff2","font",{"crossOrigin":"","type":"font/woff2"}]
:HL["/_next/static/css/b701b8adc5efcd4d.css","style"]
:HL["/_next/static/css/21476c53221a5f5a.css","style"]
:HL["/_next/static/css/27d88c4b70c40249.css","style"]
:HL["/_next/static/css/ba7a18ce0cfa4352.css","style"]
2:T1381,
    (function() {
      try {
        const stored = localStorage.getItem('theme');
        const mode = stored === 'dark' ? 'dark' : 'light';
        const bg = mode === 'dark' ? '#1B1A17' : '#FAF9F8';
        const text = mode === 'dark' ? '#FAF9F8' : '#2C2B28';
        
        const root = document.documentElement;
        root.setAttribute('data-theme', mode);
        root.style.backgroundColor = bg;
        root.style.color = text;
        
        const vars = mode === 'dark'
          ? { 
              'boton-primario': '#E84C6A',
              'boton-primario-hover': '#B42D48',
              'boton-primario-texto': '#FAF9F8',
              'boton-secundario': '#232220',
              'boton-secundario-hover': '#3A2228',
              'boton-destructivo': '#C93B3B',
              'boton-destructivo-fondo': 'rgba(201, 59, 59, 0.15)',
              'boton-nav-texto': '#9B9996',
              'boton-nav-hover-fondo': '#1A1318',
              'boton-nav-hover-texto': '#FAF9F8',
              'boton-nav-activo-fondo': 'rgba(232, 76, 106, 0.3)',
              'boton-nav-activo-texto': '#FAF9F8',
              
              'superficie-base': '#1B1A17',
              'superficie-fondo': '#1B1A17',
              'superficie-tarjeta': '#2C2B28',
              'superficie-hundida': '#232220',
              'superficie-sidebar': '#2D2422',
              
              'acento-primario': '#E84C6A',
              'acento-suave': 'rgba(232, 76, 106, 0.2)',
              'acento-hover': '#B42D48',
              
              'borde-sutil': '#42403D',
              'borde-fuerte': '#5C5A57',
              'borde-acento-suave': '#5C2F38',
              
              'texto-principal': '#FAF9F8',
              'texto-secundario': '#797774',
              'texto-sobre-acento': '#FAF9F8',
              
              'bg-default': '#1B1A17',
              'bg-secondary': '#232220',
              'text-primary': '#FAF9F8',
              'text-secondary': '#9B9996',
              'primary-main': '#E84C6A',
              
              'estado-error': '#C93B3B',
              'estado-warning': '#D4943A',
              'estado-success': '#2D9F6F',
              'estado-info': '#3B7FC9'
            }
          : { 
              'boton-primario': '#E84C6A',
              'boton-primario-hover': '#B42D48',
              'boton-primario-texto': '#FAF9F8',
              'boton-secundario': '#F2F1F0',
              'boton-secundario-hover': '#FEE8EC',
              'boton-destructivo': '#C93B3B',
              'boton-destructivo-fondo': 'rgba(201, 59, 59, 0.11)',
              'boton-nav-texto': '#797774',
              'boton-nav-hover-fondo': '#F2F1F0',
              'boton-nav-hover-texto': '#2C2B28',
              'boton-nav-activo-fondo': 'rgba(232, 76, 106, 0.15)',
              'boton-nav-activo-texto': '#E84C6A',
              
              'superficie-base': '#FAF9F8',
              'superficie-fondo': '#FAF9F8',
              'superficie-tarjeta': '#FFFFFF',
              'superficie-hundida': '#F2F1F0',
              'superficie-sidebar': '#FFFFFF',
              
              'acento-primario': '#E84C6A',
              'acento-suave': '#FEE8EC',
              'acento-hover': '#B42D48',
              
              'borde-sutil': '#E3E2E0',
              'borde-fuerte': '#C4C2BF',
              'borde-acento-suave': '#FCD5DB',
              
              'texto-principal': '#2C2B28',
              'texto-secundario': '#5C5A57',
              'texto-sobre-acento': '#FAF9F8',
              
              'bg-default': '#FAF9F8',
              'bg-secondary': '#F2F1F0',
              'text-primary': '#2C2B28',
              'text-secondary': '#5C5A57',
              'primary-main': '#E84C6A',
              
              'estado-error': '#C93B3B',
              'estado-warning': '#D4943A',
              'estado-success': '#2D9F6F',
              'estado-info': '#3B7FC9'
            };
        
        root.style.setProperty('--spacing-1', '4px');
        root.style.setProperty('--spacing-2', '8px');
        root.style.setProperty('--spacing-3', '12px');
        root.style.setProperty('--spacing-4', '16px');
        root.style.setProperty('--spacing-5', '20px');
        root.style.setProperty('--spacing-6', '24px');
        root.style.setProperty('--spacing-7', '28px');
        root.style.setProperty('--spacing-8', '32px');
        root.style.setProperty('--spacing-10', '40px');
        root.style.setProperty('--spacing-14', '56px');
        root.style.setProperty('--spacing-16', '64px');
        root.style.setProperty('--spacing-20', '80px');

        root.style.setProperty('--radius-sm', '2px');
        root.style.setProperty('--radius-md', '4px');
        root.style.setProperty('--radius-lg', '8px');
        root.style.setProperty('--radius-xl', '12px');

        Object.keys(vars).forEach(function(key) {
          root.style.setProperty('--' + key, vars[key]);
        });
      } catch(e) {}
    })()
  8:X
0:{"P":null,"c":["","cataloging","views"],"q":"","i":false,"f":[[["",{"children":["cataloging",{"children":["views",{"children":["__PAGE__",{},"$undefined","$undefined",4608]},"$undefined","$undefined",4608]},"$undefined","$undefined",4608]},"$undefined","$undefined",4624],[["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/css/b701b8adc5efcd4d.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","link","1",{"rel":"stylesheet","href":"/_next/static/css/21476c53221a5f5a.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","link","2",{"rel":"stylesheet","href":"/_next/static/css/27d88c4b70c40249.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","link","3",{"rel":"stylesheet","href":"/_next/static/css/ba7a18ce0cfa4352.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]],["$","html",null,{"lang":"en","className":"__variable_8b3a0b __variable_c8daab","data-theme":"light","style":{"backgroundColor":"#FAF9F8","color":"#2C2B28"},"suppressHydrationWarning":true,"children":[["$","head",null,{"children":[["$","script",null,{"dangerouslySetInnerHTML":{"__html":"$2"}}],"$L3"]}],"$L4"]}]]}],{"children":["$L5",{"children":["$L6",{"children":["$L7",{},null,false,null]},null,false,"$8"]},null,false,"$8"]},null,false,null],"$L9",false]],"m":"$undefined","G":["$a",[]],"S":true,"h":null,"r":"$undefined","s":"$undefined","a":"$undefined","l":"$undefined","p":"$undefined","d":"$undefined","b":"7w_NDNtiWxgXpLk1notnd"}
c:I[92989,["5592","static/chunks/c15bf2b0-84e7b4fb962d5278.js","1831","static/chunks/bd904a5c-c94b374262cb1742.js","5600","static/chunks/05f6971a-a54841142ca90c7d.js","7330","static/chunks/d3ac728e-74c9d30c515f0c40.js","4935","static/chunks/e37a0b60-8d24feeeb5a0417d.js","7924","static/chunks/e2ce8796-5fcf9274ee65c741.js","529","static/chunks/529-ecc20ce3a290037d.js","8949","static/chunks/8949-5534d136ccd4b7a8.js","2834","static/chunks/2834-00c0dc25b6a2ee69.js","5443","static/chunks/5443-02e2ebce2cc78bfd.js","27","static/chunks/27-332864629ab334b0.js","1526","static/chunks/1526-892dfad7fc3386b1.js","409","static/chunks/409-766c11a90194ed6e.js","5350","static/chunks/5350-fa4e3e85a9aee46b.js","8735","static/chunks/8735-d6e074694598bb7a.js","4005","static/chunks/4005-42bb7eabec36abc6.js","6871","static/chunks/6871-10ea1f3c1961ddf5.js","6753","static/chunks/6753-c9cbb9338c2fc0f6.js","5780","static/chunks/5780-0f06baafe9a9ced1.js","7177","static/chunks/app/layout-08547b19ada02053.js"],"Providers"]
d:I[57121,[],""]
e:I[74581,[],""]
f:I[61304,[],"ClientPageRoot"]
10:I[68655,["5592","static/chunks/c15bf2b0-84e7b4fb962d5278.js","1831","static/chunks/bd904a5c-c94b374262cb1742.js","5600","static/chunks/05f6971a-a54841142ca90c7d.js","7330","static/chunks/d3ac728e-74c9d30c515f0c40.js","4935","static/chunks/e37a0b60-8d24feeeb5a0417d.js","7924","static/chunks/e2ce8796-5fcf9274ee65c741.js","529","static/chunks/529-ecc20ce3a290037d.js","8949","static/chunks/8949-5534d136ccd4b7a8.js","2834","static/chunks/2834-00c0dc25b6a2ee69.js","5443","static/chunks/5443-02e2ebce2cc78bfd.js","27","static/chunks/27-332864629ab334b0.js","1526","static/chunks/1526-892dfad7fc3386b1.js","409","static/chunks/409-766c11a90194ed6e.js","5350","static/chunks/5350-fa4e3e85a9aee46b.js","8500","static/chunks/8500-3eee7632a01023a9.js","6753","static/chunks/6753-c9cbb9338c2fc0f6.js","5780","static/chunks/5780-0f06baafe9a9ced1.js","4247","static/chunks/app/cataloging/views/page-61858071ac5040ce.js"],"default"]
13:I[90484,[],"OutletBoundary"]
14:"$Sreact.suspense"
16:I[90484,[],"ViewportBoundary"]
18:I[90484,[],"MetadataBoundary"]
b:T616,
    // --- ATLAS CORE INITIALIZATION ---
    const _atlas_core_state_0 = "ATENCIÓN: Este código es propiedad privada y exclusiva de BitSol.";
    const _atlas_core_state_1 = "ADVERTENCIA: Queda estrictamente prohibida la desofuscación, ingeniería inversa o copia de este código.";
    const _atlas_core_state_2 = "PROPIEDAD INTELECTUAL: El uso no autorizado de este script constituye una violación a los derechos de autor de BitSol.";
    const _atlas_core_state_3 = "MONITOREO: Cualquier intento de manipulación o alteración está prohibido y será considerado una infracción.";
    const _atlas_core_state_4 = "SECURITY NOTICE: This code is private property of BitSol. Do not attempt to deobfuscate.";
    const _atlas_core_state_5 = "AVISO LEGAL: Todo el código fuente aquí presente pertenece a BitSol y está protegido por ley.";
    const _atlas_core_state_6 = "SISTEMA ATLAS: Algoritmos de rastreo y visualización protegidos bajo licencia privada de BitSol.";
    const _atlas_core_state_7 = "RESTRICCIÓN: Queda prohibida la reproducción parcial o total sin el consentimiento escrito de BitSol.";
    // ---------------------------------
    
    window._atlas_state_0 = _atlas_core_state_0;
    window._atlas_state_1 = _atlas_core_state_1;
    window._atlas_state_2 = _atlas_core_state_2;
    window._atlas_state_3 = _atlas_core_state_3;
    window._atlas_state_4 = _atlas_core_state_4;
    window._atlas_state_5 = _atlas_core_state_5;
    window._atlas_state_6 = _atlas_core_state_6;
    window._atlas_state_7 = _atlas_core_state_7;
  3:["$","script",null,{"dangerouslySetInnerHTML":{"__html":"$b"}}]
4:["$","body",null,{"style":{"backgroundColor":"var(--superficie-base, #FAF9F8)","color":"var(--texto-principal, #2C2B28)","minHeight":"100vh"},"children":["$","$Lc",null,{"children":["$","$Ld",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$Le",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":{"fontFamily":"system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":404}],["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]]}]}]],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]}]}]
5:["$","$1","c",{"children":[null,["$","$Ld",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$Le",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}]
6:["$","$1","c",{"children":[null,["$","$Ld",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$Le",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}]
7:["$","$1","c",{"children":[["$","$Lf",null,{"Component":"$10","serverProvidedParams":{"searchParams":{},"params":{},"promises":["$@11","$@12"]}}],null,["$","$L13",null,{"children":["$","$14",null,{"name":"Next.MetadataOutlet","children":"$@15"}]}]]}]
9:["$","$1","h",{"children":[null,["$","$L16",null,{"children":"$L17"}],["$","div",null,{"hidden":true,"children":["$","$L18",null,{"children":["$","$14",null,{"name":"Next.Metadata","children":"$L19"}]}]}],["$","meta",null,{"name":"next-size-adjust","content":""}]]}]
8:C
11:{}
12:"$7:props:children:0:props:serverProvidedParams:params"
17:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1"}]]
1a:I[86869,[],"IconMark"]
15:null
19:[["$","link","0",{"rel":"icon","href":"/favicon.ico?b329e8f1373068ca","type":"image/x-icon","sizes":"16x16"}],["$","$L1a","1",{}]]
