(this["webpackJsonpbright-plan"]=this["webpackJsonpbright-plan"]||[]).push([[0],{11:function(e,t,n){},20:function(e,t,n){},27:function(e,t,n){},39:function(e,t,n){},47:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(21),i=n.n(c),s=(n(39),n(15)),l=n(9),o=n(4),d=n(32),u=n(33),b=(n(47),n(1)),j=function(){return Object(b.jsxs)("div",{className:"navbar",children:[Object(b.jsx)(l.b,{to:"/",children:Object(b.jsx)(d.a,{icon:u.a,className:"home-icon",size:"3x"})}),Object(b.jsx)("div",{className:"title",children:"Finance Advisor"})]})},p=n(13),h=n(14),f=n(23),m=n(17),O=n(16),v=(n(20),function(e){var t=e.level,n=e.update;return Object(b.jsx)("button",{className:"risk-scale-btn",id:t,onClick:function(){return n(t)},children:t},t)}),x=(n(11),function(e){var t=e.preferences;return Object(b.jsxs)("table",{children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{id:"risk",children:"Risk"}),Object(b.jsx)("th",{className:"bonds",children:"Bonds %"}),Object(b.jsx)("th",{className:"lg",children:"Large Cap %"}),Object(b.jsx)("th",{className:"mid",children:"Mid Cap %"}),Object(b.jsx)("th",{className:"foreign",children:"Foreign %"}),Object(b.jsx)("th",{className:"sm",children:"Small Cap %"})]})}),Object(b.jsx)("tbody",{children:t.map((function(e,t){return Object(b.jsx)("tr",{className:t%2===0?"row-grey":null,id:"row-".concat(t+1),children:Object.values(e).map((function(e,t){return Object(b.jsx)("td",{id:0===t?"risk":null,children:e},t)}))},t)}))})]})}),C=n(34),g=function(e){var t=[],n=Object.values(e.preference),r=["#FF6666","#FFFF66","#0099FF","#99FF99","#9966FF"];return n.shift(),n.map((function(e,n){0!==e&&t.push({value:e,color:r[n]})})),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(C.PieChart,{data:t,label:function(e){var t=e.dataEntry;return"".concat(t.value,"%")},labelPosition:65,lineWidth:75,paddingAngle:0,radius:40,viewBoxSize:[100,100]})})},N=function(e){Object(m.a)(n,e);var t=Object(O.a)(n);function n(e){var r;return Object(p.a)(this,n),(r=t.call(this,e)).state={id:0,bonds:0,largeCap:0,midCap:0,foreign:0,smallCap:0},r.update=r.update.bind(Object(f.a)(r)),r}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchPreferences()}},{key:"updateRowColor",value:function(e,t){e.style.backgroundColor=t%2===0?"white":"#f9f9f9"}},{key:"update",value:function(e){var t=this.state.id,n=this.props.preferences[e-1],r=n.bonds,a=n.largeCap,c=n.midCap,i=n.foreign,s=n.smallCap,l=document.getElementById("".concat(e)),o=document.getElementById("".concat(t)),d=document.getElementById("row-".concat(e)),u=document.getElementById("row-".concat(t)),b=document.getElementsByClassName("continue-btn");l.style.backgroundColor="yellow",d.style.backgroundColor="yellow",b.disabled=!1,o&&(o.style.backgroundColor="white"),u&&this.updateRowColor(u,t),this.setState({id:e,bonds:r,largeCap:a,midCap:c,foreign:i,smallCap:s})}},{key:"render",value:function(){var e=this,t=this.props.preferences,n=this.state.id;return t?Object(b.jsxs)("div",{className:"form-body",children:[Object(b.jsx)("h3",{children:"Please Select A Risk Level For Your Investment Portfolio"}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"risk-scale-label",children:[Object(b.jsx)("label",{id:"low",children:"Low"}),Object(b.jsx)("label",{id:"high",children:"High"})]}),Object(b.jsxs)("div",{className:"btn-wrapper",children:[t.map((function(t){return Object(b.jsx)(v,{level:t.id,update:e.update},t.id)})),Object(b.jsx)(l.b,{to:"/calculator/".concat(n),children:n>0?Object(b.jsx)("button",{className:"continue-btn",children:"Continue"}):Object(b.jsx)("button",{className:"continue-btn",disabled:!0,children:"Continue"})})]}),Object(b.jsx)("div",{className:"img_table_wrapper",children:Object(b.jsx)(x,{preferences:t})}),Object(b.jsx)("div",{className:"chart",children:Object(b.jsx)(g,{preference:this.state})})]})]}):null}}]),n}(a.a.Component),y={1:{id:1,bonds:80,largeCap:20,midCap:0,foreign:0,smallCap:0},2:{id:2,bonds:70,largeCap:15,midCap:15,foreign:0,smallCap:0},3:{id:3,bonds:60,largeCap:15,midCap:15,foreign:10,smallCap:0},4:{id:4,bonds:50,largeCap:20,midCap:20,foreign:10,smallCap:0},5:{id:5,bonds:40,largeCap:20,midCap:20,foreign:20,smallCap:0},6:{id:6,bonds:35,largeCap:25,midCap:5,foreign:30,smallCap:5},7:{id:7,bonds:20,largeCap:25,midCap:25,foreign:25,smallCap:5},8:{id:8,bonds:10,largeCap:20,midCap:40,foreign:20,smallCap:10},9:{id:9,bonds:5,largeCap:15,midCap:40,foreign:15,smallCap:15},10:{id:10,bonds:0,largeCap:5,midCap:25,foreign:30,smallCap:40}},E=Object(s.b)((function(e){var t=e.preferences;return{preferences:Object.values(t)}}),(function(e){return{fetchPreferences:function(){return e({type:"RECEIVE_PREFERENCES",preferences:y})}}}))(N),k=(n(27),function(e,t,n){return Object(b.jsx)("td",{children:Object(b.jsx)("input",{value:w(e,t),className:n,disabled:!0})})}),F=function(e){return Object(b.jsx)("td",{children:Object(b.jsx)("input",{type:"text",className:"inputs",onChange:e})})},w=function(e,t){return e||0===e?e>0&&t?"+".concat(e.toFixed(2)):e.toFixed(2):null},R=function(e){var t=e.state,n=e.update,r=e.titles,a=t.difference,c=t.newAmount;return Object(b.jsxs)("table",{className:"portfolio-table",children:[Object(b.jsx)("thead",{className:"portfolio-thead",children:Object(b.jsx)("tr",{children:["Portfolio","Current Amount","Difference","New Amount"].map((function(e,t){return Object(b.jsx)("th",{className:"header",children:e},t)}))})}),Object(b.jsx)("tbody",{className:"portfolio-tbody",children:r.map((function(e,t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e}),F((function(e){return n(t,e)})),a[t]>=0?k(a[t],!0,"green inputs"):k(a[t],!0,"red inputs"),k(c[t],!1,"blue inputs")]},t)}))})]})},S=n(24),P=function(e,t,n,r){e.map((function(e,a){e<0?(t.push(a),r[a]=[]):e>0&&n.push(a)}))},A=function(e,t,n,r){var a,c=e[n[0]];t.map((function(t){for(a=e[t];a<0&&n.length&&!(c<0);){var i=Math.min(c,Math.abs(a));r[t].push(Object(S.a)({},n[0],i)),a+=i,c>i?c-=i:(n.shift(),n.length&&(c=e[n[0]]))}}))},B=function(e){Object(m.a)(n,e);var t=Object(O.a)(n);function n(){var e;return Object(p.a)(this,n),(e=t.call(this)).state={currentAmount:[NaN,NaN,NaN,NaN,NaN],difference:[],newAmount:[],recommendations:{}},e}return Object(h.a)(n,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state.currentAmount,n=function(e){var t=0;return e.map((function(e){return t+=e})),t}(t),r=function(e,t){var n=[];return e.map((function(e){var r=t*e/100;n.push(r)})),n}(this.props.preference,n),a=function(e,t){for(var n=[],r=0;r<e.length;r++)n.push(t[r]-e[r]);return n}(t,r),c=function(e){var t={},n=[],r=[];return P(e,n,r,t),A(e,n,r,t),t}(a);this.setState({newAmount:r,difference:a,recommendations:c})}},{key:"update",value:function(e,t){t.preventDefault();var n=t.currentTarget.value,r=this.state.currentAmount.slice();n.match(/[^$,.\d]/)?(alert("error"),r[e]=NaN):r[e]=parseInt(n),this.setState({currentAmount:r})}},{key:"enableSubmitBtn",value:function(){return Object(b.jsx)("button",{id:"rebalance-btn",children:"Rebalance"})}},{key:"disableSubmitBtn",value:function(){return Object(b.jsx)("button",{id:"rebalance-btn",disabled:!0,children:"Rebalance"})}},{key:"renderRecommendations",value:function(e,t){var n=this;return e.map((function(e){var r=t[e];return n.state.recommendations[e].map((function(e,n){var a=Object.keys(e)[0],c=t[a],i=e[a];return Object(b.jsxs)("li",{className:"recommendation-text",children:["Transfer $",i.toFixed(2)," from ",r," to ",c,"."]},n)}))}))}},{key:"render",value:function(){var e=this,t=["Bonds $","Large Cap $","Mid Cap $","Foreign $","Small Cap $"],n=this.state,r=n.currentAmount,a=n.recommendations,c=Object.values(r),i=Object.keys(a);return Object(b.jsx)("div",{children:Object(b.jsxs)("form",{onSubmit:function(t){return e.handleSubmit(t)},className:"portfolio-form",children:[Object(b.jsxs)("header",{className:"portfolio-header",children:[Object(b.jsx)("h2",{children:"Please select your portfolio"}),c.includes(NaN)?this.disableSubmitBtn():this.enableSubmitBtn()]}),Object(b.jsx)(R,{state:this.state,update:this.update.bind(this),titles:t}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{className:"recommendation",children:"Recommendations"}),Object(b.jsx)("ul",{children:i.length?this.renderRecommendations(i,t):null})]})]})})}}]),n}(a.a.Component),I=function(e){Object(m.a)(n,e);var t=Object(O.a)(n);function n(e){var r;return Object(p.a)(this,n),(r=t.call(this,e)).state={bonds:0,largeCap:0,midCap:0,foreign:0,smallCap:0},r}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchPreference(this.props.match.params.level)}},{key:"render",value:function(){var e=this.props.preference;if(!e)return null;var t=Object.values(e);return Object(b.jsxs)("div",{className:"portfolio-container",children:[Object(b.jsx)("h1",{children:"Personal Portfolio"}),Object(b.jsxs)("h2",{children:["Risk Level ",e.id]}),Object(b.jsx)(x,{preferences:[t]}),Object(b.jsx)(B,{preference:t.slice(1)})]})}}]),n}(a.a.Component),M=Object(s.b)((function(e,t){return{preference:e.preferences[t.match.params.level]}}),(function(e){return{fetchPreference:function(t){return e({type:"RECEIVE_PREFERENCE",preference:y[t]})}}}))(I),$=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("header",{children:Object(b.jsx)(j,{})}),Object(b.jsx)(o.a,{exact:!0,path:"/",component:E}),Object(b.jsx)(o.a,{exact:!0,path:"/calculator/:level",component:M})]})},_=function(e){var t=e.store;return Object(b.jsx)(s.a,{store:t,children:Object(b.jsx)(l.a,{children:Object(b.jsx)($,{})})})},D=n(12),L=(n(50),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(Object.freeze(e),t.type){case"RECEIVE_PREFERENCES":return t.preferences;case"RECEIVE_PREFERENCE":var n=Object(S.a)({},t.preference.id,t.preference);return n;default:return e}}),V=Object(D.b)({preferences:L}),z=Object(D.c)(V);i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(_,{store:z})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.4f3b38e4.chunk.js.map