(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var c=n(8),o=n(1),a=(n(18),n(19),n(20),n(9)),l=n(4),r=n(2),i=n(3),s=n.n(i);function u(e){var t,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c={method:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET"};return n&&(c.body=JSON.stringify(n),c.headers={"Content-Type":"application/json; charset=UTF-8"}),(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch("https://mate.academy/students-api"+e,c)})).then((function(e){if(!e.ok)throw new Error;return e.json()}))}var d=function(e){return u(e)},f=function(e,t){return u(e,"POST",t)},j=function(e,t){return u(e,"PATCH",t)},b=function(e){return u(e,"DELETE")},m=n(0),p=function(e){var t=e.todo,n=e.onDelete,c=e.onUpdate,a=e.areAllCompletedDeleting,i=e.areAllToggling,u=e.areAllCompleted,d=Object(o.useState)(!1),f=Object(r.a)(d,2),j=f[0],b=f[1],p=Object(o.useState)(!1),O=Object(r.a)(p,2),h=O[0],v=O[1],x=Object(o.useState)(t.title),_=Object(r.a)(x,2),N=_[0],g=_[1],y=Object(o.useRef)(null),k=j||a&&t.completed||i&&!t.completed||i&&u;Object(o.useEffect)((function(){var e;h&&(null===(e=y.current)||void 0===e||e.focus())}),[h]);var C=function(){b(!0),n(t.id).finally((function(){return b(!1)}))},A=function(e){b(!0),c(t.id,e).finally((function(){return b(!1)}))},S=function(){var e=N.trim();e!==t.title?e?(A(Object(l.a)(Object(l.a)({},t),{},{title:e})),g(e)):C():g(e)};return Object(m.jsxs)("div",{className:s()("todo",{completed:t.completed}),"data-cy":"Todo",children:[Object(m.jsxs)("div",{className:s()("modal overlay",{"is-active":k}),children:[Object(m.jsx)("div",{className:"modal-background has-background-white-ter"}),Object(m.jsx)("div",{className:"loader"})]}),Object(m.jsx)("label",{className:"todo__status-label",children:Object(m.jsx)("input",{type:"checkbox",className:"todo__status",checked:t.completed,onChange:function(){A(Object(l.a)(Object(l.a)({},t),{},{completed:!t.completed}))}})}),h?Object(m.jsx)("form",{onSubmit:function(e){e.preventDefault(),S(),v(!1)},children:Object(m.jsx)("input",{ref:y,type:"text",className:"todo__title-field",placeholder:"Empty todo will be deleted",value:N,onChange:function(e){return g(e.target.value)},onBlur:function(){S(),v(!1)},onKeyUp:function(e){"Escape"===e.key&&(g(t.title),v(!1))}})}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("span",{className:"todo__title",onDoubleClick:function(){return v(!0)},children:t.title}),Object(m.jsx)("button",{type:"button",className:"todo__remove",onClick:C,children:"\xd7"})]})]})},O=function(e){return e.All="all",e.Completed="completed",e.Active="active",e}({}),h=function(e){var t=e.activeFilter,n=e.setActiveFilter,c=function(e){return t===e},o=function(e){e!==t&&n(e)};return Object(m.jsxs)("nav",{className:"filter",children:[Object(m.jsx)("a",{href:"#/",className:s()("filter__link",{selected:c(O.All)}),onClick:function(){return o(O.All)},children:O.All}),Object(m.jsx)("a",{href:"#/active",className:s()("filter__link",{selected:c(O.Active)}),onClick:function(){return o(O.Active)},children:O.Active}),Object(m.jsx)("a",{href:"#/completed",className:s()("filter__link",{selected:c(O.Completed)}),onClick:function(){return o(O.Completed)},children:O.Completed})]})},v=function(){var e=Object(o.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],i=Object(o.useState)(n),u=Object(r.a)(i,2),v=u[0],x=u[1],_=Object(o.useState)(null),N=Object(r.a)(_,2),g=N[0],y=N[1],k=Object(o.useState)(O.All),C=Object(r.a)(k,2),A=C[0],S=C[1],w=Object(o.useState)(!1),T=Object(r.a)(w,2),E=T[0],U=T[1],D=Object(o.useState)(""),F=Object(r.a)(D,2),P=F[0],R=F[1],B=Object(o.useState)(""),I=Object(r.a)(B,2),J=I[0],G=I[1],H=Object(o.useState)(!1),K=Object(r.a)(H,2),L=K[0],W=K[1],q=Object(o.useState)(!1),z=Object(r.a)(q,2),M=z[0],Q=z[1],V=Object(o.useState)(!1),X=Object(r.a)(V,2),Y=X[0],Z=X[1],$=Object(o.useState)(!1),ee=Object(r.a)($,2),te=ee[0],ne=ee[1],ce=!!n.filter((function(e){return e.completed})).length,oe=0===n.filter((function(e){return!e.completed})).length,ae=Object(o.useRef)(null),le=Object(o.useRef)(0),re=function(e){U(!0),R(e),le.current=window.setTimeout((function(){U(!1)}),3e3)};Object(o.useEffect)((function(){var e;return E&&U(!1),(e=11396,d("/todos?userId=".concat(e))).then((function(e){c(e)})).catch((function(){return re("Unable to load todos")})),function(){return window.clearTimeout(le.current)}}),[A,n]),Object(o.useEffect)((function(){var e;M&&(null===(e=ae.current)||void 0===e||e.focus())}),[M]),Object(o.useEffect)((function(){switch(A){case O.Active:x(n.filter((function(e){return!e.completed})));break;case O.Completed:x(n.filter((function(e){return e.completed})));break;default:x(n)}}),[A,n]);var ie=function(e){return b("/todos/".concat(e)).then((function(){return c(n.filter((function(t){return t.id!==e})))})).catch((function(){return re("Unable to delete a todo")}))},se=function(e,t){return j("/todos/".concat(e),t).then((function(t){c(n.map((function(n){return n.id===e?t:n})))})).catch((function(){return re("Unable to update a todo")}))};return Object(m.jsxs)("div",{className:"todoapp",children:[Object(m.jsx)("h1",{className:"todoapp__title",children:"todos"}),Object(m.jsxs)("div",{className:"todoapp__content",children:[Object(m.jsxs)("header",{className:"todoapp__header",children:[Object(m.jsx)("button",{type:"button",className:s()("todoapp__toggle-all",{active:oe}),onClick:function(){var e=(oe?n.filter((function(e){return e.completed})):n.filter((function(e){return!e.completed}))).map((function(e){return j("/todos/".concat(e.id),{completed:!e.completed})}));ne(!0),Promise.all(e).then((function(){c(n.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{completed:!oe})})))})).catch((function(){return re("Unable to toggle todos")})).finally((function(){return ne(!1)}))}}),Object(m.jsx)("form",{onSubmit:function(e){if(e.preventDefault(),window.clearTimeout(le.current),J.trim()){var t,o={title:J.trim(),userId:11396,completed:!1};y(Object(l.a)({id:0},o)),Q(!1),W(!0),(t=o,f("/todos",t)).then((function(e){c([].concat(Object(a.a)(n),[e])),G("")})).catch((function(){return re("Unable to add a todo")})).finally((function(){y(null),Q(!0),W(!1)}))}else re("Title can't be empty")},children:Object(m.jsx)("input",{ref:ae,type:"text",className:"todoapp__new-todo",placeholder:"What needs to be done?",value:J,onChange:function(e){return G(e.target.value)},disabled:L,onBlur:function(){return Q(!1)}})})]}),Object(m.jsxs)("section",{className:"todoapp__main",children:[v.map((function(e){return Object(m.jsx)(p,{todo:e,onDelete:ie,onUpdate:se,areAllCompletedDeleting:Y,areAllToggling:te,areAllCompleted:oe},e.id)})),g&&Object(m.jsxs)("div",{className:"todo",children:[Object(m.jsx)("label",{className:"todo__status-label",children:Object(m.jsx)("input",{type:"checkbox",className:"todo__status"})}),Object(m.jsx)("span",{className:"todo__title",children:g.title}),Object(m.jsx)("button",{type:"button",className:"todo__remove",children:"\xd7"}),Object(m.jsxs)("div",{className:"modal overlay is-active",children:[Object(m.jsx)("div",{className:"modal-background has-background-white-ter"}),Object(m.jsx)("div",{className:"loader"})]})]})]}),n.length>0&&Object(m.jsxs)("footer",{className:"todoapp__footer",children:[Object(m.jsx)("span",{className:"todo-count",children:"".concat(n.filter((function(e){return!e.completed})).length," items left")}),Object(m.jsx)(h,{activeFilter:A,setActiveFilter:S}),Object(m.jsx)("button",{type:"button",className:"todoapp__clear-completed",disabled:!ce,onClick:function(){Z(!0),Promise.all(n.filter((function(e){return e.completed})).map((function(e){return b("/todos/".concat(e.id))}))).then((function(){return c(n.filter((function(e){return!e.completed})))})).catch((function(){return re("Unable to delete todos")})).finally((function(){return Z(!1)}))},children:"Clear completed"})]})]}),Object(m.jsxs)("div",{className:s()("notification is-danger is-light has-text-weight-normal",{hidden:!E}),"data-cy":"ErrorNotification",children:[Object(m.jsx)("button",{type:"button",className:"delete",onClick:function(){return U(!1)}}),P]})]})};Object(c.createRoot)(document.getElementById("root")).render(Object(m.jsx)(v,{}))}},[[22,1,2]]]);
//# sourceMappingURL=main.8ed33821.chunk.js.map