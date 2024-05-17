"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[961],{9961:function(e,n,t){t.r(n),t.d(n,{default:function(){return Q}});var r=t(824),i=t(9589),a=t(6582),l=t(2577),o=t(2715),s=t(1413),d=t(1186),u=t(6298),c=t(1170),m=t(2791);function p(e){var n=(0,c.uP)().theme,t=(0,d.OX)();return(0,m.useMemo)((function(){return(0,u.Cj)(n.direction,(0,s.Z)((0,s.Z)({},t),e))}),[e,n.direction,t])}var x=t(4942),f=t(4925),h=t(9439),v=t(9640),b=t(9886);var y=t(5597),g=t(2481),Z=t(2996),j=t(5113),I=t(184),N=["children","styleType","stylePosition","spacing"],k=["as"],_=["as"],C=(0,b.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),P=(0,h.Z)(C,2),q=P[0],R=P[1],F=(0,y.G)((function(e,n){var t=(0,g.jC)("List",e),r=(0,Z.Lr)(e),i=r.children,a=r.styleType,l=void 0===a?"none":a,o=r.stylePosition,d=r.spacing,u=(0,f.Z)(r,N),c=function(e){return m.Children.toArray(e).filter((function(e){return(0,m.isValidElement)(e)}))}(i),p=d?(0,x.Z)({},"& > *:not(style) ~ *:not(style)",{mt:d}):{};return(0,I.jsx)(q,{value:t,children:(0,I.jsx)(j.m.ul,(0,s.Z)((0,s.Z)({ref:n,listStyleType:l,listStylePosition:o,role:"list",__css:(0,s.Z)((0,s.Z)({},t.container),p)},u),{},{children:c}))})}));F.displayName="List",(0,y.G)((function(e,n){e.as;var t=(0,f.Z)(e,k);return(0,I.jsx)(F,(0,s.Z)({ref:n,as:"ol",styleType:"decimal",marginStart:"1em"},t))})).displayName="OrderedList";var S=(0,y.G)((function(e,n){e.as;var t=(0,f.Z)(e,_);return(0,I.jsx)(F,(0,s.Z)({ref:n,as:"ul",styleType:"initial",marginStart:"1em"},t))}));S.displayName="UnorderedList";var w=(0,y.G)((function(e,n){var t=R();return(0,I.jsx)(j.m.li,(0,s.Z)((0,s.Z)({ref:n},e),{},{__css:t.item}))}));w.displayName="ListItem",(0,y.G)((function(e,n){var t=R();return(0,I.jsx)(v.J,(0,s.Z)((0,s.Z)({ref:n,role:"presentation"},e),{},{__css:t.icon}))})).displayName="ListIcon";var L=t(4420),T=t(3041),B=t(9055);var z=t.p+"static/media/sprite.485a9f0d370eaab6bdd1e202a9ef47b2.svg",O=t(4528),D=function(e){var n=e.contactsInfo,t=e.handleClick,r=n.id,i=n.name,a=n.phone,l=n.email,s=n.favorite,d=(0,L.I0)(),u=!s;return(0,I.jsxs)(w,{minWidth:"320px",maxWidth:"400px",display:"flex",position:"relative",flexDirection:"column",alignItems:"center",gap:"10px",fontSize:16,mb:3,p:3,border:"solid 1px lightgrey",borderRadius:"10px",boxShadow:"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",_hover:{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"},children:[(0,I.jsx)(o.x,{fontWeight:"700",fontSize:"18px",children:i}),(0,I.jsx)(B.z,{colorScheme:"none",position:"absolute",right:"8px",top:"8px",onClick:function(){return d((0,O.R7)({contactId:r,favorite:u}))},children:(0,I.jsx)("svg",{width:"24px",height:"24px",children:(0,I.jsx)("use",{href:s?z+"#icon-Property-1pressed":z+"#icon-Property-1Default"})})}),(0,I.jsxs)(o.x,{children:[(0,I.jsx)("b",{children:"Phone number:"})," ",a]}),(0,I.jsxs)(o.x,{children:[(0,I.jsx)("b",{children:"Email:"})," ",l]}),(0,I.jsx)(B.z,{maxWidth:"100px",colorScheme:"teal",variant:"outline",ml:3,type:"button",_hover:{backgroundColor:"teal",color:"white"},onClick:t,children:"Delete"})," "]},r)},G=function(){var e=(0,L.v9)(T.bn),n=p(),t=(0,L.I0)();return(0,I.jsx)(S,{styleType:"none",margin:0,children:e.map((function(e){return(0,I.jsx)(D,{contactsInfo:e,handleClick:function(){return n({position:"top-right",title:"The contact '".concat(e.name,"' is successfully deleted"),status:"success",duration:4e3}),t((0,O._f)(e.id))}},e.id)}))})},H=t(7236),A=t(4618),E=function(){var e=(0,L.v9)(T.sr),n=(0,L.I0)();return(0,I.jsxs)(r.xu,{pl:6,children:[(0,I.jsx)(o.x,{children:"Find contacts by name"}),(0,I.jsx)(H.I,{type:"text",name:"filter",value:e,onChange:function(e){n((0,A.K)(e.target.value))},mb:3,mt:3,w:250,_focus:{border:"solid 1px teal",boxShadow:"0 0 0 1px teal"}})]})},J=t(5350),W=t(7438),M=function(){var e=(0,L.I0)(),n=(0,L.v9)(T.Af),t=p();return(0,I.jsx)("form",{onSubmit:function(r){r.preventDefault();var i=r.currentTarget,a=i.elements.name.value,l=i.elements.number.value,o=i.elements.email.value,s={name:a,phone:l,email:o};n.find((function(e){return e.name===a}))?t({position:"top-right",title:"".concat(a," is already in your contacts"),status:"warning",duration:4e3}):(e((0,O.y3)(s)),t({position:"top-right",title:"New contact '".concat(a,"' is successfully created"),status:"success",duration:4e3})),i.reset()},children:(0,I.jsxs)(J.NI,{outline:"solid 1px lightgrey",borderRadius:10,m:"24px 0",p:6,minW:{base:"240px",md:"400px",lg:"560px"},children:[(0,I.jsx)(W.l,{htmlFor:"name",children:"Name"}),(0,I.jsx)(H.I,{type:"text",name:"name",required:!0,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name must contain only letters",marginBottom:3,w:250,_focus:{border:"solid 1px teal",boxShadow:"0 0 0 1px teal"}}),(0,I.jsx)(W.l,{htmlFor:"email",children:"Email"}),(0,I.jsx)(H.I,{type:"email",name:"email",required:!0,marginBottom:3,w:250,_focus:{border:"solid 1px teal",boxShadow:"0 0 0 1px teal"}}),(0,I.jsx)(W.l,{htmlFor:"number",children:"Number"}),(0,I.jsx)(H.I,{type:"tel",name:"number",required:!0,pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"'123-45-67'   Number must contain only numbers",marginBottom:3,w:250,_focus:{border:"solid 1px teal",boxShadow:"0 0 0 1px teal"}}),(0,I.jsx)("br",{}),(0,I.jsx)(B.z,{colorScheme:"teal",variant:"outline",type:"submit",_hover:{backgroundColor:"teal",color:"white"},children:"Add contact"})]})})},X=t(8281),Q=function(){var e=(0,L.I0)(),n=(0,L.v9)(T.xU),t=(0,L.v9)(T.zh),s=(0,L.v9)(T.Af),d=(0,L.v9)(X.gw);return(0,m.useEffect)((function(){d&&e((0,O.yF)())}),[e,d]),(0,I.jsxs)(r.xu,{as:"div",p:6,align:"center",children:[(0,I.jsx)(i.X,{children:"Phonebook"}),(0,I.jsx)(M,{}),n&&!t?(0,I.jsx)(a.k,{textAlign:"center",justifyContent:"center",w:500,children:(0,I.jsx)(l.$,{thickness:"4px",speed:"0.8s",emptyColor:"gray.200",color:"teal.400",size:"xl"})}):s&&0!==s.length?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(i.X,{children:"Contacts"}),(0,I.jsx)(E,{}),(0,I.jsx)(G,{})]}):(0,I.jsx)(o.x,{children:"Here will be your contacts list. Please, add some"})]})}},3041:function(e,n,t){t.d(n,{Af:function(){return r},bn:function(){return o},sr:function(){return l},xU:function(){return i},zh:function(){return a}});var r=function(e){return e.contacts.items},i=function(e){return e.contacts.isLoading},a=function(e){return e.contacts.error},l=function(e){return e.filter},o=function(e){var n=r(e),t=l(e);return t?n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})):n}},5350:function(e,n,t){t.d(n,{NI:function(){return k},NJ:function(){return N},e:function(){return g}});var r=t(1413),i=t(4925),a=t(9439),l=t(9886),o=t(4591),s=t(5597),d=t(2481),u=t(2996),c=t(5113),m=t(6992),p=t(2791),x=t(184),f=["id","isRequired","isInvalid","isDisabled","isReadOnly"],h=["getRootProps","htmlProps"],v=(0,l.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),b=(0,a.Z)(v,2),y=b[0],g=b[1],Z=(0,l.k)({strict:!1,name:"FormControlContext"}),j=(0,a.Z)(Z,2),I=j[0],N=j[1];var k=(0,s.G)((function(e,n){var t=(0,d.jC)("Form",e),l=function(e){var n=e.id,t=e.isRequired,l=e.isInvalid,s=e.isDisabled,d=e.isReadOnly,u=(0,i.Z)(e,f),c=(0,p.useId)(),x=n||"field-".concat(c),h="".concat(x,"-label"),v="".concat(x,"-feedback"),b="".concat(x,"-helptext"),y=(0,p.useState)(!1),g=(0,a.Z)(y,2),Z=g[0],j=g[1],I=(0,p.useState)(!1),N=(0,a.Z)(I,2),k=N[0],_=N[1],C=(0,p.useState)(!1),P=(0,a.Z)(C,2),q=P[0],R=P[1],F=(0,p.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({id:b},e),{},{ref:(0,o.lq)(n,(function(e){e&&_(!0)}))})}),[b]),S=(0,p.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({},e),{},{ref:n,"data-focus":(0,m.PB)(q),"data-disabled":(0,m.PB)(s),"data-invalid":(0,m.PB)(l),"data-readonly":(0,m.PB)(d),id:void 0!==e.id?e.id:h,htmlFor:void 0!==e.htmlFor?e.htmlFor:x})}),[x,s,q,l,d,h]),w=(0,p.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({id:v},e),{},{ref:(0,o.lq)(n,(function(e){e&&j(!0)})),"aria-live":"polite"})}),[v]),L=(0,p.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)((0,r.Z)({},e),u),{},{ref:n,role:"group","data-focus":(0,m.PB)(q),"data-disabled":(0,m.PB)(s),"data-invalid":(0,m.PB)(l),"data-readonly":(0,m.PB)(d)})}),[u,s,q,l,d]),T=(0,p.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({},e),{},{ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!t,isInvalid:!!l,isReadOnly:!!d,isDisabled:!!s,isFocused:!!q,onFocus:function(){return R(!0)},onBlur:function(){return R(!1)},hasFeedbackText:Z,setHasFeedbackText:j,hasHelpText:k,setHasHelpText:_,id:x,labelId:h,feedbackId:v,helpTextId:b,htmlProps:u,getHelpTextProps:F,getErrorMessageProps:w,getRootProps:L,getLabelProps:S,getRequiredIndicatorProps:T}}((0,u.Lr)(e)),s=l.getRootProps,v=(l.htmlProps,(0,i.Z)(l,h)),b=(0,m.cx)("chakra-form-control",e.className);return(0,x.jsx)(I,{value:v,children:(0,x.jsx)(y,{value:t,children:(0,x.jsx)(c.m.div,(0,r.Z)((0,r.Z)({},s({},n)),{},{className:b,__css:t.container}))})})}));k.displayName="FormControl",(0,s.G)((function(e,n){var t=N(),i=g(),a=(0,m.cx)("chakra-form__helper-text",e.className);return(0,x.jsx)(c.m.div,(0,r.Z)((0,r.Z)({},null==t?void 0:t.getHelpTextProps(e,n)),{},{__css:i.helperText,className:a}))})).displayName="FormHelperText"},7438:function(e,n,t){t.d(n,{l:function(){return p}});var r=t(1413),i=t(4925),a=t(5350),l=t(5597),o=t(2481),s=t(2996),d=t(5113),u=t(6992),c=t(184),m=["className","children","requiredIndicator","optionalIndicator"],p=(0,l.G)((function(e,n){var t,l=(0,o.mq)("FormLabel",e),p=(0,s.Lr)(e),f=(p.className,p.children),h=p.requiredIndicator,v=void 0===h?(0,c.jsx)(x,{}):h,b=p.optionalIndicator,y=void 0===b?null:b,g=(0,i.Z)(p,m),Z=(0,a.NJ)(),j=null!=(t=null==Z?void 0:Z.getLabelProps(g,n))?t:(0,r.Z)({ref:n},g);return(0,c.jsxs)(d.m.label,(0,r.Z)((0,r.Z)({},j),{},{className:(0,u.cx)("chakra-form__label",p.className),__css:(0,r.Z)({display:"block",textAlign:"start"},l),children:[f,(null==Z?void 0:Z.isRequired)?v:y]}))}));p.displayName="FormLabel";var x=(0,l.G)((function(e,n){var t=(0,a.NJ)(),i=(0,a.e)();if(!(null==t?void 0:t.isRequired))return null;var l=(0,u.cx)("chakra-form__required-indicator",e.className);return(0,c.jsx)(d.m.span,(0,r.Z)((0,r.Z)({},null==t?void 0:t.getRequiredIndicatorProps(e,n)),{},{__css:i.requiredIndicator,className:l}))}));x.displayName="RequiredIndicator"},7236:function(e,n,t){t.d(n,{I:function(){return h}});var r=t(1413),i=t(4925),a=t(5350),l=t(6992),o=["isDisabled","isInvalid","isReadOnly","isRequired"],s=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function d(e){var n=function(e){var n,t,o,d=(0,a.NJ)(),u=e.id,c=e.disabled,m=e.readOnly,p=e.required,x=e.isRequired,f=e.isInvalid,h=e.isReadOnly,v=e.isDisabled,b=e.onFocus,y=e.onBlur,g=(0,i.Z)(e,s),Z=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==d?void 0:d.hasFeedbackText)&&(null==d?void 0:d.isInvalid)&&Z.push(d.feedbackId);(null==d?void 0:d.hasHelpText)&&Z.push(d.helpTextId);return(0,r.Z)((0,r.Z)({},g),{},{"aria-describedby":Z.join(" ")||void 0,id:null!=u?u:null==d?void 0:d.id,isDisabled:null!=(n=null!=c?c:v)?n:null==d?void 0:d.isDisabled,isReadOnly:null!=(t=null!=m?m:h)?t:null==d?void 0:d.isReadOnly,isRequired:null!=(o=null!=p?p:x)?o:null==d?void 0:d.isRequired,isInvalid:null!=f?f:null==d?void 0:d.isInvalid,onFocus:(0,l.v0)(null==d?void 0:d.onFocus,b),onBlur:(0,l.v0)(null==d?void 0:d.onBlur,y)})}(e),t=n.isDisabled,d=n.isInvalid,u=n.isReadOnly,c=n.isRequired,m=(0,i.Z)(n,o);return(0,r.Z)((0,r.Z)({},m),{},{disabled:t,readOnly:u,required:c,"aria-invalid":(0,l.Qm)(d),"aria-required":(0,l.Qm)(c),"aria-readonly":(0,l.Qm)(u)})}var u=t(5597),c=t(2481),m=t(2996),p=t(5113),x=t(184),f=["htmlSize"],h=(0,u.G)((function(e,n){var t=e.htmlSize,a=(0,i.Z)(e,f),o=(0,c.jC)("Input",a),s=d((0,m.Lr)(a)),u=(0,l.cx)("chakra-input",e.className);return(0,x.jsx)(p.m.input,(0,r.Z)((0,r.Z)({size:t},s),{},{__css:o.field,ref:n,className:u}))}));h.displayName="Input",h.id="Input"},9589:function(e,n,t){t.d(n,{X:function(){return m}});var r=t(1413),i=t(4925),a=t(5597),l=t(2481),o=t(2996),s=t(5113),d=t(6992),u=t(184),c=["className"],m=(0,a.G)((function(e,n){var t=(0,l.mq)("Heading",e),a=(0,o.Lr)(e),m=(a.className,(0,i.Z)(a,c));return(0,u.jsx)(s.m.h2,(0,r.Z)((0,r.Z)({ref:n,className:(0,d.cx)("chakra-heading",e.className)},m),{},{__css:t}))}));m.displayName="Heading"}}]);
//# sourceMappingURL=961.b2c566cf.chunk.js.map