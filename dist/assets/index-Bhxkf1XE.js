var u=Object.defineProperty;var a=(s,t,e)=>t in s?u(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var l=(s,t,e)=>a(s,typeof t!="symbol"?t+"":t,e);class c{constructor(...t){l(this,"fields",{});t.forEach(({fieldName:e,rule:r,errorMessage:n})=>{this.fields[e]=this.fields[e]||[],this.fields[e].push({rule:r,errorMessage:n,fieldName:e})})}getValueByPath(t,e){return e.replace(/\[(\d+)]/g,".$1").split(".").reduce((n,i)=>n==null?void 0:n[i],t)}validate(t){return Object.entries(this.fields).reduce((e,[r,n])=>{const i=this.getValueByPath(t,r),o=n.filter(({rule:h})=>!h(i)).map(({errorMessage:h})=>h);return o.length&&(e[r]=o),e},{})}}function f(s){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)}function p(s){return/^\+7\d+$/.test(s)}function d(s,t){return s.length>=t}export{c as P,p as a,f as i,d as m};