import{C as _}from"./ComponentCard-D_QuY9Lo.js";import{e as v,d as h,l as k,z as y,c as m,b as p,F as T,j as b,u as g,o as d,h as C,w as O,_ as S}from"./index-DEZaLq76.js";import{u as x}from"./index-DRKO1u0K.js";import"./axios-CCb-kr4I.js";function j(){const a=v({}),i=async(e,n,o)=>{const c=new RTCPeerConnection({iceServers:[{urls:"stun:stun.l.google.com:19302"}]}),t=Object.keys(o.elements).indexOf(e);if(n[t]){const s=new MediaStream,l=c.addTransceiver("audio",{direction:"sendrecv"}).receiver.track,w=c.addTransceiver("video",{direction:"sendrecv"}).receiver.track;s.addTrack(l),s.addTrack(w),n[t].srcObject=s}return c},r=(e,n=3e3)=>new Promise(o=>{const c=()=>{var t;e.iceGatheringState==="complete"&&o((t=e.localDescription)==null?void 0:t.sdp)};e.addEventListener("icegatheringstatechange",c),e.createOffer().then(t=>e.setLocalDescription(t)),setTimeout(()=>{var t;return o((t=e.localDescription)==null?void 0:t.sdp)},n)});return{connect:async(e,n,o)=>{a.value[e]&&a.value[e].close();const c=await i(e,n,o);a.value[e]=c;const t=await r(c);if(t){const l=await(await fetch(`http://192.168.20.8/oprr/api/webrtc?src=${e}`,{method:"POST",body:t})).text();await c.setRemoteDescription({type:"answer",sdp:l})}},disconnectAll:()=>{Object.values(a.value).forEach(e=>{e&&e.close()}),a.value={}}}}const B=h({__name:"roomView",setup(a){const i=v([]),r=x(),{connect:u,disconnectAll:f}=j();function e(n){return new Promise(o=>setTimeout(o,n))}return k(async()=>{await r.fetchAll();const n=Object.keys(r.elements);for(const o of n)await u(o,i.value,r),await e(1e3)}),y(()=>{f()}),(n,o)=>(d(),m("main",null,[p("section",null,[(d(!0),m(T,null,b(Object.keys(g(r).elements),(c,t)=>(d(),C(_,{key:c,tag:"article"},{default:O(()=>[p("video",{ref_for:!0,ref:s=>{s&&(i.value[t]=s)},autoplay:"",playsinline:"",muted:""},null,512)]),_:2},1024))),128))])]))}}),L=S(B,[["__scopeId","data-v-5d62b810"]]);export{L as default};