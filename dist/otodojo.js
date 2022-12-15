"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[441],{544:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),a=t.n(r),i=t(645),o=t.n(i)()(a());o.push([n.id,'body {\n    overflow: hidden;\n    width: 100%;\n    height: 100%;\n    background: black;\n}\n\n#loadOverlay{display: none;}\n\n.border {\n    background: black;\n    -webkit-clip-path: inset(0% 0% 0% 0%);\n    clip-path: inset(0% 0% 0% 0%);\n    overflow: hidden;\n    z-index: 5;\n    border: 4px solid #FFFFFF;\n}\n\np {\n    color: white;\n}\n\n.container {\n    width: 100%;\n    height: 100%;\n    justify-items: center;\n    align-items: center;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 40fr 1fr 5fr;\n    gap: 8px 8px;\n    grid-template-areas:\n        "screen screen screen"\n        ". textDisplay ."\n        "back play forward";\n}\n\n.back {\n    grid-area: back;\n    z-index: 10;\n    border: 4px solid #FFFFFF;\n    width: 100%;\n    text-align: center;\n}\n\n.forward {\n    grid-area: forward;\n    z-index: 10;\n    border: 4px solid #FFFFFF;\n    width: 100%;\n    text-align: center;\n}\n\n.play {\n    grid-area: play;\n    z-index: 10;\n    border: 4px solid #FFFFFF;\n    width: 100%;\n    text-align: center;\n}\n\n.textDisplay {\n    grid-area: textDisplay;\n    z-index: 10;\n    animation: slide-left 10s linear infinite;\n    overflow: hidden;\n    text-align: center;\n}\n\n@keyframes slide-left {\n    0% {\n        transform: translate(50%, 0);\n    }\n    100% {\n        transform: translate(-50%, 0);\n    }\n}\n\n.screen {\n    grid-area: screen;\n    width: 100%;\n    height: 100%;\n}\n\nbutton {\n    background: rgb(50, 50, 50);\n    border: 2px solid #FFFFFF;\n}\n\n#shape1, #shape2, #shape3, #shape4, #shape5 {\n    position: absolute;\n    z-index: 10;\n    top: 0;\n    left: 0;\n    transform-style: preserve-3d;\n}\n\n/* ------------------ Useful ------------- */\n.noselect {\n    -webkit-touch-callout: none;\n    /* iOS Safari */\n    -webkit-user-select: none;\n    /* Safari */\n    -khtml-user-select: none;\n    /* Konqueror HTML */\n    -moz-user-select: none;\n    /* Old versions of Firefox */\n    -ms-user-select: none;\n    /* Internet Explorer/Edge */\n    user-select: none;\n    /* Non-prefixed version, currently */\n    /* supported by Chrome, Edge, Opera and Firefox */\n}\n\n.disableSave {\n    -webkit-user-select: none;\n    -webkit-touch-callout: none;\n    user-select: none;\n}',""]);const s=o},331:(n,e,t)=>{t(640);var r=t(379),a=t.n(r),i=t(795),o=t.n(i),s=t(569),d=t.n(s),l=t(565),c=t.n(l),p=t(216),u=t.n(p),g=t(589),h=t.n(g),m=t(544),f={};f.styleTagTransform=h(),f.setAttributes=c(),f.insert=d().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=u(),a()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const y=new(window.AudioContext||window.webkitAudioContext),w=document.getElementById("parsingAPath");let x=y.createMediaElementSource(w);const b=new AnalyserNode(y);b.fftSize=16384,b.smoothingTimeConstant=.9;const F=b.frequencyBinCount,$=new Uint8Array(F);b.getByteTimeDomainData($),x.connect(b).connect(y.destination);const k=document.getElementById("playPause");function v(){"suspended"===y.state&&y.resume(),"false"===k.dataset.playing?(w.play(),k.dataset.playing="true"):"true"===k.dataset.playing&&(w.pause(),k.dataset.playing="false")}document.addEventListener("keyup",(n=>{"Space"===n.code&&v()})),k.addEventListener("click",(()=>{v()}),!1),w.addEventListener("ended",(()=>{k.dataset.playing="false"}),!1);let E,S=0,B=!1;function I(n,e){return Math.floor(Math.random()*(e-n+1))+n}document.addEventListener("pointerdown",(function(n){B=!0})),document.addEventListener("pointerup",(function(n){B=!1})),document.addEventListener("pointermove",(function(n){E=n.clientX-100,S=n.clientY-100,E<0&&(E=0),S<0&&(S=0)})),window.getRndInt=I;const A=document.getElementById("shape1"),z=document.getElementById("shape2"),C=document.getElementById("shape3"),L=document.getElementById("shape4"),D=document.getElementById("shape5"),O=[A,z,C,L,D];function q(n){n.src=`/media/shapes/shape${I(1,20)}.png`}window.shuffleShape=q,q(A),q(z),q(C),q(L),q(D);let M=0,T=0,Z=0;const P=["","-"];let N=0;const R=document.getElementById("mainScreen");let U,j,H,K=0,X=[M,T,Z];function Y(n){U=R.getBoundingClientRect(),K=.25*U.right,!0===B&&(n.style.transform=`rotate(0deg)\n                                 scale(1)\n                                 translate3d(${E}px,${S}px,0px)`,n.style.filter=`blur(0px)\n                              drop-shadow(${String(X[I(0,X.length)])}px ${String(X[I(0,X.length)])}px ${String(X[I(0,X.length)])}px white)`),!1===B&&(N=`${P[I(0,1)]}${I(0,.2*U.bottom)}`,n.style.transform=`rotate(${I(0,360)}deg)\n                                perspective(${I(0,100)}px)\n                                translate3d(${P[I(0,1)]}${I(K,U.right)}px,${P[I(0,1)]}${I(U.bottom,U.top)}px, ${N}px)\n                                scale(${.05*T})\n                               `,G(n))}function G(n){n.style.filter=`blur(${Math.abs(.5*N)}px)\n                              drop-shadow(${String(X[I(0,X.length)])}px ${String(X[I(0,X.length)])}px ${String(X[I(0,X.length)])}px white)\n                              opacity(${M}%) \n                              saturate(${M}%)`}Y(A),Y(z),Y(C),Y(L),Y(D);let J=0,Q=0,V=0,W=0;window.requestAnimationFrame((function n(e){if(void 0===j&&(j=e),e!=H){b.getByteFrequencyData($),M=$.slice(3,6).reduce(((n,e)=>n+e),0)/4,T=$.slice(200,400).reduce(((n,e)=>n+e),0)/200,Z=$.slice(500,600).reduce(((n,e)=>n+e),0)/200;for(var t=0;t<O.length;t++)G(O[t]),O[t].style.transition=`all ${M*I(0,7)*.01}s`;M>10&&J>20&&(Y(A),J=0),M>20&&Q>30&&(Y(z),Q=0),M>30&&V>10&&(Y(C),V=0),M>30&&W>15&&(Y(L),Y(D),W=0)}J++,Q++,V++,W++,H=e,window.requestAnimationFrame(n)}))}},n=>{n.O(0,[335,738,640],(()=>(331,n(n.s=331)))),n.O()}]);