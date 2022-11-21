"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[441],{544:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(81),a=t.n(r),i=t(645),s=t.n(i)()(a());s.push([e.id,'body {\r\n    overflow: hidden;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.container {\r\n    z-index: -40;\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 1fr 20fr;\r\n    gap: 0px 0px;\r\n    grid-auto-flow: row;\r\n    grid-template-areas:\r\n        "transport"\r\n        "screen";\r\n    overflow: hidden;\r\n}\r\n\r\n#shape1 {\r\n    grid-area: screen;\r\n    transition: 1s;\r\n}\r\n\r\n#shape2 {\r\n    grid-area: screen;\r\n    transition: 0.5s;\r\n\r\n}\r\n\r\n#shape3 {\r\n    grid-area: screen;\r\n    transition: 0.1s;\r\n}\r\n\r\n#shape4 {\r\n    grid-area: screen;\r\n    \r\n}\r\n\r\n#shape5 {\r\n    grid-area: screen;\r\n\r\n}\r\n\r\nimage {\r\n    width: 50px;\r\n    height: 50px;\r\n}\r\n\r\n/* #hud {\r\n    color: white;\r\n    z-index: 2;\r\n    border-radius: 48px 0px 58px;\r\n    grid-area: hud;\r\n} */\r\n\r\nbutton {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 1;\r\n}\r\n\r\n.noselect {\r\n    -webkit-touch-callout: none;\r\n    /* iOS Safari */\r\n    -webkit-user-select: none;\r\n    /* Safari */\r\n    -khtml-user-select: none;\r\n    /* Konqueror HTML */\r\n    -moz-user-select: none;\r\n    /* Old versions of Firefox */\r\n    -ms-user-select: none;\r\n    /* Internet Explorer/Edge */\r\n    user-select: none;\r\n    /* Non-prefixed version, currently\r\n                                    supported by Chrome, Edge, Opera and Firefox */\r\n}\r\n\r\n',""]);const o=s},331:(e,n,t)=>{t(640);var r=t(379),a=t.n(r),i=t(795),s=t.n(i),o=t(569),l=t.n(o),d=t(565),c=t.n(d),p=t(216),u=t.n(p),y=t(589),h=t.n(y),g=t(544),f={};f.styleTagTransform=h(),f.setAttributes=c(),f.insert=l().bind(null,"head"),f.domAPI=s(),f.insertStyleElement=u(),a()(g.Z,f),g.Z&&g.Z.locals&&g.Z.locals;const m=new(window.AudioContext||window.webkitAudioContext),w=document.getElementById("oneWayOrAnother"),x=m.createMediaElementSource(w),$=new AnalyserNode(m);$.fftSize=16384,$.smoothingTimeConstant=.9;const b=$.frequencyBinCount,E=new Uint8Array(b);$.getByteTimeDomainData(E),x.connect($).connect(m.destination);const v=document.getElementById("playPause");let S,B;function I(e,n){return Math.floor(Math.random()*(n-e+1))+e}function k(e,n,t){var r=(e-n[0])*(t[1]-t[0])/(n[1]-n[0])+t[0];return Math.min(Math.max(r,t[0]),t[1])}v.addEventListener("click",(()=>{"suspended"===m.state&&m.resume(),"false"===v.dataset.playing?(w.play(),v.dataset.playing="true"):"true"===v.dataset.playing&&(w.pause(),v.dataset.playing="false")}),!1),w.addEventListener("ended",(()=>{v.dataset.playing="false"}),!1),document.addEventListener("pointermove",(function(e){S=e.clientX,B=e.clientY})),window.getRndInt=I;const A=document.getElementById("shape1"),C=document.getElementById("shape2"),M=document.getElementById("shape3"),O=document.getElementById("shape4"),q=document.getElementById("shape5"),z=[A,C,M,O,q];function F(e){e.src=`/media/shapes/shape${I(1,20)}.png`}window.shuffleShape=F,F(A),F(C),F(M),F(O),F(q);let T=0,Z=0,L=0,D=0,X=120;const Y=["","-"];let H,N,P=!0;function W(e,n,t,r){const a=[n,t,r];let i=window.innerWidth,s=window.innerHeight;P&&(e.style.transform=`translateX(${.5*i}px) \n                                 translateY(${.5*s}}px)\n                                 rotate(${I(0,.77*i)}deg)\n                                 scale(${k(a[I(0,a.length)],[0,255],[0,3])})`,e.style.filter="blur(0px)",X=0),P||(e.style.transform=`translateX(${Y[I(0,1)]}${I(0,i)}px) \n                                 translateY(${Y[I(0,1)]}${I(0,s)}px)\n                                 rotate(${I(0,.77*i)}deg)\n                                 scale(${k(a[I(0,a.length)],[0,255],[0,3])})`,e.style.filter=`blur(0px)\n                              drop-shadow(${String(a[I(0,a.length)])}px ${String(a[I(0,a.length)])}px ${String(a[I(0,a.length)])}px white)`,X=0)}W(A,T,Z,L),W(C,T,Z,L),W(M,T,Z,L),W(O,T,Z,L),W(q,T,Z,L),P=!1;let K=0,R=0,U=0,j=0;window.requestAnimationFrame((function e(n){void 0===H&&(H=n),$.getByteFrequencyData(E),T=E.slice(3,6).reduce(((e,n)=>e+n),0)/4,Z=E.slice(200,400).reduce(((e,n)=>e+n),0)/200,L=E.slice(500,600).reduce(((e,n)=>e+n),0)/200,D=E.slice(700,1200).reduce(((e,n)=>e+n),0)/600;for(var t=0;t<z.length;t++)z[t].style.filter=`blur(${String(X)}px)`;0===X&&(X=1),X<500&&(X*=1.1),Z>50?(A.style.filter="opacity(90%)",M.style.filter="opacity(90%)"):(A.style.filter=`opacity(${Z}%) saturate(${Z}%)`,M.style.filter=`opacity(${Z}%) saturate(${Z}%)`),L>50?(C.style.filter="opacity(90%)",q.style.filter="opacity(90%)"):(C.style.filter=`opacity(${L}%) saturate(${L}%)`,q.style.filter=`opacity(${L}%) saturate(${L}%)`),O.style.filter=D>50?"opacity(90%)":`opacity(${D}%) invert(${D}%)`,n!=N&&(T>10&&K>20&&(W(A,T,Z,L),K=0),L>20&&R>30&&(W(C,T,Z,L),R=0),T>30&&U>10&&(W(M,T,Z,L),U=0),T>30&&j>15&&(W(O,T,Z,L),W(q,T,Z,L),j=0)),K++,R++,U++,j++,N=n,window.requestAnimationFrame(e)}))}},e=>{e.O(0,[335,738,640],(()=>(331,e(e.s=331)))),e.O()}]);