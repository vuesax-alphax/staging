import{e as c,f as r,r as _,o as p,c as l,a as d,w as u,d as i,P as v,A as f,B as g,b as m,_ as I}from"./app-9418cd6f.js";const h=s=>(f("data-v-607f4c65"),s=s(),g(),s),x={class:"center"},b=h(()=>m("b",null,"Progress",-1)),B=c({__name:"progress",setup(s){const e=r(0),a=()=>{const o=v({progress:0}),t=setInterval(()=>{e.value<=100&&(e.value=Number(e.value)+1,o.setProgress(e.value))},40);setTimeout(()=>{o.close(),clearInterval(t),e.value=0},4100)};return(o,t)=>{const n=_("vs-button");return p(),l("div",x,[d(n,{type:"flat",onClick:a},{default:u(()=>[i(" Open Loading "),b]),_:1})])}}});const N=I(B,[["__scopeId","data-v-607f4c65"],["__file","progress.vue"]]);export{N as default};