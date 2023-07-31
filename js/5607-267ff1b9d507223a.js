"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5607],{67546:function(t,e,n){n.d(e,{Z:function(){return c}});var r=n(2784),a=n(80001),l=n(25610),i=n(89382);function u(t){var e=t.static,n=e.title,i=e.data,u=void 0===i?[]:i,c=null==u?void 0:u.map((function(t){return{answer:t.Answer,question:t.Question}}));return r.createElement(r.Fragment,null,n&&r.createElement(l.Z,{"data-testid":"faq-title",color:"base",as:"h2",fontSize:5,fontWeight:"bold",lineHeight:"display",m:"0 8px 12px"},n),r.createElement(a.Z,{faq:c}))}u.defaultProps={data:{},static:{title:""}},u.ssr=!0;var c=(0,i.Z)(u)},59106:function(t,e,n){n.d(e,{Z:function(){return h}});var r,a=n(7896),l=n(2784),i=n(90713),u=n(89382),c=n(21874),s=n(87333),o=n(71171),d=n(99673),f=n(84546),p=(0,d.ZP)(f.Z).attrs((function(t){return(0,a.Z)({},t)}))(r||(r=(0,o.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"]))),v=function(t){var e=t.data,n=t.structure,r=t.static,u=((null==e?void 0:e.search)||{}).fastFilters;if(!u)return null;var o=(0,s.Np)().publish,d=r.itemHeight,f=r.itemWidth,v=r.desktopMode,h=r.label,m=(0,c.U8)({customCategoryFilter:!1,data:e,filters:u,query:{},removeFilters:[],structure:n});return l.createElement(l.Fragment,null,u&&l.createElement(p,null,l.createElement(i.Z,{filters:m,onItemClick:function(t,e){t.preventDefault(),o("productlist:fastFilter:click",(0,a.Z)({},e,{custom:!1})),(0,c.dY)({path:null==e?void 0:e.href,spa:!0})},onView:function(t){var e,n,r;o("productlist:fastFilter:view",{custom:!1,eventLabel:null==(e=t.filters.attributeFilters[0])||null==(n=e.values)||null==(r=n.flatMap((function(t,e){return"".concat(e+1,"°marca:").concat(t.slug)})))?void 0:r.join(";")})},label:h,desktopMode:v,itemHeight:d,itemWidth:f})))};v.displayName="FastFilters",v.defaultProps={data:{},static:{},structure:{}},v.ssr=!0;var h=(0,u.Z)(v)},20958:function(t,e,n){n.d(e,{Z:function(){return s}});var r=n(2784),a=n(63486),l=n(21874),i=n(87333),u=n(89382),c=function(t){var e=t.data,n=t.structure,u=((null==e?void 0:e.search)||{}).filters,c=((null==u?void 0:u.find(l.wz))||{}).values,s=n.query,o=(0,i.Np)().publish,d=null==c?void 0:c.map((function(t){var e=t.label,r=t.selected,a=t.slug;return{href:(0,l.P2)({query:s,selected:r,structure:n,type:"delivery_magalu",unique:!0,value:a}),label:e,selected:r,slug:a}}));return r.createElement(a.Z,{filters:d,onChange:function(t){var e=t.href,r=t.slug,a=t.selected;o("delivery:filter:".concat(a?"selected":"clear"),{eventLabel:r,structure:n}),(0,l.dY)({path:e,spa:!0})}})};c.displayName="FilterDelivery",c.defaultProps={data:{},structure:{}};var s=(0,u.Z)(c)},58549:function(t,e,n){n.d(e,{Z:function(){return g}});var r,a=n(2784),l=n(63825),i=n(19527),u=n(84546),c=n(34490),s=n(21874),o=n(89382),d=n(7896),f=n(71171),p=n(99673),v=n(77833),h=(0,p.ZP)(u.Z).attrs((function(t){return(0,d.Z)({},t)}))(r||(r=(0,f.Z)(["\n  width: 100%;\n  position: fixed;\n  z-index: ",";\n  border-bottom: 1px solid #eee;\n  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.14), 0px 2px 2px rgba(0, 0, 0, 0.12),\n    0px 1px 3px rgba(0, 0, 0, 0.2);\n  background-color: ",";\n  padding: 10px;\n  top: 0;\n"])),(function(t){return(0,v.R)("zIndices.3")(t)}),(function(t){return(0,v.ow)("background.white")(t)})),m=function(t){var e=t.static,n=e.text,r=e.path,o=e.spa,d=e.truncateLength,f=e.icon,p=f.name,v=f.width,m=f.height;return a.createElement(h,null,a.createElement(i.Z,{alignItems:"center",gap:"20px"},a.createElement(c.JO$,{name:p,color:"text.light",width:void 0===v?30:v,height:void 0===m?30:m,onClick:function(){r&&(0,s.dY)({path:r,spa:o})}}),a.createElement(u.Z,null,a.createElement(l.Z,{fontSize:1,as:"p"},d?(0,s.vS)(n,d):n))))};m.defaultProps={static:{icon:{name:"ArrowBack"},path:void 0,spa:!0,truncateLength:50}},m.ssr=!0;var g=(0,o.Z)(m)}}]);