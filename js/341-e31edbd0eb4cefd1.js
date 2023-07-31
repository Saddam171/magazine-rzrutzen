"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[341],{72848:function(e,t,o){o.d(t,{Z:function(){return R}});var a=o(31461),n=o(7896),i=o(2784),r=o(34490),l=o(12468),s=o(19476),d=o(99673),c=o(68054),u=o(91489),m=o(27439),p=o(62452);let g=d.iv`
  background-image: linear-gradient(
    to right,
    #fcd000 0,
    #ff8a00 17%,
    #ff253a 34%,
    #ff37a8 51%,
    #a400e1 67%,
    #0086ff 83%,
    #00d604 100%
  );
  background-size: 100% 6px;
  background-repeat: no-repeat;
  background-position: top;
`,h=d.iv`
  font-size: ${e=>(0,u.R)("fontSizes.1")(e)}px;
  color: ${e=>(0,u.uu)("base")(e)};
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  max-width: 97%;
`,b={vertical:d.iv`
    display: block;
  `,horizontal:d.iv`
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > div {
      flex-basis: 30%;
    }
    & > button {
      flex-basis: 200px;
      flex-shrink: 0;
    }
  `},f=(0,d.ZP)(m.ZP)`
  ${e=>e.isMagalu&&g}
  background-color: ${e=>(0,u.ow)("background.lighter")(e)};
  padding: 1px 10px;
  margin: 0 2px 10px;
  border-radius: 6px;
  box-shadow: ${e=>(0,u.R)("elevations.5")(e)};
  ${({displayMode:e})=>e&&b[e]}
`,v=d.ZP.h2`
  ${h}
  font-size: ${e=>(0,u.R)("fontSizes.1")(e)}px;
  font-weight: ${e=>(0,u.R)("fontWeights.medium")(e)};
  margin: 10px 12px;
`,x=d.ZP.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  margin: 5px 5px 12px;
  & p {
    height: auto;
  }
`,E={vertical:d.iv`
    display: block;
  `,horizontal:d.iv`
    display: flex;
    justify-content: space-between;
    align-items: center;
    & svg {
      ${e=>e.isMagalu&&d.iv`
          width: 100px;
          height: auto;
        `}
    }
    & > div {
      ${({isMagalu:e})=>e&&d.iv`
          flex-grow: 1;
        `}
      flex-basis: 30%;
      flex-grow: 2;
    }
    & > button {
      flex-basis: 200px;
      flex-shrink: 0;
    }
  `},C=d.ZP.div`
  border-radius: 6px;
  & > div {
    margin: 8px 5px 12px;
  }
  ${({displayMode:e})=>e&&E[e]}
`,k=d.ZP.div`
  border-radius: ${({exhibition:e})=>"highlight"===e&&"4px"};
  overflow: hidden;
  ${c.Dh}
  ${c.$_}
  ${c.bK}
  ${c.Cg}
`,S=(0,d.ZP)(r.ZGh).attrs((e=>({color:(0,u.ow)("base")(e),width:80,height:40,viewBox:"0 0 60 14"})))`
  vertical-align: middle;
  margin-top: 10px;
  margin-left: 5px;
`,P={horizontal:d.iv`
    & svg + p {
      margin-right: ${e=>(0,u.R)("fontSizes.1")(e)}px;
    }
  `},w=(0,d.ZP)(p.u0)`
  ${({displayMode:e})=>e&&P[e]}
`;var y=o(56547);let Z=e=>(null==e?void 0:e.id)===l.ig,$=({displayMode:e,offer:t,onClick:o,showSellerInDialog:a,disableSellerClick:l,onSellerClick:d,buttons:c})=>{let{seller:u,price:m,deliveryTypes:g,error:h}=t,b=Z(u);return i.createElement(f,{isMagalu:b,displayMode:e,"data-testid":"buybox-card-container",hideLinkBorder:!1,as:"div"},i.createElement(C,{isMagalu:b,displayMode:e,"data-testid":"buybox-card-content"},b&&"vertical"===e&&i.createElement(S,{title:"Logo magalu","data-testid":"magalogo"}),i.createElement(x,null,i.createElement(y.tA,(0,n.Z)({display:"galery",isList:!0,showDiscount:!0},m))),i.createElement(x,null,u&&i.createElement(p.fP,{showDialog:a,disableSellerClick:l,onOffersClick:d,seller:u}))),g&&i.createElement(w,{displayMode:e,items:g}),i.createElement(s.zx,{"data-testid":"buybox-button",onClick:e=>o(e,t),color:"secondary",startIcon:i.createElement(r.tuM,{width:32,height:32}),m:"10px 0",disabled:Boolean(h),full:!0},h?c.buttonError:c.buttonOk))},A=e=>{let{data:t,disableSellerClick:o,onClick:n,showSellerInDialog:r,onSellerClick:l,textButtons:s,displayMode:d}=e,c=(0,a.Z)(e,["data","disableSellerClick","onClick","showSellerInDialog","onSellerClick","textButtons","displayMode"]),{buttonError:u="Não disponível",buttonOk:m="Comprar agora",title:p="Escolha a melhor oferta"}=s;return i.createElement(k,c,i.createElement(v,{"data-testid":"buybox-title"},p),t.map(((e,t)=>i.createElement($,{displayMode:d,key:t,offer:e,disableSellerClick:o,onSellerClick:l,onClick:n,buttons:{buttonError:u,buttonOk:m},showSellerInDialog:r}))))};A.defaultProps={displayMode:"vertical",data:[],onClick:()=>{},showSellerInDialog:!1,onSellerClick:()=>{},disableSellerClick:!1,textButtons:{}};var R=A},33252:function(e,t,o){o.d(t,{Z:function(){return E}});var a=o(7896),n=o(2784),i=o(34490),r=o(99673),l=o(91489);let s=r.ZP.div`
  display: flex;
  align-items: center;
`,d=r.ZP.p`
  margin-right: 5px;
  color: ${e=>(0,l.uu)("scratched")(e)};
`,c=r.ZP.div`
  background-color: ${e=>(0,l.dF)("lighter")(e)};
  color: ${e=>(0,l.uu)("lightest")(e)};
  height: 2em;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${e=>(0,l.R)("fontSizes.0")(e)}px;
  padding: 25px 0;
  border-bottom: 1px solid ${e=>(0,l.kJ)("light")(e)};
`,u=r.ZP.span`
  padding: ${e=>(0,l.R)("fontSizes.3")(e)}px;
  cursor: pointer;
  font-size: ${e=>(0,l.R)("fontSizes.1")(e)}px;
  fill: ${e=>(0,l.uu)("scratched")(e)};
`,m=(0,r.ZP)(u)`
  color: ${e=>(0,l.uu)("base")(e)};
`,p=(0,r.ZP)(u)`
  color: ${e=>e.count>=1?(0,l.R)("palette.primary.base"):(0,l.uu)("light")};
`,g="Filtrar";var h=o(84022),b=o(62452),f=o(78012);let v=e=>(t,o)=>n.createElement(f.Z.Item,(0,a.Z)({},t,{key:t.id||o,href:t.path||t.href,onClick:(t.path||t.href)&&(o=>{e(o,t)}),fontWeight:t.path||t.href?void 0:"bold",as:(t.path||t.href)&&"a",startIcon:t.icon,endIcon:!t.icon&&(t.path||t.href)&&"ChevronRight"}),t.label),x=({onOpen:e,onClose:t,onClear:o,onClickOutside:a,onShowDetail:r,onItemClick:l,visible:x,filters:E,count:C})=>{var k,S;let{attributeFilters:P,reviewFilters:w,categoryFilters:y,priceFilters:Z}=E,{attributeFilter:$,reviewFilter:A,categoryFilter:R,priceFilter:O}=l;return n.createElement(n.Fragment,null,n.createElement(s,{onClick:e,"data-testid":"filter-menu-button"},n.createElement(h.Z,{count:C,mr:"4px"}),n.createElement(d,null,g),n.createElement(i.wn$,{height:"20",color:"#8c8c8c"})),n.createElement(b.YE,{direction:"right",visible:x,onClickOutside:a},n.createElement(c,null,n.createElement(u,{onClick:t,role:"button",tabIndex:"0","data-testid":"close-menu"},n.createElement(i.x8P,{height:"20"})),n.createElement(m,null,g),n.createElement(p,{onClick:C>=1?o:null,onKeyDown:C>=1?o:null,role:"button",tabIndex:"-1","data-testid":"clear-filters",count:C},"Limpar tudo")),n.createElement(n.Fragment,null,Boolean(null==y||null==(k=y.values)?void 0:k.length)&&n.createElement(b.jm,{label:y.label,position:y.position,fullScreen:!0,onClick:r},n.createElement(f.Z,null,null==y||null==(S=y.values)?void 0:S.map(v(R)))),w&&Object.keys(w).length?n.createElement(b.pZ,{position:null==w?void 0:w.position,key:null==w?void 0:w.slug,items:null==w?void 0:w.values,label:null==w?void 0:w.label,onItemClick:A,filterSelected:null==w?void 0:w.filterSelected,showFilterInput:null==w?void 0:w.showFilterInput,fullScreen:!0,onClick:r}):null,Z&&Object.keys(Z).length?n.createElement(b.aw,{position:Z.position,key:Z.slug,label:Z.label,onApply:O,fullScreen:!0,onClick:r,min:Z.min,max:Z.max,selectedMin:Z.selectedMin,selectedMax:Z.selectedMax,item:Z}):null,Boolean(null==P?void 0:P.length)&&P.map(((e,t)=>n.createElement(b.G4,{key:(null==e?void 0:e.slug)||t,items:null==e?void 0:e.values,label:null==e?void 0:e.label,position:null==e?void 0:e.position,onItemClick:$,filterSelected:null==e?void 0:e.filterSelected,showFilterInput:null==e?void 0:e.showFilterInput,fullScreen:!0,onClick:r}))))))};x.defaultProps={onClear:()=>{},onClose:()=>{},onOpen:()=>{},onClickOutside:()=>{},visible:!1,filters:{attributeFilters:[],reviewFilter:{}},count:0,onItemClick:{attributeFilter:()=>({}),reviewFilter:()=>({})},onShowDetail:()=>{}};var E=x},89424:function(e,t,o){o.d(t,{Z:function(){return fe}});var a=o(7896),n=o(31461),i=o(2784),r=o(34490);let l="Roubo e Furto",s=`Proteção ${l}`,d="Garantia estendida",c="Formas de pagamentos",u=[{id:"rs1",title:"SEGURO PROTEÇÃO ROUBO E FURTO QUALIFICADO COM QUEBRA ACIDENTAL",content:[{text:[{content:"As Condições Gerais desse seguro poderão ser consultadas a qualquer momento, através do site "}]},{link:"http://condicoesgerais.bnpparibascardif.com.br/rf",text:"condicoesgerais.bnpparibascardif.com.br/rf"}]},{id:"rs11",title:"CARACTERÍSTICAS DO SEGURO",content:[{text:[{content:"Garantir a reposição ou o reparo do bem segurado."}]}]},{id:"rs2",title:"TIPO DE COBERTURA",content:[{text:[{content:"Roubo, Furto Qualificado e Quebra Acidental de Aparelhos Móveis"}]}]},{id:"rs3",title:"SINISTROS",content:[{text:[{content:"Em caso de sinistro, o Segurado deverá comunicar a ocorrência do defeito à Seguradora, através do site "}]},{link:"https://luizaseg.acioneseuseguro.com.br/",text:"https://luizaseg.acioneseuseguro.com.br/"},{text:[{content:", ou entrar em contato com a Central de Atendimento através do telefone informado abaixo."}]},{text:[{content:"Fica estabelecido o prazo de até 30 (trinta) dias para o pagamento de indenização devida pelo presente Contrato de Seguro, contados a partir da entrega de todos os documentos básicos previstos. Caso haja solicitação de nova documentação e/ou informação complementar, o prazo para pagamento do sinistro será suspenso, voltando a correr a partir do dia útil subsequente àquele em que forem completamente atendidas as exigências."}]}]},{id:"rs4",title:"SORTEIO DE CAPITALIZAÇÃO",content:[{text:[{content:"Haverá sorteio Mensal durante 3 meses, no valor liquido de R$ 5.062,50, realizado pela Loteria Federal. A participação ocorrerá por meio do seu Número da Sorte expresso no Bilhete de Seguro, desde que o pagamento do seguro esteja em dia. O regulamento da capitalização pode ser consultado a qualquer tempo através do site: www.regulamentos.bnpparibascardif.com.br"}]},{text:[{content:"Icatu Capitalização S.A., CNPJ: 74.267.170/1000-73, Processo SUSEP: 15414.900393/2019-87, Ouvidoria Icatu Seguros: 0800 286 0047. Modalidade Incentivo. “É proibida a venda de títulos de capitalização a menores de dezesseis anos - Art.3º, I do Código Civil "}]},{link:"http://www.icatuseguros.com.br",text:"http://www.icatuseguros.com.br"},{text:[{content:". É proibida a venda de títulos de capitalização a menores de dezesseis anos - Art. 3o, I do Código Civil."}]}]},{id:"rs5",title:"EXCLUSÕES GERAIS",content:[{text:[{content:"Todos os riscos excluídos que constam no bilhete de seguro do bem segurado, também estarão automaticamente excluídos deste seguro. Os danos causados por atos ilícitos dolosos ou por culpa grave equiparável ao dolo, praticados pelo segurado, pelo beneficiário ou representante legal de um ou de outro, estarão excluídos."}]}]},{id:"rs6",title:"INFORMAÇÕES ADICIONAIS",content:[{text:[{content:"A contratação do Seguro é opcional e é proibido condicionar desconto no preço do bem à aquisição do seguro; O Segurado deverá guardar o certificado de garantia do fabricante; O Segurado poderá desistir do seguro no prazo de 7 dias corridos a contar da emissão do bilhete, através da Central de Atendimento informada neste documento ou representante de seguro; Caso haja a necessidade de reparo no período de garantia do fabricante, deverá entrar em contato com o fabricante. Número de atendimento do fabricante vide manual de garantia do fabricante."}]}]},{id:"rs7",title:"CENTRAL DE ATENDIMENTO",content:[{text:[{content:"SAC (cancelamento, reclamações e informações sobre seguro): 0800 545 4040. "},{content:"Abertura e acompanhamento de sinistro: 3003 4288 (Capitais e regiões metropolitanas) ou 0800 200 0940 (demais localidades). "},{content:"Deficiente auditivo:0800 727 2482 (atendimento todos os dias, 24h). Caso não esteja satisfeito com a resposta fornecida pelo SAC, entre em contato com a Ouvidoria: 0800 727 2482 - Dias úteis, das 9h às 18 horas (horário de Brasília) exceto feriados ou acesse ouvidoria.bnpparibascardif.com.br."}]}]},{id:"rs8",title:"SEGURADORA",content:[{text:[{content:"Cardif do Brasil Seguros e Garantias S/A, CNPJ: 08.279.191/0001-84, com endereço na Avenida Presidente Juscelino Kubitscheck, Nº1909, Torre Sul, 8º andar, São Paulo/SP, CEP: 04543-907 ou https://www.bnpparibascardif.com.br/"}]}]},{id:"rs9",title:"CORRETORA",content:[{text:[{content:"Viotto Corretora de Seguros e Previdência Ltda. CNPJ: 56.170.061/0001-51. Registro SUSEP: 10.0059706."}]}]},{id:"rs10",title:"DISPOSIÇÕES GERAIS",content:[{text:[{content:'Ouvidoria - Finalidade e Forma de Utilização: 0800 727 2482 ou https://www.luizaseg.com.br/. “O registro do produto é automático e não representa aprovação ou recomendação por parte da Susep”. “A adesão ao seguro é opcional”. “O segurado poderá consultar a situação cadastral de seu corretor de seguros, no site www.susep.gov.br, por meio do número de seu registro na SUSEP, nome completo, CNPJ ou CPF”. ”A aceitação do seguro estará sujeita à análise do risco”. “As condições contratuais/regulamento deste produto encontram-se registradas na SUSEP de acordo com o número de processo constante da apólice/proposta e poderão ser consultadas no endereço eletrônico www.susep.gov.br”. “Em atendimento à Lei 12.741/12 informamos que incidem as alíquotas de 0,65% de PIS/Pasep e de 4% de COFINS sobre os prêmios de seguros/as contribuições a planos de caráter previdenciário/os pagamentos destinados a planos de capitalização, deduzidos do estabelecido em legislação específica”. “O registro do produto é automático e não representa aprovação ou recomendação por parte da Susep”. "É dever do intermediário disponibilizar ao cliente formal e previamente à contratação do seguro, o montante de sua remuneração e o prêmio do seguro. A distribuição dos seguros por meio do Magazine Luiza é realizada com exclusividade. Saiba mais sobre a privacidade dos seus dados pessoais e como serão mantidos em segurança: acesse https://www.luizaseg.com.br/lgpd.php;". A FRAUDE CONTRA SEGUROS É CRIME, DENUNCIE (21) 2253-1177 OU 181 - WWW.FENASEG.ORG.BR. Atendimento SUSEP: 0800 021 8484 - Dias úteis das 9:30 às 17:00 Por meio do Acordo Operacional celebrado entre as empresas acima (“ SEGURADORA”) e (“REPRESENTANTE”), a SEGURADORA confere a REPRESENTANTE poderes para: Realizar a oferta e promoção de Seguros, inclusive por meios remotos, em nome da SEGURADORA; Emitir bilhetes de seguro em nome da SEGURADORA e entregá-lo ao segurado; Coletar e fornecer à SEGURADORA os dados cadastrais e de documentação de proponentes, segurados, beneficiários e corretores de seguros e seus prepostos; Recolher os prêmios de Seguro, em nome da SEGURADORA, e repassá-los integralmente à SEGURADORA; Orientar e assistir aos segurados e seus beneficiários, no que compete aos contratos de Seguro, inclusive por meios remotos, em nome da SEGURADORA; Orientar e assistir aos corretores de seguros e seus prepostos, se for o caso; Dar apoio logístico e administrativo à SEGURADORA, visando a manutenção dos contratos de seguros e outros serviços, inclusive, controle e processamento de dados das operações pactuadas em nome da SEGURADORA.'}]}]}],m=[{id:"ce1",title:"SEGURO DE GARANTIA ESTENDIDA ORIGINAL",content:[{text:[{content:"As Condições Gerais desse seguro poderão ser consultadas a qualquer momento, através do site "}]},{link:"http://condicoesgerais.bnpparibascardif.com.br/rf",text:"condicoesgerais.bnpparibascardif.com.br/rf"}]},{id:"ce2",title:"CARACTERÍSTICAS DO SEGURO",content:[{text:[{content:"Garantir as mesmas coberturas oferecidas pela Garantia original do Fabricante."}]}]},{id:"ce3",title:"TIPO DE COBERTURA",content:[{text:[{content:"Extensão de Garantia Original."}]}]},{id:"ce4",title:"SINISTROS",content:[{text:[{content:"Em caso de sinistro, o Segurado deverá comunicar a ocorrência do defeito à Seguradora, através do site "}]},{link:"https://luizaseg.acioneseuseguro.com.br/",text:"https://luizaseg.acioneseuseguro.com.br/"},{text:[{content:" ou entrar em contato com a Central de Atendimento através do telefone informado abaixo."}]},{text:[{content:"A seguradora terá até 30 dias, a contar da entrega do bem segurado à assistência técnica pelo segurado, acompanhado do Bilhete de Seguro, Documento Fiscal de Aquisição do Bem Segurado, CPF ou outro documento de identificação. No caso de perda total do bem segurado, a Seguradora garantirá a substituição por bem igual ou similar, caso não esteja mais em fabricação na ocasião do sinistro. A indenização ficará restrita ao limite máximo de Indenização especificado no Bilhete de Seguro. Na impossibilidade de reparo do bem segurado em função da falta de alguma peça no mercado, o segurado poderá optar por aguardar até que a peça esteja disponível para aquisição ou autorizar a Assistência Técnica a utilizar peça recondicionada ou mesmo usada, desde que em perfeitas condições de uso."}]}]},{id:"ce5",title:"SORTEIO DE CAPITALIZAÇÃO",content:[{text:[{content:"Haverá sorteio Mensal durante 3 meses, no valor liquido de R$ 5.062,50, realizado pela Loteria Federal. A participação ocorrerá por meio do seu Número da Sorte expresso no Bilhete de Seguro, desde que o pagamento do seguro esteja em dia. O regulamento da capitalização pode ser consultado a qualquer tempo através do site"}]},{link:"http://regulamentos.bnpparibascardif.com.br",text:"regulamentos.bnpparibascardif.com.br"},{text:[{content:"Icatu Capitalização S.A., CNPJ: 74.267.170/1000-73, Processo SUSEP: 15414.900393/2019-87, Ouvidora Icatu Seguros: 0800 286 0047, Modalidade Incentivo. “É proibida a venda de títulos de capitalização a menores de dezesseis anos - Art. 3° I do Código Civil”."}]},{link:"http://www.icatuseguros.com.br",text:"http://www.icatuseguros.com.br"},{text:[{content:"É proibida a venda de títulos de capitalização a menores de dezesseis anos - Art. 3o, I do Código Civil."}]}]},{id:"ce6",title:"ASSISTÊNCIA HELP DESK",content:[{text:[{content:"Para Garantia Estendida de Celulares, Smartphones, Televisores, Home Theater, Blueray, DVD, Vídeo Game, produtos de Informática, Tablets e GPS, o seguro oferece assistência help desk com vigência de 90 dias a partir da data de adesão. Consulte as Condições da Assistência através do site"}]},{link:"http://assistencias.bnpparibascardif.com.br",text:"http://assistencias.bnpparibascardif.com.br."},{text:[{content:"Prestador: CDF - Central de Funcionamento Tecnologia e Participações S.A. CNPJ: 08.769.874-0001/10. Central de Atendimento: 3004 2805 para capitais ou 0800 721 2805 para demais localidades"}]}]},{id:"ce7",title:"EXCLUSÕES GERAIS",content:[{text:[{content:"Todos os riscos excluídos que constam do certificado de garantia do bem segurado, também estarão automaticamente excluídos deste seguro, inclusive os que deixaram de ter a cobertura oferecida durante o prazo de garantia do fornecedor. Os danos causados por atos ilícitos dolosos ou por culpa grave equiparável ao dolo, praticados pelo segurado, pelo beneficiário ou representante legal de um ou de outro, estarão excluídos."}]}]},{id:"ce8",title:"INFORMAÇÕES ADICIONAIS",content:[{text:[{content:"A contratação do Seguro é opcional e é proibido condicionar desconto no preço do bem à aquisição do seguro; O Segurado deverá guardar o certificado de garantia do fabricante; O Segurado poderá desistir do seguro no prazo de 7 dias corridos a contar da emissão do bilhete, através da Central de Atendimento informada neste documento ou representante de seguro; Caso haja a necessidade de reparo no período de garantia do fabricante, deverá entrar em contato com o fabricante. Número de atendimento do fabricante vide manual de garantia do fabricante."}]}]},{id:"ce9",title:"CENTRAL DE ATENDIMENTO",content:[{text:[{content:"SAC (cancelamento, reclamações e informações sobre o seguro): 0800 727 9417. "},{content:"Abertura e acompanhamento de sinistro: 3003 4069 ( Capitais e Regiões Metropolitanas) ou 0800 200 0969 (Demais localidades). "},{content:"Deficinete auditivo: 0800 725 0645 (atendimento todos os dias, 24 horas). Ouvidoria: 0800 727 2482 (atendimento em dias úteis, das 09h00 às 18h00 no horário de Brasília, exceto feriados), ou através do site: bnpparibascardif.com.br/ouvidoria"}]}]},{id:"ce10",title:"SEGURADORA",content:[{text:[{content:"CARDIF do Brasil seguros e garantias. CNPJ: 08.279.191/0001-84. Código SUSEP: 0293-3. Processo SUSEP: 15414.900738/2014-96. Ramo: 71. Avenida Presidente Juscelino Kubitschek, 1.909, Torre Sul, 8° andar, São Paulo/SP, CEP 04543-907."}]}]},{id:"ce11",title:"REPRESENTANTE DE SEGURO",content:[{text:[{content:"Magazine Luiza S.A. CNPJ: 47.960.950/0001-21"}]}]},{id:"ce12",title:"CORRETORA",content:[{text:[{content:"Viotto Corretora de Seguros e Previdência Ltda. CNPJ: 56.170.061/0001-51. Registro SUSEP: 10.0059706"}]}]},{id:"ce13",title:"DISPOSIÇÕES GERAIS",content:[{text:[{content:"Ouvidoria - Finalidade e Forma de Utilização: 0800 727 2482 ou "}]},{link:"http://www.luizaseg.com.br",text:"http://www.luizaseg.com.br"},{text:[{content:'. "O registro do produto é automático e não representa aprovação ou recomendação por parte da SUSEP"'}]},{text:[{content:'“A adesão ao seguro é opcional”. "É proibido condicionar desconto no preço de bem à aquisição do seguro”. “O segurado poderá consultar a situação cadastral de seu corretor de seguros, no site'}]},{link:"http://www.susep.gov.br",text:"www.susep.gov.br"},{text:[{content:"por meio do número de seu registro na SUSEP, nome completo, CNPJ ou CPF”. ”A aceitação do seguro estará sujeita à análise do risco”. “As condições contratuais/regulamento deste produto encontram-se registradas na SUSEP de acordo com o número de processo constante da apólice/proposta e poderão ser consultadas no endereço eletrônico"}]},{link:"http://www.susep.gov.br/",text:"www.susep.gov.br"},{text:[{content:'“Em atendimento à Lei 12.741/12 informamos que incidem as alíquotas de 0,65% de PIS/Pasep e de 4% de COFINS sobre os prêmios de seguros/as contribuições a planos de caráter previdenciário/os pagamentos destinados a planos de capitalização, deduzidos do estabelecido em legislação específica”. “O registro do produto é automático e não representa aprovação ou recomendação por parte da Susep”. "É dever do intermediário disponibilizar ao cliente formal e previamente à contratação do seguro, o montante de sua remuneração e o prêmio do seguro. A distribuição dos seguros por meio do Magazine Luiza é realizada com exclusividade. Saiba mais sobre a privacidade dos seus dados pessoais e como serão mantidos em segurança: acesse https://www.luizaseg.com.br/lgpd.php;". '}]},{text:[{content:"A FRAUDE CONTRA SEGUROS É CRIME, DENUNCIE (21) 2253-1177 OU 181 - WWW.FENASEG.ORG.BR. Atendimento SUSEP: 0800 021 8484 - Dias úteis das 9:30 às 17:00\n            Por meio do Acordo Operacional celebrado entre as empresas acima (“SEGURADORA”) e (“REPRESENTANTE”), a SEGURADORA confere a REPRESENTANTEpoderes para: Realizar a oferta e promoção de Seguros, inclusive por meios remotos, em nome da SEGURADORA; Emitir bilhetes de seguro em nome da SEGURADORA e entregá-lo ao segurado; Coletar e fornecer à SEGURADORA os dados cadastrais e de documentação de proponentes, segurados, beneficiários e corretores de seguros e seus prepostos; Recolher os prêmios de Seguro, em nome da SEGURADORA, e repassá-los integralmente à SEGURADORA; Orientar e assistir aos segurados e seus beneficiários, no que compete aos contratos de Seguro, inclusive por meios remotos, em nome da SEGURADORA; Orientar e assistir aos corretores de seguros e seus prepostos, se for o caso; Dar apoio logístico e administrativo à SEGURADORA, visando a manutenção dos contratos de seguros e outros serviços, inclusive, controle e processamento de dados das operações pactuadas em nome da SEGURADORA. É dever do intermediário disponibilizar ao cliente formal e previamente à contratação do seguro, o montante de sua remuneração e o prêmio do seguro. A distribuição dos seguros por meio do Magazine Luiza é realizada com exclusividade. Saiba mais sobre a privacidade dos seus dados pessoais e como serão mantidos em segurança: acesse https://www.luizaseg.com.br/. Outros serviços, inclusive, controle e processamento de dados das operações pactuadas em nome da SEGURADORA.\n            "}]}]}],p=`${d}`,g=`Seguro ${l} Qualificado`,h=`${l} e Forma de pagamento`,b=[{id:"pw1",title:"Termo de Autorização de cobrança de Prêmio de Seguro",content:[{text:[{content:"Eu, proponente "},{content:"{description} "},{content:"autorizo que o pagamento do prêmio de seguro no valor de "},{content:"{totalPrice} ",bold:!0},{content:"seja realizado em conjunto com o pagamento do(s) produto(s)/serviço(s) ora adquirido(s)."}]}]},{id:"pw2",content:[{text:[{content:"Início e Término da vigência do seguro: ",bold:!0},{content:"Data especificada no Bilhete de Seguro que você receberá após a conclusão da compra, quando o Termo estará disponível com os dados completos, refletindo sua opção prévia e autorização de cobrança de prêmio."}]}]},{id:"pw3",content:[{text:[{content:"Declaro ter prévia ciência das informações mínimas obrigatórias disponibilizadas antes da contratação do seguro acompanhadas da íntegra das Condições Gerais do presente Seguro e tenho conhecimento que também poderei consultá-la a qualquer momento através do site www.luizaseg.com.br. Declaro também que foram integralmente cumpridas as regras de conduta que devem ser praticadas pelos corretores de seguros e demais intermediários no relacionamento com o cliente, previstas na legislação vigente."}]}]},{id:"pw4",content:[{text:[{content:"Notas :",bold:!0},{content:"O segurado poderá desistir do seguro contratado no prazo de 7 (sete) dias corridos a contar da assinatura da proposta, no caso de contratação por apólice individual, ou da emissão do bilhete, no caso de contratação por bilhete, ou do efetivo pagamento do prêmio, o que ocorrer por último. No caso de pagamento de prêmio fracionado, considera-se o pagamento da primeira parcela como o efetivo pagamento."}]}]},{id:"pw5",financialService:"extendedWarranty",content:[{text:[{content:"Seguradora: Luizaseg Seguros S/A. CNPJ: 07.746.953/0001-42. Código Susep: 0206-2. Processo Susep: 15414.900276/2014-17. Ramo(s): 0195. Representante de Seguro: Magazine Luiza S/A CNPJ: 47.960.950/0001-21. Remuneração: "},{content:"{extendedWarrantyPercentage} - "},{content:"{extendedWarrantyAmount} "},{content:'"A Magazine Luiza possui participação de 50% na Luizaseg Seguros S.A." Corretora: Viotto Corretora de Seguros e Previdência Ltda. CNPJ: 56.170.061/0001-51. Registro SUSEP: 10.0059706. Remuneração: 0,03%.'}]}]},{id:"pw6",financialService:"certainExchange",content:[{text:[{content:"Seguradora: Luizaseg Seguros S/A. CNPJ: 07.746.953/0001-42. Código Susep: 0206-2. Processo Susep: 15414.900276/2014-17. Ramo(s): 0195. Representante de Seguro: Magazine Luiza S/A CNPJ: 47.960.950/0001-21. Remuneração: "},{content:"{certainExchangePercentage} - "},{content:"{certainExchangeAmount} "},{content:'"A Magazine Luiza possui participação de 50% na Luizaseg Seguros S.A." Corretora: Viotto Corretora de Seguros e Previdência Ltda. CNPJ: 56.170.061/0001-51. Registro SUSEP: 10.0059706. Remuneração: 0,03%.'}]}]},{id:"pw7",financialService:"robberyAndTheft",content:[{text:[{content:"Seguradora: Cardif do Brasil Seguros e Garantias S.A. CNPJ: 08.279.191/0001-84 Código SUSEP: 0293-3 Processo SUSEP: 15414.900738/2014-98 Ramo: 71. Representante de Seguro: Magazine Luiza S/A CNPJ: 47.960.950/0001-21. Remuneração: "},{content:"{robberyAndTheftPercentage} - "},{content:"{robberyAndTheftAmount} "},{content:"Corretora: Viotto Corretora de Seguros e Previdência LTDA. CNPJ: 56.170.061/0001-51 Registro SUSEP: 100059706. Remuneração: 0,03%."}]}]}],f=["incluir Proteção Roubo e Furto","qualificado com quebra acidental de 1 ano"];var v=o(93837),x=o(99673),E=o(68054),C=o(91489),k=o(63825);let S=x.ZP.div`
  ${e=>(0,C.aK)("large")(e)} {
    display: grid;
    grid-template-columns: 3fr 9fr;
    border-bottom: 1px solid;
    border-color: ${e=>(0,C.kJ)("light")(e)};
    padding: 17px 0;
  }
`,P=x.ZP.div`
  ${e=>(0,C.aK)("large")(e)} {
    display: flex;
    align-items: center;
    border-left: 1px solid;
    border-color: ${e=>(0,C.kJ)("light")(e)};
    & label svg {
      align-self: flex-start;
    }
  }
`,w=(0,x.ZP)(k.Z)`
  font-size: ${e=>(0,C.R)("fontSizes.1")(e)}px;
  line-height: ${e=>(0,C.R)("lineHeights.input")(e)}em;
  margin: 10px 0;

  ${e=>(0,C.aK)("large")(e)} {
    margin: 15px 0 0 0;
  }
`,y=x.ZP.span`
  color: ${e=>(0,C.uu)("base")(e)};
  font-size: ${e=>(0,C.R)("fontSizes.1")(e)}px;
  padding-left: 12px;
`,Z=(0,x.ZP)(y)`
  color: ${e=>(0,C.uu)("primary")(e)};
  font-size: ${e=>(0,C.R)("fontSizes.4")(e)}px;
  font-weight: ${e=>(0,C.R)("fontWeights.medium")(e)};
  line-height: ${e=>(0,C.R)("lineHeights.fontSize")(e)};
`,$=x.ZP.div`
  border-bottom: 1px solid ${e=>(0,C.ow)("border.light")(e)};
  ${E.Dh}
  &:first-child {
    border-top: 1px solid ${e=>(0,C.ow)("border.light")(e)};
  }

  ${e=>(0,C.aK)("large")(e)} {
    padding: 0 17px;
    border: none;
    &:first-child {
      border: none;
    }
  }
`,A=x.ZP.div`
  display: flex;
  flex-direction: column;

  ${y} {
    margin-bottom: 5px;
  }
`,R=x.ZP.span`
  color: ${e=>(0,C.uu)("primary")(e)};
  font-weight: ${e=>(0,C.R)("fontWeights.bold")(e)};
`;var O=o(19476);let z=({options:e,onChange:t,desktopMode:o,installmentQuantity:a})=>{let[n,r]=(0,i.useState)(new Map),l=(e,o)=>{var a,i;t(o,(null==(a=n.get(null==o?void 0:o.description))?void 0:a.checked)||!1);let{name:l,checked:s}=e.target;null!=(i=n.get(null==o?void 0:o.description))&&i.checked?r((e=>(e.delete(null==o?void 0:o.description),new Map(e)))):r((e=>new Map(e).set(l,{checked:s,item:o})))};return e.map((e=>{var t;return i.createElement($,{key:null==e?void 0:e.id,p:"12px 0"},i.createElement(O.XZ,{onChange:t=>l(t,e),name:null==e?void 0:e.description,checked:(null==(t=n.get(null==e?void 0:e.description))?void 0:t.checked)||!1},o?i.createElement(A,null,i.createElement(Z,null,f[0],i.createElement("br",null),f[1]),i.createElement("br",null),i.createElement(y,null,"Por apenas"," ",i.createElement(R,null,((e,t)=>e?`${e}x de ${t} sem juros`:null)(a,(0,v.Z)({value:(null==e?void 0:e.price)/a}))),(e=>`(à vista ${e})`)((0,v.Z)({value:null==e?void 0:e.price})))):i.createElement(y,null,"Incluir por apenas"," ",i.createElement("b",{"data-testid":"option-price"},(0,v.Z)({value:null==e?void 0:e.price}))," ",((e,t)=>e?`(${e}x de ${t})`:null)(a,(0,v.Z)({value:(null==e?void 0:e.price)/a}))),i.createElement("br",null)))}))};z.defaultProps={options:[],onChange:()=>({}),desktopMode:!1,installmentQuantity:null};var I=z,T=o(70615);let M=(0,x.ZP)(T.$)`
  background-color: ${e=>(0,C.dF)("primary")(e)};
  color: ${e=>(0,C.uu)("lightest")(e)};
`,D=(0,x.ZP)(O.xu)`
  padding: 0 12px;
  max-width: 1366px;
  margin: auto;
`,j=(0,x.ZP)(O.kC)`
  align-items: center;
  margin: 10px 0;
`,L=(0,x.ZP)(O.Ee)`
  width: 60px;
  height: 60px;
`,F=(0,x.ZP)(O.X6)`
  color: ${e=>(0,C.uu)("scratched")(e)};
  font-size: ${e=>(0,C.R)("fontSizes.2")(e)}px;
  line-height: ${e=>(0,C.R)("lineHeights.input")(e)}em;
  margin-left: 5px;
  font-weight: ${e=>(0,C.R)("fontWeights.bold")(e)};
`,B=(0,x.ZP)(O.kC)`
  align-items: center;
  color: ${e=>(0,C.uu)("base")(e)};
`,N=(0,x.ZP)(O.X6)`
  font-size: ${e=>(0,C.R)("fontSizes.2")(e)}px;
  margin-left: 5px;
  font-weight: ${e=>(0,C.R)("fontWeights.bold")(e)};
`,U=x.ZP.div`
  padding-bottom: 10px;
  margin-bottom: 5px;
`,q=(0,x.ZP)(O.kC)`
  padding: 16px 14px;
  justify-content: space-between;
  cursor: pointer;
  p {
    color: ${e=>(0,C.uu)("base")(e)};
    font-size: ${e=>(0,C.R)("fontSizes.2")(e)}px;
  }
`,G=(0,x.ZP)(O.xv)``,W=(0,x.ZP)(O.xv)`
  text-align: center;
  font-size: ${e=>(0,C.R)("fontSizes.1")(e)}px;
`,H=({service:e,onChange:t,desktopMode:o,installmentQuantity:a})=>null!=e&&e.offers.length?i.createElement(S,null,i.createElement("div",null,i.createElement(B,null,o?i.createElement(r.ggJ,{width:208,height:59}):i.createElement(i.Fragment,null,i.createElement(r.Q4t,{"aria-hidden":!0}),i.createElement(N,{as:"p",mt:"10px"},null==e?void 0:e.description))),i.createElement(w,null,"Pode ficar tranquilo! Nós protegemos por 1 ano os seus equipamentos portáteis contra roubo e furto qualificado e quebra acidental.")),i.createElement(P,null,i.createElement(I,{options:null==e?void 0:e.offers,onChange:t,desktopMode:o,installmentQuantity:a}))):null;H.defaultProps={service:{offers:[]},desktopMode:!1,installmentQuantity:null};var J=H;let K=["- Mais tempo de garantia além do fabricante","- Consertos utilizando peças genuínas","- Mais de 3 mil assistências técnicas em todo o Brasil","- Concorra a R$ 5.000,00 durante 3 meses"],_=(e,t)=>`${e} por apenas ${t}`,V=(e,t)=>e?` (${e}x de ${t})`:"";var Q=o(84546);let Y=(0,x.ZP)(Q.Z)``,X=(0,x.ZP)(k.Z)`
  font-size: ${e=>(0,C.R)("fontSizes.1")(e)}px;
  line-height: ${e=>(0,C.R)("lineHeights.input")(e)}em;
`;var ee=o(65055);let te=({service:e,onChange:t,Icon:o,defaultOption:a,installmentQuantity:n})=>{var r;if(null==e||!e.offers.length)return null;let[l,s]=(0,i.useState)(a[0]),d=null==e||null==(r=e.offers)?void 0:r.map((e=>({id:null==e?void 0:e.id,value:null==e?void 0:e.id,price:null==e?void 0:e.price,label:`${_(null==e?void 0:e.description,(0,v.Z)({value:null==e?void 0:e.price}))}${V(n,(0,v.Z)({value:(null==e?void 0:e.price)/n}))}`,description:null==e?void 0:e.description,treeId:null==e?void 0:e.treeId,wageCompensation:null==e?void 0:e.wageCompensation})));return i.createElement(i.Fragment,null,i.createElement(B,null,i.createElement(o,{"aria-hidden":!0}),i.createElement(N,{as:"p"},null==e?void 0:e.description)),i.createElement(Y,{mb:"15px",mt:"10px"},K.map(((e,t)=>i.createElement(X,{key:`${e}${t}`},e)))),i.createElement(Y,null,i.createElement(ee.Z,{options:d.concat(a),selectedOption:null==l?void 0:l.value,onChange:(e,o)=>{s(o),t(e,o)},p:"12px 0"})))};te.defaultProps={service:{offers:[]},onChange:()=>({}),defaultOption:[],installmentQuantity:null};var oe=te;let ae=({service:e,onChange:t,installmentQuantity:o})=>i.createElement(i.Fragment,null,i.createElement(oe,{service:e,onChange:t,defaultOption:[{value:null,label:"Sem garantia estendida, somente garantia do fabricante"}],Icon:r.Jpv,installmentQuantity:o}));ae.defaultProps=oe.defaultProps;var ne=ae;let ie=({service:e,onChange:t,installmentQuantity:o})=>i.createElement(i.Fragment,null,i.createElement(oe,{service:e,onChange:t,Icon:r.Nb3,defaultOption:[{value:null,label:"Sem garantia estendida, somente garantia do fabricante"}],installmentQuantity:o}));ie.defaultProps=oe.defaultProps;var re=ie,le=o(62452),se=o(64586);let de=(0,x.ZP)(O.xu)`
  max-width: 1366px;
  margin: auto;
`,ce=(0,x.ZP)(O.X6)`
  text-align: center;
  margin: 15px;
  font-weight: ${e=>(0,C.R)("fontWeights.bold")(e)};
  font-size: ${e=>(0,C.R)("fontSizes.0")(e)};
`,ue=(0,x.ZP)(O.xv)`
  padding: 5px 0;
  line-height: ${e=>(0,C.R)("lineHeights.input")(e)}em;
`,me=(0,x.ZP)(O.xv)`
  text-decoration: underline;
  color: ${e=>(0,C.uu)("base")(e)};
`,pe=e=>{let{terms:t,placeholders:o={}}=e,r=(0,n.Z)(e,["terms","placeholders"]),l=e=>e&&Object.entries(o).reduce(((e,[t,o])=>e.replace(`{${t}}`,o)),e);return t.map((e=>{var t;return i.createElement(de,(0,a.Z)({},r,{key:null==e?void 0:e.id}),i.createElement(ce,{as:"p"},l(null==e?void 0:e.title)),(!(null!=e&&e.financialService)||(e=>Object.entries(o).find((([t,o])=>t.startsWith(e)&&o)))(e.financialService))&&i.createElement(ue,{"data-testid":e.id},null==e||null==(t=e.content)?void 0:t.map((e=>{var t;return e.link?i.createElement(me,{as:"a",href:null==e?void 0:e.link,key:null==e?void 0:e.link},l(null==e?void 0:e.text)):null==e||null==(t=e.text)?void 0:t.map((e=>i.createElement(ue,{as:"span",key:e.content},null!=e&&e.bold?i.createElement("b",null,l(null==e?void 0:e.content)):l(null==e?void 0:e.content))))}))))}))};pe.defaultProps={terms:[]};var ge=pe;var he=({servicesSelected:e,showRobberyTerm:t,setShowRobberyTerm:o,showExtendedWarrantyTerm:a,setShowExtendedWarrantyTerm:n,showPaymentsWay:r,setShowPaymentsWay:l})=>{let p=Object.values(e).reduce(((e,t)=>(t.forEach((t=>{e+=t.price})),e)),0),g=Object.values(e).reduce(((e,t)=>(t.forEach((t=>{e.push(t.description)})),e)),[]),h=Object.values(e).reduce(((t,o,a)=>{let n=Object.keys(e)[a];return o.forEach((e=>{var o,a;Object.assign(t,{[`${n}Amount`]:null!=(o=e.wageCompensation)&&o.amount?(0,v.Z)({value:e.wageCompensation.amount}):null,[`${n}Percentage`]:null!=(a=e.wageCompensation)&&a.percentage?`${e.wageCompensation.percentage}%`:null})})),t}),{});return i.createElement(i.Fragment,null,[{id:"robbery-theft-terms",show:t,terms:u,title:"fechar termos de roubo e furto",label:s,onClick:()=>o(!1)},{id:"extended-warranty-terms",show:a,terms:m,title:"fechar termos de garantia estendida",label:d,onClick:()=>n(!1)},{id:"payments-way-terms",show:r,terms:b,title:"fechar formas de pagamento de serviço",label:c,onClick:()=>l(!1)}].map((e=>i.createElement(le.YE,{fullScreen:!0,direction:"right",key:e.id,visible:e.show,"data-testid":e.id},i.createElement(M,{leftButton:{icon:"back",title:e.title,iconColor:"#fefefe",onClick:e.onClick},label:e.label}),i.createElement(O.D_,null),i.createElement(ge,{terms:e.terms,placeholders:{totalPrice:(0,v.Z)({value:p}),description:(0,se.zY)(g),extendedWarrantyAmount:h.extendedWarrantyAmount,extendedWarrantyPercentage:h.extendedWarrantyPercentage,certainExchangeAmount:h.certainExchangeAmount,certainExchangePercentage:h.certainExchangePercentage,robberyAndTheftAmount:h.robberyAndTheftAmount,robberyAndTheftPercentage:h.robberyAndTheftPercentage},p:"0 12px"})))))};let be=e=>{let{installment:t,services:o,servicesPriority:s,onContinueClick:u,visible:m,timeTransition:b,onCloseClick:f,protectLabelAs:v,onChange:x,showCloseButton:E}=e,C=(0,n.Z)(e,["installment","services","servicesPriority","onContinueClick","visible","timeTransition","onCloseClick","protectLabelAs","onChange","showCloseButton"]),k="robberyAndTheft",S="extendedWarranty",P="certainExchange",[w,y]=(0,i.useState)(!1),[Z,$]=(0,i.useState)(!1),[A,R]=(0,i.useState)(!1),[z,I]=(0,i.useState)({[k]:[],[S]:[],[P]:[]}),{records:T}=o,{quantity:B}=t,[N,H,K]=(0,se.yH)(T,s),_=e=>Object.entries(e).reduce(((e,[t,o])=>o.length?Object.assign({},e,{[t]:o}):e),{}),V=(e,t,o)=>{let a=[t];x(_(Object.assign({},z,{[o]:null===(null==t?void 0:t.value)?[]:a}))),I(Object.assign({},z,{[o]:null===(null==t?void 0:t.value)?[]:a}))},Q=e=>Object.values(e).reduce(((e,t)=>e.concat(t)),[]);return i.createElement(i.Fragment,null,i.createElement(le.YE,(0,a.Z)({visible:m,direction:"right",timeTransition:b,fullScreen:!0},C),i.createElement(O.D_,null),i.createElement(M,{leftButton:{icon:"close",title:"fechar serviços financeiros",onClick:f,iconColor:"#fefefe"},label:"Serviços",showCloseButton:E}),i.createElement(D,null,i.createElement(j,null,i.createElement(L,{src:o.image,width:60,height:60,"aria-hidden":!0}),i.createElement(F,{as:v},"Proteja o seu produto por muito mais tempo!")),i.createElement(J,{service:N,"data-testid":"roubo-furto",onChange:(e,t)=>{let o=t?z[k].filter((t=>(null==t?void 0:t.id)!==(null==e?void 0:e.id))):z[k].concat(e);x(_(Object.assign({},z,{[k]:o}))),I(Object.assign({},z,{[k]:o}))},installmentQuantity:B}),i.createElement(U,null),i.createElement(re,{service:K,"data-testid":"troca-certa",onChange:(e,t)=>V(0,t,P),installmentQuantity:B}),i.createElement(U,null),i.createElement(ne,{service:H,"data-testid":"garantia-estendida",onChange:(e,t)=>V(0,t,S),installmentQuantity:B}),i.createElement(O.zx,{"data-testid":"financial-services-submit",m:"10px 0",color:"secondary",width:"100%",fontSize:1,onClick:()=>{Q(z).length?u(_(z)):u(null)},full:!0},Object.values(z).find((e=>e.length>0))?"Contratar serviço e ir para sacola":"Ir para sacola"),i.createElement(U,null),!!Q(z).length&&i.createElement(W,null,"Ao clicar em contratar serviço e ir para sacola você aceita as condições do seguro"," ",i.createElement("b",null,h)),i.createElement(U,null),i.createElement(q,{onClick:()=>y(!0),"data-testid":"robbery-theft-term-item"},i.createElement("p",null,l),i.createElement(r.olP,{width:"12px",height:"12px"})),i.createElement(q,{onClick:()=>$(!0),"data-testid":"extended-warranty-term-item"},i.createElement("p",null,d),i.createElement(r.olP,{width:"12px",height:"12px"})),!!Q(z).length&&i.createElement(q,{onClick:()=>R(!0),"data-testid":"payments-way-term-item"},i.createElement("p",null,c),i.createElement(r.olP,{width:"12px",height:"12px"})),i.createElement(U,null),i.createElement(G,{fontSize:0,fontWeight:"medium"},p),i.createElement(G,{fontSize:0,color:"scratched"},'Seguro garantido pela Cardif do Brasil Seguros e Garantias S/A, CNPJ: 08.279.191/0001-84, Processo Susep Nº 15414.900738/2014-98. Orientamos a leitura das condições gerais do seguro no link www.luizseg.com.br.  Representante de Seguro: Magazine Luiza S/A, CNPJ 47.960.950/0001-21. Corretora: Viotto Corretora de Seguros e Previdência LTDA, CNPJ 56.170.061/0001-51, Registro SUSEP 10.0059706. “Adesão Opcional”.  "A  contratação de seguro é opcional, sendo possível a desistência do contrato em até 7 (sete) dias corridos com a devolução integral do valor pago." "É proibido condicionar desconto no preço do bem à aquisição do seguro." Título de Capitalização garantido pela Capitalização: Icatu Capitalização S.A., CNPJ: 74.267.170/0001-73 Processo SUSEP: 15414.900051/2018-86. Ouvidoria Icatu Seguros: 0800 286 0047. Consulte o regulamento do sorteio no site: "http://www.icatuseguros.com.br". Modalidade: Incentivo. Prêmio no valor líquido de R$ 5.062,50. Promoção válida por 3 meses. Sorteios: Mensais a partir do último sábado do mês subsequente a adesão.  Consulte o regulamento no link egulamentos.bnpparibascardif.com.br.  "É proibida a venda de títulos de capitalização a menores de dezesseis ano - Art.3º, I do Código Civil".  "A comercialização de seguro é fiscalizada pela Susep. www.susep.gov.br - 0800 021 8484". "A aprovação do Plano pela Susep não implica, por parte da Autarquia, em incentivo ou recomendação à sua aquisição. "Caso não esteja satisfeito com a resposta fornecida pelo SAC, entre em contato com a Ouvidoria : 0800 727 2482 - Dias úteis, das 9h as 18 horas (horário de Brasilia) exceto feriados ou bnpparibascardif.com.br/ouvidoria.'),i.createElement(U,null),i.createElement(G,{fontSize:0,fontWeight:"medium"},g),i.createElement(G,{fontSize:0,color:"scratched"},'Seguro Garantia Estendida Original, orientamos a leitura das condições gerais do seguro no link www.luizaseg.com.br. Seguro garantido pela Luizaseg Seguros S/A, CNPJ: 07.746.953/0001-42, Processo Susep Nº 15414.900276/2014-17. Representante de Seguro: Magazine Luiza S/A, CNPJ 47.960.950/0001-21. Corretora: Viotto Corretora de Seguros e Previdência LTDA, CNPJ 56.170.061/0001-51, Registro SUSEP 10.0059706. “Adesão Opcional”. "A  contratação de seguro é opcional, sendo possível a desistência do contrato em até 7 (sete) dias corridos com a devolução integral do valor pago." "É proibido condicionar desconto no preço do bem à aquisição do seguro." Título de Capitalização garantido Capitalização: Icatu Capitalização S.A., CNPJ: 74.267.170/0001-73 Processo SUSEP: 15414.900051/2018-86. Ouvidoria Icatu Seguros: 0800 286 0047. Consulte o regulamento do sorteio no site: "http://www.icatuseguros.com.br". Modalidade: Incentivo. Prêmio no valor líquido de R$ 5.062,50. Promoção válida por 3 meses. Sorteios: Mensais a partir do último sábado do mês subsequente a adesão.  Consulte o regulamento no link regulamentos.bnpparibascardif.com.br.  "É proibida a venda de títulos de capitalização a menores de dezesseis ano - Art.3º, I do Código Civil".  "A comercialização de seguro é fiscalizada pela Susep. www.susep.gov.br - 0800 021 8484". "A aprovação do Plano pela Susep não implica, por parte da Autarquia, em incentivo ou recomendação à sua aquisição. "Caso não esteja satisfeito com a resposta fornecida pelo SAC, entre em contato com a Ouvidoria : 0800 727 2482 - Dias úteis, das 9h as 18 horas (horário de Brasilia) exceto feriados ou bnpparibascardif.com.br/ouvidoria.'))),i.createElement(he,{servicesSelected:z,showRobberyTerm:w,setShowRobberyTerm:y,showExtendedWarrantyTerm:Z,setShowExtendedWarrantyTerm:$,showPaymentsWay:A,setShowPaymentsWay:R}))};be.defaultProps={installment:{quantity:null},services:{image:""},visible:!0,timeTransition:.3,servicesPriority:[5,3,4],protectLabelAs:"p",onContinueClick:()=>({}),onCloseClick:()=>({}),onChange:()=>({}),showCloseButton:!0};var fe=be},49647:function(e,t,o){o.d(t,{Z:function(){return f}});var a=o(31461),n=o(2784),i=o(19476),r=o(99673),l=o(91489),s=o(63825),d=o(10200);let c=r.ZP.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.2;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  overflow: hidden;
  ${l.$_}
`,u=(0,r.ZP)(s.Z)`
  padding: 20px 8px;
  ${l.$_}
`,m=(0,r.ZP)(d.Z)`
  text-decoration: underline;
  font-size: unset;
  ${l.$_}
`,p=(0,r.ZP)(d.Z)`
  margin: 8px;
  text-decoration: underline;
  font-size: unset;
  ${l.$_}
`,g=r.ZP.address`
  padding: 20px 8px;
`,h=(0,r.ZP)(s.Z)`
  ${l.$_}
`;function b(e){let{footerData:t,strip:o,colors:r}=e,l=(0,a.Z)(e,["footerData","strip","colors"]),{rules:s="",address:d=[],policy:b={},links:f=[]}=t;return n.createElement(c,l,o&&n.createElement(i.D_,null),n.createElement(u,{"data-testid":"rules-line",color:r.rules},s),!(null==b||!b.label)&&!(null==b||!b.link)&&n.createElement(m,{"data-testid":"policy-line",target:"_blank",href:b.link,rel:null==b?void 0:b.rel,color:r.policy},b.label),!(null==f||!f.length)&&f.map((e=>n.createElement(p,{key:e.label,"data-testid":"link-line",target:"_blank",href:e.url,rel:null==e?void 0:e.rel,color:r.link},e.label))),n.createElement(g,null,d.map(((e,t)=>n.createElement(h,{key:t,"data-testid":"address-line",color:r.address},e)))))}b.defaultProps={footerData:{},bg:"background.primary",colors:{rules:"text.white",policy:"text.white",link:"text.white",address:"text.white"},strip:!0};var f=b},46671:function(e,t,o){o.d(t,{Z:function(){return D}});var a=o(7896),n=o(31461),i=o(2784),r=o(34490),l=o(56547),s=o(99673),d=o(91489),c=o(68054),u=o(19476);let m=(0,s.ZP)(u.D_)``,p=s.ZP.div.attrs((e=>Object.assign({bg:"background.primary"},e)))`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  ${d.$_}
  ${c.Dh}
`;p.ContentWrapper=s.ZP.div`
  width: 100%;
  /* TODO: USE A THEME SETTING HERE */
  max-width: 1312px;
`,p.Content=s.ZP.div.attrs((e=>Object.assign({pt:"4",pb:"3"},e)))`
  background-color: ${(0,d.dF)("primary")};
  ${c.Dh}
`,p.Bottom=s.ZP.div`
  display: flex;
  justify-content: center;
  background-color: ${(0,d.dF)("white")};
  width: 100%;
`,p.BottomContent=s.ZP.div.attrs((e=>Object.assign({maxWidth:"1000px",p:"3",lineHeight:"fontSize"},e)))`
  width: 100%;
  text-align: center;

  ${c.cp}
  ${c.bK}
  ${c.Dh}
`;let g=s.ZP.a`
  display: flex;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
`;g.Content=s.ZP.div`
  width: 100%;
  max-width: 990px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${(0,d.R)("baseColors.magablu.light")};
`,g.Title=s.ZP.p.attrs((e=>Object.assign({color:"text.lightest",fontSize:3},e)))`
  text-align: center;
  margin-bottom: 20px;
  ${d.$_}
  ${c.cp}
`,g.MethodsContainer=s.ZP.div`
  display: flex;
  justify-content: center;
`,g.MethodsContent=s.ZP.ul.attrs((e=>Object.assign({maxWidth:"620px"},e)))`
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 100%;
  ${c.bK}
`,g.Method=s.ZP.li`
  width: 35px;
`,g.MethodImage=(0,s.ZP)(u.Ee)``;let h=s.ZP.div`
  padding: 10px 0;
`;h.CertificatesContainer=s.ZP.div.attrs((e=>Object.assign({mb:"3"},e)))`
  display: flex;
  justify-content: center;
  ${c.Dh}
`,h.CertificatesContent=s.ZP.ul.attrs((e=>Object.assign({maxWidth:"990px",minWidth:"300px"},e)))`
  display: flex;
  list-style: none;
  justify-content: space-between;
  align-items: center;
  ${c.bK}
  ${c.cp}
`,h.Title=(0,s.ZP)(u.rU).attrs((e=>Object.assign({color:"text.lightest",p:0},e)))`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 120px;

  & > *:not(:first-child) {
    margin-left: ${(0,d.R)("space.2")}px;
  }
`,h.TitleLabel=s.ZP.span.attrs((e=>Object.assign({color:"text.lightest",fontSize:0,maxWidth:"70px"},e)))`
  ${c.bK}
  ${c.cp}
  ${d.$_}
`;let b=(0,s.ZP)(u.rU).attrs((e=>Object.assign({color:"text.lightest"},e)))``,f=s.ZP.div.attrs((e=>Object.assign({mb:"3"},e)))`
  display: flex;
  justify-content: center;
  ${c.Dh}
`;f.Content=s.ZP.div.attrs((e=>Object.assign({maxWidth:"620px"},e)))`
  width: 100%;
  ${c.bK}
`;let v=s.ZP.div`
  display: flex;
  justify-content: center;
`;v.SectionsList=s.ZP.ul.attrs((e=>Object.assign({maxWidth:"990px"},e)))`
  display: flex;
  justify-content: space-around;
  list-style: none;
  width: 100%;
  ${c.bK}
`,v.Column=s.ZP.li``,v.SectionTitle=s.ZP.p.attrs((e=>Object.assign({color:"text.lightest",fontSize:1,fontWeight:"regular"},e)))`
  padding: 10px;
  ${d.$_}
  ${c.cp}
`,v.LinksList=s.ZP.ul`
  display: inline-flex;
  writing-mode: vertical-lr;
  flex-wrap: wrap;
  align-content: flex-start;
  max-height: 270px;
  line-height: ${(0,d.R)("lineHeights.thin")}px;

  ${b} {
    font-size: ${(0,d.R)("fontSizes.0")}px;
    color: ${(0,d.R)("colors.lightBlue")};
  }
`,v.LinkItem=s.ZP.li`
  list-style: none;
  writing-mode: horizontal-tb;
  padding: 1px 0px;
`,v.Content=s.ZP.span.attrs((e=>Object.assign({gap:"12px"},e)))`
  &:not(:first-child) {
    margin-left: ${({gap:e})=>e};
  }
`,v.Text=s.ZP.div`
  ${c.bK}
  ${c.cp}
`,v.Image=(0,s.ZP)(u.Ee).attrs((e=>Object.assign({maxHeight:"12px"},e)))`
  width: auto;
`;let x=(0,s.ZP)(u.xv).attrs((e=>Object.assign({fontSize:0},e)))`
  padding: ${(0,d.R)("space.1")}px ${(0,d.R)("space.3")}px;
  color: ${(0,d.uu)("light")};
  ${c.cp}
  ${d.$_}
`,E=s.ZP.a`
  color: ${(0,d.uu)("light")};
`,C=s.ZP.div``,k="text.lightest",S=s.ZP.div.attrs((e=>Object.assign({color:k},e)))`
  padding: 10px;
  ${d.$_}
`,P=s.ZP.p.attrs((e=>Object.assign({fontSize:5},e)))`
  margin-bottom: 10px;
  line-height: 24px;
  ${c.cp}
`,w=s.ZP.p.attrs((e=>Object.assign({fontSize:0},e)))`
  margin-bottom: 10px;
  ${c.cp}
`,y=s.ZP.ul`
  list-style: none;
`,Z=s.ZP.li`
  display: flex;
  margin-bottom: 20px;
`,$=(0,s.ZP)(u.rU).attrs((e=>Object.assign({color:k,pl:1},e)))``,A=s.ZP.p.attrs((e=>Object.assign({color:k,fontSize:1,fontWeight:"regular"},e)))`
  padding: 1rem 0 10px 0;
  ${d.$_}
  ${c.cp}
`,R=s.ZP.ul`
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0.7rem;
`,O=(0,s.ZP)(u.Ee).attrs((e=>Object.assign({minHeight:"35px"},e)))`
  width: auto;
`;var z=({phone:e,openingHours:t,accessibility:o,mobileVersion:a,links:n,social:l})=>i.createElement(C,null,i.createElement(S,null,i.createElement(P,null,e),i.createElement(w,null,t),i.createElement(y,null,null==n?void 0:n.map(((e,t)=>i.createElement(Z,{key:t},i.createElement($,{href:e.url,title:e.title,p:0},e.label)))),o&&i.createElement(Z,null,i.createElement(r.yqN,{color:"currentColor"}),i.createElement($,{href:o.url,title:o.title},o.label)),a&&i.createElement(Z,null,i.createElement(r.MPk,{color:"currentColor"}),i.createElement($,{href:a.url,title:a.title},a.label))),null!=l&&l.links?i.createElement("div",null,i.createElement(A,null,l.title||"Siga para mais conteúdo:"),i.createElement(R,null,l.links.map((({url:e,img:t,label:o},a)=>i.createElement(Z,{key:a},i.createElement(u.rU,{href:e,target:"_blank",title:o},i.createElement(O,{src:t,alt:o}))))))):null));let I=(e={})=>{let{url:t,title:o,label:l}=e,s=(0,n.Z)(e,["url","title","label"]);return i.createElement(h.Title,(0,a.Z)({"data-testid":"certificates-title",title:o,href:t},s),i.createElement(r.$LW,{"data-testid":"certificates-title-icon",color:"currentColor"}),l&&i.createElement(h.TitleLabel,{"data-testid":"certificates-title-label"},l))},T=({url:e,title:t,gap:o,content:r=[]},l)=>i.createElement(b,{"data-testid":"link-item",href:e,title:t,px:"10px",onClick:t=>l(t,{url:e})},r.map(((r,s)=>{let{label:d,img:c}=r,u=(0,n.Z)(r,["label","img","iconId"]);return i.createElement(v.Content,{key:s,gap:o,onClick:t=>l(t,{url:e})},d&&i.createElement(v.Text,u,d),c&&i.createElement(v.Image,(0,a.Z)({src:c,alt:t},u)))})));function M({data:e,onSubmitSubscriptionForm:t,onMenuItemClick:o}){var n,r,s,d;let{paymentMethods:c={},certificatePartners:u={},linksColumns:b=[],contactSection:C={},bottomInfo:k={},subscriptionForm:S}=e;return i.createElement(p,{"data-testid":"footer-elem"},i.createElement(p.ContentWrapper,null,i.createElement(m,{size:5,position:"relative"}),i.createElement(p.Content,null,c&&i.createElement(g,{"data-testid":"payment-methods-container",href:c.link},i.createElement(g.Content,null,i.createElement(g.Title,null,c.label),i.createElement(g.MethodsContainer,null,i.createElement(g.MethodsContent,null,null==(n=c.list)?void 0:n.map(((e,t)=>i.createElement(g.Method,{"data-testid":"payment-option",key:t},i.createElement(g.MethodImage,{src:e.img,alt:e.title})))))))),i.createElement(h,null,i.createElement(h.CertificatesContainer,null,i.createElement(h.CertificatesContent,null,I(u.title),null==u||null==(r=u.certificates)?void 0:r.map(((e,t)=>i.createElement("li",{"data-testid":"certificate-partner",key:t},T(e,o)))),i.createElement("li",null,i.createElement("a",{id:"seloEbit",href:"http://www.ebit.com.br/552",rel:"noreferrer",target:"_blank","data-noop":"redir(this.href);"})),i.createElement("li",null,i.createElement("div",{id:"reputation-ra"}))))),S&&i.createElement(f,null,i.createElement(f.Content,null,i.createElement(l.ok,(0,a.Z)({onSubmitForm:t},S)))),i.createElement(v,null,i.createElement(v.SectionsList,null,b.map(((e,t)=>i.createElement(v.Column,{"data-testid":"link-column",key:t},e.map(((e,t)=>{let a=e.links;return i.createElement("div",{"data-testid":"link-section",key:t},i.createElement(v.SectionTitle,null,e.title),i.createElement(v.LinksList,null,a.map(((t,a)=>i.createElement(v.LinkItem,{key:`${e}-${a}`,onClick:e=>o(e,t)},T(t))))))}))))),C&&i.createElement(v.Column,{"data-testid":"link-column"},i.createElement(v.SectionTitle,null,C.label),i.createElement(z,C)))))),i.createElement(p.Bottom,null,i.createElement(p.BottomContent,null,null==(s=k.texts)?void 0:s.map(((e,t)=>i.createElement(x,{key:t,"data-testid":"bottom-info-text-line"},e))),null==(d=k.links)?void 0:d.map(((e,t)=>i.createElement(x,{key:t,"data-testid":"bottom-info-link-line"},e.label,": ",i.createElement(E,{href:e.url},e.url)))))))}M.defaultProps={data:{certificatePartners:{},linksColumns:[],contactSection:{},bottomInfo:{}},onMenuItemClick:()=>{}};var D=M},71782:function(e,t,o){o.d(t,{Z:function(){return b}});var a=o(2784),n=o(34490),i=o(99673),r=o(91489);let l=i.ZP.header``,s=i.ZP.div`
  background: ${e=>(0,r.R)("palette.background.primary")(e)};
  height: ${e=>(0,r.R)("sizes.header")(e)};
  color: #fff;
  padding: 5px 9px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    [id='logo'] {
      margin-top: 5px;
      width: 98px;
      height: 21px;
    }

    [id='button-burger'] {
      width: 22px;
      height: 22px;
    }
  }

  [id='search-container'] {
    margin-bottom: 5px;
  }
`,d=i.ZP.div`
  > a {
    position: absolute;
    right: 0px;
    top: 50%;
    transform: translateY(-50%);
  }
`,c=i.ZP.a`
  text-decoration: none;
`;i.ZP.input`
  width: 100%;
  border: 0px;
  height: 30px;
  background-color: #fff;
  color: #9b9b9b;
  font-size: 16px;
  padding-left: 10px;
  box-sizing: border-box;

  ::-webkit-search-cancel-button {
    background-color: #818181;
    position: relative;
    right: 10px;
  }
`;var u=o(19476),m=o(1756),p=o(56547),g=o(62452);function h({customSidebar:e,onCollapsedClick:t,onMenuHeaderClick:o,onMenuItemClick:i,onLogoClick:r,onLogout:h,onSearch:b,onShoppingBagClick:f,onTypeChange:v,onHeaderSuggestionLinkClick:x,onSuggestItemClick:E,onProductItemClick:C,onTopTermItemClick:k,onInputClear:S,onInputClose:P,onInputOpen:w,initialValue:y,data:Z,suggestData:$,logoProps:A,sideMenuOpen:R,topTermsData:O}){var z,I,T,M,D,j;let[L,F]=(0,a.useState)(R),{menuData:B,headerData:N,linksSuggestions:U}=Z;return a.createElement(l,null,a.createElement(s,null,a.createElement("header",null,a.createElement(p.hU,{name:"Burger",onClick:()=>F(!L)},a.createElement(n.OWX,{role:"button","aria-label":(null==N||null==(z=N.menu)?void 0:z.ariaLabel)||"abrir o menu","data-testid":"button-burger",id:"button-burger",color:"#fff"})),a.createElement(c,{onClick:e=>{var t;return r(e,{url:(null==N||null==(t=N.logo)?void 0:t.url)||"/"})},href:(null==N||null==(I=N.logo)?void 0:I.url)||"/",role:"link","data-testid":"logo","aria-label":(null==N||null==(T=N.logo)?void 0:T.ariaLabel)||"ir para página inicial"},a.createElement(u.TR,A)),a.createElement(d,null,a.createElement(c,{href:null==N||null==(M=N.shoppingBag)?void 0:M.url,onClick:f,role:"link","aria-label":(null==N||null==(D=N.shoppingBag)?void 0:D.ariaLabel)||"ir para sacola"},a.createElement(n.CKR,{id:"shoppingBag",color:"#fff",width:24,height:24})))),a.createElement(p.Mj,{onSearch:b,onInputClear:S,onSuggestItemClick:E,onProductItemClick:C,onTopTermItemClick:k,onTypeChange:v,onInputClose:P,onInputOpen:w,placeholder:null==N||null==(j=N.search)?void 0:j.placeholder,initialValue:y,list:$,topTerms:O})),a.createElement(g.f4,{data:U,onClick:x,isMobile:!0}),a.createElement(u.D_,{position:"relative"}),a.createElement(g.YE,{visible:L,bg:"base",onClickOutside:()=>F(!1)},e?(0,a.cloneElement)(e,{data:null==B?void 0:B.data}):a.createElement(m.Z,{data:null==B?void 0:B.data,onMenuHeaderClick:(e,t)=>{F(!1),o(e,t)},onMenuItemClick:(e,t,o)=>{F(!1),i(e,t,o)},onLogout:h,onCollapsedClick:t})))}h.defaultProps={customSidebar:void 0,suggestData:[],initialValue:"",logoProps:{},data:{headerData:{},menuData:{data:{header:{label:"",url:"",helpers:[]},moreInformation:[]}}},sideMenuOpen:!1,onCollapsedClick:()=>{},onMenuHeaderClick:()=>{},onMenuItemClick:()=>{},onLogoClick:()=>{},onLogout:()=>{},onInputClear:()=>{},onShoppingBagClick:()=>{},onSuggestItemClick:()=>{},onProductItemClick:()=>{},onInputClose:()=>{},onInputOpen:()=>{}};var b=h},42887:function(e,t,o){o.d(t,{Z:function(){return U}});var a=o(7896),n=o(2784),i=o(34490),r=o(99673),l=o(91489),s=o(68054),d=o(15566),c=o(56547),u=o(19476);let m=r.ZP.header.attrs((e=>Object.assign({bg:"background.primary",px:2},e)))`
  display: flex;
  justify-content: center;
  width: 100%;
  ${l.$_}
  ${s.Dh}
`,p=r.ZP.div`
  width: 100%;
  /* TODO: USE A THEME SETTING HERE */
  max-width: 1366px;
  position: relative;
  display: grid;
  grid-template-columns: 95px 140px 1fr;
  grid-template-areas:
    '. . links'
    'lu logo widgets'
    'lu menus menus'
    'strip strip strip';
`,g=(0,r.ZP)(u.rU)`
  grid-area: lu;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`,h=(0,r.ZP)(u.rU).attrs((e=>Object.assign({mr:3},e)))`
  grid-area: logo;
  display: flex;
  align-items: center;
  cursor: pointer;

  /* Fine tuning: this padding aligns the logo with the search bar vertically */
  padding-bottom: 8px;

  ${s.Dh}
`,b=(0,r.ZP)(d.Z).attrs((()=>({width:138,height:30})))``,f=r.ZP.div.attrs((e=>Object.assign({my:3},e)))`
  grid-area: links;
  display: flex;
  justify-content: space-between;
  ${s.Dh}
`,v=r.ZP.div.attrs((e=>Object.assign({mb:3},e)))`
  grid-area: widgets;
  display: flex;
  align-items: center;

  ${s.Dh}
`,x=r.ZP.div`
  flex-grow: 1;
  margin-top: ${e=>e.hasSibling?"25px;":"0px;"};
`,E=(0,r.ZP)(c.Rs).attrs((e=>Object.assign({backgroundColor:(0,l.dF)("primary")(e),iconColor:(0,l.uu)("white")(e),fontColor:(0,l.uu)("white")(e),counterColor:"#db44a7"},e)))``,C=(0,r.ZP)(c.kV).attrs((e=>Object.assign({backgroundColor:(0,l.dF)("primary")(e),iconColor:(0,l.uu)("white")(e),fontColor:(0,l.uu)("white")(e),counterColor:"#58c22e"},e)))``,k=r.ZP.div`
  width: 100%;
  grid-area: menus;
`,S=r.ZP.div.attrs((e=>Object.assign({mx:3},e)))`
  width: 150px;
  ${s.Dh}
`,P=(0,r.ZP)(u.rU).attrs((e=>Object.assign({mx:1},e)))`
  height: 45px;
  width: 60px;
  ${s.Dh}
`,w=(0,r.ZP)(u.D_).attrs((e=>Object.assign({},e)))`
  grid-area: strip;
`;var y=o(62452),Z=o(31461),$=o(64586);let A=(0,r.ZP)(u.rD).attrs((e=>Object.assign({backgroundColor:"#fffce6"},e)))`
  z-index: ${(0,l.R)("zIndices.0")};
`,R=(0,r.ZP)(u.xv).attrs((e=>Object.assign({fontSize:2,fontWeight:"bold",lineHeight:"display",mb:2},e)))`
  color: ${e=>(0,l.ow)("primary.dark")(e)};

  ${s.cp}
`,O=(0,r.ZP)(u.xv).attrs((e=>Object.assign({fontSize:1,lineHeight:"display"},e)))`
  color: ${e=>(0,l.ow)("primary.dark")(e)};

  ${s.cp}
`,z=(0,r.ZP)(i.JO$).attrs((e=>Object.assign({fill:"primary.dark"},e)))``,I=(0,r.ZP)(u.xv).attrs((e=>Object.assign({fontSize:2,fontWeight:"bold",justifySelf:"flex-end",mb:2,mt:3,mr:2},e)))`
  color: ${e=>(0,l.ow)("primary.dark")(e)};

  cursor: pointer;
`,T=(0,r.ZP)(u.rj).attrs((e=>Object.assign({pl:2},e)))`
  max-width: 364px;
`,M=(0,r.ZP)(u.kC).attrs((e=>Object.assign({alignItems:"center",gap:2,px:2,py:3},e)))`
  color: ${e=>(0,l.ow)("primary.dark")(e)};

  max-width: 384px;
`,D=(0,r.ZP)(u.xu).attrs((e=>Object.assign({width:"fit-content"},e)))`
  align-self: baseline;
  justify-self: end;
`,j=r.ZP.div.attrs((e=>Object.assign({ml:1,mr:3},e)))`
  width: 200px;
  transition: all 0.2s ease-in-out;
  &:hover:not(:disabled) {
    transform: scale(1.1);
  }
  ${s.Dh}
`;function L({onClick:e}){return n.createElement(D,{"data-testid":"close-btn",onClick:e},n.createElement(z,{name:"Close",width:24,height:24,cursor:"pointer","data-testid":"close"}))}let F=e=>{let{onZipCodeClick:t,onClickPopperBtn:o,onClosePopper:i,popperDisplay:r,popper:l}=e,s=(0,Z.Z)(e,["onZipCodeClick","onClickPopperBtn","onClosePopper","popperDisplay","popper"]),d=(0,n.useRef)(null),{enabled:m,info:{title:p,content:g,buttonLabel:h}={},success:{title:b,content:f}={}}=l;return n.createElement(n.Fragment,null,n.createElement(j,{"data-testid":"zipcode-text-container",onClick:t,ref:d},n.createElement(c.YQ,(0,a.Z)({},s,{formatter:$.kC}))),m&&n.createElement(A,{visible:!!r,parentRef:d},"success"===r?n.createElement(M,{"data-testid":"popper-success-container"},n.createElement(z,{name:"DoneCircle",width:32,height:32,fill:"alert.success.text","data-testid":"DoneCircle"}),n.createElement(u.xu,null,n.createElement(R,null,b),n.createElement(O,null,f)),n.createElement(L,{onClick:i})):n.createElement(T,{"data-testid":"popper-info-container"},n.createElement(L,{onClick:i}),n.createElement(R,null,p),n.createElement(O,null,g),n.createElement(I,{"data-testid":"popper-btn",onClick:o},h))))};F.defaultProps={popper:{enabled:!1}};var B=F;let N=({data:e,searchSuggestions:t,topTermsData:o,initialValue:r,logoProps:l,logoLuProps:s,onInputClose:d,onInputOpen:u,onSuggestItemClick:Z,onProductItemClick:$,onTopTermItemClick:A,onHeaderSuggestionLinkClick:R,onZipCodeClick:O,onClickPopperBtn:z,onClosePopper:I,popperDisplay:T,onSearch:M,onTypeSearch:D,onLogout:j,onLogoClick:L,onMenuItemClick:F})=>{var N,U,q,G,W,H;let{account:J,headerData:K,companyLinks:_,contactLinks:V,login:Q,wishlist:Y,bag:X,zipcode:ee,linksSuggestions:te}=e,oe=(e,t)=>{F(e,t)};return n.createElement(m,{"data-testid":"header-elem"},n.createElement(p,null,n.createElement(g,{href:(null==K||null==(N=K.logo)?void 0:N.url)||"/",role:"link","aria-label":(null==K||null==(U=K.logo)?void 0:U.ariaLabel)||"ir para página inicial",onClick:L,"data-testid":"logo-lu-magalu"},s?n.createElement(i.RdR,s):n.createElement(i.he$,{width:95,height:113})),n.createElement(h,{href:(null==K||null==(q=K.logo)?void 0:q.url)||"/",role:"link","aria-label":(null==K||null==(G=K.logo)?void 0:G.ariaLabel)||"ir para página inicial",onClick:L,"data-testid":"logo-magalu"},n.createElement(b,l)),n.createElement(f,null,n.createElement(c.pl,{data:_}),n.createElement(c.pl,{data:V})),n.createElement(v,null,n.createElement(x,{hasSibling:(null==te||null==(W=te.links)?void 0:W.length)>1},n.createElement(c.Mj,{initialValue:r,onSearch:M,onTypeChange:D,onSuggestItemClick:Z,onProductItemClick:$,onTopTermItemClick:A,onInputClose:d,onInputOpen:u,placeholder:null==K||null==(H=K.search)?void 0:H.placeholder,list:t.terms,products:t.products,desktopMode:!0,topTerms:o,onMenuItemClick:oe}),n.createElement(y.f4,{data:te,onClick:R})),n.createElement(S,null,n.createElement(c.RG,(0,a.Z)({},Q,J,{onLogout:j}))),(null==ee?void 0:ee.showZipcode)&&n.createElement(B,(0,a.Z)({},ee,{popperDisplay:T,onZipCodeClick:O,onClickPopperBtn:z,onClosePopper:I})),n.createElement(P,{href:null==Y?void 0:Y.href,"data-testid":"wishlist-button-container"},n.createElement(E,(0,a.Z)({truncateAmountThreshold:99},Y))),n.createElement(P,{href:null==X?void 0:X.href,"data-testid":"bag-button-container"},n.createElement(C,(0,a.Z)({truncateAmountThreshold:99},X)))),n.createElement(k,null,n.createElement(y.DH,{data:e,onMenuItemClick:oe})),n.createElement(w,{size:5,position:"relative"})))};N.defaultProps={data:{account:{},headerData:{},companyLinks:{},contactLinks:{},categoryList:{},specialLinks:[],externalLinks:[],allCategories:{},login:{},wishlist:{},bag:{}},searchSuggestions:{terms:[],products:[]},logoProps:{},initialValue:"",onInputClose:()=>{},onInputOpen:()=>{},onLogout:()=>{},onSuggestItemClick:()=>{},onProductItemClick:()=>{},onTopTermItemClick:()=>{},onZipCodeClick:()=>{},onMenuItemClick:()=>{},onHeaderSuggestionLinkClick:()=>{}};var U=N},95949:function(e,t,o){o.d(t,{fh:function(){return u},X6:function(){return J},ZP:function(){return fe}});var a=o(2784),n=o(77766),i=o(70615),r=o(7896),l=o(31461),s=o(34490);let d=(0,a.createContext)(),c=()=>(0,a.useContext)(d);var u=e=>{let{children:t}=e,o=Object.assign({},e.value);return a.createElement(d.Provider,{value:Object.assign({},o)},t)},m=o(99673),p=o(68054),g=o(91489),h=o(7029),b=o(19476);let f=m.ZP.footer`
  background-color: ${e=>(0,g.dF)("luContentPrimary")(e)};
`,v=m.ZP.p`
  color: ${e=>(0,g.uu)("lightest")(e)};
  font-size: ${e=>(0,g.R)("fontSizes.0")(e)}px;
  text-align: center;
  padding-top: 12px;
`,x=m.ZP.div``,E=m.ZP.a`
  cursor: pointer;
`,C=m.ZP.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 16px 2em;
`,k=(0,m.ZP)(h.Z)`
  max-width: 109px;
  max-height: 20px;
`,S=(0,m.ZP)(s.s1S).attrs((e=>({color:(0,g.dF)("luContentPrimary")(e)})))``,P=(0,m.ZP)(s.tLe).attrs((e=>({color:(0,g.dF)("luContentPrimary")(e)})))``,w=(0,m.ZP)(s.mre).attrs((e=>({color:(0,g.dF)("luContentPrimary")(e)})))``,y=(0,m.ZP)(s.nzZ).attrs((e=>({color:(0,g.dF)("luContentPrimary")(e)})))``,Z=m.ZP.div`
  background-color: ${e=>(0,g.dF)("base")(e)};
  width: 20px;
  height: 20px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
    width: 12px;
  }
`,$=e=>{let{onBlogClick:t,onSocialMediaClick:o}=e,n=(0,l.Z)(e,["onBlogClick","onSocialMediaClick"]),{blogImage:i,blogLabel:r,links:{blog:s,facebook:d,twitter:u,instagram:m,pinterest:p}}=c();return a.createElement(f,n,a.createElement(v,null,a.createElement("strong",null,"Lu do Magalu")," ","nas redes sociais"," ",""),a.createElement(C,null,a.createElement(x,{onClick:t},a.createElement(E,{href:s},a.createElement(k,{src:i,alt:r,lazy:!0}))),a.createElement(a.Fragment,null,[{id:"facebook",icon:S,link:d},{id:"twitter",icon:P,link:u},{id:"instagram",icon:w,link:m},{id:"pinterest",icon:y,link:p}].filter((({link:e})=>Boolean(e))).map((({icon:e,link:t,id:n})=>a.createElement(x,{key:n},a.createElement(E,{"data-testid":"social-links",href:t,onClick:e=>o(e,{id:n,link:t})},a.createElement(Z,null,a.createElement(e,{title:`${n} logo`})))))))))};$.defaultProps={blogImage:"",blogLabel:"Blog da Lu",onBlogClick:()=>{},onSocialMediaClick:()=>{}};var A=$;let R=m.iv`
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  ${(0,g.aK)("medium")} {
    border-radius: 4px;
  }
`,O=(0,m.ZP)(b.rj).attrs((()=>({bg:"background.luContentPrimary",w:1})))`
  min-height: 83px;
  ${e=>!e.showBackButton&&!e.borderRadius&&R}
  grid-template-columns: 1fr 4fr 1fr;

  ${(0,g.aK)("medium")} {
    display: flex;
    align-items: center;
    min-height: 80px;
  }

  ${p.Cg}
  ${p.E0}
`,z=(0,m.ZP)(b.xu)`
  margin-top: 14px;
  margin-left: 10px;

  ${(0,g.aK)("large")} {
    margin-top: 0;
  }
`,I=(0,m.ZP)(b.kC).attrs((()=>({pl:[null,null,null,3]})))`
  ${(0,g.aK)("small")} {
    align-items: flex-end;
    align-self: flex-end;
    width: 100%;
  }
`,T=(0,m.ZP)(A)`
  ${(0,g.aK)("medium")} {
    margin: 1em ${(0,g.R)("space.3")}px 1em auto;
    min-width: 269px;

    > p {
      display: none;
    }

    > div {
      padding: unset;
    }
  }
`,M=(0,m.ZP)(h.Z)`
  width: 75px;
  max-height: 87px;
  margin-top: -5px;
`,D=(0,m.ZP)(b.kC).attrs({flexDirection:"column",justifyContent:"center",ml:"10px"})`
  ${(0,g.aK)("medium")} {
    align-self: center;
  }
`,j=(0,m.ZP)(h.Z)`
  ${(0,g.aK)("medium")} {
    height: 32px;
    width: auto;
  }
`,L=(0,m.ZP)(b.xv).attrs((()=>({color:"text.lightest",fontWeight:"bold",fontSize:3,lineHeight:"display",forwardedAs:"h2"})))`
  text-align: center;
  margin-top: 8px;

  ${e=>e.tiny&&m.iv`
      font-size: ${(0,g.R)("fontSizes.0")(e)}px;
      text-align: left;
      width: 190px;
      ${(0,g.aK)("medium")} {
        font-size: ${(0,g.R)("fontSizes.2")(e)}px;
        width: 100%;
      }
    `}
`,F=(0,m.ZP)(b.rU).attrs((()=>({color:"text.lightest",fontSize:0})))`
  margin-top: 10px;
  text-decoration: underline;
`,B=e=>{let{title:t,subtitle:o,showBackButton:n,onBackButtonClick:i,linkToMoreContentLabel:d,showLinkToMoreContent:u,showSocialMedias:m,onSocialMediaClick:p,iconName:g}=e,h=(0,l.Z)(e,["title","subtitle","showBackButton","onBackButtonClick","linkToMoreContentLabel","showLinkToMoreContent","showSocialMedias","onSocialMediaClick","iconName"]),{images:{luImage:b,luExplainImage:f}={},linkToMoreContent:v}=c()||{};return a.createElement(a.Fragment,null,a.createElement(O,(0,r.Z)({showBackButton:n,"data-testid":"lu-explain-header-container"},h),a.createElement(z,null,n&&a.createElement(s.JO$,{name:g,color:"#ffffff","data-testid":"lu-header-close",role:"button",title:"Voltar",tabIndex:"1",onClick:i,cursor:"pointer"})),a.createElement(I,null,a.createElement(M,{src:b,alt:"personagem Lu do magazineluiza apontando para o logo lu explica",width:60,height:80,lazy:!0}),a.createElement(D,null,a.createElement(j,{src:f,alt:"Lu Explica",width:127,height:24,lazy:!0}),a.createElement(L,{tiny:!!o},o||t),u&&a.createElement(F,{"data-testid":"lu-explain-more-content",href:v},d)),m&&a.createElement(T,{onSocialMediaClick:p}))))};B.defaultProps={title:"",subtitle:null,showBackButton:!1,onBackButtonClick:()=>{},linkToMoreContentLabel:"+ Veja outros conteúdos",showLinkToMoreContent:!1,showSocialMedias:!1,onSocialMediaClick:()=>{},iconName:"ArrowBack"};var N=B,U=o(84546);let q=U.Z,G=(0,m.ZP)(U.Z)`
  padding: 0 14px 14px 14px;
  img {
    width: 100% !important;
    height: auto !important;
  }
  p {
    margin-block-start: 1em;
    margin-block-end: 1em;
    line-height: 20px;
  }
  a {
    color: ${e=>(0,g.uu)("primary")(e)};
    text-decoration: none;
  }
`,W=({children:e,title:t,visible:o,onBackButtonClick:r,direction:l})=>"center"===l?a.createElement(n.Z,{title:t,visible:o,onClickOutside:r,position:"center",p:"unset",my:"4em"},a.createElement("div",{style:{width:"100%"}},e)):a.createElement(i.Z,{direction:l,title:t,visible:o,onClickOutside:r,fullScreen:!0},e),H=({direction:e,title:t,subtitle:o,content:n,onBackButtonClick:i,images:r,visible:l,iconHeaderClose:s})=>a.createElement(u,{value:{images:r}},a.createElement(W,{direction:e,title:t,visible:l,onBackButtonClick:i},a.createElement(N,{title:t,subtitle:o,showBackButton:!0,onBackButtonClick:i,iconName:s}),a.createElement(G,{"data-testid":"lu-detail-content"},a.createElement(q,{dangerouslySetInnerHTML:{__html:n}}))));H.defaultProps={direction:"right",content:"",images:{},onBackButtonClick:()=>{},subtitle:null,title:"",visible:!1,iconHeaderClose:"ArrowBack"};var J=H,K=o(19527);let _=m.ZP.div`
  ${({isVerticalView:e})=>e&&m.iv`
      margin: 36px 8px 20px;
      box-shadow: rgb(0 0 0 / 11%) 0px 1px 10px 0px;
    `}
`,V=(0,m.ZP)(K.Z).attrs((e=>Object.assign({bg:"background.white"},e)))``;var Q=o(56547),Y=o(63825),X=o(25610);let ee=m.ZP.a`
  text-decoration: none;
  cursor: pointer;
  ${e=>e.hide&&"display: none;"}
  ${(0,g.aK)("medium")} {
    width: calc(25% - ${7}px);
    &:not(:last-child) {
      margin-right: ${28}px;
    }
  }
`,te=m.ZP.article`
  background-color: ${e=>(0,g.dF)("lighter")(e)};
  border-top: 1px solid ${e=>(0,g.dF)("darker")(e)};
  display: grid;
  padding: 16px;
  width: 100%;
  ${({vertical:e})=>!e&&"grid-template-columns: auto 1fr;"}
  ${({vertical:e})=>e&&m.iv`
      justify-items: left;
      padding: 16px 0px;
    `}
`,oe=m.ZP.div`
  width: 100%;
  ${({vertical:e})=>!e&&"margin-right: 20px;"}
`,ae=(0,m.ZP)(h.Z)`
  width: 77px;
  border-radius: 4px;
  border: 1px solid ${e=>(0,g.uu)("lighter")(e)};

  ${({cover:e})=>e&&m.iv`
      object-fit: cover;
      height: 77px;
    `}

  ${({vertical:e})=>e&&m.iv`
      min-width: 300px;
      width: 100%;
      height: auto;
      max-height: 500px;
      object-fit: fill;

      ${(0,g.aK)("medium")} {
        max-height: 500px;
        min-height: 168px;
        min-width: 224px;
        height: calc(
          900px /
            ${({variation:e,itemsSize:t})=>"horizontal-highlight"===e?t:4}
        );
        border-radius: 8px;
        object-fit: cover;
      }
    `}
`,ne=m.iv`
  margin-top: 10px;
  width: 250px;

  ${(0,g.aK)("large")} {
    max-width: 224px;
  }
`,ie=m.ZP.div`
  display: grid;
  grid-template-columns: auto 1fr;
  margin-top: ${({cover:e})=>e?"8px":"0px"};
  ${({vertical:e})=>e&&ne}
`,re=m.ZP.div``,le=(0,m.ZP)(X.Z).attrs((()=>({fontSize:[1,1,3,3]})))`
  color: ${e=>(0,g.uu)("luContentLink")(e)};
  font-weight: ${e=>(0,g.R)("fontWeights.medium")(e)};
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
`,se=(0,m.ZP)(Y.Z).attrs((()=>({fontSize:[0,0,1,1]})))`
  margin-top: 8px;
  color: ${e=>(0,g.uu)("base")(e)};
  line-height: ${e=>(0,g.R)("lineHeights.plus")(e)}px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  ${p.cp}
`,de={article:"Blog",video:"Video",podcast:"Podcast"},ce=({data:e,cover:t,vertical:o,hide:n,onItemClick:i,dataTestId:r,itemsSize:l,variation:d})=>{let{type:c="article",title:u,subtitle:m,image:p,url:g}=e;if(!u||!m)return a.createElement(a.Fragment,null);let h=de[c]||"Blog";return a.createElement(ee,{role:"button",href:g,target:g&&"_blank","data-testid":r||"lu-item",onClick:t=>i(t,e),"aria-label":`Abre o conteúdo do post ${u}`,hide:n},a.createElement(te,{"data-testid":"lu-item-content",vertical:o},a.createElement(oe,{vertical:o},a.createElement(ae,{src:p,alt:u,vertical:o,cover:t,itemsSize:l,variation:d,lazy:!0})),a.createElement(ie,{vertical:o,cover:t,"data-testid":"article-content"},a.createElement(s.JO$,{title:`logo ${c}`,name:h}),a.createElement(re,null,a.createElement(le,{as:"h3"},u),a.createElement(se,null,m)))))};ce.defaultProps={data:{},vertical:!1,cover:null,onItemClick:()=>{},hide:!1,dataTestId:"",itemsSize:1};var ue=ce;let me=(e=[])=>Array.isArray(e)&&0!==e.length?e.reduce(((e,t=[],o)=>[...e,...t.map(((e,t)=>Object.assign({},e,{parentIdx:o,idx:t})))]),[]):[];var pe=o(60861);var ge=({onItemClick:e})=>{let{data:t}=c(),o=me(t);return a.createElement(a.Fragment,null,null==o?void 0:o.map((t=>a.createElement(ue,{key:t.id,data:t,onItemClick:e}))))};let he={carousel:({onItemClick:e})=>{let[t,o]=a.useState(0),{data:n}=c(),i=me(n),r=i.filter((e=>0===e.idx));return a.createElement(a.Fragment,null,a.createElement(Q.lr,{bg:"background.lighter",slidesPerView:1,showPartial:!0,transitionDuration:700,auto:!1,showControls:!1,gutter:16,onChange:e=>o(e)},r.map((t=>a.createElement(ue,{key:t.id,vertical:!0,data:t,onItemClick:e})))),i.filter((e=>0!==e.idx)).map((o=>{let n=o.parentIdx!==t;return a.createElement(ue,{key:o.id,data:o,hide:n,dataTestId:n?"item-hidden":"",cover:!0,onItemClick:e})})))},horizontal:({onItemClick:e,onLoadMoreClick:t})=>{let{data:o,linkToMoreContent:n,hide:i}=c(),r=me(o);return a.createElement(a.Fragment,null,a.createElement(V,{itemsSize:r.length},r.map((t=>a.createElement(ue,{key:t.id,vertical:!0,data:t,onItemClick:e,itemsSize:r.length})))),a.createElement(K.Z,{justifyContent:"center",p:3},a.createElement(pe.Z,{as:"a",variation:"outline",color:"luContent",centered:!0,uppercase:!1,href:n,onClick:t,hide:i},"Veja outros conteúdos")))},"horizontal-highlight":({onItemClick:e,onLoadMoreClick:t})=>{let{data:o,linkToMoreContent:n}=c(),i=me(o),r=i.filter((e=>0===e.idx)),l=i.filter((e=>0!==e.idx));return a.createElement(U.Z,{bg:"background.lighter"},a.createElement(V,{itemsSize:r.length,padding:"0 10px"},r.map(((t,o)=>a.createElement(U.Z,{key:t.id,marginRight:r.length-1===o?"0px":"28px",width:"100%"},a.createElement(ue,{vertical:!0,itemsSize:r.length,data:t,onItemClick:e,variation:"horizontal-highlight"}),(e=>l.filter((t=>t.parentIdx===e.parentIdx)))(t).map((t=>a.createElement(ue,{key:t.id,data:t,cover:!0,onItemClick:e,variation:"horizontal-highlight"}))))))),a.createElement(K.Z,{justifyContent:"center",p:3},a.createElement(pe.Z,{as:"a",variation:"outline",color:"luContent",centered:!0,uppercase:!1,href:n,onClick:t},"Veja outros conteúdos")))},vertical:ge},be=({variation:e,title:t,linkToMoreContent:o,showLinkToMoreContent:n,data:i,assets:l,onItemClick:s,onSocialMediaClick:d,onLoadMoreClick:c,showHeaderSocialMedia:m})=>{let p="carousel"===e,{links:g,images:h}=l,b=(null==he?void 0:he[e])||ge;return a.createElement(u,{value:{images:h,data:i,links:g,linkToMoreContent:o}},a.createElement(_,{isVerticalView:"vertical"===e},a.createElement(N,(0,r.Z)({},p?{subtitle:t,borderRadius:0}:{title:t},{showLinkToMoreContent:n,onSocialMediaClick:d,showSocialMedias:m})),a.createElement(b,{onItemClick:s,onLoadMoreClick:c,variation:e}),p&&a.createElement(A,{onSocialMediaClick:d})))};be.defaultProps={showDetailModal:!0,showLinkToMoreContent:!1,data:{articles:[],videos:[],podcasts:[]},detailDirection:"right",assets:{images:{luImage:"",luExplainImage:"",blogImage:""}},onSocialMediaClick:()=>{},showHeaderSocialMedia:!1};var fe=be},4294:function(e,t,o){o.d(t,{Z:function(){return k}});var a=o(7896),n=o(2784),i=o(19476),r=o(62452),l=o(99673),s=o(91489),d=o(84546),c=o(7029),u=o(63825);let m=l.ZP.div`
  background-color: ${e=>(0,s.dF)("white")(e)};
  padding: 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${(0,s.aK)("large")} {
    padding: 0;
  }
`,p=(0,l.ZP)(d.Z)`
  border-bottom: 3px solid ${e=>(0,s.kJ)("light")(e)};
  width: 100%;
`,g=(0,l.ZP)(d.Z)`
  display: flex;
  align-items: center;

  ${(0,s.aK)("large")} {
    &,
    & + div {
      display: none;
    }
  }
`,h=(0,l.ZP)(u.Z)`
  margin-bottom: 16px;
  font-size: ${e=>(0,s.R)("fontSizes.3")(e)}px;
  font-weight: ${e=>(0,s.R)("fontWeights.medium")(e)};

  ${(0,s.aK)("large")} {
    align-self: self-start;
  }
`,b=(0,l.ZP)(d.Z)`
  ${(0,s.aK)("large")} {
    align-self: self-end;
    padding: 12px;
  }
`,f=l.ZP.ul`
  width: 100%;
`,v=l.ZP.button`
  outline: none;
  border-radius: 2px;
  padding: 10px 15px;
  height: 48px;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  line-height: 1.5;
  width: 250px;
  margin-bottom: 10px;

  font-size: ${e=>(0,s.R)("fontSizes.1")(e)}px;
  background-color: ${e=>(0,s.dF)("white")(e)};
  border-color: ${e=>(0,s.kJ)("base")(e)};
  color: ${e=>(0,s.uu)("base")(e)};
  text-transform: uppercase;
  border: 1px solid ${e=>(0,s.kJ)("light")(e)};
`,x=(0,l.ZP)(u.Z)`
  max-width: 200px;
  margin-left: 10px;
  font-size: ${e=>(0,s.R)("fontSizes.1")(e)}px;
  color: ${e=>(0,s.uu)("base")(e)};
  line-height: ${e=>(0,s.R)("lineHeights.plus")(e)}px;

  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
`,E=(0,l.ZP)(c.Z)`
  width: ${e=>e.width}px;
  height: ${e=>e.height}px;
`;function C({productData:e,reviewsData:t,onViewMoreClick:o,onChangeSort:l,showDesktop:s}){let{title:d,image:c}=e||{},{stats:u={},reviews:C=[],sorts:k=[],pagination:S={}}=t||{},P=null==k?void 0:k.map((({label:e,type:t,orientation:o,selected:a})=>({label:e,selected:a,value:`${t}-${o}`}))),w=e=>{if(e){let[t,o]=e.split("-"),a=null==k?void 0:k.find((({type:e,orientation:a})=>e===t&&a===o));l(a)}};return n.createElement(n.Fragment,null,n.createElement(g,{p:"16px"},n.createElement(E,{src:c,width:50,height:50}),n.createElement(x,null,d)),n.createElement(p,null),n.createElement(m,null,n.createElement(p,{m:"16px 0px",display:["none","block"]}),n.createElement(h,null,"Avaliação geral"),n.createElement(r.Ym,u),n.createElement(p,{m:"16px 0px"}),!s&&n.createElement(b,null,n.createElement(i.Ph,{id:"review-result",options:P,onChange:w,mb:20,"data-testid":"review-sort"})),s&&n.createElement(b,null,n.createElement(i.Ph,{id:"review-result",options:P,onChange:w,mb:20,"data-testid":"review-sort",desktopMode:!0,textLabel:"Ordenar avaliações:"})),n.createElement(f,null,null==C?void 0:C.map(((e,t)=>n.createElement(r.Ak,(0,a.Z)({key:`review-${t}`},e))))),(null==S?void 0:S.page)<(null==S?void 0:S.pages)&&n.createElement(v,{"data-testid":"review-more",onClick:o},"Carregar Mais")))}C.defaultProps={showDesktop:!1};var k=C},1756:function(e,t,o){o.d(t,{Z:function(){return C}});var a=o(2784),n=o(2490),i=o(78012),r=o(19476),l=o(91489),s=o(99673),d=o(68054),c=o(84546),u=o(10200);let m=(0,s.ZP)(c.Z).attrs((()=>({backgroundColor:"background.base",paddingBottom:5})))``,p=s.ZP.nav`
  ${d.e6}
  padding: 0 ${e=>(0,l.R)("space.2")(e)}px;
`,g=(0,s.ZP)(u.Z).attrs((()=>({backgroundColor:"primary.base",color:"text.lightest",paddingTop:3,paddingBottom:5,marginBottom:-5})))``,h=s.ZP.small`
  font-family: ${(0,l.R)("fontFamily")};
  display: block;
  margin: ${e=>(0,l.R)("space.1")(e)}px
    ${e=>(0,l.R)("space.2")(e)}px;
`,b=s.ZP.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30px, max-content));
  justify-content: center;
  grid-gap: ${e=>(0,l.R)("space.4")(e)}px;
`;var f=o(93168);let v=({data:e,onMenuHeaderClick:t})=>{var o,n;let i=(null==(o=e.subtitles)?void 0:o.length)>0;return a.createElement(r.xu,{bg:"background.primary","data-testid":"sidebar-header"},a.createElement(r.ck,{scale:"medium",endIcon:"ChevronRight",fontWeight:"medium",variant:"primary",as:"a",ellipsis:null==e?void 0:e.ellipsis,href:null==e?void 0:e.url,rel:null==e?void 0:e.rel,onClick:o=>t(o,{url:null==e?void 0:e.url})},null==e?void 0:e.label),i&&e.subtitles.map((e=>a.createElement(h,{key:e},e))),a.createElement(f.Z,{variant:"primary"},null==e||null==(n=e.helpers)?void 0:n.map(((e,o)=>a.createElement(f.Z.Item,{key:o,href:null==e?void 0:e.url,rel:null==e?void 0:e.rel,startIcon:null==e?void 0:e.id,onClick:o=>t(o,e)},null==e?void 0:e.label)))))};v.defaultProps={onMenuHeaderClick:()=>{}};var x=v;let E=e=>{var t,o,l,s,d,c,u;let{account:h,actionButtons:f,categoryList:v,externalLinks:E,header:C,helperText:k,moreInformation:S,services:P,showcaseLinks:w,groupedLinks:y,social:Z}=(null==e?void 0:e.data)||{},{onCollapsedClick:$,onMenuHeaderClick:A,onMenuItemClick:R,onLogout:O}=e,[z,I]=(0,a.useState)(!0),[T,M]=(()=>{if(Array.isArray(k)){let[e,...t]=k;return[e,t]}return[k||"",[]]})();return a.createElement(m,null,C&&a.createElement(x,{data:C,onMenuHeaderClick:A}),a.createElement(p,null,!(null==w||!w.length)&&a.createElement(n.Z,{directionType:"column",items:w}),(null==y?void 0:y.map(((e,t)=>a.createElement(r.xu,{bg:"white",borderRadius:4,marginBottom:10,marginTop:10,key:t},a.createElement(i.Z,{divided:!0},e.map(((e,t)=>a.createElement(i.Z.Item,{key:t,as:"a",href:null==e?void 0:e.url,rel:null==e?void 0:e.rel,onClick:t=>R(t,e),startIcon:e.startIcon,fill:"background.primary"},null==e?void 0:e.label))))))))||null,!(null==v||null==(t=v.list)||!t.length)&&a.createElement(r.xu,{bg:"white",borderRadius:4},a.createElement(i.Z.Collapse,{trigger:z,collapsedIn:null==v?void 0:v.show,renderAction:z&&a.createElement(i.Z.Action,{endIcon:"ChevronDown",fontWeight:"medium",onClick:()=>{$(),I(!z)}},null==v?void 0:v.collapseText),divided:!0,"data-testid":"category-list"},null==v||null==(o=v.list)?void 0:o.map(((e,t)=>a.createElement(i.Z.Item,{key:t,as:"a",href:null==e?void 0:e.url,rel:null==e?void 0:e.rel,startIcon:`Category${null==e?void 0:e.id}`,onClick:t=>R(t,e,"departamento:"),fill:"background.primary"},null==e?void 0:e.label))))),(null==E||null==(l=E.list)?void 0:l.length)&&a.createElement(r.xu,{mt:3},a.createElement(r.xv,{fontWeight:"medium",px:3,py:3},null==E?void 0:E.title),a.createElement(i.Z,{bg:"white",borderRadius:4,divided:!0},null==E||null==(s=E.list)?void 0:s.map(((e,t)=>a.createElement(i.Z.Item,{key:t,as:"a",href:null==e?void 0:e.url,rel:null==e?void 0:e.rel,startIcon:`Logo${null==e?void 0:e.id}`,onClick:t=>R(t,e,"nossas-marcas:")},null==e?void 0:e.label))))),(null==P||null==(d=P.list)?void 0:d.length)&&a.createElement(r.xu,{mt:3},a.createElement(r.xv,{fontWeight:"medium",px:3,py:3},null==P?void 0:P.title),a.createElement(i.Z,{bg:"white",borderRadius:4,divided:!0},null==P||null==(c=P.list)?void 0:c.map(((e,t)=>a.createElement(i.Z.Item,{key:t,as:"a",href:null==e?void 0:e.url,rel:null==e?void 0:e.rel,startIcon:`Service${null==e?void 0:e.id}`,fill:"gray",onClick:t=>R(t,e,"servicos:")},null==e?void 0:e.label))))),(null==S?void 0:S.length)&&a.createElement(r.xu,{mt:2},a.createElement(i.Z,{bg:"white",borderRadius:4,divided:!0},null==S?void 0:S.map(((e,t)=>a.createElement(i.Z.Item,{key:t,as:"a",href:null==e?void 0:e.url,rel:null==e?void 0:e.rel,startIcon:null==e?void 0:e.id,fill:"gray",onClick:t=>R(t,e)},null==e?void 0:e.label))))),(null==f?void 0:f.length)&&a.createElement(r.xu,{mt:3},null==f?void 0:f.map(((e,t)=>a.createElement(r.zx,{key:t,href:null==e?void 0:e.url,rel:null==e?void 0:e.rel,as:"a",color:"primary",startIcon:null==e?void 0:e.id,uppercase:!1,mb:2,centered:!0,full:!0,onClick:t=>R(t,e,"contato:")},null==e?void 0:e.label))))),T&&a.createElement(r.xu,{mt:4},a.createElement(r.xv,{fontSize:1,textAlign:"center",color:"darkGray"},T),null==M?void 0:M.map(((e,t)=>a.createElement(r.xv,{key:t,fontSize:1,textAlign:"center",color:"darkGray",fontWeight:"medium"},e)))),!(null==Z||null==(u=Z.links)||!u.length)&&a.createElement(r.xu,{m:3},a.createElement(r.xv,{fontSize:"small",py:2,textAlign:"center"},null==Z?void 0:Z.title),a.createElement(r.bo,{style:{margin:"0 auto 12px",width:"50%"}}),a.createElement(b,null,Z.links.map(((e,t)=>a.createElement("a",{key:t,rel:"noreferrer",href:null==e?void 0:e.url,target:"_blank",title:null==e?void 0:e.label},a.createElement(r.Ee,{src:null==e?void 0:e.img,alt:null==e?void 0:e.label})))))),(null==h?void 0:h.name)&&a.createElement(g,{"data-testid":"logout-link",onClick:O,href:null==h?void 0:h.signOutUrl,bg:"primary",underlineOnHover:!1,textAlign:"center",underline:!0,mt:4,py:3},"Não é ",null==h?void 0:h.name,"? Sair"))};E.defaultProps={onCollapsedClick:()=>{},onLogout:()=>{},onMenuHeaderClick:()=>{},onMenuItemClick:()=>({}),groupedLinks:[]};var C=E},91061:function(e,t,o){o.d(t,{Z:function(){return b}});var a=o(2784),n=o(34490),i=o(19476),r=o(56547),l=o(62452),s=o(33252),d=o(99673),c=o(91489),u=o(84546),m=o(63825);let p=(0,d.ZP)(u.Z)`
  display: flex;
  height: 40px;
  justify-content: space-around;
  box-shadow: -1px 2px 4px 0 rgba(0, 0, 0, 0.14);
  font-size: ${e=>(0,c.R)("fontSizes.1")(e)}px;
  font-weight: ${e=>(0,c.R)("fontWeights.medium")(e)};
  background-color: ${e=>(0,c.ow)("background.base")(e)};
  color: ${e=>(0,c.ow)("text.scratched")(e)};

  > div {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
  }
`,g=(0,d.ZP)(m.Z).attrs((e=>({color:(0,c.ow)("text.scratched")(e)})))``;var h=o(33359);function b({defaultDisplayMode:e,onChangeDisplayMode:t,onChangeSort:o,onFiltersClear:d,onFilterClick:c,onFilterItemClick:u,onFilterTypeClick:m,sortOptions:b,sortLabel:f,filters:v,showFilters:x,filtersCount:E}){var C;let[k,S]=(0,a.useState)(!1),[P,w]=(0,a.useState)(!1),y=()=>{c(!P),w(!P)};return a.createElement(a.Fragment,null,a.createElement(p,{fontSize:1},a.createElement(h.Z,{onChange:t,defaultMode:e}),null!=b&&b.length?a.createElement(i.xu,{p:1,onClick:()=>S(!k),"data-testid":"orderby-btn"},a.createElement(g,{"data-testid":"sort-label"},(null==(C=b.find((e=>e.selected)))?void 0:C.label)||f),a.createElement(n.rY6,{height:"16"})):a.createElement(a.Fragment,null),x&&a.createElement(s.Z,{visible:P,filters:v,count:E,onItemClick:u,onOpen:y,onClickOutside:y,onClose:y,onClear:()=>{w(!P),d()},onShowDetail:m})),null!=b&&b.length?a.createElement(l.YE,{headerTitle:f,visible:k,direction:"right",onClickOutside:()=>S(!1)},a.createElement(r.Ee,{options:b,onChange:function(e,t){o(t),S(!1)},p:"12px 0 12px 20px"})):a.createElement(a.Fragment,null))}b.defaultProps={defaultDisplayMode:"gallery",onFilterTypeClick:()=>{},onChangeSort:()=>{},onFiltersClear:()=>({}),onFilterClick:()=>({}),onFilterItemClick:{},sortLabel:"Ordenar por",sortOptions:[],filters:{},filtersCount:0,showFilters:!1}},82709:function(e,t,o){o(72848),o(33252),o(89424),o(46671),o(49647),o(42887),o(71782),o(95949),o(4294),o(1756),o(91061)},13111:function(e,t){t.Z=e=>/^[\w-]+(\.[\w-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,20})$/i.test(e)},15312:function(e,t){t.Z=e=>e&&e.trim().split(" ").length>1||!1},82260:function(e,t){t.Z=(e=[])=>e.sort(((e,t)=>parseFloat(e.value)-parseFloat(t.value))).reverse()}}]);