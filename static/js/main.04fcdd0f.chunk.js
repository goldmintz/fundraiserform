(this.webpackJsonpfundraiserform=this.webpackJsonpfundraiserform||[]).push([[0],{11:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(2),s=n.n(r),a=n(4),c=n.n(a),i=n(1),d=n(5),j=(n(11),function(){var t=Object(r.useState)({totalDonations:0,totalDonors:0,donorEntry:"",errorMsg:""}),e=Object(d.a)(t,2),n=e[0],s=e[1],a=n.totalDonations,c=n.totalDonors,j=n.donorEntry,l=n.errorMsg,b=function(){var t=Math.floor(a/5e3*100);return t<=100?t:t>100?100:void 0};return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"total-banner",children:[function(){var t=Math.round(5e3-a);return t>0?"$".concat(t.toLocaleString()," still needed to fund this project"):0===t?Object(o.jsx)("p",{children:"We met our $5,000 goal. Thank you!"}):t<0?Object(o.jsxs)("p",{children:["We are ",Object(o.jsxs)("span",{children:["$",(-1*t).toLocaleString()]})," over our $5,000 goal!"]}):void 0}()," "]}),Object(o.jsxs)("div",{className:"main-container",children:[Object(o.jsx)("div",{className:"prog-bar",children:Object(o.jsx)("div",{className:"prog-fill",style:b()<100?{width:"".concat(b(),"%")}:{width:"".concat(b(),"%"),borderTopRightRadius:"5px"}})}),Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)("h1",{children:"Only five days left to fund this project."}),Object(o.jsx)("div",{className:"donor-msg",children:0===c?Object(o.jsx)("p",{children:"Be the first to donate to this project."}):1===c?Object(o.jsxs)("p",{children:["Join the ",Object(o.jsx)("span",{className:"donor-count",children:c})," donor who has already supported this project."]}):Object(o.jsxs)("p",{children:["Join the ",Object(o.jsx)("span",{className:"donor-count",children:c})," donors who have already supported this project."]})}),Object(o.jsx)("div",{className:"error-container",children:""!==l&&Object(o.jsx)("div",{id:"error-msg",children:l})}),Object(o.jsx)("form",{className:"donation-form",onSubmit:function(t){t.preventDefault(),""===j&&s(Object(i.a)(Object(i.a)({},n),{},{donorEntry:"",errorMsg:"Please enter a $5 minimum donation."})),s(j<5?Object(i.a)(Object(i.a)({},n),{},{donorEntry:"",errorMsg:"Donations must be at least $5."}):Object(i.a)(Object(i.a)({},n),{},{totalDonations:+a+ +j,totalDonors:c+1,errorMsg:"",donorEntry:""}))},children:Object(o.jsxs)("div",{className:"input-wrapper",children:[Object(o.jsx)("input",{id:"donation-input",type:"number",step:".01",value:j,onChange:function(t){s(Object(i.a)(Object(i.a)({},n),{},{donorEntry:t.target.value}))}}),Object(o.jsx)("input",{id:"donation-submit",type:"submit",value:"Give Now"})]})})]})]})]})});c.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.04fcdd0f.chunk.js.map