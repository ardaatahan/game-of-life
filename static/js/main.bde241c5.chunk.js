(this["webpackJsonpgame-of-life"]=this["webpackJsonpgame-of-life"]||[]).push([[0],[,,,,,function(t,n,e){t.exports=e(12)},,,,,function(t,n,e){},function(t,n,e){},function(t,n,e){"use strict";e.r(n);var r=e(0),o=e.n(r),a=e(4),c=e.n(a),i=(e(10),e(1)),u=(e(11),e(2)),l=[[0,1],[0,-1],[1,1],[1,-1],[1,0],[-1,0],[-1,-1],[-1,1]],f=function(){for(var t=[],n=0;n<50;n++)t.push(Array.from(Array(50),(function(){return 0})));return t},s=function(){var t=Object(r.useState)((function(){return f()})),n=Object(i.a)(t,2),e=n[0],a=n[1],c=Object(r.useState)(!1),s=Object(i.a)(c,2),m=s[0],d=s[1],b=Object(r.useRef)(m);b.current=m;var p=Object(r.useCallback)((function(){b.current&&(a((function(t){return Object(u.a)(t,(function(n){for(var e=function(e){for(var r=function(r){var o=0;l.forEach((function(n){var a=Object(i.a)(n,2),c=a[0],u=a[1],l=e+c,f=r+u;l>=0&&l<50&&f>=0&&f<50&&(o+=t[l][f])})),o<2||o>3?n[e][r]=0:t[e][r]||3!==o||(n[e][r]=1)},o=0;o<50;o++)r(o)},r=0;r<50;r++)e(r)}))})),setTimeout(p,100))}),[]);return o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{onClick:function(){d(!m),m||(b.current=!0,p())}},m?"stop":"start"),o.a.createElement("button",{onClick:function(){a(f())}},"clear"),o.a.createElement("button",{onClick:function(){a(function(){for(var t=[],n=0;n<50;n++)t.push(Array.from(Array(50),(function(){return Math.random()>.3?0:1})));return t}())}},"random"),o.a.createElement("div",{className:"App"},o.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(".concat(50,", 20px)")}},e.map((function(t,n){return t.map((function(t,r){return o.a.createElement("div",{key:"".concat(n,"-").concat(r),onClick:function(){a(Object(u.a)(e,(function(t){t[n][r]=e[n][r]?0:1})))},style:{width:20,height:20,backgroundColor:e[n][r]?"black":void 0,border:"solid 1px black"}})}))})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.bde241c5.chunk.js.map