import{C as p}from"./ComponentButton-C3meVf2-.js";import{C as f}from"./ComponentCard-D_QuY9Lo.js";import{C}from"./ComponentHeading-BwTxAJ3r.js";import{u as k}from"./index-BegdO8CZ.js";import{d as x,l as y,c as l,a as u,w as e,m as g,o,f as a,b as t,u as m,F as B,j as V,t as d}from"./index-DEZaLq76.js";import"./index-DTEV5yGJ.js";import"./axios-CCb-kr4I.js";const b={key:0},w={key:1},H=x({__name:"indexView",setup(N){const s=k();return y(()=>s.fetchAll()),(_,n)=>{const i=g("router-link");return o(),l("main",null,[u(C,null,{nav:e(()=>[u(p,{to:{name:"scheme-create"}},{default:e(()=>n[0]||(n[0]=[a("Новая запись")])),_:1})]),default:e(()=>[n[1]||(n[1]=t("h1",null,"План помещения",-1)),n[2]||(n[2]=t("p",null," Здесь вы можете управлять планами помещений. Добавляйте новые планы, удаляйте или изменяйте существующие. Этот раздел предназначен для эффективного управления планами помещений и связанным с ними оборудованием. ",-1))]),_:1}),u(f,{tag:"section"},{default:e(()=>[m(s).elements?(o(),l("table",b,[n[7]||(n[7]=t("thead",null,[t("tr",null,[t("th",null,"Наименование"),t("th",null,"Описание"),t("th",null,"Создан"),t("th",null,"Дата создания"),t("th",null,"Изменен"),t("th",null,"Дата изменения")])],-1)),t("tbody",null,[(o(!0),l(B,null,V(m(s).elements,r=>(o(),l("tr",{key:r.id},[t("td",null,[u(i,{to:{name:"scheme-update",params:{id:r.id}}},{default:e(()=>[a(d(r.name),1)]),_:2},1032,["to"])]),t("td",null,d(r.description),1),n[3]||(n[3]=t("td",null,null,-1)),n[4]||(n[4]=t("td",null,null,-1)),n[5]||(n[5]=t("td",null,null,-1)),n[6]||(n[6]=t("td",null,null,-1))]))),128))])])):(o(),l("p",w,"Список пуст"))]),_:1})])}}});export{H as default};