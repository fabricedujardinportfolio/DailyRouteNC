import{d as b,r as g,a as p,b as n,e as l,w as u,Y as C,o as h,f as c,Z as j,_ as N,$ as z,a0 as S,a1 as D,B as _,a2 as P,C as w,c as k,n as R,F as L,h as v,t as M,a3 as O,a4 as B}from"./group-user-dzeccZHG.js";import{_ as V,a as E,b as G}from"./group-dashboard-Cxx0jXmU.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const T={class:"min-h-screen bg-gray-100"},F={class:"bg-gradient-to-r from-blue-600 to-blue-800 text-white"},H={class:"container mx-auto px-4 py-16"},U={class:"flex gap-4"},I=b({__name:"Home",setup(a){return(i,e)=>{const s=g("router-link");return h(),p("div",T,[n("header",F,[n("div",H,[e[2]||(e[2]=n("h1",{class:"text-4xl md:text-6xl font-bold mb-6"}," Voyagez ensemble en Nouvelle-Calédonie ",-1)),e[3]||(e[3]=n("p",{class:"text-xl mb-8"}," Partagez vos trajets quotidiens et économisez ensemble ",-1)),n("div",U,[l(s,{to:"/register",class:"bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"},{default:u(()=>e[0]||(e[0]=[c(" Commencer ")])),_:1}),l(s,{to:"/search-routes",class:"border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"},{default:u(()=>e[1]||(e[1]=[c(" Rechercher un trajet ")])),_:1})])])]),e[4]||(e[4]=C('<section class="py-16"><div class="container mx-auto px-4"><h2 class="text-3xl font-bold text-center mb-12">Comment ça marche ?</h2><div class="grid md:grid-cols-3 gap-8"><div class="text-center p-6"><div class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"><i class="text-2xl text-blue-600">🚗</i></div><h3 class="text-xl font-semibold mb-2">Conducteurs</h3><p>Définissez vos trajets quotidiens et gagnez des revenus supplémentaires</p></div><div class="text-center p-6"><div class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"><i class="text-2xl text-blue-600">👥</i></div><h3 class="text-xl font-semibold mb-2">Passagers</h3><p>Trouvez des trajets qui correspondent à vos besoins et économisez</p></div><div class="text-center p-6"><div class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"><i class="text-2xl text-blue-600">🎫</i></div><h3 class="text-xl font-semibold mb-2">Jetons</h3><p>Achetez des jetons pour réserver vos trajets en toute simplicité</p></div></div></div></section>',1))])}}}),J={class:"min-h-screen bg-gray-100 py-12"},K=b({__name:"CreateRoute",setup(a){return(i,e)=>(h(),p("div",J,e[0]||(e[0]=[C('<div class="max-w-7xl mx-auto sm:px-6 lg:px-8"><div class="bg-white overflow-hidden shadow-sm sm:rounded-lg"><div class="p-6"><h1 class="text-2xl font-semibold text-gray-900 mb-6">Créer un Trajet</h1><div class="space-y-6"><p>Page en construction...</p></div></div></div></div>',1)])))}}),W=[{path:"/",name:"Home",component:I},{path:"/dashboard",name:"Dashboard",component:V,meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:z,meta:{requiresGuest:!0}},{path:"/register",name:"Register",component:S,meta:{requiresGuest:!0}},{path:"/profile",name:"Profile",component:D,meta:{requiresAuth:!0}},{path:"/create-route",name:"CreateRoute",component:K,meta:{requiresAuth:!0,requiresDriver:!0}},{path:"/search-routes",name:"SearchRoutes",component:E,meta:{requiresAuth:!0}},{path:"/tokens-shop",name:"TokensShop",component:G,meta:{requiresAuth:!0}}],q=j({history:N(),routes:W});q.beforeEach((a,i,e)=>{const s=_(),t=a.matched.some(m=>m.meta.requiresAuth),o=a.matched.some(m=>m.meta.requiresGuest),d=a.matched.some(m=>m.meta.requiresDriver);t&&!s.isAuthenticated?e("/login"):o&&s.isAuthenticated||d&&!s.isDriver?e("/dashboard"):e()});const Y={class:"bg-white shadow-sm"},Z={class:"container mx-auto px-4"},Q={class:"flex justify-between items-center h-16"},X={key:1,class:"relative"},ee={key:0,class:"absolute right-0 mt-2 w-full md:w-auto bg-white rounded-md shadow-lg py-1 z-[100]"},te=b({__name:"NavBar",setup(a){const i=P(),e=_(),s=w(!1),t=w(!1),o=k(()=>e.isAuthenticated),d=k(()=>{var f;return((f=e.user)==null?void 0:f.name)||"Mon compte"}),m=()=>{s.value=!s.value},A=()=>{t.value=!t.value},$=async()=>{try{await e.logout(),t.value=!1,i.push("/")}catch(f){console.error("Erreur lors de la déconnexion:",f)}};return(f,r)=>{const x=g("router-link");return h(),p("nav",Y,[n("div",Z,[n("div",Q,[l(x,{to:"/",class:"font-bold text-xl text-blue-600"},{default:u(()=>r[0]||(r[0]=[c(" DailyRouteNC ")])),_:1}),n("button",{onClick:m,class:"md:hidden text-gray-600 hover:text-blue-600 focus:outline-none"},r[1]||(r[1]=[n("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16m-7 6h7"})],-1)])),n("div",{class:R([{hidden:!s.value,block:s.value},"absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none z-10 md:flex md:items-center space-y-4 md:space-y-0 md:space-x-4"])},[l(x,{to:"/search-routes",class:"block text-gray-600 hover:text-blue-600 px-4 py-2 md:px-3 md:py-2"},{default:u(()=>r[2]||(r[2]=[c(" Rechercher ")])),_:1}),l(x,{to:"/tokens-shop",class:"block text-gray-600 hover:text-blue-600 px-4 py-2 md:px-3 md:py-2"},{default:u(()=>r[3]||(r[3]=[c(" Acheter des jetons ")])),_:1}),o.value?v("",!0):(h(),p(L,{key:0},[l(x,{to:"/login",class:"block text-gray-600 hover:text-blue-600 px-4 py-2 md:px-3 md:py-2"},{default:u(()=>r[4]||(r[4]=[c(" Connexion ")])),_:1}),l(x,{to:"/register",class:"block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 md:px-3 md:py-2"},{default:u(()=>r[5]||(r[5]=[c(" S'inscrire ")])),_:1})],64)),o.value?(h(),p("div",X,[n("button",{onClick:A,class:"flex items-center space-x-2 text-gray-600 hover:text-blue-600 px-4 py-2 md:px-3 md:py-2"},[n("span",null,M(d.value),1),r[6]||(r[6]=n("span",{class:"text-xs"},"▼",-1))]),t.value?(h(),p("div",ee,[l(x,{to:"/profile",class:"block px-4 py-2 text-gray-700 hover:bg-gray-100"},{default:u(()=>r[7]||(r[7]=[c(" Mon profil ")])),_:1}),n("button",{onClick:$,class:"block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"}," Déconnexion ")])):v("",!0)])):v("",!0)],2)])])])}}}),se=(a,i)=>{const e=a.__vccOpts||a;for(const[s,t]of i)e[s]=t;return e},oe=se(te,[["__scopeId","data-v-02ca7e93"]]),re={class:"min-h-screen bg-gray-50"},ne=b({__name:"App",setup(a){return(i,e)=>{const s=g("router-view");return h(),p("div",re,[l(oe),l(s)])}}}),y=O(ne);y.use(B());y.use(q);const ae=_();ae.initAuthListener();y.mount("#app");
