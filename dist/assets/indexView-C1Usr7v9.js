import{C as f}from"./ComponentButton-C3meVf2-.js";import{C as _}from"./ComponentCard-D_QuY9Lo.js";import{C}from"./ComponentHeading-BwTxAJ3r.js";import{d as k,l as c,c as o,a,w as l,m as g,o as r,f as i,b as t,u as m,F as h,j as x,t as s,V as y}from"./index-DEZaLq76.js";import{u as V}from"./index-CZoH2opx.js";import"./index-DTEV5yGJ.js";import"./axios-CCb-kr4I.js";import"./index-CznklluM.js";const B={key:0},N={key:1},H=k({__name:"indexView",setup(b){const u=V(),d=["","Гость","Оператор","Администратор","Инженер","Разработчик"];return c(()=>u.fetchAll()),(w,e)=>{const p=g("router-link");return r(),o("main",null,[a(C,null,{nav:l(()=>[a(f,{to:{name:"user-create"}},{default:l(()=>e[0]||(e[0]=[i("Новая запись")])),_:1})]),default:l(()=>[e[1]||(e[1]=t("h1",null,"Пользователи",-1)),e[2]||(e[2]=t("p",null,' В этом разделе представлен список всех пользователей системы. Вы можете просматривать информацию о каждом пользователе, включая его роль, контакты и последнюю активность. Для добавления нового пользователя нажмите на кнопку "Новая запись". ',-1))]),_:1}),a(_,{tag:"section"},{default:l(()=>[m(u).elements?(r(),o("table",B,[e[3]||(e[3]=t("thead",null,[t("tr",null,[t("th",null,"ФИО"),t("th",null,"Описание"),t("th",null,"Роль"),t("th",null,"Контакты"),t("th",null,"Активность")])],-1)),t("tbody",null,[(r(!0),o(h,null,x(m(u).elements,n=>(r(),o("tr",{key:n.id},[t("td",null,[a(p,{to:{name:"user-update",params:{slug:n.email}}},{default:l(()=>[i(s(n.fullname),1)]),_:2},1032,["to"])]),t("td",null,s(n.description),1),t("td",null,s(d[n.permissions_id||0]),1),t("td",null,s(n.phone),1),t("td",null,s(m(y)(n.updated_at)),1)]))),128))])])):(r(),o("p",N,"Список пуст"))]),_:1})])}}});export{H as default};