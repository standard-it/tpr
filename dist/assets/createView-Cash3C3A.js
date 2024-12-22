import{d as C,e as b,c as g,b as s,a as m,w as a,o as x,f as u,u as t,p as N}from"./index-DEZaLq76.js";import{C as d}from"./ComponentButton-C3meVf2-.js";import{C as w}from"./ComponentCard-D_QuY9Lo.js";import{C as v}from"./ComponentDropdownList-CakEUtGU.js";import{C as y}from"./ComponentHeading-BwTxAJ3r.js";import{C as r}from"./ComponentInput-CTghgZJM.js";import{s as M}from"./index-CznklluM.js";import{P as U,m as i,i as k,a as B}from"./index-Bhxkf1XE.js";import{u as q}from"./index-CZoH2opx.js";import"./index-DTEV5yGJ.js";import"./axios-CCb-kr4I.js";const A=C({__name:"createView",setup(E){const l=q(),p=b([{id:1,name:"Гость"},{id:2,name:"Оператор"},{id:3,name:"Администратор"},{id:4,name:"Инженер"},{id:5,name:"Разработчик"}]);l.element={access_token:"",description:"",email:"",fullname:"",password:"",permissions_id:1,phone:"",position:"",refresh_token:""};const f=new U({fieldName:"fullname",rule:n=>i(n,12),errorMessage:"Обязательно укажите имя пользователя"},{fieldName:"email",rule:k,errorMessage:"Адрес эл.почты должен быть валидным"},{fieldName:"email",rule:n=>i(n,5),errorMessage:"Обязательно укажите адрес эл.почты пользователя"},{fieldName:"phone",rule:n=>i(n,5),errorMessage:"Обязательно укажите номер телефона пользователя"},{fieldName:"phone",rule:B,errorMessage:"Номер телефона должен начинаться на +7, содержать только цифры"},{fieldName:"phone",rule:n=>i(n,12),errorMessage:"Длинна номера телефона должна быть не менее 11 символов"}),V=()=>{const n=f.validate(l.element);if(Object.keys(n).length!==0){M(n);return}l.save()};return(n,e)=>(x(),g("main",null,[e[13]||(e[13]=s("nav",null,null,-1)),m(y,null,{nav:a(()=>[m(d,{to:{name:"user"}},{default:a(()=>e[9]||(e[9]=[u("Назад")])),_:1}),m(d,{onClick:e[0]||(e[0]=o=>V())},{default:a(()=>e[10]||(e[10]=[u("Сохранить")])),_:1})]),default:a(()=>[e[11]||(e[11]=s("h1",null,"Новая запись",-1)),e[12]||(e[12]=s("p",null,' В этом разделе вы можете создать новую запись пользователя в системе. Пожалуйста, заполните все необходимые поля, такие как ФИО, описание, почта, номер телефона, пароль и должность. Вы также можете выбрать роль пользователя из выпадающего списка. После заполнения всех полей нажмите кнопку "Сохранить", чтобы добавить нового пользователя в систему. ',-1))]),_:1}),m(w,{tag:"article"},{default:a(()=>[s("form",{onSubmit:e[8]||(e[8]=N(()=>{},["prevent"]))},[m(r,{type:"text",label:"ФИО",required:"fullname",modelValue:t(l).element.fullname,"onUpdate:modelValue":e[1]||(e[1]=o=>t(l).element.fullname=o)},null,8,["modelValue"]),m(r,{type:"text",label:"Электронная почта",required:"email",modelValue:t(l).element.email,"onUpdate:modelValue":e[2]||(e[2]=o=>t(l).element.email=o)},null,8,["modelValue"]),m(r,{type:"text",label:"Пароль",modelValue:t(l).element.password,"onUpdate:modelValue":e[3]||(e[3]=o=>t(l).element.password=o)},null,8,["modelValue"]),m(r,{type:"text",label:"Номер телефона",required:"phone",modelValue:t(l).element.phone,"onUpdate:modelValue":e[4]||(e[4]=o=>t(l).element.phone=o)},null,8,["modelValue"]),m(r,{type:"text",label:"Должность",modelValue:t(l).element.position,"onUpdate:modelValue":e[5]||(e[5]=o=>t(l).element.position=o)},null,8,["modelValue"]),m(r,{type:"text",label:"Описание",modelValue:t(l).element.description,"onUpdate:modelValue":e[6]||(e[6]=o=>t(l).element.description=o)},null,8,["modelValue"]),m(v,{label:"Роль",options:p.value.map(o=>({value:o.id,label:o.name})),modelValue:t(l).element.permissions_id,"onUpdate:modelValue":e[7]||(e[7]=o=>t(l).element.permissions_id=o)},null,8,["options","modelValue"])],32)]),_:1})]))}});export{A as default};
