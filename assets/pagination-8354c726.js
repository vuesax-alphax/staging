import{g as h}from"./utils-d20f8d7e.js";import{e as w,f as p,r as i,o as u,c as g,a,w as e,d as t,F as y,G as k,k as S,t as d,u as z,_ as C}from"./app-079a0c50.js";const D={class:"center"},x=w({__name:"pagination",setup(B){const o=p(1),l=p(3),c=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",website:"hildegard.org"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",website:"anastasia.net"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",website:"ramiro.info"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",website:"kale.biz"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",website:"demarco.info"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",website:"ola.org"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",website:"elvis.io"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",website:"jacynthe.com"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",website:"conrad.com"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",website:"ambrose.net"}];return(N,s)=>{const r=i("vs-th"),_=i("vs-tr"),m=i("vs-td"),f=i("vs-pagination"),v=i("vs-table");return u(),g("div",D,[a(v,null,{thead:e(()=>[a(_,null,{default:e(()=>[a(r,null,{default:e(()=>[t(" Name ")]),_:1}),a(r,null,{default:e(()=>[t(" Email ")]),_:1}),a(r,null,{default:e(()=>[t(" Id ")]),_:1})]),_:1})]),tbody:e(()=>[(u(!0),g(y,null,k(z(h)(c,o.value,l.value),(n,b)=>(u(),S(_,{key:b,data:n},{default:e(()=>[a(m,null,{default:e(()=>[t(d(n.name),1)]),_:2},1024),a(m,null,{default:e(()=>[t(d(n.email),1)]),_:2},1024),a(m,null,{default:e(()=>[t(d(n.id),1)]),_:2},1024)]),_:2},1032,["data"]))),128))]),footer:e(()=>[a(f,{"current-page":o.value,"onUpdate:currentPage":s[0]||(s[0]=n=>o.value=n),"page-size":l.value,"onUpdate:pageSize":s[1]||(s[1]=n=>l.value=n),"page-sizes":[3,5,7],total:c.length},null,8,["current-page","page-size","total"])]),_:1})])}}}),K=C(x,[["__file","pagination.vue"]]);export{K as default};