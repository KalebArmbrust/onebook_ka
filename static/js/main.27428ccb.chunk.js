(this.webpackJsonponebook_karmbrust=this.webpackJsonponebook_karmbrust||[]).push([[0],{31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),r=n(6),l=n.n(r),a=n(11),o=n(12),s=n(17),u=n(15),d=n(3),b="ADD_Employee",p="TOGGLE_Employee",j="SET_FILTER",y=0,m=n(1),O=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var c;return Object(a.a)(this,n),(c=t.call(this,e)).updateInput=function(e){c.setState({input:e})},c.handleAddEmployee=function(){c.props.addEmployee(c.state.input),c.setState({input:""})},c.state={input:""},c}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{children:[Object(m.jsx)("input",{onChange:function(t){return e.updateInput(t.target.value)},value:this.state.input}),Object(m.jsx)("button",{className:"add-employee",onClick:this.handleAddEmployee,children:"Add Employee"})]})}}]),n}(i.a.Component),f=Object(d.b)(null,{addEmployee:function(e){return{type:b,payload:{id:++y,content:e}}}})(O),v=n(7),h=n.n(v),E=Object(d.b)(null,{toggleEmployee:function(e){return{type:p,payload:{id:e}}}})((function(e){var t=e.employee,n=e.toggleEmployee;return Object(m.jsxs)("li",{className:"employee-item",onClick:function(){return n(t.id)},children:[t&&t.completed," ",Object(m.jsx)("span",{className:h()("employee-item__text",t&&t.completed&&"employee-item__text--completed"),children:t.content})]})})),x=n(2),I={ALL:"All",INCOMPLETE:"Active",COMPLETED:"Inactive"},g=function(e){return e.employees},L=function(e){return function(e){return g(e)?g(e).allIds:[]}(e).map((function(t){return function(e,t){return g(e)?Object(x.a)(Object(x.a)({},g(e).byIds[t]),{},{id:t}):{}}(e,t)}))},k=Object(d.b)((function(e){return{employees:function(e,t){var n=L(e);switch(t){case I.COMPLETED:return n.filter((function(e){return e.completed}));case I.INCOMPLETE:return n.filter((function(e){return!e.completed}));case I.ALL:default:return n}}(e,e.visibilityFilter)}}))((function(e){var t=e.employees;return Object(m.jsx)("ul",{className:"employee-list",children:t&&t.length?t.map((function(e,t){return Object(m.jsx)(E,{employee:e},"employee-".concat(e.id))})):"No Employees"})})),N=Object(d.b)((function(e){return{activeFilter:e.visibilityFilter}}),{setFilter:function(e){return{type:j,payload:{filter:e}}}})((function(e){var t=e.activeFilter,n=e.setFilter;return Object(m.jsx)("div",{className:"visibility-filters",children:Object.keys(I).map((function(e){var c=I[e];return Object(m.jsx)("span",{className:h()("filter",c===t&&"filter--active"),onClick:function(){n(c)},children:c},"visibility-filter-".concat(c))}))})}));n(31);var A=function(){return Object(m.jsxs)("div",{className:"app",children:[Object(m.jsx)("h1",{children:"Employees"}),Object(m.jsx)(f,{}),Object(m.jsx)(k,{}),Object(m.jsx)(N,{})]})},C=n(4),_=I.ALL,F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return t.payload.filter;default:return e}},T=n(5),w=n(16),M={allIds:[],byIds:{}},D=Object(C.b)({employees:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:var n=t.payload,c=n.id,i=n.content;return Object(x.a)(Object(x.a)({},e),{},{allIds:[].concat(Object(w.a)(e.allIds),[c]),byIds:Object(x.a)(Object(x.a)({},e.byIds),{},Object(T.a)({},c,{content:i,completed:!1}))});case p:var r=t.payload.id;return Object(x.a)(Object(x.a)({},e),{},{byIds:Object(x.a)(Object(x.a)({},e.byIds),{},Object(T.a)({},r,Object(x.a)(Object(x.a)({},e.byIds[r]),{},{completed:!e.byIds[r].completed})))});default:return e}},visibilityFilter:F}),P=Object(C.c)(D);l.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(d.a,{store:P,children:Object(m.jsx)(A,{})})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.27428ccb.chunk.js.map