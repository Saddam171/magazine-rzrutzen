"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6546],{5530:function(e,t,i){i.d(t,{Z:function(){return f}});var l=i(7896),a=i(31461),n=i(2784),o=i(99673),r=i(19476);let s=(0,o.ZP)(r.rj).attrs((e=>Object.assign({pt:2,pb:3,px:3,backgroundColor:"background.lighter",borderRadius:"medium"},e)))`
  grid-template-columns: minmax(auto, 64px) auto;
  grid-template-areas: ${({hasFigure:e})=>e?"'f c'\n        'b b'":"'c c'\n        'b b'"};
`,d=(0,o.ZP)(r.kC).attrs((e=>Object.assign({my:3,mx:2},e)))`
  flex-direction: column;
  justify-content: space-around;
  grid-area: c;
`,c=(0,o.ZP)(r.xu).attrs((e=>Object.assign({my:3,mx:2,minWidth:"64px"},e)))`
  grid-area: f;
`,u=(0,o.ZP)(r.Ee)``,m=(0,o.ZP)(r.xu).attrs((e=>Object.assign({forwardedAs:"p",color:"text.base",fontWeight:"medium",fontSize:2},e)))``,h=(0,o.ZP)(r.xu).attrs((e=>Object.assign({forwardedAs:"p",color:"text.base",fontWeight:"regular",fontSize:1,lineHeight:"big"},e)))``,g=(0,o.ZP)(r.zx)`
  width: 100%;
  text-transform: uppercase;
  grid-area: b;
`,p=e=>{let{data:t,as:i,href:o,image:r,alt:p,onButtonClick:f,buttonProps:v}=e,x=(0,a.Z)(e,["data","as","href","image","alt","onButtonClick","buttonProps"]);return n.createElement(s,(0,l.Z)({"data-testid":"card",hasFigure:Boolean(r)},x),Boolean(r)&&n.createElement(c,{"data-testid":"card-figure"},n.createElement(u,{src:r,alt:p,width:64,height:64,lazy:!0})),(Boolean(t.title)||Boolean(t.text))&&n.createElement(d,{"data-testid":"card-content"},Boolean(t.title)&&n.createElement(m,{"data-testid":"card-title"},t.title),Boolean(t.text)&&n.createElement(h,{"data-testid":"card-text"},t.text)),n.createElement(g,(0,l.Z)({"data-testid":"card-button",forwardedAs:o?"a":i,href:o,onClick:f,children:t.action},v)))};p.defaultProps={as:"button",data:{title:"",text:"",action:""},image:"",href:void 0,alt:"",onButtonClick:()=>{}};var f=p},92877:function(e,t,i){i.d(t,{Z:function(){return g}});var l=i(2784),a=i(34490),n=i(70615),o=i(50616),r=i(99673),s=i(91489),d=i(63825);let c=r.ZP.div`
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 16px;
  border-bottom: 3px solid #eee;
`,u=r.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,m=(0,r.ZP)(d.Z)`
  text-align: center;
  font-weight: ${e=>(0,s.R)("fontWeights.medium")(e)};
  font-size: ${e=>(0,s.R)("fontSizes.2")(e)}px;
`;function h({label:e,content:t,detailTitle:i,fullScreen:r,children:s,open:d,onCloseSidebar:h,onChangeOpen:g}){let[p,f]=(0,l.useState)(d);function v(){f(!1),g(!1),h()}return(0,l.useEffect)((()=>{f(d),g(d)}),[d]),l.createElement(l.Fragment,null,l.createElement(o.Z,{title:e,open:!!t,onClick:()=>{f(!p),g(!p)}},t),l.createElement(n.Z,{direction:"right",visible:p,onClickOutside:v,fullScreen:r},l.createElement(c,null,l.createElement(a.xhZ,{color:"text.light","data-testid":"arrow-back",role:"button",title:"Fechar detalhes",onClick:v}),l.createElement(u,null,l.createElement(m,{"data-testid":"detail-title"},i))),s))}h.defaultProps={content:null,open:!1,onCloseSidebar:()=>{},onChangeOpen:()=>{}};var g=h},36103:function(e,t,i){i.d(t,{Z:function(){return u}});var l=i(2784),a=i(19527),n=i(23778),o=i(50238),r=i(2575);let s={color:o.Z,size:n.Z,voltage:n.Z,volume:r.Z},d=(e,t)=>e.map(((i,l)=>{var a,n,o,r;let s=(e=>null==e?void 0:e.reduce(((e,t)=>{var i;return e[t.type]=Object.assign({},e[t.type],{[t.value]:[...(null==(i=(null==e?void 0:e[t.type])||{})?void 0:i[t.value])||[],t]}),e}),{}))(t);return Object.assign({},i,{variations:null==(a=(null==s||null==(n=s[null==(o=e[l-1])?void 0:o.type])?void 0:n[null==(r=e[l-1])?void 0:r.current])||t)?void 0:a.reduce(((e,t)=>Array(...new Set([...e,t.id]))),[])})})),c=({onAttributeChange:e,attributes:t,variations:i,title:o,alignment:r,colorMinLength:c,colorVariant:u,fullWidth:m})=>{let h={color:c},g={color:u},p=d(t,i);return l.createElement(a.Z,{flexDirection:"column",width:1,rowGap:3},p.map(((t,a)=>{let d=s[null==t?void 0:t.type]||n.Z,c=i.filter((e=>t.variations.includes(e.id)&&e.type===t.type));return l.createElement(d,{fullWidth:m,key:`${null==t?void 0:t.type}-${a}`,attribute:t,variations:c,onChange:e,title:o,alignment:r,minLength:h[null==t?void 0:t.type],variant:g[null==t?void 0:t.type]})})))};c.defaultProps={attributes:[],alignment:"center",colorVariant:"smooth",fullWidth:!1,variations:[]};var u=c},28426:function(e,t,i){i.d(t,{Z:function(){return y}});var l=i(7896),a=i(31461),n=i(2784),o=i(12468),r=i(19476),s=i(70615),d=i(99673),c=i(91489),u=i(63825);let m=(0,d.ZP)(u.Z)`
  color: ${e=>(0,c.uu)("scratched")(e)};
  font-size: ${e=>(0,c.R)("fontSizes.1")(e)}px;
  font-weight: ${e=>(0,c.R)("fontWeights.regular")(e)};
`,h=(0,d.ZP)(u.Z)`
  margin-top: 16px;
  line-height: 1.25;
`,g=(0,d.ZP)(u.Z)`
  font-weight: ${e=>(0,c.R)("fontWeights.bold")(e)};
  color: ${e=>(0,c.ow)("text.primary")(e)};
  line-height: 1.25;
`,p=e=>{let{isMagaluCompany:t,onLinkClick:i}=e,l=(0,a.Z)(e,["isMagaluCompany","onLinkClick"]),o=()=>null==i?void 0:i();return t?n.createElement(r.xu,l,n.createElement(m,{"data-testid":"guaranteelabel"},"Empresa do"," ",n.createElement(r.rU,{underline:!0,display:"inline",color:"text.scratched",onClick:o},"Grupo Magalu")," ","que garante sua compra do pedido à entrega.")):n.createElement(r.xu,l,n.createElement(m,{"data-testid":"guaranteelabel"},"O Magalu garante a sua compra, do pedido à entrega."," ",n.createElement(r.rU,{underline:!0,display:"inline",color:"text.scratched","data-testid":"learn-more",onClick:o},"Saiba mais")))};p.defaultProps={id:"magazineluiza",delivery:"magazineluiza",isMagaluCompany:!1};var f=p,v=i(34490);let x=({text:e,title:t})=>n.createElement(r.xu,{p:16},n.createElement(r.kC,null,n.createElement(v.hzV,{mr:16,width:45,height:35}),n.createElement(g,{"data-testid":"details-title"},t)),n.createElement(r.xu,{p:1},null==e?void 0:e.map(((e,t)=>n.createElement(h,{key:t},e)))));x.defaultProps={title:"",text:[]};var b=x;let w=e=>{let{seller:t,showDialog:i,detailsText:d,detailsTitle:c,isMagaluCompany:u,onDetailsOpen:m,onDetailsClose:h}=e,g=(0,a.Z)(e,["seller","showDialog","detailsText","detailsTitle","isMagaluCompany","onDetailsOpen","onDetailsClose"]),{id:p}=t,[v,x]=(0,n.useState)(!1),w=e=>{h(e),x(!1)};return p===o.ig?null:n.createElement(n.Fragment,null,n.createElement(f,(0,l.Z)({isMagaluCompany:u,onLinkClick:e=>{m(e),x(!0)}},g)),!i&&n.createElement(s.Z,{direction:"right",visible:v,onClickOutside:w,fullScreen:!1},n.createElement(s.$,{label:u?"Empresa do Grupo Magalu":"Entrega e compra garantida",align:"left",fontSize:3,leftButton:{icon:"back",title:"Voltar para a pagina do produto",onClick:w}}),n.createElement(b,{text:d,title:c})),i&&n.createElement(r.Vq,{visible:v,onClickOutside:w,type:"responsive",position:"center",width:"350px",titleStyle:{textAlign:"center"},showClose:!0},n.createElement(b,{text:d,title:c})))};w.defaultProps={seller:{id:"magazineluiza"},detailsText:[],detailsTitle:"",showDialog:!1,isMagaluCompany:!1,onDetailsOpen:()=>{},onDetailsClose:()=>{}};var y=w},90713:function(e,t,i){i.d(t,{Z:function(){return v}});var l=i(2784),a=i(33279),n=i(99673),o=i(91489),r=i(19527),s=i(19476);let d=n.ZP.div`
  width: 100%;
  padding: ${e=>(0,o.R)("space.2")(e)}px;
  ${({desktopMode:e})=>!e&&n.iv`
      display: flex;
      justify-content: start;
      overflow-x: scroll;
    `};
`,c=(0,n.ZP)(s.xv)`
  font-size: ${e=>(0,o.R)(e.desktopMode?"fontSizes.3":"fontSizes.2")(e)}px;
`,u=(0,n.ZP)(r.Z)`
  padding: ${e=>(0,o.R)("space.2")(e)}px;
`,m=(0,n.ZP)(r.Z)`
  justify-content: ${e=>e.desktopMode?"flex-start":"center"};
  align-items: center;
`,h=n.ZP.a`
  text-decoration: none;
  cursor: default;
  justify-content: center;
  display: flex;
`,g=n.ZP.label`
  cursor: pointer;
  display: flex;
  justify-content: center;
  scroll-snap-align: center;
  border-radius: ${(0,o.R)("radii.default")};
  align-items: center;
  background: ${e=>(0,o.dF)("white")(e)};
  box-shadow: ${e=>(0,o.R)("boxShadows.4")(e)};
  height: ${({height:e})=>`${e}px`};
  width: ${({width:e})=>`${e}px`};
  margin: ${e=>(0,o.R)("space.1")(e)}px 0px;
  & > img {
    padding: 14% 16%;
    max-width: 100%;
    max-height: 100%;
  }
`;var p=i(56547);function f({filters:e={},onItemClick:t,onView:i,label:n,desktopMode:o,itemHeight:r,itemWidth:f}){let{attributeFilters:v}=e,[x,b]=(0,a.YD)({triggerOnce:!0,threshold:0,delay:1e3});(0,l.useEffect)((()=>{b&&i({filters:e})}),[b]);let w=({children:e,filter:t})=>o&&t.values.length>4?l.createElement(p.lr,{auto:!1,showControls:!1,showArrowControls:!0,showPartial:!1,showPartialNextSlide:!1,gutter:0,slidesPerView:5,"data-testid":"carousel"},e):l.createElement(m,{"data-testid":"m-carousel",desktopMode:o,gap:o?32:2},e);return l.createElement(l.Fragment,null,v.map(((e,i)=>l.createElement(l.Fragment,null,l.createElement(u,null,l.createElement(s.X6,{"data-testid":"header-label",as:"h2",fontSize:o?18:14,color:"text.attributeLabel"},n)),l.createElement(d,{ref:x,"data-testid":"filter-item-container",key:i,desktopMode:o},l.createElement(w,{filter:e},null==e?void 0:e.values.map((e=>l.createElement(h,{key:e.id,role:"button",onClick:i=>t(i,e),href:e.url||e.href,"data-testid":"filter-item-link"},l.createElement(g,{"data-testid":"filter-item-label",height:r,width:"text"===e.filterType?1.6*f:f},"icon"===e.filterType?l.createElement(s.Ee,{alt:e.label,title:e.label,"data-testid":"filter-item-image",src:e.icon}):l.createElement(c,{desktopMode:!0,color:"icons.disabled","data-testid":"filter-item-text"},e.label)))))))))))}f.defaultProps={filters:{},onItemClick:()=>{},onView:()=>{}};var v=f},63486:function(e,t,i){i.d(t,{Z:function(){return u}});var l=i(2784),a=i(34490),n=i(99673),o=i(19527);let r=(0,n.ZP)(o.Z)`
  display: flex;
  align-content: center;
  justify-content: ${({carousel:e})=>e?"start":"center"};
  padding: 12px;
  overflow-x: scroll;
`,s=(0,n.ZP)(o.Z)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;var d=i(17781);let c=({filters:e,onChange:t})=>{let i=e=>l.createElement(a.JO$,{name:{"24c":"DeliveryRTomorrow",delivery_plus_1:"FastDelivery",store_pickup:"PickupStore",delivery_1h:"Delivery1h",delivery_24h:"Delivery24h","magalu-entregas":"DeliveryM","magalu-partner":"Pin",free_shipping:"DeliveryFree",today:"ExpressDelivery",magalu_indica:"Check"}[e]||"FastDelivery"});return l.createElement(r,{carousel:(null==e?void 0:e.length)>2},l.createElement(s,null,null==e?void 0:e.map((({label:e,slug:a,selected:n,href:o})=>l.createElement(d.Z,{as:"a",type:"checkbox",name:"DeliveryFilter",startIcon:i(a),onChange:i=>t(Object.assign({},i,{href:o,label:e,slug:a})),checked:n,href:o,value:a,key:a,id:a},e)))))};c.defaultProps={filters:[],onChange:()=>{}};var u=c},75057:function(e,t,i){i.d(t,{Z:function(){return y}});var l=i(31461),a=i(2784),n=i(15312),o=i(13111),r=i(84546),s=i(60861),d=i(18281),c=i(19527),u=i(10200),m=i(63825),h=i(29869),g=i(99673),p=i(25610);let f=(0,g.ZP)(p.Z).attrs({fontSize:5,fontWeight:"light"})``,v=(0,g.ZP)(r.Z).attrs({fontSize:[0,1,2,2],display:"contents",color:"text.light",mY:3})``,x=(0,g.ZP)(m.Z).attrs({mt:3,mb:1})``,b=(0,g.ZP)(m.Z).attrs({color:"error",mt:1})``;function w({errorEmail:e,errorName:t,labelEmail:i,labelName:g,labelNewsletter:p,noticeMeLabel:w,noticeMeLink:y,onSubmit:E,placeholderEmail:C,placeholderName:Z,subtitle:k,textSubmitButton:P,title:$}){let[S,z]=(0,a.useState)(!0),[I,A]=(0,a.useState)(""),[D,M]=(0,a.useState)(""),[L,R]=(0,a.useState)({}),O=a.useCallback((()=>{let e=(0,n.Z)(I)?void 0:{fullName:t};return R((t=>Object.assign({},(0,l.Z)(t,["fullName"]),e))),e}),[I]),T=a.useCallback((t=>{let i=(0,o.Z)(t)?void 0:{email:e};return R((e=>Object.assign({},(0,l.Z)(e,["email"]),i))),i}),[D]),j=(0,a.useCallback)((()=>{A(""),M(""),z(!0)}),[I,D]);return a.createElement(a.Fragment,null,a.createElement(c.Z,{alignItems:"baseline",gap:"2",mb:"3"},a.createElement(f,{"data-testid":"let-me-know-title"},$),a.createElement(u.Z,{href:y,target:"_blank",underline:!0,color:"text.light",fontSize:[0,1,2,2]},w)),a.createElement(v,{"data-testid":"let-me-know-description"},k),a.createElement("form",null,a.createElement(x,{"data-testid":"let-me-know-input-label-name"},g),a.createElement(h.Z,{"data-testid":"let-me-know-input-name",placeholder:Z,hasError:!!L.fullName,value:I,onChange:e=>A(e.target.value),onFocus:()=>R((e=>(0,l.Z)(e,["fullName"]))),onBlur:e=>O(e.target.value)}),a.createElement(b,{"data-testid":"let-me-know-error-name"},L.fullName),a.createElement(x,{"data-testid":"let-me-know-input-label-email"},i),a.createElement(h.Z,{"data-testid":"let-me-know-input-email",placeholder:C,type:"email",hasError:!!L.email,value:D,onChange:e=>M(e.target.value),onFocus:()=>R((e=>(0,l.Z)(e,["email"]))),onBlur:e=>T(e.target.value)}),a.createElement(b,{"data-testid":"let-me-know-error-email"},L.email)),a.createElement(r.Z,{mt:15},a.createElement(d.Z,{as:m.Z,fontSize:[1,2],checked:S,onChange:e=>z(e.target.checked)},p)),a.createElement(r.Z,{mt:15},a.createElement(s.Z,{"data-testid":"let-me-know-submit",full:!0,onClick:e=>{let t=Object.assign({},O(I),T(D));Object.entries(t).length||E({fullName:I,email:D,newsletter:S},j),e.preventDefault()}},P)))}w.defaultProps={errorEmail:"Insira o e-mail corretamente.",errorName:"Insira o nome completo corretamente.",labelEmail:"E-mail",labelName:"Nome",labelNewsletter:"Quero receber ofertas e conteúdos por e-mail",noticeMeLabel:"Ver produtos similares",onSubmit:void 0,placeholderEmail:"Digite seu e-mail",placeholderName:"Digite seu nome",subtitle:"Avise-me quando estiver disponível",textSubmitButton:"Avise-me",title:"Não disponível"};var y=w},99075:function(e,t,i){i.d(t,{Z:function(){return h}});var l=i(2784),a=i(34490),n=i(64586),o=i(19476),r=i(56547),s=i(99673),d=i(91489);let c=s.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  text-align: center;
`,u=s.ZP.h2`
  font-size: ${e=>(0,d.R)("fontSizes.4")(e)}px;
  line-height: ${e=>(0,d.R)("lineHeights.fontSize")(e)};
  font-weight: ${e=>(0,d.R)("fontWeights.medium")(e)};
  color: ${e=>e.color};
  margin: 10px;
`,m=s.ZP.p`
  font-size: ${e=>(0,d.R)("fontSizes.2")(e)}px;
  line-height: ${e=>(0,d.R)("lineHeights.display")(e)};
  color: ${e=>(0,d.uu)("base")(e)};
  margin: 15px 0;
  width: 80%;
`;function h({label:e,description:t,value:i,productUrl:s,attributes:{color:d,icon:h,textColor:g}}){let p={coin:"Coin",lightning:"Lightning"}[h]||"Coin",[f,v]=(0,l.useState)(!1),[x,b]=(0,l.useState)(!1),w=e=>{e.preventDefault(),b(!x)};return l.createElement(l.Fragment,null,l.createElement(r.mY,{hasInfo:!0,onClick:w,color:d,icon:p,textColor:g,value:i}),l.createElement(o.Vq,{visible:x,onClickOutside:w,position:"center",showClose:!0,type:"alert"},l.createElement(c,{onClick:e=>e.preventDefault()},l.createElement(o.kC,{alignItems:"center",flexDirection:"column"},l.createElement(a.JO$,{name:p,"data-testid":"loyalty-commission-icon",width:"25px",height:"25px",color:d}),l.createElement(u,{id:"loyaltyDialogTitle",color:d},e)),l.createElement(r.mY,{value:i,color:d,Icon:a.JO$,textColor:g}),l.createElement(m,{id:"loyaltyDialogDesc"},t),l.createElement(o.zx,{rounded:!0,variation:f?null:"outline",full:!0,onClick:()=>(e=>!f&&(v(!0),(0,n.vQ)(e),setTimeout((()=>v(!1)),3e3)))(s),"data-testid":"loyalty-commission-button"},f?"Copiado":"Copiar Link"))))}},60857:function(e,t,i){i.d(t,{Z:function(){return v}});var l=i(7896),a=i(31461),n=i(2784),o=i(34490),r=i(19527),s=i(7029);let d=(0,i(99673).ZP)(r.Z).attrs((e=>({borderWidth:e.selected?2:1,borderColor:e.selected?"blue":"whisper",borderStyle:"solid",borderRadius:"default",padding:2,width:e.smallThumbnails?"84px":"110px",height:e.smallThumbnails?"66px":"110px",alignItems:"center",justifyContent:"center",cursor:"pointer",position:"relative"})))`
  & img {
    height: ${e=>e.smallThumbnails?"70px":"90px"};
  }
`,c=e=>{let{alt:t,title:i,audio:c,images:u,video:m,imgWidth:h,imgHeight:g,imgMaxHeight:p,onImageClick:f,onAudioClick:v,onVideoClick:x,showMedia:b,showMoreTooltip:w,smallThumbnails:y,preload:E}=e,C=(0,a.Z)(e,["alt","title","audio","images","video","imgWidth","imgHeight","imgMaxHeight","onImageClick","onImageChange","onAudioClick","onVideoClick","showMedia","showMoreTooltip","smallThumbnails","preload"]),[Z,k]=(0,n.useState)({image:u[0],index:0});return(0,n.useEffect)((()=>{k({image:u[0],index:0})}),[u]),n.createElement(r.Z,(0,l.Z)({columnGap:4,maxHeight:614,"data-testid":"media-gallery"},C),n.createElement(r.Z,{rowGap:3,flexDirection:"column",width:"fit-content"},u.slice(0,u.length>5?4:u.length).map(((e,l)=>n.createElement(d,{key:`gallery-img-${l}`,selected:l===Z.index,smallThumbnails:y},n.createElement(s.Z,{alt:t,title:i,"data-testid":"media-gallery-image",src:e,width:90,height:90,onClick:()=>k({image:e,index:l}),onMouseOver:()=>k({image:e,index:l})})))),u.length>5&&n.createElement(r.Z,{"data-testid":"media-gallery-image-more",fontSize:5,fontWeight:"bold",borderRadius:"default",width:y?"84px":"110px",height:y?"66px":"110px",title:w,alignItems:"center",justifyContent:"center",bg:"background.base",color:"text.base",cursor:"pointer",onClick:()=>f(4)},"+ ",u.length-4)),n.createElement(r.Z,{flex:1,maxHeight:614,position:"relative"},n.createElement(s.Z,{"data-testid":"image-selected-thumbnail",src:Z.image,maxHeight:p,width:h,height:g,alt:t,title:i,lazy:!E||0!==Z.index,onClick:()=>(e=>{f(e)})(Z.index),cursor:"pointer"}),b&&n.createElement(r.Z,{gap:2,position:"absolute",bottom:0,left:0,"data-testid":"media-gallery-icons"},!!m&&n.createElement(o.JO$,{name:"VideoCircle",cursor:"pointer",width:"40px",height:"40px","data-testid":"media-gallery-video-icon",onClick:x}),!!c&&n.createElement(o.JO$,{name:"PodcastCircle",cursor:"pointer",width:"40px",height:"40px","data-testid":"media-gallery-audio-icon",onClick:v}))))};c.defaultProps={audios:[],images:[],podcasts:[],videos:[],imgWidth:600,imgHeight:600,imgMaxHeight:"40vh",alt:"",title:"",showMoreTooltip:"",smallThumbnails:!1,preload:!1};var u=c,m=i(19476),h=i(56547);let g=e=>{let{alt:t,title:i,audio:r,images:s,video:d,imgWidth:c,imgHeight:u,imgMaxHeight:g,counterSeparator:p,showCounter:f,onImageChange:v,onImageClick:x,onAudioClick:b,onVideoClick:w,showMedia:y,lazy:E,preload:C}=e,Z=(0,a.Z)(e,["alt","title","audio","images","video","imgWidth","imgHeight","imgMaxHeight","counterSeparator","showCounter","onImageChange","onImageClick","onAudioClick","onVideoClick","showMedia","lazy","preload"]),[k,P]=(0,n.useState)(1),[$,S]=(0,n.useState)(),z={audio:b,video:w},I={video:n.createElement(m.cx,{"data-testid":"media-embed",src:d}),audio:n.createElement("audio",{"data-testid":"media-audio",controls:!0,src:r})},A=e=>{let t="string"==typeof e&&["video","audio"].includes(e)?e:null;S(t)},D=e=>{(0,z[e])(),A(e)};return n.createElement(n.Fragment,null,n.createElement(m.xu,(0,l.Z)({"data-testid":"media-gallery",fontSize:0,position:"relative"},Z),n.createElement(h.lr,{lazy:E,onChange:e=>{P(e+1),v(s[e])},showControls:!1,auto:!1},s.map(((e,l)=>n.createElement(m.xu,{height:g,key:`gallery-img-${l}`},n.createElement(m.Ee,{alt:t,title:i,"data-testid":"media-gallery-image",key:`gallery-img-${l}`,src:e,m:"auto",width:c,height:u,maxHeight:g,lazy:!C||0!==l,onClick:()=>x(l)}))))),y&&n.createElement(m.kC,{"data-testid":"media-gallery-icons",position:"absolute",bottom:"16px",left:"16px",columnGap:2},!!d&&n.createElement(o.JO$,{name:"VideoCircle",width:"40px",height:"40px",onClick:()=>D("video"),"data-testid":"media-gallery-video-icon"}),!!r&&n.createElement(o.JO$,{name:"PodcastCircle",width:"40px",height:"40px",onClick:()=>D("audio"),"data-testid":"media-gallery-audio-icon"})),f&&!!s.length&&n.createElement(m.xu,{"data-testid":"media-gallery-counter",bg:"background.dark",color:"text.lightest",position:"absolute",bottom:"16px",right:"16px",paddingX:2,paddingY:1,borderRadius:"default",opacity:"85%"},k,p,s.length)),$&&n.createElement(m.Vq,{title:null,position:"center",showClose:!0,onClickOutside:A,visible:!0},I[$]))};g.defaultProps={audios:[],images:[],podcasts:[],videos:[],imgWidth:800,imgHeight:600,imgMaxHeight:"40vh",counterSeparator:" de ",showCounter:!0,alt:"",title:"",lazy:!1,preload:!1};var p=g;let f=e=>{let{alt:t,title:i,audios:o,images:r,podcasts:s,videos:d,imgWidth:c,imgHeight:m,imgMaxHeight:h,onImageChange:g,onImageClick:f,onAudioClick:v,onVideoClick:x,showThumbnail:b,showMoreTooltip:w,smallThumbnails:y,preload:E}=e,C=(0,a.Z)(e,["alt","title","audios","images","podcasts","videos","imgWidth","imgHeight","imgMaxHeight","counterSeparator","showCounter","onImageChange","onImageClick","onAudioClick","onVideoClick","showThumbnail","showMoreTooltip","smallThumbnails","lazy","preload"]),[Z]=d,[k]=[...s,...o];return n.createElement(b?u:p,(0,l.Z)({alt:t,title:i,audio:k,video:Z,images:r,imgWidth:c,imgHeight:m,imgMaxHeight:h,onImageClick:f,onAudioClick:v,onVideoClick:x,onImageChange:g,showMedia:!!Z||!!k,showMoreTooltip:w,smallThumbnails:y,preload:E},C))};f.defaultProps={audios:[],images:[],podcasts:[],videos:[],imgWidth:800,imgHeight:600,imgMaxHeight:"40vh",counterSeparator:" de ",showCounter:!0,alt:"",title:"",onImageChange:()=>{},onImageClick:()=>{},onVideoClick:()=>{},onAudioClick:()=>{},showThumbnail:!1,showMoreTooltip:"",smallThumbnails:!1,lazy:!1,preload:!1};var v=f},79957:function(e,t,i){i.d(t,{Z:function(){return ee}});var l=i(7896),a=i(31461),n=i(2784),o=i(33279),r=i(17675),s=i(34490),d=i(99673),c=i(68054),u=i(91489),m=i(56547),h=i(12468),g=i(27439),p=i(19476);let f=(0,d.ZP)(p.xv).attrs((e=>Object.assign({fontSize:13,fontWeight:"regular",lineHeight:"display"},e)))`
  justify-self: left;
  color: ${(0,u.uu)("light")};

  ${c.cp}
`;(0,d.ZP)(m.iG).attrs((e=>Object.assign({width:20,height:20},e)))`
  justify-self: end;
  max-width: 20px;
`;let v=(0,d.ZP)(g.ZP)`
  position: relative;
  padding: 5px;
  justify-content: unset;
  border-radius: 0;
  background-color: ${e=>e.hideLinkBorder?"unset":(0,u.ow)("background.lighter")(e)};
  ${({displayMode:e,containerWidth:t})=>e&&((e,t)=>({miniature:d.iv`
      display: grid;
      padding: 8px 2px;
    `,list:d.iv`
      display: grid;
      grid-template-columns: 1fr 2fr;
      ${t>=500&&d.iv`
        ${(0,u.aK)("small")} {
          grid-template-columns: 180px 2fr;
          grid-column-gap: 20px;
        }
      `}
      padding: 16px;
    `,gallery:d.iv`
      grid-template-rows: auto auto 1fr;
    `}[e]))(e,t)};
  display: grid;

  ${({fullHeight:e})=>e&&"\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n  "}
`,x={miniature:d.iv`
    height: 20vw;
    justify-content: flex-end;
    ${(0,u.aK)("small")} {
      height: 120px;
    }
  `,list:d.iv`
    justify-content: flex-start;
    padding-top: 4px;
    min-height: 25vw;
    ${(0,u.aK)("small")} {
      min-height: initial;
      max-height: 210px;
    }
  `,gallery:d.iv`
    height: 32vw;
    justify-content: flex-end;
    ${(0,u.aK)("small")} {
      max-height: 210px;
    }
  `},b=d.ZP.div`
  position: relative;
  display: flex;
  flex-direction: column;
  & > img {
    max-width: 100%;
    max-height: 100%;
  }
  ${({displayMode:e})=>e&&x[e]}
`,w={miniature:d.iv`
    justify-content: center;
  `,list:d.iv`
    justify-content: flex-start;
  `,gallery:d.iv`
    justify-content: flex-end;
  `},y=d.ZP.div`
  position: absolute;
  display: flex;
  width: 100%;
  top: 5%;
  ${({displayMode:e})=>e&&w[e]}
`,E=(0,d.ZP)(p.xv).attrs((e=>Object.assign({fontSize:[1,2,2],lineHeight:"display",fontWeight:"regular"},e)))`
  ${({displayMode:e})=>e!==h.IY&&"height: 32px;"}
  color: ${(0,u.uu)("base")};
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  max-width: 97%;
  margin: 0 0 4px 0;
  ${(0,u.aK)("small")} {
    height: 40px;
  }
  ${c.cp}
`,C=d.ZP.div`
  ${({displayMode:e})=>e===h.IY&&"padding-left: 8px"}
  ${({displayMode:e})=>e!==h.IY&&"\n    display: grid;\n    padding-top: 8px;\n  "}
`,Z=d.ZP.div`
  width: 100%;
  height: 15px;
  position: relative;
`,k=(0,d.ZP)(p.zx)`
  opacity: 0.7;
  visibility: hidden;
  position: absolute;
  width: 50%;
  min-width: 90px;

  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;

  &:hover {
    opacity: 1;
  }

  /* stylelint-disable-next-line selector-type-no-unknown */
  ${v}:hover & {
    visibility: visible;
  }
`,P=(0,d.ZP)(p.kC).attrs((()=>({alignItems:"center",height:"20px",marginTop:"2",backgroundColor:"background.primary",borderRadius:"medium",width:"fit-content",justifyContent:"center"})))`
  padding: 0 ${e=>(0,u.R)("space.2")(e)}px;
`,$=(0,d.ZP)(p.xv).attrs((()=>({fontSize:0,fontWeight:"medium",color:"white"})))``,S=(0,d.ZP)(p.xv).attrs((()=>({fontSize:0,fontWeight:"medium",marginTop:1})))`
  color: ${(0,u.uu)("primary")};
`;var z=i(62452),I=i(7029);let A=(0,d.ZP)(p.rj)`
  grid-template-columns: 1fr ${e=>e.displayMode!==h.IY?"20px":""};
  margin-bottom: ${(0,u.R)("space.1")}px;
  z-index: 1;
  ${e=>e.displayMode===h.IY&&"\n    grid-column-start: 3;\n    grid-row-start: 1;\n    align-self: start;\n  "}
`,D=(0,d.ZP)(p.Af).attrs((e=>Object.assign({},e)))`
  justify-self: start;
`,M=(0,d.ZP)(m.iG).attrs((e=>Object.assign({width:20,height:20},e)))`
  justify-self: end;
  max-width: 20px;
`;var L=({displayMode:e,sponsored:t,showWishBtn:i,isLiked:l,handleAddToWishlist:a,isMagaluIndica:o})=>n.createElement(A,{displayMode:e,sponsored:t,showWishBtn:i},t&&e===h.Co&&n.createElement(f,{place:"header"},"Patrocinado"),o&&e===h.yg&&n.createElement(D,{autoSize:!0,padding:"2px 8px",bg:"primary",fontSize:1,endIcon:n.createElement(s.JO$,{name:"Check",fill:"#FFF",width:"16px",height:"16px"}),fontWeight:"medium",gridGap:1,borderRadius:6,width:"125px"},"magalu indica"),i&&n.createElement(M,{active:l,onClick:a})),R=i(19527),O=i(63825);var T=({geoLocTags:e,displayMode:t})=>null!=e&&e.title?n.createElement(R.Z,{alignItems:"center",justifyContent:t===h.Co?"center":null,gap:1},n.createElement("div",null,n.createElement(s.JO$,{name:e.icon||"FastDelivery",color:"text.primary",width:30,height:30})),n.createElement("div",null,n.createElement(O.Z,{color:"text.primary",fontSize:[1,1,2,2],fontWeight:"medium"},e.title))):null;let j=({allGeoLocTags:e,displayMode:t})=>e.length>0&&n.createElement(R.Z,{display:"none","data-testid":"allGeoLocTags",flexDirection:"column"},e.map(((e,i)=>e.title&&n.createElement(R.Z,{key:i,alignItems:"center",display:t===h.Co?"none":null,color:"text.primary",fontSize:"0",fontWeight:"medium"},e.title))));j.defaultProps={allGeoLocTags:[]};var W=j,B=i(84546),F=i(93837);let H=(0,d.ZP)(p.xv).attrs((()=>({fontSize:0,fontWeight:"regular",marginTop:1})))`
  color: ${(0,u.uu)("scratched")};
`,V=({shippingTag:e})=>{let{time:t,cost:i,complement:l}=e,a=0===i?"Frete grátis":`Frete: ${(0,F.Z)({value:i})}`;return n.createElement(B.Z,{marginTop:1,"data-testid":"productCard-shipping-tag"},null!=i&&n.createElement((()=>0===i?n.createElement(S,null,a):n.createElement(H,null,a)),null),t&&n.createElement(S,null,t),l&&n.createElement(S,null,l))};V.defaultProps={shippingTag:{}};var N=V;let K={miniature:d.iv`
    justify-self: center;
    align-self: center;
  `,list:d.iv`
    justify-self: left;
  `},_=d.ZP.div`
  ${({displayMode:e})=>e&&K[e]};
  max-height: 20px;
`;var G=({displayMode:e,count:t,score:i,allowEmptyRating:l,showRating:a})=>(l||i)&&a?n.createElement(_,{displayMode:e},n.createElement(m.Cq,{score:i,count:t,width:"12px",height:"12px"})):null;let q=d.ZP.div`
  position: relative;

  span {
    filter: blur(3px);
  }
`,J=(0,d.ZP)(p.zx)`
  visibility: hidden;
  position: absolute;
  bottom: 0;

  /* stylelint-disable-next-line selector-type-no-unknown */
  ${q}:hover & {
    visibility: visible;
  }
`;var Y=({hidePrice:e,displayMode:t,installment:i,showInCashInfo:a,showDiscount:o,showDiscountOnlyCashInfo:r,price:s,hidePriceButtonAction:d,product:c})=>e?n.createElement(q,null,n.createElement("span",{"data-testid":"hided-price"},n.createElement(m.tA,{display:t,installment:null,price:0,showInCashInfo:a})),d&&n.createElement(J,{full:!0,size:"small",m:"10px 0","data-testid":"show-price-button",onClick:e=>{e.preventDefault(),d(c)}},"Ver Preço")):n.createElement(m.tA,(0,l.Z)({display:t,installment:i,showInCashInfo:a,showDiscount:o,showDiscountOnlyCashInfo:r},s));let U={sales_commission:z.KU,sales_dynamic_commission:z.KU},X=({showProductVariations:e,attributes:t})=>{let i={Tamanho:"tamanhos",Cor:"cores",Peso:"pesos",Voltagem:"voltagens",Aroma:"aromas",Capacidade:"capacidades"},l=(0,r.Z)(i),a=null==t?void 0:t.map((e=>"Armazenamento interno"===e.label?Object.assign({},e,{label:"Capacidade"}):e)).filter((e=>!!i[e.label]));return Boolean(e&&a.length)&&n.createElement(P,{display:"none","data-testid":"product-variations-container"},a.map((({label:e,values:t},i)=>{let a=t.length,o=l(a,e).toLowerCase();return n.createElement($,{key:i},i>0&&n.createElement(n.Fragment,null," e "),a," ",o)})))},Q=e=>{let{hideLinkBorder:t,onClick:i,onView:r,domain:d,imgLazyLoading:c,index:u,lazyLoadingOffset:g,showInCashInfo:x,enableShadow:w,enableHover:P,geoLocTags:$,allGeoLocTags:S,hidePrice:z,hidePriceButtonAction:A,showPreview:D,previewAction:M,showWishBtn:R,onClickWishBtn:O,fullHeight:j,showRating:B,sponsored:F,showDiscount:H,showDiscountOnlyCashInfo:V,showProductVariations:K,allowEmptyRating:_,containerWidth:q}=e,J=(0,a.Z)(e,["hideLinkBorder","onClick","onView","domain","imgLazyLoading","index","lazyLoadingOffset","showInCashInfo","enableShadow","enableHover","geoLocTags","allGeoLocTags","hidePrice","hidePriceButtonAction","showPreview","previewAction","showWishBtn","onClickWishBtn","fullHeight","showRating","sponsored","percentBadge","showDiscount","showDiscountOnlyCashInfo","showProductVariations","allowEmptyRating","containerWidth"]),{displayMode:Q,title:ee,price:te,image:ie,installment:le,badges:ae,rating:ne,variationId:oe,url:re,titleAs:se,loyalty:de,imageAltPrefix:ce,isOnWishlist:ue,imageWidth:me,imageHeight:he,attributes:ge,shippingCost:pe,shippingTag:fe,brand:ve,offerTags:xe}=J,[be,we]=(0,n.useState)(ue),{count:ye,score:Ee}=ne,Ce=null==xe?void 0:xe.includes("magalu_indica"),Ze=e=>{if(e){we(!be)}},[ke,Pe]=(0,o.YD)({triggerOnce:!0,threshold:.5,delay:1e3});(0,n.useEffect)((()=>{Pe&&r(Object.assign({index:u,geoLocTags:$},J))}),[Pe]);let $e=ce?`${ce}${J.title}`:J.title,Se=U[null==de?void 0:de.type];return n.createElement(v,{ref:ke,href:re,onClick:e=>i(e,Object.assign({},J,{index:u})),displayMode:Q,"data-testid":"product-card-container",hideLinkBorder:t,enableShadow:w,enableHover:P,fullHeight:j,containerWidth:q,index:u,"data-brand":null==ve?void 0:ve.slug},n.createElement(L,{displayMode:Q,sponsored:F,showWishBtn:R,isLiked:be,handleAddToWishlist:e=>{e.stopPropagation(),e.preventDefault(),O(e,be,Ze)},isMagaluIndica:Ce}),n.createElement(b,{displayMode:Q},Ce&&Q===h.IY&&n.createElement(p.Af,{autoSize:!0,padding:"2px 8px",bg:"primary",fontSize:1,endIcon:n.createElement(s.JO$,{name:"Check",fill:"#FFF",width:"16px",height:"16px"}),fontWeight:"medium",gridGap:1,borderRadius:6,width:"125px",mb:1},"magalu indica"),n.createElement(I.Z,{src:ie,alt:$e,width:me,height:he,title:ee,lazy:c,offset:g}),de&&n.createElement(y,{displayMode:Q},Se&&n.createElement(Se,(0,l.Z)({},de,{productUrl:d+re}))),Boolean(ae.length)&&ae.map((e=>n.createElement(m.Ct,{key:`${oe}-badge-${e.id}`,url:e.imageUrl,tooltip:e.tooltip,displayMode:Q,borderRadius:"medium"})))),D&&n.createElement(Z,{"data-testid":"button-preview-container"},n.createElement(k,{size:"small",m:"10px 0","data-testid":"button-preview",onClick:e=>{e.preventDefault(),M(J)}},"Conferir")),n.createElement(C,{displayMode:Q,"data-testid":"product-card-content"},F&&Q!==h.Co&&n.createElement(f,{place:"content"},"Patrocinado"),Q!==h.Co&&n.createElement(E,{as:se,"data-testid":"product-title"},ee),G({displayMode:Q,count:ye,score:Ee,allowEmptyRating:_,showRating:B}),n.createElement(T,{geoLocTags:$,displayMode:Q}),Y({hidePrice:z,displayMode:Q,installment:le,showInCashInfo:x,showDiscount:H,showDiscountOnlyCashInfo:V,price:te,hidePriceButtonAction:A,product:J}),n.createElement(m.lF,{displayMode:Q,costDescription:pe.costDescription,cost:pe.cost}),n.createElement(W,{allGeoLocTags:S,displayMode:Q}),Q!==h.Co&&n.createElement(N,{shippingTag:fe}),X({showProductVariations:K,attributes:ge})))};var ee=Q;Q.defaultProps={variationId:"",url:"",displayMode:h.IY,domain:h.RW,title:"",image:"",index:0,price:{},installment:{},geoLocTags:{},allGeoLocTags:[],rating:{},badges:[],brand:{},onClick:()=>{},onView:()=>{},imgLazyLoading:!1,fullHeight:!1,percentBadge:30,lazyLoadingOffset:50,showInCashInfo:!0,hideLinkBorder:!1,titleAs:"h2",enableShadow:!0,enableHover:!1,imageAltPrefix:"",hidePrice:!1,hidePriceButtonAction:null,showPreview:!1,previewAction:()=>{},isOnWishlist:!1,showWishBtn:!1,showProductVariations:!1,onClickWishBtn:()=>{},showRating:!0,sponsored:!1,showDiscount:!1,showDiscountOnlyCashInfo:!0,shippingCost:{},shippingTag:{},allowEmptyRating:!1}},4720:function(e,t,i){i.d(t,{Z:function(){return r}});var l=i(7896),a=i(2784),n=i(79957),o=i(56547);function r({products:e,displayMode:t,onClick:i,onProductView:r,onChange:s,gutter:d,showInCashInfo:c,slidesPerView:u,interval:m,auto:h,showPartialNextSlide:g,transitionDuration:p,productTitleAs:f,imageAltPrefix:v,imgLazyLoading:x,imageWidth:b,imageHeight:w,showControls:y,showArrowControls:E,showRating:C,enableHover:Z,showPreview:k,showDiscount:P,showDiscountOnlyCashInfo:$,previewAction:S}){let z=E&&u<=(null==e?void 0:e.length);return a.createElement(o.lr,{onChange:t=>{let i=Array(u).fill().map(((i,l)=>e[l+t]));s(i)},slidesPerView:u,gutter:d,auto:h,interval:m,showPartialNextSlide:g,transitionDuration:p,isProductCarousel:!0,showControls:y,showArrowControls:z},null==e?void 0:e.map(((e,o)=>a.createElement(n.Z,(0,l.Z)({},e,{displayMode:t,onClick:i,onView:r,showInCashInfo:c,titleAs:f,fullHeight:!0,imageAltPrefix:v,imgLazyLoading:x,imageWidth:b,imageHeight:w,showRating:C,key:`product-carousel-${e.variationId||e.id}-${o}`,enableHover:Z,showPreview:k,previewAction:S,showDiscount:P,showDiscountOnlyCashInfo:$})))))}r.defaultProps={displayMode:"gallery",onClick:()=>{},onProductView:()=>{},onChange:()=>{},showInCashInfo:!0,showPartialNextSlide:!0,auto:!0,slidesPerView:2,interval:5e3,transitionDuration:400,gutter:2,productTitleAs:"h2",imageAltPrefix:"",imgLazyLoading:!0,showControls:!0,showArrowControls:!1,showRating:!0,enableHover:!0,showPreview:!1,showDiscount:!1,showDiscountOnlyCashInfo:!1,previewAction:()=>{}}},98284:function(e,t,i){i.d(t,{Z:function(){return $}});var l=i(7896),a=i(31461),n=i(2784),o=i(79957),r=i(99673),s=i(34490),d=i(91489),c=i(68054),u=i(19527),m=i(84546),h=i(78012);let g=(0,r.ZP)(u.Z).attrs((e=>Object.assign({fontSize:[1,2,2,2],py:3,px:2,color:"text.scratched",borderRadius:"medium",bg:"transparent",textAlign:["center","left","left","left"],boxShadow:[4,"none","none","none"]},e)))`
  min-width: 280px;
  margin: 0 auto;
  border-radius: 4px;
  transition: width 0.2s ease;
  word-break: break-word;

  ${c.AF}
  ${d.$_}
  ${c.Dh}
  ${c.cp}
`,p=r.ZP.h1.attrs((e=>Object.assign({fontSize:[3,5,5,5],fontWeight:"regular"},e)))`
  text-align: center;
  color: ${e=>(0,d.uu)("base")(e)};
  line-height: normal;
  margin-bottom: 18px;
  span {
    color: ${e=>(0,d.ow)("primary.base")(e)};
    display: inline-flex;
    word-wrap: break-word;
    overflow: hidden;
    max-height: 2.4em;
    line-height: 1.2em;
  }

  ${(0,d.aK)("small")} {
    text-align: left;
  }

  ${c.cp}
`,f=r.ZP.span.attrs((()=>({mr:3})))`
  display: none;

  ${(0,d.aK)("small")} {
    display: block;
  }

  ${c.Dh}
`,v=(0,r.ZP)(s.olm).attrs((e=>Object.assign({width:60,height:60,color:"primary.base"},e)))`
  ${d.$_}
`,x=(0,r.ZP)(m.Z).attrs((e=>Object.assign({boxShadow:[4,4,"unset","unset"],borderRadius:"medium"},e)))`
  margin: 0;
  overflow: hidden;
  transition: width 0.2s ease;
`,b=(0,r.ZP)(h.Z).attrs((e=>Object.assign({gridGap:["2px","1px","1px"]},e)))`
  ${({displayMode:e})=>(({displayMode:e})=>({gallery:r.iv`
      grid-template-columns: 1fr 1fr;
      ${(0,d.aK)("small")} {
        grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
      }
    `,list:r.iv`
      grid-template-columns: 1fr;
    `,miniature:r.iv`
      grid-template-columns: 1fr 1fr 1fr;
      ${(0,d.aK)("small")} {
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
      }
    `}[e]))({displayMode:e})}
  ${c.eC}
`,w=(0,r.ZP)(b.Action).attrs((()=>({fontWeight:"regular",color:"background.primary",fill:"background.primary"})))`
  border-top: ${(0,d.R)("borders.0")};
`,y=r.ZP.li`
  list-style: none;
  ${(0,d.aK)("small")} {
    margin: ${e=>(0,d.R)("space.2")(e)}px 0px;
  }
  > * {
    min-height: 100%;
  }
`,E=({message:e,messageSecondary:t})=>n.createElement(g,{"data-testid":"product-list-empty"},n.createElement(f,null,n.createElement(v,null)),n.createElement("div",null,n.createElement(p,null,e),t||""));E.defaultProps={messageSecondary:"",message:""};var C=E,Z=i(66228),k=i(12468);let P=e=>{let{hidePriceButtonAction:t,lazyLoadingOffset:i,onClickLoadMore:r,imgLazyLoading:s,showInCashInfo:d,showDiscount:c,showDiscountOnlyCashInfo:u,imageAltPrefix:m,imageWidth:h,imageHeight:g,onClickWishBtn:p,previewAction:f,showFullListBtn:v,enableShadow:E,displayMode:P,enableHover:$,showPreview:S,showWishBtn:z,showMoreBtn:I,showProductVariations:A,hidePrice:D,notFound:M,onClick:L,onProductView:R,partial:O,titleAs:T,domain:j,jsonLD:W,allowEmptyRating:B,data:F,gridGap:H}=e,V=(0,a.Z)(e,["hidePriceButtonAction","lazyLoadingOffset","onClickLoadMore","imgLazyLoading","showInCashInfo","showDiscount","showDiscountOnlyCashInfo","imageAltPrefix","imageWidth","imageHeight","onClickWishBtn","previewAction","showFullListBtn","enableShadow","displayMode","enableHover","showPreview","showWishBtn","showMoreBtn","showProductVariations","hidePrice","notFound","onClick","onProductView","partial","titleAs","domain","jsonLD","allowEmptyRating","data","gridGap"]),N=(0,n.useRef)(null),[K,_]=(0,n.useState)(0),[G,q]=(0,n.useState)(Boolean(O));if(n.useEffect((()=>(null!=N&&N.current&&_(N.current.clientWidth),q(Boolean(O)),()=>q(!1))),[O]),M)return n.createElement(C,M);let J=null==F?void 0:F.map(((e,a)=>{var r;return n.createElement(y,{key:`product-item-${a}`},n.createElement(o.Z,(0,l.Z)({key:`product-${e.variationId||e.id}-${a}`,sponsored:null==e||null==(r=e.ads)?void 0:r.sponsored,hidePriceButtonAction:t,lazyLoadingOffset:i,imgLazyLoading:s,showInCashInfo:d,imageAltPrefix:m,imageWidth:h,imageHeight:g,enableShadow:E,displayMode:P,domain:j,enableHover:$,showPreview:S,showWishBtn:z,hidePrice:D,onClick:L,onView:R,titleAs:T,index:a,showProductVariations:A,showDiscount:c,showDiscountOnlyCashInfo:u,onClickWishBtn:(t,i,l)=>p(t,i,l,e),previewAction:()=>f(e),allowEmptyRating:B,containerWidth:K},e)))})),Y=v?{label:k.dz,props:k.Bl}:{label:k.K9,props:k.Uh};return n.createElement(x,(0,l.Z)({ref:N,"data-testid":"product-list"},V),n.createElement(b,(0,l.Z)({},O&&!v&&{collapse:!0,trigger:G,collapsedIn:O},{variant:"light",displayMode:P,gridGap:H,renderAction:(G||v||I)&&O<F.length&&n.createElement(w,(0,l.Z)({onClick:()=>{r(),q(!G)}},Y.props),Y.label)}),J),W&&F&&n.createElement(Z.ZP,{schema:F.filter((e=>{var t;return null==(t=e.price)?void 0:t.price})).map((e=>(0,Z.Iy)({product:e,isList:!0},j))),type:"ItemList"}))};P.defaultProps={hidePriceButtonAction:null,showFullListBtn:!1,displayMode:"gallery",domain:k.RW,lazyLoadingOffset:50,showInCashInfo:!0,imgLazyLoading:!0,showWishBtn:!1,showPreview:!1,showMoreBtn:!1,showProductVariations:!1,imageAltPrefix:"",hidePrice:!1,showDiscountOnlyCashInfo:!1,showDiscount:!1,titleAs:"h2",jsonLD:!0,partial:0,allowEmptyRating:!1,onClickLoadMore:()=>{},onClickWishBtn:()=>{},previewAction:()=>{},onClick:()=>{},onProductView:()=>{}};var $=P},79534:function(e,t,i){i.d(t,{Z:function(){return g}});var l=i(31461),a=i(2784),n=i(19476),o=i(56547),r=i(99673),s=i(91489),d=i(63825),c=i(84546);let u=(0,r.ZP)(c.Z)`
  padding-bottom: ${(0,s.R)("space.2")}px;
`;function m(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var l=i.call(e,t||"default");if("object"!=typeof l)return l;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function h({agreedError:e,agreedLabel:t,buttonLabel:i,onSubmit:r,ratingError:s,ratingLabel:d,recommendedError:c,recommendedLabel:h,reviewCharacteristics:g,minTextSize:p,textError:f,textLabel:v,textPlaceholder:x,titleError:b,titleLabel:w,titlePlaceholder:y,focus:E}){let[C,Z]=(0,a.useState)(!1),[k,P]=(0,a.useState)(""),[$,S]=(0,a.useState)(""),[z,I]=(0,a.useState)(""),[A,D]=(0,a.useState)(""),[M,L]=(0,a.useState)(g||[]),[R,O]=(0,a.useState)({}),T=Object.assign({rating:(0,a.useRef)(),title:(0,a.useRef)(),text:(0,a.useRef)(),recommended:(0,a.useRef)()},M.reduce(((e,{id:t})=>Object.assign({},e,{[t]:(0,a.useRef)()})),{}),{agreed:(0,a.useRef)()}),j=(0,a.useCallback)(((e,t,i=E)=>{O((a=>{let n=(0,l.Z)(a,[e].map(m)),o=Object.assign({},n,t),r=Object.keys(o);if(i&&r.includes(e)&&t){let{current:e}=T[r[0]];window.scroll({top:e.offsetTop-35,left:0,behavior:"smooth"})}return o}))}),[R]),W=(0,a.useCallback)(((e,t,i,l,a)=>{let n=e.length<i?{[t]:l}:void 0;return j(t,n,a),n}),[$,z,A,k,M,C]),B=(0,a.useCallback)(((e,t,i,l)=>{let a=e?void 0:{[t]:i};return j(t,a,l),a}),[$,z,A,k,M,C]),F=(0,a.useCallback)((()=>{S(""),I(""),D(""),P(""),Z(!1),L(g.map((e=>(0,l.Z)(e,["value"]))))}),[g]),H=(0,a.useCallback)((t=>{let i=Object.assign({},B($,"rating",s),B(z,"title",b),W(A,"text",p,f),B(k,"recommended",c),M.reduce(((e,t)=>Object.assign({},e,B(t.value,t.id,s))),{}),B(C,"agreed",e));Object.keys(i).length||r({rating:$,title:z,text:A,recommended:k,characteristics:M},F),t.preventDefault()}),[$,z,A,k,C,M]);return a.createElement(n.xu,{as:"form","data-testid":"review-form"},a.createElement(u,null,a.createElement(o.qr,{onChange:e=>{B(e.target.value,"rating",s,!1),S(e.target.value)},ref:T.rating,value:$,error:R.rating,type:"rating",label:d,height:[40,30],width:[40,30],gap:[0,30],fontSize:[4,2],fontWeight:["bold","regular"],flexDirection:["column","row"],alignItems:"center",textAlign:["center","right"]})),a.createElement(u,null,a.createElement(o.qr,{onChange:e=>I(e.target.value),onFocus:()=>O((e=>(0,l.Z)(e,["title"]))),onBlur:e=>B(e.target.value,"title",b,!1),ref:T.title,value:z,error:R.title,type:"text",label:w,placeholder:y,gap:[0,30],flexDirection:["column","row"],textAlign:["left","right"]})),a.createElement(u,null,a.createElement(o.qr,{onChange:e=>D(e.target.value),onFocus:()=>O((e=>(0,l.Z)(e,["text"]))),onBlur:e=>W(e.target.value,"text",50,f,!1),ref:T.text,value:A,error:R.text,type:"textarea",label:v,gap:[0,30],flexDirection:["column","row"],textAlign:["left","right"],placeholder:x})),a.createElement(u,{borderBottomWidth:["1px","0px"],borderBottomStyle:"solid",borderColor:"lightSilver"},a.createElement(o.qr,{onChange:e=>{B(e.target.value,"recommended",c,!1),P(e.target.value)},ref:T.recommended,value:k,error:R.recommended,type:"recommendation",label:h,gap:[0,30],flexDirection:["column","row"],alignItems:"center",textAlign:["center","right"]})),null==M?void 0:M.map((({id:e,label:t,value:i})=>a.createElement(u,{key:e,borderBottomWidth:["1px","0px"],borderBottomStyle:"solid",borderColor:"lightSilver"},a.createElement(o.qr,{onChange:t=>{B(t.target.value,e,s,!1),L(M.map((i=>i.id===e?Object.assign({},i,{value:t.target.value}):i)))},ref:T[e],value:i,error:R[e],label:t,type:"rating",height:[30,24],width:[30,24],gap:[0,30],flexDirection:["column","row"],alignItems:"center",textAlign:["center","right"]})))),a.createElement(n.kC,{m:20,flexDirection:["column","row"],gap:[0,30]},a.createElement(n.kC,{flex:"0.75"}),a.createElement(n.kC,{flex:"1",gap:"2",alignItems:["center","start"],justifyContent:"space-evenly",flexDirection:"column"},a.createElement(n.XZ,{ref:T.agreed,checked:C,onChange:t=>{B(t.target.checked,"agreed",e,!1),Z(t.target.checked)}},t),R.agreed&&a.createElement(n.xv,{color:"error.base"},R.agreed))),a.createElement(n.kC,{mY:20,flexDirection:["column","row"],gap:[0,30]},a.createElement(n.kC,{flex:"0.75"}),a.createElement(n.kC,{flex:"1",gap:"2",alignItems:["center","start"],justifyContent:"space-evenly",flexDirection:"column"},a.createElement(n.zx,{onClick:H,full:!0},i))))}(0,r.ZP)(d.Z)`
  text-decoration: underline;
  cursor: pointer;
`,h.defaultProps={agreedError:"Por favor verifique os termos.",agreedLabel:"Concordo com os termos e condições",buttonLabel:"Enviar avaliação",ratingError:"Clique nas estrelas para classificar!",ratingLabel:"Avaliação Geral",recommendedError:"Por favor selecione uma opção.",recommendedLabel:"Você recomenda esse produto?",minTextSize:50,textError:"Mínimo de 50 caracteres.",textLabel:"Avaliação",titleError:"Insira o título completo corretamente.",titleLabel:"Título da avaliação",titlePlaceholder:"Ex. Produto Maravilhoso",textPlaceholder:"Ex: Escreva exclusivamente sobre o produto. Para sugestões, reclamações ou problemas em geral, acesse nossa Central de Atendimento",focus:!0};var g=h},4506:function(e,t,i){i.d(t,{Z:function(){return x}});var l=i(2784),a=i(34490),n=i(99673),o=i(91489),r=i(19527),s=i(84546),d=i(63825);let c=(0,n.ZP)(r.Z)`
  display: flex;
  justify-content: center;
  align-items: center;
`,u=(0,n.ZP)(r.Z)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div {
    display: flex;
    align-items: center;
  }
`,m=(0,n.ZP)(d.Z)`
  font-weight: ${e=>(0,o.R)("fontWeights.bold")(e)};
  font-size: ${e=>(0,o.R)("fontSizes.7")(e)}px;
`,h=(0,n.ZP)(d.Z)`
  font-size: ${e=>(0,o.R)("fontSizes.0")(e)}px;
  color: ${e=>(0,o.uu)("light")(e)};
`,g=(0,n.ZP)(s.Z)`
  border-left: 3px solid ${e=>(0,o.kJ)("light")(e)};
  height: 90px;
  margin: 0px 24px;
`;var p=i(60861),f=i(56547);function v({average:e,count:t,distribution:i,actionLabel:n,onReviewButtonClick:o}){let r=t>1?`${t} avaliações`:`${t} avaliação`;return i.sort(((e,t)=>t.value-e.value)),l.createElement(l.Fragment,null,l.createElement(c,{mb:[3,3,3]},l.createElement(u,null,l.createElement("div",null,l.createElement(m,{"data-testid":"stat-score"},e.toFixed(1)),l.createElement(a.Uxw,{width:"50px",height:"50px",color:"#FFCC03"})),l.createElement(h,{"data-testid":"stat-desc"},r)),l.createElement(g,null),l.createElement("ul",null,null==i?void 0:i.map((e=>l.createElement(f.me,{key:e.value,id:e.value,score:e.count,count:e.count,max:t}))))),!!n&&l.createElement(p.Z,{full:!0,variation:"fill",size:"medium",color:"primary",onClick:l=>o(l,{average:e,distribution:i,desc:r,total:t})},n))}v.defaultProps={actionLabel:"Quero avaliar",average:0,count:0,distribution:[],onReviewButtonClick:()=>({})};var x=v},30143:function(e,t,i){i.d(t,{Z:function(){return D}});var l=i(7896),a=i(31461),n=i(2784),o=i(62452),r=i(19476),s=i(99673),d=i(91489),c=i(34490),u=i(63825);let m=(0,s.ZP)(u.Z)`
  color: ${e=>(0,d.uu)("scratched")(e)};
  font-size: ${e=>(0,d.R)("fontSizes.1")(e)}px;
  font-weight: ${e=>(0,d.R)("fontWeights.regular")(e)};
  margin-right: 4px;
  height: 20px;
`,h=s.ZP.label`
  color: ${e=>(0,d.uu)("base")(e)};
  font-size: ${e=>(0,d.R)("fontSizes.1")(e)}px;
  font-weight: ${e=>(0,d.R)("fontWeights.bold")(e)};
  text-decoration: ${({disableClick:e})=>e?"none":"underline"};
  cursor: ${({disableClick:e})=>e?"default":"pointer"};
`,g=s.ZP.a`
  cursor: pointer;

  svg {
    vertical-align: middle;
  }
`,p=(0,s.ZP)(c.ZGh).attrs((e=>({color:`${e.logoIconColor||(0,d.ow)("base")(e)}`,width:60,height:14,viewBox:"0 0 60 14"})))`
  vertical-align: middle;
  margin-top: 4px;
`,f=s.ZP.div`
  padding: 15px 15px;
`,v=(0,s.ZP)(u.Z)`
  font-size: ${e=>(0,d.R)("fontSizes.5")(e)}px;
  font-weight: ${e=>(0,d.R)("fontWeights.bold")(e)};
`,x=s.ZP.a`
  height: 20px;
  display: flex;
  align-items: center;
  margin: 28px 0;
  text-decoration: none;
  font-size: ${e=>(0,d.R)("fontSizes.1")(e)}px;
  font-weight: ${e=>(0,d.R)("fontWeights.medium")(e)};
  color: ${e=>(0,d.uu)("primary")(e)};
  cursor: pointer;
`,b=(0,s.ZP)(c._Qn).attrs((e=>({color:(0,d.uu)("primary")(e)})))`
  vertical-align: middle;
  width: 20px;
  height: 20px;
`,w=s.ZP.div`
  margin: 0 0 15px;
`,y=(0,s.ZP)(u.Z)`
  font-size: ${e=>(0,d.R)("fontSizes.3")(e)}px;
  font-weight: ${e=>(0,d.R)("fontWeights.bold")(e)};
  padding: 0 0 5px;
`,E=s.ZP.p`
  font-size: ${e=>(0,d.R)("fontSizes.2")(e)}px;
  color: ${e=>(0,d.uu)("greyish")(e)};
  padding: 0 0 5px;
`,C=e=>{let{id:t,delivery:i,handleLabelName:l}=e,o=(0,a.Z)(e,["id","delivery","handleLabelName"]);return i||t?i&&(null==t?void 0:t.toUpperCase())!==(null==i?void 0:i.toUpperCase())?n.createElement(r.xu,o,n.createElement(m,{"data-testid":"label"},"Vendido por ",l(t)),n.createElement(m,{"data-testid":"label"},"Entregue por ",l(i))):n.createElement(r.xu,o,n.createElement(m,{"data-testid":"label"},"Vendido e entregue por ",l(i))):null};C.defaultProps={id:"magazineluiza",delivery:"magazineluiza",handleLabelName:()=>{}};var Z=C;let k=e=>{let{address:t,number:i,district:l,city:a,state:n,zipcode:o}=e,r=[];return t&&i&&r.push(`${t}, ${i}`),a&&n&&r.push(`${l?`${l} - `:""}${a}/${n}`),o&&r.push(`CEP: ${o}`),r},P=({seller:e,onOffersClick:t})=>{let{id:i,description:l,deliveryId:a,details:o,href:r}=e,s=k((null==o?void 0:o.address)||{}),d=[(null==o?void 0:o.legalName)&&{label:"Razão Social",id:"legalName",value:null==o?void 0:o.legalName},(null==o?void 0:o.documentNumber)&&{label:"CNPJ",id:"documentNumber",value:null==o?void 0:o.documentNumber},s.length&&{label:"Endereço",id:"address",value:k(null==o?void 0:o.address)}];return n.createElement(f,null,n.createElement(v,null,l),n.createElement(x,{href:r,onClick:e=>t(e,{id:i,delivery:a}),"data-testid":"offers-link"},"Veja todas as ofertas dessa loja ",n.createElement(b,null)),d.map(((e,t)=>n.createElement(w,{key:`seller-detail-${t}`,"data-testid":"details"},n.createElement(y,null,null==e?void 0:e.label),Array.isArray(null==e?void 0:e.value)?null==e?void 0:e.value.map((e=>n.createElement(E,{"data-testid":"details-value",key:`seller-value-${e}`},e))):n.createElement(E,null,null==e?void 0:e.value)))))};P.defaultProps={seller:{id:"magazineluiza",deliveryId:"magazineluiza",description:"Magalu",details:{}},onOffersClick:()=>{}};var $=P,S={zattini:{id:"zattini",logo:c.fOR},netshoes:{id:"netshoes",logo:c.fOD},kabum:{id:"kabum",logo:c.M0M},"epocacosmeticos-integra":{id:"epoca",logo:c.uE5}},z=i(12468),I=i(83179);let A=e=>{let{showSellerDetailContent:t,onCloseModalContent:i,seller:s,onSellerClick:d,onOffersClick:c,disableSellerClick:u,disableSellerDetails:m,logoIconColor:f,showDialog:v,modal:x}=e,b=(0,a.Z)(e,["showSellerDetailContent","onCloseModalContent","seller","onSellerClick","onOffersClick","disableSellerClick","disableSellerDetails","logoIconColor","showDialog","modal"]),{id:w,description:y,deliveryId:E}=s,[C,k]=(0,n.useState)(t),P=e=>{d(e,{id:w,delivery:E}),k(!m)},A=()=>{k(!1),i()};n.useEffect((()=>{k(t)}),[t]);return n.createElement(n.Fragment,null,n.createElement(Z,(0,l.Z)({id:w,delivery:E,handleLabelName:e=>{if(e===z.ig)return n.createElement(p,{title:"Logo magalu","data-testid":"magalogo",logoIconColor:f});if(S[e]){let{id:t,logo:i}=S[e];return n.createElement(g,{title:`Logo ${t}`,"data-testid":`${t}logo`,children:n.createElement(i,{preserveAspectRatio:!0}),onClick:u?null:P})}return n.createElement(h,{onClick:u?null:P,disableClick:u,children:y||E,"data-testid":"link"})}},b)),!u&&!v&&n.createElement(o.YE,{direction:"right",visible:C,onClickOutside:A,fullScreen:!0,portal:!0},n.createElement(I.Z,{label:x.title||"Informações da loja parceira",align:"left",leftButton:{icon:"back",title:"Voltar para a pagina do produto",onClick:A}}),x.content||n.createElement($,{seller:s,onOffersClick:c})),!u&&!m&&v&&n.createElement(r.Vq,{visible:C,onClickOutside:A,position:"center",type:"responsive",showClose:!0,title:x.title,titleStyle:x.titleStyle},x.content||n.createElement($,{seller:s,onOffersClick:c})))};A.defaultProps={seller:{id:"magazineluiza",deliveryId:"magazineluiza",description:"Magalu"},onSellerClick:()=>{},onOffersClick:()=>{},disableSellerClick:!1,onCloseModalContent:()=>({}),showSellerDetailContent:!1,disableSellerDetails:!1,logoIconColor:"",showDialog:!1,modal:{title:""}};var D=A},2334:function(e,t,i){i.d(t,{Z:function(){return s}});var l=i(31461),a=i(2784),n=i(56547),o=i(19476);let r=e=>{let{items:t}=e,i=(0,l.Z)(e,["items"]);return a.createElement(o.xu,i,t.map(((e,t)=>a.createElement(o.xu,{key:`shipping-item-${t}`},!!t&&a.createElement(o.bo,null),a.createElement(n.KI,e)))))};r.defaultProps={items:[]};var s=r},34958:function(e,t,i){i.d(t,{Z:function(){return T}});var l=i(7896),a=i(31461),n=i(2784),o=i(99673),r=i(68054),s=i(91489),d=i(19527),c=i(63825),u=i(27439);let m=o.iv`
  color: ${e=>(0,s.uu)("base")(e)};
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  max-width: 97%;
`,h={miniature:o.iv`
    display: grid;
    padding: 8px 2px;
  `,list:o.iv`
    display: grid;
    grid-template-columns: 1fr 2fr;
    padding: 16px;
  `,gallery:o.iv``,none:o.iv`
    display: contents;
  `,button:o.iv`
    display: block;
    padding: 16px 16px 6px;
  `},g={miniature:o.iv`
    height: 20vw;
    justify-content: flex-end;
    & > span {
      display: block;
      width: 100%;
      height: 100%;
    }
  `,list:o.iv`
    justify-content: flex-start;
    padding-top: 4px;
    min-height: 25vw;
  `,gallery:o.iv`
    height: 32vw;
    justify-content: flex-end;
    & > span {
      display: block;
      width: 100%;
      height: 100%;
    }
  `},p=(0,o.ZP)(u.ZP)`
  background-color: ${e=>(0,s.ow)("background.lighter")(e)};
  padding: 0;
  ${({displayMode:e})=>e&&h[e]}
`,f=o.ZP.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-right: ${e=>(0,s.R)("space.2")(e)}px;
  ${({displayMode:e})=>e&&g[e]}
`,v=o.ZP.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  ${({highlight:e,highlightType:t,sponsored:i})=>e&&!t?o.iv`
          margin: ${(0,s.R)("space.0")}px ${(0,s.R)("space.2")}px;
        `:o.iv`
          margin-bottom: ${i?(0,s.R)("space.2"):(0,s.R)("space.3")}px;
        `};
`,x=(0,o.ZP)(c.Z).attrs((({highlight:e,fontSize:t})=>({fontSize:null!=t?t:[e?1:2,4,5],lineHeight:"display",fontWeight:"medium"})))`
  ${m}
  ${r.cp}

  & > span {
    font-weight: ${e=>(0,s.R)("fontWeights.bold")(e)};
  }
`,b=o.ZP.h2`
  ${m}
  height: 32px;
  line-height: ${e=>(0,s.R)("lineHeights.plus")(e)}px;
  font-size: ${e=>(0,s.R)("fontSizes.1")(e)}px;
  font-weight: ${e=>(0,s.R)("fontWeights.regular")(e)};
  margin: 0 0 4px 0;
`,w=o.ZP.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`,y=(0,o.ZP)(c.Z).attrs((()=>({fontSize:[1,4,5],lineHeight:"display",fontWeight:"regular"})))`
  ${m}
  ${r.cp}
`,E=o.ZP.div`
  display: grid;
`,C=o.ZP.div`
  box-shadow: ${({exhibition:e})=>"highlight"===e?"0 4px 10px 0 rgba(0, 0, 0, 0.11)":"unset"};
  border-radius: ${({exhibition:e})=>"highlight"===e&&"4px"};
  overflow: hidden;
  ${r.Dh}
  ${r.$_}
  ${r.bK}
  ${r.Cg}
`,Z=(0,o.ZP)(d.Z)`
  flex: 1;
  flex: 0 0 calc(100% / 4);
  border-right: ${(0,s.R)("borders.0")};
  border-width: 2px;
`,k=(0,o.ZP)(c.Z).attrs((()=>({fontSize:0,color:"light",marginTop:1})))``;var P=i(98284);let $=({title:e,titleAs:t,titleSize:i,highlightType:l,showSponsoredSubTitle:a})=>{let[o,r="",s=""]=e.split('"'),d=s.replace(", ","");return n.createElement(v,{highlight:r,highlightType:l,sponsored:a},l?n.createElement(x,{as:t,fontSize:i,"data-testid":"product-title-head"},o," ",n.createElement("span",null,r)," ",d):n.createElement(n.Fragment,null,n.createElement(x,{as:t,fontSize:i,highlight:r,"data-testid":"product-title-head"},o),!!r&&n.createElement(y,{as:t,fontSize:i,"data-testid":"text-highlight"},r),!!d&&n.createElement(x,{as:t,fontSize:i,"data-testid":"text-suffix"},d)),a&&n.createElement(k,{"data-testid":"sponsored-tag"},"Patrocinados"))};$.defaultProps={title:"",titleAs:"h2",highlightType:!1,showSponsoredSubTitle:!1};var S=$;var z=i(7029);var I=i(34490),A=i(19476);var D=i(4720),M=i(79957);let L=e=>{let{title:t,titleAs:i,titleSize:o,data:r,highlight:s,slidesPerView:c,showDiscount:u,showDiscountOnlyCashInfo:m,showSponsoredSubTitle:h}=e,g=(0,a.Z)(e,["title","titleAs","titleSize","data","highlight","slidesPerView","showDiscount","showDiscountOnlyCashInfo","showSponsoredSubTitle"]);return n.createElement(n.Fragment,null,n.createElement(S,{title:t,titleAs:i,titleSize:o,highlightType:!!s,showSponsoredSubTitle:h}),n.createElement(d.Z,null,s&&n.createElement(Z,{slidesPerView:c},n.createElement(M.Z,(0,l.Z)({},s,{displayMode:"gallery",showInCashInfo:!0,titleAs:"h3",fullHeight:!0,imageAltPrefix:"",imgLazyLoading:!0,imageWidth:g.imageWidth,imageHeight:g.imageHeight,showRating:!1,showDiscountOnlyCashInfo:m,showDiscount:u,key:`product-hightlight${s.variationId||s.id}`,enableHover:!0}))),n.createElement(D.Z,(0,l.Z)({products:r,slidesPerView:s?c-1:c,enableHover:!s,showDiscountOnlyCashInfo:m,showDiscount:u},g))))};L.defaultProps={slidesPerView:4};var R={rank:e=>{let{data:t,title:i,titleAs:o,titleSize:r,imageAltPrefix:s,productTitleAs:d,showDiscountOnlyCashInfo:c,showDiscount:u}=e,m=(0,a.Z)(e,["data","title","titleAs","titleSize","imageAltPrefix","productTitleAs","showDiscountOnlyCashInfo","showDiscount"]);return n.createElement(n.Fragment,null,n.createElement(S,{title:i,titleSize:r,titleAs:o}),n.createElement(P.Z,(0,l.Z)({data:t,displayMode:"list",enableShadow:!1,exhibition:"rank",imageAltPrefix:s,titleAs:d,showInCashInfo:!0,showDiscountOnlyCashInfo:c,showDiscount:u},m)))},list:e=>{let{data:t,title:i,titleAs:o,titleSize:r,imageAltPrefix:s,productTitleAs:d,showFullListBtn:c,showMoreBtn:u,onClickLoadMore:m,showDiscountOnlyCashInfo:h,showDiscount:g,showSponsoredSubTitle:p}=e,f=(0,a.Z)(e,["data","title","titleAs","titleSize","imageAltPrefix","productTitleAs","showFullListBtn","showMoreBtn","onClickLoadMore","showDiscountOnlyCashInfo","showDiscount","showSponsoredSubTitle"]);return n.createElement(n.Fragment,null,n.createElement(S,{title:i,titleSize:r,titleAs:o,showSponsoredSubTitle:p}),n.createElement(P.Z,(0,l.Z)({data:t,displayMode:"gallery",enableShadow:!1,exhibition:"list",imageAltPrefix:s,titleAs:d,showFullListBtn:c,showMoreBtn:u,onClickLoadMore:m,showInCashInfo:!0,showDiscount:g,showDiscountOnlyCashInfo:h},f)))},highlight:e=>{let{data:t,highlight:i,title:o,titleAs:r,titleSize:s,imageAltPrefix:d,productTitleAs:c,showDiscount:u,showDiscountOnlyCashInfo:m}=e,h=(0,a.Z)(e,["data","highlight","title","titleAs","titleSize","imageAltPrefix","productTitleAs","showDiscount","showDiscountOnlyCashInfo"]),g=d?`${d}${i.title}`:i.title;return n.createElement(n.Fragment,null,n.createElement(p,{as:"div",displayMode:"list","data-testid":"product-card-container",hideLinkBorder:!1},n.createElement(f,{displayMode:"list"},n.createElement(z.Z,{src:i.image,alt:g,lazy:!0,offset:2})),n.createElement(E,{displayMode:"gallery","data-testid":"product-card-content"},n.createElement(S,{title:o,titleAs:r,titleSize:s}))),n.createElement(P.Z,(0,l.Z)({data:t,displayMode:"gallery",enableShadow:!1,exhibition:"highlight",imageAltPrefix:d,titleAs:c,showInCashInfo:!0,showDiscountOnlyCashInfo:m,showDiscount:u},h)))},button:({data:e,button:t,title:i,titleAs:l,titleSize:a,imageAltPrefix:o,productTitleAs:r,onClick:s})=>{let[d]=e,c=o?`${o}${d.title}`:null==d?void 0:d.title;return n.createElement(p,{displayMode:"button","data-testid":"product-card-container",hideLinkBorder:!1,as:"div"},n.createElement(S,{title:i,titleAs:l,titleSize:a}),n.createElement(w,null,n.createElement(f,{displayMode:"list"},n.createElement(z.Z,{src:null==d?void 0:d.image,alt:c,lazy:!0,offset:2})),n.createElement(E,{displayMode:"none","data-testid":"product-card-content"},n.createElement(v,{as:r},n.createElement(b,null,null==d?void 0:d.title)))),n.createElement(A.zx,{"data-testid":"showcase-button",onClick:e=>s(e,d),color:"secondary",startIcon:n.createElement(I.tuM,{width:32,height:32}),m:"10px 0",full:!0},(null==t?void 0:t.label)||"RETOMAR SUA COMPRA"))},carousel:L};let O=e=>{let{data:t,onClick:i,onProductView:o,jsonLD:r,exhibition:s,titleAs:d,titleSize:c,imageAltPrefix:u,productTitleAs:m,showFullListBtn:h,showMoreBtn:g,onClickLoadMore:p,showInCashInfo:f,showDiscount:v,showDiscountOnlyCashInfo:x,showSponsoredSubTitle:b}=e,w=(0,a.Z)(e,["data","onClick","onProductView","jsonLD","exhibition","titleAs","titleSize","imageAltPrefix","productTitleAs","showFullListBtn","showMoreBtn","onClickLoadMore","showInCashInfo","showDiscount","showDiscountOnlyCashInfo","showSponsoredSubTitle"]),y=void 0===R[s]?R.rank:R[s];return n.createElement(C,(0,l.Z)({exhibition:s},w),n.createElement(y,(0,l.Z)({data:t.products,title:t.title,highlight:t.highlight,button:t.button,onClick:i,onProductView:o,jsonLD:r,titleAs:d,titleSize:c,productTitleAs:m,imageAltPrefix:u,showFullListBtn:h,showMoreBtn:g,onClickLoadMore:p,showInCashInfo:f,showDiscount:v,showDiscountOnlyCashInfo:x,showSponsoredSubTitle:b},w)))};O.defaultProps={data:{title:null,products:[]},onClick:()=>!1,onProductView:()=>{},exhibition:"rank",jsonLD:!0,titleAs:"h2",productTitleAs:"h3",imageAltPrefix:"",showFullListBtn:!1,showMoreBtn:!1,showInCashInfo:!0,showDiscount:!1,showDiscountOnlyCashInfo:!1,showSponsoredSubTitle:!1};var T=O},83179:function(e,t,i){i.d(t,{Z:function(){return v}});var l=i(7896),a=i(31461),n=i(2784),o=i(34490),r=i(99673),s=i(91489),d=i(68054),c=i(63825);let u={left:r.iv`
    grid-template-columns: auto repeat(1, auto) 1fr;
  `,right:r.iv`
    grid-template-columns: 1fr repeat(1, auto) auto;
  `,default:r.iv`
    grid-template-columns: 1fr repeat(1, auto) 1fr;
  `},m=(0,r.ZP)(c.Z)`
  align-self: center;
  font-weight: 500;
`,h=r.ZP.div`
  margin-right: auto;
`,g=r.ZP.div`
  display: grid;
  ${e=>u[null==e?void 0:e.align]||u.default}
  gap: 0 10px;
  padding: 20px 16px;
  border-bottom: 1px solid ${e=>(0,s.dF)("darker")(e)};
  ${d.Dh}
  ${d.$_}
  ${d.bK}
  ${d.Cg}
  ${d.J4}
  ${d.$u}
`,p={close:o.x8P,back:o.xhZ},f=e=>{let{label:t,align:i,fontSize:o,leftButton:r,showCloseButton:s}=e,d=(0,a.Z)(e,["label","align","fontSize","leftButton","showCloseButton"]),{icon:c,title:u,onClick:f,iconColor:v="#8c8c8c"}=r,x=p[c||"close"];return n.createElement(g,(0,l.Z)({},d,{align:i,"data-testid":"sidebar-header"}),n.createElement(h,null,s&&n.createElement(x,{color:v,role:"button",title:u,"data-testid":`${c}-button`,onClick:f})),n.createElement(m,(0,l.Z)({fontSize:o},d,{"data-testid":"title"}),t))};f.defaultProps={align:"center",fontSize:1,leftButton:{icon:"close",onClick:()=>{}},showCloseButton:!0};var v=f},70615:function(e,t,i){i.d(t,{$:function(){return x.Z},Z:function(){return C}});var l=i(7896),a=i(31461),n=i(2784),o=i(39879),r=i(99673),s=i(68054),d=i(91489),c=i(81572),u=i(84546);let m={left:r.iv`
    left: 0;
    transform: ${({visible:e})=>e?"translateX(0)":"translateX(-100%)"};
  `,right:r.iv`
    right: 0;
    transform: ${({visible:e})=>e?"translateX(0)":"translateX(100%)"};
  `},h=r.ZP.aside`
  z-index: ${e=>(0,d.R)("zIndices.2")(e)};
  visibility: ${({visible:e})=>e?"visible":"hidden"};
`,g=(0,r.ZP)(c.Z).attrs((e=>({borderBottom:`1px solid ${(0,d.dF)("darker")(e)}`})))``,p=(0,r.ZP)(u.Z).attrs((e=>{let{fullScreen:t}=e,i=(0,a.Z)(e,["visible","fullScreen"]);return{backgroundColor:(0,d.dF)((null==i?void 0:i.bg)||"lighter")(i),zIndex:(0,d.R)("zIndices.3")(i),width:t?"100%":"80%",overflowX:"hidden",position:"fixed",overflowY:"auto",textAlign:"left",display:"block",height:"100vh",top:0}}))`
  ${s.$_}

  ${({direction:e})=>m[e]||m.right}
  visibility: ${({visible:e})=>e?"visible":"hidden"};
  transition: ${({timeTransition:e})=>`transform ${e}s ease-in-out`};

  /* mobile native toolbar */
  padding-bottom: 54px;
`,f=(0,r.ZP)(u.Z).attrs((e=>{let{visible:t}=e,i=(0,a.Z)(e,["visible"]);return{backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:(0,d.R)("zIndices.2")(i),opacity:Number(t),position:"fixed",bottom:0,right:0,left:0,top:0}}))`
  visibility: ${({visible:e})=>e?"visible":"hidden"};
  transition: visibility 0s, opacity 0.3s linear;
`;var v=i(75851),x=i(83179),b=i(34490);let w=e=>{let{children:t,variant:i,startIcon:o,fontSize:r,fontWeight:s,textAlign:d,ariaLabel:c,fill:u,onClick:m}=e,h=(0,a.Z)(e,["children","variant","startIcon","fontSize","fontWeight","textAlign","ariaLabel","fill","onClick"]);return n.createElement(g,(0,l.Z)({variant:i,scale:"large",startIcon:o&&n.createElement(b.JO$,{name:o,"aria-label":c,fill:u,onClick:m,"data-testid":"sidebar-header-icon"}),textAlign:d,fontSize:r,fontWeight:s,"data-testid":"sidebar-header"},h),t)};w.defaultProps={children:null,variant:"transparent",startIcon:"ArrowBack",fontSize:1,fontWeight:"medium",textAlign:"center",ariaLabel:"fechar sidebar",fill:"currentColor",onClick:()=>{}};let y=e=>{let{portal:t=!1}=e,i=(0,a.Z)(e,["portal"]),l=n.createElement(E,i);return t?(e=>n.createElement(v.Z,{id:"portal-sidebar"},e))(l):l},E=e=>{let{children:t,visible:i,direction:r,timeTransition:s,onClickOutside:d,headerTitle:c,fullScreen:u}=e,m=(0,a.Z)(e,["children","visible","direction","timeTransition","onClickOutside","headerTitle","fullScreen"]),g=(0,n.useRef)(null);return(0,n.useEffect)((()=>{var e;let t=window.getComputedStyle(document.body).overflow;return document.body.style.overflow=i?"hidden":t,null!=g&&null!=(e=g.current)&&e.scrollTop&&(g.current.scrollTop=0),()=>{document.body.style.overflow=t}}),[i]),(0,n.useEffect)((()=>{(0,o.Iq)()}),[t]),n.createElement(h,{visible:i,"data-testid":"sidebar"},n.createElement(p,(0,l.Z)({forwardRef:g,visible:i,direction:r,timeTransition:s,fullScreen:u,"data-testid":"content"},m),c&&n.createElement(x.Z,{label:c,leftButton:{onClick:d}}),t),n.createElement(f,{"aria-hidden":"true",visible:i,onClick:d,"data-testid":"overlay"}))};E.defaultProps={direction:"left",timeTransition:.3,headerTitle:null,fullScreen:!1,visible:!1,onClickOutside:()=>{}},y.Header=w;var C=y},35306:function(e,t,i){i.d(t,{Z:function(){return b}});var l=i(7896),a=i(31461),n=i(2784),o=i(56547),r=i(19476),s=i(99673),d=i(91489);let c={default:s.iv`
    flex-direction: column;
    word-break: break-word;
    min-width: 280px;
  `,flex:s.iv`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: space-between;
    ${(0,d.aK)("small")} {
      justify-content: left;
    }
  `,inline:s.iv`
    display: inline;
    font-size: inherit;
    line-height: normal;
  `},u={flex:s.iv`
    display: inline-block;
    padding: ${(0,d.R)("space.3")}px ${(0,d.R)("space.2")}px;
    ${(0,d.aK)("small")} {
      width: 150px;
      padding: unset;
    }
  `,inline:s.iv`
    display: inline-block;
    margin-right: ${(0,d.R)("space.4")}px;
    font-size: inherit;
    & a {
      display: inline-block;
      font-size: inherit;
      line-height: normal;
    }
  `},m={default:s.iv`
    color: ${e=>(0,d.uu)("base")(e)};
    padding-bottom: ${(0,d.R)("space.3")}px;
    line-height: normal;
  `,inline:s.iv`
    display: inline-block;
    margin-right: ${(0,d.R)("space.3")}px;
    font-size: inherit;
  `},h=(0,s.ZP)(r.xu).attrs((e=>Object.assign({p:3,textAlign:"left",borderRadius:"default"},e)))``,g=(0,s.ZP)(r.X6)`
  ${e=>m[e.variation]||m.default};
`,p=(0,s.ZP)(r.bo)`
  ${(0,d.aK)("small")} {
    display: none;
  }
`,f=s.ZP.ul`
  list-style-position: inside;
  display: flex;
  justify-content: space-around;
  ${e=>c[e.variation]||c.default};
`,v=(0,s.ZP)(r.xv).attrs((()=>({forwardedAs:"li",fontSize:2,color:"scratched",lineHeight:"big"})))`
  list-style-type: ${({hideListPoint:e})=>e?"none":"disc"};
  ${e=>u[e.variation]||u.default};
`,x=e=>{let{hideListPoint:t,limitListItems:i,list:s,handleClickLink:d,showAllItems:c,showMoreLabel:u,title:m,titleAs:x,typeList:b}=e,w=(0,a.Z)(e,["hideListPoint","limitListItems","list","handleClickLink","showAllItems","showMoreLabel","title","titleAs","typeList"]),[y,E]=(0,n.useState)(c),[C,Z]=(0,n.useState)(s.slice(0,i));return n.createElement(h,(0,l.Z)({"data-testid":"text-list-container"},w,{variation:b}),m&&n.createElement(n.Fragment,null,n.createElement(g,{"data-testid":"text-list-title",as:x,variation:b},m),"inline"!==b&&n.createElement(p,{variation:b})),n.createElement(f,{"data-testid":"text-list-ul",variation:b},C.map(((e,l)=>n.createElement(v,{variation:b,hide:!y&&l>=i,key:l,"data-testid":"text-list-text",hideListPoint:t},n.createElement(o.g0,{data:e,handleClickLink:d}))))),!y&&C.length>=i&&n.createElement(n.Fragment,null,n.createElement(p,null),n.createElement(r.ck,{fontWeight:"medium",fontSize:1,color:"text.primary",fill:"text.primary",startIcon:"ChevronDownCircle",variant:"transparent",gap:1,centered:!0,onClick:()=>{E(!0),Z(s)},"data-testid":"term-list-more"},u)))};x.defaultProps={hideListPoint:!1,limitListItems:20,list:[],handleClickLink:()=>{},showAllItems:!0,showMoreLabel:"veja mais",title:null,titleAs:"h1",typeList:"default"};var b=x},41323:function(e,t,i){i.d(t,{Z:function(){return g}});var l=i(7896),a=i(31461),n=i(2784),o=i(1587),r=i(99673),s=i(91489),d=i(34490),c=i(19527);let u=(0,r.ZP)(c.Z).attrs((()=>({alignItems:"center",justifyContent:"space-between",backgroundColor:"background.primaryDark",padding:1})))``,m=(0,r.ZP)(d._Qn).attrs((e=>({color:(0,s.uu)("lightest")(e)})))``,h=e=>{let{text:t,defaultText:i,zipcode:r,state:s,city:d,onClick:c}=e,h=(0,a.Z)(e,["text","defaultText","zipcode","state","city","onClick"]);return n.createElement(u,(0,l.Z)({onClick:c,"data-testid":"container"},h),n.createElement(o.Z,{city:d,defaultText:i,state:s,text:t,zipcode:r,iconHeight:18,iconWidth:20}),n.createElement(m,null))};h.defaultProps={zipcode:void 0,state:void 0,city:void 0};var g=h},62452:function(e,t,i){i.d(t,{G4:function(){return S},jm:function(){return k},aw:function(){return L},pZ:function(){return D},f4:function(){return q},DH:function(){return K},KU:function(){return _.Z},Ak:function(){return ge},Ym:function(){return ae},fP:function(){return pe.Z},u0:function(){return fe.Z},YE:function(){return h.Z}}),i(5530),i(92877),i(36103);var l=i(31461),a=i(2784),n=i(34490),o=i(93837),r=i(68054),s=i(99673),d=i(91489),c=i(19527),u=i(8341),m=i(63825);s.ZP.section`
  padding: 12px;
  border: solid 1px ${e=>(0,d.dF)("whisper")(e)};
  border-radius: 4px;
  ${r.Dh}
`,(0,s.ZP)(c.Z)`
  justify-content: space-between;
`,(0,s.ZP)(m.Z)`
  font-weight: ${e=>(0,d.R)("fontWeights.medium")(e)};
  cursor: pointer;
  text-decoration: underline;
`,(0,s.ZP)(m.Z)`
  font-size: ${e=>(0,d.R)("fontSizes.0")(e)}px;
  line-height: ${e=>(0,d.R)("lineHeights.input")(e)}em;
`,(0,s.ZP)(u.Z)`
  padding: 12px;
  border-bottom: 1px solid ${e=>(0,d.dF)("darker")(e)};
  align-items: center;
  grid-template-columns: auto 1fr;
  grid-gap: 1em;
  margin-bottom: 20px;
`,(0,s.ZP)(m.Z)`
  font-size: ${e=>(0,d.R)("fontSizes.2")(e)}px;
`;i(563);var h=i(70615);i(28426),i(63486);var g=i(7896),p=i(1729),f=i(99554),v=i(84546);let x=(0,s.ZP)(v.Z)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${e=>(0,d.dF)("lighter")(e)};
  border-bottom: 1px solid ${e=>(0,d.dF)("darker")(e)};
  border-top: 1px solid ${e=>(0,d.dF)("darker")(e)};
  padding: 14px 16px;
`,b=s.ZP.div``,w=(0,s.ZP)(m.Z)``,y=(0,s.ZP)(m.Z)`
  margin: 4px 0;
  color: ${e=>(0,d.uu)("scratched")(e)};
`,E=s.ZP.div`
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 20px 16px;
  border-bottom: 1px solid ${e=>(0,d.dF)("darker")(e)};
  margin-bottom: 0.5em;
`,C=s.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,Z=e=>{let{onClick:t,label:i,position:o,filterSelected:r,fullScreen:s,showFilterInput:d,onChangeFilterInput:c,onClearInput:u,children:m}=e,p=(0,l.Z)(e,["onClick","label","position","filterSelected","fullScreen","showFilterInput","onChangeFilterInput","onClearInput","children"]),[v,Z]=(0,a.useState)(!1);return a.createElement(a.Fragment,null,a.createElement(x,(0,g.Z)({},p,{onClick:()=>{Z(!0),t({label:i,position:o})},"data-testid":"filter-item-container"}),a.createElement(b,null,a.createElement(w,{fontSize:1,"data-testid":"filter-item-container"},i),r&&a.createElement(y,{as:"string"!=typeof r?"div":"p",fontSize:0,"data-testid":"filter-item-selected"},r)),a.createElement(b,null,a.createElement(n.olP,{width:"12px",height:"12px"}))),a.createElement(b,null,a.createElement(h.Z,{direction:"right",visible:v,onClickOutside:()=>Z(!1),fullScreen:s},a.createElement(b,null,a.createElement(E,null,a.createElement(b,null,a.createElement(n.xhZ,{color:"#8c8c8c","data-testid":"close-filter-detail",role:"button",title:"Fechar filtro",onClick:()=>Z(!1)})),a.createElement(C,null,a.createElement(w,{fontSize:1,textAlign:"center",fontWeight:"500"},i))),a.createElement("div",null,d&&a.createElement(f.Z,{m:"20px",onChange:c,onClearInput:u,label:i})),m))))};Z.defaultProps={filterSelected:"",onClick:()=>({}),fullScreen:!1};var k=Z,P=i(41869);let $=e=>{let{fullScreen:t,label:i,position:n,filterSelected:o,items:r,showFilterInput:s,onItemClick:d}=e,c=(0,l.Z)(e,["fullScreen","label","position","filterSelected","items","showFilterInput","onItemClick"]),[u,m]=(0,a.useState)((0,P.Z)(r));(0,a.useEffect)((()=>(m((0,P.Z)(r)),()=>m([]))),[r]);return a.createElement(k,(0,g.Z)({},c,{label:i,position:n,fullScreen:t,onChangeFilterInput:e=>{m((0,P.Z)(((e="",t=[])=>t.filter((t=>{var i,l;return null==(i=t.label)||null==(l=i.toUpperCase())?void 0:l.includes(e.toUpperCase())})))(e.target.value,r)))},onClearInput:()=>{m(r)},filterSelected:o,showFilterInput:s}),a.createElement("ul",null,u.map(((e,t)=>a.createElement(p.Z,{item:e,key:(null==e?void 0:e.slug)||t,onClick:d})))))};$.defaultProps={label:"",filterSelected:"",items:[],showFilterInput:!1,onItemClick:()=>({})};var S=$,z=i(56547),I=i(82260);let A=e=>{let{fullScreen:t,label:i,position:n,filterSelected:o,items:r,onItemClick:s}=e,d=(0,l.Z)(e,["fullScreen","label","position","filterSelected","items","showFilterInput","onItemClick"]),[c,u]=(0,a.useState)((0,I.Z)(r));return(0,a.useEffect)((()=>(u(r),()=>u({}))),[r]),a.createElement(k,(0,g.Z)({position:n,label:i,fullScreen:t,filterSelected:o&&Object.keys(o).length?a.createElement(z.Cq,{min:0,max:5,score:null==o?void 0:o.value,label:null==o?void 0:o.hint,format:"label",fontSize:"14px",width:"20px",height:"20px"}):void 0},d),c.map(((e,t)=>a.createElement("ul",{key:(null==e?void 0:e.slug)||t},a.createElement(z.L2,{onClick:s,item:e},a.createElement(z.Cq,{min:0,max:5,score:null==e?void 0:e.value,label:null==e?void 0:e.hint,format:"label",fontSize:"14px",width:"20px",height:"20px","data-testid":"review-item"}))))))};A.defaultProps={filterSelected:[],items:[],showFilterInput:!1,onItemClick:()=>{},onClick:()=>{}};var D=A;let M=e=>{let{fullScreen:t,label:i,position:n,onApply:r,min:s,max:d,selectedMin:c,selectedMax:u,item:m}=e,h=(0,l.Z)(e,["fullScreen","label","position","onApply","min","max","selectedMin","selectedMax","item"]);return a.createElement(k,(0,g.Z)({id:"filter-item-price-container",position:n,label:i,fullScreen:t,filterSelected:c||u?`${(0,o.Z)({value:c})} - ${(0,o.Z)({value:u})}`:void 0},h),a.createElement(z.MS,{min:s,max:d,initialMin:c,initialMax:u,onApply:r,item:m}))};M.defaultProps={onApply:()=>{},onClick:()=>{},item:{}};var L=M;i(75057);var R=i(64586),O=i(10200);let T=s.ZP.nav.attrs((e=>Object.assign({bg:"background.primary"},e)))`
  text-align: left;

  ${d.$_}
`,j=s.ZP.ul.attrs((e=>Object.assign({my:0,pl:0},e)))`
  display: flex;
  align-items: center;
  line-height: 45px;
  list-style: none;
  white-space: nowrap;
  justify-content: space-between;

  ${r.Dh}
`,W=(0,s.ZP)(O.Z).attrs((e=>Object.assign({color:"text.white",px:"10px",underlineOnHover:!1},e)))`
  ${d.$_}
`,B=s.ZP.div`
  position: absolute;
  background-color: ${e=>(0,d.dF)("white")(e)};
  z-index: ${e=>(0,d.R)("zIndices.4")(e)};
  ${e=>"display: "+(e.show?"block":"none")};
  ${r.FK}
  ${d.$_}
  ${r.Dh}
`,F=s.ZP.li`
  display: inline-block;
  position: relative;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  z-index: ${e=>e.selected&&(0,d.R)("zIndices.1")(e)};
  background-color: ${e=>e.selected&&(0,d.dF)("white")(e)};

  &:hover {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;

    & path {
      fill: ${e=>e.colorOnHover?e.colorOnHover:(0,d.uu)("base")(e)};
    }
  }
  &:hover > div > a {
    color: ${e=>e.colorOnHover?e.colorOnHover:(0,d.uu)("base")(e)};
  }
`,H=s.ZP.div`
  background: rgba(0, 0, 0, 0.6);
  animation: ${R.Ji} 0.2s linear;

  position: fixed;
  z-index: ${e=>(0,d.R)("zIndices.0")(e)};
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  ${e=>e.show?s.iv`
          display: block;
        `:s.iv`
          display: none;
        `};
`;var V=i(48919);let N=e=>{let{data:t,enableHoverDelay:i}=e,o=(0,l.Z)(e,["data","enableHoverDelay"]),{categoryList:r,specialLinks:s,externalLinks:d,allCategories:u}=t,{orderBy:m=[],list:h=[],show:g}=r,p=(0,R.IC)(h,m).slice(0,g||m.length),f=(0,a.useRef)(null),v={},x={},[b,w]=(0,a.useState)(0),[y,E]=(0,a.useState)(null),[C,Z]=(0,a.useState)(null);(0,R.O)(v,f,"inline-block");let k=(e={},t)=>a.createElement(B,{marginLeft:b,show:y===t,"data-testid":"nav-submenu",ref:x[t]},a.createElement(V.Z,{data:e,onMenuItemClick:o.onMenuItemClick})),P=e=>{let t=x[e].current;t.style.visibility="hidden",t.style.display="block";let i=t.clientWidth,l=v[e].current.offsetLeft+i-(f.current.offsetWidth+f.current.offsetLeft);w(l>=0?-l:0),t.style.display=null,t.style.visibility=null},$=({menuType:e,index:t,menu:l,icon:o,chevronDown:r=!1})=>{let{color:s,label:d,url:u}=l,m=`${e}-item-${t}`;v[m]=(0,a.useRef)(null),x[m]=(0,a.useRef)(null);return(0,a.useEffect)((()=>()=>clearTimeout(C)),[]),a.createElement(F,{selected:y===m,"data-testid":"link-menu-item",key:m,colorOnHover:s,onMouseEnter:e=>{e.stopPropagation(),i?Z(setTimeout((async()=>{await P(m),E(m)}),300)):E(m)},onMouseLeave:()=>{x[m].current.style.display="none",E(null),i?clearTimeout(C):P(m)},ref:v[m]},a.createElement(c.Z,{mx:"2px",justifyContent:"center",alignItems:"center"},o&&a.createElement(n.JO$,{name:o,"data-testid":`link-icon-${t}`,color:"text.lightest"}),a.createElement(W,{href:u},d),r&&a.createElement(n.JO$,{name:"ChevronDown",color:"text.lightest"})),k(l,m))};return a.createElement(T,{"data-testid":"links-menu",ref:f},a.createElement(j,null,$({menuType:"main",index:0,icon:"Burger",menu:u,chevronDown:!0}),s.map(((e,t)=>$({menuType:"special",index:t,menu:e}))),p.map(((e,t)=>$({menuType:"category",index:t,menu:e}))),d.map(((e,t)=>$({menuType:"external",index:t,menu:e,icon:e.id})))),a.createElement(H,{"data-testid":"menu-overlay",show:y}))};N.defaultProps={data:{categoryList:{},specialLinks:[],externalLinks:[],allCategories:{}},enableHoverDelay:!0};var K=N,_=i(99075);i(60857),i(79957),i(4720),i(98284);let G=({data:e,onClick:t,isMobile:i})=>{let{links:l,title:n}=e;return(null==l?void 0:l.length)>=1&&n?a.createElement(c.Z,{"data-testid":"header-links-list",alignItems:"center",justifyContent:"flex-start",pt:2,width:"auto",height:25,columnGap:2,pl:0,bg:"background.primary",overflow:i?"scroll":"hidden",p:i?"2":"0"},a.createElement(m.Z,{fontSize:1,color:"#ffffff"},`${n}:`),null==l?void 0:l.map(((e,i)=>{let n=l.length===i+1?"":" |";return a.createElement(O.Z,{"data-testid":"header-link-container",key:e.value,href:e.href,onClick:i=>t(i,e),hover:!1},a.createElement(m.Z,{"data-testid":"header-link",flex:"none",fontSize:1,color:"#ffffff"},`${e.value}${n}`))}))):null};G.defaultProps={data:{links:[],title:""},onClick:()=>{},isMobile:!1};var q=G,J=i(41544),Y=i(19476);let U=s.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > ul {
    width: 100%;
    margin-top: 20px;
  }

  ${(0,d.aK)("large")} {
    flex-direction: row;
    width: 100%;

    > ul {
      width: ${({showScoreDesc:e})=>e?"50%":"100%"};
    }
  }
`,X=s.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${(0,d.aK)("large")} {
    flex-direction: column-reverse;
    flex: 1;
  }
`,Q=s.ZP.div`
  margin-left: 8px;

  > div {
    margin-left: -4px;
  }
`,ee=s.ZP.li`
  display: grid;
  grid-template-columns: 2fr 2fr auto;
  align-items: center;
  grid-gap: 8px;

  & > p:first-child {
    font-size: ${(0,d.R)("fontSizes.1")}px;
    line-height: ${(0,d.R)("lineHeights.display")};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & > p:last-child {
    font-weight: ${e=>(0,d.R)("fontWeights.bold")(e)};
  }

  ${(0,d.aK)("large")} {
    grid-template-columns: 1fr 2fr auto;
  }
`,te=(0,s.ZP)(m.Z)`
  font-weight: ${e=>(0,d.R)("fontWeights.medium")(e)};
  font-size: ${e=>(0,d.R)("fontSizes.7")(e)}px;

  & > span {
    display: none;
  }

  ${(0,d.aK)("large")} {
    line-height: ${e=>(0,d.R)("lineHeights.fontSize")(e)};

    & > span {
      display: inline-block;
    }
  }
`,ie=(0,s.ZP)(m.Z)`
  font-size: ${e=>(0,d.R)("fontSizes.1")(e)}px;
  color: ${e=>(0,d.uu)("light")(e)};

  ${(0,d.aK)("large")} {
    margin-top: ${e=>(0,d.R)("space.3")(e)}px;
  }
`;function le({average:e,count:t,characteristics:i,showScoreDesc:l}){let n=t>1?`${t} avaliações`:`${t} avaliação`;return a.createElement(U,{showScoreDesc:l},l&&a.createElement(X,null,a.createElement(te,{"data-testid":"stat-score"},a.createElement("span",null,"Nota:"),` ${e.toFixed(1)}`),a.createElement(Q,null,a.createElement(z.Cq,{score:e,width:"20px",height:"20px"}),a.createElement(ie,{"data-testid":"stat-desc"},n))),a.createElement("ul",null,null==i?void 0:i.map((e=>a.createElement(ee,{key:e.label},a.createElement(m.Z,null,e.label),a.createElement(Y.uk,{height:"8px",color:"#0086ff",value:e.value,max:5}),a.createElement(m.Z,null,e.value.toFixed(1)))))))}le.defaultProps={average:0,count:0,characteristics:[],showScoreDesc:!0};var ae=le;let ne=s.ZP.div`
  ${(0,d.aK)("large")} {
    display: flex;
  }
`,oe=(0,s.ZP)(m.Z)`
  margin-top: 4px;
  font-size: ${e=>(0,d.R)("fontSizes.1")(e)}px;
  font-weight: ${e=>(0,d.R)(e.bold?"fontWeights.medium":"fontWeights.regular")(e)};
  color: ${e=>(0,d.uu)("base")(e)};

  > span {
    color: ${e=>(0,d.uu)("lighter")(e)};
  }
`,re=(0,s.ZP)(m.Z)`
  margin-top: 12px;
  font-size: ${e=>(0,d.R)("fontSizes.5")(e)}px;
  font-weight: ${e=>(0,d.R)("fontWeights.medium")(e)};
  color: ${e=>(0,d.uu)("base")(e)};
  line-height: ${e=>(0,d.R)("lineHeights.display")(e)};
`,se=(0,s.ZP)(m.Z)`
  margin: 12px 0;
  font-size: ${e=>(0,d.R)("fontSizes.1")(e)}px;
  color: ${e=>(0,d.uu)("scratched")(e)};
  line-height: ${e=>(0,d.R)("lineHeights.plus")(e)}px;
  text-align: justify;
`,de=(0,s.ZP)(v.Z)`
  border-bottom: 3px solid ${e=>(0,d.kJ)("light")(e)};
  margin: 16px 0px;
  width: 100%;
`,ce=(0,s.ZP)(m.Z)`
  font-size: ${e=>(0,d.R)("fontSizes.1")(e)}px;
  font-weight: ${e=>(0,d.R)("fontWeights.medium")(e)};

  color: ${e=>e.reviewOK?(0,d.R)("baseColors.lima.base")(e):(0,d.R)("baseColors.vermillion.base")(e)};
`,ue=(0,s.ZP)(v.Z)`
  ${(0,d.aK)("large")} {
    width: 50%;
    flex: 1;
    margin-right: 32px;
  }
`,me=(0,s.ZP)(v.Z)`
  ${(0,d.aK)("large")} {
    align-self: center;
    width: 50%;
  }
`;function he({title:e,text:t,rating:i,recommended:l,user:n,date:o,characteristics:r,showScoreDesc:s}){let d=o&&(0,J.Z)(new Date(o),new Date);return a.createElement(a.Fragment,null,a.createElement(ne,{"data-testid":"review-card"},a.createElement(ue,null,a.createElement(z.Cq,{score:i,width:"20px",height:"20px"}),a.createElement(oe,null,(null==n?void 0:n.name)||"Anônimo"," - ",a.createElement("span",null,"Há ",d)),a.createElement(re,{bold:!0},e),a.createElement(se,null,t),a.createElement(ce,{reviewOK:l},l?"Sim, eu recomendo esse produto":"Não, eu não recomendo esse produto")),a.createElement(me,null,a.createElement(ae,{characteristics:r,showScoreDesc:s}))),a.createElement(de,null))}he.defaultProps={user:{name:"Anônimo"},showScoreDesc:!1};var ge=he;i(4506);var pe=i(30143),fe=i(2334);i(34958),i(35306),i(41323),i(90713)}}]);