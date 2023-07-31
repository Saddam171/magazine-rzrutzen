"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7162],{41544:function(e,t,n){n.d(t,{Z:function(){return o}});let r={lessThanXSeconds:{one:"menos de um segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"meio minuto",lessThanXMinutes:{one:"menos de um minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"cerca de 1 hora",other:"cerca de {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 dia",other:"{{count}} dias"},aboutXWeeks:{one:"cerca de 1 semana",other:"cerca de {{count}} semanas"},xWeeks:{one:"1 semana",other:"{{count}} semanas"},aboutXMonths:{one:"cerca de 1 mês",other:"cerca de {{count}} meses"},xMonths:{one:"1 mês",other:"{{count}} meses"},aboutXYears:{one:"cerca de 1 ano",other:"cerca de {{count}} anos"},xYears:{one:"1 ano",other:"{{count}} anos"},overXYears:{one:"mais de 1 ano",other:"mais de {{count}} anos"},almostXYears:{one:"quase 1 ano",other:"quase {{count}} anos"}};function i(e,t){return`${"string"==typeof r[e]?r[e]:1===t?r[e].one:r[e].other.replace("{{count}}",t)}`}var o=(e,t)=>{let n=parseInt(Math.abs(new Date(e)-new Date(t))/6e4,10),r=Math.abs((new Date(e)-new Date(t))/1e3),o=Math.abs(e.getMonth()-t.getMonth()+12*(e.getFullYear()-t.getFullYear()));if(n<2)return r<40?i("halfAMinute",null):r<60?i("lessThanXMinutes",1):i("xMinutes",n);if(n<45)return i("xMinutes",n);if(n<90)return i("aboutXHours",1);if(n<1440){return i("aboutXHours",Math.round(n/60))}if(n<2520)return i("xDays",1);if(n<43200){return i("xDays",Math.round(n/1440))}if(n<86400){return i("aboutXMonths",Math.round(n/43200))}if(o<12){return i("xMonths",Math.round(n/43200))}let a=o%12,l=Math.floor(o/12);return a<3?i("aboutXYears",l):a<9?i("overXYears",l):i("almostXYears",l+1)}},17675:function(e,t){t.Z=function(e,t){function n(e,t,n=`${t}s`){let r=Number(e);return 1===r||-1===r?t:n}return"object"==typeof e&&!Array.isArray(e)?(t,r)=>n(t,r,e[r]):n(e,t)}},8719:function(e,t){t.Z=(e=300)=>{let t=-window.scrollY/(e/15),n=setInterval((()=>{0!==window.scrollY?window.scrollBy(0,t):clearInterval(n)}),15)}},50616:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(7896),i=n(31461),o=n(2784),a=n(99673),l=n(91489),c=n(81572);let s={text:a.iv`
    font-size: ${e=>(0,l.R)("fontSizes.1")(e)}px;
    line-height: ${e=>(0,l.R)("lineHeights.plus")(e)}px;
    color: ${e=>(0,l.uu)("scratched")(e)};

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;

    ${e=>e.open?a.iv`
            max-height: 54px;
            margin-bottom: 16px;
          `:a.iv`
            max-height: 0px;
          `}
  `,component:a.iv`
    max-height: ${e=>e.open?"100%":"0px"};
  `},d=(0,a.ZP)(c.Z).attrs((e=>Object.assign({cursor:"pointer",outline:"none",py:0,gap:0},e)))``,u=(0,a.ZP)(d.Header)`
  cursor: pointer;
`,p=(0,a.ZP)(d.Content)`
  overflow: hidden;
  transition: max-height 0.3s ease-out;

  ${e=>e.isText?s.text:s.component}
`;var h=n(25610);let f=(0,o.forwardRef)(((e,t)=>{let{asTitle:n,children:a,textAlign:l,openIcon:c,closeIcon:s,title:f,innerControl:g,open:m,fontSize:b,fontWeight:v,onClick:x}=e,$=(0,i.Z)(e,["asTitle","children","textAlign","openIcon","closeIcon","title","innerControl","open","fontSize","fontWeight","onClick"]),[Z,y]=(0,o.useState)(!1);return o.createElement(d,(0,r.Z)({ref:t},$),o.createElement(u,{scale:"large",fill:"background.dark",endIcon:m?s:c,onClick:()=>{y(!Z),x()}},o.createElement(h.Z,{as:n,fontSize:b,fontWeight:v},f)),o.createElement(p,{open:g?Z:m,isText:"string"==typeof a,textAlign:l},a))}));f.defaultProps={asTitle:"h2",children:null,textAlign:"justify",openIcon:"ChevronRight",closeIcon:"ChevronRight",innerControl:!1,open:!1,fontSize:2,fontWeight:"medium"},f.displayName="Accordion";var g=f},59120:function(e,t,n){n.d(t,{W:function(){return o},z:function(){return i}});var r=n(99673);let i=r.iv`
  border: none;
  cursor: pointer;

  background: none;

  transition: all 0.2s ease-in-out;

  &:disabled {
    opacity: 0.5;
  }
`,o=r.ZP.button`
  position: relative;
  width: 100%;
  height: 100%;

  ${i}

  ${({noHover:e})=>!e&&r.iv`
      &:hover:not(:disabled) {
        transform: scale(1.1);
      }
    `}
`},66685:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(7896),i=n(31461),o=n(2784),a=n(59120);function l(e){let{children:t}=e,n=(0,i.Z)(e,["children"]);return o.createElement(a.W,(0,r.Z)({"data-testid":"base-button",role:"button"},n),t)}l.defaultProps={noHover:!1,onClick:()=>{}};var c=l},27439:function(e,t,n){n.d(t,{ZP:function(){return w}});var r=n(7896),i=n(31461),o=n(2784),a=n(13980),l=n(99673),c=n(91489),s=n(68054),d=n(63825),u=n(25610),p=n(19527),h=n(7029);let f=e=>l.iv`
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${e};
`,g=l.ZP.a.attrs((e=>Object.assign({},e)))({transition:"box-shadow ease 0.4s",textDecoration:"none",cursor:"pointer",display:"grid",overflow:"hidden",gridTemplateAreas:'"image" "body"',justifyContent:"space-between",borderRadius:(0,c.R)("radii.default")},(e=>{let{enableHover:t}=e,n=(0,i.Z)(e,["enableHover"]);return t&&{":hover":{boxShadow:(0,c.R)("boxShadows.4")(n)}}}),(0,s.qC)(s.Oq,c.$_,s.Dh,s.eC,s.bK,s.fU),c.Tf),m=(0,l.ZP)(h.Z).attrs((e=>Object.assign({imageWidth:"100%",imageHeight:"100%",objectFit:"cover"},e)))`
  grid-area: image;
`,b=(0,l.ZP)(p.Z).attrs((e=>Object.assign({color:"inherit",background:"inherit",padding:"16px 14px",flexDirection:"column"},e)))`
  grid-area: body;
`,v=(0,l.ZP)(u.Z).attrs((e=>Object.assign({fontSize:6,color:"inherit",lineHeight:"1.2em"},e)))`
  ${({truncate:e,lines:t=2})=>e&&f(t)}
`,x=(0,l.ZP)(d.Z).attrs((e=>Object.assign({forwardedAs:"small",color:"inherit",display:"block",fontSize:0,marginTop:2},e)))`
  ${({truncate:e,lines:t=2})=>e&&f(t)}
`,$=(0,l.ZP)(d.Z).attrs((e=>Object.assign({fontSize:2,fontWeight:"light",lineHeight:"1.5em",color:"inherit",marginTop:"3"},e)))`
  ${({truncate:e,lines:t=4})=>e&&f(t)}
`,Z=o.forwardRef(((e,t)=>{let{children:n}=e,a=(0,i.Z)(e,["children"]);return o.createElement(g,(0,r.Z)({ref:t},a),n)}));Z.displayName="Card",Z.Image=m,Z.Title=v,Z.Subtitle=x,Z.Text=$,Z.Body=b;let y={truncate:a.bool,lines:a.number};Z.Title.propTypes=Object.assign({},y),Z.Subtitle.propTypes=Object.assign({},y),Z.Text.propTypes=Object.assign({},y);var w=Z},18281:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(7896),i=n(31461),o=n(2784),a=n(99673),l=n(91489),c=n(19527);let s=(0,a.ZP)(c.Z).attrs((e=>{let{color:t,disabled:n}=e,r=(0,i.Z)(e,["color","disabled"]);return Object.assign({alignItems:"center",color:n?"text.gray":t},r)}))``,d=a.ZP.input.attrs((()=>({type:"checkbox"})))`
  appearance: none;
  background: transparent;
  width: 20px;
  height: 20px;
  outline: none;
  cursor: pointer;

  &:not(:checked) {
    border-radius: ${(0,l.R)("radii.medium")};
    border: ${(0,l.R)("borders.1")};
  }

  &:checked {
    &:after {
      content: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJzdmdJZCIgZmlsbD0iI2ZmZiIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0ic2MtYlpReW5NIGpjVFFtYyI+PHBhdGggZD0iTTkgMTYuMkw0LjggMTJsLTEuNCAxLjRMOSAxOSAyMSA3bC0xLjQtMS40TDkgMTYuMnoiLz48L3N2Zz4=');
      position: absolute;
      width: 20px;
      height: 20px;
      background: ${(0,l.dF)("primary")};
      border-radius: ${(0,l.R)("radii.medium")};
      box-sizing: border-box;
    }

    &:disabled {
      &:after {
        background: ${(0,l.dF)("dark")};
      }
    }
  }
`,u=(0,o.forwardRef)(((e,t)=>{let{children:n,checked:a,defaultChecked:l,disabled:c,value:u,onChange:p,label:h,name:f,as:g}=e,m=(0,i.Z)(e,["children","checked","defaultChecked","disabled","value","onChange","label","name","as"]),b=o.createElement(d,{onChange:e=>p(e,u),checked:a,disabled:c,defaultChecked:l,ref:t,value:u,name:f,"data-testid":"checkbox-item"});return n||h?o.createElement(s,(0,r.Z)({forwardedAs:g,disabled:c},m,{"data-testid":"checkbox"}),b,h||n):b}));u.defaultProps={children:null,disabled:!1,color:"text.base",as:"label",gap:2,onChange:()=>{}},u.displayName="Checkbox";var p=u},17781:function(e,t,n){n.d(t,{Z:function(){return $}});var r=n(7896),i=n(31461),o=n(2784),a=n(99673),l=n(68054),c=n(91489);let s="primary",d={light:c.rS.palette.text.white,dark:c.rS.palette.text.base},u="\n  -webkit-transition: all 500ms ease;\n  transition: all 500ms ease;\n",p=`\n  ${u}\n  -moz-user-select: -moz-none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n`,h={small:"28px",medium:"38px"},f=({props:e,variation:t})=>{let{bg:n}=e;return{colorfulTransition:a.iv`
      ${u}
      background-color: ${(0,c.dF)(n||s)(e)};
      color: ${(0,c.jk)(n||s,d)(e)};
      > svg {
        ${u}
        fill: ${(0,c.jk)(n||s,d)(e)};
      }
    `,colorful:a.iv`
      background-color: ${(0,c.dF)(n||s)(e)};
      color: ${(0,c.jk)(n||s,d)(e)};
      > svg {
        fill: ${(0,c.jk)(n||s,d)(e)};
      }
    `,default:a.iv`
      background-color: ${(0,c.dF)("white")(e)};
      color: ${(0,c.jk)("white",d)(e)};
    `}[t||(n?"colorful":"default")]},g=a.ZP.div`
  ${l.e6}
  ${l.bK}
  text-decoration: none;
`,m=a.ZP.label`
  display: flex;
  justify-content: center;
  align-items: center;

  scroll-snap-align: center;
  border-radius: ${e=>(0,c.R)("space.4")(e)}px;

  min-width: 144px;
  height: ${e=>h[null==e?void 0:e.size]};

  ${e=>f({props:e})};

  ${({autoSize:e})=>e?a.iv`
          justify-content: space-around;
          width: auto;
          min-width: auto;
          height: auto;
          padding: ${(0,c.R)("space.2")}px ${(0,c.R)("space.2")}px;
        `:a.iv`
          max-width: 144px;
        `}

  ${p}
  ${u}
  ${l.E0}
  ${l.o3}
  ${l.JB}
  ${l.Ue}
  ${l.Cc}
`,b=a.ZP.p`
  max-width: 60%;
  font-size: inherit;
  font-weight: inherit;
  line-height: ${e=>(0,c.R)("lineHeights.standard")(e)}px;
  font-stretch: normal;
  letter-spacing: normal;

  ${e=>{let{color:t}=e,n=(0,i.Z)(e,["color"]);return t&&a.iv`
      color: ${(0,c.uu)(t)(n)};
    `}}

  ${({autoSize:e})=>e&&a.iv`
      max-width: 100%;
    `};
`,v=a.ZP.input`
  ${p}
  display: none;

  &:checked + ${m} {
    ${e=>f({props:e,variation:"colorfulTransition"})};
  }
`,x=e=>{let{as:t,checked:n,clickable:a,startIcon:l,children:c,autoSize:s,endIcon:d,value:u,color:p,gridGap:h,size:f,name:x,type:$,id:Z,bg:y,onChange:w,onClick:k}=e,C=(0,i.Z)(e,["as","checked","clickable","startIcon","children","autoSize","endIcon","value","color","gridGap","size","name","type","id","bg","onChange","onClick"]);return o.createElement(g,(0,r.Z)({},C,{as:a?t||"a":t||"div","data-testid":"chip-container"}),$&&o.createElement(v,{"data-testid":"chip-input",checked:n,onChange:e=>{var t,n;w({value:null==e||null==(t=e.target)?void 0:t.value,selected:null==e||null==(n=e.target)?void 0:n.checked})},value:u,type:$,name:x,bg:y,id:Z}),o.createElement(m,(0,r.Z)({"data-testid":"chip-label",onClick:k,gridGap:h,clickable:a,startIcon:l,autoSize:s,endIcon:d,size:f,htmlFor:Z,bg:y},C,a&&{onChange:w}),l,o.createElement(b,{autoSize:s,clickable:a,color:p,bg:y},c),d))};x.defaultProps={onChange:()=>{},onClick:()=>{},type:"",clickable:!1,startIcon:null,size:"medium",children:null,gridGap:2,bg:"",fontSize:0,fontWeight:"regular",endIcon:null,value:"",color:"",name:"",id:""};var $=x},88699:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(7896),i=n(31461),o=n(2784),a=n(99673),l=n(8341);let c=(0,a.ZP)(l.Z)`
  display: grid;
  ${({trigger:e,collapsedIn:t})=>e&&a.iv`
      > *:nth-child(n + ${t}) {
        display: none;
        overflow: hidden;
        max-height: 0;
      }
    `};
`,s=e=>{let{children:t,trigger:n,collapsedIn:a}=e,l=(0,i.Z)(e,["children","trigger","collapsedIn"]);return o.createElement(c,(0,r.Z)({trigger:n,collapsedIn:a+1,"data-testid":"collapse"},l),o.Children.toArray(t).map((e=>o.isValidElement(e)&&o.cloneElement(e))))};s.defaultProps={trigger:!1,children:null,collapsedIn:0},s.displayName="Collapse";var d=s},58331:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(7896),i=n(31461),o=n(2784),a=n(34490),l=n(19527),c=n(63825);let s={like:{icon:"Like"},dislike:{icon:"Dislike"}};var d=function(e){let{type:t,label:n,onClick:d,color:u}=e,p=(0,i.Z)(e,["type","label","onClick","color"]),{icon:h}=s[t];return o.createElement(l.Z,(0,r.Z)({alignItems:"center",onClick:d},p),o.createElement(a.JO$,{name:h,color:u,cursor:"pointer"}),o.createElement(c.Z,{ml:"6px"},n))}},97600:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(2784),i=n(99673),o=n(91489);let a=i.ZP.hr`
  height: ${({size:e})=>`${e}px`};
  width: 100%;
  border: none;
  ${o.$_}
`,l=e=>r.createElement(a,e);l.defaultProps={size:1,bg:"border.light"};var c=l},39471:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(2784),i=n(99673),o=n(91489),a=n(7029),l=n(84546),c=n(19527),s=n(63825);let d=(0,i.ZP)(l.Z)`
  border-radius: 50%;
  width: ${e=>(0,o.R)("sizes.hotLinks.width")(e)};
  height: ${e=>(0,o.R)("sizes.hotLinks.height")(e)};
  margin-bottom: 8px;
`,u=i.ZP.a`
  display: block;
  text-decoration: none;
  width: 100%;
`,p=(0,i.ZP)(a.Z)``,h=i.iv`
  flex-flow: wrap;
  background: ${e=>(0,o.R)("palette.background.lighter")(e)};
  padding: 0 8px;
  border-left: 4px solid ${({borderColor:e})=>e||"transparent"};
  width: 100%;
  border-radius: 4px;
  box-shadow: ${e=>(0,o.R)("boxShadows.4")(e)};

  p {
    font-size: ${e=>(0,o.R)("fontSizes.2")(e)}px;
    color: ${e=>(0,o.uu)("scratched")(e)};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1;
    text-align: left;
  }

  ${d} {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border: ${e=>(0,o.R)("borders.0")(e)};
    margin: 4px 7px 4px 0;

    ${p} {
      width: 100%;
      border-radius: 50%;
    }
  }
`,f=(0,i.ZP)(c.Z)`
  flex-direction: column;
  align-items: center;

  ${({directionType:e})=>"column"===e&&h}
`,g=(0,i.ZP)(s.Z).attrs((()=>({color:"base",fontSize:[0,1,2]})))`
  text-align: center;
  line-height: ${e=>(0,o.R)("lineHeights.plus")(e)}px;
`,m=({item:e,onClick:t,directionType:n,imgLazyLoading:i})=>{let{link:o,image:a,text:l,borderColor:c}=e;return r.createElement(u,{href:o,onClick:n=>t(n,e),"data-testid":"hotlink-link",borderColor:c},r.createElement(f,{directionType:n,borderColor:c,"data-testid":`title-${l}`},r.createElement(d,null,r.createElement(p,{alt:l,src:a,lazy:i})),r.createElement(g,null,l)))};m.defaultProps={item:{},onClick:()=>{},directionType:"row",imgLazyLoading:!0};var b=m},29869:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(7896),i=n(31461),o=n(2784),a=n(99673),l=n(91489);let c=a.iv`
  border: 1px solid;
  border-color: ${e=>{let{hasError:t}=e,n=(0,i.Z)(e,["hasError"]);return(0,l.ow)(t?"error.base":"border.light")(n)}};
  border-radius: 4px;
  width: 100%;

  padding: ${(0,l.R)("space.2")}px;
  line-height: ${(0,l.R)("lineHeights.input")};
  font-size: ${(0,l.R)("fontSizes.1")}px;

  ::placeholder {
    color: ${(0,l.uu)("light")};
  }
`,s=a.ZP.input`
  ${c}
`,d=a.ZP.textarea.attrs((e=>({rows:e.rows||"5",cols:e.cols||"40"})))`
  ${c}
  resize: none;
  font-family: ${(0,l.R)("fontFamily")};
`,u=(0,o.forwardRef)(((e,t)=>{let{children:n,value:a,onChange:l}=e,c=(0,i.Z)(e,["children","value","onChange"]),u=c.multiline?d:s;return o.createElement(u,(0,r.Z)({ref:t},c,{value:a,onChange:e=>l(e,a)}),n)}));u.defaultProps={multiline:!1,hasError:!1,onChange:()=>{}},u.displayName="Input";var p=u},81572:function(e,t,n){n.d(t,{Z:function(){return y}});var r=n(7896),i=n(31461),o=n(2784),a=n(99673),l=n(91489),c=n(63825),s=n(19527),d=n(84546);let u=(0,a.ZP)(s.Z).attrs((e=>{let{justifyContent:t,centered:n}=e,r=(0,i.Z)(e,["justifyContent","centered"]);return Object.assign({width:"100%",alignItems:"center",justifyContent:n?"center":t,flexWrap:"wrap",gap:2,px:2},!(null!=r&&r.scale)&&{py:2},r)}))({textDecoration:"none"},l.bU,l.bA),p=(0,a.ZP)(c.Z).attrs((e=>{let{textAlign:t,centered:n,justifyContent:r}=e,o=(0,i.Z)(e,["textAlign","centered","justifyContent"]);return Object.assign({forwardedAs:"span",fontSize:1,flex:n||"space-between"!==r?"unset":1,color:"inherit",position:"center"===t?"absolute":"initial",transform:"center"===t?"translateX(-50%)":"initial",left:"center"===t?"50%":"initial"},o)}))``,h=(0,a.ZP)(d.Z).attrs((e=>Object.assign({fontSize:1,color:"text.scratched",fontWeight:"regular",lineHeight:"display"},e)))({flexBasis:"100%",textAlign:"justify",textAlignLast:"left"});var f=n(34490);let g=e=>{let{children:t}=e,n=(0,i.Z)(e,["children"]);return o.createElement(c.Z,(0,r.Z)({},n,{"data-testid":"item-description"}),t)};g.defaultProps={color:"inherit",fontWeight:"normal",display:"block",as:"small",fontSize:0,mt:1},g.displayName="ItemDescription";var m=g;let b=e=>{let{children:t}=e,n=(0,i.Z)(e,["children"]);return o.createElement(h,(0,r.Z)({},n,{"data-testid":"item-content"}),t)};b.displayName="ItemContent";var v=b;let x=e=>{let{centered:t,description:n,content:a,endIcon:l,fill:s,fontSize:d,hint:h,onClick:g,startIcon:b,textAlign:x,title:$,ellipsis:Z,as:y,titleAs:w,justifyContent:k}=e,C=(0,i.Z)(e,["centered","description","content","endIcon","fill","fontSize","hint","onClick","startIcon","textAlign","title","ellipsis","as","titleAs","justifyContent"]),E=o.Children.toArray(null==C?void 0:C.children),P=e=>e&&"string"==typeof e?o.createElement(f.JO$,{name:e,fill:s,"data-testid":"item-icon"}):e,I=()=>n&&"string"==typeof n?o.createElement(m,null,n):n;return o.createElement(u,(0,r.Z)({forwardedAs:y,centered:t,textAlign:x,onClick:g,"data-testid":"item",justifyContent:k},C),P(b),($&&"string"==typeof $?o.createElement(p,{fontSize:d,textAlign:x,centered:t,"data-testid":"item-title",forwardedAs:w},$,I()):$)||(()=>{let e=I(),n=Z?{textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",width:"100%"}:null;return e?o.createElement(o.Fragment,null,o.createElement(p,{fontSize:d,textAlign:x,centered:t,style:n,"data-testid":"item-title",forwardedAs:w},E,e)):o.createElement(o.Fragment,null,o.createElement(p,{fontSize:d,textAlign:x,centered:t,style:n,"data-testid":"item-title",forwardedAs:w,justifyContent:k},null==E?void 0:E.filter((({type:{displayName:e}={}})=>"ItemContent"!==e))))})(),(h&&"string"==typeof h?o.createElement(c.Z,{as:"label",fontSize:1,fontWeight:"normal","data-testid":"item-hint"},h):h)||P(l),(null==E?void 0:E.find((({type:{displayName:e}={}})=>"ItemContent"===e)))||(a?o.createElement(v,null,a):null))};x.defaultProps={title:"",children:null,justifyContent:"space-between",startIcon:null,endIcon:null,hint:null,centered:!1,fill:"currentColor",ellipsis:!1};var $=x;let Z=(0,o.forwardRef)(((e,t)=>{let{as:n,onClick:a}=e,l=(0,i.Z)(e,["as","onClick"]),c=o.Children.toArray(null==l?void 0:l.children);return(null==c?void 0:c.find((({type:{displayName:e}={}})=>null==e?void 0:e.includes("ItemHeader"))))?o.createElement(u,(0,r.Z)({ref:t,forwardedAs:n,onClick:a,"data-testid":"item-container"},l),c):o.createElement($,(0,r.Z)({ref:t,as:n,onClick:a},l))}));Z.defaultProps={title:"",children:null},Z.Content=v,Z.Description=m,Z.Header=e=>o.createElement($,(0,r.Z)({px:0,py:0},e)),Z.Header.displayName="ItemHeader",Z.displayName="Item";var y=Z},66228:function(e,t,n){n.d(t,{ij:function(){return r.ij},ZP:function(){return o},I1:function(){return r.I1},Iy:function(){return r.Iy}});var r=n(93088),i=n(2784);var o=({type:e,schema:t})=>{let n=Array.isArray(t)?{"@context":"https://schema.org/","@graph":t}:Object.assign({"@context":"https://schema.org/","@type":e},t);return i.createElement("script",{type:"application/ld+json","data-testid":"jsonld-script",dangerouslySetInnerHTML:{__html:JSON.stringify(n)}})}},93088:function(e,t,n){n.d(t,{H9:function(){return r},ij:function(){return o},I1:function(){return a},NI:function(){return l},Iy:function(){return p},$5:function(){return h}});var r=(e,t)=>{var n,r,i,o,a,l,c;return e&&0!==Object.keys(e).length&&0!==e.count||t&&t.stats&&0!==Object.keys(t.stats).length&&0!==(null==(n=t.stats)?void 0:n.count)?{"@type":"AggregateRating",ratingValue:e.count>0?null==(r=e.score)?void 0:r.toString():null==(i=t.stats)||null==(o=i.average)?void 0:o.toFixed(0),reviewCount:e.count>0?null==(a=e.count)?void 0:a.toString():null==(l=t.stats)||null==(c=l.count)?void 0:c.toString()}:null},i=n(12468);var o=(e,t=i.RW)=>{if(!e||0===e.length)return{};return{itemListElement:[{name:"magalu.com",position:1,url:""},...e].map((e=>({"@type":"ListItem",position:e.position,item:{"@id":`${t}${null==e?void 0:e.url}`,name:e.name}})))}};var a=e=>{if(!e||0===Object.keys(e).length||0===e.count)return null;return{mainEntity:e.filter((e=>e.question&&e.answer)).map((e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}})))}};var l=(e,t)=>{var n,r,i,o;return e&&0!==Object.keys(e).length&&t&&e.price&&(null!=e&&null!=(n=e.price)&&n.bestPrice||null!=e&&null!=(r=e.price)&&r.price)?{"@type":"Offer",price:(null==e||null==(i=e.price)?void 0:i.bestPrice)||(null==e||null==(o=e.price)?void 0:o.price),priceCurrency:"BRL",availability:"http://schema.org/InStock",url:(null==e?void 0:e.offer)||t}:null};var c=e=>{let t=new Date(e);return e?`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`:""};var s=(e,t,n)=>{var o,a;let c=`${n}${null==e?void 0:e.url}`,s=r(e.rating,t),d=l(e,c);return Object.assign({"@context":"https://schema.org","@type":"Product"},s?{aggregateRating:s}:{},{name:e.title,image:null==(o=e.image)?void 0:o.replace("{w}",i.w.width).replace("{h}",i.w.height),brand:null==(a=e.brand)?void 0:a.label,sku:e.id,description:e.description||e.title},d?{offers:d}:{})};var d=(e="",t="")=>e?`${e} > ${t}`:"";var u=(e,t)=>{var n,r,i,o;let a=null==(n=t.reviews)?void 0:n.map((e=>h(e))).filter((e=>e)),l=null==(r=e.attributes)?void 0:r.find((e=>"color"===e.type));return Object.assign({description:e.description||e.title,category:d(null==(i=e.category)?void 0:i.name,null==(o=e.subcategory)?void 0:o.name),color:null==l?void 0:l.current,itemCondition:"https://schema.org/NewCondition",sku:e.id},a?{review:a}:{})};var p=({product:e={},review:t={},isList:n=!1},r=i.RW)=>{if(!e||0===Object.keys(e).length)return{};let o=s(e,t,r),a=n?{}:u(e,t);return Object.assign({},o,a)};var h=e=>{var t;return e&&0!==Object.keys(e).length&&0!==e.count&&e.user&&null!=(t=e.user)&&t.name?{"@type":"Review",author:{"@type":"Person",name:e.user.name},datePublished:c(e.date),reviewBody:e.text,name:e.title,reviewRating:{"@type":"Rating",bestRating:"5",ratingValue:e.rating.toString(),worstRating:"1"}}:null}},10200:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(7896),i=n(31461),o=n(2784);n(21302);var a=n(99673),l=n(68054),c=n(91489);let s={a:a.iv`
    text-decoration: none;
  `,button:a.iv`
    font-size: inherit;
    font-family: inherit;
    border: 0;
    margin: 0;
    overflow: visible;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  `},d=a.ZP.a.attrs((e=>{let{color:t}=e,n=(0,i.Z)(e,["color"]);return Object.assign({color:t||"text.base",fontSize:1},n)}))`
  cursor: pointer;

  ${({as:e})=>s[e]}
  ${({textAlign:e})=>e?a.iv`
          display: block;
        `:a.iv`
          ${{display:"inline-flex"}}
          ${l.GQ}
          align-items: center;
        `}
  ${({underline:e})=>e&&a.iv`
      text-decoration: underline;
    `}
  ${({hover:e})=>e&&a.iv`
      &:hover {
        text-decoration: ${e=>null!=e&&e.underlineOnHover?"underline":!(null!=e&&e.underline)&&"none"};
        color: ${e=>e.colorOnHover||(0,c.ow)(e.color)(e)||e.color};
      }
    `}
  ${l.Oq}
  ${l.Cg}
  ${l.bK}
  ${c.$_}
  ${l.Dh}
  ${l.yd}
  ${l.cp}
  ${l.eC}
  ${c.SG}
`;function u(e){let{children:t}=e,n=(0,i.Z)(e,["children"]),a=null!=n&&n.href?"a":"button";return o.createElement(d,(0,r.Z)({"data-testid":"link",as:a},n),t)}u.defaultProps={hover:!0,underline:!1,underlineOnHover:!0,bg:"transparent"},u.displayName="Link";var p=u},54934:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(7896),i=n(31461),o=n(2784),a=n(34490),l=n(99673),c=n(91489),s=n(84546),d=n(63825);let u={primary:l.iv`
    background-color: ${e=>(0,c.dF)("primary")(e)};
    color: ${e=>(0,c.uu)("lightest")(e)};
    font-size: ${e=>(0,c.R)("fontSizes.2")(e)}px;
  `,secondary:l.iv`
    color: ${e=>(0,c.uu)("light")(e)};
  `},p=l.ZP.div`
  ${({noBorder:e})=>!e&&l.iv`
      border-bottom: 1px solid #ededed;
    `}
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 4px 12px 12px;
  ${e=>u[e.variation]}
`,h=(0,l.ZP)(s.Z)`
  flex: 1;
`,f=(0,l.ZP)(d.Z).attrs((({isLink:e,chevronRight:t})=>({fontSize:1,fontWeight:e||!t?"regular":"medium"})))`
  ${e=>u[e.variation]}
  line-height: ${e=>(0,c.R)("lineHeights.tall")(e)}px;
  padding-left: ${e=>e.icon?"8px":"0px"};
`;function g(e){let{icon:t,text:n,testId:l,onClick:c}=e,s=(0,i.Z)(e,["icon","text","testId","onClick"]),{chevronRight:d,href:u,variation:g}=s,m="primary"===g?"#FFF":"#999",b=Array.isArray(n)?n[0]:n||"",v=Array.isArray(n)?n.slice(1):[];return o.createElement(p,(0,r.Z)({"data-testid":l,as:u?"a":"div",href:u,onClick:c},s),t&&o.createElement(a.JO$,{name:t,color:t.startsWith("Category")?"#0086FF":m}),o.createElement(h,null,o.createElement(f,(0,r.Z)({isLink:!!u,icon:t},s),b),v.map((e=>o.createElement(f,{key:e,isLink:!!u,icon:t,variation:"secondary"},e)))),d&&o.createElement(a.JO$,{name:"ChevronRight",color:m}))}g.defaultProps={chevronRight:!0,href:null,icon:null,testId:"",variation:"",onClick:()=>{}};var m=g},26527:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(2784),i=n(34490),o=n(99673),a=n(91489);let l=o.ZP.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  backdrop-filter: blur(4px);
  z-index: ${e=>(0,a.R)("zIndices.4")(e)};

  display: flex;
  justify-content: center;
  align-items: center;

  ::before {
    content: '';
    width: 100%;
    height: 100%;
    background-color: ${(0,a.ow)("background.lighter")};
    opacity: 0.7;
    position: absolute;
    z-index: -1;
  }
`;var c=()=>r.createElement(l,null,r.createElement(i.JO$,{name:"AnimatedLoadingColorful2",width:50,height:50}))},7121:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(7896),i=n(31461),o=n(2784),a=n(35741),l=n(99673),c=n(68054),s=n(91489),d=n(64586);let u=l.ZP.div.attrs((e=>Object.assign({},e)))`
  border-radius: ${e=>(0,s.R)("radii.default")(e)};
  background-color: ${e=>e.backgroundColor||"white"};
  animation: ${d.Ji} 0.2s ease-in;

  #arrow {
    position: absolute;
    width: 16px;
    height: 16px;
    &:after {
      content: ' ';
      background-color: ${e=>e.backgroundColor||"white"};
      position: absolute;
      width: 16px;
      height: 16px;
      transform: rotate(45deg);
      ${s.$_}
    }
  }

  &[data-popper-placement^='bottom'] > #arrow {
    top: -8px;
    :after {
      left: 0;
    }
  }

  &[data-popper-placement^='top'] > #arrow {
    bottom: -8px;
    :after {
      left: 0;
    }
  }

  &[data-popper-placement^='right'] > #arrow {
    left: -6px;
  }

  &[data-popper-placement^='left'] > #arrow {
    right: -6px;
  }

  ${c.Dh}
  ${c.cp}
  ${s.$_}
`;var p=n(84546),h=function(e){let{backgroundColor:t,children:n,parentRef:l,placement:c="bottom",visible:s}=e,d=(0,i.Z)(e,["backgroundColor","children","parentRef","placement","visible"]),[h,f]=(0,o.useState)(null),g=(0,o.useRef)(null),{styles:m,attributes:b}=(0,a.D)(l.current,g.current,{placement:c,modifiers:[{name:"arrow",options:{element:h}},{name:"offset",options:{offset:[0,10]}},{name:"flip",options:{flipVariations:!1}}]});return o.createElement(o.Fragment,null,s?o.createElement(u,(0,r.Z)({"data-testid":"popper-container",ref:g,style:m.popper},b.popper,{backgroundColor:t},d),o.createElement("div",{ref:f,style:m.arrow,id:"arrow"}),o.createElement(p.Z,{"data-testid":"popper-children-container",m:1},n)):null)}},73002:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(31461),i=n(2784),o=n(34490),a=n(99673),l=n(91489),c=n(84546);let s=(0,a.ZP)(c.Z)`
  display: flex;
  align-items: center;
  cursor: pointer;

  label {
    margin-right: 10px;
    font-weight: 700;

    ${({desktopMode:e})=>e&&a.iv`
        font-size: ${e=>(0,l.R)("fontSizes.0")(e)}px;
      `};
  }

  select {
    appearance: none;
    display: block;
    background: transparent;
    cursor: pointer;
    border: 1px solid ${e=>(0,l.kJ)("base")(e)};

    ${({desktopMode:e})=>e?a.iv`
            font-size: ${e=>(0,l.R)("fontSizes.0")(e)}px;
            padding: 8px 32px 8px 12px;
          `:a.iv`
            width: 100%;
            padding: 16px 32px 16px 12px;
            border-radius: 4px;
          `};

    &:focus {
      outline: none;
      background: ${e=>(0,l.R)("baseColors.wildsand.base")(e)};
    }
    ::-ms-expand {
      display: none;
    }
  }

  svg {
    outline: none;
    pointer-events: none;

    flex: 0 0 auto;
    margin-left: -32px;
  }
`;function d(e){let{id:t,textLabel:n,options:a,onChange:l}=e,c=(0,r.Z)(e,["id","textLabel","options","onChange"]),d=a.find((e=>e.selected));return i.createElement(s,c,n&&i.createElement("label",{htmlFor:`select-${t}`,"data-testid":"select-label"},n),i.createElement("select",{id:`select-${t}`,onChange:e=>l(e.target.value),value:null==d?void 0:d.value,"data-testid":`select-${t}`},null==a?void 0:a.map((e=>i.createElement("option",{key:e.value,selected:e.selected,value:e.value,"data-testid":"select-option"},e.label)))),i.createElement(o._ME,{width:20,height:20}))}d.defaultProps={desktopMode:!1,onChange:()=>{},options:[]};var u=d},26780:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(7896),i=n(31461),o=n(2784),a=n(34490),l=n(19527);let c=[1,2,3,4,5],s=(0,o.forwardRef)(((e,t)=>{let{onChange:n,value:s}=e,d=(0,i.Z)(e,["onChange","value"]),[u,p]=(0,o.useState)(s);return(0,o.useEffect)((()=>(p(s),()=>p(0))),[s]),o.createElement(l.Z,{ref:t,"data-testid":"select-rating",justifyContent:"start",onMouseLeave:()=>p(s)},c.map((e=>o.createElement(a.JO$,(0,r.Z)({key:e,name:"Star",cursor:"pointer",color:u>=e?"stars.base":"stars.disabled",onMouseOver:()=>p(e),onClick:()=>n({target:{value:e}})},d)))))}));s.defaultProps={value:""},s.displayName="SelectRating";var d=s},19476:function(e,t,n){n.d(t,{UQ:function(){return r.Z},Yd:function(){return o.Z},xu:function(){return i.Z},gN:function(){return y},zx:function(){return w.Z},XZ:function(){return k.Z},Af:function(){return C.Z},Vq:function(){return E.Z},Lt:function(){return B},cx:function(){return Q},kC:function(){return p.Z},rj:function(){return ee.Z},X6:function(){return te.Z},bo:function(){return J.Z},Ee:function(){return ge.Z},II:function(){return ne.Z},ck:function(){return re.Z},uk:function(){return ce},rU:function(){return I.Z},TR:function(){return se.Z},fG:function(){return fe},rD:function(){return Oe.Z},U2:function(){return Ae},Ph:function(){return de.Z},D_:function(){return me.Z},OK:function(){return ve},q5:function(){return we},td:function(){return Ce},x4:function(){return Ee},xv:function(){return Pe.Z}});var r=n(50616),i=n(84546),o=n(66685),a=n(7896),l=n(31461),c=n(2784),s=n(99673),d=n(91489),u=n(34490),p=n(19527);let h=(0,s.ZP)(p.Z)`
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  padding: ${e=>(0,d.R)("space.2")(e)}px 0;
`,f=s.ZP.span`
  font-size: ${e=>(0,d.R)("fontSizes.0")(e)}px;
  color: ${e=>(0,d.uu)("light")(e)};
`,g=s.ZP.span`
  font-size: ${e=>(0,d.R)("fontSizes.2")(e)}px;
  color: ${e=>(0,d.uu)("base")(e)};
`,m=(0,s.ZP)(p.Z)`
  align-items: center;
  height: 100%;
`,b=(0,s.ZP)(u._Qn).attrs((e=>({color:(0,d.uu)("lighter")(e)})))``,v=s.ZP.a`
  text-decoration: none;
  font-size: ${e=>(0,d.R)("fontSizes.1")(e)}px;
  color: ${e=>(0,d.uu)("lighter")(e)};
`,x=s.ZP.span`
  font-size: ${e=>(0,d.R)("fontSizes.1")(e)}px;
  color: ${e=>(0,d.uu)("scratched")(e)};
`,$=s.ZP.span`
  display: flex;
`,Z=e=>{let{seller:t,item:n,onClick:r,active:i}=e,o=(0,l.Z)(e,["seller","item","onClick","active"]);return t?c.createElement(m,{"data-testid":"breadcrumb-item-list"},c.createElement(h,{"data-testid":"breadcrumb-item"},c.createElement(f,null,t.text),c.createElement(g,{"data-testid":"breadcrumb-item-name"},c.createElement("b",null,t.name)))):c.createElement(m,{"data-testid":"breadcrumb-item-list"},n.position>0&&c.createElement(b,{width:20,height:20}),c.createElement(i?x:v,(0,a.Z)({"data-testid":"breadcrumb-item",onClick:i?null:e=>r(e,n),active:i,href:n.url},o),c.createElement($,null,n.icon||n.name)))};Z.defaultProps={seller:void 0,item:void 0,active:!0,onClick:()=>{}};var y=Z,w=n(60861);n(27439);var k=n(18281),C=n(17781);n(88699);var E=n(77766),P=n(64586),I=n(10200);let R=(0,s.ZP)(p.Z).attrs((e=>Object.assign({color:"text.base",alignItems:"center",p:3},e)))``,z=(0,s.ZP)(i.Z).attrs((e=>Object.assign({display:"inline-block"},e)))``,j=(0,s.ZP)(I.Z).attrs((e=>{let{pointing:t}=e,n=(0,l.Z)(e,["isOpen","pointing"]);return Object.assign({position:"relative",fontSize:1,py:t?3:2,gridGap:1},n)}))``,S=(0,s.ZP)(i.Z).attrs((e=>Object.assign({position:"absolute",color:"text.base",bg:"background.lighter",borderRadius:"medium",zIndex:1,minWidth:"10rem",maxHeight:"20rem",forwardedAs:"ul"},(0,l.Z)(e,["pointing"]))))`
  border: ${(0,d.R)("borders.0")};

  ${({pointing:e})=>e&&s.iv`
      &::before,
      &::after {
        content: '';
        position: absolute;
        bottom: 100%;
        left: 19px;
        border: 11px solid transparent;
        border-bottom-color: ${(0,d.R)("borders.0")};
      }

      &::after {
        left: 20px;
        border: 10px solid transparent;
        border-bottom-color: ${(0,d.dF)("lighter")};
      }
    `}
`,A=(0,s.ZP)(R)`
  gap: ${(0,d.R)("space.1")}px;
  ${({disableHover:e})=>!e&&s.iv`
      &:hover {
        background-color: ${(0,d.dF)("darker")};
      }
    `}
`,O=(0,s.ZP)(R)`
  font-weight: ${e=>(0,d.R)("fontWeights.medium")(e)};
`,M=(0,s.ZP)(u._ME)`
  width: 20px;
  height: 20px;
  transition: transform 0.25s ease-out;
  transform: ${({rotated:e})=>e&&"rotate(-180deg)"};
  ${d.$_}
`,T=(0,c.createContext)(!1),N=()=>(0,c.useContext)(T);var D=({children:e,value:t})=>c.createElement(T.Provider,{value:t},e);let H=e=>{let{children:t,fill:n}=e,r=(0,l.Z)(e,["children","fill"]),{isOpen:i,handleOnClick:o,pointing:s}=N();return c.createElement(j,(0,a.Z)({},r,{isOpen:i,pointing:s,onClick:o,"data-testid":"dropdown-title"}),t,c.createElement(M,{fill:n,rotated:i}))};H.defaultProps={children:null,fill:"text.base",underlineOnHover:!1},H.displayName="DropdownTitle";var F=H;let L=e=>{let{children:t}=e,n=(0,l.Z)(e,["children"]),{isOpen:r,pointing:i}=N();return r?c.createElement(S,(0,a.Z)({},n,{pointing:i,"data-testid":"dropdown-menu"}),t):null};L.defaultProps={children:null,fontSize:1,forwardedAs:"ul"},L.displayName="DropdownMenu";var W=L;let X=e=>{let{children:t,startIcon:n,endIcon:r}=e,i=(0,l.Z)(e,["children","startIcon","endIcon"]);return c.createElement(O,i,n,t,r)};X.defaultProps={children:null,startIcon:null,endIcon:null,forwardedAs:"li"},X.displayName="DropdownLabel";let Y=e=>{let{children:t,value:n,startIcon:r,endIcon:i}=e,o=(0,l.Z)(e,["children","value","startIcon","endIcon","onClick"]),{setIsOpen:s,handleOnChange:d}=N();return c.createElement(A,(0,a.Z)({},o,{role:"option",onClick:e=>{s(!1),d(e,{value:n})},"data-testid":"dropdown-item"}),r,t,i)};Y.defaultProps={children:null,value:null,startIcon:null,endIcon:null,disableHover:!1,forwardedAs:"li"},Y.displayName="DropdownItem";var _=Y,J=n(97600);let q=e=>c.createElement(J.Z,e),G=e=>{let{title:t,children:n,options:r,onClick:i,onChange:o,mouseenter:s,pointing:d}=e,u=(0,l.Z)(e,["title","children","options","onClick","onChange","mouseenter","pointing"]),p=(0,c.useRef)(),[h,f]=(0,c.useState)(!1);s?(0,P.Ay)(p,f):(0,P.t$)(p,(()=>f(!1)));return c.createElement(D,{value:{isOpen:h,setIsOpen:f,handleOnClick:e=>{s||f(!h),i(e)},handleOnChange:(e,{value:t})=>{o(e,{value:t})},pointing:d}},c.createElement(z,{ref:p,"data-testid":"dropdown"},(()=>{let e=c.Children.toArray(n).find((({type:{displayName:e}})=>"DropdownTitle"===e));return e?c.isValidElement(e)&&e:c.createElement(F,u,t)})(),r?c.createElement(W,{mouseenter:s,pointing:d},null==r?void 0:r.map((e=>{let{key:t,text:n,value:r,startIcon:i,endIcon:o}=e,s=(0,l.Z)(e,["key","text","value","startIcon","endIcon"]);return c.createElement(_,(0,a.Z)({key:t,value:r,startIcon:i,endIcon:o},s),n)}))):c.Children.toArray(n).find((({type:{displayName:e}})=>"DropdownMenu"===e))))};G.defaultProps={children:null,mouseenter:!1,pointing:!1,onChange:()=>{},onClick:()=>{}},G.Title=F,G.Menu=W,G.Label=X,G.Divider=q,G.Item=_,q.displayName="DropdownDivider";var B=G;let V=s.ZP.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: ${({padding:e})=>e}%;
`,U=s.ZP.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`,K=e=>{let{src:t,ratio:n}=e,r=(0,l.Z)(e,["src","ratio"]),[i,o]=(n&&"string"==typeof n?n:"16:9").split(":"),s=i&&o?o/i:null,d=s&&!Number.isNaN(s)?(100*s).toFixed(2):"56.25";return c.createElement(V,(0,a.Z)({"data-testid":"embed",padding:d},r),c.createElement(U,{src:(0,P.qJ)(t)}))};K.defaultProps={ratio:"16:9"};var Q=K;n(58331);var ee=n(8341),te=n(25610);n(39471);var ne=n(29869),re=n(81572);n(66228),n(93088),n(91785);let ie=s.ZP.div`
  position: relative;
  height: ${({height:e})=>e};

  display: flex;
  justify-content: flex-end;
  align-items: center;

  div {
    ${({bullets:e})=>(({quantity:e=0,size:t=6,color:n="rgba(0, 0, 0, 0.3)"})=>s.iv`
  width: ${t}px;
  height: ${t}px;
  background-color: ${n};
  border-radius: 50%;
  margin-right: calc((100% / ${e}) - ${t}px);

  &:last-child {
    margin-right: ${t}px;
  }
`)(e)}
  }
`,oe=s.ZP.div`
  width: 100%;
  position: relative;
`,ae=s.ZP.progress`
  position: absolute;
  width: ${({width:e})=>e||"100%"};
  height: ${({height:e})=>e||"auto"};
  border-radius: ${(0,d.R)("radii.big")};
  appearance: none;

  &:before {
    content: attr(data-label);
    font-size: ${e=>(0,d.R)("fontSizes.3")(e)}px;
    color: ${({color:e})=>(0,d._j)(e,15)};
    font-weight: ${e=>(0,d.R)("fontWeights.bold")(e)};

    position: absolute;
    left: ${({value:e})=>e&&`calc(${e}% - 22px)`};
    top: -25px;
  }

  &::-webkit-progress-bar {
    height: ${({height:e})=>e};
    border-radius: ${(0,d.R)("radii.big")};
    background-color: ${e=>(0,d.dF)("whisper")(e)};
  }

  &::-webkit-progress-value {
    height: ${({height:e})=>e};
    border-radius: ${(0,d.R)("radii.big")};
    background-color: ${({color:e})=>e};
  }

  &::-moz-progress-bar {
    height: ${({height:e})=>e};
    border-radius: ${(0,d.R)("radii.big")};
    background-color: ${({color:e})=>e};
  }
`,le=({bullets:e,value:t,max:n,color:r,label:i,height:o,width:a}={})=>c.createElement(oe,{color:r,width:a,height:o,"data-testid":"linear-progress"},c.createElement(ae,{max:n,color:r,width:a,height:o,value:t,"data-label":i},i),(e=>Boolean(Object.keys(e).length))(e)&&c.createElement(ie,{bullets:e,height:o},(({quantity:e})=>e&&Array.from(Array(e).keys()).map((e=>c.createElement("div",{key:e,"data-testid":"linear-progress-bullet"}))))(e)));le.defaultProps={max:100,label:"",color:"#FFCC03",width:"100%",height:"10px",bullets:{}};var ce=le,se=n(15566);n(23076),n(54934);var de=n(73002);let ue=s.ZP.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`,pe=s.ZP.button`
  position: relative;
  width: 100%;
  height: 100%;

  max-width: ${({maxWidth:e})=>`${e}px`};
  max-height: ${({maxHeight:e})=>`${e}px`};
  border: none;
  cursor: pointer;

  background: none;

  transition: all 0.2s ease-in-out;

  &:disabled {
    opacity: 0.5;
  }

  &:hover:not(:disabled) {
    transform: scale(1.1);
  }
`,he=s.ZP.div`
  ${d.$_}

  position: absolute;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 28px;
  width: 28px;
  border-radius: 50%;
  border: 3px solid ${({borderColor:e})=>e};

  font-size: 12px;
  font-weight: bold;
`;var fe=({children:e,amount:t=0,nullable:n=!0,truncateAmountThreshold:r,maxWidth:i=60,maxHeight:o=46,backgroundColor:a="#ccc",counterColor:l="#fff",fontColor:s="#000",onClick:d})=>c.createElement(ue,null,c.createElement(pe,{maxWidth:i,maxHeight:o,onClick:d},e,(t||n)&&c.createElement(he,{"data-testid":"numbered-btn-counter",bg:l,borderColor:a,color:s},r&&t>r?`${r}+`:t)));n(26527),n(75851),n(70715);var ge=n(7029),me=n(85737);let be=(0,c.forwardRef)((function(e,t){let{onChange:n,onClick:r,value:i,children:o}=e,a=(0,l.Z)(e,["onChange","onClick","value","children"]);if(!c.isValidElement(o))return null;let s=c.cloneElement(o,Object.assign({},a));return c.createElement("div",{onClick:e=>{n(e,i),r(e)},ref:t},s)}));be.defaultProps={onClick:()=>({})};var ve=be;let xe=(0,c.createContext)(null);xe.displayName="TabContext";let $e=()=>(0,c.useContext)(xe),Ze=(e,t)=>{let{idPrefix:n}=e;return null===n?null:`${e.idPrefix}-P-${t}`},ye=(e,t)=>{let{idPrefix:n}=e;return null===n?null:`${e.idPrefix}-T-${t}`};var we=({children:e,value:t})=>{let n=(()=>{let[e,t]=c.useState(null);return c.useEffect((()=>{t(`stereo-id-${Math.round(1e5*Math.random())}`)}),[]),e})(),r=(0,c.useMemo)((()=>({idPrefix:n,value:t})),[t]);return c.createElement(xe.Provider,{value:r},e)};var ke=c.forwardRef((function(e,t){let{onChange:n,value:r,children:i}=e,o=(0,l.Z)(e,["onChange","value","children"]),s=c.Children.map(i,(e=>{let t=e.props.value;if(void 0===t)return null;let i=t===r;return c.cloneElement(e,{value:t,onChange:n,selected:i})}));return c.createElement("div",(0,a.Z)({},o,{ref:t,role:"tablist"}),s)}));var Ce=c.forwardRef((function(e,t){let{children:n}=e,r=(0,l.Z)(e,["children"]),i=$e();if(null===i)throw TypeError("No TabContext provided");let o=c.Children.map(n,(e=>c.isValidElement(e)?c.cloneElement(e,{"aria-controls":Ze(i,e.props.value),id:ye(i,e.props.value)}):null));return c.createElement(ke,(0,a.Z)({},r,{ref:t,value:i.value}),o)}));var Ee=c.forwardRef((function(e,t){let{children:n,value:r}=e,o=(0,l.Z)(e,["children","value"]),s=$e();if(null===s)throw TypeError("No TabContext provided");let d=Ze(s,r),u=ye(s,r);return void 0===r?null:c.createElement(i.Z,(0,a.Z)({ref:t,hidden:s.value!==r,id:d,"aria-labelledby":u,role:"tabpanel"},o),n)})),Pe=n(63825);n(26780);let Ie=(0,s.ZP)(p.Z).attrs({alignItems:"center",justifyContent:"center",backgroundColor:"background.lighter"})`
  height: 24px;
`,Re=(0,s.ZP)(i.Z)`
  width: 100%;
`,ze=(0,s.ZP)(i.Z).attrs((e=>Object.assign({},e,{borderRadius:"medium",zIndex:0})))`
  background-color: ${e=>(0,d.R)("baseColors.wildsand.base")(e)};
  position: absolute;
  height: 3px;
  width: 100%;
`,je=(0,s.ZP)(i.Z).attrs({bg:"background.primary",borderRadius:"medium",zIndex:1})`
  position: absolute;
  height: 3px;
`,Se=s.ZP.input.attrs({type:"range"})`
  pointer-events: none;
  position: absolute;
  height: 0;
  width: 100%;
  outline: none;
  z-index: ${e=>e.overlapIndex?(0,d.R)(`zIndices.${e.overlapIndex}`)(e):(0,d.R)("zIndices.3")(e)};

  &,
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
  }

  &::-webkit-slider-thumb {
    background-color: ${(0,d.dF)("lighter")};
    border: ${e=>(0,d.R)("borders.0")(e)};
    border-radius: ${e=>(0,d.R)("radii.circle")(e)};
    box-shadow: ${e=>(0,d.R)("boxShadows.2")(e)};
    cursor: pointer;
    height: 24px;
    width: 24px;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
  }

  &::-moz-range-thumb {
    background-color: ${(0,d.dF)("lighter")};
    border: ${e=>(0,d.R)("borders.0")(e)};
    border-radius: ${e=>(0,d.R)("radii.circle")(e)};
    box-shadow: ${e=>(0,d.R)("boxShadows.2")(e)};
    cursor: pointer;
    height: 24px;
    width: 24px;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
  }
`;var Ae=({minAllowed:e,maxAllowed:t,currentMin:n,currentMax:r,onChange:i})=>{let[o,a]=(0,c.useState)(n),[l,s]=(0,c.useState)(r),d=(0,c.useRef)(null),u=(0,c.useRef)(null),p=(0,c.useRef)(null),h=(0,c.useCallback)((n=>Math.round((n-e)/(t-e)*100)),[n,r]);(0,c.useEffect)((()=>{if(u.current){let e=h(o),t=h(+u.current.value);p.current&&(p.current.style.left=`${e}%`,p.current.style.width=t-e+"%")}}),[o,h]),(0,c.useEffect)((()=>{if(d.current){let e=h(+d.current.value),t=h(l);p.current&&(p.current.style.width=t-e+"%")}}),[l,h]),(0,c.useEffect)((()=>{a((n=>(0,P.Z4)(n,r,e,t))(n)?n:e),s((r=>(0,P.rx)(r,n,e,t))(r)?r:t)}),[n,r]);let f=(e,t)=>{i({currentMin:e,currentMax:t})};return c.createElement(Ie,null,c.createElement(Se,{"data-testid":"slider-input-min",type:"range",min:e,max:t,value:o,ref:d,overlapIndex:o>t-100?4:2,onChange:function(e){let t=Math.min(+e.target.value,l-1);a(t),f(t,l)}}),c.createElement(Se,{"data-testid":"slider-input-max",type:"range",min:e,max:t,value:l,ref:u,onChange:function(e){let t=Math.max(+e.target.value,o+1);s(t),f(o,t)}}),c.createElement(Re,null,c.createElement(ze,null),c.createElement(je,{ref:p})))},Oe=n(7121)},87302:function(e,t,n){n.d(t,{CK:function(){return o.CK},Ee:function(){return r.Ee},Vq:function(){return r.Vq},X6:function(){return r.X6},YE:function(){return i.YE},kC:function(){return r.kC},rU:function(){return r.rU},rj:function(){return r.rj},t$:function(){return o.t$},uk:function(){return r.uk},xu:function(){return r.xu},xv:function(){return r.xv}});var r=n(19476);n(56547);var i=n(62452);n(82709);var o=n(64586);n(12468)}}]);