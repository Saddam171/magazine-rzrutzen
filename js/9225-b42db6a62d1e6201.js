"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9225],{38825:function(e,t,n){n.d(t,{Z:function(){return h}});var l=n(7896),i=n(31461),a=n(2784),r=n(99673),o=n(34490),s=n(64586),d=n(19476);let c=(0,r.ZP)(d.Yd)``,u=(0,r.ZP)(o.Xdw).attrs((e=>Object.assign({color:"#db44a7"},e)))`
  width: ${({width:e})=>`${e}px`};
  height: ${({height:e})=>`${e}px`};

  animation: ${s.az} 0.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`,p=(0,r.ZP)(o.Xdw).attrs((e=>Object.assign({color:"transparent",stroke:"darkGray"},e)))`
  width: ${({width:e})=>`${e}px`};
  height: ${({height:e})=>`${e}px`};

  animation: ${s.az} 0.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;function m(e){let{active:t,onClick:n,width:r,height:o}=e,s=(0,i.Z)(e,["active","onClick","width","height"]);return a.createElement(c,(0,l.Z)({"data-testid":"add-wishlist-button",onClick:n},s),t?a.createElement(u,{"data-testid":"filled-icon",width:r,height:o}):a.createElement(p,{"data-testid":"empty-icon",width:r,height:o}))}m.defaultProps={active:!1,width:20,height:20};var h=m},33309:function(e,t,n){n.d(t,{V:function(){return p}});var l=n(2784),i=n(77766),a=n(99673),r=n(19476);let o=a.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,s=(0,a.ZP)(r.xv)`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 10px;
`,d=(0,a.ZP)(r.xv)`
  margin-bottom: 20px;
  font-size: 14px;
`,c=(0,a.ZP)(r.zx)`
  font-size: 12px;
  text-transform: uppercase;
`;var u=function({title:e,message:t,showDialog:n,onClickOutside:a}){return l.createElement(i.Z,{type:"alert",position:"center",showClose:!1,visible:n,onClickOutside:a,portal:!0},l.createElement(o,null,l.createElement(s,null,e),l.createElement(d,null,t),l.createElement(c,{full:!0,onClick:a},"Entendi")))};var p=()=>{let[e,t]=(0,l.useState)(""),[n,i]=(0,l.useState)(""),[a,r]=(0,l.useState)(!1);return{showAlertMessage:({title:e="Atenção",message:n})=>{t(e),i(n),r(!0)},Alert:()=>l.createElement(l.Fragment,null,a&&l.createElement(u,{title:e,message:n,showDialog:a,onClickOutside:()=>r(!1),width:"300px"}))}}},52337:function(e,t,n){n.d(t,{Z:function(){return u}});var l=n(2784),i=n(99673),a=n(91489),r=n(84546),o=n(63825);let s=(0,i.ZP)(r.Z)`
  width: 100%;
  background: ${e=>(0,a.UX)(`${e.intent}.base`)(e)};
`,d=(0,i.ZP)(o.Z)`
  padding: 10px;
  font-size: ${e=>(0,a.R)("fontSizes.1")(e)}px;
  color: ${e=>(0,a.UX)(`${e.intent}.text`)(e)};
`;function c({message:e,intent:t}){return l.createElement(s,{intent:t,"data-testid":"alert-container"},Array.isArray(e)?e.map(((e,n)=>l.createElement(d,{key:`alert-message-${n}`,intent:t,"data-testid":"alert-text"},e))):l.createElement(d,{intent:t,"data-testid":"alert-text"},e))}c.defaultProps={message:"",intent:"info"};var u=c},23778:function(e,t,n){n.d(t,{Z:function(){return d}});var l=n(7896),i=n(2784),a=n(64586),r=n(34014),o=n(7069);let s=({attribute:e,variations:t,onChange:n,alignment:s})=>{var d;return i.createElement(r.Z,(0,l.Z)({},e,{alignment:s}),null==e||null==(d=e.values)?void 0:d.map(((l,r)=>{let s=(0,a.KF)(t,l);return i.createElement(o.Z,{key:`${l}-${r}`,value:l,type:null==e?void 0:e.type,checked:(null==e?void 0:e.selected)&&(null==e?void 0:e.current)===l,disabled:!(null!=s&&s.isAvailable||null!=s&&s.available),onChange:n},l)})))};s.defaultProps={attribute:{},variations:[],alignment:""};var d=s},34014:function(e,t,n){n.d(t,{Z:function(){return h}});var l=n(2784),i=n(34490),a=n(31461),r=n(99673),o=n(91489),s=n(19527);let d={start:"left",end:"right",center:"center"},c=r.ZP.div`
  position: relative;
`,u=r.ZP.div`
  width: 100%;
  color: ${(0,o.uu)("attributeLabel")};
  text-align: ${({bordered:e,alignment:t})=>e?"left":d[t]};
  margin-top: 8px;
  margin-bottom: 8px;
  ${e=>{let{bordered:t}=e,n=(0,a.Z)(e,["bordered"]);return t&&r.iv`
      display: flex;
      justify-content: space-between;
      padding: 15px;
      background-color: ${(0,o.dF)("white")(n)};
      border-radius: 6px;
      border-width: 1px;
      border-style: solid;
      border-color: ${(0,o.kJ)("light")(n)};

      ${(0,o.aK)("large")} {
        cursor: pointer;
      }
    `}}

  ${(0,o.aK)("large")} {
    svg {
      transform: rotate(90deg);
    }
  }
`,p=(0,r.ZP)(s.Z).attrs((({alignment:e})=>({justifyContent:e,columnGap:[2,3],rowGap:2})))`
  flex-flow: row wrap;
  ${({smoothable:e})=>e&&r.iv`
      overflow: hidden;
      height: 105px;
    `};
`,m=l.forwardRef((({children:e,label:t,current:n,selected:a,bordered:r,onClick:o,onBlur:s,alignment:d,smoothable:m},h)=>l.createElement(c,{ref:h,onBlur:s,tabIndex:1,"data-testid":"attribute-container"},l.createElement(u,{bordered:r,alignment:d,onClick:o,"data-testid":"attribute-label"},a?l.createElement("span",null,t,": ",l.createElement("strong",null,n)):`Selecionar ${t}`,r&&l.createElement(i.olP,{width:8,height:12})),l.createElement(p,{alignment:d,smoothable:m},e))));m.defaultProps={label:"",current:"",selected:!1,bordered:!1,alignment:"center",smoothable:!1},m.displayName="AttributeBase";var h=m},50238:function(e,t,n){n.d(t,{Z:function(){return m}});var l=n(7896),i=n(2784),a=n(34490),r=n(64586),o=n(19527),s=n(7029),d=n(34014),c=n(7069);let u={smooth:({onClick:e,show:t})=>t&&i.createElement(o.Z,{"data-testid":"attribute-color-more",position:"absolute",justifyContent:"center",background:"linear-gradient(0deg, #ffffff, transparent 80%)",color:"text.primary",fontWeight:"bold",cursor:"pointer",width:1,bottom:0,height:36,padding:1,onClick:e},"ver mais cores"),button:({attributesLength:e,onClick:t,show:n})=>n&&i.createElement(o.Z,{"data-testid":"attribute-color-more",fontSize:4,fontWeight:"bold",borderRadius:"default",width:"70px",height:"70px",alignItems:"center",justifyContent:"center",bg:"background.base",color:"text.base",cursor:"pointer",onClick:t},"+ ",e)},p=({attribute:e,variations:t,onChange:n,title:o,alignment:p,minLength:m,variant:h})=>{let g=["smooth","button"].includes(h)?h:"smooth",f=null==u?void 0:u[g],[b,v]=(0,i.useState)("smooth"===g),[x,Z]=(0,i.useState)("button"===g),E=(0,i.useMemo)((()=>{let n=(0,r.hY)(e)(t).reduce(((n,l)=>[...n,Object.assign({},(0,r.KF)(t,l),{selected:(null==e?void 0:e.selected)&&(null==e?void 0:e.current)===l})]),[]);return(0,r.gf)(n).map((e=>e.value))}),[]),$=(0,i.useMemo)((()=>E.length>m),[]),[y,k]=(0,i.useState)((()=>E.length>m-1&&"button"===g?E.slice(0,m-1):E));return i.createElement(d.Z,(0,l.Z)({},e,{smoothable:$&&b,alignment:p}),null==y?void 0:y.map(((l,d)=>{let{available:u,image:p}=(0,r.KF)(t,l)||{};return i.createElement(c.Z,{key:`${l}-${d}`,value:l,type:e.type,checked:e.selected&&e.current===l,disabled:!u,onChange:n},p?i.createElement(s.Z,{alt:`${o} ${l}`,title:l,src:p,width:50,height:50}):i.createElement(a.JO$,{name:"Camera",width:29,height:25,color:"lightGray"}))})),$&&i.createElement(f,{show:b||x,attributesLength:e.values.length-4,onClick:()=>b?v(!b):(Z(!x),k(E))}))};p.defaultProps={attribute:{},disabled:!1,variations:[],title:"",alignment:"",minLength:5,variant:"smooth"};var m=p},7069:function(e,t,n){n.d(t,{Z:function(){return u}});var l=n(7896),i=n(31461),a=n(2784),r=n(19527),o=n(99673),s=n(91489);let d=o.ZP.input`
  display: none;

  &:checked ~ label {
    background-color: ${(0,s.dF)("primary")};
    border-color: ${(0,s.dF)("primary")};
    color: ${(0,s.uu)("white")};
    cursor: default;
  }

  &:disabled ~ label {
    background-color: ${(0,s.dF)("white")};
    color: ${(0,s.uu)("light")};
    cursor: not-allowed;

    img {
      filter: grayscale(1);
      opacity: 0.2;
    }
  }

  &[name='color'] {
    & ~ label {
      background-color: ${(0,s.dF)("white")};
      height: 70px;
      width: 70px;

      & img {
        width: 52px;
        height: 100%;
      }

      &:hover {
        border-color: ${(0,s.dF)("primary")};
      }
    }

    &:checked ~ label {
      border-width: 2px;
    }
  }
`,c=o.ZP.div`
  position: relative;
  display: inline-flex;

  ${(0,s.aK)("large")} {
    &:first-child {
      margin-left: 0;

      label {
        ${({type:e})=>"volume"===e&&"border-top-width: 0px"};
      }
    }
  }
`;var u=e=>{let{checked:t,disabled:n,type:o,value:s,children:u,onChange:p}=e,m=(0,i.Z)(e,["checked","disabled","type","value","children","onChange"]);return a.createElement(c,{type:o},a.createElement(d,(0,l.Z)({},m,{"data-testid":"attribute-input",type:"radio",name:o,value:s,id:`${o}-${s}`,checked:t,disabled:n,onChange:e=>p(e,{value:s,type:o})})),a.createElement(r.Z,{as:"label","data-testid":"attribute-item",borderWidth:1,borderColor:"whisper",borderStyle:"solid",borderRadius:"default",padding:2,color:"text.base",fontSize:2,fontWeight:"medium",alignItems:"center",justifyContent:"center",cursor:"pointer",htmlFor:`${o}-${s}`},u))}},2575:function(e,t,n){n.d(t,{Z:function(){return w}});var l=n(7896),i=n(2784),a=n(34014),r=n(98047),o=n(99673),s=n(91489),d=n(34490),c=n(64586),u=n(84546),p=n(19527),m=n(7069);let h=o.ZP.div`
  background-color: rgba(0, 0, 0, 0.63);
  animation: ${c.Ji} 0.3s linear;
  -webkit-overflow-scrolling: touch;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  ${(0,s.aK)("large")} {
    display: none;
  }
`,g=(0,o.ZP)(p.Z)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: ${(0,s.R)("zIndices.2")};
  justify-content: flex-end;

  ${(0,s.aK)("large")} {
    z-index: ${(0,s.R)("zIndices.0")};
    overflow: hidden;
    position: absolute;
    height: auto;
    top: 56px;
    bottom: unset;
  }
`,f=(0,o.ZP)(p.Z)`
  width: ${e=>null!=e&&e.fullWidth?"100%":"85%"};
  overflow: hidden;
  flex-direction: column;
  animation: ${c.$7} 0.3s ease-in-out;
  z-index: ${(0,s.R)("zIndices.1")};

  ${(0,s.aK)("large")} {
    width: 100%;
    position: relative;
    animation: ${c.ie} 0.3s ease-in-out;
  }
`,b=(0,o.ZP)(u.Z)`
  background-color: ${(0,s.dF)("white")};
  position: relative;
  max-height: 250px;
  overflow: hidden;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;

  ${(0,s.aK)("large")} {
    border-radius: 6px;
    border: 1px solid;
    border-color: ${(0,s.kJ)("light")};
  }
`,v=(0,o.ZP)(p.Z)`
  justify-content: ${e=>e.hasContentLabel?"space-between":"flex-end"};
  align-items: center;
  background-color: ${(0,s.dF)("base")};
  height: 47px;
  font-size: 20px;
  font-weight: 500;
  color: #515151;
  padding: 0 12px;
  line-height: 39px;

  ${(0,s.aK)("large")} {
    display: none;
  }
`,x=(0,o.ZP)(p.Z)`
  flex-direction: column;
  padding-bottom: 44px;
  overflow-y: auto;
  height: calc(100% - 39px);

  ${(0,s.aK)("large")} {
    padding-top: 0;
    padding-bottom: 0;
    height: 100%;
    max-height: 250px;
  }
`,Z=(0,o.ZP)(u.Z)`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 5%, rgba(255, 255, 255, 1) 45%);
  position: absolute;
  width: 100%;
  height: 46px;
  bottom: 0;

  ${(0,s.aK)("large")} {
    display: none;
  }
`,E=(0,o.ZP)(d.x8P).attrs((e=>({color:(0,s.uu)("primary")(e)})))`
  ${(0,s.aK)("large")} {
    display: none;
  }
`,$=(0,o.ZP)(m.Z)`
  & ~ label {
    width: 100%;
    height: 46px;
    border: 0px;
    padding: 0 12px;
    border-radius: 0px;
    border-top-width: 1px;
    border-style: solid;
    border-color: ${(0,s.kJ)("light")};
    color: ${(0,s.uu)("light")};
    justify-content: space-between;
    font-weight: normal;
    line-height: 22px;
  }

  &:checked ~ label {
    background-color: transparent;
    background-color: ${(0,s.dF)("opacityBlue")};
    border-color: ${(0,s.kJ)("light")};
    font-weight: 500;
    color: ${(0,s.uu)("base")};

    &::before {
      content: '';
      width: 5px;
      height: 100%;
      background-color: ${(0,s.dF)("primary")};
      left: 0;
      position: absolute;
    }
  }

  &:disabled ~ label {
    background-color: ${(0,s.dF)("base")};
    color: ${(0,s.uu)("lighter")};
  }

  ${(0,s.aK)("large")} {
    &:not(:checked, :disabled) ~ label:hover {
      color: ${(0,s.uu)("primary")};
    }

    &:disabled ~ label {
      cursor: not-allowed;
    }
  }
`;var y=({label:e,values:t,current:n,selected:l,type:a,variations:o,onChange:s,onClose:d,fullWidth:c})=>i.createElement(g,null,i.createElement(h,{onClick:d}),i.createElement(f,{fullWidth:c,"data-testid":"attribute-list-wrapper"},i.createElement(b,null,i.createElement(v,{hasContentLabel:!!e},e,i.createElement(E,{onClick:d,"data-testid":"attribute-close"})),i.createElement(x,null,null==t?void 0:t.map(((e,t)=>{let d=(0,r.Z)(o,e);return i.createElement($,{key:`${e}-${t}`,value:e,type:a,checked:l&&n===e,disabled:!(null!=d&&d.isAvailable||null!=d&&d.available),onChange:s},e)}))),i.createElement(Z,null))));let k=({attribute:e,variations:t,onChange:n,alignment:r,fullWidth:o})=>{let[s,d]=(0,i.useState)(!1),c=(0,i.useRef)(),u=(0,i.useCallback)(((e,t)=>{n(e,t),c.current.blur()}),[s]);return i.createElement(a.Z,(0,l.Z)({},e,{onClick:()=>d(!s),onBlur:()=>d(!1),alignment:r,ref:c,bordered:!0}),!!s&&i.createElement(y,(0,l.Z)({},e,{fullWidth:o,variations:t,onChange:u,onClose:()=>d(!1)})))};k.defaultProps={attribute:{},disabled:!1,variations:[],alignment:""};var w=k},96504:function(e,t,n){n.d(t,{Z:function(){return d}});var l=n(2784),i=n(8719),a=n(99673),r=n(34490);let o=(0,a.ZP)(r.zuq)`
  position: fixed;
  width: 63px;
  height: 63px;
  bottom: 75px;
  right: 26px;
  z-index: 99;
`;function s({onClick:e,show:t}){let[n,a]=(0,l.useState)(t),r=window&&window.innerHeight,s=()=>{let e=window.pageYOffset;!n&&e>r?a(!0):n&&e<=r&&a(!1)};return(0,l.useEffect)((()=>(window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s)})),[n]),n?l.createElement(o,{"data-testid":"back-to-top",onClick:()=>{(0,i.Z)(),e()}}):l.createElement(l.Fragment,null)}s.defaultProps={onClick:()=>{},show:!1},s.displayName="BackToTop";var d=s},98460:function(e,t,n){n.d(t,{Z:function(){return u}});var l=n(7896),i=n(2784),a=n(7029),r=n(99673),o=n(91489);let s={miniature:r.iv`
    margin-top: -25px;
    width: 42px;
    height: 32px;
  `,list:r.iv`
    margin-top: -5px;
    width: 50px;
    height: 36px;
  `,gallery:r.iv`
    margin-top: -25px;
    width: 55px;
    height: 40px;
    position: absolute;
    ${(0,o.aK)("small")} {
      width: 55px;
      height: 40px;
    }
  `,productPage:r.iv`
    margin-top: 0px;
    width: 55px;
    height: 40px;
  `},d=r.ZP.div`
  position: relative;
  ${({displayMode:e})=>s[e]||"margin-top: -25px;"}
`,c=e=>{let{width:t,height:n,url:r,tooltip:o}=e,s=r&&r.replace("{w}",t).replace("{h}",n);return r?i.createElement(d,(0,l.Z)({},e,{"data-testid":"wrapper-badge"}),i.createElement(a.Z,(0,l.Z)({src:s,alt:o,"data-testid":"badge"},e))):null};c.defaultProps={tooltip:"",width:"65",height:"50"};var u=c},67619:function(e,t,n){n.d(t,{Z:function(){return g}});var l=n(2784),i=n(91489),a=n(34490),r=n(12468),o=n(99673),s=n(19527);let d=o.ZP.div`
  background-color: ${e=>e.isTransparent?"transparent":(0,i.dF)("lighter")(e)};
`,c=(0,o.ZP)(s.Z)`
  position: relative;
  flex: 0;
  flex-basis: auto;
  height: 32px;
  overflow-y: hidden;
  width: max-content;
  direction: rtl;
  background-color: ${e=>e.isTransparent?"transparent":(0,i.dF)("lighter")(e)};
`,u=(0,o.ZP)(s.Z)`
  align-items: center;
  flex-wrap: nowrap;
  padding: 0 ${e=>(0,i.R)("space.4")(e)}px 0
    ${e=>(0,i.R)("space.2")(e)}px;
  direction: ltr;
`;var p=n(66228),m=n(19476);let h=({isTransparent:e,items:t,seller:n,onLogoClick:r,onClickItem:o,domain:s,logo:h})=>{let{url:g="/",icon:f="LogoMagalu",title:b="página inicial magalu",styles:v={color:i.rS.colors.blue,height:"14px",marginTop:"6px",width:"60px"}}=h||{},x={url:g,icon:l.createElement(a.JO$,{name:f,style:v}),title:b};return x.handleClick=r,t.forEach((e=>Object.assign(e,{handleClick:o}))),l.createElement(d,{isTransparent:e},l.createElement(c,{isTransparent:e},l.createElement(u,null,n&&l.createElement(m.gN,{seller:n}),!n&&[!n&&x,...t].map(((e,n)=>{var i,a;return l.createElement(m.gN,{"data-testid":"breadcrumb-item",key:n,item:Object.assign({},e,{position:n}),active:(i=t.length,1!==(a=n)&&i===a),onClick:e.handleClick})})))),l.createElement(p.ZP,{schema:(0,p.ij)(t,s),type:"BreadcrumbList"}))};h.defaultProps={isTransparent:!1,items:[],seller:void 0,onClickItem:()=>{},onLogoClick:()=>{},domain:r.RW};var g=h},49542:function(e,t,n){n.d(t,{Z:function(){return z}});var l=n(7896),i=n(31461),a=n(2784),r=n(28249);let o=({lazy:e=!1,length:t=0,slidesPerView:n=1,active:l=0}={})=>{let i=Array.from(Array(t).keys());if(!e)return i;let a=Math.ceil(t/n),r=t%n||n,o=Math.ceil((l+1)/n),s=o+1;s>a&&(s=1);let d=o-1;d<1&&(d=a);let c=e=>{let t=e*n-n,l=e===a?t+r:t+n;return i.slice(t,l)};return[...c(d),...c(o),...c(s)].sort()};function s(e,t){switch(t.type){case"jump":return Object.assign({},e,{desired:t.desired*t.slidesPerView});case"next":var n,l,i;return Object.assign({},e,{desired:(n=t.indicators,l=e.active,(l+(i=t.slidesPerView))%(n*i))});case"prev":return Object.assign({},e,{desired:function(e,t,n){let l=e*n;return(t-n+l)%l}(t.indicators,e.active,t.slidesPerView)});case"done":return Object.assign({},e,{offset:NaN,active:e.desired,visible:t.lazy?Array.from(new Set([...e.visible,...o(Object.assign({},t,{active:e.desired}))])):e.visible});case"drag":return Object.assign({},e,{offset:t.offset});default:return e}}let d={offset:0,desired:0,active:0};function c(e,t,n,l,i){let a=function(e){return e.clientWidth/5}(e.event.target);t(-l*e.deltaX>=a?{type:l>0?"next":"prev",indicators:n,slidesPerView:i}:{type:"drag",offset:0})}var u=n(99673),p=n(68054),m=n(91489),h=n(34490),g=n(84546),f=n(59120);let b={color:"primary.base",width:40,height:40},v=(0,u.ZP)(g.Z)`
  position: relative;
  overflow: hidden;
`,x=u.ZP.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: hidden;
  position: relative;

  ${({showControls:e})=>e&&u.iv`
      padding-bottom: ${e=>e.insideControls?"0":"25"}px;
    `};

  max-height: ${({itemHeight:e})=>e?`${e}px`:null};
`,Z=(0,u.ZP)(g.Z).attrs((({gutter:e})=>({pr:e?`${e}px`:null})))`
  width: ${({width:e="50%"})=>e};
  &:first-child {
    padding-left: ${({gutter:e})=>e?`${e}px`:null};
  }
  transition: box-shadow 0.4s ease 0s;
`,E=u.ZP.div`
  overflow: hidden;

  ${({showArrowControls:e})=>e&&u.iv`
      margin: ${e=>e.insideControls?"0px":"0px 40px"};
    `};
`,$=u.ZP.button`
  ${f.z}

  background-color: ${e=>(0,m.ow)("background.lighter")(e)};
  width: fit-content;
  height: fit-content;
  position: absolute;
  top: 40%;
  cursor: ${({disabled:e})=>e?"default":"pointer"};

  ${e=>e.left&&u.iv`
      left: 0;
    `}

  ${e=>e.right&&u.iv`
      right: 0;
    `}
  
  ${e=>e.insideControls&&u.iv`
      z-index: 2;
    `}

  ${p.AF}
  ${m.$_}
`,y=(0,u.ZP)(h.s$$).attrs((e=>Object.assign({},b,e)))`
  ${m.$_}
`,k=(0,u.ZP)(h._Qn).attrs((e=>Object.assign({},b,e)))`
  ${m.$_}
`,w=u.ZP.ol`
  position: absolute;
  right: 0;
  bottom: ${e=>e.insideControls?(0,m.R)("space.3")(e):0}px;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  padding-left: 0;
  list-style: none;
  margin: auto;
`,C=u.ZP.li`
  position: relative;
  flex: 0 1 auto;
  width: 8px;
  height: 8px;
  margin: 0 0.3em;
  cursor: pointer;
  border: solid 1.2px;
  border-radius: 4px;

  ${e=>e.active?`\n        background: ${(0,m.ow)("text.scratched")(e)};\n        border-color: ${(0,m.ow)("text.scratched")(e)};\n      `:`\n        background: ${(0,m.ow)("background.lighter")(e)};\n        border-color: ${(0,m.ow)("text.scratched")(e)};\n      `}

  ${(0,m.aK)("small")} {
    width: 10px;
    height: 10px;
    border-radius: 8px;
  }
`,P=e=>{let{children:t,slidesPerView:n,showPartial:u,showPartialNextSlide:p,interval:m,transitionDuration:h,auto:g,showArrowControls:f,showControls:b,insideControls:P,onChange:z,gutter:S,itemHeight:I,isProductCarousel:O,lazy:R,goTo:M}=e,j=(0,i.Z)(e,["children","slidesPerView","showPartial","showPartialNextSlide","interval","transitionDuration","auto","showArrowControls","showControls","insideControls","onChange","gutter","itemHeight","isProductCarousel","lazy","goTo"]),L=a.Children.toArray(t),F=null==L?void 0:L.length,A=Math.min(F,n),{handlers:T,style:D,cardWidth:W,indicators:N,setActive:_,active:B,visible:H}=function({length:e,interval:t,transitionDuration:n,auto:l,slidesPerView:i,showPartial:u,showPartialNextSlide:p,lazy:m}){let h=((e,t,n)=>{let l=100/t/3;return l>10&&(l=10),n&&e>1?100-l:100})(e,i,u||p),g=h/i+"%",f=Math.ceil(e/i),b=`transform ${n}ms ease`,[v,x]=(0,a.useReducer)(s,Object.assign({},d,{visible:o({lazy:m,length:e,active:0,slidesPerView:i})})),Z=(0,r.QS)({onSwiping(e){x({type:"drag",offset:e.deltaX})},onSwipedLeft(e){c(e,x,f,1,i)},onSwipedRight(e){c(e,x,f,-1,i)},trackMouse:!1,trackTouch:!0});(0,a.useEffect)((()=>{let e=l&&setTimeout((()=>x({type:"next",indicators:f,slidesPerView:i})),t);return()=>clearTimeout(e)}),[l,v.offset,v.active]),(0,a.useEffect)((()=>{let t=setTimeout((()=>x({type:"done",lazy:m,length:e,slidesPerView:i})),n);return()=>clearTimeout(t)}),[v.desired]);let E=u?(100-h)/2:0,$=0!==v.active?E:0,y={transform:"translateX(0)",width:h*(e/i)+"%",left:`-${v.active*(h/i)-$}%`};if(v.desired!==v.active){let t=Math.abs(v.active-v.desired)/i,n=Math.sign(v.offset||0),l=-1*Math.sign(v.desired-v.active),a=100*(n||l)/(e/i)*t,r=0;0===v.active&&(r=E/e/i),0===v.desired&&(r=-E/(e/i)*1),y.transition=b,y.transform=`translateX(${a+r}%)`}else Number.isNaN(v.offset)||(y.transform=`translateX(${v.offset}px)`);return{active:v.active,setActive:e=>x({type:"jump",desired:e,slidesPerView:i}),handlers:Z,style:y,cardWidth:g,indicators:f,visible:v.visible}}({length:F,interval:m,transitionDuration:h,auto:g,slidesPerView:A,showPartial:u,showPartialNextSlide:p,lazy:R}),[V,U]=(0,a.useState)(0);return(0,a.useEffect)((()=>{U(M),_(M)}),[M]),(0,a.useEffect)((()=>{z(B)}),[B]),F>1?a.createElement(v,(0,l.Z)({"data-testid":"carousel"},j),f&&a.createElement($,{"data-testid":"arrow-previous-button",disabled:V-1<0,left:!0,insideControls:P,onClick:()=>{let e=V-1;U(e),_(e)}},a.createElement(y,null)),a.createElement(E,{showArrowControls:f,insideControls:P},a.createElement(x,(0,l.Z)({showControls:b,insideControls:P,itemHeight:I},T,{style:D}),L.map(((e,t)=>a.createElement(Z,{"data-testid":"carousel-item",width:W,isProductCarousel:O,gutter:u||p||n>1?S:0,index:t,key:`carousel-item-${L.length}-${t+1}`},H.includes(t)&&e)))),b&&L.length>A&&a.createElement(w,{insideControls:P,"data-testid":"carousel-indicators"},Array(N).fill().map(((e,t)=>a.createElement(C,{"data-testid":"carousel-indicator",active:B/n===t,onClick:()=>{_(t),U(t)},key:`carousel-indicator-${L.length}-${t+1}`}))))),f&&a.createElement($,{"data-testid":"arrow-next-button",disabled:V+1===N,insideControls:P,onClick:()=>{let e=V+1;U(e),_(e)},right:!0},a.createElement(k,null))):t};P.defaultProps={slidesPerView:1,showPartial:!1,showPartialNextSlide:!1,interval:500,transitionDuration:400,auto:!0,showArrowControls:!1,showControls:!0,onChange:()=>{},gutter:4,isProductCarousel:!1,insideControls:!1,lazy:!1,goTo:0},P.CarouselItem=Z;var z=P},2761:function(e,t,n){n.d(t,{Z:function(){return s}});var l=n(2784),i=n(58331),a=n(8341);let r="icons.disabled",o=(0,l.forwardRef)((({value:e,onChange:t},n)=>{let[o,s]=(0,l.useState)(r),[d,c]=(0,l.useState)(r);return(0,l.useEffect)((()=>(s("like"===e?"icons.like":r),c("dislike"===e?"icons.dislike":r),()=>{s(r),c(r)})),[e]),l.createElement(a.Z,{ref:n,gridTemplateColumns:"1fr 1fr",gap:30},l.createElement(i.Z,{type:"like",label:"Sim",color:o,onClick:()=>{c(r),t({target:{value:"like"}})},onMouseOver:()=>s("icons.like"),onMouseLeave:()=>s((t=>"like"===e?t:r)),"data-testid":"btn-like"}),l.createElement(i.Z,{type:"dislike",label:"Não",color:d,onClick:()=>{s(r),t({target:{value:"dislike"}})},onMouseOver:()=>c("icons.dislike"),onMouseLeave:()=>c((t=>"dislike"===e?t:r)),"data-testid":"btn-dislike"}))}));o.displayName="Confirm";var s=o},12241:function(e,t,n){n.d(t,{Z:function(){return f}});var l=n(7896),i=n(31461),a=n(2784),r=n(34490),o=n(99673),s=n(91489),d=n(29869),c=n(60861);let u=(0,o.ZP)(d.Z)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  color: ${e=>(0,s.uu)("scratched")(e)};
  height: 52px;
`,p=(0,o.ZP)(c.Z)`
  align-items: center;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  display: flex;
  flex-direction: column;
  font-size: ${e=>(0,s.R)("fontSizes.0")(e)}px;
  height: 52px;
  min-width: 64px;
  padding: ${e=>(0,s.R)("space.1")(e)}px;
`;var m=n(19527),h=n(64586);function g(e){let{value:t}=e,n=(0,i.Z)(e,["value"]),{color:o,"data-testid":s,disabled:d,uppercase:c,variation:g,delay:f}=n,b=(0,i.Z)(n,["color","data-testid","disabled","uppercase","variation","delay"]),[v,x]=(0,a.useState)(!1),[Z,E]=(0,a.useState)(d);return a.createElement(m.Z,null,a.createElement(u,(0,l.Z)({"data-testid":`${s}-input`,readOnly:!0,value:t},b)),a.createElement(p,{color:o,"data-testid":`${s}-button`,disabled:Z,onClick:()=>(e=>(x(!0),E(!0),(0,h.vQ)(e),setTimeout((()=>{x(!1),E(!1)}),f)))(t),startIcon:a.createElement(r.CKM,{width:25,height:21}),uppercase:c,variation:g},v?"Copiado":"Copiar"))}g.defaultProps={color:"primary","data-testid":"copy-to-clipboard",delay:3e3,disabled:!1,uppercase:!1,value:"",variation:"fill"},g.displayName="CopyToClipboard";var f=g},84022:function(e,t,n){n.d(t,{Z:function(){return u}});var l=n(31461),i=n(2784),a=n(99673),r=n(91489),o=n(19527);let s=(0,a.ZP)(o.Z)``,d=a.ZP.span`
  background-color: ${e=>e.color||(0,r.dF)("primary")(e)};
  border-radius: 50%;
  color: ${e=>(0,r.uu)("lightest")(e)};
  min-width: ${e=>(0,r.R)("space.3")(e)}px;
  min-height: ${e=>(0,r.R)("space.3")(e)}px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
`,c=e=>{let{count:t}=e,n=(0,l.Z)(e,["count"]);return i.createElement(i.Fragment,null,t>=1&&i.createElement(s,n,i.createElement(d,n,t)))};c.defaultProps={count:0};var u=c},80001:function(e,t,n){n.d(t,{Z:function(){return d}});var l=n(2784),i=n(99673),a=n(19476);let r=(0,i.ZP)(a.UQ)`
  div + div:last-child {
    -webkit-line-clamp: unset;
    max-height: 100%;
    ${e=>e.open?"\n            max-height: 100%;\n          ":"\n            max-height: 0px;\n          "}
  }
`;var o=n(66228);let s=({faq:e,initialOpen:t,maxQuestions:n,showMoreQuestions:i,showLessQuestions:a,questionAs:s})=>{let[d,c]=(0,l.useState)(e.map((e=>Object.assign({},e,{isOpen:t})))),[u,p]=(0,l.useState)(n);return l.createElement(l.Fragment,null,d.map(((e,t)=>l.createElement(r,{"data-testid":"item-question",display:t>=u?"none":"block",key:`faq-accordion-${t}`,title:e.question,asTitle:s,open:e.isOpen,onClick:()=>{(e=>{c((t=>t.map(((t,n)=>e===n?Object.assign({},t,{isOpen:!t.isOpen}):t))))})(t)},openIcon:"ChevronRight",closeIcon:"ChevronUp"},e.answer))),i&&u<d.length&&l.createElement(r,{"data-testid":"show-more",title:i,open:!1,onClick:()=>{p(e.length)},openIcon:"ChevronDown",closeIcon:"ChevronDown",fontWeight:"100"}),a&&u===d.length&&l.createElement(r,{"data-testid":"show-less",title:a,open:!1,onClick:()=>{p(n)},openIcon:"ChevronUp",closeIcon:"ChevronUp",fontWeight:"100"}),l.createElement(o.ZP,{schema:(0,o.I1)(d),type:"FAQPage"}))};s.defaultProps={questionAs:"h3",faq:[],initialOpen:!1,maxQuestions:void 0,showLessQuestions:"",showMoreQuestions:""};var d=s},99554:function(e,t,n){n.d(t,{Z:function(){return m}});var l=n(31461),i=n(2784),a=n(34490),r=n(99673),o=n(91489),s=n(84546),d=n(66457);let c=(0,r.ZP)(s.Z)`
  border: solid 1px ${e=>(0,o.uu)("lighter")(e)};
  border-radius: 2px;
`;var u=n(33055);let p=e=>{let{onChange:t,onClearInput:n,label:r}=e,o=(0,l.Z)(e,["onChange","onClearInput","label"]),[s,p]=(0,i.useState)("");return i.createElement(c,o,i.createElement(d.xJ,null,i.createElement(a.olm,{color:"#818181","data-testid":"icon-search"}),i.createElement("form",null,i.createElement(u.Z,{text:"pesquisar por filtro",htmlFor:"search-filter"}),i.createElement(d.II,{id:`search-filter ${r}`,value:s,onChange:e=>{p(e.target.value),t(e)},placeholder:`Busque por ${r}`})),s&&i.createElement(a.B86,{color:"#818181",onClick:e=>{p(""),n(e)},title:"Limpar texto"})))};p.defaultProps={onChange:()=>({}),onClearInput:()=>({}),label:""};var m=p},1729:function(e,t,n){n.d(t,{Z:function(){return m}});var l=n(2784),i=n(34490),a=n(99673),r=n(8341);let o=(0,a.ZP)(r.Z)({gridTemplateColumns:"auto 1fr",alignItems:"center",padding:"6px 12px"}),s=a.ZP.div`
  margin-right: 7px;
`,d=a.ZP.a`
  text-decoration: none;
`,c=a.ZP.div``;var u=n(63825);let p=({item:e,onClick:t,children:n})=>{let{label:a,href:r,selected:p}=e,[m,h]=(0,l.useState)(p);return(0,l.useEffect)((()=>(h(p),()=>{h(!1)})),[p]),l.createElement("li",null,l.createElement(d,{href:r,onClick:n=>t(n,e),role:"button","data-testid":"filter-item"},l.createElement(o,null,l.createElement(s,{role:"checkbox","aria-checked":p,"aria-labelledby":a},m?l.createElement(i.nvx,{"aria-hidden":"true"}):l.createElement(i.XE8,{"aria-hidden":"true"})),l.createElement(c,{children:n||l.createElement(u.Z,{fontSize:1,id:a},a)}))))};p.defaultProps={item:{selected:!1},children:null,onClick:()=>({})};var m=p},33055:function(e,t,n){n.d(t,{Z:function(){return o}});var l=n(31461),i=n(2784);let a=n(99673).ZP.label`
  border: 0;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`,r=e=>{let{text:t}=e,n=(0,l.Z)(e,["text"]);return i.createElement(a,n,t)};r.defaultProps={text:""};var o=r},2490:function(e,t,n){n.d(t,{Z:function(){return m}});var l=n(2784),i=n(99673),a=n(19527),r=n(84546);let o=i.iv`
  overflow-y: hidden;

  > *:not(:first-child) {
    margin-left: 8px;
  }
`,s=i.iv`
  overflow-x: hidden;

  > *:not(:first-child) {
    margin-top: 8px;
  }
`,d=(0,i.ZP)(a.Z).attrs((({directionType:e})=>({pb:"1em",flexDirection:e})))`
  ${({directionType:e})=>"column"===e&&"\n      padding: 1em;\n  "}

  ${({directionType:e})=>"row"===e?o:s};
`,c=(0,i.ZP)(r.Z).attrs((()=>({color:"primary.base",fontSize:1})))`
  text-decoration: underline;
  cursor: pointer;
`;var u=n(39471);let p=({items:e,onItemClick:t,directionType:n,limitItems:i})=>{let[a,r]=(0,l.useState)(i),o=e.length,s=(0,l.useMemo)((()=>i?e.slice(0,a):e),[i,e,a]);return l.createElement(d,{"data-testid":"hot-links",directionType:n},s.map(((e,i)=>l.createElement(u.Z,{key:i,item:e,onClick:t,directionType:n,borderColor:e.borderColor}))),!!i&&a<o&&l.createElement(c,{onClick:()=>r(o),"data-testid":"show-more",role:"button"},"Ver mais"))};p.defaultProps={items:[],directionType:"row",limitItems:null,onItemClick:()=>{}};var m=p},15309:function(e,t,n){n.d(t,{Z:function(){return a}});var l=n(2784);let i=n(99673).ZP.div`
  border: 0;
  background: transparent;
  display: flex;
`;var a=function({onClick:e,children:t}){return l.createElement(i,{onClick:t=>{e(t)}},t)}},97769:function(e,t,n){n.d(t,{Z:function(){return p}});var l=n(7896),i=n(31461),a=n(2784),r=n(93837),o=n(99673),s=n(68054),d=n(63825);let c=(0,o.ZP)(d.Z).attrs((({isList:e})=>({fontSize:[e?0:1,1],fontWeight:"regular",lineHeight:["fontSize","display"]})))`
  ${s.cp}
`,u=e=>{let{information:t,isList:n}=e,o=(0,i.Z)(e,["information","isList"]),{quantity:s,amount:d,paymentMethodDescription:u,totalAmount:p}=t;return a.createElement(a.Fragment,null,d&&s>1&&p&&a.createElement(c,(0,l.Z)({isList:n,"data-testid":"installment"},o),"ou ",(0,r.Z)({value:p})," em ",s,"x de"," ",(0,r.Z)({value:d})," ",u))};u.defaultProps={information:{amount:"",isList:!1,paymentMethodDescription:"",quantity:"",totalAmount:""}};var p=u},78012:function(e,t,n){n.d(t,{Z:function(){return T}});var l=n(7896),i=n(31461),a=n(2784);var r=({searchTerm:e,dataSource:t,sortBy:n,searchProperty:l})=>((e,t)=>t instanceof Function?null==e?void 0:e.sort(t):e)(((e,t,n)=>Array.isArray(e)&&"string"==typeof n&&n?null==e?void 0:e.filter((e=>{var l,i;return null==(l=e[n])||null==(i=l.toUpperCase())?void 0:i.includes(t.toUpperCase())})):e)(t,e,l),n);let o=(0,a.createContext)(!1),s=()=>(0,a.useContext)(o);var d=e=>{let{children:t,value:{disableGutters:n}}=e,l=(0,i.Z)(e.value,["disableGutters"]);return a.createElement(o.Provider,{value:Object.assign({basis:n?32:40,gutters:n?0:3},l)},t)},c=n(99673),u=n(91489),p=n(81572),m=n(88699),h=n(19476);let g=({gutters:e,basis:t=0,inset:n=0,props:l})=>(0,u.R)(`space.${e}`)(l)+parseInt(t,10)*Number(n),f=({horizontal:e})=>e&&c.iv`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30px, max-content));
    justify-content: space-between;
  `,b=c.iv`
  > *:not(:last-child) {
    border-bottom: ${(0,u.R)("borders.0")};
  }
`,v=c.ZP.li({listStyle:"none",position:"relative"}),x=(0,c.ZP)(p.Z).attrs((e=>{let{inset:t,basis:n,gutters:l,content:a,horizontal:r}=e,o=(0,i.Z)(e,["inset","basis","gutters","content","horizontal"]);return Object.assign({position:"relative",gap:0,rowGap:2,px:0,py:a?2:0,pl:g(t?{gutters:l,basis:n,inset:t,props:o}:{gutters:l,props:o}),pr:g({gutters:l,props:o})},r&&{textAlign:"center",pl:0,pr:0},o)}))`
  cursor: pointer;
  ${({selectable:e})=>e&&c.iv`
      &:hover {
        background: ${(0,u.dF)("darker")};
      }
    `};

  ${({horizontal:e})=>e&&c.iv`
      > span {
        position: unset;
        transform: unset;
        left: 0;
      }
    `}

  ${({divided:e,isCollapsed:t})=>e&&!t&&c.iv`
      border-top: ${(0,u.R)("borders.0")};
    `}
`,Z=(0,c.ZP)(h.rj)`
  ${({divided:e})=>e&&b}
  ${f}
`,E=(0,c.ZP)(m.Z)`
  ${({divided:e})=>e&&b}
  ${f}
`,$=e=>{let{as:t,children:n,color:r,fill:o,startIcon:d,endIcon:c,onClick:u}=e,p=(0,i.Z)(e,["as","children","color","fill","startIcon","endIcon","onClick"]),{variant:m,divided:h,scale:g,gutters:f,isCollapsed:b}=s();return a.createElement(x,(0,l.Z)({forwardedAs:t,variant:m,startIcon:d,endIcon:c,gutters:f,scale:g,color:r,fill:o,divided:h,isCollapsed:b,onClick:u,"data-testid":"list-action"},p),n)};$.defaultProps={as:"div",centered:!1,children:null,fontWeight:"medium",gap:1},$.displayName="ListAction";var y=n(19527),k=n(18281);var w=e=>{let t=t=>{let{as:n}=t,r=(0,i.Z)(t,["as"]),{type:o}=s();return["ul","ol"].includes(o)&&"a"===n?a.createElement(v,null,a.createElement(e,(0,l.Z)({as:n},r))):a.createElement(e,(0,l.Z)({as:["ul","ol"].includes(o)?"li":"div"},r))};return t.defaultProps={as:""},t};let C=e=>{let{as:t,checked:n,children:r,content:o,defaultChecked:d,description:c,endIcon:u,fill:p,value:m,onClick:h}=e,g=(0,i.Z)(e,["as","checked","children","content","defaultChecked","description","endIcon","fill","value","onClick"]),[f,b]=(0,a.useState)(n),{variant:v,scale:Z,basis:E,gutters:$,selectable:w}=s();return(0,a.useEffect)((()=>{b(n)}),[n]),a.createElement(x,(0,l.Z)({forwardedAs:t,variant:v,startIcon:a.createElement(y.Z,{width:E},a.createElement(k.Z,{checked:f,defaultChecked:d,value:m})),endIcon:u,description:c,content:o,selectable:w,scale:Z,gutters:$,fill:p,onClick:e=>{b(!f),h(e)},"data-testid":"list-checkbox"},g),r)};C.defaultProps={checked:!1,children:null,endIcon:"",fill:"currentColor",onClick:()=>{}};var P=w(C);let z=e=>{let{as:t,children:n}=e,r=(0,i.Z)(e,["as","children","onClick"]),{variant:o,scale:d,gutters:c}=s();return a.createElement(x,(0,l.Z)({forwardedAs:t,variant:o,scale:d,gutters:c,"data-testid":"list-header"},r),n)};z.defaultProps={children:null,fontSize:2,fontWeight:"medium"},z.displayName="ListHeader";var S=w(z),I=n(34490);let O=e=>{let{as:t,children:n,content:r,description:o,endIcon:d,fill:c,inset:u,onClick:p,startIcon:m}=e,h=(0,i.Z)(e,["as","children","content","description","endIcon","fill","inset","onClick","startIcon"]),{variant:g,basis:f,scale:b,gutters:v,selectable:Z,horizontal:E}=s();return a.createElement(x,(0,l.Z)({forwardedAs:t,variant:g,startIcon:m&&!u&&a.createElement(y.Z,{width:f},"string"==typeof m?a.createElement(I.JO$,{name:m,color:c,fill:c}):m),endIcon:d&&("string"==typeof d?a.createElement(y.Z,{width:f,justifyContent:"flex-end"},a.createElement(I.JO$,{name:d,color:c,fill:c})):d),description:o,content:r,selectable:Z,gutters:v,basis:f,inset:u,scale:b,fill:c,horizontal:E,onClick:p,"data-testid":"list-item"},h),n)};O.defaultProps={children:null,endIcon:"",fill:"currentColor",inset:!1,startIcon:""},O.displayName="ListItem";var R=w(O),M=n(70715);let j=e=>{let{as:t,children:n,href:r,label:o,value:d,selected:c,description:u,endIcon:p,fill:m,onChange:h}=e,g=(0,i.Z)(e,["as","children","href","label","value","selected","description","endIcon","fill","selectedOption","onChange"]),{name:f,variant:b,basis:v,scale:Z,gutters:E,selectable:$}=s();return a.createElement(x,(0,l.Z)({forwardedAs:t,variant:b,onClick:e=>{e.preventDefault(),h(e,{label:o,href:r,value:d,selected:!0})},startIcon:a.createElement(y.Z,{width:v},a.createElement(M.Z,{readOnly:!0,name:f,label:o,checked:c,value:d,width:1})),endIcon:p,description:u,selectable:$,scale:Z,gutters:E,fill:m,"data-testid":"list-radio-group",href:r},g),n)};j.defaultProps={checked:!1,children:null,endIcon:"",fill:"currentColor",onChange:()=>{}};var L=w(j);let F=({children:e,dataSource:t,renderItem:n,searchProperty:l,searchTerm:i,sortBy:o})=>{let s=(0,a.useMemo)((()=>r({dataSource:t,searchProperty:l,searchTerm:i,sortBy:o})),[t,i]);return Array.isArray(s)&&n instanceof Function?null==s?void 0:s.map(((e,t)=>n(Object.assign({key:t},e)))):e},A=e=>{let{as:t,children:n,dataSource:r,disableGutters:o,horizontal:s,divided:c,name:u,renderItem:p,scale:m,searchProperty:h,searchTerm:g,selectable:f,sortBy:b,variant:v,renderAction:x,trigger:$,collapsedIn:y,collapse:k}=e,w=(0,i.Z)(e,["as","children","dataSource","disableGutters","horizontal","divided","name","renderItem","scale","searchProperty","searchTerm","selectable","sortBy","variant","renderAction","trigger","collapsedIn","collapse"]),[C,P]=(0,a.useState)(r),[z,S]=(0,a.useState)(g);return(0,a.useEffect)((()=>{S(g)}),[g]),(0,a.useEffect)((()=>{P(r)}),[JSON.stringify(r)]),a.createElement(d,{value:{divided:c,disableGutters:o,horizontal:s,name:u,selectable:f,scale:m,variant:v,type:t,isCollapsed:$}},a.createElement(k?E:Z,(0,l.Z)({forwardedAs:t,divided:c,trigger:$,collapsedIn:y,horizontal:s,"data-testid":"list"},w),a.createElement(F,{searchTerm:z,dataSource:C,sortBy:b,searchProperty:h,renderItem:p,children:n})),x)};A.defaultProps={as:"ul",children:null,dataSource:[],disableGutters:!1,divided:!1,scale:"medium",searchProperty:"",searchTerm:"",selectable:!1,variant:"transparent",horizontal:!1},A.Collapse=e=>a.createElement(A,(0,l.Z)({collapse:!0},e)),A.Header=S,A.Item=R,A.Action=$,A.Checkbox=P,A.Radio=L,A.Collapse.displayName="ListCollapse";var T=A},33359:function(e,t,n){n.d(t,{Z:function(){return c}});var l=n(2784),i=n(34490),a=n(99673),r=n(19527);let o=(0,a.ZP)(r.Z)`
  cursor: pointer;
`,s=[{id:"gallery",label:"Galeria",icon:l.createElement(i.qiR,{height:"20",color:"#818181"})},{id:"list",label:"Lista",icon:l.createElement(i.OWX,{height:"18",color:"#818181"})},{id:"miniature",label:"Miniatura",icon:l.createElement(i.DxU,{height:"16",color:"#818181"})}];function d({onChange:e,defaultMode:t}){let[n,i]=(0,l.useState)(s.find((e=>e.id===t))),[a,r]=(0,l.useState)(s.findIndex((e=>e.id===t))+1);return(0,l.useEffect)((()=>{if(n.id!==t){let n=s.findIndex((e=>e.id===t));r(n+1),i(s[n]);let l=Object.assign({},s[n]);e(l)}}),[t]),l.createElement(o,{onClick:function(){(function(e){e>=s.length-1?r(0):r(e+1)})(a),i(s[a]);let t=Object.assign({},s[a]);delete t.icon,e(t)},p:1,"data-testid":"display-type"},n.label," ",n.icon)}d.defaultProps={defaultMode:"gallery"};var c=d},41065:function(e,t,n){n.d(t,{Z:function(){return x}});var l=n(7896),i=n(31461),a=n(2784),r=n(93837),o=n(99673),s=n(91489),d=n(84546),c=n(7029);let u=o.ZP.li`
  display: flex;
  align-items: center;
  padding: ${e=>(0,s.R)("space."+(e.desktopMode?1:2))(e)}px;
  ${e=>e.desktopMode&&o.iv`
      cursor: pointer;
      ${({borderBottom:e})=>e&&o.iv`
          border-bottom: 1px solid #e5e5e5;
        `}

      :hover {
        background-color: #dcebf4;
      }
    `}
`,p=(0,o.ZP)(d.Z)`
  padding-left: ${e=>(0,s.R)("space.1")(e)}px;
  font-size: ${e=>(0,s.R)("fontSizes."+(e.desktopMode?0:2))(e)}px;
  color: ${e=>(0,s.uu)("scratched")(e)};
`,m=(0,o.ZP)(d.Z)`
  padding-left: ${e=>(0,s.R)("space.1")(e)}px;
  font-size: ${e=>(0,s.R)("fontSizes.0")(e)}px;
  color: ${e=>(0,s.uu)("primary")(e)};
  font-weight: ${e=>(0,s.R)("fontWeights.bold")(e)};
  text-align: initial;
`,h=(0,o.ZP)(c.Z)``,g=o.ZP.div`
  width: 59px;
  height: 44px;
`;var f=(e,t,n)=>{var l;let i=null==e||null==(l=e.toLowerCase())?void 0:l.trim(),r=t.toLowerCase().indexOf(i);return 0===r?a.createElement("span",{key:n},i,a.createElement("strong",null,t.substring(r+i.length,t.length))):a.createElement("span",{key:n},a.createElement("strong",null,t.substring(0,r)),i,a.createElement("strong",null,t.substring(r+i.length,t.length)))};var b=({query:e,suggestionItem:t})=>{if(e===t.term)return e;let n=e.split(" ");return t.term.split(" ").filter((e=>Boolean(e))).map(((e,t)=>{let l=n.find((t=>e.toLowerCase().includes(t.toLowerCase())));return l?l===e?e:f(l,e,t):a.createElement("strong",{key:t.toString()},e)})).reduce(((e,t)=>[e," ",t]))};let v=e=>{let{item:t,term:n,desktopMode:o,onSearchSubmit:s}=e,d=(0,i.Z)(e,["item","term","desktopMode","onSearchSubmit"]),[c,f]=(0,a.useState)(n);return(0,a.useEffect)((()=>{f(n)}),[n]),a.createElement(u,(0,l.Z)({"data-testid":"suggestion-item",key:t.count||t.id,onClick:s,desktopMode:o},d),t.img&&a.createElement(g,null,a.createElement(h,{src:t.img})),d.prefix&&!t.img?d.prefix:a.createElement(a.Fragment,null),a.createElement("div",null,a.createElement(p,(0,l.Z)({"data-testid":"suggestion-text",desktopMode:o},d),b({query:c,suggestionItem:t}),o&&t.count?` (${t.count})`:""),t.price&&a.createElement(m,{"data-testid":"suggestion-price"},(0,r.Z)({value:t.price}))))};var x=v;v.defaultProps={item:{},desktopMode:!1,borderBottom:!1,onSearchSubmit:null}},48919:function(e,t,n){n.d(t,{Z:function(){return z}});var l=n(7896),i=n(31461),a=n(2784),r=n(99673),o=n(68054),s=n(91489),d=n(10200),c=n(19527);let u=r.ZP.nav`
  background-color: ${e=>(0,s.dF)("white")(e)};
  width: fit-content;
  padding: 20px;
`,p=r.ZP.ul`
  list-style: none;
  display: flex;
`,m=r.ZP.li.attrs((()=>({mr:3})))`
  display: flex;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  width: max-content;

  ${o.Dh}
`,h=(0,r.ZP)(d.Z)``,g=(0,r.ZP)(c.Z).attrs((e=>Object.assign({color:"text.primary",m:0},e)))``,f=({data:e})=>{let{linksList:t}=e;return a.createElement(u,{"data-testid":"header-menu-footer-elem"},t?a.createElement(p,null,t.map(((e,t)=>a.createElement(m,{key:`footer-item-${t}`},e.img&&e.img.component&&a.createElement(g,{"data-testid":"image-elem",width:e.img.width},e.img.component),a.createElement(h,{href:e.url,px:2},e.label))))):a.createElement(a.Fragment,null))};f.defaultProps={data:{}};var b=f;let v=r.ZP.div.attrs((e=>Object.assign({bg:"background.white"},e)))`
  border-bottom: ${e=>e.borderColor?`5px solid ${e.borderColor}`:""};
  max-height: fit-content;
  width: fit-content;
  ${s.$_}
`,x=r.ZP.div`
  display: flex;
  align-items: center;
  vertical-align: middle;
  justify-content: center;
`,Z=r.ZP.div.attrs((e=>Object.assign({p:3},e)))`
  display: flex;
  flex-direction: column;
  ${o.Dh}
`,E=r.ZP.div.attrs((e=>Object.assign({m:3},e)))`
  /* let external project to define banner's width */
  ${o.bK}
  ${o.Dh}
`,$=r.ZP.ul`
  display: inline-grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(${e=>e.lines}, auto);
`,y=r.ZP.li.attrs((e=>Object.assign({mr:5},e)))`
  list-style: none;
  line-height: 24px;
  ${o.Dh}
`,k=(0,r.ZP)(d.Z)``,w=r.ZP.li.attrs((e=>Object.assign({color:"primary.base",fontSize:1,fontWeight:"bold",px:2},e)))`
  list-style: none;
  line-height: 24px;
  ${s.$_}
  ${o.cp}
  ${o.Dh}
`;var C=n(19476);let P=e=>{let{data:t}=e,n=(0,i.Z)(e,["data"]),{subcategoriesList:r,url:o,label:s,borderColor:d,banner:c,footerData:u,linePerCol:p=16,subsections:m}=t,{onMenuItemClick:h}=n;return a.createElement(v,{"data-testid":"menu-box-elem",borderColor:d},a.createElement(x,null,r?a.createElement(Z,null,a.createElement($,{lines:p},r.map(((e,t)=>a.createElement(y,{key:`link-item-${t}`},a.createElement(k,(0,l.Z)({},e.highlight?{color:d}:{},{href:e.url,onClick:t=>h(t,e,"departamento")}),e.label)))),m?m.map(((e,t)=>a.createElement(a.Fragment,{key:`subsection-${t}`},a.createElement("div",null),a.createElement(w,{key:`subsection-title-${t}`},e.label),e.linksList.map(((e,n)=>a.createElement(y,{key:`subsection-link-item-${t}-${n}`},a.createElement(k,{href:e.url},e.label))))))):a.createElement(a.Fragment,null)),o&&"#"!==o&&s?a.createElement(k,{color:d,href:o},"+ ",s):a.createElement(a.Fragment,null)):a.createElement(a.Fragment,null),c&&c.component&&a.createElement(E,{"data-testid":"banner-elem",width:c.width},c.component)),u?a.createElement(a.Fragment,null,a.createElement(C.bo,null),a.createElement(b,{data:u})):a.createElement(a.Fragment,null))};P.defaultProps={onMenuItemClick:()=>({}),data:{}};var z=P},28982:function(e,t,n){n.d(t,{Z:function(){return d}});var l=n(2784),i=n(99673),a=n(91489),r=n(19527);let o=(0,i.ZP)(r.Z).attrs((()=>({flexDirection:["column","row","row"],justifyContent:"space-evenly",left:0,lineHeight:"big",padding:3,position:"fixed",top:["0","inherit","inherit"],width:"100%",zIndex:3})))`
  background-color: ${e=>(0,a.R)("baseColors.overlay.dark")(e)};
  ${(0,a.aK)("small")} {
    bottom: 0;
    max-height: 100px;
  }
`,s=({children:e})=>l.createElement(o,null,e);s.defaultProps={children:void 0};var d=s},19620:function(e,t,n){n.d(t,{Z:function(){return u}});var l=n(7896),i=n(2784);let a=(e,t)=>Array.from({length:t-e+1},((t,n)=>e+n)),r=(e,t)=>{let n=`page=${t}`;if(e.includes("page=")){let[l]=e.split("page=");return 1===t?l.substring(0,l.length-1):`${l}${n}`}return 1===t?e:e.includes("?")?`${e}&${n}`:`${e}?${n}`};var o=n(99673);let s=o.ZP.nav``,d=o.ZP.ul`
  list-style: none;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;

  & > li {
    margin-right: 8px;
  }
`;o.ZP.li`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 26px;
  min-width: 26px;
  height: 30px;
  border-radius: 2px;
  border: 0;
  font-weight: normal;
  padding: 5px;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
`;var c=n(81484);function u(e){let{items:t}=function(e={}){let{boundaryCount:t=1,count:n=1,disabled:l,path:i="",page:o=1,onChange:s,siblingCount:d=1}=e,c=(e,t)=>{s(e,t)},u=t-1,p=a(1,Math.min(u+1,n)),m=a(Math.max(n-u,u+2),n),h=Math.max(Math.min(o-d,n-u-2*d-2),u+3),g=Math.min(Math.max(o+d,u+2*d+3),m[0]-2),f=["previous",...p,...h>u+3?["ellipsis"]:2+u<n-u-1?[2+u]:[],...a(h,g),...g<n-u-2?["ellipsis"]:n-u-1>u+1?[n-u-1]:[],...m,"next"],b={first:1,previous:o-1,next:o+1,last:n};return{items:f.map((e=>"number"==typeof e?{onClick:t=>{c(t,e)},type:"page",page:e,selected:e===o,disabled:l,href:r(i,e),"aria-current":e===o?"true":void 0}:{onClick:t=>{c(t,b[e])},type:e,page:b[e]||null,disabled:"next"===e?o>=n:o<=1}))}}(e);return i.createElement(s,(0,l.Z)({},e,{"aria-label":"pagination navigation"}),i.createElement(d,null,null==t?void 0:t.map(((e,t)=>{var n,a,r;let o=Object.assign({},e,{"aria-label":(n=e.type,a=e.page,r=e.selected,"page"===n?`${r?"":"Go to "}page ${a}`:`Go to ${n} page`)});return i.createElement("li",{key:t},i.createElement(c.Z,(0,l.Z)({},o,{"data-testid":"pagination-item"})))}))))}u.defaultProps={boundaryCount:1,count:1,disabled:!1,page:1,siblingCount:1,onChange:()=>{}}},81484:function(e,t,n){n.d(t,{Z:function(){return h}});var l=n(7896),i=n(2784),a=n(99673),r=n(34490),o=n(91489);let s=a.ZP.div``,d=a.ZP.a`
  display: flex;
  justify-content: center;
  align-items: center;

  background: none;
  background-color: ${e=>e.selected&&(0,o.ow)("base")};
  color: ${e=>(0,o.ow)(e.selected?"text":"text.dark")(e)};
  padding: 5px;
  min-height: 26px;
  height: 30px;
  min-width: 26px;
  border: 0;
  border-radius: 2px;
  font-size: ${e=>(0,o.R)("fontSizes.2")(e)}px;
  font-family: ${e=>(0,o.R)("fontFamily")(e)};
  text-decoration: none;
`,c=a.ZP.button`
  visibility: ${e=>e.disabled?"hidden":"visible"};
  border: 0;
  background: none;
  display: flex;
`,u=e=>({width:30,height:30,color:e.disabled?"#ccc":"#333",cursor:e.disabled?"not-allowed":"pointer"}),p=(0,a.ZP)(r.s$$).attrs(u)``,m=(0,a.ZP)(r._Qn).attrs(u)``;function h(e){let{onClick:t,type:n,page:a,disabled:r,href:o}=e,u=["previous","next"].includes(n);return"ellipsis"===n?i.createElement(s,null,"..."):"page"===n?i.createElement(d,(0,l.Z)({href:o,role:"button",title:`página ${a}`,onClick:!e.selected&&t},e),a):i.createElement(c,(0,l.Z)({onClick:t},e),u&&("previous"===n?i.createElement(p,{disabled:r}):i.createElement(m,{disabled:r})))}h.defaultProps={disabled:!1,href:null,onClick:()=>{},page:null,selected:!1}},563:function(e,t,n){n.d(t,{Z:function(){return N}});var l=n(7896),i=n(2784),a=n(34490),r=n(93837),o=n(64586),s=n(91489),d=n(99673),c=n(84546),u=n(19527),p=n(63825),m=n(60861),h=n(19476);(0,d.ZP)(c.Z)``;let g=(0,d.ZP)(u.Z)`
  padding: 2px;
  border: solid 2px
    ${({selected:e})=>e?(0,s.dF)("primary"):(0,s.dF)("darker")};
  border-radius: 2px;
  width: 50px;
  justify-content: center;
  margin: 0 2px;
`,f=(0,d.ZP)(h.td)`
  display: flex;
  margin: 0 10px;
`,b=d.ZP.table`
  width: 100%;
  border-spacing: unset;

  & tr:nth-child(n + 13) {
    display: ${({allVisible:e})=>e?"table-row":"none"};
  }
`,v=d.ZP.thead`
  font-family: ${e=>(0,s.R)("Helvetica")(e)};
  color: ${e=>(0,s.R)("colors.darkSilver")(e)};
  font-size: ${e=>(0,s.R)("fontSizes.0")(e)}px;
`,x=d.ZP.span`
  font-weight: ${e=>(0,s.R)("fontWeights.light")(e)};
  font-style: italic;
`,Z=d.ZP.th`
  text-align: left;
  padding: 0 10px;
`,E=d.ZP.td`
  padding: 8px 10px;
  text-align: left;
  color: ${e=>(0,s.uu)("base")(e)};
  font-size: ${e=>(0,s.R)("fontSizes.0")(e)}px;
`,$=d.ZP.span`
  font-weight: ${e=>(0,s.R)("fontWeights.medium")(e)};
`,y=d.ZP.th`
  text-align: right;
  padding: 0 10px;
`,k=d.ZP.td`
  font-family: ${e=>(0,s.R)("Helvetica")(e)};
  color: ${e=>(0,s.uu)("base")(e)};
  padding: 0px 10px;
  font-size: ${e=>(0,s.R)("fontSizes.0")(e)}px;
  text-align: right;
`,w=d.ZP.tr`
  background-color: ${e=>e.index%2==0?(0,s.dF)("darker")(e):null};
`,C=d.ZP.p`
  margin-bottom: 8px;
`,P=d.ZP.span`
  display: flex;
  align-items: center;
  color: ${e=>(0,s.ow)("primary.base")(e)};
  font-size: ${e=>(0,s.R)("fontSizes.1")(e)}px;
  margin: 10px;
  font-weight: ${e=>(0,s.R)("fontWeight.normal")(e)};
`,z=d.ZP.span`
  color: ${e=>(0,s.uu)("base")(e)};
  font-size: ${e=>(0,s.R)("fontSizes.0")(e)}px;
  font-weight: ${e=>(0,s.R)("fontWeights.medium")(e)};
`,S=(0,d.ZP)(p.Z)`
  color: ${e=>(0,s.ow)("secondary.base")(e)};
  font-size: ${e=>(0,s.R)("fontSizes.0")(e)}px;
  margin-left: 4px;
`,I=(0,d.ZP)(p.Z)``,O=d.ZP.div`
  margin: 10px;
`,R=(0,d.ZP)(m.Z)`
  width: 100%;
`,M=({onChange:e,payments:t})=>i.createElement(f,{"data-testid":"payments-list",onChange:e},["luizaCard","creditCard","pix","bankSlip"].map((e=>{var n;return!(null==t||null==(n=t[e])||!n.installmentPlans)&&i.createElement(h.OK,{value:t[e].id,key:`${e}-tab`,"data-testid":`${e}-tab`},i.createElement(g,null,i.createElement(a.JO$,{name:(0,o.kC)(e)})))})));M.defaultProps={payments:{}};var j=M;let L="% de desconto",F="sem juros";var A=n(31461);let T=e=>{let{installments:t,showAll:n,showMoreLabel:a}=e,o=(0,A.Z)(e,["installments","showAll","showMoreLabel"]),[s,d]=(0,i.useState)(n);return i.createElement(i.Fragment,null,i.createElement(b,(0,l.Z)({allVisible:s},o),i.createElement(v,null,i.createElement("tr",null,i.createElement(Z,null,i.createElement(x,null,"(Produto + Frete)"),i.createElement(C,null,"Numero de parcelas")),i.createElement(y,null,"Total"))),i.createElement("tbody",null,t.map(((e,t)=>i.createElement(w,{index:t,key:null==e?void 0:e.installment},i.createElement(E,null,i.createElement("span",null,Number(null==e?void 0:e.installment)>1&&(e=>parseInt(e,10)>=10?`${e}x de`:`0${e}x de`)(null==e?void 0:e.installment)," ",i.createElement($,null,(0,r.Z)({value:null==e?void 0:e.installmentAmount})),1===Number(null==e?void 0:e.installment)&&` ${F} `),!!Number((null==e?void 0:e.discount)||0)&&i.createElement(S,{as:"span"},Number(null==e?void 0:e.discount),L),i.createElement("p",null,Number(null==e?void 0:e.installment)>1&&(Number((null==e?void 0:e.interestAmount)||0)?"com juros":F))),i.createElement(k,null,Number(null==e?void 0:e.installment)>1&&(0,r.Z)({value:null==e?void 0:e.totalAmount}))))))),(t||[]).length>12&&!s&&i.createElement(R,{"data-testid":"show-more",size:"small",onClick:()=>d(!0)},a))};T.defaultProps={installments:[],showAll:!0,showMoreLabel:"veja mais"};var D=T;let W=({asTab:e,showMoreLabel:t,onChange:n,payments:o})=>{var s,d,c,p,m,g,f,b,v,x,Z,E;let{luizaCard:$,creditCard:y,bankSlip:k,pix:w}=o,[C,R]=(0,i.useState)((null==$?void 0:$.id)||(null==y?void 0:y.id)||(null==w?void 0:w.id)||(null==k?void 0:k.id)||""),M=(e=>Object.values(e).reduce(((e,t)=>Object.assign({},e,{[t.id]:t})),{}))(o),F=e?h.x4:u.Z,A=e?{width:"100%"}:{display:"block",flex:"1 1"};return i.createElement(h.q5,{value:C},e&&i.createElement(j,{onChange:(e,t)=>{R(t),n(M[t])},payments:o}),i.createElement(u.Z,{justifyContent:"space-between",gap:2,flexWrap:"wrap"},(null==$?void 0:$.installmentPlans)&&i.createElement(F,(0,l.Z)({},A,{"data-testid":"luizaCard-panel",value:null==$?void 0:$.id}),i.createElement(P,null,!e&&i.createElement(a.OTZ,{mr:2})," ","Cartão Luiza"),i.createElement(D,{showAll:e,"data-testid":"luizaCard-table",showMoreLabel:t,installments:$.installmentPlans})),(null==y?void 0:y.installmentPlans)&&i.createElement(F,(0,l.Z)({},A,{"data-testid":"creditCard-panel",value:null==y?void 0:y.id}),i.createElement(P,null,!e&&i.createElement(a.aBT,{mr:2})," ","Cartão de crédito"),i.createElement(i.Fragment,null,i.createElement(D,{showAll:e,"data-testid":"creditCard-table",showMoreLabel:t,installments:y.installmentPlans}))),w&&i.createElement(F,(0,l.Z)({},A,{"data-testid":"pix-panel",value:null==w?void 0:w.id}),i.createElement(P,null,!e&&i.createElement(a.wrL,{mr:2})," ","Pix"),i.createElement(O,null,i.createElement(z,null,(0,r.Z)({value:null==w||null==(s=w.installmentPlans)||null==(d=s[0])?void 0:d.installmentAmount})),!!Number(null==w||null==(c=w.installmentPlans)||null==(p=c[0])?void 0:p.discount)&&i.createElement(S,{as:"span"},Number(null==w||null==(m=w.installmentPlans)||null==(g=m[0])?void 0:g.discount),L),i.createElement(I,{fontSize:0},"No PIX, com o código que será gerado na finalização da sua compra."))),k&&i.createElement(F,(0,l.Z)({},A,{"data-testid":"bankSlip-panel",value:null==k?void 0:k.id}),i.createElement(P,null,!e&&i.createElement(a.c4o,{mr:2})," ","Boleto bancário"),i.createElement(O,null,i.createElement(z,null,(0,r.Z)({value:null==k||null==(f=k.installmentPlans)||null==(b=f[0])?void 0:b.installmentAmount})),!!Number(null==k||null==(v=k.installmentPlans)||null==(x=v[0])?void 0:x.discount)&&i.createElement(S,{as:"span"},Number(null==k||null==(Z=k.installmentPlans)||null==(E=Z[0])?void 0:E.discount),L),i.createElement(I,{fontSize:0},"No boleto bancário, que será gerado na finalização da sua compra.")))))};W.defaultProps={asTab:!0,showMoreLabel:"veja mais",onChange:()=>({}),payments:{}};var N=W},23745:function(e,t,n){n.d(t,{Z:function(){return M}});var l=n(2784),i=n(93837),a=n(19527),r=n(12468),o=n(31461),s=n(99673),d=n(68054),c=n(91489),u=n(63825),p=n(84546);let m=s.ZP.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`,h={[r.Co]:s.iv`
    padding: 4px 4px;
  `,[r.IY]:s.iv`
    padding: 12px 35px;
  `,DEFAULT:s.iv`
    padding: 12px 12px;
  `},g=s.ZP.span`
  font-size: ${e=>(0,c.R)("fontSizes.1")(e)}px;
  border-radius: 4px;
  color: ${e=>(0,c.uu)("light")(e)};
  display: inline-block;
  background-color: ${e=>(0,c.ow)("background.secondary")(e)};
  ${e=>h[e.display]||h.DEFAULT}
`,f=e=>e?3:5,b=(0,s.ZP)(p.Z).attrs((e=>({fontSize:[f(e.isList),5],lineHeight:"fontSize"})))`
  color: ${e=>(0,c.uu)("base")(e)};
  font-weight: ${e=>(0,c.R)("fontWeights.medium")(e)};
  align-self: end;
  position: relative;
  span {
    font-size: ${e=>{let{isList:t}=e,n=(0,o.Z)(e,["isList"]);return t?(0,c.R)("fontSizes.0")(n):(0,c.R)("fontSizes.1")(n)}}px;
    font-weight: ${e=>(0,c.R)("fontWeights.regular")(e)};
    line-height: ${e=>(0,c.R)("lineHeights.thin")(e)}px;
  }
  ${d.Dh}
  ${d.cp}
`,v=(0,s.ZP)(p.Z)`
  ${d.cp}
  margin-top: 8px;
  line-height: ${e=>(0,c.R)("lineHeights.big")(e)};
`,x=(0,s.ZP)(u.Z)`
  color: ${e=>(0,c.ow)("secondary.base")(e)};
  font-size: ${e=>(0,c.R)("fontSizes.0")(e)}px;
`,Z=(0,s.ZP)(u.Z).attrs((({isList:e})=>({fontSize:[e?0:1,1],lineHeight:"fontSize",fontWeight:e?null:"regular",color:e?"text.scratched":"text.light"})))`
  margin: 0;
  text-align: left;
  text-decoration: line-through;
  ${d.cp}
  ${c.$_}
`,E=s.ZP.span`
  margin-left: 0.3rem;
`,$=(0,s.ZP)(u.Z)``,y=s.ZP.p`
  font-size: ${e=>(0,c.R)("fontSizes.0")(e)}px;
  font-weight: ${e=>(0,c.R)("fontWeights.regular")(e)};
  line-height: ${e=>(0,c.R)("lineHeights.standard")(e)}px;
`,k=(0,s.ZP)(b)`
  text-align: center;
  line-height: ${e=>(0,c.R)("lineHeights.small")(e)};
  letter-spacing: normal;
  font-size: ${e=>(0,c.R)("fontSizes.2")(e)}px;
  p {
    padding: 3px 0px 0px;
  }
`,w=(0,s.ZP)(p.Z)`
  line-height: 6px;
  margin-top: 8px;
  ${d.Dh}
`,C=s.ZP.div``,P="no Pix",z=({price:e,paymentMethodDescription:t,showInCashInfo:n})=>e?l.createElement(w,null,l.createElement(k,{"data-testid":"price-miniature"},(0,i.Z)({value:e})," ",n&&l.createElement(y,null,t||P))):l.createElement(C,{"data-testid":"empty-price-miniature"});z.defaultProps={price:"",paymentMethodDescription:"",showInCashInfo:!1};var S=z,I=n(97769);let O=({price:e,paymentMethodDescription:t,finalPrice:n,discount:r,installment:o,showInCashInfo:s,showDiscount:d,showDiscountOnlyCashInfo:c,isList:u})=>{let p=null==o?void 0:o.totalAmount;return l.createElement(v,null,l.createElement(b,{"data-testid":"price-default",isList:u},l.createElement(l.Fragment,null,n!==e&&l.createElement(Z,{"data-testid":"price-original",isList:u},(0,i.Z)({value:e})),l.createElement(a.Z,{alignItems:"center"},l.createElement($,{"data-testid":"price-value"},(0,i.Z)({value:n})),t?l.createElement(E,{"data-testid":"in-cash"},t," "):l.createElement(l.Fragment,null,(!p||parseFloat(n)<parseFloat(p))&&l.createElement(E,{"data-testid":"in-cash"},P))),s&&l.createElement(l.Fragment,null,d&&(!c||c&&!p||parseFloat(n)<parseFloat(p))&&l.createElement(x,{as:"span"},"(",`${Number(r)}% de desconto`,")")),o&&l.createElement(I.Z,{mt:2,information:o,isList:u}))))},R=({display:e,price:t,paymentMethodDescription:n,bestPrice:i,fullPrice:a,discount:o,installment:s,showInCashInfo:d,showDiscount:c,showDiscountOnlyCashInfo:u,isList:p})=>{let h=i||a||t,f=Boolean(d&&t!==h&&Number(o));return h?e===r.Co?l.createElement(S,{price:h,showInCashInfo:f,paymentMethodDescription:n}):l.createElement(O,{price:t,finalPrice:h,discount:o,installment:s,showInCashInfo:f,showDiscount:c,showDiscountOnlyCashInfo:u,paymentMethodDescription:n,isList:p}):l.createElement(m,{"data-testid":"price-unavailable"},l.createElement(g,{display:e},"Xiii, já foi tudo :("))};R.defaultProps={display:r.yg,isList:!0,price:"",bestPrice:"",discount:"",installment:{amount:"",paymentMethodDescription:"",quantity:"",totalAmount:""},showInCashInfo:!0,showDiscount:!1,showDiscountOnlyCashInfo:!1};var M=R},58125:function(e,t,n){n.d(t,{Z:function(){return f}});var l=n(2784),i=n(93837),a=n(19476),r=n(63113),o=n(99673),s=n(91489);let d=(0,o.ZP)(a.rj).attrs((e=>Object.assign({my:3,mx:2,rowGap:3},e)))`
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 0.5fr 0.5fr;
  grid-template-areas:
    'input-values input-values'
    'slider-input slider-input'
    'apply-button apply-button';
`,c=(0,o.ZP)(a.rj).attrs((e=>Object.assign({gap:2},e)))`
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-area: input-values;
`,u=o.ZP.div`
  z-index: 0;
  grid-area: slider-input;
  position: relative;
`,p=(0,o.ZP)(a.xv)`
  color: ${e=>(0,s.uu)("scratched")(e)};
`,m=(0,o.ZP)(a.zx)`
  grid-area: apply-button;
`;var h=n(64586);let g=({item:e,onApply:t,min:n,max:o,initialMin:s,initialMax:g})=>{let[f,b]=(0,l.useState)(),[v,x]=(0,l.useState)(),[Z,E]=(0,l.useState)(),[$,y]=(0,l.useState)();(0,l.useEffect)((()=>{b(s),E((0,r.Z)(100*s).currency)}),[s]),(0,l.useEffect)((()=>{x(g),y((0,r.Z)(100*g).currency)}),[g]);let k=f===s&&v===g||!(0,h.Z4)(f,v,n,o)||!(0,h.rx)(v,f,n,o),w=e=>{let{amount:t,currency:n}=(0,r.Z)(e);x(t),y(n)},C=e=>{let{amount:t,currency:n}=(0,r.Z)(e);b(t),E(n)};return l.createElement(d,{"data-testid":"price"},l.createElement(c,null,l.createElement(a.kC,{flexDirection:"column",gap:1},l.createElement(p,{"data-testid":"price-range-min-label",fontSize:0},l.createElement(a.xv,{color:"inherit"},"Mínimo:"),l.createElement(a.xv,{color:"inherit"},(0,i.Z)({value:n}))),l.createElement(a.II,{"data-testid":"price-range-min-input",value:Z,placeholder:"Ex: R$ 250,00",maxLength:15,onChange:e=>C(e.target.value)})),l.createElement(a.kC,{flexDirection:"column",gap:1},l.createElement(p,{"data-testid":"price-range-max-label",fontSize:0},l.createElement(a.xv,{color:"inherit"},"Máximo:"),l.createElement(a.xv,{color:"inherit"},(0,i.Z)({value:o}))),l.createElement(a.II,{"data-testid":"price-range-max-input",value:$,placeholder:"Ex: R$ 500,00",maxLength:15,onChange:e=>w(e.target.value)}))),l.createElement(u,null,l.createElement(a.U2,{maxAllowed:o,minAllowed:n,currentMax:v,currentMin:f,onChange:({currentMax:e,currentMin:t})=>{w(100*e),C(100*t)}})),l.createElement(m,{"data-testid":"price-range-apply-btn",full:!0,onClick:n=>t(n,{min:f,max:v},e),disabled:k},"Aplicar filtro"))};g.defaultProps={item:{},onApply:()=>{}};var f=g},65055:function(e,t,n){n.d(t,{Z:function(){return p}});var l=n(7896),i=n(31461),a=n(2784),r=n(70715),o=n(99673),s=n(91489),d=n(19476);let c=(0,o.ZP)(d.xu)`
  > *:not(:last-child) {
    border-bottom: ${(0,s.R)("borders.0")};
  }
`,u=e=>{let{options:t,selectedOption:n,onChange:o}=e,s=(0,i.Z)(e,["options","selectedOption","onChange"]);return a.createElement(c,null,null==t?void 0:t.map((e=>{let{value:t,label:i,selected:d}=e,c=d||void 0!==t&&t===n||void 0===t&&i===n;return a.createElement(r.Z,(0,l.Z)({key:t||i,value:t||i,label:i,checked:c,onChange:t=>o(t,e)},s))})))};u.defaultProps={options:[],selectedOption:"",onChange:()=>{}};var p=u},73172:function(e,t,n){n.d(t,{Z:function(){return h}});var l=n(7896),i=n(31461),a=n(2784),r=n(34490),o=n(99673),s=n(68054),d=n(91489),c=n(63825);let u=o.ZP.div`
  display: flex;
  align-items: center;
`,p=(0,o.ZP)(c.Z).attrs((e=>({fontSize:[e.fontSize||0,1,1],fontWeight:"regular",as:"span",color:"text.scratched"})))`
  display: inline-block;
  margin-left: 5px;
  ${e=>"label"===e.format&&o.iv`
      margin-bottom: 2px;
    `}
  ${s.cp}
  ${d.$_}
`,m=e=>{let{min:t,max:n,count:o,minCount:s,score:d,format:c,label:m,fontSize:h,onClick:g}=e,f=(0,i.Z)(e,["min","max","count","minCount","score","format","label","fontSize","onClick"]),b=Array.from(Array(n-t).keys()),v=Math.round(d),x={count:o,label:m,"score-count":`${0!==d?null==d?void 0:d.toFixed(1):0} (${o})`};return a.createElement(u,{onClick:g,"data-testid":"review"},b.map((e=>{let t=v&&v<e+1;return a.createElement(r.JO$,(0,l.Z)({name:t?"StarOutline":"Star",key:`star-id-${e}`,"data-testid":"star-"+(t?"placeholder":"item"),color:0===v?"stars.disabled":"stars.base"},f))})),("label"===c||o>=s)&&a.createElement(p,{format:c,fontSize:h},x[c]))};m.defaultProps={count:0,minCount:6,min:0,max:5,score:0,format:"count"};var h=m},27408:function(e,t,n){n.d(t,{Z:function(){return m}});var l=n(7896),i=n(31461),a=n(2784),r=n(19527),o=n(26780),s=n(63825),d=n(29869),c=n(2761);let u={rating:o.Z,text:d.Z,recommendation:c.Z},p=(0,a.forwardRef)(((e,t)=>{let{label:n,type:o,error:c,flexDirection:p,fontSize:m,fontWeight:h,alignItems:g,textAlign:f,gap:b}=e,v=(0,i.Z)(e,["label","type","error","flexDirection","fontSize","fontWeight","alignItems","textAlign","gap"]),x=u[o]||d.Z;return a.createElement(r.Z,{"data-testid":"review-input-wrapper",flexDirection:p,gap:b,width:1},a.createElement(s.Z,{"data-testid":"review-input-label",flex:"0.75",textAlign:f,fontSize:m,fontWeight:h,lineHeight:"input",paddingY:"2"},n),a.createElement(r.Z,{gap:"2",flex:"1",alignItems:g,flexDirection:["column",["recommendation","rating"].includes(o)?"row":"column"],"data-testid":"review-input-container"},a.createElement(x,(0,l.Z)({ref:t},!["rating","recommendation"].includes(o)&&{hasError:!!c},"textarea"===o&&{multiline:!0},v)),c&&a.createElement(s.Z,{color:"error.base"},c)))}));p.defaultProps={error:null,flexDirection:null,fontSize:2,fontWeight:"regular",gap:30,label:null,textAlign:"right",alignItems:"start"},p.displayName="ReviewInput";var m=p},66457:function(e,t,n){n.d(t,{II:function(){return u},W1:function(){return d},xJ:function(){return c}});var l=n(31461),i=n(99673),a=n(91489),r=n(68054),o=n(34490),s=n(19527);let d=(0,i.ZP)(o.olm)`
  fill: ${(0,a.R)("palette.primary.base")};
  ${({desktopMode:e})=>e?i.iv`
          width: 22px;
          height: 22px;
          min-width: unset;
        `:i.iv`
          width: 30px;
        `}
`,c=(0,i.ZP)(s.Z)`
  align-items: center;
  width: 100%;
  border: 0;
  padding: ${(0,a.R)("space.1")}px ${(0,a.R)("space.2")}px;

  svg {
    cursor: pointer;
    min-width: 18px;
  }
  ${({desktopMode:e})=>!e&&i.iv`
      background-color: ${e=>(0,a.dF)("white")(e)};
      border-radius: ${(0,a.R)("radii.default")};
    `}
  ${({inputChange:e})=>e&&i.iv`
      ${({desktopMode:e})=>e?i.iv`
              border-bottom: 1px solid ${(0,a.kJ)("whisper")};
            `:i.iv`
              box-shadow: ${(0,a.R)("boxShadows.4")};
              z-index: ${(0,a.R)("zIndices.3")};
              border-radius: unset;
            `};
    `}
  form {
    width: 100%;
    ${({desktopMode:e})=>!e&&i.iv`
        padding-left: ${(0,a.R)("space.1")}px;
      `};
  }
`,u=i.ZP.input.attrs((e=>Object.assign({fontSize:1},e)))`
  color: ${e=>{let{isChanging:t,desktopMode:n}=e,i=(0,l.Z)(e,["isChanging","desktopMode"]);return(0,a.uu)(t&&!n?"primary":"light")(i)}};
  caret-color: ${(0,a.uu)("light")};
  width: 100%;
  border: 0px;
  -webkit-appearance: textfield;

  ::placeholder {
    color: ${(0,a.uu)("light")};
  }

  ::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }
  ${r.cp}
`},37222:function(e,t,n){n.d(t,{Z:function(){return j}});var l=n(7896),i=n(31461),a=n(2784),r=n(34490),o=n(99673),s=n(91489),d=n(68054),c=n(19476);let u=(0,o.ZP)(c.kC).attrs((e=>Object.assign({bg:"background.lighter"},e)))`
  position: relative;
  border-radius: ${({desktopMode:e})=>e?2:6}px;
  align-items: center;
  flex-direction: column;
  width: 100%;

  ${({inputChange:e})=>e&&o.iv`
      align-items: baseline;
      left: 0;
      z-index: ${(0,s.R)("zIndices.3")};

      ${({desktopMode:e})=>e?o.iv`
              top: 0;
              border: 1px solid ${(0,s.kJ)("whisper")};
            `:o.iv`
              top: 3px;
              margin-left: -9px;
              width: calc(100% + 18px);
              border-radius: 0;
              padding: ${(0,s.R)("space.1")}px 0;
            `};
    `}

  ${s.$_}
`,p=o.ZP.div.attrs((e=>Object.assign({bg:"background.overlay",zIndex:1,top:40,left:0},e)))`
  position: absolute;
  width: 100%;
  height: 100vh;
  opacity: 'block';
  display: 'block';
  ${s.$_}
  ${d.FK}
`,m=(0,o.ZP)(c.xu).attrs((e=>Object.assign({fontSize:1,color:"text.scratched"},e)))`
  ${d.cp}
  ${s.$_}
`;var h=n(41065),g=n(84546);let f=o.ZP.div.attrs((e=>Object.assign({bg:"background.lighter",p:3},e)))`
  background-color: ${e=>(0,s.dF)("white")(e)};
  z-index: ${(0,s.R)("zIndices.2")};
  width: 100%;
  ${e=>e.desktopMode&&!e.isEmpty&&o.iv`
      position: absolute;
      width: inherit;
      top: 34px;
      ${s.$_}
      ${d.Dh}
    `}
`,b=o.ZP.div.attrs((e=>Object.assign({mb:e.isEmpty?0:3,zIndex:2},e)))`
  ${d.Dh};
`,v=(0,o.ZP)(g.Z).attrs((e=>Object.assign({fontSize:2,fontWeight:"bold",color:"text.primary",pb:2,mb:1},e)))`
  width: fit-content;
  border-bottom: 1px solid ${(0,s.kJ)("whisper")};

  ${s.$_}
  ${d.cp}
`,x=({desktopMode:e,handleClickProduct:t,handleClickSuggest:n,products:l,productsSuggestions:i,suggestions:r,suggestionsPrefix:o,term:s})=>a.createElement(f,{desktopMode:e,isEmpty:0===Object.values(r).length&&0===Object.values(l).length},a.createElement(b,{isEmpty:0===Object.values(r).length&&0===Object.values(l).length},e&&Object.values(r).length>0&&a.createElement(v,{"data-testid":"suggestion-title"},"sugestões de resultados"),a.createElement("ul",null,Object.values(r).map((t=>a.createElement(h.Z,{desktopMode:e,prefix:o,term:s,key:t.count,item:t,onSearchSubmit:e=>n(e,null==t?void 0:t.term)}))))),e&&i&&Object.values(i).length>0&&a.createElement(a.Fragment,null,a.createElement(v,{"data-testid":"suggestion-title"},"sugestões de produtos"),a.createElement("ul",null,Object.values(i).map((n=>a.createElement(h.Z,{desktopMode:e,term:s,key:n.id,item:n,borderBottom:!0,onSearchSubmit:e=>t(e,n)}))))));x.defaultProps={autocompleteRef:{},desktopMode:!1,products:[],suggestions:[],suggestionsPrefix:"",term:""};var Z=x,E=n(56547);let $=(0,o.ZP)(c.xu).attrs((e=>Object.assign({bg:"background.lighter",p:2,zIndex:2},e)))`
  background-color: ${e=>(0,s.dF)("white")(e)};
  z-index: ${(0,s.R)("zIndices.2")};
  width: 100%;
  ${e=>e.desktopMode&&!e.isEmpty&&o.iv`
      position: absolute;
      width: inherit;
      top: 34px;
      ${s.$_}
      ${d.Dh}
    `}
`,y=o.ZP.div.attrs((e=>Object.assign({mb:e.isEmpty?0:3},e)))`
  ${d.Dh};
`,k=e=>a.createElement(c.xu,{bg:"background.primary",p:2,borderRadius:2},e),w=({desktopMode:e,list:t,label:n,handleClickTopTerm:l})=>a.createElement($,{"data-testid":"top-terms-container",desktopMode:e,isEmpty:0===t.length},a.createElement(y,{isEmpty:0===t.length},t.length>0&&a.createElement(E.aV,{divided:!0},a.createElement(E.aV.Header,{"data-testid":"top-terms-header",fontSize:1,fontWeight:"bold",color:"text.scratched",pb:2,mb:1},n),t.map(((e,t)=>a.createElement(E.aV.Item,{"data-testid":"top-terms-item",key:`top-term-${t}`,startIcon:k(t+1),fill:"red",onClick:t=>l(t,e),fontSize:2},e.term))))));w.defaultProps={desktopMode:!1};var C=w,P=n(33055),z=n(66457);let S=e=>{let{desktopMode:t,handleClear:n,handleClose:o,handleOpen:s,handleSubmit:d,handleType:c,inputChange:u,keypressHandler:p,term:m,disableClear:h}=e,g=(0,i.Z)(e,["desktopMode","handleClear","handleClose","handleOpen","handleSubmit","handleType","inputChange","keypressHandler","term","disableClear"]);return a.createElement(z.xJ,{"data-testid":"input-container",inputChange:u,desktopMode:t},!t&&u&&a.createElement(r.xhZ,{color:"#818181","data-testid":"arrow-back",onClick:o}),a.createElement("form",{"data-testid":"form-search",onSubmit:e=>d(e),autoComplete:"off"},a.createElement(P.Z,{text:"Procure no magalu",htmlFor:"input-search"}),a.createElement(z.II,(0,l.Z)({},g,{onChange:e=>c(e),onClick:s,value:m,id:"input-search",type:"search",isChanging:u,desktopMode:t,onKeyDown:p,"data-testid":"input-search"}))),(!h||!t&&u&&""!==m)&&a.createElement(r.B86,{"data-testid":"close-circle",color:"#818181",onClick:n,width:17,height:17,margin:h?"unset":"0 16px",marginRight:2,marginBottom:"1px"}),a.createElement(z.W1,{"aria-label":"Buscar produto","data-testid":"search-submit",desktopMode:t,onClick:e=>d(e),role:"button",tabIndex:"0"}))};S.defaultProps={desktopMode:!1,inputChange:!1,disableClear:!0,term:""};var I=S,O=n(64586);let R=e=>e?a.createElement(m,null,"+"):a.createElement(r.olm,{color:"#818181"}),M=e=>{let{onSearch:t,onTypeChange:n,onInputClear:r,onInputClose:o,onInputOpen:s,onSuggestItemClick:d,onProductItemClick:c,onTopTermItemClick:m,initialValue:h,list:g,products:f,desktopMode:b,topTerms:v}=e,x=(0,i.Z)(e,["onSearch","onTypeChange","onInputClear","onInputClose","onInputOpen","onSuggestItemClick","onProductItemClick","onTopTermItemClick","initialValue","list","products","desktopMode","topTerms"]),[E,$]=(0,a.useState)(h),[y,k]=(0,a.useState)(!1),[w,P]=(0,a.useState)(g),[z,S]=(0,a.useState)(f),M=R(b),{shouldDisplay:j,list:L}=v;(0,a.useEffect)((()=>{P(g||[])}),[g]),(0,a.useEffect)((()=>{S(f)}),[f]),(0,a.useEffect)((()=>{$(h)}),[h]);let F=()=>{o(),k(!1)},A=(0,a.useRef)();return(0,O.t$)(A,(()=>{(y||j)&&F()})),a.createElement(a.Fragment,null,a.createElement(u,{inputChange:y,desktopMode:b,ref:A,id:"search-container","data-testid":"search-input-container"},a.createElement(I,(0,l.Z)({desktopMode:b,handleClear:()=>{r(),$("")},handleClose:F,handleOpen:()=>{s(),k(!0)},handleSubmit:e=>{E.trim()?(k(!1),t(e,E)):e.preventDefault()},handleType:e=>{let t=e.target.value;k(!((e,t)=>e&&""===t)(b,t)),$(t),n(t)},inputChange:y,keypressHandler:e=>((e,t)=>{27===e.keyCode&&t()})(e,F),term:E},x)),j?L?a.createElement(C,(0,l.Z)({},v,{desktopMode:b,handleClickTopTerm:(e,n)=>{let{term:l}=n;m(n),k(!1),$(l),t(e,l)}})):a.createElement(a.Fragment,null):y&&g?a.createElement(Z,{desktopMode:b,handleClickProduct:(e,t)=>{k(!1),$(""),c(e,t)},handleClickSuggest:(e,n)=>{d(n),k(!1),$(n),t(e,n)},handleClose:F,products:f,productsSuggestions:z,suggestions:w,suggestionsPrefix:M,term:E}):a.createElement(a.Fragment,null),!b&&y&&a.createElement(p,{"data-testid":"input-overlay",onTouchMove:F,onClick:F})))};M.defaultProps={list:[],products:[],initialValue:"",onInputClear:()=>{},onSuggestItemClick:()=>{},onProductItemClick:()=>{},onTopTermItemClick:()=>{},onInputClose:()=>{},onInputOpen:()=>{},desktopMode:!1,topTerms:{shouldDisplay:!1,label:"Mais Buscados",list:[]}};var j=M},57991:function(e,t,n){n.d(t,{Z:function(){return Z}});var l=n(7896),i=n(31461),a=n(2784),r=n(99673),o=n(68054),s=n(34490),d=n(91489),c=n(19527),u=n(63825);let p=(0,r.ZP)(c.Z).attrs((e=>Object.assign({bg:"background.base",borderRadius:"medium"},e)))`
  position: relative;
  padding: 16px 12px;
  align-items: center;
  cursor: pointer;

  ${o.Cg}
  ${d.$_}
`,m=(0,r.ZP)(c.Z).attrs((e=>Object.assign({bg:"background.base",borderRadius:"medium",zIndex:4},e)))`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;

  ${o.Cg}
  ${d.$_}
`,h=(0,r.ZP)(s.hq5).attrs({width:24,height:24})``,g=(0,r.ZP)(s.lO8)`
  margin-right: 12px;
  flex-grow: 0;
  width: 18px;
  height: 18px;
  ${d.$_}
`,f=(0,r.ZP)(u.Z)`
  flex-grow: 1;
  font-size: ${e=>(0,d.R)("fontSizes.1")(e)}px;
`,b=(0,r.ZP)(u.Z)`
  flex-grow: 0;
  font-size: ${e=>(0,d.R)("fontSizes.1")(e)}px;
  color: ${e=>(0,d.ow)("primary.base")(e)};
`;var v=n(64586);let x=e=>{let{placeholder:t,changeLabel:n,actionLabel:r,disabled:o,done:s,loading:d,onClick:c,location:u,maxCityLength:x}=e,Z=(0,i.Z)(e,["placeholder","changeLabel","actionLabel","disabled","done","loading","onClick","location","maxCityLength"]),E=u&&Object.keys(u).length?(0,v.RZ)(Object.assign({},u,{maxCityLength:x})):"";return a.createElement(p,(0,l.Z)({},Z,{onClick:d||o?()=>{}:c,"data-testid":"shipping-button"}),(d||o)&&a.createElement(m,{"data-testid":"shipping-disabled"},d&&a.createElement(h,null)),a.createElement(g,{fill:"primary.base"}),a.createElement(f,{as:"span"},E||t),!!E&&a.createElement(b,{as:"span"},s?n:r))};x.defaultProps={placeholder:"Calcular frete e prazo",changeLabel:"alterar",actionLabel:"calcular",disabled:!1,loading:!1,done:!1,onClick:()=>{},location:{},maxCityLength:24};var Z=x},15185:function(e,t,n){n.d(t,{Z:function(){return s}});var l=n(2784),i=n(34490),a=n(19476);let r=n(99673).ZP.div`
  & > svg {
    transform: scale(2.5);
  }
`,o=({amount:e,nullable:t,truncateAmountThreshold:n,backgroundColor:o,fontColor:s="#fff",counterColor:d="#58c22e",iconColor:c="#fff",onClick:u})=>l.createElement(a.fG,{amount:e,nullable:t,truncateAmountThreshold:n,backgroundColor:o,counterColor:d,fontColor:s,onClick:u},l.createElement(r,null,l.createElement(i.JO$,{name:"ShoppingBag",color:c})));o.defaultProps={amount:0,onClick:()=>{},nullable:!0};var s=o},51382:function(e,t,n){n.d(t,{Z:function(){return p}});var l=n(31461),i=n(2784),a=n(34490),r=n(99673),o=n(91489),s=n(84546);let d=(0,r.ZP)(s.Z)`
  position: relative;
  cursor: pointer;
`,c=r.ZP.div`
  visibility: ${e=>e.open?"visible":"hidden"};
  background-color: ${e=>(0,o.dF)("lighter")(e)};
  border-radius: 6px;
  padding: 10px;
  width: 190px;

  display: flex;
  justify-content: space-around;
  align-items: center;
  top: 110%;
  right: 0px;
  position: absolute;
  z-index: ${e=>(0,o.R)("zIndices.0")(e)};
  box-shadow: ${e=>(0,o.R)("elevations.4")(e)};
`,u=r.ZP.a`
  background-color: ${e=>(0,o.dF)("primary")(e)};
  width: 32px;
  height: 32px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    width: 16px;
  }
`;var p=function(e){let{socialItems:t,onItemClick:n}=e,r=(0,l.Z)(e,["socialItems","onItemClick"]),[o,s]=(0,i.useState)(!1);return i.createElement(d,r,i.createElement(a.mBz,{height:"24",color:"#818181",onClick:()=>s(!o),"data-testid":"social-share"}),i.createElement(c,{open:o,"data-testid":"social-content"},t.map((({title:e,url:t,Icon:l})=>i.createElement(u,{key:e,href:t,target:"_blank",onClick:t=>n(t,e)},l)))))}},50919:function(e,t,n){n.d(t,{Z:function(){return g}});var l=n(31461),i=n(2784),a=n(99673),r=n(91489),o=n(19476);let s=(0,a.ZP)(o.xu).attrs((e=>Object.assign({forwardedAs:"table"},e)))`
  list-style: none;

  tbody > tr > td {
    padding: 5px;
  }
`,d=a.ZP.td`
  font-weight: bold;
  color: ${e=>(0,r.R)("colors.darkSilver")(e)};
  background: ${e=>(0,r.dF)("base")(e)};
  display: ${({layout:e})=>"horizontal"===e?"table-cell":"list-item"};
  width: ${({layout:e})=>"horizontal"===e?"20%":"100%"};
`,c=a.ZP.td`
  display: list-item;
  width: 100%;
  padding: 5px;
`,u=a.ZP.td`
  width: 40%;
`,p=a.ZP.table`
  width: 100%;
  td:first-child {
    display: table-cell;
  }
  tr {
    display: table-row;
    vertical-align: middle;
  }
`,m=(0,a.ZP)(o.rU)`
  text-decoration: underline;
  font-size: inherit;

  &:hover {
    color: ${e=>(0,r.uu)("primary")(e)};
  }
`;function h(e){var t;let{data:n,layout:a}=e,r=(0,l.Z)(e,["data","layout"]);return i.createElement(s,r,i.createElement("tbody",null,null==n||null==(t=n.elements)?void 0:t.map((e=>{var t;return i.createElement("tr",{key:e.slug},i.createElement(d,{layout:a},e.keyName),i.createElement(c,null,i.createElement(p,null,i.createElement("tbody",null,null==e||null==(t=e.elements)?void 0:t.map(((e,t)=>i.createElement("tr",{key:t},e.keyName&&i.createElement(u,null,e.keyName),i.createElement("td",null,(e=>e.isLink?i.createElement(m,{href:e.path},null==e?void 0:e.value):null==e?void 0:e.value)(e)))))))))}))))}h.defaultProps={color:"text.base",fontSize:0,layout:"vertical"};var g=h},93168:function(e,t,n){n.d(t,{Z:function(){return h}});var l=n(7896),i=n(31461),a=n(2784),r=n(99673),o=n(91489),s=n(19476);let d=(0,r.ZP)(s.kC).attrs({position:"relative",justifyContent:"space-between",alignItems:"stretch",width:"100%",px:2})((({count:e})=>3===e&&{"& > *:nth-child(2)":{position:"absolute",left:"50%",top:"50%",height:"100%",transform:"translate(-50%,-50%)"}}),o.bU,o.bA);var c=n(34490),u=n(10200);let p=e=>{let{children:t,endIcon:n,startIcon:r}=e,o=(0,i.Z)(e,["children","endIcon","startIcon"]),s=e=>e&&"string"==typeof e?a.createElement(c.JO$,{name:e}):e;return a.createElement(u.Z,(0,l.Z)({"data-testid":"toolbar-item"},o),s(r),t,s(n))};p.defaultProps={children:null,color:"inherit",underlineOnHover:!1,fontSize:1,fontWeight:"medium",gap:1};let m=e=>{let{children:t}=e,n=(0,i.Z)(e,["children"]);return a.createElement(d,(0,l.Z)({count:a.Children.count(t),"data-testid":"toolbar"},n),t)};m.defaultProps={children:null,variant:"transparent",scale:"medium"},m.Item=p,m.Toggle=e=>{let{onChange:t}=e,n=(0,i.Z)(e,["onChange"]),l=a.Children.toArray(null==n?void 0:n.children),[r,o]=(0,a.useState)(0),s=()=>{r>=l.length-1?o(0):o(r+1)};return(0,a.useEffect)((()=>{let{props:{value:e,children:n}}=l[r];t({id:e,label:n})}),[r]),l.map((e=>a.cloneElement(e,{onClick:s})))[r]};var h=m},41237:function(e,t,n){n.d(t,{Z:function(){return E}});var l=n(2784),i=n(19527),a=n(31461),r=n(99673),o=n(91489),s=n(34490),d=n(60861),c=n(29869),u=n(63825);let p=r.ZP.form`
  position: relative;
`,m=r.ZP.label`
  font-weight: ${e=>(0,o.R)("fontWeights.regular")(e)};
  font-size: ${e=>(0,o.R)("fontSizes.0")(e)}px;
  color: ${e=>{let{hasError:t}=e,n=(0,a.Z)(e,["hasError"]);return(0,o.ow)(t?"error.base":"base")(n)}};
`,h=(0,r.ZP)(c.Z)`
  border: 0;
  width: 100%;
  border-radius: 0;
  border-bottom: 1px solid;
  border-color: ${e=>{let{hasError:t}=e,n=(0,a.Z)(e,["hasError"]);return(0,o.ow)(t?"error.base":"base")(n)}};
  padding: 0 0 ${e=>(0,o.R)("space.2")(e)}px;
  line-height: ${e=>(0,o.R)("lineHeights.input")(e)};
  font-size: ${e=>(0,o.R)("fontSizes.2")(e)}px;
  background-color: transparent;
  margin-top: 4px;
  &::placeholder {
    color: ${e=>(0,o.uu)("greyish")(e)};
  }
`,g=r.ZP.div`
  width: 100%;
  opacity: 0.8;
  position: absolute;
  text-align: center;
  background-color: ${e=>(0,o.dF)("base")(e)};
  z-index: ${e=>(0,o.R)("zIndices.0")(e)};
`,f=(0,r.ZP)(s.gXO).attrs((e=>({color:(0,o.ow)("primary")(e)})))`
  height: 40px;
`,b=(0,r.ZP)(d.Z).attrs((()=>({m:"14px 0"})))`
  width: 70%;
`,v=(0,r.ZP)(u.Z).attrs((()=>({forwardedAs:"span",color:"text.primary",fontSize:1,fontWeight:"medium",textAlign:"center",textTransform:"uppercase"})))`
  cursor: pointer;
  margin: 14px;
  text-transform: uppercase;
  width: 70%;
`;var x=n(7874);function Z({errorText:e,hasError:t,initialValue:n,labelText:a,loading:r,locationButtonText:o,onChange:s,placeholder:d,showButton:c,inputButtonText:u,onClickLocationButton:Z}){let[E,$]=(0,l.useState)((0,x.Z)(n)),y=e=>{e.preventDefault();let{value:t}=e.target;$((0,x.Z)(t)),s(e,e.target.value)};return l.createElement(p,{onSubmit:e=>{e.preventDefault(),$((0,x.Z)(E)),s(e,E)}},l.createElement(m,{"data-testid":"zipcode-label",hasError:t,htmlFor:"zipcode"},t?e:a),r&&l.createElement(g,{"data-testid":"zipcode-loading"},l.createElement(f,null)),l.createElement(h,{"data-testid":"zipcode-input",hasError:t,autoFocus:!0,id:"zipcode",name:"zipcode",type:"text",inputMode:"numeric",maxLength:9,placeholder:d,onChange:y,value:E,onInput:y,disabled:r}),c&&l.createElement(i.Z,{flexDirection:"column",alignItems:"center",my:2},u&&l.createElement(b,{disabled:9!==E.length,"data-testid":"zipcode-button"},u),o&&l.createElement(v,{"data-testid":"location-button",variation:"outline",boxShadow:"none",onClick:Z},o)))}Z.defaultProps={hasError:!1,initialValue:"",loading:!1,locationButtonText:void 0,onChange:void 0,showButton:!1,inputButtonText:void 0,onClickLocationButton:()=>{}};var E=Z},1587:function(e,t,n){n.d(t,{Z:function(){return g}});var l=n(2784),i=n(99673),a=n(91489),r=n(34490),o=n(19527);let s=(0,i.ZP)(o.Z)`
  align-items: center;
  max-height: 44px;
  cursor: pointer;
`,d=(0,i.ZP)(o.Z).attrs((()=>({alignItems:["center","flex-start","flex-start"],color:"text.lightest",flexDirection:["row","column","column"],fontSize:0,fontWeight:"normal"})))``,c=(0,i.ZP)(d).attrs((()=>({ml:[1,0,0],fontWeight:"bold"})))``,u=(0,i.ZP)(o.Z)`
  ${(0,a.aK)("small")} {
    max-height: 44px;
    max-width: 44px;
    width: 100%;
  }
`,p=(0,i.ZP)(r.lO8).attrs((e=>({color:(0,a.uu)("lightest")(e)})))``;var m=n(64586);let h=({city:e,defaultText:t,formatter:n,iconHeight:i,iconWidth:a,state:r,text:o,zipcode:h})=>{let g=(0,m.RZ)({formatter:n,zipCode:h,zipCodeCity:e,zipCodeState:r});return l.createElement(s,null,l.createElement(u,null,l.createElement(p,{width:a,height:i})),l.createElement(d,{"data-testid":"text-line"},h&&r&&e?l.createElement(l.Fragment,null,o," ",n?l.createElement(c,null,g):g):t))};h.defaultProps={city:void 0,formatter:void 0,iconHeight:void 0,iconWidth:void 0,state:void 0,zipcode:void 0};var g=h},56547:function(e,t,n){n.d(t,{iG:function(){return ke.Z},Ct:function(){return l.Z},lr:function(){return i.Z},g0:function(){return v},L2:function(){return x.Z},pl:function(){return Ze},AY:function(){return E.Z},hU:function(){return $.Z},aV:function(){return k.Z},RG:function(){return de},mY:function(){return I},tA:function(){return O.Z},MS:function(){return R.Z},lF:function(){return Ie},Ee:function(){return Ee.Z},me:function(){return T},Cq:function(){return D.Z},qr:function(){return Ce.Z},Mj:function(){return W.Z},KI:function(){return G},kV:function(){return X.Z},ok:function(){return ye},Rs:function(){return pe},YQ:function(){return we.Z}}),n(33309),n(52337),n(96504);var l=n(98460);n(67619);var i=n(49542);n(2761),n(84022),n(12241);var a=n(2784),r=n(34490),o=n(99673),s=n(91489),d=n(63825),c=n(19527);(0,o.ZP)(c.Z)`
  display: flex;
  justify-content: ${e=>e.carousel?"start":"center"};
  align-content: center;
  padding: 12px;
  overflow-x: scroll;
`;(0,o.ZP)(d.Z)`
  color: ${e=>(0,s.uu)("scratched")(e)};
  display: block;
  margin-bottom: 8px;
  font-size: ${e=>(0,s.R)("fontSizes.0")(e)}px;
`;(0,o.ZP)(c.Z)`
  display: flex;
  align-items: center;
  justify-content: center;
`;let u=(0,o.ZP)(c.Z)`
  scroll-snap-align: center;
  justify-content: center;
  align-items: center;
  padding: 4px 16px;
  line-height: 1.17;
  color: ${e=>e.selected?(0,s.uu)("base")(e):(0,s.uu)("lightest")(e)};
  margin-right: 8px;
  background-color: ${e=>e.selected?(0,s.dF)("primary")(e):(0,s.dF)("lighter")(e)};
  border-radius: 20px;
  height: 38px;

  > svg {
    margin-right: 4px;
    fill: ${e=>e.selected?(0,s.uu)("lightest")(e):(0,s.uu)("base")(e)};
  }
  max-width: 144px;
`,p=(0,o.ZP)(d.Z)`
  width: 81px;
  font-size: ${e=>(0,s.R)("fontSizes.0")(e)}px;
  font-weight: ${e=>(0,s.R)("fontWeights.regular")(e)};
  font-stretch: normal;
  font-style: normal;
  line-height: ${e=>(0,s.R)("lineHeights.standard")(e)}px;
  letter-spacing: normal;
  color: ${e=>e.selected?(0,s.uu)("lightest")(e):(0,s.uu)("base")(e)};
`;function m({item:e,onChange:t}){let{slug:n,label:l,selected:i}=e;return a.createElement(u,{onClick:()=>t(!i&&n||null),selected:i,"data-testid":`opt-${n}`},(e=>{let t={"24c":r.f9j,delivery_plus_1:r._Ps,store_pickup:r.XqY,delivery_24h:r.Ju,delivery_1h:r.Gb7,"magalu-entregas":r.Erv,"magalu-partner":r.lO8,today:r.oFb}[e]||r._Ps;return a.createElement(t,null)})(n),a.createElement(p,{selected:i},l))}m.defaultProps={item:{},onChange:null};var h=n(7896),g=n(19476);let f=(0,o.ZP)(g.rU).attrs((()=>({fontSize:2,fontWeight:"900",underlineOnHover:!0,hover:!0,padding:0,color:"primary.base"})))``,b=({data:e,handleClickLink:t})=>a.createElement(a.Fragment,null,null==e?void 0:e.map(((e,n)=>"string"==typeof e?e:null!=e&&e.href?a.createElement(f,(0,h.Z)({key:n,"data-testid":"dynamic-text-link",href:null==e?void 0:e.href,onClick:n=>t(n,e)},e),null==e?void 0:e.value):a.createElement(g.xv,(0,h.Z)({key:n},e,{as:"span"}),null==e?void 0:e.value))));b.defaultProps={data:[],handleClickLink:()=>{}};var v=b;n(99554);var x=n(1729),Z=n(33055),E=n(2490),$=n(15309);n(97769);o.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;let y={normal:o.iv`
    font-size: ${e=>(0,s.R)("fontSizes.2")(e)}px;
  `,big:o.iv`
    font-size: ${e=>(0,s.R)("fontSizes.4")(e)}px;
    font-weight: ${e=>(0,s.R)("fontWeights.bold")(e)};
  `};(0,o.ZP)(d.Z)`
  color: ${e=>(0,s.uu)("base")(e)};
  margin-bottom: 5px;

  ${e=>y[e.type]}
`;var k=n(78012);n(33359),n(41065);var w=n(93837);let C=o.ZP.div`
  display: flex;
  align-items: center;
  background-color: ${e=>e.color||"#fff"};
  border-radius: 6px;
  padding: 3px 5px;
  cursor: default;
`,P=o.ZP.button`
  background: none;
  border: none;
  cursor: pointer;
  line-height: 0px;
`,z=o.ZP.p`
  font-size: ${e=>(0,s.R)("fontSizes.0")(e)}px;
  font-weight: ${e=>(0,s.R)("fontWeights.bold")(e)};
  color: ${e=>e.color||"#fff"};
  margin: 0 5px;
`,S=({value:e,color:t,icon:n,textColor:l,onClick:i,hasInfo:o})=>a.createElement(C,{color:t,"data-testid":"loyalty",onClick:e=>e.preventDefault()},n&&a.createElement(r.JO$,{"data-testid":`${n}Icon`,name:n,width:"12px",height:"12px",color:"#fff"}),a.createElement(z,{color:l,"data-testid":"loyalty-value"},(0,w.Z)({value:parseFloat(e)})),o&&a.createElement(P,{"data-testid":"loyalty-info-button",onClick:i},a.createElement(r.JO$,{name:"HelpOutline",color:"none",width:"12px",height:"12px"})));S.defaultProps={hasInfo:!1,color:void 0};var I=S;n(28982),n(19620),n(81484),n(563);var O=n(23745),R=n(58125);let M=o.ZP.li`
  display: flex;
  align-items: center;
  column-gap: 8px;
`,j=(0,o.ZP)(d.Z)`
  font-size: ${e=>(0,s.R)("fontSizes.0")(e)}px;
`,L=(0,o.ZP)(d.Z)`
  font-size: ${e=>(0,s.R)("fontSizes.0")(e)}px;
  color: ${e=>(0,s.uu)("light")(e)};
`,F=(0,o.ZP)(r.Uxw)`
  margin-bottom: 1px;
`;function A({id:e,score:t,count:n,max:l}){return a.createElement(M,null,a.createElement(g.kC,{alignItems:"center"},a.createElement(j,null,e),a.createElement(F,{width:15,height:15})),a.createElement(g.uk,{height:"6px",width:"90px",value:t,max:l}),a.createElement(L,null,n))}A.defaultProps={id:0,score:0,count:0};var T=A,D=n(73172),W=n(37222);n(57991);var N=n(31461);let _=(0,o.ZP)(g.kC)`
  padding: 16px 12px;
  align-items: center;
`,B=(0,o.ZP)(r._Ps)`
  margin-right: 12px;
  flex-grow: 0;
  width: 30px;
  height: 30px;
  ${s.$_}
`,H=(0,o.ZP)(r.XqY)`
  margin-right: 12px;
  flex-grow: 0;
  width: 30px;
  height: 30px;
  ${s.$_}
`,V=(0,o.ZP)(r.oFb)`
  margin-right: 12px;
  min-width: 30px;
  flex-grow: 0;
  width: 30px;
  height: 30px;
  ${s.$_}
`,U=(0,o.ZP)(d.Z)`
  flex: 4;
  font-size: ${e=>(0,s.R)("fontSizes.1")(e)}px;
  font-weight: ${e=>(0,s.R)("fontWeights.medium")(e)};
  line-height: ${e=>(0,s.R)("lineHeights.big")(e)};
`,K=(0,o.ZP)(d.Z)`
  display: block;
  font-size: ${e=>(0,s.R)("fontSizes.0")(e)}px;
  font-weight: ${e=>(0,s.R)("fontWeights.regular")(e)};
`,q=(0,o.ZP)(d.Z)`
  flex: 1;
  font-size: ${e=>(0,s.R)("fontSizes.1")(e)}px;
  text-align: center;
  color: ${e=>{let{free:t}=e,n=(0,N.Z)(e,["free"]);return t?(0,s.ow)("secondary.base")(n):(0,s.ow)("text.base")(n)}};
  display: contents;
`,J=e=>{let{complement:t,description:n,price:l,type:i,freeShippingLabel:r}=e,o=(0,N.Z)(e,["complement","description","price","type","freeShippingLabel"]);return a.createElement(_,(0,h.Z)({"data-testid":"shipping-item"},o),["store_pickup","pickup_point"].includes(i)&&a.createElement(H,{fill:"background.dark"})||"express"===i&&a.createElement(V,{fill:"background.dark"})||a.createElement(B,{fill:"background.dark"}),a.createElement(U,null,n,a.createElement(K,{as:"span"},t)),!!Number(l)&&a.createElement(q,null,(0,w.Z)({value:l}))||a.createElement(q,{free:!0},r))};J.defaultProps={freeShippingLabel:"Frete Grátis"};var G=J,X=n(15185);n(50919);var Q=n(84546);o.ZP.div`
  display: grid;
  grid-column-gap: 5px;
  grid-row-gap: 8px;
  grid-template-columns: repeat(3, 1fr);
`,(0,o.ZP)(d.Z).attrs({fontWeight:"bold",fontSize:3,color:"primary",mb:2})``;var Y=n(68054);let ee=o.ZP.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  ${Y.$_}
  ${Y.GQ}
`,te=(0,o.ZP)(Q.Z)``,ne=(0,o.ZP)(Q.Z).attrs((e=>Object.assign({color:"text.white",fontWeight:"bold",fontSize:0},e)))`
  ${s.$_}
`,le=(0,o.ZP)(g.rU).attrs((e=>Object.assign({color:"text.white",fontSize:0,p:0},e)))``,ie=e=>{let{message:{text:t=""}={},loginLink:{text:n="Entre ou cadastre-se",url:l="#"}={}}=e,i=(0,N.Z)(e.message,["text"]),r=(0,N.Z)(e.loginLink,["text","url"]);return a.createElement(te,{"data-testid":"stereo-login_menu-unsigned_user_state-container"},t&&a.createElement(ne,i,t),a.createElement(le,(0,h.Z)({href:l},r),n))};ie.defaultProps={message:{},loginLink:{}};var ae=ie;let re=({username:e,welcomeMessage:t,logoutMessage:n,signOutUrl:l,menuLinks:i=[],onLogout:r})=>a.createElement(g.Lt,{mouseenter:!0,pointing:!0},a.createElement(g.Lt.Title,{color:"text.white",fill:"background.lighter"},t||a.createElement("span",null,"Olá, ",a.createElement("b",null,e))),a.createElement(g.Lt.Menu,{pointing:!0,fontSize:0,p:2},i.map((({icon:e,label:t,url:n},l)=>a.createElement(g.Lt.Item,{key:l,startIcon:e,p:1,my:2},a.createElement(g.rU,{href:n,fontSize:0},t)))),a.createElement(g.Lt.Divider,null),a.createElement(g.Lt.Item,{p:1,my:2,disableHover:!0},n||`Não é ${e}? `,a.createElement(g.rU,{underline:!0,px:0,fontSize:0,href:l,onClick:r,"data-testid":"link-logout"},"Sair"))));re.defaultProps={welcomeMessage:"",logoutMessage:"",signOutUrl:""};var oe=re;let se=({isSignedIn:e,unsignedConfig:t,signedConfig:n,signOutUrl:l,onLogout:i})=>a.createElement(ee,null,e?a.createElement(oe,(0,h.Z)({},n,{signOutUrl:l,onLogout:i})):a.createElement(ae,t));se.defaultProps={isSignedIn:!1,unsignedConfig:{},signedConfig:{},onLogout:()=>{},signOutUrl:""};var de=se;let ce=o.ZP.div`
  & > svg {
    transform: scale(1.2);
  }
`,ue=({amount:e,nullable:t,truncateAmountThreshold:n,backgroundColor:l,counterColor:i="#db44a7",fontColor:o="#fff",iconColor:s="#fff",onClick:d})=>a.createElement(g.fG,{amount:e,nullable:t,truncateAmountThreshold:n,backgroundColor:l,counterColor:i,fontColor:o,onClick:d},a.createElement(ce,null,a.createElement(r.Xdw,{color:s})));ue.defaultProps={amount:0,onClick:()=>{},nullable:!0};var pe=ue,me=n(10200);let he=o.ZP.ul`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: ${(0,s.R)("space.3")}px;
  margin-right: 8px;
`,ge=o.ZP.li`
  list-style: none;
`,fe={color:"text.greyishBlue",fontSize:[0,0,0,1],fontWeight:["bold","bold","bold","regular"]},be=(0,o.ZP)(me.Z).attrs((e=>Object.assign({p:0},fe,e)))`
  ${s.$_}
  ${Y.cp}
`,ve=o.ZP.span.attrs((e=>Object.assign({},fe,e)))`
  ${s.$_}
  ${Y.cp}
`,xe=({data:e})=>{let{linksList:t=[]}=e;return a.createElement(he,{"data-testid":"horizontal-links-elem"},t.map(((e,t)=>a.createElement(ge,{key:`link-item-${t}`},e.url?a.createElement(be,{href:e.url},e.label):a.createElement(ve,null,e.label)))))};xe.defaultProps={data:{linksList:[]}};var Ze=xe,Ee=n(65055);n(51382);let $e=o.ZP.form``;$e.Link=(0,o.ZP)(g.rU).attrs((e=>Object.assign({color:"text.lightest"},e)))`
  ${s.$_}
`,$e.Header=o.ZP.div.attrs((e=>Object.assign({color:"text.lightest",fontSize:0},e)))`
  display: flex;
  align-items: center;

  svg {
    margin-right: ${(0,s.R)("space.1")}px;
  }

  ${$e.Link} {
    color: ${(0,s.R)("colors.lightBlue")};
    ${Y.cp}
  }

  ${s.$_};
`,$e.Title=o.ZP.h2.attrs((e=>Object.assign({fontSize:2,fontWeight:"medium",color:"text.lightest"},e)))`
  ${s.$_}
  ${Y.cp}
`,$e.InputWrapper=o.ZP.div.attrs((e=>Object.assign({p:"1"},e)))`
  display: flex;
  align-items: center;
  ${Y.Dh}
`,$e.Input=(0,o.ZP)(g.II).attrs((e=>Object.assign({mr:"2"},e)))`
  ${Y.Dh}
`,$e.SubmitBtn=(0,o.ZP)(g.zx).attrs((e=>Object.assign({color:"secondary",size:"small",m:"10px 0"},e)))``;var ye=({title:e,policy:t,onSubmitForm:n})=>{let[l,i]=(0,a.useState)(""),[o,s]=(0,a.useState)(""),d=(e,t)=>{t(e,{name:l,email:o})};return a.createElement($e,{"data-testid":"subscription-form-elem",onSubmit:e=>d(e,n)},a.createElement($e.Header,null,a.createElement(r.TbV,{"data-testid":"link-icon",color:"currentColor",width:25}),a.createElement($e.Title,null,e),a.createElement($e.Link,{"data-testid":"link-policy",underline:!0,href:null==t?void 0:t.url},null==t?void 0:t.label)),a.createElement($e.InputWrapper,null,a.createElement(Z.Z,{text:"digite o seu nome",htmlFor:"input-name"}),a.createElement($e.Input,{id:"input-name","data-testid":"input-name",placeholder:"digite o seu nome",value:l,onChange:e=>i(e.target.value)}),a.createElement(Z.Z,{text:"digite o seu email",htmlFor:"input-email"}),a.createElement($e.Input,{id:"input-email","data-testid":"input-email",placeholder:"digite o seu email",type:"email",value:o,onChange:e=>s(e.target.value)}),a.createElement($e.SubmitBtn,{"data-testid":"submit-btn",disabled:!o||!l,type:"submit",onClick:e=>d(e,n)},"Enviar")))},ke=n(38825);n(41237);var we=n(1587),Ce=n(27408);let Pe=(0,o.ZP)(g.xv)`
  font-size: ${e=>(0,s.R)("fontSizes.0")(e)}px;
  color: ${(0,s.uu)("scratched")};
  text-align: ${({textAlign:e})=>e};

  span {
    color: ${(0,s.R)("palette.secondary.dark")};
    font-weight: ${(0,s.R)("fontWeights.bold")};
  }
`;var ze=n(12468);let Se=()=>a.createElement("span",null,"Frete grátis");var Ie=function({cost:e,displayMode:t,costDescription:n}){return a.createElement(a.Fragment,null,e?a.createElement(Pe,{"data-testid":"shipping-cost",textAlign:t===ze.Co?"center":null},0===Number(e)?a.createElement(Se,null):n):null)}}}]);