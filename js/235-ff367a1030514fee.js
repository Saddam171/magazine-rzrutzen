"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[235],{84546:function(e,t,r){r.d(t,{Z:function(){return f}});var n=r(7896),o=r(31461),i=r(2784),l=r(13980),a=r(99673),u=r(91489),d=r(68054);let c=a.ZP.div({boxSizing:"border-box",cursor:({touch:e})=>e?"pointer":"inherit"},(0,d.qC)(d.Oq,d.Cg,d.bK,d.FK,d.AF,d.Dh,d.yd,d.cp,u.$_),u.Tf),s=i.forwardRef(((e,t)=>{let{children:r}=e,l=(0,o.Z)(e,["children"]);return i.createElement(c,(0,n.Z)({ref:t},l),r)}));s.propTypes={children:(0,l.oneOfType)([l.element,l.string,(0,l.arrayOf)(l.element),l.node])},s.defaultProps={children:void 0},s.displayName="Box";var f=s},60861:function(e,t,r){r.d(t,{Z:function(){return g}});var n=r(7896),o=r(31461),i=r(2784),l=r(34490),a=r(99673),u=r(68054),d=r(91489);let c={auto:a.iv`
    height: auto;
    min-width: auto;
  `,small:a.iv`
    height: 32px;
    min-width: 80px;
    font-size: ${e=>(0,d.R)("fontSizes.0")(e)}px;
  `,medium:a.iv`
    height: 44px;
    min-width: 140px;
    font-size: ${e=>(0,d.R)("fontSizes.1")(e)}px;
  `,large:a.iv`
    height: 52px;
    min-width: 180px;
    font-size: ${e=>(0,d.R)("fontSizes.2")(e)}px;
  `},s={fill:a.iv`
    ${e=>{var t,r,n,o;return`\n      background-color: \n        ${null!=(t=e.customColor)&&t.default?null==(r=e.customColor)?void 0:r.default:(0,d.ow)("base")(e)};\n      color: ${(0,d.uu)("lightest")(e)};\n      svg {\n        fill: ${(0,d.uu)("lightest")(e)};\n      }\n\n      &:hover {\n        background-color: \n        ${null!=(n=e.customColor)&&n.hover?null==(o=e.customColor)?void 0:o.hover:(0,d.ow)("dark")(e)};\n        color: ${(0,d.uu)("lightest")(e)};\n      }\n    `}};

    ${e=>e.disabled&&`\n      &,\n      &:hover {\n        background-color: ${(0,d.ow)("background.whisper")(e)};\n        color: ${(0,d.uu)("scratched")(e)};\n        svg {\n          fill: ${(0,d.uu)("scratched")(e)};\n        }\n      }\n    `};

    ${e=>{var t,r,n,o,i,l,a,u,c,s;return!e.disabled&&e.invertedColors&&`\n      background-color: \n        ${null!=(t=e.customColor)&&t.default?null==(r=e.customColor)?void 0:r.default:(0,d.ow)("base")(e)};\n      color:\n        ${null!=(n=e.customColor)&&n.hover?null==(o=e.customColor)?void 0:o.hover:(0,d.uu)("lightest")(e)};\n      svg {\n        fill: ${(0,d.uu)("lightest")(e)};\n      }\n\n      &:hover {\n        background-color:\n          ${null!=(i=e.customColor)&&i.hover?null==(l=e.customColor)?void 0:l.hover:(0,d.uu)("lightest")(e)};\n        color: ${null!=(a=e.customColor)&&a.default?null==(u=e.customColor)?void 0:u.default:(0,d.ow)("base")(e)};\n        svg {\n          fill: ${null!=(c=e.customColor)&&c.hover?null==(s=e.customColor)?void 0:s.hover:(0,d.ow)("base")(e)};\n        }\n      }\n    `}};
  `,outline:a.iv`
    ${e=>{var t,r,n,o,i,l,a,u,c,s,f,m;return`\n    background-color: transparent;\n    box-shadow: inset 0 0 0 1px\n      ${null!=(t=e.customColor)&&t.default?null==(r=e.customColor)?void 0:r.default:(0,d.ow)("base")(e)};\n    color: ${null!=(n=e.customColor)&&n.default?null==(o=e.customColor)?void 0:o.default:(0,d.ow)("base")(e)};\n    svg {\n      fill: ${null!=(i=e.customColor)&&i.default?null==(l=e.customColor)?void 0:l.default:(0,d.ow)("base")(e)};\n    }\n\n    &:hover {\n      box-shadow: inset 0 0 0 1px\n        ${null!=(a=e.customColor)&&a.hover?null==(u=e.customColor)?void 0:u.hover:(0,d.ow)("dark")(e)};\n      color: ${null!=(c=e.customColor)&&c.hover?null==(s=e.customColor)?void 0:s.hover:(0,d.ow)("dark")(e)};\n      svg {\n        fill: ${null!=(f=e.customColor)&&f.hover?null==(m=e.customColor)?void 0:m.hover:(0,d.ow)("dark")(e)};\n      }\n    }\n  `}}

    ${e=>e.disabled&&`\n      &,\n      &:hover {\n        background-color: transparent;\n        box-shadow: inset 0 0 0 1px ${(0,d.uu)("lighter")(e)};\n        color: ${(0,d.uu)("lighter")(e)};\n        svg {\n          fill: ${(0,d.uu)("lighter")(e)};\n        }\n      }\n    `}
  `},f=a.ZP.span`
  grid-area: start;
  svg {
    vertical-align: middle;
    float: left;
  }
`,m=a.ZP.label`
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  font-weight: ${e=>(0,d.R)("fontWeights.medium")(e)};
  text-align: center;
  margin-top: 1px;
  grid-area: label;
  align-self: center;
  small {
    font-weight: ${e=>(0,d.R)("fontWeights.medium")(e)};
    text-transform: none;
    display: block;
  }
`,p=a.ZP.span`
  grid-area: end;
  svg {
    vertical-align: middle;
    float: right;
  }
`,h=a.ZP.button`
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  font-family: ${e=>(0,d.R)("fontFamily")(e)};
  outline: none;
  border: none;
  border-radius: ${e=>e.rounded?"30px":"4px"};
  padding: 0px 15px;
  width: ${e=>e.full?"100%":"auto"};
  display: grid;
  grid-column: ${e=>e.gridColumn||"unset"};
  grid-template-areas: ${e=>e.startIcon||e.endIcon?"'start label end'":"'label'"};
  ${e=>{let{centered:t}=e,r=(0,o.Z)(e,["centered"]);return t?a.iv`
          grid-template-columns: '';
          grid-gap: 0px
            ${r.startIcon||r.endIcon?(0,d.R)("space.2")(r):0}px;
        `:a.iv`
          grid-template-columns: ${r.startIcon||r.endIcon?"1fr 4fr 1fr":"auto"};
        `}}
  justify-content: center;
  align-content: center;
  text-decoration: none;
  ${m} {
    ${({uppercase:e})=>e&&a.iv`
        text-transform: uppercase;
      `}
  }
  ${e=>c[e.size]||c.medium}
  ${e=>s[e.variation]||s.fill}
  ${u.Dh}
  ${u.bK}
  ${u.cp}
`,v=e=>{let{onClick:t}=e,r=(0,o.Z)(e,["onClick"]),{startIcon:a,endIcon:u,children:d,disabled:c}=r,s=e=>"string"==typeof e?i.createElement(l.JO$,{name:e}):e;return i.createElement(h,(0,n.Z)({onClick:e=>t(e)},r),a&&i.createElement(f,null,s(a)),i.createElement(m,{disabled:c},d),u&&i.createElement(p,null,s(u)))};v.defaultProps={centered:!1,children:void 0,color:"primary",customColor:{default:null,hover:null},disabled:!1,invertedColors:!1,onClick:()=>{},rounded:!1,size:"medium",uppercase:!0,variation:"fill"},v.displayName="Button";var g=v},77766:function(e,t,r){r.d(t,{Z:function(){return Z}});var n=r(7896),o=r(31461),i=r(2784),l=r(34490),a=r(75851),u=r(99673),d=r(91489),c=r(64586),s=r(84546),f=r(19527),m=r(63825);let p={top:u.iv`
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    animation: ${c.ie} 0.3s ease-in-out;
  `,center:u.iv`
    margin: 15px;
    animation: ${c.Ji} 0.3s ease-in;
  `,bottom:u.iv`
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    animation: ${c.$7} 0.3s ease-in-out;
  `},h={top:u.iv`
    justify-content: flex-start;
  `,center:u.iv`
    justify-content: center;
  `,bottom:u.iv`
    justify-content: flex-end;
  `},v=(0,u.ZP)(s.Z).attrs((()=>({bg:"background.overlay"})))`
  animation: ${c.Ji} 0.3s linear;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  cursor: pointer;
`,g=(0,u.ZP)(f.Z).attrs((e=>({zIndex:4,padding:e.fullScreen?4:void 0})))`
  flex-direction: column;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  ${e=>h[e.position]}
  visibility: ${({visible:e})=>e?"visible":"hidden"};
`,b=(0,u.ZP)(m.Z).attrs((e=>Object.assign({color:"text.dark",fontSize:3,p:2},e.titleStyle)))`
  margin: 6px 0;
  width: 100%;
`,y=(0,u.ZP)(s.Z).attrs((e=>Object.assign({p:3,bg:"background.base",zIndex:1},e)))`
  overflow-x: auto;
  ${e=>p[e.position]}
  ${e=>(({type:e,fullScreen:t})=>t?u.iv`
      width: 100%;
      border-radius: ${(0,d.R)("radii.default")};
    `:"alert"===e?u.iv`
      width: 300px;
      border-radius: ${(0,d.R)("radii.medium")};
    `:"responsive"===e?u.iv`
      padding: ${(0,d.R)("space.4")}px;
      border-radius: ${(0,d.R)("radii.default")};
      overflow-x: hidden;
    `:"full"===e?u.iv`
      max-width: 1366px;
      width: 100%;
    `:u.iv`
    width: 85%;
    max-width: 1366px;
    border-radius: ${(0,d.R)("radii.default")};
  `)(e)}
`,$=(0,u.ZP)(f.Z)`
  justify-content: space-between;
  align-items: center;
`,w=u.ZP.div`
  padding-right: 8px;
  margin-left: auto;
  cursor: pointer;
`,C=e=>{let{title:t,showClose:r,onClickOutside:a,children:u,visible:d,position:c,fullScreen:s,type:f,titleStyle:m}=e,p=(0,o.Z)(e,["title","showClose","onClickOutside","children","visible","position","fullScreen","type","titleStyle"]);return(0,i.useEffect)((()=>{let e=window.getComputedStyle(document.body).overflow;return document.body.style.overflow=d?"hidden":e,()=>{document.body.style.overflow=e}}),[d]),i.createElement(g,{position:c,visible:d,fullScreen:s,"data-testid":"dialog"},i.createElement(v,{onClick:a,role:"dialog","data-testid":"dialog-overlay"}),i.createElement(y,(0,n.Z)({position:c,"data-testid":"dialog-content",type:f,fullScreen:s},p),i.createElement($,null,t&&i.createElement(b,{titleStyle:m,"data-testid":"dialog-title"},t),r&&i.createElement(w,null,i.createElement(l.x8P,{color:"#999","aria-label":"Close",onClick:a,"data-testid":"dialog-close"}))),u))};C.defaultProps={children:void 0,title:void 0,fullScreen:!1,position:"bottom",type:"dialog",showClose:!1,titleStyle:{},visible:!0};var Z=e=>{let{portal:t=!1}=e,r=(0,o.Z)(e,["portal"]),n=i.createElement(C,r);return t?(e=>i.createElement(a.Z,{id:"portal-dialog"},e))(n):n}},19527:function(e,t,r){r.d(t,{Z:function(){return f}});var n=r(7896),o=r(31461),i=r(2784),l=r(13980),a=r(99673),u=r(91489),d=r(68054);let c=a.ZP.div({display:"flex"},(0,d.qC)(d.GQ,d.Oq,d.Cg,d.bK,d.FK,d.AF,d.Dh,d.yd,d.cp,u.$_,u.oc),u.SG),s=(0,i.forwardRef)(((e,t)=>{let{children:r}=e,l=(0,o.Z)(e,["children"]);return i.createElement(c,(0,n.Z)({ref:t},l),r)}));s.propTypes={children:(0,l.oneOfType)([l.element,l.string,(0,l.arrayOf)(l.element),l.node])},s.defaultProps={children:void 0},s.displayName="Flex";var f=s},8341:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(7896),o=r(2784),i=r(99673),l=r(91489),a=r(68054),u=r(84546);let d=(0,i.ZP)(u.Z)({display:"grid"},(0,a.qC)(a.eC,a.cp,l.$_,a.Dh,l.SG)),c=(0,o.forwardRef)(((e,t)=>o.createElement(d,(0,n.Z)({ref:t},e))));c.displayName="Grid";var s=c},25610:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(7896),o=r(31461),i=r(2784),l=r(13980),a=r(63825);let u=i.forwardRef(((e,t)=>{let{children:r}=e,l=(0,o.Z)(e,["children"]);return i.createElement(a.Z,(0,n.Z)({ref:t,as:"h3","data-testid":"main-title"},l),r)}));u.propTypes={children:l.string.isRequired},u.displayName="Heading";var d=u},91785:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(7896),o=r(2784),i=r(33279),l=r(84546);let a="0px 0px 250px",u=({children:e,options:t,layout:r})=>{let{delay:u=500,threshold:d=0,rootMargin:c=a}=t||{},[s,f]=(0,o.useState)(!1),[m,p]=(0,o.useState)(r),[h,v]=(0,i.YD)({triggerOnce:!0,threshold:d,rootMargin:c});return(0,o.useEffect)((()=>{let e;return v&&!s&&(f(!0),e=setTimeout((()=>p({})),u)),()=>e&&clearTimeout(e)}),[v]),o.createElement(l.Z,(0,n.Z)({},m,{"data-testid":"lazyload-container",ref:h}),s&&e)};u.defaultProps={children:void 0,layout:{},options:{delay:500,rootMargin:a,threshold:0}};var d=u},75851:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(2784),o=r(28316);var i=(0,n.memo)((({id:e,children:t})=>{if("object"!=typeof window)return n.Fragment;let r=(0,n.useRef)(document.getElementById(e)||document.createElement("div")),[i]=(0,n.useState)(!r.current.parentElement);return(0,n.useEffect)((()=>(i&&(r.current.id=e,document.querySelector("main")?document.querySelector("main").appendChild(r.current):document.body.appendChild(r.current)),()=>{i&&r.current.parentElement&&r.current.parentElement.removeChild(r.current)})),[e]),(0,o.createPortal)(t,r.current)}))},70715:function(e,t,r){r.d(t,{Z:function(){return f}});var n=r(7896),o=r(31461),i=r(2784),l=r(99673),a=r(91489),u=r(8341);let d=(0,l.ZP)(u.Z).attrs((e=>Object.assign({forwardedAs:"label",color:"text.base",gridTemplateColumns:"min-content auto",gridGap:3,py:3},e)))`
  cursor: pointer;
  align-items: center;
`,c=l.ZP.input.attrs((e=>Object.assign({type:"radio"},e)))`
  appearance: none;
  background: transparent;
  width: 20px;
  height: 20px;
  border: ${(0,a.R)("borders.1")};
  border-radius: ${(0,a.R)("radii.circle")};
  cursor: pointer;

  &:checked {
    border-color: ${(0,a.dF)("primary")};

    &:before {
      content: '';
      display: block;
      position: relative;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 10px;
      height: 10px;
      border-radius: ${(0,a.R)("radii.circle")};
      background: ${(0,a.dF)("primary")};
    }
  }
`,s=e=>{let{label:t,onChange:r}=e,l=(0,o.Z)(e,["label","onChange"]),a=i.createElement(c,(0,n.Z)({},l,{onChange:r,"data-testid":"radio-input"}));return t?i.createElement(d,(0,n.Z)({},l,{"data-testid":"radio"}),a,t):a};s.defaultProps={fontSize:1};var f=s},7029:function(e,t,r){r.d(t,{Z:function(){return f}});var n=r(7896),o=r(31461),i=r(2784),l=r(12468),a=r(99673),u=r(68054),d=r(91489);let c=a.ZP.img`
  width: 100%;
  height: inherit;
  object-fit: ${({objectFit:e})=>e||"contain"};
  ${u.FK}
  ${u.Dh}
  ${u.bK}
  ${u.Cg}
  ${d.oc}
`,s=e=>{let{src:t,srcSetDensity:r,imageWidth:l,imageHeight:a,width:u,height:d,lazy:s}=e,f=(0,o.Z)(e,["src","srcSetDensity","imageWidth","imageHeight","width","height","lazy"]);if(!t)return i.createElement(i.Fragment,null);let m=Object.assign({},f,{width:l,height:a,src:t.replace("{w}",u).replace("{h}",d)}),p=r.map((e=>`${t.replace("{w}",u*e).replace("{h}",d*e)}${e>1?` ${e}x`:""}`)).join(", ");return p&&(m.srcSet=p),s&&(m.loading="lazy"),i.createElement(c,(0,n.Z)({"data-testid":"image"},m))};s.defaultProps={height:l.w.height,lazy:!0,src:"",srcSetDensity:[],width:l.w.width,imageWidth:"",imageHeight:""};var f=s},63825:function(e,t,r){r.d(t,{Z:function(){return f}});var n=r(7896),o=r(31461),i=r(2784),l=r(13980),a=r(99673),u=r(68054),d=r(91489);let c=a.ZP.p.attrs((e=>({color:e.color?(0,d.uu)(e.color)(e)||e.color:(0,d.uu)("base")(e)})))`
  ${(0,u.qC)(u.cp,u.Dh,d.$_,u.bK,u.FK,u.GQ,d.SG)}
  ${(0,u.By)({transform:!0})}
`,s=i.forwardRef(((e,t)=>{let{children:r}=e,l=(0,o.Z)(e,["children"]);return i.createElement(c,(0,n.Z)({ref:t},l),r)}));s.propTypes={children:(0,l.oneOfType)([l.string,l.node,(0,l.arrayOf)(l.element)])},s.defaultProps={children:""},s.displayName="Text";var f=s},12468:function(e,t,r){r.d(t,{Bl:function(){return c},Co:function(){return n},IY:function(){return i},K9:function(){return s},RW:function(){return l},Uh:function(){return f},dz:function(){return d},ig:function(){return u},w:function(){return a},yg:function(){return o}});let n="miniature",o="gallery",i="list",l="https://www.magazineluiza.com.br",a={width:"186",height:"140"},u="magazineluiza",d="Descubra outras ofertas aqui",c={endIcon:"ChevronRight",justifyContent:"flex-start"},s="Mostrar mais produtos",f={startIcon:"ChevronDownCircle",centered:!0}},98047:function(e,t){t.Z=(e,t)=>e.find((e=>(null==e?void 0:e.value)===t))},64586:function(e,t,r){r.d(t,{kC:function(){return n},vQ:function(){return o},qJ:function(){return i},Ji:function(){return k},KF:function(){return l.Z},rx:function(){return f},Z4:function(){return s},RZ:function(){return d},zY:function(){return m},az:function(){return S},$7:function(){return E},ie:function(){return x},hY:function(){return g},gf:function(){return b.Z},IC:function(){return v},yH:function(){return p},O:function(){return $},t$:function(){return w},Ay:function(){return C},CK:function(){return u.Z}});var n=e=>"string"!=typeof e?"":e.toLowerCase().charAt(0).toUpperCase()+e.slice(1);function o(e){if(navigator.clipboard)return navigator.clipboard.writeText(e);let t=document.createElement("textarea");return t.value=e,t.setAttribute("readonly",""),t.style={position:"absolute",left:"-9999px"},document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}var i=e=>{if(!e||"string"!=typeof e||!e.includes("www.youtube.com/v/"))return e;let t=e.match(/v\/([a-zA-Z0-9_-]+)&?/),r=null!=t&&t.length?t[1]:null;return r?`https://www.youtube.com/embed/${r}`:e},l=r(98047);var a=(e,t="")=>{let r=e;return t.length<r?t:(3===r&&(r+=3),`${t.substr(0,r-3)}...`)},u=r(7874);var d=({zipCode:e="",zipCodeCity:t="",zipCodeState:r="",maxCityLength:n=24,formatter:o=((e,t)=>`${e.toUpperCase()}, ${t.toUpperCase()}`)}={})=>`${o(t&&"string"==typeof t?a(n,t):"",r&&"string"==typeof r?r:"")} - ${(0,u.Z)(e&&"string"==typeof e?e:"")}`;r(63113);let c=(e,t,r)=>t<=e&&e<=r,s=(e,t,r,n)=>c(e,r,n)&&e<t,f=(e,t,r,n)=>c(e,r,n)&&e>t;var m=e=>`${(null==e?void 0:e.length)>1?"dos seguros":"do seguro"} ${e.join(", ").replace(/, ([^,]*)$/," e $1").toLowerCase()}`;var p=(e=[],t=[])=>t.map((t=>e.find((e=>Number(null==e?void 0:e.id)===t))));var h=(e=[],t=null)=>{if(!t)throw Error("Invalid parameter [key]");return e.length?e.reduce(((e,r)=>Object.assign({},e,{[r[t]]:r})),{}):{}};var v=(e=[],t=[])=>{if(!t.length||!e.length)return e;if(!t.every((e=>"string"==typeof e)))throw Error("Invalid parameter [orderBy]");let r=h(e,"id"),n=Object.keys(r).filter((e=>!t.includes(e)));return[...t.map((e=>r[e])).slice(0,e.length),...n.map((e=>r[e]))]};var g=(e={})=>(t=[])=>{var r;let n=(null==e||null==(r=e.values)?void 0:r.reduce(((e,r)=>{let n=(0,l.Z)(t,r);return Object.assign({},e,{[r]:null==n?void 0:n.available})}),{}))||{};return Object.entries(n).sort((([,e],[,t])=>t-e)).map((([e])=>e))},b=r(41869),y=r(2784),$=(e,t,r="block")=>{(0,y.useEffect)((()=>{let n=()=>{Object.values(e).forEach((e=>{e.current.style.display=r})),Object.values(e).filter((e=>e.current.offsetLeft+e.current.offsetWidth>t.current.offsetWidth+t.current.offsetLeft)).forEach((e=>{e.current.style.display="none"}))};return n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}}),[t.current])},w=(e,t)=>{(0,y.useEffect)((()=>{let r=r=>{e.current&&!e.current.contains(r.target)&&t(r)};return document.addEventListener("mousedown",r),document.addEventListener("touchstart",r),()=>{document.removeEventListener("mousedown",r),document.removeEventListener("touchstart",r)}}),[e,t])},C=(e,t)=>{(0,y.useEffect)((()=>{let r=()=>t(!0),n=()=>t(!1),o=null==e?void 0:e.current;if(o)return o.addEventListener("mouseenter",r),o.addEventListener("mouseleave",n),()=>{o.removeEventListener("mouseenter",r),o.removeEventListener("mouseleave",n)}}),[e])},Z=r(99673);let x=Z.F4`
  from { transform: translateY(-100%); }
  to { transform: translateY(0%); }
`,E=Z.F4`
  from { transform: translateY(100%);}
  to { transform: translateY(0); }
`,k=Z.F4`
  from { opacity: 0; }
  to { opacity: 1; }
`,S=Z.F4`
  from { opacity: 0.5; -webkit-transform: scale(0.5); transform: scale(0.5); }
  to { opacity: 1; -webkit-transform: scale(0.5); transform: scale(1); }
`},63113:function(e,t,r){var n=r(93837);t.Z=e=>{let t=Number(`${e||""}`.replace(/\D/g,""))/100;return{amount:t,currency:(0,n.Z)({value:t})}}},41869:function(e,t){t.Z=(e=[])=>e.sort(((e,t)=>(null==t?void 0:t.selected)-(null==e?void 0:e.selected)))},7874:function(e,t){t.Z=e=>e.replace(/\D/g,"").replace(/(\d{5})(\d)/,"$1-$2").replace(/(\d{5})(\d{3})/,"$1-$2").replace(/(-\d{3})\d+?$/,"$1")}}]);