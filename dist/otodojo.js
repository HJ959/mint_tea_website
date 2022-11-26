"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[441],{544:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),a=t.n(r),i=t(645),o=t.n(i)()(a());o.push([e.id,'body {\r\n    overflow: hidden;\r\n    width: 100%;\r\n    height: 100%;\r\n    /* background-color: rgb(15, 15, 15); */\r\n    background: black;\r\n    background: -moz-radial-gradient(center, black 0%, rgb(10, 10, 10) 50%, rgb(25, 25, 25) 100%);\r\n    background: -webkit-radial-gradient(center, black 0%, rgb(10, 10, 10) 50%, rgb(25, 25, 25) 100%);\r\n    background: radial-gradient(ellipse at center, black 0%, rgb(10, 10, 10) 50%, rgb(25, 25, 25) 100%);\r\n}\r\n\r\n.border {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    left: 0;\r\n    background: black;\r\n    -webkit-clip-path: inset(2% 2% 15% 2%);\r\n    clip-path: inset(2% 2% 15% 2%);\r\n    overflow: hidden;\r\n    z-index: 5;\r\n}\r\n\r\nimage {\r\n    position: absolute;\r\n    left: 50%;\r\n    transform-style: preserve-3d;\r\n}\r\n\r\n.container {\r\n    justify-items: center;\r\n  align-items: center;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: grid;\r\n    grid-auto-columns: 1fr;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    grid-template-rows: 13fr 1fr 3fr;\r\n    gap: 0px 0px;\r\n    grid-template-areas:\r\n        "screen screen screen"\r\n        "textDisplay textDisplay textDisplay"\r\n        "back play forward";\r\n}\r\n\r\n.back {\r\n    grid-area: back;\r\n}\r\n\r\n.forward {\r\n    grid-area: forward;\r\n}\r\n\r\n.play {\r\n    grid-area: play;\r\n    z-index: 10;\r\n}\r\n\r\n.textDisplay {\r\n    grid-area: textDisplay;\r\n}\r\n\r\n.screen {\r\n    grid-area: screen;\r\n}\r\n\r\n/* ------------------ Useful ------------- */\r\n.noselect {\r\n    -webkit-touch-callout: none;\r\n    /* iOS Safari */\r\n    -webkit-user-select: none;\r\n    /* Safari */\r\n    -khtml-user-select: none;\r\n    /* Konqueror HTML */\r\n    -moz-user-select: none;\r\n    /* Old versions of Firefox */\r\n    -ms-user-select: none;\r\n    /* Internet Explorer/Edge */\r\n    user-select: none;\r\n    /* Non-prefixed version, currently */\r\n    /* supported by Chrome, Edge, Opera and Firefox */\r\n}\r\n\r\n.disableSave {\r\n    -webkit-user-select: none;\r\n    -webkit-touch-callout: none;\r\n    user-select: none;\r\n}',""]);const s=o},331:(e,n,t)=>{t(640);var r=t(379),a=t.n(r),i=t(795),o=t.n(i),s=t(569),l=t.n(s),d=t(565),c=t.n(d),p=t(216),u=t.n(p),g=t(589),y=t.n(g),f=t(544),m={};m.styleTagTransform=y(),m.setAttributes=c(),m.insert=l().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=u(),a()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const h=new(window.AudioContext||window.webkitAudioContext),b=document.getElementById("oneWayOrAnother"),w=h.createMediaElementSource(b),x=new AnalyserNode(h);x.fftSize=16384,x.smoothingTimeConstant=.9;const k=x.frequencyBinCount,$=new Uint8Array(k);x.getByteTimeDomainData($),w.connect(x).connect(h.destination);const v=document.getElementById("playPause");function E(){"suspended"===h.state&&h.resume(),"false"===v.dataset.playing?(b.play(),v.dataset.playing="true"):"true"===v.dataset.playing&&(b.pause(),v.dataset.playing="false")}document.addEventListener("keyup",(e=>{"Space"===e.code&&E()})),v.addEventListener("click",(()=>{E()}),!1),b.addEventListener("ended",(()=>{v.dataset.playing="false"}),!1);let S,B=0,I=!1;function A(e,n){return Math.floor(Math.random()*(n-e+1))+e}document.addEventListener("pointerdown",(function(e){I=!0})),document.addEventListener("pointerup",(function(e){I=!1})),document.addEventListener("pointermove",(function(e){S=e.clientX-100,B=e.clientY-100,S<0&&(S=0),B<0&&(B=0)})),window.getRndInt=A;const C=document.getElementById("shape1"),D=document.getElementById("shape2"),L=document.getElementById("shape3"),M=document.getElementById("shape4"),O=document.getElementById("shape5"),Z=[C,D,L,M,O];function q(e){e.src=`/media/shapes/shape${A(1,20)}.png`}window.shuffleShape=q,q(C),q(D),q(L),q(M),q(O);let z=0,F=0,T=0,N=0,P=120;const R=["Y","X","Z"];let U=!0;const X=document.getElementById("mainScreen");function Y(e,n,t,r){var a=X.getBoundingClientRect();console.log(a.top,a.right,a.bottom,a.left);const i=[n,t,r];var o,s,l,d;!0===I&&(e.style.transform=`rotate(0deg)\n                                 translate3d(${S}px, ${B}px, ${S/B}px)\n                                 perspective(${S/B}px)\n                                `,e.style.filter=`blur(0px)\n                              drop-shadow(${String(i[A(0,i.length)])}px ${String(i[A(0,i.length)])}px ${String(i[A(0,i.length)])}px white)`,P=0),!1===I&&(e.style.transform=`rotate${R[A(0,2)]}(${o=i[A(0,i.length)],s=[0,255],l=[0,720],d=(o-s[0])*(l[1]-l[0])/(s[1]-s[0])+l[0],Math.min(Math.max(d,l[0]),l[1])}deg)\n                                translate3d(${A(a.left,a.right)}px,${A(a.bottom,a.top)}px, 0px)\n                                perspective(100px)\n                               `,e.style.filter=`blur(0px)\n                              drop-shadow(${String(i[A(0,i.length)])}px ${String(i[A(0,i.length)])}px ${String(i[A(0,i.length)])}px white)`,P=0)}let j,H;Y(C,z,F,T),Y(D,z,F,T),Y(L,z,F,T),Y(M,z,F,T),Y(O,z,F,T),U=!1;let K=0,W=0,G=0,J=0;window.requestAnimationFrame((function e(n){void 0===j&&(j=n),x.getByteFrequencyData($),z=$.slice(3,6).reduce(((e,n)=>e+n),0)/4,F=$.slice(200,400).reduce(((e,n)=>e+n),0)/200,T=$.slice(500,600).reduce(((e,n)=>e+n),0)/200,N=$.slice(700,1200).reduce(((e,n)=>e+n),0)/600;for(var t=0;t<Z.length;t++)Z[t].style.filter=`blur(${String(P)}px)`;0===P&&(P=1),P<500&&(P*=1.1),z>150?(C.style.filter="opacity(90%)",L.style.filter="opacity(90%)"):(C.style.filter=`opacity(${z}%) saturate(${z}%)`,C.style.transition=z*A(0,10)*.01+"s",L.style.filter=`opacity(${z}%) saturate(${z}%)`,L.style.transition=z*A(0,10)*.01+"s"),z>150?(D.style.filter="opacity(90%)",O.style.filter="opacity(90%)"):(D.style.filter=`opacity(${z}%) saturate(${z}%)`,D.style.transition=z*A(0,10)*.01+"s",O.style.filter=`opacity(${z}%) saturate(${z}%)`,O.style.transition=z*A(0,10)*.01+"s"),z>150?M.style.filter="opacity(90%)":(M.style.filter=`opacity(${z}%)`,M.style.transition=z*A(0,10)*.01+"s"),n!=H&&(z>10&&K>20&&(Y(C,z,F,T),K=0),T>20&&W>30&&(Y(D,z,F,T),W=0),z>30&&G>10&&(Y(L,z,F,T),G=0),z>30&&J>15&&(Y(M,z,F,T),Y(O,z,F,T),J=0)),K++,W++,G++,J++,H=n,window.requestAnimationFrame(e)}))}},e=>{e.O(0,[335,738,640],(()=>(331,e(e.s=331)))),e.O()}]);