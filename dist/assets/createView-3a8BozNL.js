import{d as f,c as C,a as o,w as r,o as V,f as s,b as a,u as l,p as b}from"./index-DEZaLq76.js";import{C as i}from"./ComponentButton-C3meVf2-.js";import{C as x}from"./ComponentCard-D_QuY9Lo.js";import{C as g}from"./ComponentHeading-BwTxAJ3r.js";import{C as p}from"./ComponentInput-CTghgZJM.js";import{C as v}from"./ComponentFile-DKNAVSG8.js";import{s as w}from"./index-CznklluM.js";import{P as k,m as B}from"./index-Bhxkf1XE.js";import{u as N}from"./index-BegdO8CZ.js";import"./index-DTEV5yGJ.js";import"./axios-CCb-kr4I.js";const L=f({__name:"createView",setup(S){const t=N();t.element={description:"",file:"",name:""};const u=new k({fieldName:"name",rule:n=>B(n,4),errorMessage:"Обязательно укажите наименование"}),d=()=>{const n=u.validate(t.element);if(Object.keys(n).length!==0){w(n);return}t.save()};return(n,e)=>(V(),C("main",null,[o(g,null,{nav:r(()=>[o(i,{to:{name:"scheme"}},{default:r(()=>e[4]||(e[4]=[s("Назад")])),_:1}),o(i,{onClick:e[0]||(e[0]=m=>d())},{default:r(()=>e[5]||(e[5]=[s("Сохранить")])),_:1})]),default:r(()=>[e[6]||(e[6]=a("h1",null,"Новая запись",-1)),e[7]||(e[7]=a("p",null,'Укажите наименование например: "Этаж 1", "Этаж 2", "Основной корпус". Подкрепите файл с планом этажей в формате *.SVG.',-1))]),_:1}),o(x,{tag:"section"},{default:r(()=>[a("form",{onSubmit:e[3]||(e[3]=b(()=>{},["prevent"]))},[o(p,{type:"text",label:"Наименование",required:"name",modelValue:l(t).element.name,"onUpdate:modelValue":e[1]||(e[1]=m=>l(t).element.name=m)},null,8,["modelValue"]),o(p,{type:"text",label:"Описание",modelValue:l(t).element.description,"onUpdate:modelValue":e[2]||(e[2]=m=>l(t).element.description=m)},null,8,["modelValue"]),o(v)],32)]),_:1})]))}});export{L as default};