import{d as V,c as C,b as u,a as r,w as m,o as b,f as s,u as o,p as x}from"./index-DEZaLq76.js";import{C as p}from"./ComponentButton-C3meVf2-.js";import{C as g}from"./ComponentCard-D_QuY9Lo.js";import{C as N}from"./ComponentHeading-BwTxAJ3r.js";import{C as a}from"./ComponentInput-CTghgZJM.js";import{s as v}from"./index-CznklluM.js";import{P as y,m as i,i as w}from"./index-Bhxkf1XE.js";import{u as M}from"./index-BzCdFny3.js";import"./index-DTEV5yGJ.js";import"./axios-CCb-kr4I.js";const O=V({__name:"createView",setup(U){const l=M();l.element={description:"",fullname:"",email:"",phone:"+7",position:""};const d=new y({fieldName:"fullname",rule:n=>i(n,4),errorMessage:"Обязательно укажите имя пользователя или ЭОС"},{fieldName:"email",rule:w,errorMessage:"Адрес эл.почты должен быть валидным"},{fieldName:"email",rule:n=>i(n,5),errorMessage:"Обязательно укажите адрес эл.почты пользователя"},{fieldName:"phone",rule:n=>i(n,3),errorMessage:"Обязательно укажите номер телефона пользователя"}),f=()=>{const n=d.validate(l.element);if(Object.keys(n).length!==0){v(n);return}l.save()};return(n,e)=>(b(),C("main",null,[e[11]||(e[11]=u("nav",null,null,-1)),r(N,null,{nav:m(()=>[r(p,{to:{name:"user-profile"}},{default:m(()=>e[7]||(e[7]=[s("Назад")])),_:1}),r(p,{onClick:e[0]||(e[0]=t=>f())},{default:m(()=>e[8]||(e[8]=[s("Сохранить")])),_:1})]),default:m(()=>[e[9]||(e[9]=u("h1",null,"Новая запись",-1)),e[10]||(e[10]=u("p",null," Заполните все поля. Обязательные поля ФИО или ЭОС и телефоны. ",-1))]),_:1}),r(g,{tag:"article"},{default:m(()=>[u("form",{onSubmit:e[6]||(e[6]=x(()=>{},["prevent"]))},[r(a,{type:"text",label:"ФИО или ЭОС",required:"fullname",modelValue:o(l).element.fullname,"onUpdate:modelValue":e[1]||(e[1]=t=>o(l).element.fullname=t)},null,8,["modelValue"]),r(a,{type:"text",label:"Электронная почта",required:"email",modelValue:o(l).element.email,"onUpdate:modelValue":e[2]||(e[2]=t=>o(l).element.email=t)},null,8,["modelValue"]),r(a,{type:"text",label:"Номер телефона",required:"phone",modelValue:o(l).element.phone,"onUpdate:modelValue":e[3]||(e[3]=t=>o(l).element.phone=t)},null,8,["modelValue"]),r(a,{type:"text",label:"Должность",modelValue:o(l).element.position,"onUpdate:modelValue":e[4]||(e[4]=t=>o(l).element.position=t)},null,8,["modelValue"]),r(a,{type:"text",label:"Описание",modelValue:o(l).element.description,"onUpdate:modelValue":e[5]||(e[5]=t=>o(l).element.description=t)},null,8,["modelValue"])],32)]),_:1})]))}});export{O as default};