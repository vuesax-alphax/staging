import{e as k,C as w,f as _,D as x,m as $,E as S,o as t,c as s,a as T,u as a,b as e,F as r,G as y,t as z,h as v,n as B,g as C,_ as N}from"./app-f480a3d6.js";import{C as E}from"./CodeCopied-f7d07ef2.js";const L={class:"command"},M={key:0,class:"tabs"},V=e("svg",{class:"tab-effect tab-effect1",xmlns:"http://www.w3.org/2000/svg",width:"160",height:"160",viewBox:"0 0 160 160"},[e("path",{id:"Trazado_200","data-name":"Trazado 200",d:"M0-10,150,0l10,150S137.643,80.734,100.143,43.234,0-10,0-10Z",transform:"translate(0 10)"})],-1),D=e("svg",{class:"tab-effect tab-effect2",xmlns:"http://www.w3.org/2000/svg",width:"160",height:"160",viewBox:"0 0 160 160"},[e("path",{id:"Trazado_200","data-name":"Trazado 200",d:"M0-10,150,0l10,150S137.643,80.734,100.143,43.234,0-10,0-10Z",transform:"translate(0 10)"})],-1),F=["onClick"],R={class:"copy"},Z={key:0,class:"bx bx-clipboard"},j={key:1,class:"bx bx-check"},G=k({__name:"Command",setup(H){const b=w(),d=Object.keys(b),u=d.length>1,p=_(),o=_(),n=x(),l=_(0),{copied:f,copy:g}=$({legacy:!0});return u&&S(()=>{o.value&&(o.value.style.width=`${n.value[l.value].clientWidth}px`,o.value.style.height=`${n.value[l.value].clientHeight}px`,o.value.style.top=`${n.value[l.value].offsetTop}px`,o.value.style.left=`${n.value[l.value].offsetLeft}px`)}),(m,h)=>(t(),s(r,null,[T(E,{copied:a(f),text:"Copied"},null,8,["copied"]),e("div",L,[u?(t(),s("div",M,[V,D,e("div",{ref_key:"$tab",ref:o,class:"active"},null,512),(t(!0),s(r,null,y(a(d),(i,c)=>(t(),s("div",{key:c,ref_for:!0,ref:a(n).set,class:"tab",onClick:O=>l.value=c},z(i),9,F))),128))])):v("",!0),e("div",R,[e("div",{title:"Copy code",class:B(["con-copy",{copied:a(f)}]),onClick:h[0]||(h[0]=i=>a(g)(p.value.textContent))},[a(f)?(t(),s("i",j)):(t(),s("i",Z))],2)]),e("div",{ref_key:"$el",ref:p,class:"slots"},[u?(t(!0),s(r,{key:0},y(a(d),(i,c)=>(t(),s(r,{key:c},[l.value===c?C(m.$slots,i,{key:0}):v("",!0)],64))),128)):v("",!0),C(m.$slots,"default")],512)])],64))}});const q=N(G,[["__file","Command.vue"]]);export{q as default};
