import{C as p}from"./ComponentButton-C3meVf2-.js";import{C as f}from"./ComponentCard-D_QuY9Lo.js";import{C as _}from"./ComponentHeading-BwTxAJ3r.js";import{u as C}from"./index-PFZfUmu9.js";import{d as k,l as x,c as l,a,w as r,m as y,o as s,f as d,b as t,u as m,F as c,j as h,t as o}from"./index-DEZaLq76.js";import"./index-DTEV5yGJ.js";import"./axios-CCb-kr4I.js";const w={key:0},S={key:1},F=k({__name:"indexView",setup(g){const u=C();return x(()=>u.fetchAll()),(B,n)=>{const i=y("router-link");return s(),l("main",null,[a(_,null,{nav:r(()=>[a(p,{to:{name:"sip-create"}},{default:r(()=>n[0]||(n[0]=[d("Новая запись")])),_:1})]),default:r(()=>[n[1]||(n[1]=t("h1",null,"Регистрация SIP",-1)),n[2]||(n[2]=t("p",null," Этот раздел предоставляет интерфейс для управления SIP-устройствами в системе Asterisk. Вы можете добавлять новые устройства, а также редактировать или удалять существующие. Это позволяет эффективно администрировать SIP-устройства, обеспечивая их интеграцию и корректную работу в системе. ",-1))]),_:1}),a(f,{tag:"section"},{default:r(()=>[m(u).elements?(s(),l("table",w,[n[3]||(n[3]=t("thead",null,[t("tr",null,[t("th",null,"Наименование"),t("th",null,"Тип"),t("th",null,"Протокол"),t("th",null,"Контекст"),t("th",null,"Запретить"),t("th",null,"Разрешить")])],-1)),t("tbody",null,[(s(!0),l(c,null,h(m(u).elements,e=>(s(),l("tr",{key:e.id},[t("td",null,[a(i,{to:{name:"sip-update",params:{id:e.id}}},{default:r(()=>[d(o(e.name),1)]),_:2},1032,["to"])]),t("td",null,o(e.type),1),t("td",null,o(e.transport),1),t("td",null,o(e.context),1),t("td",null,o(e.disallow),1),t("td",null,o(e.allow),1)]))),128))])])):(s(),l("p",S,"Список пуст"))]),_:1})])}}});export{F as default};
