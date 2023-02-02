"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[441],{544:(n,e,t)=>{t.d(e,{Z:()=>d});var i=t(81),a=t.n(i),r=t(645),o=t.n(r)()(a());o.push([n.id,':root {\n    --main-blue: #37d2ff;\n    --main-black: #00000F;\n    --main-pink: #a55069;\n    --main-white: #FFFFF0;\n}\n\nhtml {\n    height: 100%;\n    width: 100%;\n    font-size: 2vw;\n    overflow: hidden;\n}\n\nbody {\n    overflow: hidden;\n    width: 100%;\n    min-height: 100%;\n    font-family: \'Roboto\', sans-serif;\n    background: radial-gradient(var(--main-blue), var(--main-white));\n    /* background: radial-gradient(var(--main-black), var(--main-blue)); */\n}\n\n#loadOverlay {\n    display: none;\n    overflow: hidden;\n}\n\n.border {\n    background: var(--main-blue);\n    -webkit-clip-path: inset(0% 0% 0% 0%);\n    clip-path: inset(0% 0% 0% 0%);\n    overflow: hidden;\n    z-index: 5;\n    /* border: 4px solid var(--main-white); */\n}\n\np {\n    color: black;\n}\n\n.container {\n    width: 100%;\n    overflow: hidden;\n    height: 100%;\n    justify-items: center;\n    align-items: center;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 10fr 1fr 4fr;\n    grid-template-areas:\n        "screen screen screen"\n        "textDisplay textDisplay textDisplay"\n        "back play forward";\n}\n\n.back {\n    grid-area: back;\n    z-index: 10;\n    /* border: 4px solid var(--main-white); */\n    width: 100%;\n    text-align: center;\n}\n\n.forward {\n    grid-area: forward;\n    z-index: 10;\n    /* border: 4px solid var(--main-white); */\n    width: 100%;\n    text-align: center;\n}\n\n.forward, .back, .textDisplay, .play {\n    display: none;\n}\n\n.play {\n    grid-area: play;\n    z-index: 10;\n    /* border: 4px solid var(--main-white); */\n    width: 100%;\n    text-align: center;\n}\n\n.textDisplay {\n    grid-area: textDisplay;\n    z-index: 10;\n    animation: slide-left 10s linear infinite;\n    overflow: hidden;\n    text-align: center;\n}\n\n@keyframes slide-left {\n    0% {\n        transform: translate(50%, 0);\n    }\n\n    100% {\n        transform: translate(-50%, 0);\n    }\n}\n\n.screen {\n    grid-area: screen;\n    min-width: 70%;\n    overflow: hidden;\n    min-height: 80%;\n}\n\nbutton {\n    background: var(--main-pink);\n    /* border: 2px solid var(--main-black); */\n}\n\n#UXInstruction {\n    position: absolute;\n    margin: 0;\n    padding: 0;\n    top: 0;\n    /* filter: blur(0); */\n    /* left: 33%; */\n    width: 80vmin;\n    z-index: 1;\n}\n\n#shape1,\n#shape2,\n#shape3,\n#shape4,\n#shape5 {\n    position: absolute;\n    z-index: 10;\n    top: 0;\n    left: 0;\n    /* width: 100%;\n    height: 100%; */\n    transition: 0.22s;\n    transition-property: transform;\n    filter: opacity(0);\n    overflow: hidden;\n}\n\n/* ------------------ Useful ------------- */\n.noselect {\n    -webkit-touch-callout: none;\n    /* iOS Safari */\n    -webkit-user-select: none;\n    /* Safari */\n    -khtml-user-select: none;\n    /* Konqueror HTML */\n    -moz-user-select: none;\n    /* Old versions of Firefox */\n    -ms-user-select: none;\n    /* Internet Explorer/Edge */\n    user-select: none;\n    /* Non-prefixed version, currently */\n    /* supported by Chrome, Edge, Opera and Firefox */\n}\n\n.disableSave {\n    -webkit-user-select: none;\n    -webkit-touch-callout: none;\n    user-select: none;\n}',""]);const d=o},331:(n,e,t)=>{var i=t(379),a=t.n(i),r=t(795),o=t.n(r),d=t(569),s=t.n(d),l=t(565),c=t.n(l),u=t(216),p=t.n(u),h=t(589),m=t.n(h),f=t(544),g={};g.styleTagTransform=m(),g.setAttributes=c(),g.insert=s().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=p(),a()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals;const w=new(window.AudioContext||window.webkitAudioContext),y=document.getElementById("parsingAPath");let b=w.createMediaElementSource(y);const v=new AnalyserNode(w);v.fftSize=4096,v.smoothingTimeConstant=.3;const x=new BiquadFilterNode(w);x.frequency.value=20,x.type="lowpass";const k=v.frequencyBinCount,E=new Uint8Array(k);v.getByteTimeDomainData(E),b.connect(v).connect(w.destination);const $=document.getElementById("playPause");function B(){"suspended"===w.state&&w.resume(),"false"===$.dataset.playing?(y.play(),$.dataset.playing="true"):"true"===$.dataset.playing&&(y.pause(),$.dataset.playing="false")}window.addEventListener("keyup",(n=>{"Space"===n.code&&B()})),y.addEventListener("ended",(()=>{$.dataset.playing="false"}),!1),window.addEventListener("visibilitychange",(n=>{"visible"!=document.visibilityState&&y.pause()}));let I=0,F=0;const S=document.getElementById("mainScreen");S.addEventListener("touchstart",(n=>{I=n.changedTouches[0].screenY})),S.addEventListener("touchend",(n=>{F=n.changedTouches[0].screenY,F+200<I&&B()}));let z,L=0;const A=document.getElementById("mainScreen");z=A.getBoundingClientRect(),L=.25*z.right,console.log(z,L),window.addEventListener("resize",(function(){z=A.getBoundingClientRect(),L=.25*z.right}));let C,D=0,q=!1;function T(n,e){return Math.floor(Math.random()*(e-n+1))+n}window.addEventListener("pointerdown",(function(n){q=!0})),window.addEventListener("pointerup",(function(n){q=!1})),window.addEventListener("pointermove",(function(n){C=n.clientX-100,D=n.clientY-100,C<0&&(C=0),D<0&&(D=0)})),document.getRndInt=T;const O=document.getElementById("shape1"),M=document.getElementById("shape2"),Z=document.getElementById("shape3"),R=document.getElementById("shape4"),N=document.getElementById("shape5"),P=[O,M,Z,R,N];function U(n){n.src=`/media/shapes/shape${T(1,13)}.png`}document.shuffleShape=U,U(O),U(M),U(Z),U(R),U(N);const Y=["","-"];let X,j,H=0,K=0,G=0,J=0,Q=0,V=0,W=[K,G,J,Q,V],_=25;window.requestAnimationFrame((function n(e){if(void 0===X&&(X=e),e!=j){if(v.getByteFrequencyData(E),K>.8*_&&(_=K),K=.1*E.slice(0,10).reduce(((n,e)=>n+e),0),G=.01*E.slice(100,200).reduce(((n,e)=>n+e),0),J=.01*E.slice(600,700).reduce(((n,e)=>n+e),0),Q=.01*E.slice(900,1e3).reduce(((n,e)=>n+e),0),V=.01*E.slice(1200,1300).reduce(((n,e)=>n+e),0),W=[K,G,J,Q,V],P[T(0,P.length-1)].style.filter=`\n                                       opacity(${.5*K}%) \n                                       saturate(${.5*W[T(0,W.length-1)]}%)\n                                       blur(${Math.abs(4*_-4*K)}px)`,!0===q&&"true"==$.dataset.playing)for(var t=0;t<P.length;t++)P[t].style.transform=`rotate(0deg)\n                                             scale(1)\n                                             translate3d(${C}px,${D}px,0px)`,P[t].style.filter=`blur(0px)\n                                          opacity(0.9) \n                                          saturate(${.5*W[t]}%)\n                                          drop-shadow(${K}px ${G}px ${K}px white)`;H>5&&K>.955*_&&!1===q&&(P[T(0,P.length-1)].style.transform=`rotate(${K%360}deg)\n                                                 scale(${.1*T(0,20)})\n                                                 translate3d(${Y[T(0,1)]}${T(0,z.right)}px,${Y[T(0,1)]}${T(0,z.right)}px,0px)`,H=0)}H++,j=e,window.requestAnimationFrame(n)}))}},n=>{n.O(0,[335,738],(()=>(331,n(n.s=331)))),n.O()}]);