import{d as V,c as x,a as o,w as m,q as b,o as g,f as a,u as n,b as s,t as k,p as v,_ as w}from"./index-DEZaLq76.js";import{C as u}from"./ComponentButton-C3meVf2-.js";import{C as y}from"./ComponentCard-D_QuY9Lo.js";import{C as N}from"./ComponentHeading-BwTxAJ3r.js";import{C as d}from"./ComponentInput-CTghgZJM.js";import{s as B}from"./index-CznklluM.js";import{P as S,m as p}from"./index-Bhxkf1XE.js";import{u as q}from"./index-B0JtZy-1.js";import"./index-DTEV5yGJ.js";import"./axios-CCb-kr4I.js";const M=V({__name:"updateView",setup(U){const t=q(),i=b(),f=new S({fieldName:"name",rule:r=>p(r,4),errorMessage:"Обязательно укажите наименование"},{fieldName:"command",rule:r=>p(r,4),errorMessage:"Обязательно укажите команду для запуска диалплана"}),C=()=>{const r=f.validate(t.element);if(Object.keys(r).length!==0){B(r);return}t.update()};return t.fetchOne(+i.params.id),(r,e)=>(g(),x("main",null,[o(N,null,{nav:m(()=>[o(u,{to:{name:"scene"}},{default:m(()=>e[5]||(e[5]=[a("Назад")])),_:1}),o(u,{onClick:e[0]||(e[0]=l=>C())},{default:m(()=>e[6]||(e[6]=[a("Сохранить")])),_:1}),o(u,{onClick:n(t).remove},{default:m(()=>e[7]||(e[7]=[a("Удалить")])),_:1},8,["onClick"])]),default:m(()=>[s("h1",null,[e[8]||(e[8]=a("Редактирование ")),s("span",null,k(n(t).element.name),1)]),e[9]||(e[9]=s("p",null,"Укажите наименование сценария, постарайтесь выбрать короткое и лаконичное наименование сценария",-1))]),_:1}),o(y,{tag:"article"},{default:m(()=>[s("form",{onSubmit:e[4]||(e[4]=v(()=>{},["prevent"]))},[o(d,{type:"text",label:"Наименование",required:"name",modelValue:n(t).element.name,"onUpdate:modelValue":e[1]||(e[1]=l=>n(t).element.name=l)},null,8,["modelValue"]),o(d,{type:"text",label:"Описание",modelValue:n(t).element.description,"onUpdate:modelValue":e[2]||(e[2]=l=>n(t).element.description=l)},null,8,["modelValue"]),o(d,{type:"text",label:"Команда",required:"command",modelValue:n(t).element.command,"onUpdate:modelValue":e[3]||(e[3]=l=>n(t).element.command=l)},null,8,["modelValue"])],32)]),_:1})]))}}),$=w(M,[["__scopeId","data-v-541cd9e2"]]);export{$ as default};