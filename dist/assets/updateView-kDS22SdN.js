import{d as V,c as C,a as n,w as r,q as b,o as x,f as a,u as o,b as s,t as k,p as g,_ as v}from"./index-DEZaLq76.js";import{C as p}from"./ComponentButton-C3meVf2-.js";import{C as w}from"./ComponentCard-D_QuY9Lo.js";import{C as y}from"./ComponentHeading-BwTxAJ3r.js";import{C as u}from"./ComponentInput-CTghgZJM.js";import{s as B}from"./index-CznklluM.js";import{P as N,m as S}from"./index-Bhxkf1XE.js";import{u as U}from"./index-FwF_Cyqq.js";import"./index-DTEV5yGJ.js";import"./axios-CCb-kr4I.js";const M=V({__name:"updateView",setup(q){const t=U(),i=b(),d=new N({fieldName:"name",rule:m=>S(m,4),errorMessage:"Обязательно укажите наименование"}),f=()=>{const m=d.validate(t.element);if(Object.keys(m).length!==0){B(m);return}t.update()};return t.fetchOne(+i.params.id),(m,e)=>(x(),C("main",null,[n(y,null,{nav:r(()=>[n(p,{to:{name:"rack"}},{default:r(()=>e[6]||(e[6]=[a("Назад")])),_:1}),n(p,{onClick:e[0]||(e[0]=l=>f())},{default:r(()=>e[7]||(e[7]=[a("Сохранить")])),_:1}),n(p,{onClick:o(t).remove},{default:r(()=>e[8]||(e[8]=[a("Удалить")])),_:1},8,["onClick"])]),default:r(()=>[s("h1",null,[e[9]||(e[9]=a(" Редактирование ")),s("span",null,k(o(t).element.name),1)]),e[10]||(e[10]=s("p",null,"Укажите краткое наименование телекоммуникационного шкафа, его расположение, количество юнитов.",-1))]),_:1}),n(w,{tag:"section"},{default:r(()=>[s("form",{onSubmit:e[5]||(e[5]=g(()=>{},["prevent"]))},[n(u,{type:"text",label:"Наименование",required:"name",modelValue:o(t).element.name,"onUpdate:modelValue":e[1]||(e[1]=l=>o(t).element.name=l)},null,8,["modelValue"]),n(u,{type:"text",label:"Расположение",modelValue:o(t).element.location,"onUpdate:modelValue":e[2]||(e[2]=l=>o(t).element.location=l)},null,8,["modelValue"]),n(u,{type:"text",label:"Описание",modelValue:o(t).element.description,"onUpdate:modelValue":e[3]||(e[3]=l=>o(t).element.description=l)},null,8,["modelValue"]),n(u,{type:"text",label:"Юниты",modelValue:o(t).element.units,"onUpdate:modelValue":e[4]||(e[4]=l=>o(t).element.units=l),modelModifiers:{number:!0}},null,8,["modelValue"])],32)]),_:1})]))}}),$=v(M,[["__scopeId","data-v-1130a7b1"]]);export{$ as default};