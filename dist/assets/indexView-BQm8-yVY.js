import{C as v}from"./ComponentCard-D_QuY9Lo.js";import{C as y}from"./ComponentHeading-BwTxAJ3r.js";import{k as w,s as x,e as p,d as C,l as k,c as s,a as f,w as g,o as a,b as n,u as m,F as E,j as V,f as h,t as _,V as b,_ as j}from"./index-DEZaLq76.js";import{i as l}from"./index-DTEV5yGJ.js";import"./axios-CCb-kr4I.js";const c="/v1/logs",A=w("logs",()=>{const i=x(),t=p({description:"",updated_at:""}),o=p([]);return{dialog:p(!1),elements:o,element:t,save:async()=>{try{const e=await l.post(c,t.value);o.value===null&&(o.value=[]),o.value.push(e.data),i.push({name:"logs"})}catch(e){console.error("Error saving logs:",e)}},update:async()=>{try{await l.put([c,t.value.id].join("/"),t.value),i.push({name:"logs"})}catch(e){console.error("Error updating logs:",e)}},remove:async()=>{try{await l.delete([c,t.value.id].join("/")),i.push({name:"logs"})}catch(e){console.error("Error deleting logs:",e)}},fetchAll:async()=>{try{const e=await l.get(c);o.value=e.data}catch(e){console.error("Error fetching logs:",e)}},fetchOne:async e=>{try{const d=await l.get([c,e].join("/"));t.value=d.data}catch(d){console.error("Error fetching logs:",d)}}}}),B={key:0},N={key:1},S=C({__name:"indexView",setup(i){const t=A();return k(()=>t.fetchAll()),(o,r)=>(a(),s("main",null,[f(y,{static:!0},{default:g(()=>r[0]||(r[0]=[n("h1",null,"Системные уведомления",-1),n("p",null," Здесь вы можете управлять сценариями. Добавляйте новые сценарии, удаляйте или изменяйте существующие. Этот раздел предназначен для эффективного управления сценариями и связанным с ними оборудованием. ",-1)])),_:1}),f(v,{tag:"article"},{default:g(()=>[m(t).elements?(a(),s("table",B,[n("tbody",null,[(a(!0),s(E,null,V(m(t).elements,u=>(a(),s("tr",{key:u.id},[n("td",null,[h(_(u.description)+" ",1),r[1]||(r[1]=n("br",null,null,-1)),h(" "+_(m(b)(u.updated_at)),1)])]))),128))])])):(a(),s("p",N,"Список пуст"))]),_:1})]))}}),U=j(S,[["__scopeId","data-v-86866fe8"]]);export{U as default};