"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[23884],{874261:(e,t,n)=>{n.d(t,{Z:()=>r}),n(441143);var a=n(785893);class i{static factory(e){return e instanceof i?e:new i(String(e))}constructor(e){this._private_safe_value=e.trim().replace(">",">").replace("<","<").replace("&","&").replace('"','"').replace("'","'")}toString(){return this._private_safe_value}}function r(e){let{css:t,unsafeCSS:n,...r}=e,l=String(t||"")||n||"",o=!!l;return o?(0,a.jsx)("style",{...r,dangerouslySetInnerHTML:{__html:String(i.factory(l))}}):null}},798198:(e,t,n)=>{n.d(t,{CC:()=>i,Ll:()=>l,XF:()=>r});let a=(e,t,n)=>({x:Math.floor(e*Math.cos(n)),y:Math.floor(t*Math.sin(n))}),i=(e,t)=>a(t/2,e/2,2*Math.random()*Math.PI),r=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,l=e=>["@-webkit-keyframes","@keyframes"].map(t=>e.map(e=>t+" "+e).join("\n")).join("\n")},865173:(e,t,n)=>{n.d(t,{Z:()=>i,v:()=>a});let a=()=>"undefined"!=typeof navigator&&"getInstalledRelatedApps"in navigator;async function i(){if(!a())return[];try{let e=await navigator.getInstalledRelatedApps();return e}catch(e){return[]}}},463310:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(965533),i=n(98736),r=n(799665);let l=(e,t)=>{null!=t&&t.disableOriginCheck||(0,r.Z)(e)||(e="/",(0,i.My)("url_reset")),(0,a.Z)(e)}},777610:(e,t,n)=>{n.d(t,{Q:()=>d,Z:()=>u});var a=n(667294),i=n(682492),r=n.n(i),l=n(563962),o=n(788241),s=n(282802);function d(e,t){let{setViewContextData:n}=(0,o.sV)(),{requestIdentifier:i}=(0,s.B)(),d=(0,l.Z)(),{viewData:u}=(0,o.SU)();(0,a.useEffect)(()=>{if(e){var t;n({viewType:null!==(t=e.view_type)&&void 0!==t?t:1,viewParameter:e.view_parameter,viewData:e.view_data?r()(u,e.view_data):r()({},u),component:e.component,element:e.element,objectIdStr:e.object_id_str,auxData:e.aux_data,clientTrackingParams:e.clientTrackingParams}),d({...e,event_type:13,request_identifier:i})}},[t])}function u(e){let{children:t,log:n}=e;return d(n),t||null}},402833:(e,t,n)=>{n.d(t,{g:()=>l,t:()=>r});var a=n(667294);let i=(0,a.createContext)(null),r=i.Provider,l=()=>(0,a.useContext)(i)},550140:(e,t,n)=>{n.d(t,{UZ:()=>d,Vg:()=>s,ZP:()=>u});var a=n(667294),i=n(883119),r=n(549201),l=n(272109),o=n(785893);let s=200,d=({deviceType:e,hiding:t,visible:n})=>{let a="desktop"===e,i=0,r=a?"translateY(200px)":"translateY(-200px)",l="opacity 0.1s ease-in-out",o="hidden";return n&&!t&&(i=1,r="translateY(0)",l="all 0.7s cubic-bezier(.19, 1.15, .48, 1)",o="visible"),n&&t&&(r="scale(1.1)",l="opacity transform 0.2s"),{opacity:i,pointerEvents:"auto",position:"relative",marginTop:a?10:0,transform:r,transition:l,visibility:o}};function u({_dangerouslySetThumbnail:e,_dangerouslySetPrimaryAction:t,text:n,primaryAction:u,dismissButton:c,helperLink:p,thumbnail:_,type:m,dataTestId:h,duration:w=2e3,onHide:v,href:f,onClick:g,openNewPage:y,imageUrl:b}){var k;let x;let S=(0,r.ZP)(),[Z,T]=(0,a.useState)(!1),[E,P]=(0,a.useState)(!1),L=(0,a.useRef)(),C=()=>{T(!0),L.current=setTimeout(v,s)},A=()=>{L.current=setTimeout(C,w)},j=()=>{L.current&&clearTimeout(L.current)};(0,l.Z)(()=>(setTimeout(()=>P(!0),100),A(),j)),b&&(x={image:(0,o.jsx)(i.Ee,{alt:"string"==typeof n?n:`${n[0]} ${n[1]}`,fit:"cover",naturalHeight:1,naturalWidth:1,src:b})});let R=(0,o.jsx)(i.FN,{_dangerouslySetThumbnail:e,_dangerouslySetPrimaryAction:t,primaryAction:u,text:n,thumbnail:null!==(k=x)&&void 0!==k?k:_,type:m,dismissButton:c,helperLink:p}),{marginTop:M,opacity:D,pointerEvents:I,position:U,transform:N,transition:O,visibility:B}=d({deviceType:S,hiding:Z,visible:E});return(0,o.jsx)(i.xu,{dangerouslySetInlineStyle:{__style:{transform:N,transition:O,visibility:B,pointerEvents:I}},"data-test-id":null!=h?h:"toast",onMouseEnter:j,onMouseLeave:A,opacity:D,position:U,marginTop:M,display:"flex",children:f?(0,o.jsx)(i.Tg,{href:f,onTap:({event:e,dangerouslyDisableOnNavigation:t})=>{f.startsWith("#")&&(e.preventDefault(),t()),null==g||g(e)},target:y?"blank":null,rounding:"pill",children:R}):R})}},870243:(e,t,n)=>{n.d(t,{qE:()=>o,u_:()=>s.ZP});var a=n(883119),i=n(785893);let r=(e,t)=>{let n=null==e?void 0:e.includes("images/user/default");return!!(n&&t)};function l({accessibilityLabel:e,name:t,outline:n,size:l,src:o,verified:s}){return(0,i.jsx)(a.qE,{accessibilityLabel:e,name:t,outline:n,size:l,src:r(o,t)?void 0:o,verified:s})}l.displayName="Avatar";let o=l;var s=n(88622);n(550140)},24286:(e,t,n)=>{n.d(t,{$H:()=>l,$q:()=>g,D6:()=>d,KN:()=>b,Lo:()=>i,OS:()=>_,P2:()=>w,Wv:()=>y,ZZ:()=>c,g5:()=>p,jC:()=>o,lX:()=>h,nW:()=>m,oX:()=>v,qG:()=>f,tG:()=>r,yF:()=>a,yc:()=>u,yt:()=>s});let a=236,i=2*a/3,r=175,l=24,o=4,s=8,d=2,u=2,c=14,p=16,_=5,m=12,h=16,w=24,v=16,f=-1,g=(e=!1,t=!1)=>e?t?h:m:w,y=({contentVisibleItemCount:e,gap:t,width:n})=>e||n?(n-(e-1)*t)/e:a,b=(e,t,n,a,i=c)=>{let r=e+i,l=`
@media (min-width: ${t*r}px) and (max-width: ${(n+1)*r-1}px) {
  ${a}
}
`;return l}},993869:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var a=n(883119),i=n(24286),r=n(110417),l=n(319689),o=n(282802),s=n(785893);let d=({children:e,dataLayoutShiftBoundaryId:t,hasFixedHeader:n=!1,hasGutter:d=!0,height:u,showKeychainError:c=!1,useViewport:p=!1})=>{let _=(0,o.B)(),m=(0,r.jd)(_.userAgent.platform)?r.Vf:0;return(0,s.jsx)(a.xu,{"data-layout-shift-boundary-id":t||"PageContainer",height:p?`calc(100vh - ${m}px)`:u,paddingX:d?i.D6:void 0,paddingY:n||c?void 0:3,children:(0,s.jsx)(l.C,{value:!!d,children:e})})}},319689:(e,t,n)=>{n.d(t,{C:()=>r,V:()=>l});var a=n(667294);let i=(0,a.createContext)(!1),r=i.Provider,l=()=>(0,a.useContext)(i)},710197:(e,t,n)=>{n.d(t,{Z:()=>i});let a=e=>{let t=e.replace(/-/g,"_");if(t.startsWith("es"))return"es_LA";if(t.startsWith("ar"))return"ar_AR";switch(t){case"de":return"de_DE";case"fr":return"fr_FR";case"it":return"it_IT";case"ja":return"ja_JP";case"nl":return"nl_NL";case"tr":return"tr_TR";case"en_AU":return"en_US";default:return t}},i=e=>`//connect.facebook.net/${a(e)}/sdk.js`},950861:(e,t,n)=>{n.d(t,{Ny:()=>c,ZP:()=>_,eD:()=>h,lp:()=>m,nY:()=>w});var a=n(463310),i=n(675689),r=n(860438),l=n(837792),o=n(98736),s=n(198541),d=n(911386),u=n(619277);let c=Object.freeze({SOFT_BANNED:0,RATE_LIMITED:1,LOGIN_ASSISTANCE:2,PASSWORD_RESET_SENT:3,PREVENT_FACEBOOK_REGISTER:4,PREVENT_GOOGLE_REGISTER:5,SUSPENDED:6});class p{static defaultLoginRedirectUrl(){return window.location.pathname===l.lfe||window.location.pathname===l.ZEf||window.location.pathname.startsWith(l.rOJ)?"/":window.location.pathname+window.location.search}static defaultSocialLoginRedirectUrl(){return window.location.pathname.startsWith(l.rOJ)?"/":window.location.pathname}static isExceedRecaptchaLocalLimit(){let e=r.Z.getItem(u.kl);if(e&&e.indexOf("|")>-1){let t=e.split("|");return 3===t.length&&new Date().getTime()/1e3-parseInt(t[0],10)<=3600}return!1}static updateRecaptchaTimeStamp(){let e=r.Z.getItem(u.kl),t=[];e&&3===(t=e.split("|")).length&&t.shift();let n=(new Date().getTime()/1e3).toString();t.push(n);let a=t.join("|");r.Z.setItem(u.kl,a)}static isFullyLoggedIn(e,t){return e&&t===i.Z.DEFAULT}static handleRedirect(e){if(!e){e="/";let t=(0,d.Z)();if(t){let n=t.next;n&&(e=n,delete t.next),e=(0,s.Z)(e,t)}}(0,a.Z)(e)}static handleRedirectWithFallbackWindowLocation(){this.handleRedirect(this.defaultLoginRedirectUrl())}static handleSignupRedirect(e,t){r.Z.setItem(u.F6,Date.now()),!t&&e&&"/"!==e?p.handleRedirect(e):p.handleRedirect("/")}static storeLoginCredentialsToBrowser(e){let t=window.navigator.credentials;if(t&&e.username_or_email)try{let n=new window.PasswordCredential({id:e.username_or_email,password:e.password});t.store(n).then(()=>{(0,o.My)("navigatorCredentials.store.success")})}catch(e){(0,o.My)("navigatorCredentials.store.error")}}static handleLoginMfa(e,t,n){(0,o.My)("multi_step_login"),p.storeLoginCredentialsToBrowser(e),n?n(e,t):(0,o.My)("unauth.login.error.CLIENT_ERROR.null_mfa_handler")}}let _=p;function m(e){return e.facebook_id?"facebook":e.google_open_id_token?"google_one_tap":e.line_id_token?"line":e.username_or_email?"email":"other"}function h(e){return e.mfa_token?"mfa_token":e.mfa_resend?"mfa_resend":m(e)}function w(e){return e.facebook_id?"facebook":e.google_open_id_token?"google":e.username_or_email?"email":"other"}},466946:(e,t,n)=>{n.d(t,{l:()=>r,r:()=>l});var a=n(667294);let i=(0,a.createContext)(null),r=()=>(0,a.useContext)(i),l=i.Provider},951599:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(388011),i=n(245410),r=n(282802),l=n(868489),o=n(352865),s=n(185803),d=n(785893);function u({children:e,invite_code:t}){let{isAuthenticated:n,isBot:l,unauthId:d,userAgent:{platform:u,raw:c}}=(0,r.B)(),{logContextEvent:p}=(0,a.v)(),{checkExperiment:_}=(0,i.F)(),m=async(e,a,i)=>{p({component:14347,element:13582,event_type:700,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:a}}),(0,s.Z)({isAuthenticated:n,checkExperiment:_,deeplinkUri:e,fallbackUrl:i,invite_code:t,logContextEvent:p,platform:u,redirectToLite:(0,o.Rp)({isBot:l,platform:u,userAgent:c}),unauthId:d,userAgent:c,app_upsell_type:a})};return e(m)}let c=e=>(0,d.jsx)(l.ty,{children:t=>(0,d.jsx)(u,{...e,invite_code:t})});c.displayName="DeepLinkNavigator";let p=c},460914:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(883119),i=n(785893);function r({children:e,onMouseEnter:t,onMouseLeave:n,onTouch:r,rounding:l,fullWidth:o=!1,pressState:s="none",accessibilityLabel:d,role:u}){let c=(Array.isArray(s)?s:[s]).includes("compress");return(0,i.jsx)(a.iP,{fullWidth:o,onMouseEnter:t&&(({event:e})=>t(e)),onMouseLeave:n&&(({event:e})=>n(e)),onTap:r&&(({event:e})=>r(e)),rounding:l,tapStyle:c?"compress":"none",accessibilityLabel:d,role:u,children:e})}},199999:(e,t,n)=>{n.d(t,{D:()=>i,a:()=>r});var a=n(583592);let{Provider:i,useMaybeHook:r}=(0,a.Z)("unauthPageWrapperContext")},700453:(e,t,n)=>{n.d(t,{B:()=>h,Z:()=>w});var a=n(667294),i=n(616550),r=n(40660),l=n(388011),o=n(788241),s=n(988014),d=n(282802),u=n(98736),c=n(618569),p=n(799006),_=n(951599),m=n(785893);let h=(e,t)=>"/"===e.pathname?"/":(0,s.am)(e)&&t?`board/${e.pathname.substr(1)}`:e.pathname.substr(1);function w({children:e,componentType:t,app_upsell_type:n}){let s=(0,i.useLocation)(),{flushContextEvents:w,logContextEvent:v}=(0,l.v)(),{viewType:f,viewParameter:g}=(0,o.SU)(),y=(0,c.Z)(),{userAgent:{platform:b}}=(0,d.B)();(0,a.useEffect)(()=>{y({action:"view",item:"download-button",within:n})},[s,n,y]);let k=(0,a.useRef)(!1);(0,a.useEffect)(()=>{f&&202!==f?(v({component:t||13106,element:10308,event_type:9976,view_type:f,view_parameter:g,aux_data:{app_upsell_type:n,app_upsell_is_dupe:k.current}}),k.current=!0):r.Z.increment("webapp.track_app_upsell_viewed_invalid_parameters",1,{component:t,view_type:f,view_parameter:g,app_upsell_type:n,app_upsell_is_dupe:k.current})},[t,v,g,f,n]);let x=(0,p.Z)();return(0,a.useEffect)(()=>{x||(0,u.My)(`mweb.app_upsell.forbidden_upsell.${n}`)},[x,n]),(0,m.jsx)(_.Z,{children:a=>e({handleOpenApp:e=>{if(y({action:"click",item:"download-button",within:n}),(0,u.NC)("press_open_app",!0),v({component:t||13106,element:10308,event_type:102,view_type:f||202,view_parameter:g,aux_data:{app_upsell_type:n}}),v({component:t||13106,element:10308,event_type:9977,view_type:f||202,view_parameter:g,aux_data:{app_upsell_type:n}}),w(!0),a){var i;v({component:t||13106,element:10308,event_type:1701,view_type:f||202,view_parameter:g,aux_data:{app_upsell_type:n}}),a(null!==(i=null==e?void 0:e.deepLinkUri)&&void 0!==i?i:h(s,"android"===b),n)}}})})}},799006:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(702664);let i=()=>(0,a.useSelector)(({session:{canUseNativeApp:e}})=>e)},352865:(e,t,n)=>{n.d(t,{G3:()=>u,Rp:()=>d,kp:()=>o});var a=n(736409),i=n(611756),r=n(173085);let l=14*a.F4,o=(e,t)=>{let n=function(){let e=Date.now(),t=Number((0,i.qn)("appUpsell")),n=Number((0,i.qn)("firstUpsellTime")),a=!!(0,r.qn)("showedAppUpsellCurrentSession");return{currentTime:e,firstUpsellTime:n,lastUpsellTime:t,showedAppUpsellCurrentSession:a}}();return e?function(e,t,n){let{currentTime:a,firstUpsellTime:r,lastUpsellTime:o,showedAppUpsellCurrentSession:s}=e;return(n=n||l,!r||a<r+t)?!s:a-o>n&&((0,i.L_)("firstUpsellTime"),!0)}(n,a.F4):function(e,t){let{currentTime:n,lastUpsellTime:a}=e;return t=t||l,!a||n-a>t}(n,t)},s=e=>{e=e.toLowerCase();let t=e.match(/android\s([0-9\.]*)/i);return t?t[1]:void 0},d=({isBot:e,platform:t,userAgent:n})=>{try{return!e&&"android"===t&&7>parseFloat(s(n))}catch(e){return!1}},u=e=>(e.startsWith("zh")||e.startsWith("ar")?e:e.slice(0,2)).toUpperCase()},185803:(e,t,n)=>{n.d(t,{Z:()=>_});var a=n(40660),i=n(865173),r=n(739425);let l="http://play.google.com/store/apps/details?id=com.pinterest",o=["access_token","new_password","new_password_confirm","password","next"],s=(e,t)=>t?(0,r.ru)(e,{invite_code:t}):e,d=(e,t,n)=>{if("ios"===t&&"string"==typeof e&&e.startsWith("discover/article/")){let t=e.split("/")[2];e=`discover_article/${t}/?is_deeplink=1`}return("string"==typeof e&&"shopping/"===e&&(e="?is_deeplink=1"),"string"==typeof e)?s(e,n):"ios"===t||"ipad"===t?s(e.iOS,n):"android"===t?s(e.android,n):null},u=({deeplinkUri:e,invite_code:t,platform:n,fallbackUrl:a,unauthId:i,app_upsell_type:l})=>({deeplink_path:d(e,n,t),current_page_url:(0,r.Gw)("undefined"!=typeof window?window.location.href:"",o),install_id:i,utm_source:140,utm_medium:2152,app_upsell_type:l,...a?{af_r:a}:null}),c=({deeplinkUri:e,invite_code:t,platform:n,unauthId:a,app_upsell_type:i})=>{let l=JSON.stringify({deeplink_path:d(e,n,t),current_page_url:(0,r.Gw)("undefined"!=typeof window?window.location.href:"",o),install_id:a}),s=(0,r.XP)({utm_source:"mweb",utm_medium:"upsell",utm_content:l,app_upsell_type:i});return{referrer:s}},p=({unauthId:e,app_upsell_type:t})=>{let n=(0,r.XP)({utm_source:"mweb",utm_medium:"upsell",utm_campaign:"twa",utm_content:e,app_upsell_type:t});return{referrer:encodeURI(n)}},_=({isAuthenticated:e,checkExperiment:t,deeplinkUri:n,fallbackUrl:o,invite_code:s,logContextEvent:d,platform:_,redirectToLite:m,unauthId:h,userAgent:w,app_upsell_type:v})=>{null==d||d({component:14347,element:13582,event_type:701,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:v}});let f="https://pinterest.onelink.me/TVSr/21e04bfd",g=null==t?void 0:t(e?"mweb_auth_apple_app_store_custom_page_referral":"mweb_unauth_apple_app_store_custom_page_referral").group;switch(g){case"enabled_1":f="https://pinterest.onelink.me/TVSr/d47vxerq";break;case"enabled_2":f="https://pinterest.onelink.me/TVSr/hhstj28i";break;case"enabled_3":f="https://pinterest.onelink.me/TVSr/b16kbfgq";break;case"enabled_4":f="https://pinterest.onelink.me/TVSr/nfh3eyy2";break;case"enabled_5":f="https://pinterest.onelink.me/TVSr/elsthgd7"}if(n){let g=u({isAuthenticated:e,deeplinkUri:n,fallbackUrl:o,invite_code:s,platform:_,unauthId:h,userAgent:w,app_upsell_type:v});if(a.Z.increment("mweb.deeplink",1,{platform:_}),s&&a.Z.increment("mweb.deeplink.invite_code",1),a.Z.increment("mweb.deeplink.unauthId",1,{withUnauthId:!!h}),m){a.Z.increment("mweb.deeplink.lite_link",1),null==d||d({component:14347,element:13582,event_type:14540,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:v}});let e=p({unauthId:h,app_upsell_type:v});window.location.href=(0,r.ru)("http://play.google.com/store/apps/details?id=com.pinterest.twa",e)}else if("android"===_){let e=c({deeplinkUri:n,invite_code:s,platform:_,unauthId:h,app_upsell_type:v});(0,i.v)()?(0,i.Z)().then(n=>{if(n.length>0){let e=(0,r.ru)(window.location.href,g),n=null==t?void 0:t("mweb_auth_deep_link_to_android_app_change").group;if("enabled_self"===n)window.open(e,"_self");else if("enabled_location"===n)window.location.href=e;else{let t=window.open(e);t||null==d||d({component:14347,element:13582,event_type:702,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:v}})}}else null==d||d({component:14347,element:13582,event_type:14538,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:v}}),window.location.href=(0,r.ru)(l,e)}).catch(()=>{a.Z.increment("mweb_android.deeplink.playStore.error",1)}):(null==d||d({component:14347,element:13582,event_type:14538,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:v}}),window.location.href=(0,r.ru)(l,e))}else{if(a.Z.increment("mweb.deeplink.appsflyer_link",1),"ios"===_&&"undefined"!=typeof window&&window.location.href.includes("show_yip_modal")){window.location.href=(0,r.ru)("https://pinterest.com/pinterest-predicts",g);return}null==d||d({component:14347,element:13582,event_type:14539,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:v}}),window.location.href=(0,r.ru)(f,g)}}}},519218:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(702664),i=n(616550),r=n(883119),l=n(563962),o=n(788241),s=n(536042),d=n(245410),u=n(860438),c=n(98736),p=n(618569),_=n(549201),m=n(619277),h=n(785893);function w({alignIconLeft:e,bgColor:t,color:n,disableRedirect:w=!1,fallbackUrl:v,icon:f="arrow-back",onTouch:g,padding:y,placement:b,shouldUseFallbackUrl:k,size:x="lg",viewParameter:S,viewType:Z,fallbackUrlForExp:T}){let E=(0,s.ZP)(),P=(0,_.HG)(),{checkExperiment:L}=(0,d.F)(),C=(0,i.useHistory)(),A=(0,i.useLocation)(),j=(0,a.useSelector)(e=>e.session.isAuthenticated),R=(0,l.Z)(),M=(0,p.Z)(),D=!j&&T&&"/ideas"===v,{viewType:I,viewParameter:U}=(0,o.SU)(),[N,O]=Z?[Z,S]:[I,U],B=()=>A.search&&A.search.includes("?nativeShouldDismiss=true"),W=()=>{let e=u.Z.getItem(m.pm);A.key||"/ideas"!==v?(0,c.My)(`pinner_conversion.back_button.${String(null==e?void 0:e[0].pageType)}`):(0,c.My)("pinner_conversion.back_button.no_history"),(0,c.My)(`web_back_button_click.${String(b)}.is_auth_${String(j)}`),M({action:"click",item:"back-button"}),N&&R({view_type:N,view_parameter:O,element:34,event_type:102}),g&&g(),w||((!A.key||A.state&&"redirect"===A.state.referrer||k)&&v?D?P&&L("web_unauth_backbutton_navigation").anyEnabled?(C.push(T||v),(0,c.My)("web.unauth.back_button.l1interest")):!P&&L("mweb_unauth_backbutton_navigation").anyEnabled?(C.push(T||v),(0,c.My)("mweb.unauth.back_button.l1interest")):C.push(v):C.push(v):A.pathname.includes("/password/reset/")&&B()?C.push("/login/?dismissWebview=true"):C.goBack())};return(0,h.jsx)(r.xu,{"data-test-id":"back-button",children:e?(0,h.jsx)(r.xu,{display:"flex",width:48,height:48,alignItems:"center",marginStart:"cancel"===f?-1:-2,children:(0,h.jsx)(r.hU,{accessibilityLabel:E._('Back', 'navigation button', 'navigation button'),bgColor:t,iconColor:!n&&(!t||["white","lightGray","transparent"].includes(t))?"gray":n,icon:f,onClick:W,padding:"auto"!==y?y:2,size:x})}):(0,h.jsx)(r.hU,{accessibilityLabel:E._('Back', 'navigation button', 'navigation button'),bgColor:t,iconColor:!n&&(!t||["white","lightGray","transparent"].includes(t))?"gray":n,icon:f,onClick:W,padding:"auto"!==y?y:2,size:x})})}},918646:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(883119),i=n(563962),r=n(536042),l=n(98736),o=n(706874),s=n(785893);let d=({marginTop:e=4,marginBottom:t=0})=>{let n=(0,r.ZP)(),d=(0,i.Z)(),{trackConversionUpsell:u}=(0,o.Z)();return(0,s.jsxs)(a.xu,{display:"flex",justifyContent:"center",alignItems:"baseline",marginTop:e,marginBottom:t,children:[(0,s.jsx)(a.xu,{display:"flex",marginEnd:1,justifyContent:"center",children:(0,s.jsx)(a.xv,{align:"center",inline:!0,children:n._('Are you a business?', 'Prompt for business signup', 'Prompt for business signup')})}),(0,s.jsx)(a.xu,{display:"flex",justifyContent:"center","data-test-id":"create-business",children:(0,s.jsx)(a.rU,{display:"inlineBlock",target:"blank",href:"/business/create",onClick:()=>{(0,l.NC)("click_business_signup"),d({element:10281,event_type:102,view_type:10,view_parameter:3146}),u({viewParameter:47,viewType:10,eventType:14689,element:10281})},underline:"hover",children:(0,s.jsx)(a.xv,{align:"center",weight:"bold",children:n._('Get started here!', 'Prompt for signing up', 'Prompt for signing up')})})})]})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/23884-aa89464a24f52695.mjs.map