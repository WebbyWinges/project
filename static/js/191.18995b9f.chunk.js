"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[191],{4191:function(s,e,n){n.r(e),n.d(e,{default:function(){return I}});var a=n(2791),i="Dialogs_dialogsy__GAG5C",t="Dialogs_dialogs__oe96H",o="Dialogs_dialogsItems__zeEWD",l="Dialogs_active__t8cjl",r="Dialogs_messages__Cg2l+",c="Dialogs_dialogItem__Gr+yc",d="Dialogs_message__ZEWo0",u="Dialogs_dialog__htSTl",g="Dialogs_textBar__OdgFx",m="Dialogs_text__6tKID",_="Dialogs_btn__BVDb-",h=n(184),p=function(s){return(0,h.jsxs)("div",{className:d,children:[s.message," ",s.online]})},x=n(1087),f=function(s){var e="/dialogs/"+s.id;return(0,h.jsx)("div",{className:"".concat(u," ").concat(l),children:(0,h.jsxs)("div",{className:c,children:[(0,h.jsx)("img",{src:"https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Image.png",alt:""}),(0,h.jsxs)(x.OL,{to:e,children:[" ",s.name," "]})]})})},j=n(7689),v=n(6139),D=n(704),N=n(7492),y=n(5304),w=(0,y.D)(50),A=(0,D.Z)({form:"dialogAddMessageForm"})((function(s){return(0,h.jsx)("form",{onSubmit:s.handleSubmit,children:(0,h.jsxs)("div",{className:g,children:[(0,h.jsx)(v.Z,{component:N.gx,validate:[y.C,w],name:"newMessageBody",placeholder:"Enter your message",className:m}),(0,h.jsx)("button",{className:_,children:"Send"})]})})})),b=function(s){var e=s.dialogsPage,n=e.dialogs.map((function(s){return(0,h.jsx)(f,{name:s.name,id:s.id},s.id)})),a=e.messages.map((function(s){return(0,h.jsx)(p,{message:s.message,online:s.online},s.id)}));e.newMessageBody;return s.isAuth?(0,h.jsxs)("div",{className:t,children:[(0,h.jsxs)("div",{className:i,children:[(0,h.jsx)("div",{className:o,children:n}),(0,h.jsx)("div",{className:r,children:a})]}),(0,h.jsx)(A,{onSubmit:function(e){s.addMessage(e.newMessageBody)}})]}):(0,h.jsx)(j.Fg,{to:"/login"})},Z=n(2807),C=n(8687),M=n(1413),k=n(5671),B=n(3144),S=n(136),F=n(516),G=function(s){return{isAuth:s.auth.isAuth}},I=(0,n(7781).qC)((0,C.$j)((function(s){return{dialogsPage:s.dialogsReducer,isAuth:s.auth.isAuth}}),(function(s){return{addMessage:function(e){s((0,Z.X)(e))}}})),(function(s){var e=function(e){(0,S.Z)(a,e);var n=(0,F.Z)(a);function a(){return(0,k.Z)(this,a),n.apply(this,arguments)}return(0,B.Z)(a,[{key:"render",value:function(){return this.props.isAuth?(0,h.jsx)(s,(0,M.Z)({},this.props)):(0,h.jsx)(j.Fg,{to:"/login"})}}]),a}(a.Component);return(0,C.$j)(G)(e)}))(b)}}]);
//# sourceMappingURL=191.18995b9f.chunk.js.map