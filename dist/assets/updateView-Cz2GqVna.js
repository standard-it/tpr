import{d as C,c as V,a as o,w as n,q as x,o as b,f as m,u as r,b as s,t as g,p as k,_ as v}from"./index-DEZaLq76.js";import{C as p}from"./ComponentButton-C3meVf2-.js";import{C as w}from"./ComponentCard-D_QuY9Lo.js";import{C as y}from"./ComponentHeading-BwTxAJ3r.js";import{C as u}from"./ComponentInput-CTghgZJM.js";import{s as B}from"./index-CznklluM.js";import{P as N,m as S}from"./index-Bhxkf1XE.js";import{u as q}from"./index-CNpF5jdz.js";import"./index-DTEV5yGJ.js";import"./axios-CCb-kr4I.js";const E=C({__name:"updateView",setup(I){const t=q(),i=x(),d=new N({fieldName:"name",rule:a=>S(a,4),errorMessage:"Обязательно укажите наименование"}),f=()=>{const a=d.validate(t.element);if(Object.keys(a).length!==0){B(a);return}t.update()};return t.fetchOne(+i.params.id),(a,e)=>(b(),V("main",null,[o(y,null,{nav:n(()=>[o(p,{to:{name:"dialplan-action"}},{default:n(()=>e[4]||(e[4]=[m("Назад")])),_:1}),o(p,{onClick:e[0]||(e[0]=l=>f())},{default:n(()=>e[5]||(e[5]=[m("Сохранить")])),_:1}),o(p,{onClick:r(t).remove},{default:n(()=>e[6]||(e[6]=[m("Удалить")])),_:1},8,["onClick"])]),default:n(()=>[s("h1",null,[e[7]||(e[7]=m("Редактирование ")),s("span",null,g(r(t).element.name),1)]),e[8]||(e[8]=s("p",null,"Укажите наименование экшена, постарайтесь выбрать короткое и лаконичное наименование",-1))]),_:1}),o(w,{tag:"article"},{default:n(()=>[s("form",{onSubmit:e[3]||(e[3]=k(()=>{},["prevent"]))},[o(u,{type:"text",label:"Наименование",required:"name",modelValue:r(t).element.name,"onUpdate:modelValue":e[1]||(e[1]=l=>r(t).element.name=l)},null,8,["modelValue"]),o(u,{type:"text",label:"Расширение",modelValue:r(t).element.ext,"onUpdate:modelValue":e[2]||(e[2]=l=>r(t).element.ext=l)},null,8,["modelValue"])],32)]),_:1})]))}}),$=v(E,[["__scopeId","data-v-6e0fb8fe"]]);export{$ as default};