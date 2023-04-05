const t=document.getElementById("startButton"),e=document.getElementById("stopButton");t.onclick=()=>{t.disabled=!0,e.disabled=!1;const o=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3);e.onclick=()=>{clearInterval(o),t.disabled=!1,e.disabled=!0}};
//# sourceMappingURL=01-color-switcher.566a2be6.js.map
