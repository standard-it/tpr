import{C as _}from"./ComponentButton-C3meVf2-.js";import{C as k}from"./ComponentCard-D_QuY9Lo.js";import{C as y}from"./ComponentHeading-BwTxAJ3r.js";import{u as c}from"./index-EbIPtxbL.js";import{d as w,e as g,l as x,c as l,a as r,w as a,m as S,o as s,f as p,b as t,u as d,F as q,j as v,t as u}from"./index-DEZaLq76.js";import"./index-DTEV5yGJ.js";import"./axios-CCb-kr4I.js";const B={key:0},V={key:1},D=w({__name:"indexView",setup(b){const n=c(),m=g({}),f=async()=>{if(n.elements)for(const i of n.elements)m.value[i.ip]=await n.ping(i.ip)};return x(async()=>{await n.fetchAll(),await f()}),(i,e)=>{const C=S("router-link");return s(),l("main",null,[r(y,null,{nav:a(()=>[r(_,{to:{name:"equipment-create"}},{default:a(()=>e[0]||(e[0]=[p("Новая запись")])),_:1})]),default:a(()=>[e[1]||(e[1]=t("h1",null,"Список оборудования",-1)),e[2]||(e[2]=t("p",null," При добавлении нового устройства убедитесь что все поля заполнены, после чего данное оборудование появится в выпадающем списке при составлении плана и нанесении точек. ",-1)),e[3]||(e[3]=t("p",null,"Перед добавлением нового оборудования убедитесь, что у вас есть необходимая категория, к которой принадлежит оборудование.",-1))]),_:1}),r(k,{tag:"section"},{default:a(()=>[d(n).elements?(s(),l("table",B,[e[4]||(e[4]=t("thead",null,[t("tr",null,[t("th",null,"Наименование"),t("th",null,"Модель"),t("th",null,"Состояние"),t("th",null,"RTSP-адрес")])],-1)),t("tbody",null,[(s(!0),l(q,null,v(d(n).elements,o=>(s(),l("tr",{key:o.id},[t("td",null,[r(C,{to:{name:"equipment-update",params:{id:o.id}}},{default:a(()=>[p(u(o.name),1)]),_:2},1032,["to"])]),t("td",null,u(o.model),1),t("td",null,u(m.value[o.ip]?"доступен":"недоступен"),1),t("td",null,u(o.rtsp?"есть":"нет"),1)]))),128))])])):(s(),l("p",V,"Список пуст"))]),_:1})])}}});export{D as default};
